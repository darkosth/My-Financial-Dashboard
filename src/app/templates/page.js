"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, Plus, Repeat, CalendarDays, Settings2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// --- MOCK DATA: Tu "Excel" Maestro de Reglas ---
const mockTemplates = [
  { id: "1", name: "Renta", amount: 1400.00, frequency: "MONTHLY", category: "HOUSING", dayOfMonth: 1, isAutoPay: false },
  { id: "2", name: "Car", amount: 354.00, frequency: "MONTHLY", category: "TRANSPORTATION", dayOfMonth: 1, isAutoPay: true },
  { id: "3", name: "Car Insurance", amount: 333.35, frequency: "MONTHLY", category: "INSURANCE", dayOfMonth: 12, isAutoPay: true },
  { id: "4", name: "Netflix", amount: 15.49, frequency: "MONTHLY", category: "SUBSCRIPTIONS", dayOfMonth: 22, isAutoPay: true },
  { id: "5", name: "Gas (EW)", amount: 200.00, frequency: "WEEKLY", category: "TRANSPORTATION", isAutoPay: false },
  { id: "6", name: "School (EW)", amount: 80.00, frequency: "WEEKLY", category: "MEDICAL", isAutoPay: false },
  { id: "7", name: "Big Food (E2W)", amount: 150.00, frequency: "BIWEEKLY", category: "FOOD", isAutoPay: false },
];

export default function TemplatesPage() {
  // El Cerebro del Buscador
  const [searchTerm, setSearchTerm] = useState("");

  // El Motor de Filtrado (Busca por nombre o por categoría)
  const filteredTemplates = mockTemplates.filter((template) => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Matemáticas Rápidas para el Resumen
  const totalMonthlyBase = mockTemplates
    .filter(t => t.frequency === "MONTHLY")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ENCABEZADO Y BOTÓN DE ACCIÓN */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Settings2 className="h-8 w-8 text-slate-700" />
              Gastos Fijos
            </h1>
            <p className="text-muted-foreground">Administra tus suscripciones, biles y presupuestos recurrentes.</p>
          </div>
          <Button className="shadow-sm">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Gasto Fijo
          </Button>
        </div>

        {/* TARJETAS DE RESUMEN RÁPIDO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white shadow-sm border-slate-200">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-slate-500 mb-1">Total Base Mensual</p>
              <p className="text-3xl font-bold text-slate-900">${totalMonthlyBase.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm border-slate-200">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-slate-500 mb-1">Reglas Activas</p>
              <p className="text-3xl font-bold text-slate-900">{mockTemplates.length}</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 shadow-sm border-emerald-100">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-emerald-600 mb-1">En Auto-Pay</p>
              <p className="text-3xl font-bold text-emerald-700">
                {mockTemplates.filter(t => t.isAutoPay).length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* EL "EXCEL" MAESTRO */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="border-b bg-white pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Reglas de Pago</CardTitle>
              <CardDescription>El motor que alimenta tu Radar de Supervivencia.</CardDescription>
            </div>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input 
                type="text" 
                placeholder="Buscar bil o categoría..." 
                className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          
          <CardContent className="p-0 bg-white">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="pl-6">Nombre del Gasto</TableHead>
                  <TableHead>Frecuencia</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Monto Presupuestado</TableHead>
                  <TableHead className="w-[50px] pr-6"></TableHead> 
                </TableRow>
              </TableHeader>
              <TableBody>
                
                {filteredTemplates.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-slate-500">
                      No se encontraron reglas con &quot;{searchTerm}&quot;.
                    </TableCell>
                  </TableRow>
                )}

                {filteredTemplates.map((template) => (
                  <TableRow key={template.id} className="hover:bg-slate-50 transition-colors">
                    
                    {/* NOMBRE Y AUTO-PAY */}
                    <TableCell className="pl-6">
                      <div className="font-medium text-slate-900 flex items-center gap-2">
                        {template.name}
                        {template.isAutoPay && (
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5 text-blue-600 border-blue-200 bg-blue-50">
                            Auto
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    
                    {/* LÓGICA DE FRECUENCIA VISUAL */}
                    <TableCell>
                      {template.frequency === "MONTHLY" ? (
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                          <CalendarDays className="h-4 w-4 text-slate-400" />
                          <span>Día {template.dayOfMonth}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                          <Repeat className="h-4 w-4 text-slate-400" />
                          <span>
                            {template.frequency === "WEEKLY" ? "Cada Semana" : "Cada 2 Semanas"}
                          </span>
                        </div>
                      )}
                    </TableCell>
                    
                    {/* CATEGORÍA */}
                    <TableCell>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                        {template.category}
                      </Badge>
                    </TableCell>

                    {/* MONTO */}
                    <TableCell className="text-right font-semibold text-slate-900 text-base">
                      ${template.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </TableCell>

                    {/* MENÚ DE ACCIONES */}
                    <TableCell className="text-right pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4 text-slate-400 hover:text-slate-900" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">Editar Regla</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Pausar Regla</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}