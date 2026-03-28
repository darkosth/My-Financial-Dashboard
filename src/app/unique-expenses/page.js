import { loadFinanceData } from "@/lib/financeData";
import UniqueExpensesClient from "./UniqueExpensesClient";

export default async function UniqueExpensesPage() {
  const financeData = await loadFinanceData();

  return (
    <main className="min-h-screen bg-background p-6 font-sans text-foreground md:p-10">
      <UniqueExpensesClient initialExpenses={financeData.pendingExpenses} />
    </main>
  );
}
