"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, MoreHorizontal } from "lucide-react";
import TemplateForm from "@/components/forms/TemplateForm";
import { markWaterfallItemAsPaid, moveWaterfallItemToNextWeek, updateTemplate } from "@/lib/actions/templateActions";
import { markCreditCardAsPaid } from "@/lib/actions/creditCardActions";

const getFrequencyLabel = (payment) => {
  if (payment.isCarryover) return "Saldo movido";
  if (payment.frequency === "MONTHLY") return `Día ${payment.dayOfMonth}`;
  if (payment.frequency === "WEEKLY") return "Cada semana";
  return "Cada 2 semanas";
};

export default function UpcomingCard({ upcomingPayments, totalUpcomingExpenses }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);

  const handleMarkAsPaid = async (payment) => {
    const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
    const result =
      payment.kind === "credit-card"
        ? await markCreditCardAsPaid(payment.id.replace("credit-card:", ""), settlementDate)
        : await markWaterfallItemAsPaid(payment.id, settlementDate);

    if (result.success) {
      router.refresh();
    } else {
      alert("Hubo un error al registrar el pago.");
    }
  };

  const handleMoveToNextWeek = async (payment) => {
    const settlementDate = payment.sourceCycleReference ?? payment.occurrenceDate;
    const result = await moveWaterfallItemToNextWeek(payment.id, settlementDate);

    if (result.success) {
      router.refresh();
    } else {
      alert("Hubo un error al mover el gasto.");
    }
  };

  const handleEditSubmit = async (formData) => {
    if (!editingTemplate) return;

    const result = await updateTemplate(editingTemplate.id, formData);
    if (result.success) {
      setIsOpen(false);
      setEditingTemplate(null);
      router.refresh();
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
              Próximos pagos
            </CardTitle>
          </div>
          <p className="text-2xl font-bold text-slate-700">
            ${totalUpcomingExpenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
            <span className="text-sm font-normal text-muted-foreground">/ próximas 2 semanas</span>
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-6">Gasto</TableHead>
                <TableHead>Próximo cobro</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead className="w-[50px] pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingPayments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-slate-500 py-6">
                    No tienes pagos pendientes en las próximas 2 semanas.
                  </TableCell>
                </TableRow>
              )}

              {upcomingPayments.map((payment) => {
                const occurrenceDate = new Date(payment.occurrenceDate);
                return (
                  <TableRow key={`${payment.id}-${occurrenceDate.toISOString()}`} className="hover:bg-slate-100/50">
                    <TableCell className="pl-6">
                      <div className="font-medium text-base">{payment.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{payment.category}</div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      <div className="font-medium">{format(occurrenceDate, "EEE dd MMM")}</div>
                      <div className="text-xs text-muted-foreground mt-1">{getFrequencyLabel(payment)}</div>
                      {payment.isAutoPay && (
                        <span className="ml-2 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          Auto
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-base">
                      ${payment.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className="text-right w-[50px] pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleMarkAsPaid(payment)}
                            className="font-medium text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 cursor-pointer"
                          >
                            Marcar como pagado
                          </DropdownMenuItem>
                          {payment.kind !== "credit-card" && (
                            <>
                              <DropdownMenuItem
                                onClick={() => handleMoveToNextWeek(payment)}
                                className="font-medium text-amber-600 focus:text-amber-700 focus:bg-amber-50 cursor-pointer"
                              >
                                Mover a la siguiente semana
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setEditingTemplate(payment);
                                  setIsOpen(true);
                                }}
                                className="cursor-pointer"
                              >
                                Editar gasto
                              </DropdownMenuItem>
                            </>
                          )}
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar regla de pago</DialogTitle>
          </DialogHeader>
          <TemplateForm
            key={editingTemplate ? editingTemplate.id : "upcoming-template"}
            initialData={editingTemplate}
            onSubmit={handleEditSubmit}
            onCancel={() => setIsOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
