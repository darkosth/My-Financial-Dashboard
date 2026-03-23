import { loadFinanceSnapshot } from "@/lib/financeData";
import CalendarClient from "./CalendarClient";

export default async function CalendarPage() {
  const snapshot = await loadFinanceSnapshot();

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <CalendarClient
        scheduledPayments={snapshot.scheduledPayments}
        historyRecords={snapshot.historyRecords}
        creditCardHistoryRecords={snapshot.creditCardHistoryRecords}
        carryovers={snapshot.carryovers}
        pendingExpenses={snapshot.pendingExpenses}
        upcomingPayments={snapshot.upcomingPayments}
        totalUpcomingExpenses={snapshot.totalUpcomingExpenses}
        today={snapshot.today}
      />
    </main>
  );
}
