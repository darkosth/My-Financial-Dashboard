import { auth } from "@/auth";
import LearningWorkbench from "@/components/learning/LearningWorkbench";
import { currentUserHasFeatureAccess } from "@/lib/featureAccess";
import { loadLearningPageData } from "@/lib/learningData";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { redirect } from "next/navigation";

type LearningPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const getSingleParam = (value: string | string[] | undefined) => Array.isArray(value) ? value[0] : value;

export default async function LearningPage({ searchParams }: LearningPageProps) {
  const session = await auth();
  if (!session?.user) redirect("/");
  if (!(await currentUserHasFeatureAccess("PLAID"))) redirect("/dashboard?premium=plaid");

  const { activeWorkspace } = await getCurrentUserContext();
  const resolvedParams = (await searchParams) ?? {};
  const data = await loadLearningPageData(activeWorkspace.id, getSingleParam(resolvedParams.week));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <LearningWorkbench data={data} />
    </main>
  );
}
