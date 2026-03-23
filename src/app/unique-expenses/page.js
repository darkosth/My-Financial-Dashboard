import prisma from "@/lib/prisma";
import UniqueExpensesClient from "./UniqueExpensesClient";

export default async function UniqueExpensesPage() {
  const pendingExpenses = await prisma.pendingExpense.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <UniqueExpensesClient initialExpenses={pendingExpenses} />
    </main>
  );
}
