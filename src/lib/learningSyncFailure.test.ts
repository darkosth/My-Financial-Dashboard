import assert from "node:assert/strict";
import test from "node:test";
import { readPlaidLearningSyncFailure } from "./learningSyncPolicy.ts";

test("classifies an invalid Plaid access token as requiring reconnection", () => {
  const failure = readPlaidLearningSyncFailure({
    response: {
      data: {
        error_code: "INVALID_ACCESS_TOKEN",
        error_type: "INVALID_INPUT",
      },
      status: 400,
    },
  });

  assert.deepEqual(failure, {
    errorCode: "INVALID_ACCESS_TOKEN",
    errorType: "INVALID_INPUT",
    requiresReconnect: true,
    status: 400,
  });
});

test("does not classify internal errors as recoverable Plaid item failures", () => {
  assert.equal(readPlaidLearningSyncFailure(new Error("database unavailable")), null);
});
