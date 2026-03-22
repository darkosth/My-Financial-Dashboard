"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TemplateForm({ initialData = null, onSubmit, onCancel }) {
  const [freq, setFreq] = useState(initialData?.frequency || "MONTHLY");
  const formRef = useRef(null);

  return (
    <form action={onSubmit} ref={formRef} className="grid gap-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" defaultValue={initialData?.name} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Monto ($)</Label>
          <Input id="amount" name="amount" defaultValue={initialData?.amount} type="number" step="0.01" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Categoría</Label>
          <select id="category" name="category" defaultValue={initialData?.category || "OTHER"} className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
            <option value="HOUSING">Vivienda</option>
            <option value="TRANSPORTATION">Transporte</option>
            <option value="FOOD">Comida</option>
            <option value="UTILITIES">Servicios</option>
            <option value="INSURANCE">Seguros</option>
            <option value="SUBSCRIPTIONS">Suscripciones</option>
            <option value="MEDICAL">Médico / Escuela</option>
            <option value="OTHER">Otros</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frecuencia</Label>
          <select id="frequency" name="frequency" value={freq} onChange={(e) => setFreq(e.target.value)} className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
            <option value="MONTHLY">Mensual</option>
            <option value="WEEKLY">Semanal</option>
            <option value="BIWEEKLY">Bisemanal</option>
          </select>
        </div>
      </div>

      {freq === "MONTHLY" ? (
        <div className="space-y-2">
          <Label htmlFor="dayOfMonth">Día de cobro (1-31)</Label>
          <Input id="dayOfMonth" name="dayOfMonth" defaultValue={initialData?.dayOfMonth} type="number" min="1" max="31" required />
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="lastPaidAt">Última fecha de pago</Label>
          <Input id="lastPaidAt" name="lastPaidAt" defaultValue={initialData?.lastPaidAt ? new Date(initialData.lastPaidAt).toISOString().split('T')[0] : ""} type="date" required />
        </div>
      )}

      <div className="flex items-center space-x-2 pt-2">
        <input type="checkbox" id="isAutoPay" name="isAutoPay" defaultChecked={initialData?.isAutoPay} className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
        <Label htmlFor="isAutoPay" className="font-normal text-slate-700">Este pago está en Auto-Pay</Label>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
        )}
        <Button type="submit" className="w-full sm:w-auto">
          {initialData ? "Actualizar Gasto" : "Guardar Gasto"}
        </Button>
      </div>
    </form>
  );
}