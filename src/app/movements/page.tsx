import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { loadFinanceWorkspace } from "@/lib/finance/data";
import MovementsClient from "@/components/finance/MovementsClient";
export default async function MovementsPage({
  searchParams,
}: {
  searchParams: Promise<{ manual?: string; target?: string; cycle?: string; date?: string; amount?: string; source?: string }>;
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
      />
    </main>
  );
}
