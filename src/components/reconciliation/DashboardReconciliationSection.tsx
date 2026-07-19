import LearningReconciliationCard from "@/components/reconciliation/LearningReconciliationCard";
import { loadLearningQueueData } from "@/lib/learningData";

export default async function DashboardReconciliationSection({
  enabled,
  workspaceId,
}: {
  enabled: boolean;
  workspaceId: string;
}) {
  if (!enabled) return null;
  const data = await loadLearningQueueData(workspaceId);
  return <LearningReconciliationCard data={data} />;
}
