import { addDays, endOfMonth, parseISO } from 'date-fns';
import { getCalendarDateKey } from '../calendarDate';
import { getTemplateCycleReference, getTemplateOccurrenceInInterval } from '../waterfallCalculations';
import type { LearningPaymentCatalogItem } from '../learningMatcher';

/** A selected period is a calendar boundary, not a bank transaction date. */
export function resolveFinancePeriod(item: LearningPaymentCatalogItem, cycle: string) {
  const start = parseISO(cycle);
  const scheduled = { ...item, id: item.targetId, amount: item.amountCents / 100 };
  const occurrence = getTemplateOccurrenceInInterval(scheduled, {
    start, end: item.frequency === 'MONTHLY' ? endOfMonth(start) : addDays(start, 6),
  });
  if (!occurrence || getCalendarDateKey(getTemplateCycleReference(scheduled, occurrence)) !== cycle) return null;
  return { cycleReference: cycle, occurrenceDate: getCalendarDateKey(occurrence) };
}
