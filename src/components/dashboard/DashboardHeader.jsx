"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPendingExpense } from "@/lib/actions/pendingExpenseActions";

export default function DashboardHeader({ accounts }) {
  const router = useRouter();
  const formRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (formData) => {
    const result = await createPendingExpense(formData);

    if (result.success) {
      formRef.current?.reset();
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Hubo un error al registrar el gasto único.");
    }
  };

  return (
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hola, Jorge</h1>
        <p className="text-muted-foreground">Proyección de Flujo de Caja</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="shadow-sm">+ Registrar Gasto Único</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Descontar Liquidez</DialogTitle>
            <DialogDescription>
              Registra una compra rápida para restarla de tu liquidez real mientras actualizas manualmente tus cuentas.
            </DialogDescription>
          </DialogHeader>

          <form action={handleSubmit} ref={formRef} className="grid gap-5 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-slate-700">Monto del gasto</Label>
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
                Descripción <span className="text-muted-foreground font-normal">(Opcional)</span>
              </Label>
              <Input
                id="description"
                name="description"
                placeholder={accounts.length > 0 ? "Ej: Café, Gasolina, Home Depot..." : "Ej: Café, Gasolina..."}
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full">Restar de mi liquidez</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
