import prisma from "@/lib/prisma";
import { readLearningTransaction } from "@/lib/learningStore";
import { getConfirmationSignals, getRejectionSignals } from "@/lib/learningData";
import { eligibleManualReplacement } from "./replacement";
import { resolveFinancePeriod } from "./periods";
import { rankFinanceOccurrences } from "./matching";
import {
  getLearningCandidateForTransaction,
  getLearningPaymentCatalog,
} from "@/lib/learningMatcher";
import { seedCategories } from "./categories";
import { ingestLearningRecordsForWorkspace } from "./movements";
import { paidFor } from "./reconciliation";
import { thursday } from "./core";
import type { FinanceWorkspaceData, Movement, Occurrence } from "./uiTypes";
const key = (date: Date) => date.toISOString().slice(0, 10);
export async function getFinanceCompatibility(workspaceId: string) {
  const [rows, cash] = await Promise.all([
    prisma.financeOccurrence.findMany({ where: { workspaceId } }),
    prisma.financeCash.findUnique({ where: { workspaceId } }),
  ]);
  const occurrences = await Promise.all(
    rows.map(async (row) => ({
      id: row.id,
      targetId: row.targetId,
      cycleReference: key(row.cycleReference),
      weekStart: key(row.weekStart),
      expectedCents: row.expectedCents,
      closure: row.closure as Occurrence["closure"],
      paidCents: await paidFor(prisma, workspaceId, row),
    })),
  );
  return { occurrences, cashBalanceCents: cash?.balanceCents ?? 0 };
}
export async function loadFinanceWorkspace(
  workspaceId: string,
): Promise<FinanceWorkspaceData> {
  await seedCategories(workspaceId);
  await ingestLearningRecordsForWorkspace(workspaceId);
  const [
    movements,
    categories,
    rows,
    cash,
    learningRecords,
    accounts,
    transfers,
    history,
    cardsHistory,
    templates,
    cards,
    pending,
  ] = await Promise.all([
    prisma.financialMovement.findMany({
      where: { workspaceId },
      orderBy: { date: "desc" },
      include: {
        reconciliations: {
          where: { reversedAt: null },
          include: { occurrence: true },
        },
      },
    }),
    prisma.financeCategory.findMany({
      where: { workspaceId },
      include: { subcategories: { orderBy: { name: "asc" } } },
      orderBy: { name: "asc" },
    }),
    prisma.financeOccurrence.findMany({
      where: { workspaceId },
      orderBy: { cycleReference: "desc" },
    }),
    prisma.financeCash.findUnique({ where: { workspaceId } }),
    prisma.learningRecord.findMany({ where: { workspaceId, kind: "TRANSACTION" } }),
    prisma.account.findMany({ where: { workspaceId } }),
    prisma.financeTransfer.findMany({ where: { workspaceId } }),
    prisma.history.findMany({
      where: { workspaceId },
      orderBy: { datePaid: "desc" },
    }),
    prisma.creditCardPaymentHistory.findMany({
      where: { workspaceId },
      orderBy: { datePaid: "desc" },
    }),
    prisma.template.findMany({ where: { workspaceId } }),
    prisma.creditCard.findMany({ where: { workspaceId } }),
    prisma.pendingExpense.findMany({ where: { workspaceId } }),
  ]);
  const catalog = getLearningPaymentCatalog({ templates, creditCards: cards });
  const transactions = learningRecords.flatMap(r => { const t = readLearningTransaction(r.payload); return t && !t.removedAt ? [t] : []; });
  const confirmations = getConfirmationSignals(transactions);
  const rejections = getRejectionSignals(transactions);
  const occurrences: Occurrence[] = await Promise.all(
    rows.map(async (row) => ({
      id: row.id,
      targetId: row.targetId,
      name: row.name,
      categoryLabel: catalog.find(item => item.targetId === row.targetId)?.category,
      occurrenceDate: (() => { const item = catalog.find(item => item.targetId === row.targetId); return item ? resolveFinancePeriod(item, key(row.cycleReference))?.occurrenceDate : key(row.cycleReference); })(),
      cycleReference: key(row.cycleReference),
      weekStart: key(row.weekStart),
      expectedCents: row.expectedCents,
      paidCents: await paidFor(prisma, workspaceId, row),
      closure: row.closure as Occurrence["closure"],
      currency: row.currency,
    })),
  );
  for (let offset = -52; offset <= 8; offset++) {
    const date = thursday(new Date());
    date.setUTCDate(date.getUTCDate() + offset * 7);
    for (const item of catalog) {
      const candidate = getLearningCandidateForTransaction(item, key(date));
      if (
        !candidate ||
        occurrences.some(
          (o) =>
            o.targetId === item.targetId &&
            o.cycleReference === candidate.cycleReference,
        )
      )
        continue;
      const payments =
        item.kind === "credit-card"
          ? cardsHistory.filter(
              (h) => h.creditCardId === item.targetId.slice(12),
            )
          : history.filter((h) => h.templateId === item.targetId);
      occurrences.push({
        id: `new:${item.targetId}:${candidate.cycleReference}`,
        targetId: item.targetId,
        name: item.name,
        categoryLabel: item.category,
        cycleReference: candidate.cycleReference,
        occurrenceDate: candidate.occurrenceDate,
        weekStart: key(
          thursday(new Date(candidate.occurrenceDate + "T12:00:00Z")),
        ),
        expectedCents: item.amountCents,
        paidCents: payments
          .filter((h) => key(h.cycleReference) === candidate.cycleReference)
          .reduce((sum, h) => sum + h.amountPaidCents, 0),
        closure: "OPEN",
        currency: "USD",
      });
    }
  }
  for (const row of pending) {
    const targetId = `pending:${row.id}`;
    if (!occurrences.some((o) => o.targetId === targetId))
      occurrences.push({
        id: `new:${targetId}:${key(row.createdAt)}`,
        targetId,
        name: row.description ?? "Gasto puntual",
        cycleReference: key(row.createdAt),
        weekStart: key(thursday(row.createdAt)),
        expectedCents: row.amountCents,
        paidCents: 0,
        closure: "OPEN",
        currency: "USD",
      });
  }
  const linked = new Set(
    movements
      .filter((m) => m.source === "BANK")
      .flatMap((m) => m.reconciliations.map((r) => r.historyId)),
  );
  return {
    movements: movements.map((row) => ({
      id: row.id,
      bankKey: row.externalKey,
      replacesManualPayment: !!row.replacedManualState,
      replacementCandidates: row.status === "POSTED" && !row.replacedManualState && !row.reconciliations.length && !row.reversedAt ? movements.filter(manual => eligibleManualReplacement(row, manual)).map(manual => ({ id: manual.id, name: manual.name, amountCents: manual.amountCents, date: key(manual.date), targetId: manual.reconciliations[0]?.occurrence.targetId, cycleReference: manual.reconciliations[0] ? key(manual.reconciliations[0].occurrence.cycleReference) : undefined })) : [],
      rankedOccurrenceIds: rankFinanceOccurrences(readLearningTransaction(row.bankPayload) ?? { accountId: row.accountId ?? "", amountCents: row.amountCents, authorizedDate: null, categoryDetailed: null, categoryPrimary: null, date: key(row.date), isoCurrencyCode: row.currency, merchantName: null, name: row.name, pending: row.status === "PENDING", pendingTransactionId: null, removedAt: null, transactionId: row.id }, occurrences, confirmations, rejections),
      name: row.name,
      amountCents: row.amountCents,
      currency: row.currency,
      date: key(row.date),
      source: row.source as Movement["source"],
      status: row.status as Movement["status"],
      kind: row.kind as Movement["kind"],
      categoryId: row.categoryId,
      subcategoryId: row.subcategoryId,
      accountId: row.accountId,
      accountName:
        accounts.find((a) => a.id === row.accountId)?.name ??
        (row.source === "CREDIT"
          ? "Tarjeta de crédito"
          : row.source === "DEBIT"
            ? "Tarjeta de débito"
            : "Efectivo"),
      needsReview: row.needsReview,
      reversedAt: row.reversedAt?.toISOString() ?? null,
      transferId:
        transfers.find(
          (t) => t.outgoingId === row.id || t.incomingId === row.id,
        )?.id ?? null,
      reconciliation: row.reconciliations[0]
        ? {
            id: row.reconciliations[0].id,
            occurrenceId: row.reconciliations[0].occurrenceId,
          }
        : null,
    })),
    categories: categories.map((c) => ({
      id: c.id,
      name: c.name,
      archived: c.archived,
      subcategories: c.subcategories.map((s) => ({
        id: s.id,
        name: s.name,
        archived: s.archived,
      })),
    })),
    occurrences,
    cash: { balanceCents: cash?.balanceCents ?? 0 },
    events: [],
    accounts: accounts.map((a) => ({ id: a.id, name: a.name, source: a.source, balanceCents: a.balanceCents })),
    legacyPayments: [
      ...history.map((h) => ({
        id: h.id,
        targetId: h.templateId,
        amountCents: h.amountPaidCents,
        date: key(h.datePaid),
        cycleReference: key(h.cycleReference),
      })),
      ...cardsHistory.map((h) => ({
        id: h.id,
        targetId: `credit-card:${h.creditCardId}`,
        amountCents: h.amountPaidCents,
        date: key(h.datePaid),
        cycleReference: key(h.cycleReference),
      })),
    ].filter((h) => !linked.has(h.id)),
  };
}
