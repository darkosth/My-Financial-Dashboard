import assert from "node:assert/strict";
import test from "node:test";
import {
  cents,
  dateOnly,
  dayRange,
  nextClosure,
  thursday,
} from "./finance/core.ts";
test("money rejects fractional cents, zero and overflow", () => {
  for (const amount of [0, 1.2, NaN, Infinity, 1000000001, -1])
    assert.throws(() => cents(amount));
  assert.equal(cents(-150, true), -150);
});
test("calendar validation normalizes midnight and rejects overflow dates", () => {
  assert.equal(
    dateOnly("2026-10-07").toISOString(),
    "2026-10-07T00:00:00.000Z",
  );
  for (const date of ["2026-02-30", "2026-13-01", "not a date", "2026-1-1"])
    assert.throws(() => dateOnly(date));
  const range = dayRange(new Date("2026-10-07T12:00:00Z"));
  assert.equal(range.gte.toISOString(), "2026-10-07T00:00:00.000Z");
  assert.equal(range.lt.toISOString(), "2026-10-08T00:00:00.000Z");
});
test("closure tolerates five percent, preserves close on additional payments and reevaluates undo", () => {
  assert.equal(nextClosure("OPEN", 5000, 4749), "OPEN");
  assert.equal(nextClosure("OPEN", 5000, 4750), "AUTO");
  assert.equal(nextClosure("OPEN", 5000, 5250), "AUTO");
  assert.equal(nextClosure("OPEN", 5000, 5251), "OPEN");
  assert.equal(nextClosure("AUTO", 5000, 6100), "AUTO");
  assert.equal(nextClosure("AUTO", 5000, 3000, true), "OPEN");
  assert.equal(nextClosure("MANUAL", 5000, 0, true), "MANUAL");
  assert.equal(nextClosure("OPEN", 0, 0), "OPEN");
});
test("weeks always start Thursday across month boundaries", () => {
  assert.equal(
    thursday(dateOnly("2026-10-07")).toISOString().slice(0, 10),
    "2026-10-01",
  );
  assert.equal(
    thursday(dateOnly("2026-10-01")).toISOString().slice(0, 10),
    "2026-10-01",
  );
});
