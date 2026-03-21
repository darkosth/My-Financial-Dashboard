"use client";

// Librerías
import {calculateWaterfall} from "@/lib/waterfallCalculations";

// componentes
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountsCard from "@/components/dashboard/AccountsCard";
import CreditCardsCard from "@/components/dashboard/CreditCardsCard";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import WaterfallCard from "@/components/dashboard/WaterfallCard";

// Librería de matemáticas temporales
import { 
  startOfDay,
  parseISO 
} from 'date-fns';

// -----------------------------------------------------------------
// --- MOCK DATA ---
// -----------------------------------------------------------------
const mockAccounts = [
  { id: "1", name: "Chase Checking", balance: 1400.00 },
  { id: "2", name: "Citibank Checking", balance: 3200.75 },
  { id: "3", name: "Cash / Billetera", balance: 150.50 },
];

const mockCreditCards = [
  { id: "1", name: "Amex Platinum", balance: 450.00, creditLimit: 2000.00 },
  { id: "2", name: "Discover", balance: 1200.00, creditLimit: 5000.00 },
  { id: "3", name: "Citi Rewards", balance: 800.00, creditLimit: 3000.00 },
  { id: "4", name: "Chase Freedom", balance: 0.00, creditLimit: 1500.00 },
];

const mockTemplates = [
  { id: "1", name: "Renta", amount: 1400.00, frequency: "MONTHLY", category: "HOUSING", dayOfMonth: 1, isAutoPay: false, status: "PENDING" },
  { id: "2", name: "Car", amount: 354.00, frequency: "MONTHLY", category: "TRANSPORTATION", dayOfMonth: 1, isAutoPay: true, status: "PAID" },
  { id: "3", name: "Car Insurance", amount: 333.35, frequency: "MONTHLY", category: "INSURANCE", dayOfMonth: 12, isAutoPay: true, status: "PENDING" },
  { id: "4", name: "Netflix", amount: 15.49, frequency: "MONTHLY", category: "SUBSCRIPTIONS", dayOfMonth: 22, isAutoPay: true, status: "PENDING" },
  { id: "5", name: "Gas (EW)", amount: 200.00, frequency: "WEEKLY", category: "TRANSPORTATION", lastPaidAt: "2024-11-09T00:00:00Z", isAutoPay: false, status: "PENDING" },
  { id: "6", name: "School (EW)", amount: 80.00, frequency: "WEEKLY", category: "MEDICAL", lastPaidAt: "2024-11-09T00:00:00Z", isAutoPay: false, status: "PENDING" },
  { id: "7", name: "Big Food (E2W)", amount: 150.00, frequency: "BIWEEKLY", category: "FOOD", lastPaidAt: "2024-11-01T00:00:00Z", isAutoPay: false, status: "PENDING" },
];

export default function Dashboard() {
  
  // --- ANCLA DE TIEMPO ---
  const today = startOfDay(parseISO("2025-02-11T00:00:00Z")); // Fecha simulada para la demostración

  // --- MATEMÁTICAS BÁSICAS ---
  const totalLiquidity = mockAccounts.reduce((acc, account) => acc + account.balance, 0);
  const totalDebt = mockCreditCards.reduce((acc, card) => acc + card.balance, 0);
  const totalCreditLimit = mockCreditCards.reduce((acc, card) => acc + card.creditLimit, 0);
  const totalAvailableCredit = totalCreditLimit - totalDebt;
  const totalFixedExpenses = mockTemplates.reduce((acc, template) => acc + template.amount, 0);

  // --- MATEMÁTICAS DE LA CASCADA ---
  const StandardWeeklyIncome = 1000.00;
  const waterfallData = calculateWaterfall({ totalLiquidity, templates: mockTemplates, today, standardWeeklyIncome: StandardWeeklyIncome });
  const finalRemainingS4 = waterfallData[3].restante;

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO Y MODAL GASTO ÚNICO                              */}
        {/* ========================================================= */}

        <DashboardHeader accounts={mockAccounts} />

        {/* ========================================================= */}
        {/* SECCIÓN 1: LIQUIDEZ                                       */}
        {/* ========================================================= */}

        <AccountsCard mockAccounts={mockAccounts} totalLiquidity={totalLiquidity} />

        {/* ========================================================= */}
        {/* SECCIÓN 2: TARJETAS DE CRÉDITO                            */}
        {/* ========================================================= */}

        <CreditCardsCard mockCreditCards={mockCreditCards} totalDebt={totalDebt} totalCreditLimit={totalCreditLimit} totalAvailableCredit={totalAvailableCredit} />

        {/* ========================================================= */}
        {/* SECCIÓN 3: UPCOMING EXPENSIVES                            */}
        {/* ========================================================= */}

        <UpcomingCard mockTemplates={mockTemplates} totalFixedExpenses={totalFixedExpenses} />

        {/* ========================================================= */}
        {/* SECCIÓN 4: EFECTO CASCADA (RADAR DE SUPERVIVENCIA)     */}
        {/* ========================================================= */}
      
        <WaterfallCard waterfallData={waterfallData} finalRemainingS4={finalRemainingS4} />

      </div>
    </main>
  );
}