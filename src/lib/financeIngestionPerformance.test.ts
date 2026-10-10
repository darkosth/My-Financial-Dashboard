import test from 'node:test';
import assert from 'node:assert/strict';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

test('bank ingestion skips unchanged history with a bounded query count', { skip: process.env.RUN_FINANCE_INTEGRATION !== '1' }, async () => {
  const url = new URL(process.env.DATABASE_URL ?? 'http://invalid');
  assert.equal(url.hostname, '127.0.0.1');
  assert.equal(url.port, '55486');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = new PrismaClient({ adapter: new PrismaPg(pool), log: [{ emit: 'event', level: 'query' }] });
  const queries: string[] = [];
  db.$on('query', event => queries.push(event.query));
  Object.assign(globalThis, { prisma: db });
  const { ingestLearningRecordsForWorkspace } = await import('./finance/movements.ts');
  try {
    const user = await db.user.create({ data: { email: `performance-${crypto.randomUUID()}@example.invalid` } });
    const workspace = await db.workspace.create({ data: { name: 'Isolated performance fixture', ownerUserId: user.id } });
    const workspaceId = workspace.id;
    const item = await db.plaidItem.create({ data: { workspaceId, plaidItemId: crypto.randomUUID() } });
    const account = await db.account.create({ data: { workspaceId, name: 'Fixture bank', source: 'PLAID', balanceCents: 100000 } });
    const remote = await db.plaidRemoteAccount.create({ data: { workspaceId, plaidItemId: item.id, plaidAccountId: crypto.randomUUID(), kind: 'DEPOSITORY', name: 'Fixture bank', isImported: true, importedAccountId: account.id } });
    const payload = (i: number) => ({ transactionId: `txn-${i}`, accountId: remote.plaidAccountId, amountCents: 5000, date: '2026-10-01', authorizedDate: null, merchantName: 'Gas', name: 'Gas', pending: false, pendingTransactionId: null, removedAt: null, isoCurrencyCode: 'USD', categoryPrimary: null, categoryDetailed: null });
    await db.learningRecord.createMany({ data: Array.from({ length: 665 }, (_, i) => ({ workspaceId, plaidItemId: item.id, kind: 'TRANSACTION', externalKey: `txn-${i}`, payload: payload(i) })) });
    const start = performance.now();
    await ingestLearningRecordsForWorkspace(workspaceId);
    const firstMs = performance.now() - start;
    assert.equal(await db.financialMovement.count({ where: { workspaceId } }), 665);
    const movement = await db.financialMovement.findFirstOrThrow({ where: { workspaceId, externalKey: `${item.id}:txn-0` } });
    await db.financialMovement.update({ where: { id: movement.id }, data: { kind: 'CARD_PAYMENT' } });
    const before = await db.financialMovement.findMany({ where: { workspaceId }, select: { id: true, updatedAt: true }, orderBy: { id: 'asc' } });
    queries.length = 0;
    const warm = performance.now();
    await ingestLearningRecordsForWorkspace(workspaceId);
    const warmMs = performance.now() - warm;
    const noOpQueries = [...queries];
    assert.ok(noOpQueries.length <= 10, `Expected bounded reads, received ${noOpQueries.length}`);
    assert.equal(noOpQueries.filter(q => /\b(INSERT|UPDATE|DELETE)\b/i.test(q)).length, 0);
    assert.deepEqual(await db.financialMovement.findMany({ where: { workspaceId }, select: { id: true, updatedAt: true }, orderBy: { id: 'asc' } }), before);
    assert.equal((await db.financialMovement.findUniqueOrThrow({ where: { id: movement.id } })).kind, 'CARD_PAYMENT');
    await db.learningRecord.update({ where: { plaidItemId_kind_externalKey: { plaidItemId: item.id, kind: 'TRANSACTION', externalKey: 'txn-0' } }, data: { payload: { ...payload(0), amountCents: 5100 } } });
    queries.length = 0;
    await ingestLearningRecordsForWorkspace(workspaceId);
    assert.equal(queries.filter(q => /^UPDATE /i.test(q)).length, 1);
    assert.equal((await db.financialMovement.findUniqueOrThrow({ where: { id: movement.id } })).amountCents, 5100);
    console.log(JSON.stringify({ records: 665, initialImportMs: Math.round(firstMs), unchangedImportMs: Math.round(warmMs), unchangedQueries: noOpQueries.length, unchangedWrites: 0 }));
  } finally {
    await db.$disconnect();
    await pool.end();
  }
});
