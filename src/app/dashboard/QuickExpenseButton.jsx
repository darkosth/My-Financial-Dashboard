"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle, ReceiptText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPendingExpense } from "@/lib/actions/pendingExpenseActions";

export default function QuickExpenseButton({ hasAccounts }) {
  const router = useRouter();
  const expenseFormRef = useRef(null);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleExpenseSubmit = async (formData) => {
    setIsLoading(true);
    const result = await createPendingExpense(formData);

    if (result.success) {
      expenseFormRef.current?.reset();
      setIsExpenseOpen(false);
      router.refresh();
    } else {
      alert("Hubo un error al registrar el gasto.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button 
        onClick={() => setIsExpenseOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 py-6 px-6 text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
      >
        <PlusCircle className="w-6 h-6" />
        Registrar gasto único
      </Button>

      <Dialog open={isExpenseOpen} onOpenChange={setIsExpenseOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <ReceiptText className="w-6 h-6 text-emerald-600" />
              Descontar liquidez
            </DialogTitle>
            <DialogDescription className="text-base text-slate-500">
              Anota esa compra rápida para restarla de los números de la casa al instante.
            </DialogDescription>
          </DialogHeader>

          <form action={handleExpenseSubmit} ref={expenseFormRef} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-slate-700 text-base font-medium">
                Monto del gasto
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-slate-500 font-bold text-xl">$</span>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  className="pl-9 py-6 text-2xl font-bold rounded-xl"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" className="text-slate-700 text-base font-medium">
                Descripción <span className="font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <Input
                id="description"
                name="description"
                className="py-6 text-lg rounded-xl"
                placeholder={hasAccounts ? "Ej: Antojos, gasolina, farmacia..." : "Ej: Comida..."}
              />
            </div>

            <DialogFooter className="mt-2">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-6 text-lg bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold"
              >
                {isLoading ? "Guardando..." : "Restar de mi liquidez"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}