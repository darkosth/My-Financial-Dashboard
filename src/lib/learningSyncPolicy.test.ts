import assert from "node:assert/strict";
import test from "node:test";
import { markLearningTransactionRemoved, normalizePlaidLearningTransaction } from "./learningSyncPolicy.ts";

test("normalizes the minimal Plaid transaction fields used by learning", () => {
  const normalized = normalizePlaidLearningTransaction({
    account_id: "account-1",
    amount: 42.37,
    authorized_date: "2026-07-14",
    date: "2026-07-15",
    iso_currency_code: "USD",
    merchant_name: "Power Co",
    name: "POWER CO AUTOPAY",
    pending: false,
    pending_transaction_id: null,
    personal_finance_category: {
      confidence_level: "VERY_HIGH",
      detailed: "RENT_AND_UTILITIES_GAS_AND_ELECTRICITY",
      primary: "RENT_AND_UTILITIES",
    },
    transaction_id: "transaction-1",
  });

  assert.deepEqual(normalized, {
    accountId: "account-1",
    amountCents: 4237,
    authorizedDate: "2026-07-14",
    categoryDetailed: "RENT_AND_UTILITIES_GAS_AND_ELECTRICITY",
    categoryPrimary: "RENT_AND_UTILITIES",
    date: "2026-07-15",
    isoCurrencyCode: "USD",
    merchantName: "Power Co",
    name: "POWER CO AUTOPAY",
    pending: false,
    pendingTransactionId: null,
    removedAt: null,
    transactionId: "transaction-1",
  });
});

test("marks removed transactions without discarding their review data", () => {
  const removedAt = "2026-07-18T10:00:00.000Z";
  const result = markLearningTransactionRemoved(
    {
      accountId: "account-1",
      amountCents: 4237,
      authorizedDate: null,
      categoryDetailed: null,
      categoryPrimary: null,
      date: "2026-07-15",
      isoCurrencyCode: "USD",
      merchantName: "Power Co",
      name: "POWER CO",
      pending: false,
      pendingTransactionId: null,
      removedAt: null,
      review: {
        outcome: "CONFIRMED_SUGGESTION",
        reviewedAt: "2026-07-17T10:00:00.000Z",
        reviewedByUserId: "user-1",
        selectedCycleReference: "2026-07-13",
        selectedTemplateId: "power",
      },
      transactionId: "transaction-1",
    },
    removedAt,
  );

  assert.equal(result.removedAt, removedAt);
  assert.equal(result.review?.selectedTemplateId, "power");
});
