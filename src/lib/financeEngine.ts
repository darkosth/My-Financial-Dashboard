import { startOfDay } from "date-fns";
import {
  calculateWaterfall,
  getTemplateCycleReference,
  getTemplateOccurrenceInInterval,
  getUpcomingPendingPayments,
  isTemplatePaidForOccurrence,
} from "@/lib/waterfallCalculations";
import { getCalendarDateKey, normalizeCalendarDate } from "@/lib/calendarDate";
import { getCreditCardEffectiveMinimumPayment } from "@/lib/creditCardReview";
import type { CurrentUserContext } from "@/lib/workspaceContext";

export type TemplateFrequency = "MONTHLY" | "WEEKLY" | "BIWEEKLY" | "YEARLY";

export type ScheduledPaymentKind = "template" | "credit-card";

export type ScheduledPayment = {
  id: string;
  name: string;
  amount: number;
  frequency: TemplateFrequency | string;
  dayOfMonth?: number | null;
  lastPaidAt?: Date | string | null;
  category?: string | null;
  isAutoPay?: boolean;
  kind?: ScheduledPaymentKind | string;
  dueDate?: number | null;
};

export type AccountLike = {
  id: string;
  name: string;
  balance: number;
  source?: "MANUAL" | "PLAID";
  institutionName?: string | null;
  mask?: string | null;
  subtype?: string | null;
  plaidItemId?: string | null;
  plaidStatus?: string | null;
  lastSyncedAt?: Date | string | null;
};

export type CreditCardLike = {
  id: string;
  name: string;
  dueDate?: number | null;
  balance: number;
  creditLimit: number;
  minimumPayment?: number | null;
  minimumPaymentPercentage?: number | null;
  apr?: number | null;
  lastReviewedAt?: Date | string | null;
  createdAt: Date | string;
  source?: "MANUAL" | "PLAID";
  institutionName?: string | null;
  mask?: string | null;
  subtype?: string | null;
  plaidItemId?: string | null;
  plaidStatus?: string | null;
  lastSyncedAt?: Date | string | null;
};

export type HistoryRecordLike = {
  id: string;
  templateId: string;
  datePaid: Date | string;
  amountPaid: number;
  cycleReference?: Date | string | null;
};

export type CreditCardHistoryRecordLike = {
  id: string;
  creditCardId: string;
  datePaid: Date | string;
  amountPaid: number;
  cycleReference?: Date | string | null;
};

export type PendingExpenseLike = {
  id: string;
  description?: string | null;
  amount: number;
  createdAt: Date | string;
};

export type PaymentCarryoverLike = {
  id: string;
  templateId: string;
  remainingAmount?: number | null;
  targetWeekStart: Date | string;
  originCycleReference: Date | string;
};

export type AppSettingsLike = {
  weeklyIncome?: number | null;
};

export type FinanceSnapshotInput = {
  context?: CurrentUserContext | null;
  accounts?: AccountLike[];
  creditCards?: CreditCardLike[];
  templates?: ScheduledPayment[];
  historyRecords?: HistoryRecordLike[];
  creditCardHistoryRecords?: CreditCardHistoryRecordLike[];
  carryovers?: PaymentCarryoverLike[];
  pendingExpenses?: PendingExpenseLike[];
  appSettings?: (AppSettingsLike & Record<string, unknown>) | null;
};

export const DEFAULT_WEEKLY_INCOME = 1000;

const getDayKey = (value: Date | string | null | undefined) => {
  if (!value) return "";
  return getCalendarDateKey(value);
};

export const buildScheduledCreditCardPayments = (creditCards: CreditCardLike[] = []): ScheduledPayment[] =>
  creditCards
    .map((card) => ({
      card,
      minimumPayment: getCreditCardEffectiveMinimumPayment(card),
    }))
    .filter(({ card, minimumPayment }) => minimumPayment > 0 && !!card.dueDate && card.balance > 0)
    .map(({ card, minimumPayment }) => ({
      id: `credit-card:${card.id}`,
      name: `${card.name} Minimum Payment`,
      amount: minimumPayment,
      frequency: "MONTHLY",
      dayOfMonth: card.dueDate ?? null,
      category: "DEBT",
      isAutoPay: false,
      kind: "credit-card",
    }));

export const getValidTemplates = (templates: ScheduledPayment[] = []) =>
  templates.filter(
    (template) =>
      (template.frequency === "MONTHLY" && !!template.dayOfMonth) ||
      ((template.frequency === "WEEKLY" || template.frequency === "BIWEEKLY" || template.frequency === "YEARLY") && !!template.lastPaidAt),
  );

export const getScheduledPayments = ({ templates = [], creditCards = [] }: { templates?: ScheduledPayment[]; creditCards?: CreditCardLike[] }) => [
  ...getValidTemplates(templates),
  ...buildScheduledCreditCardPayments(creditCards),
];

export const buildFinanceSnapshot = (data: FinanceSnapshotInput, todayInput: Date = new Date()) => {
  const today = startOfDay(normalizeCalendarDate(todayInput) ?? todayInput);
  const context = data.context ?? null;
  const accounts = data.accounts ?? [];
  const creditCards = data.creditCards ?? [];
  const templates = data.templates ?? [];
  const historyRecords = data.historyRecords ?? [];
  const creditCardHistoryRecords = data.creditCardHistoryRecords ?? [];
  const carryovers = data.carryovers ?? [];
  const pendingExpenses = data.pendingExpenses ?? [];
  const rawAppSettings = data.appSettings ?? undefined;
  const weeklyIncome = rawAppSettings?.weeklyIncome ?? DEFAULT_WEEKLY_INCOME;
  const appSettings = {
    ...(rawAppSettings ?? {}),
    weeklyIncome,
  };

  const scheduledPayments = getScheduledPayments({ templates, creditCards });
  const totalAccountBalances = accounts.reduce((acc, account) => acc + account.balance, 0);
  const pendingExpensesTotal = pendingExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalLiquidity = totalAccountBalances - pendingExpensesTotal;
  const totalDebt = creditCards.reduce((acc, card) => acc + card.balance, 0);
  const totalCreditLimit = creditCards.reduce((acc, card) => acc + card.creditLimit, 0);
  const totalAvailableCredit = totalCreditLimit - totalDebt;

  const waterfallData = calculateWaterfall({
    totalLiquidity,
    templates: scheduledPayments,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    today,
    standardWeeklyIncome: appSettings.weeklyIncome,
  });

  const upcomingPayments = getUpcomingPendingPayments({
    templates: scheduledPayments,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    today,
    weeksAhead: 2,
  });

  const totalUpcomingExpenses = upcomingPayments.reduce((acc: number, payment: { amount: number }) => acc + payment.amount, 0);
  const finalRemainingS4 = (waterfallData as Array<{ restante?: number }>)[3]?.restante ?? totalLiquidity;

  return {
    context,
    today,
    appSettings,
    scheduledPayments,
    accounts,
    creditCards,
    templates,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    pendingExpenses,
    totalAccountBalances,
    pendingExpensesTotal,
    totalLiquidity,
    totalDebt,
    totalCreditLimit,
    totalAvailableCredit,
    waterfallData,
    upcomingPayments,
    totalUpcomingExpenses,
    finalRemainingS4,
  };
};

export type CalendarEvent =
  | {
      id: string;
      name: string;
      amount: number;
      isPast: boolean;
      type: "history" | "credit-card-history" | "pending-expense";
    }
  | {
      id: string;
      carryoverId: string;
      templateId: string;
      kind: "template";
      name: string;
      amount: number;
      occurrenceDate: Date;
      sourceCycleReference: Date | string | null | undefined;
      isPast: false;
      type: "carryover";
    }
  | {
      id: string;
      templateId: string;
      kind: string;
      name: string;
      amount: number;
      occurrenceDate: Date;
      cycleReference: Date;
      isPast: boolean;
      type: "scheduled";
    };

export const getCalendarEventsForDay = ({
  scheduledPayments = [],
  historyRecords = [],
  creditCardHistoryRecords = [],
  carryovers = [],
  pendingExpenses = [],
  today = new Date(),
  targetDate,
}: {
  scheduledPayments?: ScheduledPayment[];
  historyRecords?: HistoryRecordLike[];
  creditCardHistoryRecords?: CreditCardHistoryRecordLike[];
  carryovers?: PaymentCarryoverLike[];
  pendingExpenses?: PendingExpenseLike[];
  today?: Date;
  targetDate: Date;
}): CalendarEvent[] => {
  const normalizedToday = startOfDay(normalizeCalendarDate(today) ?? today);
  const day = startOfDay(normalizeCalendarDate(targetDate) ?? targetDate);
  const events: CalendarEvent[] = [];
  const carryoverCycleKeys = new Set<string>();

  historyRecords.forEach((record) => {
    const recordDate = new Date(record.datePaid);
    if (startOfDay(recordDate).getTime() !== day.getTime()) return;

    const template = scheduledPayments.find((item) => item.id === record.templateId);
    events.push({
      id: `history-${record.id}`,
      name: template?.name || "Recorded payment",
      amount: record.amountPaid,
      isPast: true,
      type: "history",
    });
  });

  creditCardHistoryRecords.forEach((record) => {
    const recordDate = new Date(record.datePaid);
    if (startOfDay(recordDate).getTime() !== day.getTime()) return;

    const payment = scheduledPayments.find((item) => item.id === `credit-card:${record.creditCardId}`);
    events.push({
      id: `credit-card-history-${record.id}`,
      name: payment?.name || "Card payment",
      amount: record.amountPaid,
      isPast: true,
      type: "credit-card-history",
    });
  });

  pendingExpenses.forEach((expense) => {
    const expenseDate = new Date(expense.createdAt);
    if (startOfDay(expenseDate).getTime() !== day.getTime()) return;

    events.push({
      id: `pending-${expense.id}`,
      name: expense.description || "One-time expense",
      amount: expense.amount,
      isPast: true,
      type: "pending-expense",
    });
  });

  carryovers.forEach((carryover) => {
    if ((carryover.remainingAmount ?? 0) <= 0) return;

    const targetWeekStart = startOfDay(normalizeCalendarDate(carryover.targetWeekStart) ?? new Date(carryover.targetWeekStart));
    if (targetWeekStart.getTime() !== day.getTime()) return;

    const template = scheduledPayments.find((item) => item.kind !== "credit-card" && item.id === carryover.templateId);
    if (!template) return;

    const paidAmount = historyRecords
      .filter(
        (record) =>
          record.templateId === carryover.templateId &&
          getDayKey(record.cycleReference) === getDayKey(carryover.originCycleReference),
      )
      .reduce((acc, record) => acc + (record.amountPaid ?? 0), 0);
    const effectiveRemaining = Math.min(
      Math.max(carryover.remainingAmount ?? 0, 0),
      Math.max(template.amount - paidAmount, 0),
    );
    if (effectiveRemaining <= 0) return;
    const carryoverLabel = paidAmount > 0 ? "restante" : "pendiente";
    const cycleKey = `${carryover.templateId}:${getDayKey(carryover.originCycleReference)}`;
    carryoverCycleKeys.add(cycleKey);

    events.push({
      id: `carryover-${carryover.id}`,
      carryoverId: carryover.id,
      templateId: template.id,
      kind: "template",
      name: `${template.name} (${carryoverLabel})`,
      amount: effectiveRemaining,
      occurrenceDate: targetWeekStart,
      sourceCycleReference: carryover.originCycleReference,
      isPast: false,
      type: "carryover",
    });
  });

  scheduledPayments.forEach((item) => {
    const occurrenceDate = getTemplateOccurrenceInInterval(item, { start: day, end: day });

    if (!occurrenceDate || occurrenceDate < normalizedToday) {
      return;
    }

    if (isTemplatePaidForOccurrence(item, occurrenceDate, historyRecords, creditCardHistoryRecords)) {
      return;
    }

    const cycleKey = `${item.id}:${getDayKey(getTemplateCycleReference(item, occurrenceDate))}`;
    if (carryoverCycleKeys.has(cycleKey)) {
      return;
    }

    events.push({
      id: `${item.id}-${occurrenceDate.toISOString()}`,
      templateId: item.id,
      kind: item.kind ?? "template",
      name: item.name,
      amount: item.amount,
      occurrenceDate,
      cycleReference: getTemplateCycleReference(item, occurrenceDate),
      isPast: false,
      type: "scheduled",
    });
  });

  return events.sort((a, b) => a.amount - b.amount);
};
