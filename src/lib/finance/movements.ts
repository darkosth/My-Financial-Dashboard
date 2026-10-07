import { ValidationError, parseRequiredText } from '@/lib/actions/validation';
import { readLearningTransaction, toLearningJson } from '@/lib/learningStore';
import { atomic, audit, categoryFor, cashDelta, cents, dateOnly, movementFor } from './core';
import { reconcileInTx, undoInTx } from './reconciliation';

export type ManualInput = {
  requestId: string; name: string; amountCents: number; date: string;
  source: 'CASH' | 'CREDIT'; kind?: 'EXPENSE' | 'INCOME' | 'CARD_PAYMENT';
  categoryId?: string | null; subcategoryId?: string | null;
  targetId?: string; cycleReference?: string;
};

export async function createManualMovement(workspaceId: string, userId: string, input: ManualInput) {
  cents(input.amountCents);
  const cardTarget = input.targetId?.startsWith('credit-card:') ?? false;
  const kind = cardTarget ? 'CARD_PAYMENT' : input.kind ?? 'EXPENSE';
  if (
    !['CASH', 'CREDIT'].includes(input.source) ||
    !['EXPENSE', 'INCOME', 'CARD_PAYMENT'].includes(kind) ||
    (input.source === 'CREDIT' && kind !== 'EXPENSE') ||
    (kind === 'CARD_PAYMENT' && (input.source !== 'CASH' || !cardTarget))
  ) {
    throw new ValidationError('Medio o tipo de pago inválido.');
  }
  const date = dateOnly(input.date);
  const requestId = parseRequiredText(input.requestId);
  const name = parseRequiredText(input.name);
  return atomic(workspaceId, async tx => {
    const existing = await tx.financialMovement.findUnique({ where: { workspaceId_requestId: { workspaceId, requestId } } });
    if (existing) return { id: existing.id };
    await categoryFor(tx, workspaceId, input.categoryId, input.subcategoryId);
    const amountCents = kind === 'INCOME' ? -input.amountCents : input.amountCents;
    if (input.source === 'CASH') await cashDelta(tx, workspaceId, -amountCents);
    const row = await tx.financialMovement.create({ data: {
      workspaceId, requestId, name, amountCents, date, source: input.source, kind,
      categoryId: input.categoryId ?? null, subcategoryId: input.subcategoryId ?? null,
    } });
    if (input.targetId) {
      if (!input.cycleReference) throw new ValidationError('Selecciona el período.');
      await reconcileInTx(tx, workspaceId, userId, { movementId: row.id, targetId: input.targetId, cycleReference: input.cycleReference });
    }
    await audit(tx, workspaceId, userId, 'MANUAL_PAYMENT_CREATED', row.id, { source: input.source, amountCents });
    return { id: row.id };
  });
}

export async function adjustCash(workspaceId: string, userId: string, input: { requestId: string; amountCents: number; reason: string; date: string }) {
  const amount = cents(input.amountCents, true);
  const reason = parseRequiredText(input.reason, 'Motivo', { maxLength: 160 });
  const date = dateOnly(input.date);
  const requestId = parseRequiredText(input.requestId);
  return atomic(workspaceId, async tx => {
    const prior = await tx.financialMovement.findUnique({ where: { workspaceId_requestId: { workspaceId, requestId } } });
    if (prior) return { id: prior.id };
    await cashDelta(tx, workspaceId, amount);
    const row = await tx.financialMovement.create({ data: { workspaceId, requestId, amountCents: -amount, name: reason, date, source: 'ADJUSTMENT', kind: 'ADJUSTMENT' } });
    await audit(tx, workspaceId, userId, 'CASH_ADJUSTED', row.id, { amountCents: amount, reason });
    return { id: row.id };
  });
}

export async function classifyMovement(workspaceId: string, userId: string, input: { movementId: string; categoryId: string | null; subcategoryId: string | null }) {
  return atomic(workspaceId, async tx => {
    const row = await movementFor(tx, workspaceId, input.movementId);
    await categoryFor(tx, workspaceId, input.categoryId, input.subcategoryId);
    await tx.financialMovement.update({ where: { id: row.id }, data: { categoryId: input.categoryId, subcategoryId: input.subcategoryId } });
    await audit(tx, workspaceId, userId, 'CLASSIFIED', row.id, { before: { categoryId: row.categoryId, subcategoryId: row.subcategoryId }, after: input });
  });
}

export async function reverseManualMovement(workspaceId: string, userId: string, movementId: string) {
  return atomic(workspaceId, async tx => {
    const row = await tx.financialMovement.findFirst({ where: { id: movementId, workspaceId } });
    if (!row) throw new ValidationError('Movimiento no disponible.');
    if (row.reversedAt) return;
    if (row.source === 'BANK' || row.kind === 'TRANSFER') throw new ValidationError('Este movimiento no puede anularse como pago manual.');
    await undoInTx(tx, workspaceId, userId, row.id);
    if (row.source === 'CASH' || row.source === 'ADJUSTMENT') await cashDelta(tx, workspaceId, row.amountCents);
    await tx.financialMovement.update({ where: { id: row.id }, data: { reversedAt: new Date() } });
    await audit(tx, workspaceId, userId, 'MANUAL_PAYMENT_REVERSED', row.id);
  });
}

export async function resolveBankChange(workspaceId: string, userId: string, movementId: string) {
  return atomic(workspaceId, async tx => {
    const row = await movementFor(tx, workspaceId, movementId);
    if (row.source !== 'BANK') throw new ValidationError('Selecciona un movimiento bancario.');
    if (await tx.financeReconciliation.findFirst({ where: { workspaceId, activeMovementId: row.id } }) || await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: row.id }, { incomingId: row.id }] } })) {
      throw new ValidationError('Deshaz la conciliación o transferencia antes de aceptar el cambio.');
    }
    await tx.financialMovement.update({ where: { id: row.id }, data: { needsReview: false } });
    await audit(tx, workspaceId, userId, 'BANK_CHANGE_ACCEPTED', row.id, { amountCents: row.amountCents, status: row.status, currency: row.currency });
  });
}

export async function setMovementTreatment(workspaceId: string, userId: string, input: { movementId: string; treatment: 'EXPENSE' | 'INCOME' | 'CARD_PAYMENT' | 'REFUND'; refundOfId?: string }) {
  return atomic(workspaceId, async tx => {
    const row = await movementFor(tx, workspaceId, input.movementId);
    if (row.source !== 'BANK' || row.status !== 'POSTED' || row.needsReview) throw new ValidationError('Selecciona un movimiento bancario contabilizado sin revisión pendiente.');
    if (!['EXPENSE', 'INCOME', 'CARD_PAYMENT', 'REFUND'].includes(input.treatment)) throw new ValidationError('Tipo de movimiento inválido.');
    if ((['EXPENSE', 'CARD_PAYMENT'].includes(input.treatment) && row.amountCents <= 0) || (['INCOME', 'REFUND'].includes(input.treatment) && row.amountCents >= 0)) throw new ValidationError('El tipo no corresponde al sentido del movimiento.');
    if (await tx.financeReconciliation.findFirst({ where: { workspaceId, activeMovementId: row.id } }) || await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: row.id }, { incomingId: row.id }] } })) throw new ValidationError('Deshaz la vinculación antes de cambiar el tipo.');
    const original = input.treatment === 'REFUND' ? await tx.financialMovement.findFirst({ where: { id: input.refundOfId ?? '', workspaceId, kind: 'EXPENSE', reversedAt: null, status: 'POSTED', currency: row.currency, amountCents: { gt: 0 } } }) : null;
    if (input.treatment === 'REFUND' && !original) throw new ValidationError('Selecciona el gasto original de la devolución.');
    if (original) {
      const priorRefunds = await tx.financialMovement.aggregate({ where: { workspaceId, refundOfId: original.id, reversedAt: null, status: 'POSTED' }, _sum: { amountCents: true } });
      const refunded = Math.abs(priorRefunds._sum.amountCents ?? 0);
      if (refunded + Math.abs(row.amountCents) > original.amountCents) throw new ValidationError('La devolución supera el importe de la compra original.');
    }
    await tx.financialMovement.update({ where: { id: row.id }, data: {
      kind: input.treatment, refundOfId: original?.id ?? null,
      ...(original ? { categoryId: original.categoryId, subcategoryId: original.subcategoryId } : {}),
    } });
    await audit(tx, workspaceId, userId, 'MOVEMENT_TREATMENT_CHANGED', row.id, { before: row.kind, after: input.treatment, refundOfId: original?.id ?? null });
  });
}

export async function ingestLearningRecordsForWorkspace(workspaceId: string) {
  return atomic(workspaceId, async tx => {
    const accounts = await tx.plaidRemoteAccount.findMany({ where: { workspaceId, kind: 'DEPOSITORY', isImported: true, importedAccountId: { not: null } } });
    const records = await tx.learningRecord.findMany({ where: { workspaceId, kind: 'TRANSACTION' }, orderBy: { createdAt: 'asc' } });
    const superseded = new Set(records.flatMap(record => {
      const payload = readLearningTransaction(record.payload);
      return payload && !payload.pending && payload.pendingTransactionId ? [`${record.plaidItemId}:${payload.pendingTransactionId}`] : [];
    }));
    for (const record of records) {
      const payload = readLearningTransaction(record.payload);
      const account = payload && accounts.find(a => a.plaidAccountId === payload.accountId && a.plaidItemId === record.plaidItemId);
      if (!payload || !account) continue;
      if (!Number.isSafeInteger(payload.amountCents) || Math.abs(payload.amountCents) > 1_000_000_000) throw new ValidationError('Importe bancario fuera de rango.');
      const externalKey = `${record.plaidItemId}:${payload.transactionId}`;
      const previous = await tx.financialMovement.findUnique({ where: { workspaceId_externalKey: { workspaceId, externalKey } }, include: { reconciliations: { where: { reversedAt: null } } } });
      const pending = payload.pendingTransactionId ? await tx.financialMovement.findUnique({ where: { workspaceId_externalKey: { workspaceId, externalKey: `${record.plaidItemId}:${payload.pendingTransactionId}` } } }) : null;
      const transfer = previous ? await tx.financeTransfer.findFirst({ where: { workspaceId, OR: [{ outgoingId: previous.id }, { incomingId: previous.id }] } }) : null;
      const currency = payload.isoCurrencyCode ?? 'USD';
      const status = payload.removedAt || superseded.has(externalKey) ? 'REMOVED' : payload.pending ? 'PENDING' : 'POSTED';
      const changed = !!previous && (!!previous.reconciliations.length || !!transfer) && (
        previous.amountCents !== payload.amountCents || previous.currency !== currency ||
        previous.date.toISOString().slice(0, 10) !== payload.date || previous.status !== status
      );
      const data = { name: payload.merchantName || payload.name, amountCents: payload.amountCents, currency, date: dateOnly(payload.date), status, accountId: account.importedAccountId, bankPayload: toLearningJson(payload) };
      if (previous) {
        await tx.financialMovement.update({ where: { id: previous.id }, data: {
          ...data, needsReview: previous.needsReview || changed,
          ...(['EXPENSE', 'INCOME'].includes(previous.kind) && !changed ? { kind: payload.amountCents < 0 ? 'INCOME' : 'EXPENSE' } : {}),
        } });
        if (changed && !previous.needsReview) await audit(tx, workspaceId, 'bank-sync', 'BANK_CHANGE_DETECTED', previous.id, { previousAmountCents: previous.amountCents, amountCents: payload.amountCents, previousStatus: previous.status, status });
      } else {
        await tx.financialMovement.create({ data: { ...data, workspaceId, externalKey, source: 'BANK', kind: payload.amountCents < 0 ? 'INCOME' : 'EXPENSE', categoryId: pending?.categoryId, subcategoryId: pending?.subcategoryId } });
      }
    }
  });
}
