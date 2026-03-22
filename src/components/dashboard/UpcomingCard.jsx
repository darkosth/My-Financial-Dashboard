"use client";

import { useState } from "react"; // 1. Agregamos useState
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, MoreHorizontal } from "lucide-react";

// 2. Importamos los componentes del Modal
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// 3. Importamos nuestro Formulario Reutilizable
import TemplateForm from "@/components/forms/TemplateForm";

// 4. Importamos la acción de actualizar
import { markAsPaid, updateTemplate } from "@/lib/actions/templateActions";

export default function UpcomingCard({ templates, totalFixedExpenses }) {
  
  // ==========================================
  // LA MEMORIA DEL MODAL
  // ==========================================
  const [isOpen, setIsOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);

  // ==========================================
  // EL CEREBRO DE ESTADO (A prueba de futuro)
  // ==========================================
  const getStatus = (template) => {
    if (!template.lastPaidAt) return "PENDING";
    
    const lastPaid = new Date(template.lastPaidAt);
    const now = new Date();

    if (lastPaid > now) return "PAID";
    
    if (template.frequency === "MONTHLY") {
      return (lastPaid.getMonth() === now.getMonth() && lastPaid.getFullYear() === now.getFullYear()) 
        ? "PAID" : "PENDING";
    }
    
    if (template.frequency === "WEEKLY") {
      const diffDays = Math.ceil(Math.abs(now - lastPaid) / (1000 * 60 * 60 * 24));
      return diffDays <= 7 ? "PAID" : "PENDING";
    }

    if (template.frequency === "BIWEEKLY") {
      const diffDays = Math.ceil(Math.abs(now - lastPaid) / (1000 * 60 * 60 * 24));
      return diffDays <= 14 ? "PAID" : "PENDING";
    }

    return "PENDING";
  };

  // ==========================================
  // LAS ACCIONES DE LOS BOTONES
  // ==========================================
  const handleMarkAsPaid = async (id) => {
    const result = await markAsPaid(id);
    if (!result.success) {
      alert("Hubo un error al registrar el pago.");
    }
  };

  const handleEditSubmit = async (formData) => {
    if (!editingTemplate) return;
    
    const result = await updateTemplate(editingTemplate.id, formData);
    if (result.success) {
      setIsOpen(false);
      setEditingTemplate(null);
    } else {
      alert("Hubo un error al actualizar el gasto.");
    }
  };

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

              {templates.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-slate-500 py-6">
                    No tienes pagos recurrentes registrados.
                  </TableCell>
                </TableRow>
              )}

              {templates.map((template) => {
                const status = getStatus(template);
                
                return (
                  <TableRow key={template.id} className="hover:bg-slate-100/50">
                    <TableCell className="pl-6">
                      <div className="font-medium text-base">{template.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{template.category}</div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {template.frequency === "MONTHLY" ? `Día ${template.dayOfMonth}` : (template.frequency === "WEEKLY" ? "Cada Semana" : "Cada 2 Semanas")}
                      {template.isAutoPay && (
                        <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Auto</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {status === "PAID" ? (
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
                          
                          {status === "PENDING" && (
                            <DropdownMenuItem 
                              onClick={() => handleMarkAsPaid(template.id)}
                              className="font-medium text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 cursor-pointer"
                            >
                              Marcar como Pagado
                            </DropdownMenuItem>
                          )}
                          
                          {/* EL BOTÓN AHORA ABRE EL MODAL Y GUARDA LA MEMORIA */}
                          <DropdownMenuItem 
                            onClick={() => {
                              setEditingTemplate(template);
                              setIsOpen(true);
                            }}
                            className="cursor-pointer"
                          >
                            Editar Gasto
                          </DropdownMenuItem>
                          
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* ========================================== */}
      {/* EL MODAL CON EL FORMULARIO REUTILIZABLE */}
      {/* ========================================== */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar Regla de Pago</DialogTitle>
          </DialogHeader>
          <TemplateForm
            key={editingTemplate ? editingTemplate.id : "new-template"}  // Esto fuerza a React a resetear el formulario cuando cambiamos de plantilla
            initialData={editingTemplate} 
            onSubmit={handleEditSubmit} 
            onCancel={() => setIsOpen(false)} 
          />

        </DialogContent>
      </Dialog>
    </section>
  );
}