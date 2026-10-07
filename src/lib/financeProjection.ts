import { getCalendarDateKey } from "./calendarDate.ts";

export type FinanceOccurrenceState = {
  targetId: string;
  cycleReference: string;
  closure: "OPEN" | "AUTO" | "MANUAL";
  expectedCents: number;
  paidCents: number;
};

/** Explicit closure is independent of the amount paid; do not fabricate payments. */
export function getProjectedOccurrence(
  targetId: string,
  cycleReference: Date | string,
  expectedAmount: number,
  paidAmount: number,
  occurrences: FinanceOccurrenceState[] = [],
) {
  const key = getCalendarDateKey(cycleReference);
  const occurrence = occurrences.find((entry) => entry.targetId === targetId && entry.cycleReference === key);
  const expectedCents = occurrence?.expectedCents ?? Math.round(expectedAmount * 100);
  const paidCents = occurrence?.paidCents ?? Math.round(paidAmount * 100);
  const closed = occurrence ? occurrence.closure !== "OPEN" : paidCents >= expectedCents;
  return {
    expectedAmount: expectedCents / 100,
    paidAmount: paidCents / 100,
    pendingAmount: closed ? 0 : Math.max(expectedCents - paidCents, 0) / 100,
    excessAmount: Math.max(paidCents - expectedCents, 0) / 100,
    needsManualClose: !!occurrence && !closed && paidCents > expectedCents,
    closed,
  };
}
