import { addDays, startOfDay } from "date-fns";
import type {
  CreditCardHistoryRecordLike,
  HistoryRecordLike,
  PaymentCarryoverLike,
  ScheduledPayment,
} from "@/lib/financeEngine";
import { getCalendarEventsForDay } from "@/lib/financeEngine";
import { getCalendarDateKey, normalizeCalendarDate } from "@/lib/calendarDate";
import { getTemplatePaidAmountForOccurrence } from "@/lib/waterfallCalculations";

export type TelegramNotificationCandidate = {
  amount: number;
  eventId: string;
  kind: "TEMPLATE" | "CREDIT_CARD" | "CARRYOVER";
  leadDays: number;
  name: string;
  occurrenceDate: Date;
  occurrenceDateKey: string;
};

export const collectTelegramNotificationCandidates = ({
  carryovers,
  creditCardHistoryRecords,
  historyRecords,
  scheduledPayments,
  today,
}: {
  carryovers: PaymentCarryoverLike[];
  creditCardHistoryRecords: CreditCardHistoryRecordLike[];
  historyRecords: HistoryRecordLike[];
  scheduledPayments: ScheduledPayment[];
  today: Date;
}): TelegramNotificationCandidate[] => {
  const normalizedToday = startOfDay(normalizeCalendarDate(today) ?? today);

  return [0, 1].flatMap((leadDays) => {
    const targetDate = addDays(normalizedToday, leadDays);
    const events = getCalendarEventsForDay({
      scheduledPayments,
      historyRecords,
      creditCardHistoryRecords,
      carryovers,
      today: normalizedToday,
      targetDate,
    });

    return events.flatMap<TelegramNotificationCandidate>((event) => {
      if (event.type === "scheduled") {
        const kind = event.kind === "credit-card" ? "CREDIT_CARD" : "TEMPLATE";
        const scheduledPayment = scheduledPayments.find((payment) => payment.id === event.templateId);
        const paidAmount = scheduledPayment
          ? getTemplatePaidAmountForOccurrence(scheduledPayment, event.occurrenceDate, historyRecords, creditCardHistoryRecords)
          : 0;
        return [{
          amount: Math.max(event.amount - paidAmount, 0),
          eventId: event.templateId,
          kind,
          leadDays,
          name: event.name,
          occurrenceDate: event.occurrenceDate,
          occurrenceDateKey: getCalendarDateKey(event.occurrenceDate),
        } satisfies TelegramNotificationCandidate];
      }

      if (event.type === "carryover") {
        return [{
          amount: event.amount,
          eventId: event.carryoverId,
          kind: "CARRYOVER",
          leadDays,
          name: event.name,
          occurrenceDate: event.occurrenceDate,
          occurrenceDateKey: getCalendarDateKey(event.occurrenceDate),
        } satisfies TelegramNotificationCandidate];
      }

      return [];
    });
  });
};
