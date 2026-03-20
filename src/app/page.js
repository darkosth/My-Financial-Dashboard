"use client";

// Librerías de shadcn/ui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal, CalendarClock, Target, AlertTriangle } from "lucide-react"; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Librería de matemáticas temporales
import { 
  addDays, 
  startOfDay, 
  isWithinInterval, 
  setDate, 
  format, 
  parseISO 
} from 'date-fns';

// -----------------------------------------------------------------
// --- MOCK DATA ---
// -----------------------------------------------------------------
const mockAccounts = [
  { id: "1", name: "Chase Checking", balance: 1400.00 },
  { id: "2", name: "Cash / Billetera", balance: 150.50 },
];

const mockCreditCards = [
  { id: "1", name: "Amex Platinum", balance: 450.00, creditLimit: 2000.00 },
  { id: "2", name: "Discover", balance: 1200.00, creditLimit: 5000.00 },
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
  const today = startOfDay(parseISO("2024-11-11T00:00:00Z")); // Fecha simulada para la demostración

  // --- MATEMÁTICAS BÁSICAS ---
  const totalLiquidity = mockAccounts.reduce((acc, account) => acc + account.balance, 0);
  const totalDebt = mockCreditCards.reduce((acc, card) => acc + card.balance, 0);
  const totalCreditLimit = mockCreditCards.reduce((acc, card) => acc + card.creditLimit, 0);
  const totalAvailableCredit = totalCreditLimit - totalDebt;
  const totalFixedExpenses = mockTemplates.reduce((acc, template) => acc + template.amount, 0);

  // --- MATEMÁTICAS DE LA CASCADA ---
  const STANDARD_WEEKLY_INCOME = 1000.00;

  const calculateWaterfall = () => {
    let runningBalance = totalLiquidity; 
    const weeklyProjections = [];

    for (let i = 0; i < 4; i++) {
      const weekNumber = i + 1;
      const interval = {
        start: addDays(today, i * 7),
        end: addDays(today, (i * 7) + 6),
      };

      let expensesInWeek = 0;

      mockTemplates.forEach((template) => {
        let fallsInInterval = false;

        if (template.frequency === "MONTHLY") {
          const dueDateThisMonth = setDate(today, template.dayOfMonth);
          if (isWithinInterval(dueDateThisMonth, interval)) fallsInInterval = true;
        } else if (template.frequency === "WEEKLY") {
          const lastPaid = parseISO(template.lastPaidAt);
          let nextOccurrence = addDays(lastPaid, 7);
          while (nextOccurrence < today) nextOccurrence = addDays(nextOccurrence, 7);
          if (isWithinInterval(nextOccurrence, interval)) fallsInInterval = true;
        }

        if (fallsInInterval) expensesInWeek += template.amount;
      });

      runningBalance += STANDARD_WEEKLY_INCOME;
      runningBalance -= expensesInWeek;

      weeklyProjections.push({
        weekNumber,
        restante: runningBalance,
        expensesInWeek,
        title: `Semana ${weekNumber} (${format(interval.start, 'dd')} al ${format(interval.end, 'dd MMM')})`
      });
    }

    return weeklyProjections;
  };

  const waterfallData = calculateWaterfall();
  const finalRemainingS4 = waterfallData[3].restante; 
  const isHealthy = finalRemainingS4 >= 1000;
  const isDanger = finalRemainingS4 <= 0;

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ========================================================= */}
        {/* ENCABEZADO Y MODAL GASTO ÚNICO                              */}
        {/* ========================================================= */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hola, Jorge</h1>
            <p className="text-muted-foreground">Aquí está tu resumen financiero de hoy.</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="shadow-sm">+ Registrar Gasto Único</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Descontar Liquidez</DialogTitle>
                <DialogDescription>Registra una compra rápida para restarla de tu saldo real hoy mismo.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-5 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount" className="text-slate-700">Monto del gasto</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                    <Input id="amount" type="number" placeholder="0.00" className="pl-7 text-lg font-semibold" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="account" className="text-slate-700">¿De dónde se pagó?</Label>
                  <Select>
                    <SelectTrigger id="account">
                      <SelectValue placeholder="Selecciona una cuenta..." />
                    </SelectTrigger>
                    <SelectContent>
                      {mockAccounts.map((acc) => (
                        <SelectItem key={acc.id} value={acc.id}>
                          {acc.name} <span className="text-muted-foreground ml-1">(${acc.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })})</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-slate-700">Descripción <span className="text-muted-foreground font-normal">(Opcional)</span></Label>
                  <Input id="description" placeholder="Ej: Café, Gasolina..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">Restar de mis Cuentas</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* ========================================================= */}
        {/* SECCIÓN 1: LIQUIDEZ                                       */}
        {/* ========================================================= */}
        <section>
          <Card className="overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cuentas" className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
                  <div className="flex justify-between items-center w-full pr-4">
                    <h2 className="text-xl font-semibold text-slate-900">Cuentas</h2>
                    <p className="text-2xl font-bold text-emerald-600">
                      ${totalLiquidity.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 border-t">
                  <div className="px-6">
                    <Table>
                      <TableBody>
                        {mockAccounts.map((account) => (
                          <TableRow key={account.id} className="hover:bg-slate-100/50">
                            <TableCell className="font-medium text-base w-1/2">{account.name}</TableCell>
                            <TableCell className="text-right font-semibold text-base">
                              ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </TableCell>
                            <TableCell className="text-right w-[50px]">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem className="cursor-pointer">Edit Account</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">Delete Account</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="px-6 pb-4 pt-2">
                    <Button variant="ghost" className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2">
                      <Plus className="h-4 w-4 mr-2" /> Add New Account
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </section>

        {/* ========================================================= */}
        {/* SECCIÓN 2: TARJETAS DE CRÉDITO                            */}
        {/* ========================================================= */}
        <section>
          <Card className="overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="credit-cards" className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
                  <div className="flex justify-between items-center w-full pr-4">
                    <h2 className="text-xl font-semibold text-slate-900">Tarjetas de Crédito</h2>
                    <p className="text-2xl font-bold text-red-600">
                      -${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 border-t">
                  <div className="px-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tarjeta</TableHead>
                          <TableHead className="text-right">Límite</TableHead>
                          <TableHead className="text-right">Disponible</TableHead>
                          <TableHead className="text-right">Deuda</TableHead>
                          <TableHead className="w-[50px]"></TableHead> 
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockCreditCards.map((card) => {
                          const availableCredit = card.creditLimit - card.balance;
                          return (
                            <TableRow key={card.id} className="hover:bg-slate-100/50">
                              <TableCell className="font-medium text-base">{card.name}</TableCell>
                              <TableCell className="text-right text-muted-foreground">
                                ${card.creditLimit.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                              </TableCell>
                              <TableCell className="text-right text-emerald-600 font-medium">
                                ${availableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                              </TableCell>
                              <TableCell className="text-right font-semibold text-base">
                                ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                              </TableCell>
                              <TableCell className="text-right w-[50px]">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem className="cursor-pointer">Edit Card</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">Delete Card</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                      <TableFooter className="bg-slate-50 font-semibold">
                        <TableRow>
                          <TableCell>Totales</TableCell>
                          <TableCell className="text-right text-slate-600">
                            ${totalCreditLimit.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                          </TableCell>
                          <TableCell className="text-right text-emerald-600">
                            ${totalAvailableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell className="text-right text-red-600">
                            ${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                  <div className="px-6 pb-4 pt-2">
                    <Button variant="ghost" className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2">
                      <Plus className="h-4 w-4 mr-2" /> Add New Credit Card
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </section>

        {/* ========================================================= */}
        {/* SECCIÓN 3: GASTOS FIJOS / TEMPLATES                       */}
        {/* ========================================================= */}
        <section>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4 border-b">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <CalendarClock className="h-5 w-5 text-slate-500" />
                  Próximos Pagos
                </CardTitle>
              </div>
              <p className="text-2xl font-bold text-slate-700">
                ${totalFixedExpenses.toLocaleString("en-US", { minimumFractionDigits: 2 })} <span className="text-sm font-normal text-muted-foreground">/ mes</span>
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-6">Gasto</TableHead>
                    <TableHead>Cobro / Frecuencia</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Monto</TableHead>
                    <TableHead className="w-[50px] pr-6"></TableHead> 
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTemplates.map((template) => (
                    <TableRow key={template.id} className="hover:bg-slate-100/50">
                      <TableCell className="pl-6">
                        <div className="font-medium text-base">{template.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{template.category}</div>
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {template.frequency === "MONTHLY" ? `Día ${template.dayOfMonth}` : "Semanal"}
                        {template.isAutoPay && (
                          <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Auto</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {template.status === "PAID" ? (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-500 hover:bg-slate-200">Pagado</Badge>
                        ) : (
                          <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">Pendiente</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right font-semibold text-base">
                        ${template.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="text-right w-[50px] pr-6">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="font-medium text-emerald-600 focus:text-emerald-700 cursor-pointer">Marcar como Pagado</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Editar Gasto</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* ========================================================= */}
        {/* SECCIÓN 4: EFECTO CASCADA (TU RADAR DE SUPERVIVENCIA)     */}
        {/* ========================================================= */}
        <section>
          <Card className={`overflow-hidden border-2 shadow-lg transition-colors ${
            isDanger ? "border-red-500 bg-red-50" : 
            isHealthy ? "border-emerald-500 bg-emerald-50" : 
            "border-slate-200 bg-white"
          }`}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="cascada" className="border-none">
                
                <AccordionTrigger className={`px-6 py-6 hover:no-underline transition-all ${
                  isDanger ? "hover:bg-red-100/50" : 
                  isHealthy ? "hover:bg-emerald-100/50" : 
                  "hover:bg-slate-50"
                }`}>
                  <div className="flex justify-between items-center w-full pr-4">
                    <div className="flex items-center gap-3">
                      <Target className={`h-6 w-6 ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-500"}`} />
                      <h2 className={`text-xl font-bold tracking-tight ${isDanger ? "text-red-900" : isHealthy ? "text-emerald-900" : "text-slate-900"}`}>
                        Liquidez Proyectada a 4 Semanas
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-extrabold ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-700"}`}>
                        ${finalRemainingS4.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-sm text-muted-foreground">Tu saldo al terminar el mes</p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="p-0 border-t bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {waterfallData.map((data) => {
                      const weekDanger = data.restante <= 0;
                      return (
                        <div key={data.weekNumber} className="p-6 space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-slate-900">{data.title}</h3>
                            <Badge variant="outline" className="text-xs text-blue-600 border-blue-100 bg-blue-50">
                              +$1k Income
                            </Badge>
                          </div>
                          
                          <div className={`p-4 rounded-xl border ${weekDanger ? "border-red-100 bg-red-50" : "border-slate-100 bg-slate-50"}`}>
                            <p className={`text-2xl font-bold ${weekDanger ? "text-red-600" : "text-slate-900"}`}>
                              ${data.restante.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">Saldo acumulado</p>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <AlertTriangle className={`h-4 w-4 ${data.expensesInWeek > 0 ? "text-amber-500" : "text-slate-300"}`} />
                            Gastos de la semana: <span className="font-medium text-slate-900">-${data.expensesInWeek.toLocaleString("en-US")}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </section>

      </div>
    </main>
  );
}