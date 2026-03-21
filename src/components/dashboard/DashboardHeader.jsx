"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// por la PROPS entran las cuentas del usuario, para mostrarlas en el SELECT del modal
export default function DashboardHeader({ accounts }) {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hola, Jorge</h1>
        <p className="text-muted-foreground">Proyección de Flujo de Caja</p>
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
                  {/* Aquí usamos las cuentas que le pasaron como PROPS */}
                  {accounts.map((acc) => (
                    <SelectItem key={acc.id} value={acc.id}>
                      {acc.name} <span className="text-muted-foreground ml-1">(${acc.balance.toLocaleString("en-US")})</span>
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
  );
}