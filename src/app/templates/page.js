import { loadFinanceData } from "@/lib/financeData";
import TemplatesClient from "./TemplatesClient";

export default async function TemplatesPage() {
  const financeData = await loadFinanceData();
  const realTemplates = [...financeData.templates].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <TemplatesClient initialTemplates={realTemplates} />
    </main>
  );
}
