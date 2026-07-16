import assert from "node:assert/strict";
import test from "node:test";
import { collectTelegramNotificationCandidates } from "./telegramNotificationPolicy.ts";

test("moves a day-31 credit card alert to the end of a short month", () => {
  const candidates = collectTelegramNotificationCandidates({
    carryovers: [],
    creditCardHistoryRecords: [],
    historyRecords: [],
    scheduledPayments: [
      {
        id: "credit-card:card-1",
        name: "Primary card",
        amount: 75,
        frequency: "MONTHLY",
        dayOfMonth: 31,
        kind: "credit-card",
      },
    ],
    today: new Date("2027-02-27T12:00:00.000Z"),
  });

  assert.deepEqual(candidates.map(({ kind, leadDays, occurrenceDateKey }) => ({ kind, leadDays, occurrenceDateKey })), [
    { kind: "CREDIT_CARD", leadDays: 1, occurrenceDateKey: "2027-02-28" },
  ]);
});

test("does not alert for an occurrence that is already fully paid", () => {
  const candidates = collectTelegramNotificationCandidates({
    carryovers: [],
    creditCardHistoryRecords: [],
    historyRecords: [
      {
        id: "history-1",
        templateId: "rent",
        amountPaid: 1000,
        datePaid: new Date("2026-07-16T12:00:00.000Z"),
        cycleReference: new Date("2026-07-01T12:00:00.000Z"),
      },
    ],
    scheduledPayments: [
      {
        id: "rent",
        name: "Rent",
        amount: 1000,
        frequency: "MONTHLY",
        dayOfMonth: 16,
        kind: "template",
      },
    ],
    today: new Date("2026-07-16T12:00:00.000Z"),
  });

  assert.deepEqual(candidates, []);
});

test("alerts only the unpaid balance of a partially paid occurrence", () => {
  const candidates = collectTelegramNotificationCandidates({
    carryovers: [],
    creditCardHistoryRecords: [],
    historyRecords: [
      {
        id: "history-1",
        templateId: "rent",
        amountPaid: 400,
        datePaid: new Date("2026-07-16T12:00:00.000Z"),
        cycleReference: new Date("2026-07-01T12:00:00.000Z"),
      },
    ],
    scheduledPayments: [
      {
        id: "rent",
        name: "Rent",
        amount: 1000,
        frequency: "MONTHLY",
        dayOfMonth: 16,
        kind: "template",
      },
    ],
    today: new Date("2026-07-16T12:00:00.000Z"),
  });

  assert.equal(candidates[0]?.amount, 600);
});
