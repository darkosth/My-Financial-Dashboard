import { startOfDay } from "date-fns";
import prisma from "@/lib/prisma";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";
import { calculateWaterfall, getUpcomingPendingPayments } from "@/lib/waterfallCalculations";

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

export default async function Dashboard() {
  const accounts = await prisma.account.findMany({ orderBy: { createdAt: "asc" } });
  const creditCards = await prisma.creditCard.findMany({ orderBy: { createdAt: "asc" } });
  const templates = await prisma.template.findMany({ orderBy: { createdAt: "asc" } });
  const historyRecords = await prisma.history.findMany();
  const creditCardHistoryRecords = await prisma.creditCardPaymentHistory.findMany();
  const carryovers = await prisma.paymentCarryover.findMany();
  const pendingExpenses = await prisma.pendingExpense.findMany({ orderBy: { createdAt: "desc" } });

  const today = startOfDay(new Date());

  const totalAccountBalances = accounts.reduce((acc, account) => acc + account.balance, 0);
  const pendingExpensesTotal = pendingExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalLiquidity = totalAccountBalances - pendingExpensesTotal;
  const totalDebt = creditCards.reduce((acc, card) => acc + card.balance, 0);
  const totalCreditLimit = creditCards.reduce((acc, card) => acc + card.creditLimit, 0);
  const totalAvailableCredit = totalCreditLimit - totalDebt;
  const standardWeeklyIncome = 1000.0;
  const scheduledCreditCardPayments = buildScheduledCreditCardPayments(creditCards);

  const validTemplates = templates.filter(
    (template) =>
      (template.frequency === "MONTHLY" && template.dayOfMonth) ||
      ((template.frequency === "WEEKLY" || template.frequency === "BIWEEKLY") && template.lastPaidAt)
  );
  const scheduledPayments = [...validTemplates, ...scheduledCreditCardPayments];

  const waterfallData = calculateWaterfall({
    totalLiquidity,
    templates: scheduledPayments,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    today,
    standardWeeklyIncome,
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

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        <DashboardHeader accounts={accounts} />

        <AccountsCard
          accounts={accounts}
          totalLiquidity={totalLiquidity}
          totalAccountBalances={totalAccountBalances}
          pendingExpensesTotal={pendingExpensesTotal}
        />

        <CreditCardsCard
          creditCards={creditCards}
          totalDebt={totalDebt}
          totalCreditLimit={totalCreditLimit}
          totalAvailableCredit={totalAvailableCredit}
        />

        <WaterfallCard
          waterfallData={waterfallData}
          finalRemainingS4={finalRemainingS4}
          standardWeeklyIncome={standardWeeklyIncome}
        />

        <UpcomingCard upcomingPayments={upcomingPayments} totalUpcomingExpenses={totalUpcomingExpenses} />
      </div>
    </main>
  );
}
