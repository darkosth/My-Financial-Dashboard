import assert from "node:assert/strict";
import test from "node:test";
import {
  buildLearningPrediction,
  getLearningCandidateForTransaction,
  getLearningPaymentCatalog,
} from "./learningMatcher.ts";
import type { LearningTransactionPayload } from "./learningTypes.ts";

const transaction = (overrides: Partial<LearningTransactionPayload> = {}): LearningTransactionPayload => ({
  accountId: "checking-1",
  amountCents: 3_500,
  authorizedDate: "2026-07-22",
  categoryDetailed: "LOAN_PAYMENTS_CREDIT_CARD_PAYMENT",
  categoryPrimary: "LOAN_PAYMENTS",
  date: "2026-07-22",
  isoCurrencyCode: "USD",
  merchantName: "Capital One",
  name: "CAPITAL ONE MOBILE PAYMENT",
  pending: true,
  pendingTransactionId: null,
  removedAt: null,
  transactionId: "txn-1",
  ...overrides,
});

test("builds a global catalog with every template and every card that has a due date", () => {
  const catalog = getLearningPaymentCatalog({
    creditCards: [
      {
        balanceCents: 0,
        dueDate: 18,
        id: "card-1",
        minimumPaymentCents: 3_500,
        minimumPaymentPercentage: null,
        name: "Capital One",
      },
      {
        balanceCents: 100_000,
        dueDate: null,
        id: "card-without-due-date",
        minimumPaymentCents: 3_500,
        minimumPaymentPercentage: null,
        name: "No due date",
      },
    ],
    templates: [{
      amountCents: 12_000,
      category: "HOUSING",
      dayOfMonth: null,
      frequency: "MONTHLY",
      id: "rent",
      lastPaidAt: null,
      name: "Rent",
    }],
  });

  assert.deepEqual(catalog.map(({ kind, targetId }) => ({ kind, targetId })), [
    { kind: "template", targetId: "rent" },
    { kind: "credit-card", targetId: "credit-card:card-1" },
  ]);
});

test("resolves the occurrence closest to the bank transaction instead of filtering by week", () => {
  const [item] = getLearningPaymentCatalog({
    creditCards: [{
      balanceCents: 100_000,
      dueDate: 18,
      id: "card-1",
      minimumPaymentCents: 3_500,
      minimumPaymentPercentage: null,
      name: "Capital One",
    }],
    templates: [],
  });

  const candidate = getLearningCandidateForTransaction(item, "2026-07-22");

  assert.equal(candidate?.occurrenceDate, "2026-07-18");
  assert.equal(candidate?.cycleReference, "2026-07-01");
});

test("predicts pending transactions for review and exposes a confidence band", () => {
  const [item] = getLearningPaymentCatalog({
    creditCards: [{
      balanceCents: 100_000,
      dueDate: 18,
      id: "card-1",
      minimumPaymentCents: 3_500,
      minimumPaymentPercentage: null,
      name: "Capital One",
    }],
    templates: [],
  });
  const candidate = getLearningCandidateForTransaction(item, "2026-07-22");
  assert.ok(candidate);

  const prediction = buildLearningPrediction({
    candidates: [candidate],
    confirmations: [],
    transaction: transaction(),
  });

  assert.equal(prediction.suggestion?.templateId, "credit-card:card-1");
  assert.notEqual(prediction.confidence, "NONE");
});
