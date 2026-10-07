import assert from "node:assert/strict";
import test from "node:test";
import { buildAnalytics } from "./finance/analytics.ts";
import type {
  FinanceWorkspaceData,
  Movement,
  Occurrence,
} from "./finance/uiTypes.ts";
const movement = (overrides: Partial<Movement>): Movement => ({
  id: "expense",
  name: "Gas",
  amountCents: 5000,
  currency: "USD",
  date: "2026-10-02",
  status: "POSTED",
  source: "BANK",
  kind: "EXPENSE",
  categoryId: "transport",
  subcategoryId: "gas",
  accountName: "Checking",
  accountId: "account",
  needsReview: false,
  reversedAt: null,
  transferId: null,
  reconciliation: null,
  ...overrides,
});
const occurrence = (overrides: Partial<Occurrence>): Occurrence => ({
  id: "gas-week",
  targetId: "gas",
  name: "Gas",
  cycleReference: "2026-10-01",
  weekStart: "2026-10-01",
  expectedCents: 5000,
  paidCents: 5000,
  closure: "AUTO",
  currency: "USD",
  ...overrides,
});
const workspace = (
  overrides: Partial<FinanceWorkspaceData>,
): FinanceWorkspaceData => ({
  movements: [],
  occurrences: [],
  categories: [
    {
      id: "transport",
      name: "Transporte",
      archived: false,
      subcategories: [{ id: "gas", name: "Combustible", archived: false }],
    },
  ],
  cash: { balanceCents: 0 },
  events: [],
  legacyPayments: [],
  accounts: [],
  ...overrides,
});

test("expense charts count purchase once and exclude its later credit card settlement", () => {
  const data = workspace({
    movements: [
      movement({
        source: "CREDIT",
        reconciliation: { id: "link", occurrenceId: "gas-week" },
      }),
      movement({
        id: "settlement",
        kind: "TRANSFER",
        amountCents: 5000,
        reconciliation: { id: "card-link", occurrenceId: "card-week" },
      }),
    ],
    occurrences: [
      occurrence({}),
      occurrence({ id: "card-week", targetId: "credit-card:card" }),
    ],
  });
  const result = buildAnalytics(data, "2026-10-01", "2026-10-31", "USD");
  assert.deepEqual(result.categories, [["Transporte", 5000]]);
  assert.deepEqual(result.weeks, [
    { week: "2026-10-01", planned: 5000, paid: 5000, unplanned: 0 },
  ]);
});

test("refunds reduce expenses while pending, reversed and different currency movements do not enter totals", () => {
  const data = workspace({
    movements: [
      movement({}),
      movement({ id: "refund", amountCents: -1000 }),
      movement({ id: "pending", status: "PENDING" }),
      movement({ id: "reversed", reversedAt: "2026-10-03" }),
      movement({ id: "euros", currency: "EUR" }),
    ],
  });
  const result = buildAnalytics(
    data,
    "2026-10-01",
    "2026-10-31",
    "USD",
    "transport",
  );
  assert.deepEqual(result.categories, [["Combustible", 4000]]);
  assert.equal(result.weeks[0].unplanned, 4000);
});

test("period beginning midweek retains its overlapping planned week", () => {
  const data = workspace({
    movements: [movement({ date: "2026-10-04", amountCents: 1000 })],
    occurrences: [
      occurrence({}),
      occurrence({ id: "outside", weekStart: "2026-09-24" }),
      occurrence({ id: "foreign", currency: "EUR" }),
    ],
  });
  const result = buildAnalytics(data, "2026-10-04", "2026-10-07", "USD");
  assert.deepEqual(result.weeks, [
    { week: "2026-10-01", planned: 5000, paid: 5000, unplanned: 1000 },
  ]);
  assert.deepEqual(buildAnalytics(data, "", "2026-10-07", "USD"), {
    categories: [],
    weeks: [],
  });
});
