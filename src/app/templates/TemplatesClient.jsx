"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, Plus, Repeat, CalendarDays, Settings2, ArrowUpDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { formatCalendarDateForInput } from "@/lib/calendarDate";
import { createTemplate, deleteTemplate, updateTemplate } from "@/lib/actions/templateActions";

export default function TemplatesClient({ initialTemplates }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [freq, setFreq] = useState("MONTHLY");
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredTemplates = initialTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (typeof aValue === "string") aValue = aValue.toLowerCase();
    if (typeof bValue === "string") bValue = bValue.toLowerCase();

    if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalMonthlyBase = initialTemplates.reduce((acc, template) => {
    if (template.frequency === "MONTHLY") {
      return acc + template.amount;
    }
    if (template.frequency === "WEEKLY") {
      return acc + (template.amount * 52) / 12;
    }
    if (template.frequency === "BIWEEKLY") {
      return acc + (template.amount * 26) / 12;
    }
    return acc;
  }, 0);

  const handleSubmit = async (formData) => {
    const result = editingTemplate
      ? await updateTemplate(editingTemplate.id, formData)
      : await createTemplate(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingTemplate(null);
      formRef.current?.reset();
    } else {
      alert("Hubo un error al guardar. Revisa la consola.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this fixed expense?")) {
      const result = await deleteTemplate(id);
      if (!result.success) {
        alert("Error deleting the item.");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Settings2 className="h-8 w-8 text-foreground" />
            Gastos Fijos
          </h1>
          <p className="text-muted-foreground">Administra tus suscripciones, bills y presupuestos recurrentes.</p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="shadow-sm"
              onClick={() => {
                setEditingTemplate(null);
                setFreq("MONTHLY");
                setIsOpen(true);
              }}
            >
              <Plus className="mr-2 h-4 w-4" /> Nuevo Gasto Fijo
            </Button>
          </DialogTrigger>
          <AppDialogContent>
            <DialogHeader>
              <DialogTitle>Crear Regla de Pago</DialogTitle>
              <DialogDescription>Añade un nuevo gasto fijo a tu radar financiero.</DialogDescription>
            </DialogHeader>

            <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" defaultValue={editingTemplate?.name} placeholder="Ej: Renta, Seguro..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Monto ($)</Label>
                  <Input id="amount" name="amount" defaultValue={editingTemplate?.amount} type="number" step="0.01" placeholder="0.00" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <select id="category" name="category" defaultValue={editingTemplate?.category || "HOUSING"} className="flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
                    <option value="HOUSING">Vivienda (Housing)</option>
                    <option value="TRANSPORTATION">Transporte (Auto/Gas)</option>
                    <option value="FOOD">Comida (Food)</option>
                    <option value="UTILITIES">Servicios (Utilities)</option>
                    <option value="INSURANCE">Seguros (Insurance)</option>
                    <option value="SUBSCRIPTIONS">Suscripciones</option>
                    <option value="MEDICAL">Médico / Escuela</option>
                    <option value="OTHER">Otros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frecuencia</Label>
                  <select id="frequency" name="frequency" value={freq} onChange={(e) => setFreq(e.target.value)} className="flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
                    <option value="MONTHLY">Mensual</option>
                    <option value="WEEKLY">Semanal (EW)</option>
                    <option value="BIWEEKLY">Bisemanal (E2W)</option>
                  </select>
                </div>
              </div>

              {freq === "MONTHLY" ? (
                <div className="space-y-2">
                  <Label htmlFor="dayOfMonth">Día de cobro (1-31)</Label>
                  <Input id="dayOfMonth" name="dayOfMonth" defaultValue={editingTemplate?.dayOfMonth} type="number" min="1" max="31" placeholder="Ej: 15" required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="lastPaidAt">Última fecha de pago</Label>
                  <Input id="lastPaidAt" name="lastPaidAt" defaultValue={formatCalendarDateForInput(editingTemplate?.lastPaidAt)} type="date" required />
                </div>
              )}

              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="isAutoPay" name="isAutoPay" defaultChecked={editingTemplate?.isAutoPay} className="h-4 w-4 rounded border-border text-emerald-600 focus:ring-emerald-500" />
                <Label htmlFor="isAutoPay" className="font-normal text-foreground">Este pago está en Auto-Pay</Label>
              </div>

              <DialogFooter className="mt-4">
                <Button type="submit" className="w-full">Guardar Gasto Fijo</Button>
              </DialogFooter>
            </form>
          </AppDialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border-border">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Base Mensual</p>
            <p className="text-3xl font-bold text-foreground">${totalMonthlyBase.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-border">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">Reglas Activas</p>
            <p className="text-3xl font-bold text-foreground">{initialTemplates.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 shadow-sm border-emerald-100 dark:bg-emerald-950/35 dark:border-emerald-900/50">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">En Auto-Pay</p>
            <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
              {initialTemplates.filter((template) => template.isAutoPay).length}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-border">
        <CardHeader className="border-b border-border bg-card pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Reglas de Pago</CardTitle>
            <CardDescription>El motor que alimenta tu Radar de Supervivencia.</CardDescription>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar bill o categoría..."
              className="pl-9 bg-muted/40 border-border focus-visible:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>

        <CardContent className="p-0 bg-card">
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead className="pl-6 cursor-pointer hover:bg-muted/60 transition-colors" onClick={() => requestSort("name")}>
                  <div className="flex items-center gap-2">
                    Nombre del Gasto
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </TableHead>

                <TableHead className="text-right cursor-pointer hover:bg-muted/60 transition-colors" onClick={() => requestSort("amount")}>
                  <div className="flex items-center justify-end gap-2">
                    Monto
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </TableHead>

                <TableHead className="w-[50px] pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTemplates.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="h-32 text-center text-muted-foreground">
                    Aún no hay gastos registrados. ¡Agrega el primero!
                  </TableCell>
                </TableRow>
              )}

              {sortedTemplates.map((template) => (
                <TableRow key={template.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="flex flex-col">
                      <div className="font-medium text-foreground flex items-center gap-2">
                        {template.name}
                        {template.isAutoPay && (
                          <Badge variant="outline" className="text-[10px] h-5 px-1.5 text-blue-600 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">Auto</Badge>
                        )}
                      </div>
                      <div className="mt-1">
                        {template.frequency === "MONTHLY" ? (
                          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                            <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>Día {template.dayOfMonth}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                            <Repeat className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{template.frequency === "WEEKLY" ? "Cada Semana" : "Cada 2 Semanas"}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-foreground text-base">
                    ${template.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
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
                          onClick={() => {
                            setEditingTemplate(template);
                            setFreq(template.frequency);
                            setIsOpen(true);
                          }}
                          className="text-blue-600 focus:text-blue-600 focus:bg-blue-50 dark:focus:bg-blue-950/40 cursor-pointer"
                        >
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(template.id)}
                          className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/40 cursor-pointer"
                        >
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
  );
}
