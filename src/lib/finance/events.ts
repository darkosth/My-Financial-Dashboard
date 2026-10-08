import type { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';
import { ValidationError } from '@/lib/actions/validation';
import { atomic, audit, dateOnly, movementFor, type Tx } from '@/lib/finance/core';

export type FinanceEventsInput = { from: string; to: string; cursor?: string; limit?: number };
export type FinanceHistoryEvent = { id: string; action: string; label: string; createdAt: string; movementId: string | null; movementName: string | null; details: string[]; canUndoClassification: boolean };
export type FinanceEventsPage = { items: FinanceHistoryEvent[]; nextCursor: string | null };
const labels: Record<string, string> = {
  MANUAL_PAYMENT_REPLACED: 'Pago manual sustituido por cargo bancario', MANUAL_PAYMENT_RESTORED: 'Pago manual restaurado',
  RECONCILED: 'Pago confirmado', RECONCILIATION_UNDONE: 'Conciliación deshecha', MANUAL_PAYMENT_CREATED: 'Pago manual registrado', CASH_ADJUSTED: 'Efectivo ajustado', CLOSURE_CHANGED: 'Cierre actualizado', CLASSIFIED: 'Clasificación guardada', CLASSIFICATION_UNDONE: 'Clasificación deshecha', CASH_TRANSFER: 'Retiro hacia efectivo', TRANSFER_PAIRED: 'Transferencia vinculada', TRANSFER_UNDONE: 'Transferencia deshecha', MANUAL_PAYMENT_REVERSED: 'Movimiento anulado', CATEGORY_CREATED: 'Categoría creada', CATEGORY_UPDATED: 'Categoría actualizada', EXISTING_PAYMENT_LINKED: 'Pago existente vinculado', BANK_CHANGE_ACCEPTED: 'Cambio bancario aceptado', BANK_CHANGE_DETECTED: 'Cambio bancario pendiente de revisión', MOVEMENT_TREATMENT_CHANGED: 'Tipo de movimiento actualizado',
};
function object(value: unknown): Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}; }
type Classification = { categoryId: string | null; subcategoryId: string | null };
export function classificationSnapshot(value: unknown): Classification | null {
  const row = object(value);
  return (row.categoryId === null || typeof row.categoryId === 'string') && (row.subcategoryId === null || typeof row.subcategoryId === 'string') ? { categoryId: row.categoryId, subcategoryId: row.subcategoryId } : null;
}
export function financeEventWhere(workspaceId: string, input: FinanceEventsInput): Prisma.FinanceEventWhereInput {
  const from = dateOnly(input.from), to = dateOnly(input.to);
  if (from > to) throw new ValidationError('El inicio debe ser anterior al final.');
  to.setUTCDate(to.getUTCDate() + 1);
  let cursor: { createdAt: Date; id: string } | undefined;
  if (input.cursor) {
    try {
      const parsed = JSON.parse(Buffer.from(input.cursor, 'base64url').toString());
      if (typeof parsed.id !== 'string' || !parsed.id || typeof parsed.createdAt !== 'string' || !Number.isFinite(Date.parse(parsed.createdAt))) throw new Error();
      cursor = { id: parsed.id, createdAt: new Date(parsed.createdAt) };
    } catch { throw new ValidationError('Página de historial inválida.'); }
  }
  return { workspaceId, createdAt: { gte: from, lt: to }, ...(cursor ? { OR: [{ createdAt: { lt: cursor.createdAt } }, { createdAt: cursor.createdAt, id: { lt: cursor.id } }] } : {}) };
}
export async function loadFinanceEvents(workspaceId: string, input: FinanceEventsInput): Promise<FinanceEventsPage> {
  const limit = input.limit ?? 50;
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new ValidationError('Tamaño de página inválido.');
  const rows = await prisma.financeEvent.findMany({ where: financeEventWhere(workspaceId, input), orderBy: [{ createdAt: 'desc' }, { id: 'desc' }], take: limit + 1 });
  const page = rows.slice(0, limit);
  const movementIds = page.flatMap(e => e.movementId ? [e.movementId] : []);
  const [movements, categories, subcategories, latest] = await Promise.all([
    prisma.financialMovement.findMany({ where: { workspaceId, id: { in: movementIds } } }),
    prisma.financeCategory.findMany({ where: { workspaceId } }),
    prisma.financeSubcategory.findMany({ where: { category: { workspaceId } } }),
    prisma.financeEvent.findMany({ where: { workspaceId, movementId: { in: movementIds }, action: { in: ['CLASSIFIED', 'CLASSIFICATION_UNDONE'] } }, distinct: ['movementId'], orderBy: [{ createdAt: 'desc' }, { id: 'desc' }] }),
  ]);
  const categoryLabel = (state: Classification) => [categories.find(c => c.id === state.categoryId)?.name ?? (state.categoryId ? 'Categoría eliminada' : 'Sin categoría'), subcategories.find(s => s.id === state.subcategoryId)?.name].filter(Boolean).join(' / ');
  return {
    items: page.map(e => {
      const payload = object(e.payload), before = classificationSnapshot(payload.before), after = classificationSnapshot(payload.after);
      const movement = movements.find(m => m.id === e.movementId);
      const details: string[] = [];
      if (before && after) details.push(`${categoryLabel(before)} → ${categoryLabel(after)}`);
      else if (typeof payload.before === 'string' && typeof payload.after === 'string') details.push(`${payload.before} → ${payload.after}`);
      if (typeof payload.amountCents === 'number') details.push(new Intl.NumberFormat('es', { style: 'currency', currency: movement?.currency ?? 'USD' }).format(payload.amountCents / 100));
      if (typeof payload.reason === 'string') details.push(payload.reason);
      if (typeof payload.name === 'string') details.push(payload.name);
      return { id: e.id, action: e.action, label: labels[e.action] ?? 'Operación registrada', createdAt: e.createdAt.toISOString(), movementId: e.movementId, movementName: movement?.name ?? null, details, canUndoClassification: e.action === 'CLASSIFIED' && !!before && !!after && !!movement && !movement.reversedAt && movement.kind !== 'TRANSFER' && latest.find(l => l.movementId === e.movementId)?.id === e.id && movement.categoryId === after.categoryId && movement.subcategoryId === after.subcategoryId };
    }),
    nextCursor: rows.length > limit ? Buffer.from(JSON.stringify({ createdAt: page.at(-1)!.createdAt.toISOString(), id: page.at(-1)!.id })).toString('base64url') : null,
  };
}
export async function undoClassificationInTx(tx: Tx, workspaceId: string, userId: string, eventId: string) {
  const event = await tx.financeEvent.findFirst({ where: { id: eventId, workspaceId, action: 'CLASSIFIED' } });
  if (!event?.movementId) throw new ValidationError('Clasificación no disponible.');
  const payload = object(event.payload), before = classificationSnapshot(payload.before), after = classificationSnapshot(payload.after);
  if (!before || !after) throw new ValidationError('Esta operación no contiene una clasificación anterior.');
  if (await tx.financeEvent.findFirst({ where: { workspaceId, action: 'CLASSIFICATION_UNDONE', payload: { path: ['eventId'], equals: eventId } } })) return;
  const movement = await movementFor(tx, workspaceId, event.movementId);
  const latest = await tx.financeEvent.findFirst({ where: { workspaceId, movementId: event.movementId, action: { in: ['CLASSIFIED', 'CLASSIFICATION_UNDONE'] } }, orderBy: [{ createdAt: 'desc' }, { id: 'desc' }] });
  if (latest?.id !== event.id || movement.kind === 'TRANSFER') throw new ValidationError('La clasificación cambió después de esta operación. Modifica la categoría desde el movimiento.');
  // Restoring archived classifications is allowed: this is a historical restoration.
  if (before.categoryId && !await tx.financeCategory.findFirst({ where: { id: before.categoryId, workspaceId } })) throw new ValidationError('La categoría anterior ya no está disponible.');
  if (before.subcategoryId && !await tx.financeSubcategory.findFirst({ where: { id: before.subcategoryId, categoryId: before.categoryId ?? '', category: { workspaceId } } })) throw new ValidationError('La subcategoría anterior ya no está disponible.');
  const changed = await tx.financialMovement.updateMany({ where: { id: movement.id, workspaceId, categoryId: after.categoryId, subcategoryId: after.subcategoryId, reversedAt: null }, data: before });
  if (changed.count !== 1) throw new ValidationError('La clasificación cambió después de esta operación. Actualiza el historial.');
  await audit(tx, workspaceId, userId, 'CLASSIFICATION_UNDONE', movement.id, { eventId, before: after, after: before });
}
export async function undoClassification(workspaceId: string, userId: string, input: { eventId: string }) {
  return atomic(workspaceId, tx => undoClassificationInTx(tx, workspaceId, userId, input.eventId));
}
