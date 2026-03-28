import { loadFinanceData } from "@/lib/financeData";
import TemplatesClient from "./TemplatesClient";

export default async function TemplatesPage() {
  const financeData = await loadFinanceData();
  const realTemplates = [...financeData.templates].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="min-h-screen bg-background p-6 font-sans text-foreground md:p-10">
      <TemplatesClient initialTemplates={realTemplates} />
    </main>
  );
}
