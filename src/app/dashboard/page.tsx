import { auth } from "@/auth";
import { loadFinanceSnapshot } from "@/lib/financeData";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import PlaidAutoSync from "@/components/dashboard/PlaidAutoSync";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";
import QuickExpenseButton from "@/app/dashboard/QuickExpenseButton";
import { userHasFeatureAccess } from "@/lib/featureAccess";
import DashboardReconciliationSection from "@/components/reconciliation/DashboardReconciliationSection";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const [snapshot, hasPlaidAccess, resolvedSearchParams] = await Promise.all([
    loadFinanceSnapshot(),
    userHasFeatureAccess(session.user.email, "PLAID"),
    searchParams ?? Promise.resolve<Record<string, string | string[] | undefined>>({}),
  ]);
  const showPremiumNotice = resolvedSearchParams.premium === "plaid";

  const userDisplayName =
    session?.user?.name?.trim() ||
    session?.user?.email?.trim() ||
    snapshot.context?.user?.name?.trim() ||
    snapshot.context?.user?.email?.trim() ||
    "Hola";

  return (
    <main className="min-h-screen bg-background p-6 font-sans text-foreground md:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <PlaidAutoSync
          workspaceId={snapshot.context?.activeWorkspace?.id ?? "workspace"}
          enabled={hasPlaidAccess && (snapshot.accounts.some((account) => account.source === "PLAID") || snapshot.creditCards.some((card) => card.source === "PLAID"))}
        />

        <DashboardHeader userDisplayName={userDisplayName} workspaceName={snapshot.context?.activeWorkspace?.name} />

        {showPremiumNotice && !hasPlaidAccess ? (
          <div role="alert" className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/35 dark:text-amber-100">
            La sincronizacion bancaria no esta habilitada para tu cuenta. Solicita acceso premium al administrador.
          </div>
        ) : null}

        <div className="flex justify-start">
          <QuickExpenseButton hasAccounts={snapshot.accounts.length > 0} />
        </div>

        {snapshot.cashBalance > 0 ? (
          <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4">
            <div><h2 className="font-medium">Efectivo</h2><p className="text-sm tabular-nums text-muted-foreground">${snapshot.cashBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p></div>
            <Button asChild variant="outline"><Link href="/movements?source=CASH">Ver movimientos</Link></Button>
          </section>
        ) : null}

        <AccountsCard
          accounts={snapshot.accounts}
          totalLiquidity={snapshot.totalLiquidity}
          pendingExpensesTotal={snapshot.pendingExpensesTotal}
          hasPlaidAccess={hasPlaidAccess}
        />

        <CreditCardsCard
          creditCards={snapshot.creditCards}
          totalDebt={snapshot.totalDebt}
          totalCreditLimit={snapshot.totalCreditLimit}
          totalAvailableCredit={snapshot.totalAvailableCredit}
          hasPlaidAccess={hasPlaidAccess}
        />

        <WaterfallCard
          waterfallData={snapshot.waterfallData}
          finalRemainingS4={snapshot.finalRemainingS4}
          standardWeeklyIncome={snapshot.appSettings.weeklyIncome ?? 0}
        />

        <UpcomingCard
          upcomingPayments={snapshot.upcomingPayments}
          totalUpcomingExpenses={snapshot.totalUpcomingExpenses}
        />

        {snapshot.context?.activeWorkspace?.id ? (
          <Suspense fallback={<div aria-label="Cargando conciliación bancaria" className="min-h-40 rounded-xl bg-card ring-1 ring-foreground/10" />}>
            <DashboardReconciliationSection
              enabled={hasPlaidAccess}
              workspaceId={snapshot.context.activeWorkspace.id}
            />
          </Suspense>
        ) : null}
      </div>
    </main>
  );
}
