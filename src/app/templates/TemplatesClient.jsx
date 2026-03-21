"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, Plus, Repeat, CalendarDays, Settings2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// Importamos tu motor de Negocios con la db
import { createTemplate, deleteTemplate, updateTemplate } from "@/lib/actions/templateActions";

export default function TemplatesClient({ initialTemplates }) {

  // Estados locales para controlar la búsqueda, el filtro de frecuencia, edición y el modal
  const [searchTerm, setSearchTerm] = useState("");
  const [freq, setFreq] = useState("MONTHLY"); // Para saber qué campo de fecha mostrar
  const [isOpen, setIsOpen] = useState(false); // Controla si el modal está abierto
  const formRef = useRef(null);
  const [editingTemplate, setEditingTemplate] = useState(null); // Para controlar qué template se está editando

  // Filtramos los datos REALES
  const filteredTemplates = initialTemplates.filter((template) => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMonthlyBase = initialTemplates.reduce((acc, template) => {
    if (template.frequency === "MONTHLY") {
      return acc + template.amount;
    }
    if (template.frequency === "WEEKLY") {
      return acc + (template.amount * 52 / 12); // Convertimos semanal a mensual
    }
    if (template.frequency === "BIWEEKLY") {
      return acc + (template.amount * 26 / 12); // Convertimos bisemanal a mensual
    }
    return acc; 
  }, 0);

  // La función que atrapa el formulario y lo envía al servidor
  // La función que atrapa el formulario y decide si CREAR o ACTUALIZAR
  const handleSubmit = async (formData) => {
    let result;
    // ¿Nuestra memoria tiene algo guardado?
    if (editingTemplate) {
      // SÍ: Entonces le mandamos el ID viejo y los datos nuevos para que SOBREESCRIBA
      result = await updateTemplate(editingTemplate.id, formData);
    } else {
      // NO: La memoria está vacía, entonces es un registro completamente NUEVO
      result = await createTemplate(formData);
    }

    if (result.success) {
      setIsOpen(false); // Cerramos el modal
      setEditingTemplate(null); // ¡VITAL! Borramos la memoria para que el siguiente clic sea limpio
      formRef.current?.reset(); // Limpiamos el formulario
    } else {
      alert("Hubo un error al guardar. Revisa la consola.");
    }
  };

  const handleDelete = async (id) => {
  // Un popup nativo de confirmación para evitar borrados por accidente
  if (window.confirm("Are you sure you want to delete this fixed expense?")) {
    const result = await deleteTemplate(id);
    if (!result.success) {
      alert("Error deleting the item.");
    }
  }
};

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* ENCABEZADO Y MODAL DE NUEVO GASTO */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Settings2 className="h-8 w-8 text-slate-700" />
            Gastos Fijos
          </h1>
          <p className="text-muted-foreground">Administra tus suscripciones, biles y presupuestos recurrentes.</p>
        </div>
        
        {/* EL MODAL DE CREACIÓN */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="shadow-sm"
              onClick={() => {
                setEditingTemplate(null); // Nos aseguramos de que no haya ningún template en edición cuando abrimos el modal para crear uno nuevo
                setFreq("MONTHLY"); // Reseteamos la frecuencia al valor por defecto
                setIsOpen(true);
              }}
              >
              <Plus className="mr-2 h-4 w-4" /> Nuevo Gasto Fijo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crear Regla de Pago</DialogTitle>
              <DialogDescription>Añade un nuevo gasto fijo a tu radar financiero.</DialogDescription>
            </DialogHeader>
            
            {/* EL FORMULARIO REAL QUE HABLA CON NEON */}
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
                  <select id="category" name="category" defaultValue={editingTemplate?.category || "HOUSING"} className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
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
                  <select id="frequency" name="frequency" value={freq} onChange={(e) => setFreq(e.target.value)} className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" required>
                    <option value="MONTHLY">Mensual</option>
                    <option value="WEEKLY">Semanal (EW)</option>
                    <option value="BIWEEKLY">Bisemanal (E2W)</option>
                  </select>
                </div>
              </div>

              {/* INTELIGENCIA CONDICIONAL: Mostramos el campo correcto según la frecuencia */}
              {freq === "MONTHLY" ? (
                <div className="space-y-2">
                  <Label htmlFor="dayOfMonth">Día de cobro (1-31)</Label>
                  <Input id="dayOfMonth" name="dayOfMonth" defaultValue={editingTemplate?.dayOfMonth} type="number" min="1" max="31"  placeholder="Ej: 15" required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="lastPaidAt">Última fecha de pago</Label>
                  <Input id="lastPaidAt" name="lastPaidAt" defaultValue={editingTemplate?.lastPaidAt ? new Date(editingTemplate.lastPaidAt).toISOString().split('T')[0] : ""} type="date" required />
                </div>
              )}

              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="isAutoPay" name="isAutoPay" defaultChecked={editingTemplate?.isAutoPay} className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                <Label htmlFor="isAutoPay" className="font-normal text-slate-700">Este pago está en Auto-Pay</Label>
              </div>

              <DialogFooter className="mt-4">
                <Button type="submit" className="w-full">Guardar Gasto Fijo</Button>
              </DialogFooter>
            </form>

          </DialogContent>
        </Dialog>
      </div>

      {/* TARJETAS DE RESUMEN */}
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
            <p className="text-3xl font-bold text-slate-900">{initialTemplates.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 shadow-sm border-emerald-100">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-emerald-600 mb-1">En Auto-Pay</p>
            <p className="text-3xl font-bold text-emerald-700">
              {initialTemplates.filter(t => t.isAutoPay).length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* LA TABLA DE DATOS */}
      <Card className="shadow-sm border-slate-200">
        <CardHeader className="border-b bg-white pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Reglas de Pago</CardTitle>
            <CardDescription>El motor que alimenta tu Radar de Supervivencia.</CardDescription>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              type="text" placeholder="Buscar bil o categoría..." 
              className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
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
                    Aún no hay gastos registrados. ¡Agrega el primero!
                  </TableCell>
                </TableRow>
              )}

              {filteredTemplates.map((template) => (
                <TableRow key={template.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="font-medium text-slate-900 flex items-center gap-2">
                      {template.name}
                      {template.isAutoPay && (
                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 text-blue-600 border-blue-200 bg-blue-50">Auto</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {template.frequency === "MONTHLY" ? (
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <CalendarDays className="h-4 w-4 text-slate-400" />
                        <span>Día {template.dayOfMonth}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Repeat className="h-4 w-4 text-slate-400" />
                        <span>{template.frequency === "WEEKLY" ? "Cada Semana" : "Cada 2 Semanas"}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                      {template.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-slate-900 text-base">
                    ${template.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4 text-slate-400 hover:text-slate-900" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setEditingTemplate(template); // Cargamos el template en edición
                            setFreq(template.frequency); // Ajustamos la frecuencia para mostrar el campo correcto en el modal
                            setIsOpen(true); // Abrimos el modal
                          }} 
                          className="text-blue-600 focus:text-blue-600 focus:bg-blue-50 cursor-pointer">
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(template.id)} className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
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