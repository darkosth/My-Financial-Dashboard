"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, AlertTriangle, CheckCircle2 } from "lucide-react"; 

export default function WaterfallCard({ waterfallData, finalRemainingS4, standardWeeklyIncome }) {
  const isDanger = finalRemainingS4 <= 0;
  const isHealthy = finalRemainingS4 >= 1000;
  
  return (
    <section>
      <Card className={`overflow-hidden border-2 shadow-lg transition-colors ${
        isDanger ? "border-red-500 bg-red-50" : 
        isHealthy ? "border-emerald-500 bg-emerald-50" : 
        "border-slate-200 bg-white"
      }`}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cascada" className="border-none">
            
            <AccordionTrigger className={`px-6 py-6 hover:no-underline transition-all ${
              isDanger ? "hover:bg-red-100/50" : 
              isHealthy ? "hover:bg-emerald-100/50" : 
              "hover:bg-slate-50"
            }`}>
              <div className="flex justify-between items-center w-full pr-4">
                <div className="flex items-center gap-3">
                  <Target className={`h-6 w-6 ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-500"}`} />
                  <h2 className={`text-xl font-bold tracking-tight ${isDanger ? "text-red-900" : isHealthy ? "text-emerald-900" : "text-slate-900"}`}>
                    Liquidez Proyectada a 4 Semanas
                  </h2>
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-extrabold ${isDanger ? "text-red-600" : isHealthy ? "text-emerald-600" : "text-slate-700"}`}>
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
                  const hasExpenses = data.expensesInWeek > 0;
                  
                  return (
                    <div key={data.weekNumber} className="p-6 space-y-4 flex flex-col h-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-slate-900">{data.title}</h3>
                        
                        {/* Ocultamos la etiqueta azul exclusivamente en la Semana 1 */}
                        {data.weekNumber !== 1 && (
                          <Badge variant="outline" className="text-xs text-blue-600 border-blue-100 bg-blue-50">
                            +${standardWeeklyIncome.toLocaleString("en-US")} Ingreso
                          </Badge>
                        )}
                      </div>
                      
                      <div className={`p-4 rounded-xl border ${weekDanger ? "border-red-100 bg-red-50" : "border-slate-100 bg-slate-50"}`}>
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
                              Gastos: <span className="text-slate-900">-${data.expensesInWeek.toLocaleString("en-US")}</span>
                            </div>
                            
                            {data.details && data.details.length > 0 && (
                              <ul className="mt-2 space-y-1">
                                {data.details.map((detail, idx) => (
                                  <li key={idx} className="text-xs text-slate-500 flex justify-between">
                                    <span>• {detail.name}</span>
                                    <span>${detail.amount}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium bg-emerald-50/50 p-2 rounded-md">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>¡Semana libre de pagos!</span>
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
    </section>
  );
}