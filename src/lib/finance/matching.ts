import { buildRankedLearningSuggestions, type LearningConfirmationSignal, type LearningRejectionSignal } from '../learningMatcher';
import type { LearningTransactionPayload } from '../learningTypes';
import type { Occurrence } from './uiTypes';

export const dateDistance = (a: string, b: string) =>
  Math.abs(Date.parse(a.slice(0, 10) + 'T12:00:00Z') - Date.parse(b.slice(0, 10) + 'T12:00:00Z'));

/** Rank one nearby period per expense, using the same scoring as the dashboard. */
export function rankFinanceOccurrences(
  transaction: LearningTransactionPayload,
  occurrences: Occurrence[],
  confirmations: LearningConfirmationSignal[] = [],
  rejections: LearningRejectionSignal[] = [],
) {
  const reference = transaction.authorizedDate ?? transaction.date;
  const nearest = new Map<string, Occurrence>();
  for (const o of occurrences) {
    if ((o.currency ?? 'USD') !== (transaction.isoCurrencyCode ?? 'USD')) continue;
    const prior = nearest.get(o.targetId);
    if (!prior || dateDistance(o.occurrenceDate ?? o.weekStart, reference) < dateDistance(prior.occurrenceDate ?? prior.weekStart, reference)) nearest.set(o.targetId, o);
  }
  const ranked = buildRankedLearningSuggestions({ transaction, confirmations, rejections,
    candidates: [...nearest.values()].map(o => ({
      templateId: o.targetId, name: o.name, amountCents: o.expectedCents,
      category: o.categoryLabel ?? '', cycleReference: o.cycleReference,
      occurrenceDate: o.occurrenceDate ?? o.weekStart,
    })),
  });
  return ranked.flatMap(candidate => {
    const occurrence = nearest.get(candidate.templateId);
    return occurrence ? [occurrence.id] : [];
  });
}
