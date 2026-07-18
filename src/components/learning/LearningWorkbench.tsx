"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrainCircuit, Check, ChevronLeft, ChevronRight, RefreshCw, X } from "lucide-react";
import { reviewLearningTransactionAction, syncLearningTransactionsAction } from "@/lib/actions/learningActions";
import { formatCalendarDateLabel } from "@/lib/calendarDate";
import type { LearningPageData } from "@/lib/learningData";
import { Button } from "@/components/ui/button";

const formatMoney = (amountCents: number, currencyCode: string | null = "USD") =>
  new Intl.NumberFormat("en-US", {
    currency: currencyCode || "USD",
    style: "currency",
  }).format(amountCents / 100);

const getExpenseLabel = (candidate: LearningPageData["expenses"][number]) =>
  `${candidate.kind === "credit-card" ? "Tarjeta · Pago mínimo · " : ""}${candidate.name} · ${formatMoney(candidate.amountCents)}`;

const buildSelectionValue = (templateId: string, cycleReference: string) => `${templateId}::${cycleReference}`;

const parseSelectionValue = (value: string) => {
  const separatorIndex = value.lastIndexOf("::");
  if (separatorIndex < 0) return null;
  return {
    cycleReference: value.slice(separatorIndex + 2),
    templateId: value.slice(0, separatorIndex),
  };
};

const getReviewLabel = (outcome: string) => {
  if (outcome === "CONFIRMED_SUGGESTION") return "Sugerencia confirmada";
  if (outcome === "MANUAL_SELECTION") return "Selección manual";
  return "Ignorada";
};

const reasonLabels: Record<string, string> = {
  AMOUNT: "importe",
  CATEGORY: "categoría",
  DATE: "fecha",
  LEARNED_ACCOUNT: "cuenta aprendida",
  LEARNED_MERCHANT: "comercio aprendido",
  NAME: "nombre",
};

export default function LearningWorkbench({ data }: { data: LearningPageData }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeTransactionId, setActiveTransactionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const getSelection = (transaction: LearningPageData["transactions"][number]) => {
    if (selections[transaction.transactionId] !== undefined) return selections[transaction.transactionId];
    const templateId = transaction.review ? transaction.review.selectedTemplateId : transaction.suggestion?.templateId;
    const cycleReference = transaction.review ? transaction.review.selectedCycleReference : transaction.suggestion?.cycleReference;
    return templateId && cycleReference ? buildSelectionValue(templateId, cycleReference) : "";
  };

  const sync = () => {
    setError(null);
    setNotice(null);
    setActiveTransactionId("sync");
    startTransition(async () => {
      const result = await syncLearningTransactionsAction();
      setActiveTransactionId(null);
      if (!result.success) {
        setError(result.error);
        return;
      }
      const syncResult = result.data;
      if (!syncResult) {
        setError("La sincronización no devolvió resultados.");
        return;
      }
      if (syncResult.failures.length > 0) {
        const changed = syncResult.total.added + syncResult.total.modified + syncResult.total.removed;
        const reconnectCount = syncResult.failures.filter((failure) => failure.requiresReconnect).length;
        const skippedCount = syncResult.failures.length - reconnectCount;
        const parts = [
          changed > 0 ? `${changed} cambios guardados` : null,
          reconnectCount > 0
            ? `${reconnectCount} ${reconnectCount === 1 ? "conexión bancaria requiere" : "conexiones bancarias requieren"} reconexión`
            : null,
          skippedCount > 0
            ? `${skippedCount} ${skippedCount === 1 ? "conexión no pudo" : "conexiones no pudieron"} sincronizarse`
            : null,
        ].filter(Boolean);
        setNotice(`Sincronización parcial: ${parts.join("; ")}.`);
      }
      router.refresh();
    });
  };

  const review = (transaction: LearningPageData["transactions"][number], ignore = false) => {
    const selected = ignore ? null : parseSelectionValue(getSelection(transaction));
    if (!ignore && !selected) {
      setError("Selecciona un pago agendado para confirmar.");
      return;
    }

    setError(null);
    setNotice(null);
    setActiveTransactionId(transaction.transactionId);
    startTransition(async () => {
      const result = await reviewLearningTransactionAction({
        plaidItemId: transaction.plaidItemId,
        selectedCycleReference: selected?.cycleReference ?? null,
        selectedTemplateId: selected?.templateId ?? null,
        transactionId: transaction.transactionId,
      });
      setActiveTransactionId(null);
      if (!result.success) {
        setError(result.error);
        return;
      }
      router.refresh();
    });
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="border-b border-border pb-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
              <BrainCircuit className="size-4" />
              Learning
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Conciliación semanal</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {formatCalendarDateLabel(data.weekStart, { day: "numeric", month: "short" })} – {formatCalendarDateLabel(data.weekEnd, { day: "numeric", month: "short", year: "numeric" })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="icon" className="size-10" asChild>
              <Link href={`/learning?week=${data.previousWeek}`} aria-label="Semana anterior">
                <ChevronLeft className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="size-10" asChild>
              <Link href={`/learning?week=${data.nextWeek}`} aria-label="Semana siguiente">
                <ChevronRight className="size-4" />
              </Link>
            </Button>
            <Button onClick={sync} disabled={isPending} className="h-10 gap-2">
              <RefreshCw className={`size-4 ${activeTransactionId === "sync" ? "animate-spin" : ""}`} />
              Sincronizar
            </Button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span><strong className="text-foreground">{data.transactions.length}</strong> transacciones</span>
          <span><strong className="text-foreground">{data.liquidityAccountCount}</strong> cuentas de liquidez</span>
          <span><strong className="text-foreground">{data.expenses.length}</strong> pagos agendados</span>
          <span><strong className="text-foreground">{data.reviewedCount}</strong> revisadas</span>
          <span className="text-muted-foreground">
            {data.lastSyncedAt ? `Actualizado ${new Intl.DateTimeFormat("es-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(data.lastSyncedAt))}` : "Sin sincronización"}
          </span>
        </div>
      </header>

      {error ? (
        <div role="alert" className="fixed bottom-4 left-1/2 z-50 flex w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 items-center justify-between gap-3 border border-red-300 border-l-4 border-l-red-500 bg-red-50 px-4 py-3 text-sm text-red-800 shadow-lg dark:border-red-900 dark:border-l-red-500 dark:bg-red-950 dark:text-red-200">
          <span>{error}</span>
          <button type="button" onClick={() => setError(null)} aria-label="Cerrar error">
            <X className="size-4" />
          </button>
        </div>
      ) : null}

      {notice ? (
        <div role="status" className="fixed bottom-4 left-1/2 z-50 flex w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 items-center justify-between gap-3 border border-amber-300 border-l-4 border-l-amber-500 bg-amber-50 px-4 py-3 text-sm text-amber-900 shadow-lg dark:border-amber-900 dark:border-l-amber-500 dark:bg-amber-950 dark:text-amber-100">
          <span>{notice}</span>
          <button type="button" onClick={() => setNotice(null)} aria-label="Cerrar aviso">
            <X className="size-4" />
          </button>
        </div>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.7fr)]">
        <section aria-labelledby="transactions-heading">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="transactions-heading" className="text-lg font-semibold">Transacciones</h2>
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Modo sombra</span>
          </div>

          {data.transactions.length === 0 ? (
            <div className="border-y border-dashed border-border py-16 text-center text-sm text-muted-foreground">
              No hay transacciones para esta semana.
            </div>
          ) : (
            <div className="border-t border-border">
              {data.transactions.map((transaction) => {
                const selectedValue = getSelection(transaction);
                const reviewed = !!transaction.review;
                const rowPending = isPending && activeTransactionId === transaction.transactionId;

                return (
                  <article key={`${transaction.plaidItemId}:${transaction.transactionId}`} aria-busy={rowPending} className="border-b border-border py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="truncate font-semibold">{transaction.merchantName || transaction.name}</h3>
                          {transaction.pending ? (
                            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-950/60 dark:text-amber-200">Pendiente · revisión provisional</span>
                          ) : null}
                          {transaction.review ? (
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
                              {getReviewLabel(transaction.review.outcome)}
                            </span>
                          ) : transaction.suggestion ? (
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                              Sugerido · score {transaction.suggestion.score} · {transaction.suggestion.reasons.map((reason) => reasonLabels[reason.code] ?? reason.code.toLowerCase()).join(", ")}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {formatCalendarDateLabel(transaction.authorizedDate ?? transaction.date, { day: "numeric", month: "short" })} · {transaction.institutionName} · {transaction.accountName}
                        </p>
                      </div>
                      <div className="shrink-0 text-right text-lg font-semibold tabular-nums">
                        {formatMoney(transaction.amountCents, transaction.isoCurrencyCode)}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <label className="min-w-0 flex-1">
                        <span className="sr-only">Pago agendado correspondiente</span>
                        <select
                          value={selectedValue}
                          onChange={(event) => setSelections((current) => ({ ...current, [transaction.transactionId]: event.target.value }))}
                          disabled={isPending}
                          className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <option value="">Seleccionar pago…</option>
                          {data.expenses.map((candidate) => (
                            <option key={`${candidate.templateId}:${candidate.cycleReference}`} value={buildSelectionValue(candidate.templateId, candidate.cycleReference)}>
                              {getExpenseLabel(candidate)}
                            </option>
                          ))}
                        </select>
                      </label>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => review(transaction)}
                          disabled={isPending || !selectedValue}
                          className="h-10 flex-1 gap-2 sm:flex-none"
                        >
                          {rowPending ? <RefreshCw className="size-4 animate-spin" /> : <Check className="size-4" />}
                          {rowPending ? "Guardando…" : reviewed ? "Actualizar" : "Confirmar"}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => review(transaction, true)}
                          disabled={isPending}
                          className="h-10 flex-1 sm:flex-none"
                        >
                          Ignorar
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <aside aria-labelledby="expenses-heading" className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="expenses-heading" className="mb-3 text-lg font-semibold">Pagos de la semana</h2>
          <div className="border-y border-border">
            {data.expenses.length === 0 ? (
              <p className="py-10 text-sm text-muted-foreground">No hay pagos agendados.</p>
            ) : data.expenses.map((expense) => (
              <div key={`${expense.templateId}:${expense.cycleReference}`} className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium" title={expense.kind === "credit-card" ? `Tarjeta · Pago mínimo · ${expense.name}` : expense.name}>
                    {expense.kind === "credit-card" ? "Tarjeta · Mínimo · " : ""}{expense.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatCalendarDateLabel(expense.occurrenceDate, { day: "numeric", month: "short" })}
                  </div>
                </div>
                <div className="shrink-0 text-sm font-semibold tabular-nums">{formatMoney(expense.amountCents)}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
