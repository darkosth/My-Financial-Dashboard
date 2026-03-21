"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, ArrowDownRight, Calendar as CalendarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { format, parseISO } from "date-fns";

// --- MOCK DATA: Tu Historial de "Post-its" ---
const mockHistory = [
  { id: "1", description: "MTA Subway (Recarga)", amount: 34.00, date: "2026-03-20T14:30:00Z", accountName: "Chase Checking" },
  { id: "2", description: "Café en la Bodega", amount: 4.50, date: "2026-03-20T08:15:00Z", accountName: "Cash / Billetera" },
  { id: "3", description: "Cena con Raquel", amount: 85.20, date: "2026-03-18T20:00:00Z", accountName: "Amex Platinum" },
  { id: "4", description: "Home Depot (Herramientas)", amount: 120.00, date: "2026-03-15T11:45:00Z", accountName: "Discover" },
  { id: "5", description: "Suscripción SlingStudio (Iglesia)", amount: 15.00, date: "2026-03-10T09:00:00Z", accountName: "Chase Checking" },
];

export default function UniqueExpensesPage() {
  // --- EL CEREBRO DEL BUSCADOR (Estado Local) ---
  // searchTerm guarda lo que escribes. setSearchTerm es la función para actualizarlo.
  const [searchTerm, setSearchTerm] = useState("");

  // --- EL MOTOR DE FILTRADO ---
  // Cada vez que tecleas una letra, React vuelve a correr esta línea automáticamente.
  const filteredHistory = mockHistory.filter((expense) => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.accountName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* ENCABEZADO DE LA PÁGINA */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gastos Únicos</h1>
          <p className="text-muted-foreground">Tu historial de liquidez descontada.</p>
        </div>

        {/* LA TARJETA PRINCIPAL CON LA TABLA */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="border-b bg-white pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Historial de Transacciones</CardTitle>
              <CardDescription>Todos los gastos rápidos que has registrado este mes.</CardDescription>
            </div>
            
            {/* LA BARRA DE BÚSQUEDA INTERACTIVA */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input 
                type="text" 
                placeholder="Buscar gasto o cuenta..." 
                className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // <-- Aquí ocurre la magia
              />
            </div>
          </CardHeader>
          
          <CardContent className="p-0 bg-white">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="pl-6 w-[120px]">Fecha</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Origen</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                  <TableHead className="w-[50px] pr-6"></TableHead> 
                </TableRow>
              </TableHeader>
              <TableBody>
                
                {/* SI EL BUSCADOR NO ENCUENTRA NADA */}
                {filteredHistory.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-slate-500">
                      No se encontraron gastos con &quot;{searchTerm}&quot;.
                    </TableCell>
                  </TableRow>
                )}

                {/* DIBUJAMOS LA TABLA FILTRADA */}
                {filteredHistory.map((expense) => (
                  <TableRow key={expense.id} className="hover:bg-slate-50 transition-colors">
                    
                    {/* FECHA FORMATEADA */}
                    <TableCell className="pl-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <CalendarIcon className="h-4 w-4 text-slate-400" />
                        <span className="font-medium text-sm">
                          {format(parseISO(expense.date), 'MMM dd')}
                        </span>
                      </div>
                    </TableCell>
                    
                    {/* DESCRIPCIÓN */}
                    <TableCell>
                      <span className="font-medium text-slate-900">{expense.description}</span>
                    </TableCell>
                    
                    {/* CUENTA DE ORIGEN */}
                    <TableCell>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal hover:bg-slate-200">
                        {expense.accountName}
                      </Badge>
                    </TableCell>

                    {/* MONTO NEGATIVO */}
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-slate-900 font-semibold">
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                        ${expense.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
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
                          <DropdownMenuItem className="cursor-pointer">Editar registro</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                            Eliminar registro
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