import { auth } from "@/auth";
import { loadFinanceSnapshot } from "@/lib/financeData";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";

export default async function Dashboard() {
  const [session, snapshot] = await Promise.all([auth(), loadFinanceSnapshot()]);
  const userDisplayName = session?.user?.name?.trim() || session?.user?.email?.trim() || "Hola";

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        <DashboardHeader
          accounts={snapshot.accounts}
          userDisplayName={userDisplayName}
          weeklyIncome={snapshot.appSettings.weeklyIncome}
        />

        <AccountsCard
          accounts={snapshot.accounts}
          totalLiquidity={snapshot.totalLiquidity}
          totalAccountBalances={snapshot.totalAccountBalances}
          pendingExpensesTotal={snapshot.pendingExpensesTotal}
        />

        <CreditCardsCard
          creditCards={snapshot.creditCards}
          totalDebt={snapshot.totalDebt}
          totalCreditLimit={snapshot.totalCreditLimit}
          totalAvailableCredit={snapshot.totalAvailableCredit}
        />

        <WaterfallCard
          waterfallData={snapshot.waterfallData}
          finalRemainingS4={snapshot.finalRemainingS4}
          standardWeeklyIncome={snapshot.appSettings.weeklyIncome}
        />

        <UpcomingCard
          upcomingPayments={snapshot.upcomingPayments}
          totalUpcomingExpenses={snapshot.totalUpcomingExpenses}
        />
      </div>
    </main>
  );
}
