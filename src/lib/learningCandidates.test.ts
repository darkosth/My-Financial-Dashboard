import assert from "node:assert/strict";
import test from "node:test";
import { getLearningExpenseCandidates } from "./learningMatcher.ts";

test("adds a credit card payment candidate in the week containing its due date", () => {
  const candidates = getLearningExpenseCandidates({
    creditCards: [{
      balanceCents: 100_000,
      dueDate: 18,
      id: "card-1",
      minimumPaymentCents: 3_500,
      minimumPaymentPercentage: 2,
      name: "Capital One Venture",
    }],
    templates: [],
  }, "2026-07-13");

  assert.deepEqual(candidates, [{
    amountCents: 3_500,
    category: "DEBT",
    cycleReference: "2026-07-01",
    kind: "credit-card",
    name: "Capital One Venture",
    occurrenceDate: "2026-07-18",
    templateId: "credit-card:card-1",
  }]);
});

test("excludes credit cards that cannot produce a scheduled payment", () => {
  const candidates = getLearningExpenseCandidates({
    creditCards: [
      {
        balanceCents: 100_000,
        dueDate: null,
        id: "without-due-date",
        minimumPaymentCents: 3_500,
        minimumPaymentPercentage: null,
        name: "No due date",
      },
      {
        balanceCents: 0,
        dueDate: 18,
        id: "zero-balance",
        minimumPaymentCents: 3_500,
        minimumPaymentPercentage: null,
        name: "Zero balance",
      },
    ],
    templates: [],
  }, "2026-07-13");

  assert.deepEqual(candidates, []);
});
