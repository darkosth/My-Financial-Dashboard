import { LearningRecordKind, PlaidItemStatus, Prisma } from "@prisma/client";
import type { RemovedTransaction, Transaction } from "plaid";
import { decryptPlaidAccessToken, getPlaidClient } from "@/lib/plaid";
import prisma from "@/lib/prisma";
import {
  LEARNING_SYNC_STATE_KEY,
  learningTransactionWhere,
  readLearningSyncState,
  readLearningTransaction,
  toLearningJson,
} from "@/lib/learningStore";
import {
  markLearningTransactionRemoved,
  mergeLearningTransactionPayload,
  normalizePlaidLearningTransaction,
} from "@/lib/learningSyncPolicy";

const MAX_PAGINATION_ATTEMPTS = 3;

type PlaidSyncBatch = {
  added: Transaction[];
  cursor: string;
  modified: Transaction[];
  removed: RemovedTransaction[];
};

const getPlaidErrorCode = (error: unknown) => {
  if (typeof error !== "object" || error === null || !("response" in error)) return null;
  const response = (error as { response?: { data?: { error_code?: unknown } } }).response;
  return typeof response?.data?.error_code === "string" ? response.data.error_code : null;
};

const fetchPlaidSyncBatch = async (accessToken: string, initialCursor: string | null): Promise<PlaidSyncBatch> => {
  const client = getPlaidClient();

  for (let attempt = 1; attempt <= MAX_PAGINATION_ATTEMPTS; attempt += 1) {
    const added: Transaction[] = [];
    const modified: Transaction[] = [];
    const removed: RemovedTransaction[] = [];
    let cursor = initialCursor ?? undefined;

    try {
      let hasMore = true;
      while (hasMore) {
        const response = await client.transactionsSync({
          access_token: accessToken,
          count: 500,
          ...(cursor ? { cursor } : {}),
        });

        added.push(...response.data.added);
        modified.push(...response.data.modified);
        removed.push(...response.data.removed);
        cursor = response.data.next_cursor;
        hasMore = response.data.has_more;
      }

      return { added, cursor: cursor ?? "", modified, removed };
    } catch (error) {
      const canRetry =
        getPlaidErrorCode(error) === "TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION" &&
        attempt < MAX_PAGINATION_ATTEMPTS;

      if (!canRetry) throw error;
    }
  }

  throw new Error("Plaid transaction pagination could not stabilize");
};

const persistPlaidSyncBatch = async ({
  batch,
  plaidItemId,
  workspaceId,
}: {
  batch: PlaidSyncBatch;
  plaidItemId: string;
  workspaceId: string;
}) => {
  const syncedAt = new Date().toISOString();
  const changedTransactions = new Map(
    [...batch.added, ...batch.modified].map((transaction) => [transaction.transaction_id, transaction]),
  );
  const externalKeys = [...new Set([...changedTransactions.keys(), ...batch.removed.map((item) => item.transaction_id)])];
  const existingRecords = externalKeys.length > 0
    ? await prisma.learningRecord.findMany({
        where: {
          externalKey: { in: externalKeys },
          kind: LearningRecordKind.TRANSACTION,
          plaidItemId,
        },
      })
    : [];
  const existingByTransactionId = new Map(existingRecords.map((record) => [record.externalKey, record]));
  const operations: Prisma.PrismaPromise<unknown>[] = [];

  for (const transaction of changedTransactions.values()) {
      const where = learningTransactionWhere(plaidItemId, transaction.transaction_id);
      const existing = existingByTransactionId.get(transaction.transaction_id);
      const previous = existing ? readLearningTransaction(existing.payload) : null;
      const payload = mergeLearningTransactionPayload(previous, normalizePlaidLearningTransaction(transaction));

      operations.push(prisma.learningRecord.upsert({
        where,
        create: {
          externalKey: transaction.transaction_id,
          kind: LearningRecordKind.TRANSACTION,
          payload: toLearningJson(payload),
          plaidItemId,
          workspaceId,
        },
        update: {
          payload: toLearningJson(payload),
          workspaceId,
        },
      }));
  }

  for (const removed of batch.removed) {
      const existing = existingByTransactionId.get(removed.transaction_id);
      const payload = existing ? readLearningTransaction(existing.payload) : null;

      if (existing && payload) {
        operations.push(prisma.learningRecord.update({
          where: { id: existing.id },
          data: {
            payload: toLearningJson(markLearningTransactionRemoved(payload, syncedAt)),
          },
        }));
      }
  }

  const syncPayload = toLearningJson({ cursor: batch.cursor || null, lastSyncedAt: syncedAt });
  operations.push(prisma.learningRecord.upsert({
      where: {
        plaidItemId_kind_externalKey: {
          externalKey: LEARNING_SYNC_STATE_KEY,
          kind: LearningRecordKind.SYNC_STATE,
          plaidItemId,
        },
      },
      create: {
        externalKey: LEARNING_SYNC_STATE_KEY,
        kind: LearningRecordKind.SYNC_STATE,
        payload: syncPayload,
        plaidItemId,
        workspaceId,
      },
      update: {
        payload: syncPayload,
        workspaceId,
      },
    }));

  await prisma.$transaction(operations);

  return {
    added: batch.added.length,
    modified: batch.modified.length,
    removed: batch.removed.length,
  };
};

export const syncLearningTransactionsForWorkspace = async (workspaceId: string) => {
  const items = await prisma.plaidItem.findMany({
    where: {
      accessTokenCiphertext: { not: null },
      status: PlaidItemStatus.ACTIVE,
      workspaceId,
    },
    select: {
      accessTokenCiphertext: true,
      id: true,
      institutionName: true,
    },
  });

  const results: Array<{ added: number; institutionName: string; modified: number; removed: number }> = [];

  for (const item of items) {
    if (!item.accessTokenCiphertext) continue;

    const syncRecord = await prisma.learningRecord.findUnique({
      where: {
        plaidItemId_kind_externalKey: {
          externalKey: LEARNING_SYNC_STATE_KEY,
          kind: LearningRecordKind.SYNC_STATE,
          plaidItemId: item.id,
        },
      },
    });
    const syncState = syncRecord ? readLearningSyncState(syncRecord.payload) : null;
    const batch = await fetchPlaidSyncBatch(
      decryptPlaidAccessToken(item.accessTokenCiphertext),
      syncState?.cursor ?? null,
    );
    const counts = await persistPlaidSyncBatch({ batch, plaidItemId: item.id, workspaceId });
    results.push({
      ...counts,
      institutionName: item.institutionName ?? "Bank",
    });
  }

  return {
    items: results,
    total: results.reduce(
      (summary, item) => ({
        added: summary.added + item.added,
        modified: summary.modified + item.modified,
        removed: summary.removed + item.removed,
      }),
      { added: 0, modified: 0, removed: 0 },
    ),
  };
};
