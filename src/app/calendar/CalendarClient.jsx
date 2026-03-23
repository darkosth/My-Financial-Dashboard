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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UpcomingCard from "@/components/dashboard/UpcomingCard";
import { getTemplateCycleReference, getTemplateOccurrenceInInterval, isTemplatePaidForOccurrence } from "@/lib/waterfallCalculations";
import { markCreditCardAsPaid } from "@/lib/actions/creditCardActions";
import { markWaterfallItemAsPaid, moveWaterfallItemToNextWeek } from "@/lib/actions/templateActions";

const CALENDAR_WEEK_STARTS_ON = 0;
const weekDaysHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarClient({
  templates,
  historyRecords,
  creditCardHistoryRecords,
  pendingExpenses,
  upcomingPayments,
  totalUpcomingExpenses,
}) {
  const router = useRouter();
  const today = startOfDay(new Date());
  const [currentDate, setCurrentDate] = useState(today);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);

  const handleMarkAsPaid = async () => {
    if (!selectedExpense) return;

    const result =
      selectedExpense.kind === "credit-card"
        ? await markCreditCardAsPaid(selectedExpense.templateId.replace("credit-card:", ""), selectedExpense.occurrenceDate)
        : await markWaterfallItemAsPaid(selectedExpense.templateId, selectedExpense.occurrenceDate);

    if (result.success) {
      setSelectedExpense(null);
      router.refresh();
      return;
    }

    alert("No se pudo registrar el pago.");
  };

  const handleMoveToNextWeek = async () => {
    if (!selectedExpense || selectedExpense.kind === "credit-card") return;

    const result = await moveWaterfallItemToNextWeek(selectedExpense.templateId, selectedExpense.occurrenceDate);

    if (result.success) {
      setSelectedExpense(null);
      router.refresh();
      return;
    }

    alert("No se pudo mover el gasto.");
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

  const getExpensesForDay = (targetDate) => {
    const expenses = [];

    historyRecords.forEach((record) => {
      if (isSameDay(new Date(record.datePaid), targetDate)) {
        const template = templates.find((item) => item.id === record.templateId);
        expenses.push({
          id: `history-${record.id}`,
          name: template?.name || "Recorded payment",
          amount: record.amountPaid,
          isPast: true,
        });
      }
    });

    creditCardHistoryRecords.forEach((record) => {
      if (isSameDay(new Date(record.datePaid), targetDate)) {
        const template = templates.find((item) => item.id === `credit-card:${record.creditCardId}`);
        expenses.push({
          id: `credit-card-history-${record.id}`,
          name: template?.name || "Card payment",
          amount: record.amountPaid,
          isPast: true,
        });
      }
    });

    pendingExpenses.forEach((expense) => {
      if (isSameDay(new Date(expense.createdAt), targetDate)) {
        expenses.push({
          id: `pending-${expense.id}`,
          name: expense.description || "One-time expense",
          amount: expense.amount,
          isPast: true,
        });
      }
    });

    templates.forEach((template) => {
      const occurrenceDate = getTemplateOccurrenceInInterval(template, { start: targetDate, end: targetDate });

      if (!occurrenceDate || occurrenceDate < today) {
        return;
      }

      if (isTemplatePaidForOccurrence(template, occurrenceDate, historyRecords, creditCardHistoryRecords)) {
        return;
      }

      expenses.push({
        id: `${template.id}-${occurrenceDate.toISOString()}`,
        templateId: template.id,
        kind: template.kind ?? "template",
        name: template.name,
        amount: template.amount,
        occurrenceDate,
        cycleReference: getTemplateCycleReference(template, occurrenceDate),
        isPast: false,
      });
    });

    return expenses.sort((a, b) => a.amount - b.amount);
  };

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
            <CalendarIcon className="h-8 w-8 text-slate-700" />
            Liquidity Calendar
          </h1>
          <p className="text-muted-foreground">See actual payments and upcoming scheduled items on a Sunday to Saturday calendar.</p>
        </div>

        <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="w-36 text-center font-semibold text-slate-700">
            {format(currentDate, "MMMM yyyy")}
          </div>
          <Button variant="ghost" size="icon" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <Button variant="ghost" className="text-sm font-medium" onClick={() => setCurrentDate(today)}>
            Today
          </Button>
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-slate-200 overflow-hidden bg-white">
        <CardHeader className="bg-slate-50 border-b p-0">
          <div className="grid grid-cols-7 divide-x divide-slate-200">
            {weekDaysHeaders.map((day) => (
              <div key={day} className="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-l border-slate-200">
            {gridDays.map((day) => {
              const isCurrentMonth = isSameMonth(day, currentDate);
              const isToday = isSameDay(day, today);
              const dayExpenses = getExpensesForDay(day);
              const dailyTotal = dayExpenses.reduce((acc, curr) => acc + curr.amount, 0);

              return (
                <div
                  key={day.toISOString()}
                  className={`
                    min-h-[120px] md:min-h-[140px] border-r border-b border-slate-200 p-1 md:p-2 flex flex-col justify-between transition-colors hover:bg-slate-50
                    ${!isCurrentMonth ? "bg-slate-50/50" : "bg-white"}
                  `}
                >
                  <div className="flex justify-end">
                    <div
                      className={`
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                        ${isToday ? "bg-blue-600 text-white shadow-md" : !isCurrentMonth ? "text-slate-400" : "text-slate-700"}
                      `}
                    >
                      {format(day, "d")}
                    </div>
                  </div>

                  <div className="flex-1 mt-1 space-y-1 overflow-hidden">
                    {dayExpenses.slice(0, 2).map((expense) => (
                      <button
                        key={expense.id}
                        type="button"
                        disabled={expense.isPast || !expense.templateId}
                        onClick={() => openExpenseDetails(expense)}
                        className={`
                          w-full text-left
                          text-[10px] md:text-xs px-1.5 py-0.5 rounded truncate font-medium border
                          ${expense.isPast ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-red-50 text-red-700 border-red-100"}
                          ${expense.isPast || !expense.templateId ? "cursor-default" : "hover:bg-red-100"}
                        `}
                      >
                        {expense.name} <span className="opacity-75 font-normal">${expense.amount}</span>
                      </button>
                    ))}

                    {dayExpenses.length > 2 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDay({
                            date: day,
                            expenses: dayExpenses,
                          })
                        }
                        className="text-[10px] text-blue-600 font-medium pl-1 hover:text-blue-700"
                      >
                        + {dayExpenses.length - 2} more
                      </button>
                    )}
                  </div>

                  {dailyTotal > 0 && (
                    <div className="mt-2 border-t border-slate-100 pt-1">
                      <p className={`text-[10px] md:text-xs font-bold text-right ${isToday ? "text-blue-700" : "text-slate-700"}`}>
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedExpense?.name}</DialogTitle>
            <DialogDescription>
              Record this payment or move it to next week without marking it as paid.
            </DialogDescription>
          </DialogHeader>

          {selectedExpense && (
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                Scheduled date:{" "}
                <span className="font-medium text-slate-900">{format(new Date(selectedExpense.occurrenceDate), "EEE dd MMM")}</span>
              </p>
              <p>
                Amount:{" "}
                <span className="font-medium text-slate-900">
                  ${selectedExpense.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          )}

          <DialogFooter className="flex-col gap-2 sm:flex-col sm:items-stretch">
            {selectedExpense?.kind !== "credit-card" && (
              <Button variant="secondary" className="w-full" onClick={handleMoveToNextWeek}>
                Move to next week
              </Button>
            )}
            <Button className="w-full" onClick={handleMarkAsPaid}>
              Mark as paid
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!expandedDay}
        onOpenChange={(open) => {
          if (!open) {
            setExpandedDay(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>
              {expandedDay ? format(new Date(expandedDay.date), "EEEE dd MMM") : "Day details"}
            </DialogTitle>
            <DialogDescription>Review every entry for this day and open any pending item from here.</DialogDescription>
          </DialogHeader>

          <div className="max-h-[320px] space-y-2 overflow-y-auto pr-1">
            {expandedDay?.expenses.map((expense) => (
              <button
                key={expense.id}
                type="button"
                disabled={expense.isPast || !expense.templateId}
                onClick={() => {
                  setExpandedDay(null);
                  openExpenseDetails(expense);
                }}
                className={`w-full rounded-lg border px-3 py-2 text-left ${
                  expense.isPast || !expense.templateId
                    ? "cursor-default border-slate-200 bg-slate-50 text-slate-600"
                    : "border-red-100 bg-red-50 text-red-700 hover:bg-red-100"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{expense.name}</span>
                  <span className="text-sm font-semibold">${expense.amount}</span>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
