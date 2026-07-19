import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("learning review actions cannot write real payment histories", () => {
  const actionSource = readFileSync(new URL("./actions/learningActions.ts", import.meta.url), "utf8");

  assert.doesNotMatch(actionSource, /prisma\.history\.(create|createMany|update|upsert|delete)/);
  assert.doesNotMatch(actionSource, /creditCardPaymentHistory\.(create|createMany|update|upsert|delete)/);
  assert.match(actionSource, /prisma\.learningRecord\.update/);
});
