import assert from "node:assert/strict";
import test from "node:test";
import {
  hasFeatureAccess,
  isValidEmail,
  normalizeEmail,
  parseEmailList,
  type FeatureAccessInput,
} from "./featureAccessPolicy.ts";

const buildInput = (overrides: Partial<FeatureAccessInput> = {}): FeatureAccessInput => ({
  activeFeatures: [],
  email: "member@example.com",
  feature: "PLAID",
  superAdminEmails: [],
  ...overrides,
});

test("normalizes and deduplicates configured emails", () => {
  assert.equal(normalizeEmail("  Owner@Example.COM "), "owner@example.com");
  assert.deepEqual(
    parseEmailList("Owner@example.com, member@example.com,OWNER@EXAMPLE.COM"),
    ["owner@example.com", "member@example.com"],
  );
});

test("validates complete email addresses", () => {
  assert.equal(isValidEmail("member@example.com"), true);
  assert.equal(isValidEmail("member"), false);
  assert.equal(isValidEmail("@example.com"), false);
});

test("gives super administrators implicit access", () => {
  assert.equal(
    hasFeatureAccess(
      buildInput({
        email: "OWNER@example.com",
        superAdminEmails: ["owner@example.com"],
      }),
    ),
    true,
  );
});

test("requires an active feature grant for regular users", () => {
  assert.equal(hasFeatureAccess(buildInput({ activeFeatures: ["PLAID"] })), true);
  assert.equal(hasFeatureAccess(buildInput({ activeFeatures: [] })), false);
});

test("does not grant one feature through another feature key", () => {
  assert.equal(
    hasFeatureAccess(
      buildInput({
        activeFeatures: ["TELEGRAM"],
      }),
    ),
    false,
  );
});
