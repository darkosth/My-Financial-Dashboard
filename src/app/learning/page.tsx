import { auth } from "@/auth";
import LearningReconciliationCard from "@/components/reconciliation/LearningReconciliationCard";
import { currentUserHasFeatureAccess } from "@/lib/featureAccess";
import { loadLearningQueueData } from "@/lib/learningData";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { redirect } from "next/navigation";

export default async function LearningPage() {
  const session = await auth();
  if (!session?.user) redirect("/");
  if (!(await currentUserHasFeatureAccess("PLAID"))) redirect("/dashboard?premium=plaid");

  const { activeWorkspace } = await getCurrentUserContext();
  const data = await loadLearningQueueData(activeWorkspace.id);

  return (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-10">
      <div className="mx-auto max-w-5xl">
        <LearningReconciliationCard data={data} />
      </div>
    </main>
  );
}
