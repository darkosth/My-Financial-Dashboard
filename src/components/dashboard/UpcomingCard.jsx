"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, MoreHorizontal } from "lucide-react";

export default function UpcomingCard({ mockTemplates, totalFixedExpenses }) {
    return (
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
    );
}