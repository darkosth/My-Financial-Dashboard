"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Calendar as CalendarIcon } from "lucide-react";

// Importamos tu componente de Próximos Pagos (Sinergia)
import UpcomingCard from "@/components/dashboard/UpcomingCard";

// El cerebro del tiempo
import { 
  addMonths, subMonths, startOfMonth, endOfMonth, 
  startOfWeek, endOfWeek, addDays, isSameMonth, 
  isSameDay, format, parseISO, startOfDay 
} from 'date-fns';
import { es } from 'date-fns/locale'; // Para tener los meses en español

// -----------------------------------------------------------------
// --- MOCK DATA ---
// -----------------------------------------------------------------
const mockTemplates = [
  { id: "1", name: "Renta", amount: 1400.00, frequency: "MONTHLY", category: "HOUSING", dayOfMonth: 1, isAutoPay: false },
  { id: "2", name: "Car", amount: 354.00, frequency: "MONTHLY", category: "TRANSPORTATION", dayOfMonth: 1, isAutoPay: true },
  { id: "3", name: "Car Insurance", amount: 333.35, frequency: "MONTHLY", category: "INSURANCE", dayOfMonth: 12, isAutoPay: true },
  { id: "4", name: "Netflix", amount: 15.49, frequency: "MONTHLY", category: "SUBSCRIPTIONS", dayOfMonth: 22, isAutoPay: true },
  { id: "5", name: "Gas (EW)", amount: 200.00, frequency: "WEEKLY", category: "TRANSPORTATION", lastPaidAt: "2026-03-14T00:00:00Z" },
  { id: "6", name: "School (EW)", amount: 80.00, frequency: "WEEKLY", category: "MEDICAL", lastPaidAt: "2026-03-14T00:00:00Z" },
];

const mockHistory = [
  { id: "h1", description: "Home Depot", amount: 120.00, date: "2026-03-15T11:45:00Z" },
  { id: "h2", description: "Cena Raquel", amount: 85.20, date: "2026-03-18T20:00:00Z" },
];

export default function CalendarPage() {
  // --- ESTADO LOCAL DEL CALENDARIO ---
  const today = startOfDay(parseISO("2026-03-20T10:00:00Z")); // Ancla de hoy
  const [currentDate, setCurrentDate] = useState(today); // Mes que estamos viendo
  const [isExpanded, setIsExpanded] = useState(false); // ¿Vista de 3 filas o mes completo?

  // --- MATEMÁTICAS RÁPIDAS PARA EL UPCOMING CARD ---
  const totalFixedExpenses = mockTemplates.reduce((acc, template) => acc + template.amount, 0);

  // --- MOTOR GENERADOR DE CUADRÍCULA ---
  const getDaysInGrid = () => {
    let days = [];
    let startDate, endDate;

    if (isExpanded) {
      // VISTA EXPANDIDA: Mes completo + Días grises (Leading/Trailing)
      startDate = startOfWeek(startOfMonth(currentDate));
      endDate = endOfWeek(endOfMonth(currentDate));
    } else {
      // VISTA COMPRIMIDA: Semana actual + 2 semanas a futuro (21 días)
      startDate = startOfWeek(currentDate);
      endDate = addDays(startDate, 20); 
    }

    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const gridDays = getDaysInGrid();
  const weekDaysHeaders = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // --- MOTOR DE ASIGNACIÓN DE GASTOS (Pasado y Futuro) ---
  const getExpensesForDay = (targetDate) => {
    const expenses = [];
    
    // 1. Buscamos en el Historial (Si viajamos al pasado)
    mockHistory.forEach(h => {
      if (isSameDay(parseISO(h.date), targetDate)) {
        expenses.push({ id: h.id, name: h.description, amount: h.amount, isPast: true });
      }
    });

    // 2. Buscamos en los Templates (Para proyectar el futuro)
    mockTemplates.forEach(t => {
      if (t.frequency === "MONTHLY" && t.dayOfMonth === targetDate.getDate()) {
        expenses.push({ id: t.id, name: t.name, amount: t.amount, isPast: false });
      } else if (t.frequency === "WEEKLY") {
        // Lógica súper elegante: Si cae en el mismo día de la semana que se pagó la última vez
        const lastPaid = parseISO(t.lastPaidAt);
        if (targetDate.getDay() === lastPaid.getDay() && targetDate >= lastPaid) {
          expenses.push({ id: t.id + targetDate.getTime(), name: t.name, amount: t.amount, isPast: false });
        }
      }
    });

    return expenses;
  };

  // --- CONTROLES DE NAVEGACIÓN ---
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToToday = () => setCurrentDate(today);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* ENCABEZADO Y CONTROLES DEL CALENDARIO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <CalendarIcon className="h-8 w-8 text-slate-700" />
              Calendario de Liquidez
            </h1>
            <p className="text-muted-foreground">Planea tus pagos y visualiza tu historial en el tiempo.</p>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
            <Button variant="ghost" size="icon" onClick={prevMonth}><ChevronLeft className="h-4 w-4" /></Button>
            <div className="w-32 text-center font-semibold text-slate-700 capitalize">
              {format(currentDate, 'MMMM yyyy', { locale: es })}
            </div>
            <Button variant="ghost" size="icon" onClick={nextMonth}><ChevronRight className="h-4 w-4" /></Button>
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <Button variant="ghost" className="text-sm font-medium" onClick={goToToday}>Hoy</Button>
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* EL CALENDARIO (Hecho a medida con Tailwind Grid) */}
        <Card className="shadow-lg border-slate-200 overflow-hidden bg-white">
          <CardHeader className="bg-slate-50 border-b p-0">
            <div className="grid grid-cols-7 divide-x divide-slate-200">
              {weekDaysHeaders.map(day => (
                <div key={day} className="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* La cuadrícula de 7 columnas */}
            <div className="grid grid-cols-7 border-l border-slate-200">
              {gridDays.map((day, idx) => {
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isToday = isSameDay(day, today);
                const dayExpenses = getExpensesForDay(day);
                const dailyTotal = dayExpenses.reduce((acc, curr) => acc + curr.amount, 0);

                return (
                  <div 
                    key={day.toString()} 
                    className={`
                      min-h-[120px] md:min-h-[140px] border-r border-b border-slate-200 p-1 md:p-2 flex flex-col justify-between transition-colors hover:bg-slate-50
                      ${!isCurrentMonth ? 'bg-slate-50/50' : 'bg-white'}
                    `}
                  >
                    {/* PARTE SUPERIOR: Número del día */}
                    <div className="flex justify-end">
                      <div className={`
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                        ${isToday ? 'bg-blue-600 text-white shadow-md' : !isCurrentMonth ? 'text-slate-400' : 'text-slate-700'}
                      `}>
                        {format(day, 'd')}
                      </div>
                    </div>

                    {/* CENTRO: Los Badges de los Gastos */}
                    <div className="flex-1 mt-1 space-y-1 overflow-hidden">
                      {dayExpenses.slice(0, 2).map((expense, i) => (
                        <div key={i} className={`
                          text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate font-medium border
                          ${expense.isPast ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-red-50 text-red-700 border-red-100'}
                        `}>
                          {expense.name} <span className="opacity-75 font-normal">${expense.amount}</span>
                        </div>
                      ))}
                      
                      {/* Si hay más de 2 gastos, evitamos que la celda explote */}
                      {dayExpenses.length > 2 && (
                        <div className="text-[10px] text-slate-500 font-medium pl-1">
                          + {dayExpenses.length - 2} más
                        </div>
                      )}
                    </div>

                    {/* PIE DE CELDA: El Total Diario */}
                    {dailyTotal > 0 && (
                      <div className="mt-2 border-t border-slate-100 pt-1">
                        <p className={`text-[10px] md:text-xs font-bold text-right ${isToday ? 'text-blue-700' : 'text-slate-700'}`}>
                          Total: ${dailyTotal.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* LA SINERGIA MAGISTRAL: UpcomingCard solo aparece si NO está expandido */}
        <div className={`transition-all duration-500 ease-in-out origin-top ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
           <UpcomingCard mockTemplates={mockTemplates} totalFixedExpenses={totalFixedExpenses} />
        </div>

      </div>
    </main>
  );
}