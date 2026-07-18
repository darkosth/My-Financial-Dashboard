import assert from "node:assert/strict";
import test from "node:test";
import { buildLearningSuggestion, type LearningExpenseCandidate } from "./learningMatcher.ts";
import type { LearningTransactionPayload } from "./learningTypes.ts";

const transaction = (overrides: Partial<LearningTransactionPayload> = {}): LearningTransactionPayload => ({
  accountId: "checking-1",
  amountCents: 12000,
  authorizedDate: "2026-07-15",
  categoryDetailed: "RENT_AND_UTILITIES_RENT",
  categoryPrimary: "RENT_AND_UTILITIES",
  date: "2026-07-16",
  isoCurrencyCode: "USD",
  merchantName: "Riverside Apartments",
  name: "RIVERSIDE APTS ONLINE PMT",
  pending: false,
  pendingTransactionId: null,
  removedAt: null,
  transactionId: "txn-1",
  ...overrides,
});

const expense = (overrides: Partial<LearningExpenseCandidate> = {}): LearningExpenseCandidate => ({
  amountCents: 12000,
  category: "HOUSING",
  cycleReference: "2026-07-13",
  name: "Riverside rent",
  occurrenceDate: "2026-07-15",
  templateId: "rent",
  ...overrides,
});

test("suggests a unique posted debit with matching amount, date, and merchant", () => {
  const suggestion = buildLearningSuggestion({
    candidates: [expense(), expense({ amountCents: 5500, name: "Internet", templateId: "internet" })],
    confirmations: [],
    transaction: transaction(),
  });

  assert.equal(suggestion?.templateId, "rent");
  assert.equal(suggestion?.heuristicVersion, "learning-v1");
  assert.ok((suggestion?.score ?? 0) >= 55);
});

test("does not suggest pending, removed, or incoming transactions", () => {
  const candidates = [expense()];

  assert.equal(buildLearningSuggestion({ candidates, confirmations: [], transaction: transaction({ pending: true }) }), null);
  assert.equal(buildLearningSuggestion({ candidates, confirmations: [], transaction: transaction({ removedAt: "2026-07-18T10:00:00.000Z" }) }), null);
  assert.equal(buildLearningSuggestion({ candidates, confirmations: [], transaction: transaction({ amountCents: -12000 }) }), null);
});

test("leaves an ambiguous top score for manual selection", () => {
  const suggestion = buildLearningSuggestion({
    candidates: [expense({ templateId: "rent-a" }), expense({ templateId: "rent-b" })],
    confirmations: [],
    transaction: transaction(),
  });

  assert.equal(suggestion, null);
});

test("uses confirmed merchant history as a transparent learning signal", () => {
  const suggestion = buildLearningSuggestion({
    candidates: [
      expense({ amountCents: 11800, name: "Home rent", templateId: "rent" }),
      expense({ amountCents: 12000, name: "Weekly transfer", templateId: "transfer" }),
    ],
    confirmations: [
      {
        accountId: "checking-1",
        merchantKey: "riverside apartments",
        templateId: "rent",
      },
      {
        accountId: "checking-1",
        merchantKey: "riverside apartments",
        templateId: "rent",
      },
    ],
    transaction: transaction(),
  });

  assert.equal(suggestion?.templateId, "rent");
  assert.ok(suggestion?.reasons.some((reason) => reason.code === "LEARNED_MERCHANT") ?? false);
});
