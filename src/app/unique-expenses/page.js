import { loadFinanceData } from "@/lib/financeData";
import UniqueExpensesClient from "./UniqueExpensesClient";

export default async function UniqueExpensesPage() {
  const financeData = await loadFinanceData();

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <UniqueExpensesClient initialExpenses={financeData.pendingExpenses} />
    </main>
  );
}
