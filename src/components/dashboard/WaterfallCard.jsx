"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  deferWaterfallItem,
  markWaterfallItemAsPaid,
  moveWaterfallItemToNextWeek,
} from "@/lib/actions/templateActions";
import { markCreditCardAsPaid } from "@/lib/actions/creditCardActions";

export default function WaterfallCard({ waterfallData, finalRemainingS4, standardWeeklyIncome }) {
  const router = useRouter();
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [partialAmount, setPartialAmount] = useState("");
  const isDanger = finalRemainingS4 <= 0;
  const isHealthy = finalRemainingS4 >= 1000;

  const resetDialog = () => {
    setSelectedDetail(null);
    setPartialAmount("");
  };

  const handleMarkAsPaid = async () => {
    if (!selectedDetail) return;

    const result =
      selectedDetail.kind === "credit-card"
        ? await markCreditCardAsPaid(selectedDetail.templateId.replace("credit-card:", ""), selectedDetail.occurrenceDate)
        : await markWaterfallItemAsPaid(selectedDetail.templateId, selectedDetail.occurrenceDate);

    if (result.success) {
      resetDialog();
      router.refresh();
    } else {
      alert("No se pudo registrar el pago.");
    }
  };

  const handleMoveToNextWeek = async () => {
    if (!selectedDetail) return;

    const result = await deferWaterfallItem(selectedDetail.templateId, selectedDetail.occurrenceDate, partialAmount);
    if (result.success) {
      resetDialog();
      router.refresh();
    } else {
      alert("No se pudo mover el restante a la proxima semana.");
    }
  };

  const handleMoveWithoutPaying = async () => {
    if (!selectedDetail) return;

    const result = await moveWaterfallItemToNextWeek(selectedDetail.templateId, selectedDetail.occurrenceDate);
    if (result.success) {
      resetDialog();
      router.refresh();
    } else {
      alert("No se pudo mover el gasto a la proxima semana.");
    }
  };

  return (
    <section>
      <Card
        className={`overflow-hidden border-2 shadow-lg transition-colors ${
          isDanger ? "border-red-500 bg-red-50" : isHealthy ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cascada" className="border-none">
            <AccordionTrigger
              className={`px-6 py-6 hover:no-underline transition-all ${
                isDanger ? "hover:bg-red-100/50" : isHealthy ? "hover:bg-emerald-100/50" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-center w-full pr-4">
                <div className="flex items-center gap-3">
                  <Target
                    className={`h-6 w-6 ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-500"}`}
                  />
                  <h2
                    className={`text-xl font-bold tracking-tight ${
                      isDanger ? "text-red-900" : isHealthy ? "text-emerald-900" : "text-slate-900"
                    }`}
                  >
                    Liquidez Proyectada a 4 Semanas
                  </h2>
                </div>
                <div className="text-right">
                  <p
                    className={`text-3xl font-extrabold ${
                      isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-700"
                    }`}
                  >
                    ${finalRemainingS4.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-muted-foreground">Tu saldo al terminar el mes</p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-0 border-t bg-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {waterfallData.map((data) => {
                  const weekDanger = data.restante <= 0;
                  const hasExpenses = data.details && data.details.length > 0;

                  return (
                    <div key={data.weekNumber} className="p-6 space-y-4 flex flex-col h-full">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base md:text-lg font-semibold text-slate-900 truncate whitespace-nowrap">
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
                        className={`p-4 rounded-xl border ${weekDanger ? "border-red-100 bg-red-50" : "border-slate-100 bg-slate-50"}`}
                      >
                        <p className={`text-2xl font-bold ${weekDanger ? "text-red-600" : "text-slate-900"}`}>
                          ${data.restante.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Saldo acumulado</p>
                      </div>

                      <div className="flex-grow">
                        {hasExpenses ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              Gastos pendientes: <span className="text-slate-900">-${data.expensesInWeek.toLocaleString("en-US")}</span>
                            </div>

                            <ul className="mt-2 space-y-1">
                              {data.details.map((detail, idx) => (
                                <li key={idx}>
                                  <button
                                    type="button"
                                    disabled={detail.isPaid}
                                    onClick={() => {
                                      if (detail.isPaid) return;
                                      setSelectedDetail(detail);
                                      setPartialAmount(detail.amount.toString());
                                    }}
                                    className={`w-full text-xs flex justify-between text-left ${
                                      detail.isPaid
                                        ? "text-slate-300 line-through cursor-default"
                                        : detail.isMovedWithoutPayment
                                          ? "text-amber-600 hover:text-amber-700 cursor-pointer"
                                          : "text-slate-500 hover:text-slate-900 cursor-pointer"
                                    }`}
                                  >
                                    <span>
                                      • {detail.name}
                                      {detail.isPaid && <span className="text-[10px] ml-1 no-underline">(Pagado)</span>}
                                      {detail.isDeferred && <span className="text-[10px] ml-1 no-underline">(Movido)</span>}
                                    </span>
                                    <span>${detail.amount}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium bg-emerald-50/50 p-2 rounded-md">
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

      <Dialog
        open={!!selectedDetail}
        onOpenChange={(open) => {
          if (!open) {
            resetDialog();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedDetail?.name}</DialogTitle>
            <DialogDescription>
              Puedes pagarlo completo, registrar un pago parcial y mover el resto, o moverlo completo a la proxima semana sin marcarlo como pagado.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="partialAmount">Monto pagado ahora</Label>
              <Input
                id="partialAmount"
                type="number"
                step="0.01"
                min="0"
                max={selectedDetail?.amount ?? undefined}
                value={partialAmount}
                onChange={(event) => setPartialAmount(event.target.value)}
              />
            </div>
            {selectedDetail && (
              <p className="text-xs text-slate-500">
                Si lo mueves, esta semana se libera y el saldo pendiente aparecera en la siguiente sin marcarse como pagado hasta que lo registres.
              </p>
            )}
          </div>

          <DialogFooter className="flex-col gap-3 sm:flex-col sm:items-stretch">
            {selectedDetail?.kind !== "credit-card" && (
              <div className="grid gap-2 sm:grid-cols-2">
                <Button variant="outline" className="w-full" onClick={handleMoveToNextWeek}>
                  Pagar parcial y mover resto
                </Button>
                <Button variant="secondary" className="w-full" onClick={handleMoveWithoutPaying}>
                  Mover a la siguiente semana
                </Button>
              </div>
            )}
            <Button className="w-full" onClick={handleMarkAsPaid}>
              Marcar todo como pagado
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
