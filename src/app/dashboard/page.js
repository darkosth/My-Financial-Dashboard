import { auth } from "@/auth";
import { loadFinanceSnapshot } from "@/lib/financeData";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";
import QuickExpenseButton from "@/app/dashboard/QuickExpenseButton";

export default async function DashboardPage() {
  const [session, snapshot] = await Promise.all([auth(), loadFinanceSnapshot()]);
  
  const userDisplayName =
    session?.user?.name?.trim() ||
    session?.user?.email?.trim() ||
    snapshot.context?.user?.name?.trim() ||
    snapshot.context?.user?.email?.trim() ||
    "Hola";

  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900 md:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <DashboardHeader userDisplayName={userDisplayName} workspaceName={snapshot.context?.activeWorkspace?.name} />

        <div className="flex justify-start">
          <QuickExpenseButton hasAccounts={snapshot.accounts.length > 0} />
        </div>
        
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