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
): LearningTransactionPayload => ({
  ...next,
  review: previous?.review ?? null,
  suggestion: previous?.review ? (previous.suggestion ?? null) : null,
});

export const markLearningTransactionRemoved = (
  transaction: LearningTransactionPayload,
  removedAt: string,
): LearningTransactionPayload => ({
  ...transaction,
  removedAt,
  suggestion: null,
});
