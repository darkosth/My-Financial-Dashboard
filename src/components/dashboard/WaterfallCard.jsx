"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, AlertTriangle, CheckCircle2 } from "lucide-react";
import PaymentActionDialog from "@/components/payments/PaymentActionDialog";
import { usePaymentActionDialog } from "@/lib/usePaymentActionDialog";

const formatCurrency = (value) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function WaterfallCard({ waterfallData, finalRemainingS4, standardWeeklyIncome }) {
  const {
    isPaymentDialogOpen,
    isSubmittingPaymentAction,
    selectedPaymentItem,
    openPaymentDialog,
    closePaymentDialog,
    submitPaymentAction,
  } = usePaymentActionDialog();
  const isDanger = finalRemainingS4 <= 0;
  const isHealthy = finalRemainingS4 >= 1000;

  return (
    <section>
      <Card
        className={`overflow-hidden border-2 shadow-lg transition-colors ${
          isDanger
            ? "border-red-500 bg-red-50 dark:bg-red-950/30"
            : isHealthy
              ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
              : "border-border bg-card"
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cascada" className="border-none">
            <AccordionTrigger
              className={`px-6 py-6 hover:no-underline transition-all ${
                isDanger
                  ? "hover:bg-red-100/50 dark:hover:bg-red-950/25"
                  : isHealthy
                    ? "hover:bg-emerald-100/50 dark:hover:bg-emerald-950/25"
                    : "hover:bg-muted/50"
              }`}
            >
              <div className="flex justify-between items-center w-full pr-4">
                <div className="flex items-center gap-3">
                  <Target
                    className={`h-6 w-6 ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground"}`}
                  />
                  <h2
                    className={`text-xl font-bold tracking-tight ${
                      isDanger
                        ? "text-red-900 dark:text-red-100"
                        : isHealthy
                          ? "text-emerald-900 dark:text-emerald-100"
                          : "text-foreground"
                    }`}
                  >
                    Liquidez Proyectada a 4 Semanas
                  </h2>
                </div>
                <div className="text-right">
                  <p
                    className={`text-3xl font-extrabold ${
                      isDanger
                        ? "text-red-600"
                        : isHealthy
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-muted-foreground"
                    }`}
                  >
                    ${finalRemainingS4.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-muted-foreground">Tu saldo al terminar el mes</p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-0 border-t bg-card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
                {waterfallData.map((data) => {
                  const weekDanger = data.restante <= 0;
                  const hasExpenses = data.details && data.details.length > 0;

                  return (
                    <div key={data.weekNumber} className="p-6 space-y-4 flex flex-col h-full">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base md:text-lg font-semibold text-foreground truncate whitespace-nowrap">
                            {data.title}
                          </h3>
                        </div>
                        <div className="flex min-h-7 justify-end">
                          {data.weekNumber !== 1 ? (
                            <Badge variant="outline" className="shrink-0 text-xs text-blue-600 border-blue-100 bg-blue-50">
                              +${standardWeeklyIncome.toLocaleString("en-US")} Ingreso
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="invisible shrink-0 text-xs">
                              +${standardWeeklyIncome.toLocaleString("en-US")} Ingreso
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div
                        className={`p-4 rounded-xl border ${weekDanger ? "border-red-100 bg-red-50 dark:border-red-900/40 dark:bg-red-950/25" : "border-border bg-muted/40"}`}
                      >
                        <p className={`text-2xl font-bold ${weekDanger ? "text-red-600" : "text-foreground"}`}>
                          ${data.restante.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Saldo acumulado</p>
                      </div>

                      <div className="flex-grow">
                        {hasExpenses ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              Gastos pendientes:{" "}
                              <span className="text-foreground">-${data.expensesInWeek.toLocaleString("en-US")}</span>
                            </div>

                            <ul className="mt-2 space-y-1">
                              {data.details.map((detail, idx) => (
                                <li key={idx}>
                                  <button
                                    type="button"
                                    disabled={detail.isPaid}
                                    onClick={() => {
                                      if (detail.isPaid) return;
                                      openPaymentDialog(detail);
                                    }}
                                    className={`w-full text-xs flex justify-between text-left ${
                                      detail.isPaid
                                        ? "text-muted-foreground/50 line-through cursor-default"
                                        : detail.isMovedWithoutPayment
                                          ? "text-amber-600 hover:text-amber-700 cursor-pointer"
                                          : "text-muted-foreground hover:text-foreground cursor-pointer"
                                    }`}
                                  >
                                    <span>
                                      • {detail.name}
                                      {detail.isPaid && <span className="text-[10px] ml-1 no-underline">(Pagado)</span>}
                                      {detail.isDeferred && <span className="text-[10px] ml-1 no-underline">(Movido)</span>}
                                    </span>
                                    <span>{formatCurrency(detail.amount)}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50/50 dark:bg-emerald-950/30 p-2 rounded-md">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Semana libre de pagos</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <PaymentActionDialog
        key={selectedPaymentItem ? `${selectedPaymentItem.templateId}-${selectedPaymentItem.carryoverId ?? "base"}-${selectedPaymentItem.occurrenceDate}` : "waterfall-payment-dialog"}
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
