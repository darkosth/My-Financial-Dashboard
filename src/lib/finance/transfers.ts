import { ValidationError } from '@/lib/actions/validation';
import { Prisma } from '@prisma/client';
import { atomic, audit, cashDelta, movementFor, type Tx } from './core';

type Classification = { kind: string; categoryId: string | null; subcategoryId: string | null };
const classification = (row: { kind: string; categoryId: string | null; subcategoryId: string | null }): Classification => ({
  kind: row.kind,
  categoryId: row.categoryId,
  subcategoryId: row.subcategoryId,
});
const previousClassification = (value: Prisma.JsonValue | null, id: string): Classification | null => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const previous = value[id];
  if (!previous || typeof previous !== 'object' || Array.isArray(previous)) return null;
  const kind = previous.kind;
  const categoryId = previous.categoryId;
  const subcategoryId = previous.subcategoryId;
  if (typeof kind !== 'string') return null;
  return {
    kind,
    categoryId: typeof categoryId === 'string' ? categoryId : null,
    subcategoryId: typeof subcategoryId === 'string' ? subcategoryId : null,
  };
};

async function available(tx: Tx, workspaceId: string, id: string) {
  const row = await movementFor(tx, workspaceId, id);
  if (row.source !== 'BANK' || row.status !== 'POSTED' || row.needsReview) throw new ValidationError('Selecciona un movimiento bancario contabilizado.');
  if (row.replacedManualState || await tx.financeReconciliation.findFirst({ where: { workspaceId, activeMovementId: id } })) throw new ValidationError('Deshaz la conciliación antes de transferir.');
  return row;
}

async function transferCategory(tx: Tx, workspaceId: string) {
  return (await tx.financeCategory.findFirst({ where: { workspaceId, nameKey: 'transferencias propias' } }))?.id ?? null;
}

export async function transferToCash(workspaceId: string, userId: string, movementId: string) {
  return atomic(workspaceId, async tx => {
    const row = await available(tx, workspaceId, movementId);
    if (row.currency !== 'USD') throw new ValidationError('Efectivo usa USD.');
    const existing = await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: row.id }, { incomingId: row.id }] } });
    if (existing) {
      if (existing.cashDeltaCents !== 0) return;
      throw new ValidationError('El movimiento ya pertenece a otra transferencia.');
    }
    if (row.amountCents === 0) throw new ValidationError('Importe inválido.');
    await cashDelta(tx, workspaceId, row.amountCents);
    const categoryId = await transferCategory(tx, workspaceId);
    const cashMovement = await tx.financialMovement.create({ data: {
      workspaceId, source: 'CASH', kind: 'TRANSFER', status: 'POSTED',
      name: row.amountCents > 0 ? 'Retiro hacia Efectivo' : 'Depósito desde Efectivo',
      amountCents: -row.amountCents, date: row.date, currency: row.currency, categoryId,
    } });
    await tx.financialMovement.update({ where: { id: row.id }, data: { kind: 'TRANSFER', categoryId, subcategoryId: null } });
    const transfer = await tx.financeTransfer.create({ data: {
      workspaceId, outgoingId: row.amountCents > 0 ? row.id : cashMovement.id,
      incomingId: row.amountCents > 0 ? cashMovement.id : row.id, cashDeltaCents: row.amountCents,
      previousState: { [row.id]: classification(row) },
    } });
    await audit(tx, workspaceId, userId, 'CASH_TRANSFER', row.id, { transferId: transfer.id, cashMovementId: cashMovement.id, amountCents: row.amountCents, previousClassification: classification(row) });
  });
}

export async function pairTransfer(workspaceId: string, userId: string, input: { movementId: string; counterpartId: string }) {
  return atomic(workspaceId, async tx => {
    const first = await available(tx, workspaceId, input.movementId);
    const second = await available(tx, workspaceId, input.counterpartId);
    if (first.id === second.id || first.accountId === second.accountId || first.currency !== second.currency || first.amountCents !== -second.amountCents || first.amountCents === 0) throw new ValidationError('La transferencia debe tener importes opuestos, misma moneda y cuentas distintas.');
    const ids = [first.id, second.id];
    const existing = await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: { in: ids } }, { incomingId: { in: ids } }] } });
    if (existing) {
      if (ids.includes(existing.outgoingId) && existing.incomingId && ids.includes(existing.incomingId)) return;
      throw new ValidationError('Movimiento ya transferido.');
    }
    const outgoing = first.amountCents > 0 ? first : second;
    const incoming = first.amountCents < 0 ? first : second;
    const previousState: Prisma.InputJsonObject = {
      [outgoing.id]: classification(outgoing),
      [incoming.id]: classification(incoming),
    };
    await tx.financeTransfer.create({ data: { workspaceId, outgoingId: outgoing.id, incomingId: incoming.id, previousState } });
    await tx.financialMovement.updateMany({ where: { workspaceId, id: { in: ids } }, data: { kind: 'TRANSFER', categoryId: await transferCategory(tx, workspaceId), subcategoryId: null } });
    await audit(tx, workspaceId, userId, 'TRANSFER_PAIRED', first.id, { counterpartId: second.id, previousState });
  });
}

export async function undoTransfer(workspaceId: string, userId: string, movementId: string) {
  return atomic(workspaceId, async tx => {
    const movement = await movementFor(tx, workspaceId, movementId);
    const transfer = await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: movement.id }, { incomingId: movement.id }] } });
    if (!transfer) return;
    const ids = [transfer.outgoingId, ...(transfer.incomingId ? [transfer.incomingId] : [])];
    const movements = await tx.financialMovement.findMany({ where: { workspaceId, id: { in: ids } } });
    if (transfer.cashDeltaCents) await cashDelta(tx, workspaceId, -transfer.cashDeltaCents);
    for (const row of movements) {
      const previous = previousClassification(transfer.previousState, row.id);
      await tx.financialMovement.update({ where: { id: row.id }, data: row.source === 'CASH'
        ? { reversedAt: new Date() }
        : previous ?? { kind: row.amountCents < 0 ? 'INCOME' : 'EXPENSE', categoryId: null, subcategoryId: null } });
    }
    await tx.financeTransfer.delete({ where: { id: transfer.id } });
    await audit(tx, workspaceId, userId, 'TRANSFER_UNDONE', movement.id, { transferId: transfer.id, outgoingId: transfer.outgoingId, incomingId: transfer.incomingId, cashDeltaCents: transfer.cashDeltaCents });
  });
}
