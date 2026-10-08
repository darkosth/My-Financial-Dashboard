import assert from 'node:assert/strict';
import test from 'node:test';
import { financeEventWhere, undoClassificationInTx } from './finance/events.ts';
import type { Tx } from './finance/core.ts';

function fixture(options: { latest?: string; actualCategory?: string; alreadyUndone?: boolean; movementWorkspace?: string; kind?: string } = {}) {
  const original = { id: 'event-1', workspaceId: 'workspace-a', action: 'CLASSIFIED', movementId: 'movement-1', payload: { before: { categoryId: null, subcategoryId: null }, after: { categoryId: 'food', subcategoryId: null } } };
  const writes: unknown[] = [], audits: unknown[] = [];
  const tx = {
    financeEvent: {
      findFirst: async ({ where }: { where: { id?: string; action?: string; workspaceId: string } }) => {
        assert.equal(where.workspaceId, 'workspace-a');
        if (where.id) return original;
        if (where.action === 'CLASSIFICATION_UNDONE') return options.alreadyUndone ? { id: 'undo' } : null;
        return { id: options.latest ?? original.id };
      },
      create: async (input: unknown) => { audits.push(input); },
    },
    financialMovement: {
      findFirst: async ({ where }: { where: { workspaceId: string } }) => options.movementWorkspace && options.movementWorkspace !== where.workspaceId ? null : { id: 'movement-1', categoryId: options.actualCategory ?? 'food', subcategoryId: null, kind: options.kind ?? 'EXPENSE', reversedAt: null },
      updateMany: async (input: { where: { categoryId: string }; data: unknown }) => { if (input.where.categoryId !== (options.actualCategory ?? 'food')) return { count: 0 }; writes.push(input); return { count: 1 }; },
    },
  } as unknown as Tx;
  return { tx, original, writes, audits };
}
test('history keyset keeps workspace and date boundaries, breaks equal timestamp ties by id', () => {
  const cursor = Buffer.from(JSON.stringify({ id: 'event-2', createdAt: '2026-10-07T12:00:00.000Z' })).toString('base64url');
  assert.deepEqual(financeEventWhere('workspace-a', { from: '2026-10-01', to: '2026-10-07', cursor }), {
    workspaceId: 'workspace-a', createdAt: { gte: new Date('2026-10-01'), lt: new Date('2026-10-08') },
    OR: [{ createdAt: { lt: new Date('2026-10-07T12:00:00Z') } }, { createdAt: new Date('2026-10-07T12:00:00Z'), id: { lt: 'event-2' } }],
  });
  assert.throws(() => financeEventWhere('workspace-a', { from: '2026-10-08', to: '2026-10-07' }));
  assert.throws(() => financeEventWhere('workspace-a', { from: '2026-10-01', to: '2026-10-07', cursor: 'corrupt' }));
});
test('classification undo restores snapshot and appends audit without mutating original event', async () => {
  const f = fixture(), before = structuredClone(f.original);
  await undoClassificationInTx(f.tx, 'workspace-a', 'user-1', 'event-1');
  assert.equal(f.writes.length, 1);
  assert.deepEqual(f.original, before);
  assert.deepEqual(f.audits, [{ data: { workspaceId: 'workspace-a', userId: 'user-1', action: 'CLASSIFICATION_UNDONE', movementId: 'movement-1', payload: { eventId: 'event-1', before: { categoryId: 'food', subcategoryId: null }, after: { categoryId: null, subcategoryId: null } } } }]);
});
test('classification undo rejects stale event, changed current value, transferred or foreign movement', async () => {
  for (const options of [{ latest: 'newer-event' }, { actualCategory: 'housing' }, { kind: 'TRANSFER' }, { movementWorkspace: 'workspace-b' }]) {
    const f = fixture(options);
    await assert.rejects(undoClassificationInTx(f.tx, 'workspace-a', 'user-1', 'event-1'));
    assert.equal(f.writes.length, 0); assert.equal(f.audits.length, 0);
  }
});
test('repeated undo is idempotent', async () => {
  const f = fixture({ alreadyUndone: true });
  await undoClassificationInTx(f.tx, 'workspace-a', 'user-1', 'event-1');
  assert.equal(f.writes.length, 0); assert.equal(f.audits.length, 0);
});
