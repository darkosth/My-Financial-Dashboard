import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { loadFinanceWorkspace } from "@/lib/finance/data";
import MovementsClient from "@/components/finance/MovementsClient";
export default async function MovementsPage({
  searchParams,
}: {
  searchParams: Promise<{ manual?: string; target?: string; cycle?: string; date?: string; amount?: string; source?: string; status?: string; from?: string; bank?: string; movement?: string }>;
}) {
  if (!(await auth())?.user) redirect("/");
  const context = await getCurrentUserContext();
  const data = await loadFinanceWorkspace(context.activeWorkspace.id);
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 md:px-10">
      <MovementsClient
        data={data}
        initialManual={params.manual === "1"}
        initialTarget={params.target}
        initialCycle={params.cycle}
        initialDate={params.date}
        initialAmount={params.amount}
        initialSource={params.source}
        initialStatus={params.status}
        initialFrom={params.from ?? (params.status === "unreconciled" ? "2000-01-01" : "")}
        initialMovementId={data.movements.find(m => m.id === params.movement || (params.bank && m.bankKey === params.bank))?.id}
      />
    </main>
  );
}
