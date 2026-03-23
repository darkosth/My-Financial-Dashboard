"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPendingExpense } from "@/lib/actions/pendingExpenseActions";
import { updateAppSettings } from "@/lib/actions/settingsActions";

export default function DashboardHeader({ accounts, userDisplayName, weeklyIncome }) {
  const router = useRouter();
  const expenseFormRef = useRef(null);
  const settingsFormRef = useRef(null);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleExpenseSubmit = async (formData) => {
    const result = await createPendingExpense(formData);

    if (result.success) {
      expenseFormRef.current?.reset();
      setIsExpenseOpen(false);
      router.refresh();
    } else {
      alert("There was an error registering the one-time expense.");
    }
  };

  const handleSettingsSubmit = async (formData) => {
    const result = await updateAppSettings(formData);

    if (result.success) {
      settingsFormRef.current?.reset();
      setIsSettingsOpen(false);
      router.refresh();
    } else {
      alert("There was an error updating the settings.");
    }
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hola, {userDisplayName}</h1>
        <p className="text-muted-foreground">Proyección de flujo de caja para las próximas cuatro semanas.</p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="shadow-sm">
              Editar ingreso semanal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajustes de proyección</DialogTitle>
              <DialogDescription>
                Actualiza el ingreso semanal usado por el waterfall y las tarjetas de proyección.
              </DialogDescription>
            </DialogHeader>

            <form action={handleSettingsSubmit} ref={settingsFormRef} className="grid gap-5 py-4">
              <div className="grid gap-2">
                <Label htmlFor="weeklyIncome" className="text-slate-700">
                  Ingreso semanal
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                  <Input
                    id="weeklyIncome"
                    name="weeklyIncome"
                    type="number"
                    step="0.01"
                    min="0"
                    defaultValue={weeklyIncome}
                    className="pl-7 text-lg font-semibold"
                    required
                  />
                </div>
              </div>

              <DialogFooter>
                <Button type="submit" className="w-full">
                  Guardar ajustes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isExpenseOpen} onOpenChange={setIsExpenseOpen}>
          <DialogTrigger asChild>
            <Button className="shadow-sm">+ Registrar gasto único</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Descontar liquidez</DialogTitle>
              <DialogDescription>
                Registra una compra rápida para restarla de tu liquidez real mientras actualizas tus cuentas manualmente.
              </DialogDescription>
            </DialogHeader>

            <form action={handleExpenseSubmit} ref={expenseFormRef} className="grid gap-5 py-4">
              <div className="grid gap-2">
                <Label htmlFor="amount" className="text-slate-700">
                  Monto del gasto
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="0.00"
                    className="pl-7 text-lg font-semibold"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description" className="text-slate-700">
                  Descripción <span className="text-muted-foreground font-normal">(opcional)</span>
                </Label>
                <Input
                  id="description"
                  name="description"
                  placeholder={accounts.length > 0 ? "Ej: Café, gasolina, Home Depot..." : "Ej: Café, gasolina..."}
                />
              </div>

              <DialogFooter>
                <Button type="submit" className="w-full">
                  Restar de mi liquidez
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
