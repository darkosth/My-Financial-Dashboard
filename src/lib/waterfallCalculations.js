import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  format,
  getDaysInMonth,
  isWithinInterval,
  parseISO,
  setDate,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const WEEK_STARTS_ON = 4;

const normalizeDate = (value) => {
  if (!value) return null;
  return typeof value === "string" ? parseISO(value) : new Date(value);
};

const toStartOfDay = (value) => startOfDay(normalizeDate(value) ?? new Date());
const getCycleKey = (date) => format(toStartOfDay(date), "yyyy-MM-dd");
const getWeekKey = (date) => format(toStartOfDay(date), "yyyy-MM-dd");
const getItemKind = (item) => item.kind ?? "template";
const getPaymentOwnerKey = (item) => `${getItemKind(item)}:${item.id}`;

const getMonthlyOccurrenceForMonth = (baseDate, dayOfMonth) => {
  const safeDay = Math.min(dayOfMonth, getDaysInMonth(baseDate));
  return startOfDay(setDate(baseDate, safeDay));
};

const getRecurringStepInDays = (frequency) => {
  if (frequency === "WEEKLY") return 7;
  if (frequency === "BIWEEKLY") return 14;
  return null;
};

const getTemplatePaymentSummaryMap = (historyRecords = []) => {
  const summary = new Map();

  historyRecords
    .filter((record) => record.templateId && record.cycleReference)
    .forEach((record) => {
      const key = `template:${record.templateId}:${getCycleKey(record.cycleReference)}`;
      summary.set(key, (summary.get(key) ?? 0) + (record.amountPaid ?? 0));
    });

  return summary;
};

const getCreditCardPaymentSummaryMap = (paymentRecords = []) => {
  const summary = new Map();

  paymentRecords
    .filter((record) => record.creditCardId && record.cycleReference)
    .forEach((record) => {
      const key = `credit-card:credit-card:${record.creditCardId}:${getCycleKey(record.cycleReference)}`;
      summary.set(key, (summary.get(key) ?? 0) + (record.amountPaid ?? 0));
    });

  return summary;
};

const getCombinedPaymentSummaryMap = (templateHistory = [], creditCardHistory = []) => {
  const summary = getTemplatePaymentSummaryMap(templateHistory);
  const creditCardSummary = getCreditCardPaymentSummaryMap(creditCardHistory);

  for (const [key, value] of creditCardSummary.entries()) {
    summary.set(key, value);
  }

  return summary;
};

const getCarryoverMaps = (carryovers = []) => {
  const byOriginCycle = new Map();
  const byTargetWeek = new Map();

  carryovers.forEach((carryover) => {
    const originKey = `template:${carryover.templateId}:${getCycleKey(carryover.originCycleReference)}`;
    const targetWeekKey = getWeekKey(carryover.targetWeekStart);

    byOriginCycle.set(originKey, carryover);

    const currentWeek = byTargetWeek.get(targetWeekKey) ?? [];
    currentWeek.push(carryover);
    byTargetWeek.set(targetWeekKey, currentWeek);
  });

  return { byOriginCycle, byTargetWeek };
};

export const getProjectionWeekStart = (referenceDate) =>
  startOfWeek(toStartOfDay(referenceDate), { weekStartsOn: WEEK_STARTS_ON });

export const getProjectionWeekInterval = (referenceDate, weekOffset = 0) => {
  const start = addDays(getProjectionWeekStart(referenceDate), weekOffset * 7);
  return {
    start,
    end: addDays(start, 6),
  };
};

export const getTemplateCycleReference = (item, occurrenceDate) => {
  if (item.frequency === "MONTHLY") {
    return startOfMonth(toStartOfDay(occurrenceDate));
  }

  return startOfWeek(toStartOfDay(occurrenceDate), { weekStartsOn: WEEK_STARTS_ON });
};

const getFollowingOccurrence = (item, occurrenceDate) => {
  const normalizedOccurrence = toStartOfDay(occurrenceDate);

  if (item.frequency === "MONTHLY") {
    return getMonthlyOccurrenceForMonth(addMonths(normalizedOccurrence, 1), item.dayOfMonth);
  }

  const stepInDays = getRecurringStepInDays(item.frequency);
  if (!stepInDays) return null;

  return addDays(normalizedOccurrence, stepInDays);
};

export const getNextTemplateOccurrence = (item, referenceDate) => {
  const normalizedReferenceDate = toStartOfDay(referenceDate);

  if (item.frequency === "MONTHLY") {
    let occurrenceDate = getMonthlyOccurrenceForMonth(normalizedReferenceDate, item.dayOfMonth);

    if (occurrenceDate < normalizedReferenceDate) {
      occurrenceDate = getMonthlyOccurrenceForMonth(addMonths(normalizedReferenceDate, 1), item.dayOfMonth);
    }

    return occurrenceDate;
  }

  const anchorDate = normalizeDate(item.lastPaidAt);
  const stepInDays = getRecurringStepInDays(item.frequency);

  if (!anchorDate || !stepInDays) return null;

  const normalizedAnchorDate = startOfDay(anchorDate);
  const daysFromAnchor = differenceInCalendarDays(normalizedReferenceDate, normalizedAnchorDate);
  const stepsFromAnchor = Math.max(0, Math.ceil(daysFromAnchor / stepInDays));
  let occurrenceDate = addDays(normalizedAnchorDate, stepsFromAnchor * stepInDays);

  while (occurrenceDate < normalizedReferenceDate) {
    occurrenceDate = addDays(occurrenceDate, stepInDays);
  }

  return occurrenceDate;
};

export const getTemplateOccurrenceInInterval = (item, interval) => {
  if (item.frequency === "MONTHLY") {
    const candidates = [
      getMonthlyOccurrenceForMonth(interval.start, item.dayOfMonth),
      getMonthlyOccurrenceForMonth(interval.end, item.dayOfMonth),
    ];

    return candidates.find((date) => isWithinInterval(date, interval)) ?? null;
  }

  const anchorDate = normalizeDate(item.lastPaidAt);
  const stepInDays = getRecurringStepInDays(item.frequency);

  if (!anchorDate || !stepInDays) return null;

  const normalizedAnchorDate = startOfDay(anchorDate);
  const daysFromAnchor = differenceInCalendarDays(interval.start, normalizedAnchorDate);
  const stepsFromAnchor = Math.floor(daysFromAnchor / stepInDays);
  let occurrenceDate = addDays(normalizedAnchorDate, stepsFromAnchor * stepInDays);

  while (occurrenceDate < interval.start) {
    occurrenceDate = addDays(occurrenceDate, stepInDays);
  }

  return isWithinInterval(occurrenceDate, interval) ? occurrenceDate : null;
};

export const getTemplatePaidAmountForOccurrence = (
  item,
  occurrenceDate,
  templateHistory = [],
  creditCardHistory = []
) => {
  const summaryMap =
    templateHistory instanceof Map
      ? templateHistory
      : getCombinedPaymentSummaryMap(templateHistory, creditCardHistory);
  const cycleReference = getTemplateCycleReference(item, occurrenceDate);
  return summaryMap.get(`${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`) ?? 0;
};

export const isTemplatePaidForOccurrence = (item, occurrenceDate, templateHistory = [], creditCardHistory = []) =>
  getTemplatePaidAmountForOccurrence(item, occurrenceDate, templateHistory, creditCardHistory) >= item.amount;

export const getUpcomingPendingPayments = ({
  templates,
  historyRecords = [],
  creditCardHistoryRecords = [],
  carryovers = [],
  today,
  weeksAhead = 2,
}) => {
  const paymentSummaryMap = getCombinedPaymentSummaryMap(historyRecords, creditCardHistoryRecords);
  const { byOriginCycle, byTargetWeek } = getCarryoverMaps(carryovers);
  const rangeStart = toStartOfDay(today);
  const rangeEnd = getProjectionWeekInterval(today, weeksAhead - 1).end;
  const upcomingPayments = [];

  templates.forEach((item) => {
    let occurrenceDate = getNextTemplateOccurrence(item, rangeStart);

    while (occurrenceDate && occurrenceDate <= rangeEnd) {
      const cycleReference = getTemplateCycleReference(item, occurrenceDate);
      const cycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`;
      const paidAmount = paymentSummaryMap.get(cycleKey) ?? 0;
      const carryover = getItemKind(item) === "template" ? byOriginCycle.get(cycleKey) : null;
      const deferredAmount = carryover?.remainingAmount ?? 0;
      const pendingAmount = Math.max(item.amount - paidAmount - deferredAmount, 0);

      if (pendingAmount > 0) {
        upcomingPayments.push({
          ...item,
          kind: getItemKind(item),
          occurrenceDate,
          amount: pendingAmount,
        });
      }

      occurrenceDate = getFollowingOccurrence(item, occurrenceDate);
    }
  });

  for (const [weekKey, weekCarryovers] of byTargetWeek.entries()) {
    const targetWeekStart = toStartOfDay(weekKey);

    if (targetWeekStart < rangeStart || targetWeekStart > rangeEnd) {
      continue;
    }

    weekCarryovers.forEach((carryover) => {
      const item = templates.find((entry) => getItemKind(entry) === "template" && entry.id === carryover.templateId);
      if (!item) return;

      upcomingPayments.push({
        ...item,
        kind: "template",
        amount: carryover.remainingAmount,
        occurrenceDate: targetWeekStart,
        isCarryover: true,
        sourceCycleReference: carryover.originCycleReference,
      });
    });
  }

  return upcomingPayments
    .filter((payment) => payment.occurrenceDate >= rangeStart)
    .sort((a, b) => new Date(a.occurrenceDate) - new Date(b.occurrenceDate));
};

export const calculateWaterfall = ({
  totalLiquidity,
  templates,
  historyRecords = [],
  creditCardHistoryRecords = [],
  carryovers = [],
  today,
  standardWeeklyIncome,
}) => {
  const paymentSummaryMap = getCombinedPaymentSummaryMap(historyRecords, creditCardHistoryRecords);
  const { byOriginCycle, byTargetWeek } = getCarryoverMaps(carryovers);
  let runningBalance = totalLiquidity;
  const weeklyProjections = [];

  for (let i = 0; i < 4; i++) {
    const weekNumber = i + 1;
    const interval = getProjectionWeekInterval(today, i);
    let expensesInWeek = 0;
    const details = [];

    templates.forEach((item) => {
      const occurrenceDate = getTemplateOccurrenceInInterval(item, interval);

      if (!occurrenceDate) {
        return;
      }

      const cycleReference = getTemplateCycleReference(item, occurrenceDate);
      const cycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(cycleReference)}`;
      const paidAmount = paymentSummaryMap.get(cycleKey) ?? 0;
      const carryover = getItemKind(item) === "template" ? byOriginCycle.get(cycleKey) : null;
      const deferredAmount = carryover?.remainingAmount ?? 0;
      const pendingAmount = Math.max(item.amount - paidAmount - deferredAmount, 0);
      const isFullyPaid = paidAmount >= item.amount;
      const isMovedWithoutPayment = deferredAmount > 0 && paidAmount <= 0;
      const isHandledThisWeek = pendingAmount <= 0;

      if (weekNumber === 1 || occurrenceDate >= toStartOfDay(today) || isHandledThisWeek) {
        if (pendingAmount > 0) {
          expensesInWeek += pendingAmount;
        }

        details.push({
          kind: getItemKind(item),
          templateId: item.id,
          name: item.name,
          amount: pendingAmount > 0 ? pendingAmount : item.amount,
          isPaid: isFullyPaid,
          isDeferred: deferredAmount > 0,
          isMovedWithoutPayment,
          paidAmount,
          occurrenceDate,
          cycleReference,
        });
      }
    });

    const carryoversForWeek = byTargetWeek.get(getWeekKey(interval.start)) ?? [];
    carryoversForWeek.forEach((carryover) => {
      const item = templates.find((entry) => getItemKind(entry) === "template" && entry.id === carryover.templateId);
      if (!item) return;
      const originCycleKey = `${getPaymentOwnerKey(item)}:${getCycleKey(carryover.originCycleReference)}`;
      const originPaidAmount = paymentSummaryMap.get(originCycleKey) ?? 0;
      const carryoverLabel = originPaidAmount > 0 ? "restante" : "pendiente";

      expensesInWeek += carryover.remainingAmount;
      details.push({
        kind: "template",
        templateId: item.id,
        name: `${item.name} (${carryoverLabel})`,
        amount: carryover.remainingAmount,
        isPaid: false,
        isCarryover: true,
        occurrenceDate: interval.start,
        cycleReference: carryover.originCycleReference,
      });
    });

    if (weekNumber !== 1) {
      runningBalance += standardWeeklyIncome;
    }

    runningBalance -= expensesInWeek;

    weeklyProjections.push({
      weekNumber,
      restante: runningBalance,
      expensesInWeek,
      details,
      title: `Semana ${weekNumber} (${format(interval.start, "dd")} al ${format(interval.end, "dd MMM")})`,
    });
  }

  return weeklyProjections;
};
