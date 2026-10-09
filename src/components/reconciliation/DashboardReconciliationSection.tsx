import DashboardReconciliationSummary from "@/components/reconciliation/DashboardReconciliationSummary";
import { loadDashboardReconciliationSummary } from "@/lib/learningData";

export default async function DashboardReconciliationSection({
  enabled,
  workspaceId,
}: {
  enabled: boolean;
  workspaceId: string;
}) {
  if (!enabled) return null;
  const summary = await loadDashboardReconciliationSummary(workspaceId);
  return <DashboardReconciliationSummary {...summary} />;
}
