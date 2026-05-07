"use client";

import * as React from "react";
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
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AppDialogContent, Dialog, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import PaymentActionDialog from "@/components/payments/PaymentActionDialog";
import { formatCalendarDateLabel, getCalendarDateKey, normalizeCalendarDate } from "@/lib/calendarDate";
import {
  getCalendarEventsForDay,
  type CalendarEvent,
  type CreditCardHistoryRecordLike,
  type HistoryRecordLike,
  type PaymentCarryoverLike,
  type PendingExpenseLike,
  type ScheduledPayment,
} from "@/lib/financeEngine";
import type { UpcomingPayment } from "@/lib/waterfallCalculations";
import { usePaymentActionDialog } from "@/lib/usePaymentActionDialog";

const CALENDAR_WEEK_STARTS_ON = 0;
const weekDaysHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

type ExpandedDay = {
  date: Date;
  events: CalendarEvent[];
};

type CalendarClientProps = {
  scheduledPayments: ScheduledPayment[];
  historyRecords: HistoryRecordLike[];
  creditCardHistoryRecords: CreditCardHistoryRecordLike[];
  carryovers: PaymentCarryoverLike[];
  pendingExpenses: PendingExpenseLike[];
  upcomingPayments: UpcomingPayment[];
  totalUpcomingExpenses: number;
  today: Date | string;
};

export default function CalendarClient({
  scheduledPayments,
  historyRecords,
  creditCardHistoryRecords,
  carryovers,
  pendingExpenses,
  upcomingPayments,
  totalUpcomingExpenses,
  today,
}: CalendarClientProps) {
  const normalizedToday = startOfDay(normalizeCalendarDate(today) ?? new Date(today));
  const [currentDate, setCurrentDate] = React.useState(normalizedToday);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [expandedDay, setExpandedDay] = React.useState<ExpandedDay | null>(null);
  const {
    isPaymentDialogOpen,
    isSubmittingPaymentAction,
    selectedPaymentItem,
    openPaymentDialog,
    closePaymentDialog,
    submitPaymentAction,
  } = usePaymentActionDialog();

  const getCalendarGridStart = (date: Date) =>
    startOfWeek(startOfDay(date), { weekStartsOn: CALENDAR_WEEK_STARTS_ON });
  const getCalendarGridEnd = (date: Date) =>
    endOfWeek(startOfDay(date), { weekStartsOn: CALENDAR_WEEK_STARTS_ON });

  const getDaysInGrid = (): Date[] => {
    const startDate = isExpanded
      ? getCalendarGridStart(startOfMonth(currentDate))
      : getCalendarGridStart(currentDate);
    const endDate = isExpanded
      ? getCalendarGridEnd(endOfMonth(currentDate))
      : addDays(startDate, 20);

    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const getEventsForDay = (day: Date) =>
    getCalendarEventsForDay({
      scheduledPayments,
      historyRecords,
      creditCardHistoryRecords,
      carryovers,
      pendingExpenses,
      today: normalizedToday,
      targetDate: day,
    });

  const openExpenseDetails = (expense: CalendarEvent) => {
    if (expense.isPast) return;
    if (expense.type !== "scheduled" && expense.type !== "carryover") return;
    openPaymentDialog(expense);
  };

  const gridDays = getDaysInGrid();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
            <CalendarIcon className="h-8 w-8 text-foreground" />
            Calendario de liquidez
          </h1>
          <p className="text-muted-foreground">
            Revisa pagos registrados y gastos programados en un calendario de Sunday a Saturday.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-1 shadow-sm">
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="w-36 text-center font-semibold text-foreground">{format(currentDate, "MMMM yyyy")}</div>
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="mx-1 h-6 w-px bg-border" />
          <Button variant="ghost" className="text-sm font-medium" onClick={() => setCurrentDate(normalizedToday)}>
            Hoy
          </Button>
          <div className="mx-1 h-6 w-px bg-border" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/40"
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-border bg-card shadow-lg">
        <CardHeader className="border-b border-border bg-muted/40 p-0">
          <div className="grid grid-cols-7 divide-x divide-border">
            {weekDaysHeaders.map((day) => (
              <div key={day} className="py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
                  key={getCalendarDateKey(day)}
                  className={`
                    min-h-[120px] border-r border-b border-border p-1 transition-colors hover:bg-muted/50 md:min-h-[140px] md:p-2
                    flex flex-col justify-between
                    ${!isCurrentMonth ? "bg-muted/30" : "bg-card"}
                  `}
                >
                  <div className="flex justify-end">
                    <div
                      className={`
                        flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium
                        ${isToday ? "bg-blue-600 text-white shadow-md" : !isCurrentMonth ? "text-muted-foreground" : "text-foreground"}
                      `}
                    >
                      {format(day, "d")}
                    </div>
                  </div>

                  <div className="mt-1 flex-1 space-y-1 overflow-hidden">
                    {dayEvents.slice(0, 2).map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        disabled={event.isPast || (event.type !== "scheduled" && event.type !== "carryover")}
                        onClick={() => openExpenseDetails(event)}
                        className={`
                          w-full rounded border px-1.5 py-0.5 text-left text-[10px] font-medium truncate md:text-xs
                          ${
                            event.isPast
                              ? "border-slate-200 bg-slate-100 text-slate-600 dark:border-border dark:bg-muted dark:text-muted-foreground"
                              : "border-red-100 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200"
                          }
                          ${
                            event.isPast || (event.type !== "scheduled" && event.type !== "carryover")
                              ? "cursor-default"
                              : "hover:bg-red-100 dark:hover:bg-red-950/60"
                          }
                        `}
                      >
                        {event.name} <span className="font-normal opacity-75">{formatCurrency(event.amount)}</span>
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
                        className="pl-1 text-[10px] font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        + {dayEvents.length - 2} mas
                      </button>
                    )}
                  </div>

                  {dailyTotal > 0 && (
                    <div className="mt-2 border-t border-border pt-1">
                      <p
                        className={`text-right text-[10px] font-bold md:text-xs ${
                          isToday ? "text-blue-700 dark:text-blue-400" : "text-foreground"
                        }`}
                      >
                        Total: {formatCurrency(dailyTotal)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {!isExpanded && <UpcomingCard upcomingPayments={upcomingPayments} totalUpcomingExpenses={totalUpcomingExpenses} />}

      <PaymentActionDialog
        key={selectedPaymentItem ? `${selectedPaymentItem.templateId}-${selectedPaymentItem.carryoverId ?? "base"}-${selectedPaymentItem.occurrenceDate}` : "calendar-payment-dialog"}
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
            <DialogTitle>
              {expandedDay
                ? formatCalendarDateLabel(expandedDay.date, { weekday: "long", day: "2-digit", month: "short" })
                : "Detalle del dia"}
            </DialogTitle>
            <DialogDescription>Revisa todas las entradas de este dia y abre cualquier pendiente desde aqui.</DialogDescription>
          </DialogHeader>

          <div className="max-h-[320px] space-y-2 overflow-y-auto pr-1">
            {expandedDay?.events.map((event) => (
              <button
                key={event.id}
                type="button"
                disabled={event.isPast || (event.type !== "scheduled" && event.type !== "carryover")}
                onClick={() => {
                  setExpandedDay(null);
                  openExpenseDetails(event);
                }}
                className={`w-full rounded-lg border px-3 py-2 text-left ${
                  event.isPast || (event.type !== "scheduled" && event.type !== "carryover")
                    ? "cursor-default border-border bg-muted text-muted-foreground"
                    : "border-red-100 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-950/60"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{event.name}</span>
                  <span className="text-sm font-semibold">{formatCurrency(event.amount)}</span>
                </div>
              </button>
            ))}
          </div>
        </AppDialogContent>
      </Dialog>
    </div>
  );
}
