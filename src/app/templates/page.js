import prisma from "@/lib/prisma";
import TemplatesClient from "./TemplatesClient";

export default async function TemplatesPage() {
  // 1. Buscamos TODOS tus gastos fijos reales en Neon
  const realTemplates = await prisma.template.findMany({
    orderBy: { createdAt: 'desc' } // Los últimos creados salen primero
  });

  // 2. Renderizamos la página inyectando los datos reales
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <TemplatesClient initialTemplates={realTemplates} />
    </main>
  );
}