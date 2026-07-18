import { LearningRecordKind, Prisma } from "@prisma/client";
import type { LearningSyncStatePayload, LearningTransactionPayload } from "@/lib/learningTypes";

export const LEARNING_SYNC_STATE_KEY = "cursor";

const isObject = (value: Prisma.JsonValue): value is Prisma.JsonObject =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const readLearningSyncState = (value: Prisma.JsonValue): LearningSyncStatePayload | null => {
  if (!isObject(value)) return null;
  const cursor = value.cursor;
  const lastSyncedAt = value.lastSyncedAt;

  if (cursor !== null && typeof cursor !== "string") return null;
  if (lastSyncedAt !== null && typeof lastSyncedAt !== "string") return null;
  return { cursor, lastSyncedAt };
};

export const readLearningTransaction = (value: Prisma.JsonValue): LearningTransactionPayload | null => {
  if (!isObject(value)) return null;

  if (
    typeof value.accountId !== "string" ||
    typeof value.amountCents !== "number" ||
    typeof value.date !== "string" ||
    typeof value.name !== "string" ||
    typeof value.pending !== "boolean" ||
    typeof value.transactionId !== "string"
  ) {
    return null;
  }

  return value as unknown as LearningTransactionPayload;
};

export const toLearningJson = (
  value: LearningSyncStatePayload | LearningTransactionPayload,
): Prisma.InputJsonValue => JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;

export const learningTransactionWhere = (plaidItemId: string, transactionId: string) => ({
  plaidItemId_kind_externalKey: {
    externalKey: transactionId,
    kind: LearningRecordKind.TRANSACTION,
    plaidItemId,
  },
});
