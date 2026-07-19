import { differenceInCalendarDays, parseISO, subDays, subMonths, subYears } from "date-fns";
import { getCalendarDateKey } from "@/lib/calendarDate";
import { getCreditCardEffectiveMinimumPayment } from "@/lib/creditCardReview";
import {
  getProjectionWeekInterval,
  getNextTemplateOccurrence,
  getTemplateCycleReference,
  getTemplateOccurrenceInInterval,
} from "@/lib/waterfallCalculations";
import type { LearningSuggestion, LearningSuggestionReasonCode, LearningTransactionPayload } from "./learningTypes.ts";

export const LEARNING_HEURISTIC_VERSION = "learning-v1";
const MINIMUM_SCORE = 55;
const MINIMUM_MARGIN = 8;

export type LearningExpenseCandidate = {
  amountCents: number;
  category: string;
  cycleReference: string;
  kind?: "credit-card" | "template";
  name: string;
  occurrenceDate: string;
  templateId: string;
};

export type LearningPaymentCatalogItem = {
  amountCents: number;
  category: string;
  dayOfMonth: number | null;
  frequency: string;
  kind: "credit-card" | "template";
  lastPaidAt: Date | string | null;
  name: string;
  targetId: string;
};

type LearningTemplateCandidateSource = {
  amountCents: number;
  category: string;
  dayOfMonth: number | null;
  frequency: string;
  id: string;
  lastPaidAt: Date | string | null;
  name: string;
};

type LearningCreditCardCandidateSource = {
  balanceCents: number;
  dueDate: number | null;
  id: string;
  minimumPaymentCents: number;
  minimumPaymentPercentage: number | null;
  name: string;
};

export const getLearningPaymentCatalog = ({
  creditCards,
  templates,
}: {
  creditCards: LearningCreditCardCandidateSource[];
  templates: LearningTemplateCandidateSource[];
}): LearningPaymentCatalogItem[] => [
  ...templates.map((template) => ({
    amountCents: template.amountCents,
    category: template.category,
    dayOfMonth: template.dayOfMonth,
    frequency: template.frequency,
    kind: "template" as const,
    lastPaidAt: template.lastPaidAt,
    name: template.name,
    targetId: template.id,
  })),
  ...creditCards.flatMap((card) => {
    if (!card.dueDate) return [];

    const minimumPayment = getCreditCardEffectiveMinimumPayment({
      balance: card.balanceCents / 100,
      minimumPayment: card.minimumPaymentCents / 100,
      minimumPaymentPercentage: card.minimumPaymentPercentage,
    });

    return [{
      amountCents: Math.round(minimumPayment * 100),
      category: "DEBT",
      dayOfMonth: card.dueDate,
      frequency: "MONTHLY",
      kind: "credit-card" as const,
      lastPaidAt: null,
      name: card.name,
      targetId: `credit-card:${card.id}`,
    }];
  }),
];

const getPreviousOccurrenceSeed = (item: LearningPaymentCatalogItem, referenceDate: Date | string) => {
  const parsedReference = typeof referenceDate === "string" ? parseISO(referenceDate) : referenceDate;
  if (item.frequency === "MONTHLY") return subMonths(parsedReference, 1);
  if (item.frequency === "YEARLY") return subYears(parsedReference, 1);
  if (item.frequency === "BIWEEKLY") return subDays(parsedReference, 14);
  return subDays(parsedReference, 7);
};

export const getLearningCandidateForTransaction = (
  item: LearningPaymentCatalogItem,
  transactionDate: Date | string,
): LearningExpenseCandidate | null => {
  const scheduled = {
    amount: item.amountCents / 100,
    category: item.category,
    dayOfMonth: item.dayOfMonth,
    frequency: item.frequency,
    id: item.targetId,
    kind: item.kind,
    lastPaidAt: item.lastPaidAt,
    name: item.name,
  };
  const transactionDay = typeof transactionDate === "string" ? parseISO(transactionDate) : transactionDate;
  const occurrences = [
    getNextTemplateOccurrence(scheduled, transactionDay),
    getNextTemplateOccurrence(scheduled, getPreviousOccurrenceSeed(item, transactionDay)),
  ].filter((value): value is Date => value !== null);
  const occurrenceDate = occurrences.sort((left, right) =>
    Math.abs(differenceInCalendarDays(left, transactionDay)) - Math.abs(differenceInCalendarDays(right, transactionDay))
  )[0];
  if (!occurrenceDate) return null;

  return {
    amountCents: item.amountCents,
    category: item.category,
    cycleReference: getCalendarDateKey(getTemplateCycleReference(scheduled, occurrenceDate)),
    kind: item.kind,
    name: item.name,
    occurrenceDate: getCalendarDateKey(occurrenceDate),
    templateId: item.targetId,
  };
};

export const getLearningExpenseCandidates = ({
  creditCards,
  templates,
}: {
  creditCards: LearningCreditCardCandidateSource[];
  templates: LearningTemplateCandidateSource[];
}, referenceDate: Date | string): LearningExpenseCandidate[] => {
  const interval = getProjectionWeekInterval(referenceDate);
  const templateCandidates = templates.flatMap((template) => {
    const scheduled = {
      amount: template.amountCents / 100,
      category: template.category,
      dayOfMonth: template.dayOfMonth,
      frequency: template.frequency,
      id: template.id,
      lastPaidAt: template.lastPaidAt,
      name: template.name,
    };
    const occurrenceDate = getTemplateOccurrenceInInterval(scheduled, interval);
    if (!occurrenceDate) return [];

    return [{
      amountCents: template.amountCents,
      category: template.category,
      cycleReference: getCalendarDateKey(getTemplateCycleReference(scheduled, occurrenceDate)),
      kind: "template" as const,
      name: template.name,
      occurrenceDate: getCalendarDateKey(occurrenceDate),
      templateId: template.id,
    }];
  });
  const creditCardCandidates = creditCards.flatMap((card) => {
    const minimumPayment = getCreditCardEffectiveMinimumPayment({
      balance: card.balanceCents / 100,
      minimumPayment: card.minimumPaymentCents / 100,
      minimumPaymentPercentage: card.minimumPaymentPercentage,
    });
    if (!card.dueDate || card.balanceCents <= 0 || minimumPayment <= 0) return [];

    const scheduled = {
      amount: minimumPayment,
      category: "DEBT",
      dayOfMonth: card.dueDate,
      frequency: "MONTHLY",
      id: `credit-card:${card.id}`,
      kind: "credit-card",
      name: card.name,
    };
    const occurrenceDate = getTemplateOccurrenceInInterval(scheduled, interval);
    if (!occurrenceDate) return [];

    return [{
      amountCents: Math.round(minimumPayment * 100),
      category: "DEBT",
      cycleReference: getCalendarDateKey(getTemplateCycleReference(scheduled, occurrenceDate)),
      kind: "credit-card" as const,
      name: card.name,
      occurrenceDate: getCalendarDateKey(occurrenceDate),
      templateId: scheduled.id,
    }];
  });

  return [...templateCandidates, ...creditCardCandidates];
};

export type LearningConfirmationSignal = {
  accountId: string;
  merchantKey: string;
  templateId: string;
};

export const normalizeLearningText = (value: string | null | undefined) =>
  value
    ?.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim() ?? "";

const getMerchantKey = (transaction: LearningTransactionPayload) =>
  normalizeLearningText(transaction.merchantName || transaction.name);

const scoreAmount = (transactionAmount: number, candidateAmount: number) => {
  if (candidateAmount <= 0) return 0;
  const ratio = Math.abs(transactionAmount - candidateAmount) / candidateAmount;
  if (ratio === 0) return 50;
  if (ratio <= 0.02) return 44;
  if (ratio <= 0.1) return 28;
  if (ratio <= 0.25) return 10;
  return 0;
};

const scoreDate = (transactionDate: string, occurrenceDate: string) => {
  const distance = Math.abs(differenceInCalendarDays(parseISO(transactionDate), parseISO(occurrenceDate)));
  if (distance <= 1) return 15;
  if (distance <= 3) return 10;
  if (distance <= 7) return 4;
  return 0;
};

const scoreName = (merchantKey: string, candidateName: string) => {
  const merchantTokens = new Set(merchantKey.split(" ").filter((token) => token.length > 2));
  const candidateTokens = new Set(normalizeLearningText(candidateName).split(" ").filter((token) => token.length > 2));
  if (merchantTokens.size === 0 || candidateTokens.size === 0) return 0;

  const intersection = [...merchantTokens].filter((token) => candidateTokens.has(token)).length;
  const union = new Set([...merchantTokens, ...candidateTokens]).size;
  return Math.round((intersection / union) * 20);
};

const categoryMap: Record<string, string[]> = {
  BANK_FEES: ["DEBT", "OTHER"],
  ENTERTAINMENT: ["ENTERTAINMENT"],
  FOOD_AND_DRINK: ["FOOD"],
  GENERAL_MERCHANDISE: ["PERSONAL", "OTHER"],
  LOAN_PAYMENTS: ["DEBT"],
  MEDICAL: ["MEDICAL"],
  RENT_AND_UTILITIES: ["HOUSING", "UTILITIES"],
  TRANSPORTATION: ["TRANSPORTATION"],
  TRANSFER_OUT: ["DEBT"],
};

const addReason = (
  reasons: LearningSuggestion["reasons"],
  code: LearningSuggestionReasonCode,
  points: number,
) => {
  if (points > 0) reasons.push({ code, points });
  return points;
};

const scoreCandidate = ({
  candidate,
  confirmations,
  merchantKey,
  transaction,
}: {
  candidate: LearningExpenseCandidate;
  confirmations: LearningConfirmationSignal[];
  merchantKey: string;
  transaction: LearningTransactionPayload;
}): LearningSuggestion => {
  const reasons: LearningSuggestion["reasons"] = [];
  const amountPoints = addReason(reasons, "AMOUNT", scoreAmount(transaction.amountCents, candidate.amountCents));
  const datePoints = addReason(
    reasons,
    "DATE",
    scoreDate(transaction.authorizedDate ?? transaction.date, candidate.occurrenceDate),
  );
  const namePoints = addReason(reasons, "NAME", scoreName(merchantKey, candidate.name));
  const categoryPoints = addReason(
    reasons,
    "CATEGORY",
    transaction.categoryPrimary && categoryMap[transaction.categoryPrimary]?.includes(candidate.category) ? 8 : 0,
  );
  const learnedSignals = confirmations.filter(
    (confirmation) => confirmation.templateId === candidate.templateId && confirmation.merchantKey === merchantKey,
  );
  const learnedMerchantPoints = addReason(reasons, "LEARNED_MERCHANT", Math.min(learnedSignals.length * 15, 30));
  const learnedAccountPoints = addReason(
    reasons,
    "LEARNED_ACCOUNT",
    learnedSignals.some((confirmation) => confirmation.accountId === transaction.accountId) ? 8 : 0,
  );

  return {
    cycleReference: candidate.cycleReference,
    features: {
      amountDeltaCents: Math.abs(transaction.amountCents - candidate.amountCents),
      categoryPrimary: transaction.categoryPrimary,
      dateDistanceDays: Math.abs(
        differenceInCalendarDays(
          parseISO(transaction.authorizedDate ?? transaction.date),
          parseISO(candidate.occurrenceDate),
        ),
      ),
      learnedConfirmations: learnedSignals.length,
      merchantKey,
    },
    heuristicVersion: LEARNING_HEURISTIC_VERSION,
    reasons,
    score: amountPoints + datePoints + namePoints + categoryPoints + learnedMerchantPoints + learnedAccountPoints,
    templateId: candidate.templateId,
  };
};

export const buildLearningSuggestion = ({
  candidates,
  confirmations,
  transaction,
}: {
  candidates: LearningExpenseCandidate[];
  confirmations: LearningConfirmationSignal[];
  transaction: LearningTransactionPayload;
}): LearningSuggestion | null => {
  if (transaction.pending) return null;
  const prediction = buildLearningPrediction({ candidates, confirmations, transaction });
  return prediction.confidence === "HIGH" || prediction.confidence === "MEDIUM"
    ? prediction.suggestion
    : null;
};

export type LearningPredictionConfidence = "HIGH" | "MEDIUM" | "LOW" | "NONE";

export type LearningPrediction = {
  confidence: LearningPredictionConfidence;
  margin: number | null;
  suggestion: LearningSuggestion | null;
};

export const buildLearningPrediction = ({
  candidates,
  confirmations,
  transaction,
}: {
  candidates: LearningExpenseCandidate[];
  confirmations: LearningConfirmationSignal[];
  transaction: LearningTransactionPayload;
}): LearningPrediction => {
  if (transaction.removedAt || transaction.amountCents <= 0) {
    return { confidence: "NONE", margin: null, suggestion: null };
  }

  const merchantKey = getMerchantKey(transaction);
  const ranked = candidates
    .map((candidate) => scoreCandidate({ candidate, confirmations, merchantKey, transaction }))
    .sort((left, right) => right.score - left.score || left.templateId.localeCompare(right.templateId));
  const first = ranked[0];
  const second = ranked[1];

  if (!first || first.score <= 0) return { confidence: "NONE", margin: null, suggestion: null };

  const margin = second ? first.score - second.score : first.score;
  if (first.score >= 80 && margin >= 15) return { confidence: "HIGH", margin, suggestion: first };
  if (first.score >= MINIMUM_SCORE && margin >= MINIMUM_MARGIN) {
    return { confidence: "MEDIUM", margin, suggestion: first };
  }
  return { confidence: "LOW", margin, suggestion: first };
};
