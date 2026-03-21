import { addDays, format, isWithinInterval, parseISO, setDate } from "date-fns";

export const calculateWaterfall = ({ totalLiquidity, templates, today, standardWeeklyIncome }) => {
  let runningBalance = totalLiquidity; 
  const weeklyProjections = [];

  for (let i = 0; i < 4; i++) {
    const weekNumber = i + 1;
    const interval = {
      start: addDays(today, i * 7),
      end: addDays(today, (i * 7) + 6),
    };

    let expensesInWeek = 0;

    templates.forEach((template) => {
      let fallsInInterval = false;

      if (template.frequency === "MONTHLY") {
        const dueDateThisMonth = setDate(today, template.dayOfMonth);
        if (isWithinInterval(dueDateThisMonth, interval)) fallsInInterval = true;
      } else if (template.frequency === "WEEKLY") {
        const lastPaid = parseISO(template.lastPaidAt);
        let nextOccurrence = addDays(lastPaid, 7);
        while (nextOccurrence < today) nextOccurrence = addDays(nextOccurrence, 7);
        if (isWithinInterval(nextOccurrence, interval)) fallsInInterval = true;
      }

      if (fallsInInterval) expensesInWeek += template.amount;
    });

    runningBalance += standardWeeklyIncome;
    runningBalance -= expensesInWeek;

    weeklyProjections.push({
      weekNumber,
      restante: runningBalance,
      expensesInWeek,
      title: `Semana ${weekNumber} (${format(interval.start, 'dd')} al ${format(interval.end, 'dd MMM')})`
    });
  }

  return weeklyProjections;
};