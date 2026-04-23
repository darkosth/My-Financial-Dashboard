"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppDialogContent, Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, MoreHorizontal } from "lucide-react";
import TemplateForm from "@/components/forms/TemplateForm";
import PaymentActionDialog from "@/components/payments/PaymentActionDialog";
import { updateTemplate } from "@/lib/actions/templateActions";
import { formatCalendarDateLabel, getCalendarDateKey, normalizeCalendarDate } from "@/lib/calendarDate";
import { usePaymentActionDialog } from "@/lib/usePaymentActionDialog";

export default function UpcomingCard({ upcomingPayments, totalUpcomingExpenses }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const { isPaymentDialogOpen, isSubmittingPaymentAction, selectedPaymentItem, openPaymentDialog, closePaymentDialog, submitPaymentAction } =
    usePaymentActionDialog();

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
              <CalendarClock className="h-5 w-5 text-muted-foreground" />
              Próximos pagos
            </CardTitle>
          </div>
          <p className="text-2xl font-bold text-foreground truncate">
            ${totalUpcomingExpenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
            <span className="text-sm font-normal text-muted-foreground hidden sm:inline">/ próximas 2 semanas</span>
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4 sm:pl-6 w-[50%] sm:w-auto">Gasto</TableHead>
                <TableHead className="hidden sm:table-cell">Próximo cobro</TableHead>
                <TableHead className="text-right whitespace-nowrap">Monto</TableHead>
                <TableHead className="w-[40px] sm:w-[60px] pr-4 sm:pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingPayments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                    No tienes pagos pendientes en las próximas 2 semanas.
                  </TableCell>
                </TableRow>
              )}

              {upcomingPayments.map((payment) => {
                const occurrenceDate = normalizeCalendarDate(payment.occurrenceDate);
                const occurrenceLabel = formatCalendarDateLabel(
                  occurrenceDate,
                  { weekday: "short", day: "2-digit", month: "short" },
                  "en-US"
                );

                return (
                  <TableRow key={`${payment.id}-${getCalendarDateKey(occurrenceDate)}`} className="hover:bg-muted/50">
                    <TableCell className="pl-4 sm:pl-6 max-w-[140px] sm:max-w-none">
                      <div className="font-medium text-base truncate" title={payment.name}>
                        {payment.name}
                      </div>

                      <div className="block sm:hidden mt-1 pt-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-muted-foreground text-xs">{occurrenceLabel}</span>
                          {payment.isAutoPay && (
                            <span className="text-[9px] text-blue-600 bg-blue-50 px-1 rounded border border-blue-200">
                              Auto
                            </span>
                          )}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="hidden sm:table-cell text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{occurrenceLabel}</span>
                        {payment.isAutoPay && (
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                            Auto
                          </span>
                        )}
                      </div>
                    </TableCell>

                    <TableCell className="text-right font-semibold text-base whitespace-nowrap">
                      ${payment.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </TableCell>

                    <TableCell className="text-right w-[40px] sm:w-[60px] pr-4 sm:pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-10 w-10 p-0 rounded-full hover:bg-muted transition-colors">
                            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl shadow-xl border-border">
                          <DropdownMenuItem
                            onClick={() => openPaymentDialog({
                              ...payment,
                              templateId: payment.id,
                            })}
                            className="cursor-pointer text-sm sm:text-base font-medium py-3 px-4 rounded-lg text-emerald-600 focus:text-emerald-700 focus:bg-emerald-50 dark:focus:bg-emerald-950/40 transition-colors mb-1"
                          >
                            Gestionar pago
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <AppDialogContent>
          <DialogHeader>
            <DialogTitle>Editar regla de pago</DialogTitle>
          </DialogHeader>
          <TemplateForm
            key={editingTemplate ? editingTemplate.id : "upcoming-template"}
            initialData={editingTemplate}
            onSubmit={handleEditSubmit}
            onCancel={() => setIsOpen(false)}
          />
        </AppDialogContent>
      </Dialog>

      <PaymentActionDialog
        key={selectedPaymentItem ? `${selectedPaymentItem.templateId}-${selectedPaymentItem.carryoverId ?? "base"}-${selectedPaymentItem.occurrenceDate}` : "upcoming-payment-dialog"}
        item={selectedPaymentItem}
        open={isPaymentDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            closePaymentDialog();
          }
        }}
        onSubmitAction={submitPaymentAction}
        isSubmitting={isSubmittingPaymentAction}
      />
    </section>
  );
}
