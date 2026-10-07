import assert from "node:assert/strict";
import test from "node:test";
import { buildLearningPrediction, buildRankedLearningSuggestions, type LearningExpenseCandidate } from "./learningMatcher.ts";
import type { LearningTransactionPayload } from "./learningTypes.ts";

const candidate: LearningExpenseCandidate = {
  amountCents: 5000, category: "TRANSPORTATION", cycleReference: "2026-10-01",
  name: "Shell gas", occurrenceDate: "2026-10-02", templateId: "gas",
};
const transaction: LearningTransactionPayload = {
  accountId: "checking", amountCents: 575, authorizedDate: "2026-10-02",
  categoryDetailed: null, categoryPrimary: "TRANSPORTATION", date: "2026-10-02",
  isoCurrencyCode: "USD", merchantName: "Shell gas", name: "Shell gas", pending: false,
  pendingTransactionId: null, removedAt: null, transactionId: "shell",
};
const predict = (amountCents: number, expected = 5000) => buildLearningPrediction({
  candidates: [{ ...candidate, amountCents: expected }],
  confirmations: Array.from({ length: 10 }, () => ({ accountId: "checking", merchantKey: "shell gas", templateId: "gas" })),
  transaction: { ...transaction, amountCents },
});

test("excludes Shell $5.75 from $50 gas even with strong learned signals", () => {
  assert.equal(predict(575).suggestion, null);
});

test("15% candidate gate includes exact boundaries and excludes the next cent", () => {
  assert.equal(predict(4250).suggestion?.templateId, "gas");
  assert.equal(predict(5750).suggestion?.templateId, "gas");
  assert.equal(predict(4249).suggestion, null);
  assert.equal(predict(5751).suggestion, null);
});

test("rejects invalid cents and nonpositive expected amounts before scoring", () => {
  for (const invalid of [0, -1, NaN, Infinity, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
    assert.equal(predict(5000, invalid).suggestion, null);
    assert.equal(predict(invalid).suggestion, null);
  }
});

test("ranked suggestions retain alternatives in score order while excluding large mismatches", () => {
  const ranked = buildRankedLearningSuggestions({
    candidates: [
      { ...candidate, templateId: "far", amountCents: 10000 },
      { ...candidate, templateId: "second", name: "Other expense", amountCents: 5100 },
      { ...candidate, templateId: "first" },
    ],
    confirmations: [],
    transaction: { ...transaction, amountCents: 5000 },
  });
  assert.deepEqual(ranked.map((item) => item.templateId), ["first", "second"]);
  assert.ok(ranked[0].score > ranked[1].score);
});

test("does not compare a foreign currency movement against USD payment catalog", () => {
  const ranked = buildRankedLearningSuggestions({
    candidates: [candidate], confirmations: [],
    transaction: { ...transaction, amountCents: 5000, isoCurrencyCode: "EUR" },
  });
  assert.deepEqual(ranked, []);
});
