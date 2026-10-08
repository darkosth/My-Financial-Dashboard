"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AppDialogContent, Dialog, DialogTitle } from "@/components/ui/dialog";
import type { FinanceWorkspaceData } from "@/lib/finance/uiTypes";
import { money, weekLabel, weekStart } from "@/lib/finance/analytics";
import { setOccurrenceClosureAction } from "@/lib/actions/financeActions";
import {
  CashAdjustment,
  CategoryManager,
  fieldClass,
  ManualPaymentForm,
  type RunAction,
} from "./FinanceForms";
import MovementEditor from "./MovementEditor";
import FinanceCharts from "./FinanceCharts";
const sourceNames = {
  BANK: "Banco",
  CASH: "Efectivo",
  CREDIT: "Tarjeta de crédito",
  DEBIT: "Tarjeta de débito",
  ADJUSTMENT: "Ajuste",
};
const kindNames = {
  EXPENSE: "Gasto",
  INCOME: "Ingreso",
  TRANSFER: "Transferencia",
  ADJUSTMENT: "Ajuste",
  CARD_PAYMENT: "Pago de tarjeta",
  REFUND: "Devolución",
};
const eventNames: Record<string, string> = {
  RECONCILED: "Pago confirmado",
  RECONCILIATION_UNDONE: "Conciliación deshecha",
  MANUAL_PAYMENT_CREATED: "Pago manual registrado",
  CASH_ADJUSTED: "Efectivo ajustado",
  CLOSURE_CHANGED: "Cierre actualizado",
  CLASSIFIED: "Clasificación guardada",
  CASH_TRANSFER: "Retiro hacia Efectivo",
  TRANSFER_PAIRED: "Transferencia vinculada",
  MANUAL_PAYMENT_REVERSED: "Movimiento anulado",
  CATEGORY_CREATED: "Categoría creada",
  CATEGORY_UPDATED: "Categoría actualizada",
  EXISTING_PAYMENT_LINKED: "Pago existente vinculado",
  TRANSFER_REVERSED: "Transferencia deshecha",
  BANK_CHANGE_RESOLVED: "Cambio bancario revisado",
};
export default function MovementsClient({
  data,
  initialManual = false,
  initialTarget = "",
  initialCycle = "",
  initialDate = "",
  initialAmount = "",
  initialSource = "",
}: {
  data: FinanceWorkspaceData;
  initialManual?: boolean;
  initialTarget?: string;
  initialCycle?: string;
  initialDate?: string;
  initialAmount?: string;
  initialSource?: string;
}) {
  const router = useRouter();
  const [busy, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [modal, setModal] = useState<"manual" | "cash" | "categories" | null>(
    initialManual ? "manual" : null,
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const today = new Date().toLocaleDateString("en-CA");
  const [from, setFrom] = useState(`${today.slice(0, 7)}-01`);
  const [to, setTo] = useState(today);
  const [currency, setCurrency] = useState("USD");
  const [source, setSource] = useState(initialSource);
  const [status, setStatus] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<"movements" | "obligations" | "history">(
    "movements",
  );
  const run: RunAction = (action, done) => {
    if (busy) return;
    setError("");
    setSuccess("");
    startTransition(async () => {
      try {
        const result = await action();
        if (!result.success) {
          setError(result.error);
          return;
        }
        setSuccess("Guardado");
        done?.();
        router.refresh();
      } catch {
        setError("No se pudo guardar. Inténtalo de nuevo.");
      }
    });
  };
  const validRange =
    /^\d{4}-\d{2}-\d{2}$/.test(from) &&
    /^\d{4}-\d{2}-\d{2}$/.test(to) &&
    from <= to;
  const currencies = [
    ...new Set([
      "USD",
      ...data.movements.map((m) => m.currency),
      ...data.occurrences.map((o) => o.currency ?? "USD"),
    ]),
  ];
  const movements = data.movements.filter(
    (m) =>
      validRange &&
      (!categoryFilter ||
        (categoryFilter === "unclassified"
          ? !m.categoryId
          : m.categoryId === categoryFilter)) &&
      m.date.slice(0, 10) >= from &&
      m.date.slice(0, 10) <= to &&
      m.currency === currency &&
      (!source || m.source === source) &&
      (!status ||
        (status === "review"
          ? m.needsReview
          : status === "reconciled"
            ? !!m.reconciliation
            : m.status === status)) &&
      `${m.name} ${m.accountName}`
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(movements.length / 30));
  const currentPage = Math.min(page, totalPages);
  const visibleMovements = movements.slice(
    (currentPage - 1) * 30,
    currentPage * 30,
  );
  const movement = data.movements.find((m) => m.id === selected);
  const feedback = (
    <>
      {error && (
        <p
          role="alert"
          className="rounded-md border border-destructive p-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="text-sm text-muted-foreground">
          {success}
        </p>
      )}
    </>
  );
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Movimientos</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Efectivo{" "}
            <span className="ml-2 font-semibold tabular-nums text-foreground">
              {money(data.cash.balanceCents)}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setError("");
              setModal("manual");
            }}
          >
            Registrar pago
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setError("");
              setModal("cash");
            }}
          >
            Ajustar Efectivo
          </Button>
          <Button variant="ghost" onClick={() => setModal("categories")}>
            Categorías
          </Button>
          <Button variant="ghost" asChild>
            <a href="#graficas">Gráficas</a>
          </Button>
        </div>
      </header>
      {!modal && !selected && feedback}
      <section
        aria-label="Período y moneda"
        className="flex flex-wrap gap-4 border-y py-4"
      >
        <label className="space-y-1 text-sm">
          <span>Desde</span>
          <input
            className={fieldClass}
            type="date"
            value={from}
            max={to}
            onChange={(e) => {
              setFrom(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label className="space-y-1 text-sm">
          <span>Hasta</span>
          <input
            className={fieldClass}
            type="date"
            value={to}
            min={from}
            onChange={(e) => {
              setTo(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label className="space-y-1 text-sm">
          <span>Moneda</span>
          <select
            className={fieldClass}
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              setPage(1);
            }}
          >
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </section>
      {!validRange && (
        <p role="alert" className="text-sm text-destructive">
          Selecciona un período válido: Desde debe ser anterior o igual a Hasta.
        </p>
      )}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2" aria-label="Vista">
          {(
            [
              ["movements", "Movimientos"],
              ["obligations", "Gastos por semana"],
              ["history", "Historial"],
            ] as const
          ).map(([value, label]) => (
            <Button
              key={value}
              variant={tab === value ? "default" : "outline"}
              onClick={() => setTab(value)}
              aria-pressed={tab === value}
            >
              {label}
            </Button>
          ))}
        </div>
        {tab === "movements" && (
          <>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <input
                aria-label="Buscar movimiento"
                className={fieldClass}
                placeholder="Buscar movimiento o cuenta"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <select
                aria-label="Medio de pago"
                className={fieldClass}
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">Todos los medios</option>
                {Object.entries(sourceNames).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <select
                aria-label="Estado"
                className={fieldClass}
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">Todos los estados</option>
                <option value="POSTED">Contabilizados</option>
                <option value="PENDING">Provisionales</option>
                <option value="review">Por revisar</option>
                <option value="reconciled">Conciliados</option>
                <option value="REMOVED">Eliminados por el banco</option>
              </select>
              <select
                aria-label="Filtrar categoría"
                className={fieldClass}
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">Todas las categorías</option>
                <option value="unclassified">Sin clasificar</option>
                {data.categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            {movements.length ? (
              <ul className="divide-y rounded-lg border">
                {visibleMovements.map((m) => {
                  const category = data.categories.find(
                    (c) => c.id === m.categoryId,
                  );
                  const sub = category?.subcategories.find(
                    (s) => s.id === m.subcategoryId,
                  );
                  return (
                    <li key={m.id}>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
                        onClick={() => {
                          setError("");
                          setSuccess("");
                          setSelected(m.id);
                        }}
                      >
                        <div className="min-w-0 space-y-1">
                          <p className="break-words font-medium">{m.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {m.date.slice(0, 10)} ·{" "}
                            {m.accountName || sourceNames[m.source]}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {category?.name ?? "Sin clasificar"}
                            {sub ? ` / ${sub.name}` : ""}
                          </p>
                          <p className="text-xs">
                            {m.reversedAt
                              ? "Anulado"
                              : m.needsReview
                                ? "Requiere revisión"
                                : m.status === "PENDING"
                                  ? "Provisional"
                                  : m.status === "REMOVED"
                                    ? "Eliminado por el banco"
                                    : m.reconciliation
                                      ? "Conciliado"
                                      : kindNames[m.kind]}
                          </p>
                        </div>
                        <span className="shrink-0 font-semibold tabular-nums">
                          {money(m.amountCents, m.currency)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No hay movimientos con estos filtros.
              </p>
            )}
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <span>
                {movements.length} movimientos · Página {currentPage} de{" "}
                {totalPages}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage <= 1}
                  onClick={() => setPage(currentPage - 1)}
                >
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  disabled={currentPage >= totalPages}
                  onClick={() => setPage(currentPage + 1)}
                >
                  Siguiente
                </Button>
              </div>
            </div>
          </>
        )}
        {tab === "obligations" && (
          <ul className="divide-y">
            {data.occurrences
              .filter(
                (o) =>
                  validRange &&
                  (o.currency ?? "USD") === currency &&
                  o.weekStart.slice(0, 10) >= weekStart(from) &&
                  o.weekStart.slice(0, 10) <= to,
              )
              .map((o) => (
                <li
                  key={o.id}
                  className="flex flex-wrap items-center justify-between gap-3 py-4"
                >
                  <div>
                    <p className="font-medium">{o.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {weekLabel(o.weekStart)}
                    </p>
                    <p className="mt-1 text-sm">
                      {money(o.paidCents, currency)} de{" "}
                      {money(o.expectedCents, currency)} ·{" "}
                      {o.closure === "OPEN"
                        ? "Abierto"
                        : o.closure === "AUTO"
                          ? "Cerrado por tolerancia"
                          : "Cerrado manualmente"}
                    </p>
                    {o.paidCents > o.expectedCents && (
                      <p className="text-sm text-destructive">
                        Exceso {money(o.paidCents - o.expectedCents, currency)}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    disabled={busy}
                    onClick={() =>
                      run(() =>
                        setOccurrenceClosureAction({
                          occurrenceId: o.id,
                          targetId: o.targetId,
                          cycleReference: o.cycleReference,
                          closed: o.closure === "OPEN",
                        }),
                      )
                    }
                  >
                    {o.closure === "OPEN" ? "Cerrar gasto" : "Reabrir"}
                  </Button>
                </li>
              ))}
          </ul>
        )}
        {tab === "history" && (
          <ul className="divide-y">
            {data.events
              .filter(
                (e) =>
                  validRange &&
                  e.createdAt.slice(0, 10) >= from &&
                  e.createdAt.slice(0, 10) <= to,
              )
              .map((e) => {
                const m = data.movements.find((m) => m.id === e.movementId);
                return (
                  <li
                    key={e.id}
                    className="flex flex-wrap items-center justify-between gap-3 py-3"
                  >
                    <div>
                      <p className="text-sm">
                        {eventNames[e.action] ?? "Movimiento actualizado"}
                        {m ? ` · ${m.name}` : ""}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(e.createdAt).toLocaleString("es")}
                      </p>
                    </div>
                    {m && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setError("");
                          setSelected(m.id);
                        }}
                      >
                        Ver movimiento
                      </Button>
                    )}
                  </li>
                );
              })}
            {data.events.length === 0 && (
              <li className="py-8 text-sm text-muted-foreground">
                Todavía no hay operaciones registradas.
              </li>
            )}
          </ul>
        )}
      </section>
      <FinanceCharts data={data} from={from} to={to} currency={currency} />
      <Dialog
        open={modal !== null}
        onOpenChange={(open) => {
          if (!open && !busy) setModal(null);
        }}
      >
        <AppDialogContent size="wide" aria-describedby={undefined}>
          <DialogTitle>
            {modal === "manual"
              ? "Registrar pago"
              : modal === "cash"
                ? "Ajustar Efectivo"
                : "Categorías"}
          </DialogTitle>
          {feedback}
          {modal === "manual" && (
            <ManualPaymentForm
              data={data}
              initialTarget={initialTarget}
              initialCycle={initialCycle}
              initialDate={initialDate}
              initialAmount={initialAmount}
              error={error}
              run={run}
              busy={busy}
              done={() => setModal(null)}
            />
          )}{" "}
          {modal === "cash" && (
            <CashAdjustment run={run} busy={busy} done={() => setModal(null)} />
          )}{" "}
          {modal === "categories" && (
            <CategoryManager
              categories={data.categories}
              run={run}
              busy={busy}
            />
          )}
        </AppDialogContent>
      </Dialog>
      <Dialog
        open={!!movement}
        onOpenChange={(open) => {
          if (!open && !busy) setSelected(null);
        }}
      >
        <AppDialogContent size="wide" aria-describedby={undefined}>
          <DialogTitle>{movement?.name}</DialogTitle>
          {feedback}
          {movement && (
            <MovementEditor
              key={movement.id}
              movement={movement}
              data={data}
              run={run}
              busy={busy}
              done={() => setSelected(null)}
            />
          )}
        </AppDialogContent>
      </Dialog>
    </div>
  );
}
