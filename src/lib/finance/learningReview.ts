import { readLearningTransaction, toLearningJson } from '@/lib/learningStore';
import type { FinancialMovement } from '@prisma/client';
import type { Tx } from './core';
export async function updateLearningReview(tx: Tx, workspaceId: string, userId: string, movement: FinancialMovement, selection: { targetId: string; cycleReference: string } | null) {
  if (movement.source !== 'BANK' || !movement.externalKey) return;
  const separator = movement.externalKey.indexOf(':');
  if (separator < 1) return;
  const record = await tx.learningRecord.findFirst({ where: {
    workspaceId, kind: 'TRANSACTION',
    plaidItemId: movement.externalKey.slice(0, separator),
    externalKey: movement.externalKey.slice(separator + 1),
  } });
  if (record) {
    const payload = readLearningTransaction(record.payload);
    if (!payload || `${record.plaidItemId}:${payload.transactionId}` !== movement.externalKey) return;
    await tx.learningRecord.update({ where: { id: record.id }, data: { payload: toLearningJson({ ...payload, review: selection ? {
      outcome: 'MANUAL_SELECTION', rejectedTemplateId: null, reviewedAt: new Date().toISOString(), reviewedByUserId: userId,
      selectedCycleReference: selection.cycleReference, selectedTemplateId: selection.targetId,
    } : null }) } });
  }
}
