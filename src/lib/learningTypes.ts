export type LearningReviewOutcome = "CONFIRMED_SUGGESTION" | "MANUAL_SELECTION" | "IGNORED";

export type LearningSuggestionReasonCode =
  | "AMOUNT"
  | "CATEGORY"
  | "DATE"
  | "LEARNED_ACCOUNT"
  | "LEARNED_MERCHANT"
  | "NAME";

export type LearningSuggestion = {
  cycleReference: string;
  features: Record<string, number | string | boolean | null>;
  heuristicVersion: string;
  reasons: Array<{
    code: LearningSuggestionReasonCode;
    points: number;
  }>;
  score: number;
  templateId: string;
};

export type LearningReview = {
  outcome: LearningReviewOutcome;
  reviewedAt: string;
  reviewedByUserId: string;
  selectedCycleReference: string | null;
  selectedTemplateId: string | null;
};

export type LearningTransactionPayload = {
  accountId: string;
  amountCents: number;
  authorizedDate: string | null;
  categoryDetailed: string | null;
  categoryPrimary: string | null;
  date: string;
  isoCurrencyCode: string | null;
  merchantName: string | null;
  name: string;
  pending: boolean;
  pendingTransactionId: string | null;
  removedAt: string | null;
  review?: LearningReview | null;
  suggestion?: LearningSuggestion | null;
  transactionId: string;
};

export type LearningSyncStatePayload = {
  cursor: string | null;
  lastSyncedAt: string | null;
};

export type LearningRecordPayload = LearningSyncStatePayload | LearningTransactionPayload;
