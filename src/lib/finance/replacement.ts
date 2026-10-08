import { Prisma, type FinancialMovement } from '@prisma/client';
import { ValidationError } from '@/lib/actions/validation';
import { audit, manualBalanceDelta, movementFor, type Tx } from './core';

type ReplacementCandidate = Pick<FinancialMovement, 'source' | 'amountCents' | 'currency' | 'date' | 'accountId' | 'reversedAt' | 'kind'>;
export function eligibleManualReplacement(bank: ReplacementCandidate, manual: ReplacementCandidate) {
  return bank.source === 'BANK' && bank.amountCents > 0 && !manual.reversedAt &&
    ['CASH', 'CREDIT', 'DEBIT'].includes(manual.source) && ['EXPENSE', 'CARD_PAYMENT'].includes(manual.kind) &&
    manual.amountCents === bank.amountCents && manual.currency === bank.currency &&
    (!manual.accountId || manual.accountId === bank.accountId) &&
    Math.abs(new Date(manual.date).getTime() - new Date(bank.date).getTime()) <= 7 * 86400000;
}

export async function compatibleManualPayments(tx: Tx, workspaceId: string, movement: FinancialMovement) {
  if (movement.source !== 'BANK' || movement.amountCents <= 0) return [];
  const start = new Date(movement.date); start.setUTCDate(start.getUTCDate() - 7);
  const end = new Date(movement.date); end.setUTCDate(end.getUTCDate() + 7);
  return tx.financialMovement.findMany({ where: {
    workspaceId, source: { in: ['CASH', 'CREDIT', 'DEBIT'] }, kind: { in: ['EXPENSE', 'CARD_PAYMENT'] }, reversedAt: null,
    amountCents: movement.amountCents, currency: movement.currency,
    date: { gte: start, lte: end },
    OR: [{ accountId: null }, { accountId: movement.accountId }],
  }, include: { reconciliations: { where: { reversedAt: null }, include: { occurrence: true } } } });
}

type ReplacementState = {
  movementId: string; reconciliationId: string | null;
  bankCategoryId: string | null; bankSubcategoryId: string | null; bankKind: string;
};
export function replacementState(movement: FinancialMovement): ReplacementState | null {
  const value = movement.replacedManualState;
  if (!value || typeof value !== 'object' || Array.isArray(value) || typeof value.movementId !== 'string') return null;
  return value as unknown as ReplacementState;
}

export async function replaceInTx(tx: Tx, workspaceId: string, userId: string, bank: FinancialMovement, manualId: string) {
  if (bank.source !== 'BANK' || bank.status !== 'POSTED' || bank.needsReview || bank.replacedManualState || !['EXPENSE', 'CARD_PAYMENT'].includes(bank.kind))
    throw new ValidationError('Selecciona un cargo bancario contabilizado y disponible.');
  const manual = await movementFor(tx, workspaceId, manualId);
  if (!['CASH', 'CREDIT', 'DEBIT'].includes(manual.source) || manual.amountCents !== bank.amountCents || manual.currency !== bank.currency || !['EXPENSE', 'CARD_PAYMENT'].includes(manual.kind) || (manual.accountId && manual.accountId !== bank.accountId))
    throw new ValidationError('El pago manual debe coincidir en importe, moneda y cuenta.');
  if (await tx.financialMovement.count({ where: { workspaceId, refundOfId: manual.id, reversedAt: null } }))
    throw new ValidationError('Este pago tiene devoluciones; desvincúlalas antes de sustituirlo.');
  const previous = await tx.financeReconciliation.findUnique({ where: { activeMovementId: manual.id }, include: { occurrence: true } });
  await manualBalanceDelta(tx, workspaceId, manual, -1);
  if (previous) await tx.financeReconciliation.update({ where: { id: previous.id }, data: { activeMovementId: null, reversedAt: new Date() } });
  await tx.financialMovement.update({ where: { id: manual.id }, data: { reversedAt: new Date() } });
  const state: ReplacementState = { movementId: manual.id, reconciliationId: previous?.id ?? null, bankCategoryId: bank.categoryId, bankSubcategoryId: bank.subcategoryId, bankKind: bank.kind };
  await tx.financialMovement.update({ where: { id: bank.id }, data: { categoryId: manual.categoryId ?? bank.categoryId, subcategoryId: manual.categoryId ? manual.subcategoryId : bank.subcategoryId, kind: manual.kind, replacedManualState: state } });
  await audit(tx, workspaceId, userId, 'MANUAL_PAYMENT_REPLACED', bank.id, { manualMovementId: manual.id, reconciliationId: previous?.id ?? null });
  return previous;
}

export async function restoreReplacement(tx: Tx, workspaceId: string, userId: string, bank: FinancialMovement) {
  const state = replacementState(bank);
  if (!state) return;
  const manual = await tx.financialMovement.findFirst({ where: { id: state.movementId, workspaceId } });
  if (!manual || !manual.reversedAt) throw new ValidationError('No se puede restaurar el pago manual.');
  await manualBalanceDelta(tx, workspaceId, manual, 1);
  await tx.financialMovement.update({ where: { id: manual.id }, data: { reversedAt: null } });
  if (state.reconciliationId) await tx.financeReconciliation.update({ where: { id: state.reconciliationId }, data: { reversedAt: null, activeMovementId: manual.id } });
  await tx.financialMovement.update({ where: { id: bank.id }, data: { categoryId: state.bankCategoryId, subcategoryId: state.bankSubcategoryId, kind: state.bankKind, replacedManualState: Prisma.DbNull } });
  await audit(tx, workspaceId, userId, 'MANUAL_PAYMENT_RESTORED', bank.id, { manualMovementId: manual.id });
}
