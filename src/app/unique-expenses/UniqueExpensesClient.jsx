"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { ArrowDownRight, Calendar as CalendarIcon, MoreHorizontal, Search, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { clearPendingExpenses, deletePendingExpense } from "@/lib/actions/pendingExpenseActions";

export default function UniqueExpensesClient({ initialExpenses }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = useMemo(
    () =>
      initialExpenses.filter((expense) =>
        (expense.description || "Sin descripción").toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [initialExpenses, searchTerm]
  );

  const totalPending = initialExpenses.reduce((acc, expense) => acc + expense.amount, 0);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este gasto único?")) return;

    const result = await deletePendingExpense(id);
    if (result.success) {
      router.refresh();
    } else {
      alert("No se pudo eliminar el gasto único.");
    }
  };

  const handleClearAll = async () => {
    if (!window.confirm("¿Seguro que quieres borrar todos los gastos únicos?")) return;

    const result = await clearPendingExpenses();
    if (result.success) {
      router.refresh();
    } else {
      alert("No se pudieron borrar los gastos únicos.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gastos únicos</h1>
          <p className="text-muted-foreground">
            Estos gastos se descuentan de tu liquidez hasta que actualices manualmente tus cuentas.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-muted-foreground">Pendiente por reconciliar</p>
          <p className="text-3xl font-bold text-red-600">${totalPending.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <Card className="shadow-sm border-border">
        <CardHeader className="border-b border-border bg-card pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Borrador de liquidez</CardTitle>
            <CardDescription>Cuando actualices tus balances manualmente, usa “Borrar todo” para volver este borrador a cero.</CardDescription>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar gasto..."
                className="pl-9 bg-muted/40 border-border focus-visible:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="destructive" onClick={handleClearAll} disabled={initialExpenses.length === 0}>
              <Trash2 className="h-4 w-4 mr-2" /> Borrar todo
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 bg-card">
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead className="pl-6 w-[140px]">Fecha</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead className="w-[50px] pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredExpenses.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                    {initialExpenses.length === 0
                      ? "No tienes gastos únicos pendientes."
                      : `No se encontraron gastos con "${searchTerm}".`}
                  </TableCell>
                </TableRow>
              )}

              {filteredExpenses.map((expense) => (
                <TableRow key={expense.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-sm">{format(new Date(expense.createdAt), "MMM dd")}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-foreground">{expense.description || "Sin descripción"}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1 text-foreground font-semibold">
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      ${expense.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleDelete(expense.id)}
                          className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/40 cursor-pointer"
                        >
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
  );
}
