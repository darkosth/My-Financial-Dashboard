"use client";

import { useState } from "react";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import { getCalendarEventsForDay } from "@/lib/financeEngine";
import { markCreditCardAsPaid } from "@/lib/actions/creditCardActions";
import { markWaterfallItemAsPaid, moveWaterfallItemToNextWeek } from "@/lib/actions/templateActions";

const CALENDAR_WEEK_STARTS_ON = 0;
const weekDaysHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarClient({
  scheduledPayments,
  historyRecords,
  creditCardHistoryRecords,
  carryovers,
  pendingExpenses,
  upcomingPayments,
  totalUpcomingExpenses,
  today,
}) {
  const router = useRouter();
  const normalizedToday = startOfDay(new Date(today));
  const [currentDate, setCurrentDate] = useState(normalizedToday);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  const handleMarkAsPaid = async () => {
    if (!selectedExpense) return;
    const settlementDate = selectedExpense.sourceCycleReference ?? selectedExpense.occurrenceDate;

    const result =
      selectedExpense.kind === "credit-card"
        ? await markCreditCardAsPaid(selectedExpense.templateId.replace("credit-card:", ""), settlementDate)
        : await markWaterfallItemAsPaid(selectedExpense.templateId, settlementDate);

    if (result.success) {
      setSelectedExpense(null);
      router.refresh();
      return;
    }

    alert("Could not register the payment.");
  };

  const handleMoveToNextWeek = async () => {
    if (!selectedExpense || selectedExpense.kind === "credit-card") return;
    const settlementDate = selectedExpense.sourceCycleReference ?? selectedExpense.occurrenceDate;

    const result = await moveWaterfallItemToNextWeek(selectedExpense.templateId, settlementDate);

    if (result.success) {
      setSelectedExpense(null);
      router.refresh();
      return;
    }

    alert("Could not move the expense.");
  };

  const getCalendarGridStart = (date) => startOfWeek(startOfDay(date), { weekStartsOn: CALENDAR_WEEK_STARTS_ON });
  const getCalendarGridEnd = (date) => endOfWeek(startOfDay(date), { weekStartsOn: CALENDAR_WEEK_STARTS_ON });

  const getDaysInGrid = () => {
    const startDate = isExpanded
      ? getCalendarGridStart(startOfMonth(currentDate))
      : getCalendarGridStart(currentDate);
    const endDate = isExpanded
      ? getCalendarGridEnd(endOfMonth(currentDate))
      : addDays(startDate, 20);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const getEventsForDay = (day) =>
    getCalendarEventsForDay({
      scheduledPayments,
      historyRecords,
      creditCardHistoryRecords,
      carryovers,
      pendingExpenses,
      today: normalizedToday,
      targetDate: day,
    });

  const openExpenseDetails = (expense) => {
    if (expense.isPast || !expense.templateId) return;
    setSelectedExpense(expense);
  };

  const gridDays = getDaysInGrid();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <CalendarIcon className="h-8 w-8 text-foreground" />
            Calendario de liquidez
          </h1>
          <p className="text-muted-foreground">
            Revisa pagos registrados y gastos programados en un calendario de Sunday a Saturday.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-card p-1 rounded-lg border border-border shadow-sm">
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="w-36 text-center font-semibold text-foreground">{format(currentDate, "MMMM yyyy")}</div>
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-border mx-1" />
          <Button variant="ghost" className="text-sm font-medium" onClick={() => setCurrentDate(normalizedToday)}>
            Hoy
          </Button>
          <div className="w-px h-6 bg-border mx-1" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/40"
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-border overflow-hidden bg-card">
        <CardHeader className="bg-muted/40 border-b border-border p-0">
          <div className="grid grid-cols-7 divide-x divide-border">
            {weekDaysHeaders.map((day) => (
              <div key={day} className="py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-l border-border">
            {gridDays.map((day) => {
              const isCurrentMonth = isSameMonth(day, currentDate);
              const isToday = isSameDay(day, normalizedToday);
              const dayEvents = getEventsForDay(day);
              const dailyTotal = dayEvents.reduce((acc, curr) => acc + curr.amount, 0);

              return (
                <div
                  key={day.toISOString()}
                  className={`
                    min-h-[120px] md:min-h-[140px] border-r border-b border-border p-1 md:p-2 flex flex-col justify-between transition-colors hover:bg-muted/50
                    ${!isCurrentMonth ? "bg-muted/30" : "bg-card"}
                  `}
                >
                  <div className="flex justify-end">
                    <div
                      className={`
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                        ${isToday ? "bg-blue-600 text-white shadow-md" : !isCurrentMonth ? "text-muted-foreground" : "text-foreground"}
                      `}
                    >
                      {format(day, "d")}
                    </div>
                  </div>

                  <div className="flex-1 mt-1 space-y-1 overflow-hidden">
                    {dayEvents.slice(0, 2).map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        disabled={event.isPast || !event.templateId}
                        onClick={() => openExpenseDetails(event)}
                        className={`
                          w-full text-left text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate font-medium border
                          ${
                            event.isPast
                              ? "bg-slate-100 text-slate-600 border-slate-200 dark:bg-muted dark:text-muted-foreground dark:border-border"
                              : "bg-red-50 text-red-700 border-red-100 dark:bg-red-950/40 dark:text-red-200 dark:border-red-900/50"
                          }
                          ${event.isPast || !event.templateId ? "cursor-default" : "hover:bg-red-100 dark:hover:bg-red-950/60"}
                        `}
                      >
                        {event.name} <span className="opacity-75 font-normal">${event.amount}</span>
                      </button>
                    ))}

                    {dayEvents.length > 2 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDay({
                            date: day,
                            events: dayEvents,
                          })
                        }
                        className="text-[10px] text-blue-600 font-medium pl-1 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        + {dayEvents.length - 2} más
                      </button>
                    )}
                  </div>

                  {dailyTotal > 0 && (
                    <div className="mt-2 border-t border-border pt-1">
                      <p
                        className={`text-[10px] md:text-xs font-bold text-right ${
                          isToday ? "text-blue-700 dark:text-blue-400" : "text-foreground"
                        }`}
                      >
                        Total: ${dailyTotal.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {!isExpanded && (
        <UpcomingCard upcomingPayments={upcomingPayments} totalUpcomingExpenses={totalUpcomingExpenses} />
      )}

      <Dialog
        open={!!selectedExpense}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedExpense(null);
          }
        }}
      >
        <AppDialogContent>
          <DialogHeader>
            <DialogTitle>{selectedExpense?.name}</DialogTitle>
            <DialogDescription>Registra este pago o muévelo a la siguiente semana sin marcarlo como pagado.</DialogDescription>
          </DialogHeader>

          {selectedExpense && (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Fecha programada:{" "}
                <span className="font-medium text-foreground">{format(new Date(selectedExpense.occurrenceDate), "EEE dd MMM")}</span>
              </p>
              <p>
                Monto:{" "}
                <span className="font-medium text-foreground">
                  ${selectedExpense.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          )}

          <DialogFooter className="flex flex-col items-center gap-4 sm:flex-col">
            {selectedExpense?.kind !== "credit-card" && (
              <Button variant="secondary" className="flex-1 h-auto py-2 text-sm sm:text-sm whitespace-normal text-center" onClick={handleMoveToNextWeek}>
                Mover a la siguiente semana
              </Button>
            )}
            <Button className="w-[68%] sm:w-auto px-8 py-6 text-base sm:text-lg font-bold shadow-md hover:scale-105 transition-transform" onClick={handleMarkAsPaid}>
              Marcar como pagado
            </Button>
          </DialogFooter>
        </AppDialogContent>
      </Dialog>

      <Dialog
        open={!!expandedDay}
        onOpenChange={(open) => {
          if (!open) {
            setExpandedDay(null);
          }
        }}
      >
        <AppDialogContent size="wide">
          <DialogHeader>
            <DialogTitle>{expandedDay ? format(new Date(expandedDay.date), "EEEE dd MMM") : "Detalle del día"}</DialogTitle>
            <DialogDescription>Revisa todas las entradas de este día y abre cualquier pendiente desde aquí.</DialogDescription>
          </DialogHeader>

          <div className="max-h-[320px] space-y-2 overflow-y-auto pr-1">
            {expandedDay?.events.map((event) => (
              <button
                key={event.id}
                type="button"
                disabled={event.isPast || !event.templateId}
                onClick={() => {
                  setExpandedDay(null);
                  openExpenseDetails(event);
                }}
                className={`w-full rounded-lg border px-3 py-2 text-left ${
                  event.isPast || !event.templateId
                    ? "cursor-default border-border bg-muted text-muted-foreground"
                    : "border-red-100 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-950/60"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{event.name}</span>
                  <span className="text-sm font-semibold">${event.amount}</span>
                </div>
              </button>
            ))}
          </div>
        </AppDialogContent>
      </Dialog>
    </div>
  );
}
