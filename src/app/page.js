// OJO: Ya NO usamos "use client" aquí. Este es un Server Component puro.

// Librerías de base de datos y matemáticas
import prisma from "@/lib/prisma";
import { calculateWaterfall } from "@/lib/waterfallCalculations";
import { startOfDay } from 'date-fns';

// Componentes
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";

// Agregamos "async" porque vamos a esperar a que Neon nos responda
export default async function Dashboard() {
  
  const accounts = await prisma.account.findMany({ orderBy: { createdAt: 'asc' } });
  const creditCards = await prisma.creditCard.findMany({ orderBy: { createdAt: 'asc' } });
  const templates = await prisma.template.findMany({ orderBy: { createdAt: 'asc' } });

  // --- ANCLA DE TIEMPO --- 
  const today = startOfDay(new Date());

  const totalLiquidity = accounts.reduce((acc, account) => acc + account.balance, 0);
  const totalDebt = creditCards.reduce((acc, card) => acc + card.balance, 0);
  const totalCreditLimit = creditCards.reduce((acc, card) => acc + card.creditLimit, 0);
  const totalAvailableCredit = totalCreditLimit - totalDebt;
  const totalFixedExpenses = templates.reduce((acc, template) => acc + template.amount, 0);

  // --- MATEMÁTICAS DE LA CASCADA ---
  const StandardWeeklyIncome = 1000.00;

  // Validamos que las plantillas tengan la información necesaria para ser consideradas en el cálculo
  const validTemplates = templates.filter(t => 
    (t.frequency === "MONTHLY" && t.dayOfMonth) || 
    ((t.frequency === "WEEKLY" || t.frequency === "BIWEEKLY") && t.lastPaidAt)
  );

  const waterfallData = calculateWaterfall({ 
    totalLiquidity, 
    templates: validTemplates, 
    today, 
    standardWeeklyIncome: StandardWeeklyIncome 
  });

  const finalRemainingS4 = waterfallData[3].restante;

  // =========================================================
  // 3. RENDERIZADO DEL DASHBOARD
  // =========================================================
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ENCABEZADO */}
        <DashboardHeader accounts={accounts} />

        {/* SECCIÓN 1: LIQUIDEZ (Ya conectada con la tarjeta inteligente que hicimos) */}
        {/* Nota: Cambié mockAccounts por accounts para que coincida con tu componente */}
        <AccountsCard accounts={accounts} totalLiquidity={totalLiquidity} />

        {/* SECCIÓN 2: TARJETAS DE CRÉDITO */}
        <CreditCardsCard 
          creditCards={creditCards} 
          totalDebt={totalDebt} 
          totalCreditLimit={totalCreditLimit} 
          totalAvailableCredit={totalAvailableCredit} 
        />

       {/* SECCIÓN 3: EFECTO CASCADA (RADAR DE SUPERVIVENCIA) */}
        <WaterfallCard
         waterfallData={waterfallData}
         finalRemainingS4={finalRemainingS4}
          standardWeeklyIncome={StandardWeeklyIncome}
        />

        {/* SECCIÓN 4: UPCOMING EXPENSES */}
        <UpcomingCard 
          templates={templates} 
          totalFixedExpenses={totalFixedExpenses} 
        />

      </div>
    </main>
  );
}