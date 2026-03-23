import prisma from "@/lib/prisma";
import { getUpcomingPendingPayments } from "@/lib/waterfallCalculations";
import CalendarClient from "./CalendarClient";

const buildScheduledCreditCardPayments = (creditCards) =>
  creditCards
    .filter((card) => card.minimumPayment > 0 && card.dueDate)
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

export default async function CalendarPage() {
  const creditCards = await prisma.creditCard.findMany({ orderBy: { createdAt: "asc" } });
  const templates = await prisma.template.findMany({ orderBy: { createdAt: "asc" } });
  const historyRecords = await prisma.history.findMany({ orderBy: { datePaid: "desc" } });
  const creditCardHistoryRecords = await prisma.creditCardPaymentHistory.findMany({ orderBy: { datePaid: "desc" } });
  const carryovers = await prisma.paymentCarryover.findMany();
  const pendingExpenses = await prisma.pendingExpense.findMany({ orderBy: { createdAt: "desc" } });
  const scheduledPayments = [...templates, ...buildScheduledCreditCardPayments(creditCards)];

  const upcomingPayments = getUpcomingPendingPayments({
    templates: scheduledPayments,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    today: new Date(),
    weeksAhead: 2,
  });

  const totalUpcomingExpenses = upcomingPayments.reduce((acc, payment) => acc + payment.amount, 0);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <CalendarClient
        templates={scheduledPayments}
        historyRecords={historyRecords}
        creditCardHistoryRecords={creditCardHistoryRecords}
        pendingExpenses={pendingExpenses}
        upcomingPayments={upcomingPayments}
        totalUpcomingExpenses={totalUpcomingExpenses}
      />
    </main>
  );
}
