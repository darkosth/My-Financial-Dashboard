import "server-only";

import { LearningRecordKind, type Template } from "@prisma/client";
import { addDays } from "date-fns";
import { getCalendarDateKey, parseDateOnlyString } from "@/lib/calendarDate";
import {
  buildLearningSuggestion,
  normalizeLearningText,
  type LearningConfirmationSignal,
  type LearningExpenseCandidate,
} from "@/lib/learningMatcher";
import { readLearningSyncState, readLearningTransaction, toLearningJson } from "@/lib/learningStore";
import type { LearningTransactionPayload } from "@/lib/learningTypes";
import prisma from "@/lib/prisma";
import {
  getProjectionWeekInterval,
  getProjectionWeekStart,
  getTemplateCycleReference,
  getTemplateOccurrenceInInterval,
} from "@/lib/waterfallCalculations";

const toScheduledPayment = (template: Template) => ({
  amount: template.amountCents / 100,
  category: template.category,
  dayOfMonth: template.dayOfMonth,
  frequency: template.frequency,
  id: template.id,
  lastPaidAt: template.lastPaidAt,
  name: template.name,
});

export const resolveLearningWeekStart = (value?: string | null) => {
  const requestedDate = parseDateOnlyString(value);
  return getProjectionWeekStart(requestedDate ?? new Date());
};

export const getLearningExpenseCandidates = (
  templates: Template[],
  referenceDate: Date | string,
): LearningExpenseCandidate[] => {
  const interval = getProjectionWeekInterval(referenceDate);

  return templates.flatMap((template) => {
    const scheduled = toScheduledPayment(template);
    const occurrenceDate = getTemplateOccurrenceInInterval(scheduled, interval);
    if (!occurrenceDate) return [];

    return [{
      amountCents: template.amountCents,
      category: template.category,
      cycleReference: getCalendarDateKey(getTemplateCycleReference(scheduled, occurrenceDate)),
      name: template.name,
      occurrenceDate: getCalendarDateKey(occurrenceDate),
      templateId: template.id,
    }];
  });
};

const getConfirmationSignals = (transactions: LearningTransactionPayload[]): LearningConfirmationSignal[] =>
  transactions.flatMap((transaction) => {
    const review = transaction.review;
    if (!review?.selectedTemplateId || review.outcome === "IGNORED") return [];

    return [{
      accountId: transaction.accountId,
      merchantKey: normalizeLearningText(transaction.merchantName || transaction.name),
      templateId: review.selectedTemplateId,
    }];
  });

export const refreshLearningSuggestionsForWorkspace = async (workspaceId: string) => {
  const [records, templates] = await Promise.all([
    prisma.learningRecord.findMany({
      where: { kind: LearningRecordKind.TRANSACTION, workspaceId },
      orderBy: { createdAt: "asc" },
    }),
    prisma.template.findMany({ where: { workspaceId }, orderBy: { createdAt: "asc" } }),
  ]);
  const transactions = records.flatMap((record) => {
    const transaction = readLearningTransaction(record.payload);
    return transaction ? [{ record, transaction }] : [];
  });
  const confirmations = getConfirmationSignals(transactions.map(({ transaction }) => transaction));

  const updates = transactions
    .filter(({ transaction }) => !transaction.review)
    .map(({ record, transaction }) => {
        const candidates = getLearningExpenseCandidates(
          templates,
          parseDateOnlyString(transaction.authorizedDate ?? transaction.date) ?? new Date(),
        );
        const suggestion = buildLearningSuggestion({ candidates, confirmations, transaction });

        return prisma.learningRecord.update({
          where: { id: record.id },
          data: {
            payload: toLearningJson({ ...transaction, suggestion }),
          },
        });
      });

  if (updates.length > 0) {
    await prisma.$transaction(updates);
  }
};

export type LearningPageData = Awaited<ReturnType<typeof loadLearningPageData>>;

export const loadLearningPageData = async (workspaceId: string, requestedWeek?: string | null) => {
  const weekStart = resolveLearningWeekStart(requestedWeek);
  const weekEnd = addDays(weekStart, 6);
  const [records, templates, remoteAccounts] = await Promise.all([
    prisma.learningRecord.findMany({
      where: { workspaceId },
      include: {
        plaidItem: { select: { institutionName: true } },
      },
      orderBy: { updatedAt: "desc" },
    }),
    prisma.template.findMany({ where: { workspaceId }, orderBy: { name: "asc" } }),
    prisma.plaidRemoteAccount.findMany({
      where: { workspaceId },
      select: { name: true, plaidAccountId: true },
    }),
  ]);
  const accountNames = new Map(remoteAccounts.map((account) => [account.plaidAccountId, account.name]));
  const expenses = getLearningExpenseCandidates(templates, weekStart);
  const syncStates = records.flatMap((record) => {
    if (record.kind !== LearningRecordKind.SYNC_STATE) return [];
    const state = readLearningSyncState(record.payload);
    return state ? [state] : [];
  });
  const transactions = records.flatMap((record) => {
    if (record.kind !== LearningRecordKind.TRANSACTION) return [];
    const transaction = readLearningTransaction(record.payload);
    if (!transaction || transaction.removedAt || transaction.amountCents <= 0) return [];

    const transactionDate = transaction.authorizedDate ?? transaction.date;
    if (transactionDate < getCalendarDateKey(weekStart) || transactionDate > getCalendarDateKey(weekEnd)) return [];

    return [{
      ...transaction,
      accountName: accountNames.get(transaction.accountId) ?? "Cuenta bancaria",
      institutionName: record.plaidItem.institutionName ?? "Banco",
      plaidItemId: record.plaidItemId,
    }];
  });
  const reviewedCount = transactions.filter((transaction) => transaction.review).length;

  return {
    expenses,
    lastSyncedAt: syncStates
      .map((state) => state.lastSyncedAt)
      .filter((value): value is string => !!value)
      .sort()
      .at(-1) ?? null,
    nextWeek: getCalendarDateKey(addDays(weekStart, 7)),
    previousWeek: getCalendarDateKey(addDays(weekStart, -7)),
    reviewedCount,
    transactions: transactions.sort((left, right) => right.date.localeCompare(left.date) || left.name.localeCompare(right.name)),
    weekEnd: getCalendarDateKey(weekEnd),
    weekStart: getCalendarDateKey(weekStart),
  };
};
