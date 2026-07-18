import type { LearningTransactionPayload } from "./learningTypes.ts";

type PlaidLearningTransaction = {
  account_id: string;
  amount: number;
  authorized_date?: string | null;
  date: string;
  iso_currency_code?: string | null;
  merchant_name?: string | null;
  name: string;
  pending: boolean;
  pending_transaction_id?: string | null;
  personal_finance_category?: {
    confidence_level?: string | null;
    detailed?: string | null;
    primary?: string | null;
  } | null;
  transaction_id: string;
};

export type PlaidLearningSyncFailure = {
  errorCode: string;
  errorType: string | null;
  requiresReconnect: boolean;
  status: number | null;
};

const PLAID_RECONNECT_ERROR_CODES = new Set(["INVALID_ACCESS_TOKEN", "ITEM_LOGIN_REQUIRED"]);

export const readPlaidLearningSyncFailure = (error: unknown): PlaidLearningSyncFailure | null => {
  if (typeof error !== "object" || error === null || !("response" in error)) return null;

  const response = (error as {
    response?: {
      data?: { error_code?: unknown; error_type?: unknown };
      status?: unknown;
    };
  }).response;
  const errorCode = response?.data?.error_code;
  if (typeof errorCode !== "string") return null;

  return {
    errorCode,
    errorType: typeof response?.data?.error_type === "string" ? response.data.error_type : null,
    requiresReconnect: PLAID_RECONNECT_ERROR_CODES.has(errorCode),
    status: typeof response?.status === "number" ? response.status : null,
  };
};

export const normalizePlaidLearningTransaction = (
  transaction: PlaidLearningTransaction,
): LearningTransactionPayload => ({
  accountId: transaction.account_id,
  amountCents: Math.round(transaction.amount * 100),
  authorizedDate: transaction.authorized_date ?? null,
  categoryDetailed: transaction.personal_finance_category?.detailed ?? null,
  categoryPrimary: transaction.personal_finance_category?.primary ?? null,
  date: transaction.date,
  isoCurrencyCode: transaction.iso_currency_code ?? null,
  merchantName: transaction.merchant_name?.trim() || null,
  name: transaction.name.trim(),
  pending: transaction.pending,
  pendingTransactionId: transaction.pending_transaction_id ?? null,
  removedAt: null,
  transactionId: transaction.transaction_id,
});

export const mergeLearningTransactionPayload = (
  previous: LearningTransactionPayload | null,
  next: LearningTransactionPayload,
  pendingPredecessor: LearningTransactionPayload | null = null,
): LearningTransactionPayload => ({
  ...next,
  review: previous?.review ?? pendingPredecessor?.review ?? null,
  suggestion: previous?.review
    ? (previous.suggestion ?? null)
    : pendingPredecessor?.review
      ? (pendingPredecessor.suggestion ?? null)
      : null,
});

export const isLearningTransactionReviewable = (transaction: LearningTransactionPayload) =>
  !transaction.removedAt && transaction.amountCents > 0;

export const markLearningTransactionRemoved = (
  transaction: LearningTransactionPayload,
  removedAt: string,
): LearningTransactionPayload => ({
  ...transaction,
  removedAt,
  suggestion: null,
});
