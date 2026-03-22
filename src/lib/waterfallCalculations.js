import { addDays, format, isWithinInterval, parseISO, setDate } from "date-fns";

export const calculateWaterfall = ({ totalLiquidity, templates, today, standardWeeklyIncome }) => {
  let runningBalance = totalLiquidity; 
  const weeklyProjections = [];

  for (let i = 0; i < 4; i++) {
    const weekNumber = i + 1;
    
    // 1. Definimos la "ventana de tiempo" exacta para esta semana específica en el futuro
    const interval = {
      start: addDays(today, i * 7),
      end: addDays(today, (i * 7) + 6),
    };

    let expensesInWeek = 0;
    const details = []; // NUEVO: La mochila donde guardaremos los recibos de esta semana

    templates.forEach((template) => {
      let fallsInInterval = false;

      // ==========================================
      // LÓGICA MENSUAL (A prueba de cambio de mes)
      // ==========================================
      if (template.frequency === "MONTHLY") {
        // Calculamos la fecha de cobro usando el mes de inicio de la semana
        const dateInStartMonth = setDate(interval.start, template.dayOfMonth);
        // Calculamos la fecha de cobro usando el mes de fin de la semana
        const dateInEndMonth = setDate(interval.end, template.dayOfMonth);

        // Si la fecha de cobro cae dentro de la semana en cualquiera de los dos meses, es un hit.
        if (isWithinInterval(dateInStartMonth, interval) || isWithinInterval(dateInEndMonth, interval)) {
          fallsInInterval = true;
        }
      } 
      // ==========================================
      // LÓGICA SEMANAL
      // ==========================================
      else if (template.frequency === "WEEKLY") {
        const lastPaid = typeof template.lastPaidAt === "string" ? parseISO(template.lastPaidAt) : new Date(template.lastPaidAt);
        let nextOccurrence = addDays(lastPaid, 7);
        
        // Empujamos el cobro hacia el futuro de 7 en 7 hasta que alcance nuestra semana proyectada
        while (nextOccurrence < interval.start) {
          nextOccurrence = addDays(nextOccurrence, 7);
        }
        
        if (isWithinInterval(nextOccurrence, interval)) {
          fallsInInterval = true;
        }
      } 
      // ==========================================
      // LÓGICA BI-SEMANAL (El eslabón perdido)
      // ==========================================
      else if (template.frequency === "BIWEEKLY") {
        const lastPaid = typeof template.lastPaidAt === "string" ? parseISO(template.lastPaidAt) : new Date(template.lastPaidAt);
        let nextOccurrence = addDays(lastPaid, 14);
        
        // Empujamos el cobro hacia el futuro de 14 en 14
        while (nextOccurrence < interval.start) {
          nextOccurrence = addDays(nextOccurrence, 14);
        }
        
        if (isWithinInterval(nextOccurrence, interval)) {
          fallsInInterval = true;
        }
      }

      // ==========================================
      // EJECUCIÓN DEL COBRO
      // ==========================================
      if (fallsInInterval) {
        expensesInWeek += template.amount;
        
        // Guardamos el detalle para que la UI lo dibuje
        details.push({
          name: template.name,
          amount: template.amount
        });
      }
    });

    // Actualizamos el balance restando los gastos y sumando tu salario hardcodeado
    if (weekNumber !== 1) {
      runningBalance += standardWeeklyIncome;
    }
    runningBalance -= expensesInWeek;

    // Empacamos toda la información de esta semana y la enviamos al arreglo
    weeklyProjections.push({
      weekNumber,
      restante: runningBalance,
      expensesInWeek,
      details, // <-- Exportamos la mochila con los nombres
      title: `Semana ${weekNumber} (${format(interval.start, 'dd')} al ${format(interval.end, 'dd MMM')})`
    });
  }

  return weeklyProjections;
};