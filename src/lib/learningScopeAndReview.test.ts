import assert from "node:assert/strict";
import test from "node:test";
import { isLearningLiquidityAccount } from "./learningAccountPolicy.ts";
import {
  isLearningTransactionReviewable,
  mergeLearningTransactionPayload,
} from "./learningSyncPolicy.ts";
import type { LearningTransactionPayload } from "./learningTypes.ts";

const transaction = (overrides: Partial<LearningTransactionPayload> = {}): LearningTransactionPayload => ({
  accountId: "debit-1",
  amountCents: 2500,
  authorizedDate: "2026-07-18",
  categoryDetailed: null,
  categoryPrimary: null,
  date: "2026-07-18",
  isoCurrencyCode: "USD",
  merchantName: "Power Co",
  name: "POWER CO",
  pending: false,
  pendingTransactionId: null,
  removedAt: null,
  transactionId: "posted-1",
  ...overrides,
});

test("includes only imported depository accounts in learning", () => {
  assert.equal(isLearningLiquidityAccount({ importedAccountId: "account-1", isImported: true, kind: "DEPOSITORY" }), true);
  assert.equal(isLearningLiquidityAccount({ importedAccountId: "card-1", isImported: true, kind: "CREDIT" }), false);
  assert.equal(isLearningLiquidityAccount({ importedAccountId: null, isImported: false, kind: "DEPOSITORY" }), false);
});

test("allows pending debit transactions to be reviewed for learning", () => {
  assert.equal(isLearningTransactionReviewable(transaction({ pending: true })), true);
});

test("transfers a pending review to its posted transaction", () => {
  const pending = transaction({
    pending: true,
    transactionId: "pending-1",
    review: {
      outcome: "MANUAL_SELECTION",
      reviewedAt: "2026-07-18T20:00:00.000Z",
      reviewedByUserId: "user-1",
      selectedCycleReference: "2026-07-13",
      selectedTemplateId: "power",
    },
  });
  const posted = transaction({ pendingTransactionId: "pending-1" });

  const merged = mergeLearningTransactionPayload(null, posted, pending);

  assert.equal(merged.review?.selectedTemplateId, "power");
  assert.equal(merged.pending, false);
  assert.equal(merged.transactionId, "posted-1");
});
