import { createHash, timingSafeEqual } from "node:crypto";

const startCommandPattern = /^\/start(?:@[A-Za-z0-9_]+)? ([A-Za-z0-9_-]{16,64})$/;

export const hashTelegramLinkToken = (token: string) =>
  createHash("sha256").update(token, "utf8").digest("hex");

export const parseTelegramStartCommand = (text: string | null | undefined) => {
  if (!text) return null;
  return text.trim().match(startCommandPattern)?.[1] ?? null;
};

export const escapeTelegramHtml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const secretsMatch = (actual: string | null, expected: string | undefined) => {
  if (!actual || !expected) return false;
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
};

export const buildTelegramDeliveryKey = ({
  eventId,
  kind,
  leadDays,
  occurrenceDateKey,
  preferenceId,
}: {
  eventId: string;
  kind: string;
  leadDays: number;
  occurrenceDateKey: string;
  preferenceId: string;
}) => `${preferenceId}:${kind}:${eventId}:${occurrenceDateKey}:${leadDays}`;
