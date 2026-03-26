import { startOfDay } from "date-fns";
import {
  calculateWaterfall,
  getTemplateCycleReference,
  getTemplateOccurrenceInInterval,
  getUpcomingPendingPayments,
  isTemplatePaidForOccurrence,
} from "@/lib/waterfallCalculations";

export const DEFAULT_WEEKLY_INCOME = 1000;
const getDayKey = (value) => startOfDay(new Date(value)).toISOString();

export const buildScheduledCreditCardPayments = (creditCards = []) =>
  creditCards
    .filter((card) => card.minimumPayment > 0 && card.dueDate && card.balance > 0)
    .map((card) => ({
      id: `credit-card:${card.id}`,
      name: `${card.name} Minimum Payment`,
      amount: card.minimumPayment,
      frequency: "MONTHLY",
      dayOfMonth: card.dueDate,
      category: "DEBT",
      isAutoPay: false,
      kind: "credit-card",
    }));

export const getValidTemplates = (templates = []) =>
  templates.filter(
    (template) =>
      (template.frequency === "MONTHLY" && template.dayOfMonth) ||
      ((template.frequency === "WEEKLY" || template.frequency === "BIWEEKLY") && template.lastPaidAt)
  );

export const getScheduledPayments = ({ templates = [], creditCards = [] }) => [
  ...getValidTemplates(templates),
  ...buildScheduledCreditCardPayments(creditCards),
];

export const buildFinanceSnapshot = (data, todayInput = new Date()) => {
  const today = startOfDay(todayInput);
  const context = data.context ?? null;
  const accounts = data.accounts ?? [];
  const creditCards = data.creditCards ?? [];
  const templates = data.templates ?? [];
  const historyRecords = data.historyRecords ?? [];
  const creditCardHistoryRecords = data.creditCardHistoryRecords ?? [];
  const carryovers = data.carryovers ?? [];
  const pendingExpenses = data.pendingExpenses ?? [];
  const appSettings = {
    weeklyIncome: data.appSettings?.weeklyIncome ?? DEFAULT_WEEKLY_INCOME,
    ...data.appSettings,
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

  const totalUpcomingExpenses = upcomingPayments.reduce((acc, payment) => acc + payment.amount, 0);
  const finalRemainingS4 = waterfallData[3]?.restante ?? totalLiquidity;

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

export const getCalendarEventsForDay = ({
  scheduledPayments = [],
  historyRecords = [],
  creditCardHistoryRecords = [],
  carryovers = [],
  pendingExpenses = [],
  today = new Date(),
  targetDate,
}) => {
  const normalizedToday = startOfDay(today);
  const day = startOfDay(targetDate);
  const events = [];
  const carryoverCycleKeys = new Set();

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
    const targetWeekStart = startOfDay(new Date(carryover.targetWeekStart));
    if (targetWeekStart.getTime() !== day.getTime()) return;

    const template = scheduledPayments.find((item) => item.kind !== "credit-card" && item.id === carryover.templateId);
    if (!template) return;

    const paidAmount = historyRecords
      .filter(
        (record) =>
          record.templateId === carryover.templateId &&
          getDayKey(record.cycleReference) === getDayKey(carryover.originCycleReference)
      )
      .reduce((acc, record) => acc + (record.amountPaid ?? 0), 0);
    const carryoverLabel = paidAmount > 0 ? "restante" : "pendiente";
    const cycleKey = `${carryover.templateId}:${getDayKey(carryover.originCycleReference)}`;
    carryoverCycleKeys.add(cycleKey);

    events.push({
      id: `carryover-${carryover.id}`,
      templateId: template.id,
      kind: "template",
      name: `${template.name} (${carryoverLabel})`,
      amount: carryover.remainingAmount,
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
