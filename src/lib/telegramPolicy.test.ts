import assert from "node:assert/strict";
import test from "node:test";
import {
  buildTelegramDeliveryKey,
  escapeTelegramHtml,
  hashTelegramLinkToken,
  parseTelegramStartCommand,
} from "./telegramPolicy.ts";

test("hashes link tokens without retaining the raw token", () => {
  const rawToken = "private_link_token";
  const digest = hashTelegramLinkToken(rawToken);

  assert.equal(digest, hashTelegramLinkToken(rawToken));
  assert.notEqual(digest, rawToken);
  assert.match(digest, /^[a-f0-9]{64}$/);
});

test("accepts only a start command with one base64url token", () => {
  assert.equal(parseTelegramStartCommand("/start Abc_123-x_secure"), "Abc_123-x_secure");
  assert.equal(parseTelegramStartCommand("/start@myfinancebot Abc_123-x_secure"), "Abc_123-x_secure");
  assert.equal(parseTelegramStartCommand("/start"), null);
  assert.equal(parseTelegramStartCommand("/start token extra"), null);
  assert.equal(parseTelegramStartCommand("hello"), null);
});

test("escapes user-controlled content before Telegram HTML formatting", () => {
  assert.equal(escapeTelegramHtml("Rent <Home> & bills"), "Rent &lt;Home&gt; &amp; bills");
});

test("delivery keys separate recipients, events, dates, and lead days", () => {
  const first = buildTelegramDeliveryKey({
    eventId: "card-1",
    kind: "CREDIT_CARD",
    leadDays: 1,
    occurrenceDateKey: "2026-07-17",
    preferenceId: "preference-1",
  });
  const second = buildTelegramDeliveryKey({
    eventId: "card-1",
    kind: "CREDIT_CARD",
    leadDays: 0,
    occurrenceDateKey: "2026-07-17",
    preferenceId: "preference-1",
  });

  assert.notEqual(first, second);
});
