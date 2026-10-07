import assert from "node:assert/strict";
import test from "node:test";
import { getProjectedOccurrence, type FinanceOccurrenceState } from "./financeProjection.ts";
import { calculateWaterfall, getUpcomingPendingPayments } from "./waterfallCalculations.ts";

const occurrence: FinanceOccurrenceState = { targetId: "gas", cycleReference: "2026-10-01", closure: "AUTO", expectedCents: 5000, paidCents: 4800 };
const template = { id: "gas", name: "Gas", amount: 50, frequency: "WEEKLY", lastPaidAt: "2026-10-01" };

test("closing within tolerance removes the obligation without inventing a payment", () => {
  const state = getProjectedOccurrence("gas", "2026-10-01", 50, 48, [occurrence]);
  assert.equal(state.pendingAmount, 0);
  assert.equal(state.paidAmount, 48);
  assert.equal(state.closed, true);
});

test("open overspend needs manual closure and preserves actual amount", () => {
  const state = getProjectedOccurrence("gas", "2026-10-01", 50, 61, [{ ...occurrence, closure: "OPEN", paidCents: 6100 }]);
  assert.equal(state.closed, false);
  assert.equal(state.needsManualClose, true);
  assert.equal(state.excessAmount, 11);
  assert.equal(state.pendingAmount, 0);
});

test("saved expected amount is independent of later template edits", () => {
  assert.equal(getProjectedOccurrence("gas", "2026-10-01", 90, 48, [occurrence]).expectedAmount, 50);
  assert.equal(getProjectedOccurrence("gas", "2026-10-08", 90, 0, [occurrence]).pendingAmount, 90);
});

test("forecast and upcoming obligations respect explicit closure", () => {
  const input = { templates: [template], today: new Date(2026, 9, 1), historyRecords: [{ id: "paid", templateId: "gas", datePaid: "2026-10-01", cycleReference: "2026-10-01", amountPaid: 48 }], occurrences: [occurrence] };
  const weeks = calculateWaterfall({ ...input, totalLiquidity: 100, standardWeeklyIncome: 0 });
  assert.equal(weeks[0].expensesInWeek, 0);
  assert.equal(weeks[0].details[0].paidAmount, 48);
  assert.equal(weeks[0].details[0].isPaid, true);
  assert.equal(getUpcomingPendingPayments({ ...input, weeksAhead: 1 }).length, 0);
});
