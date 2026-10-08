"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppDialogContent, Dialog, DialogTitle } from "@/components/ui/dialog";
import {
  createCategoryAction,
  createManualMovementAction,
  adjustCashAction,
  updateCategoryAction,
} from "@/lib/actions/financeActions";
import type {
  FinanceCategory,
  FinanceWorkspaceData,
} from "@/lib/finance/uiTypes";
import type { ActionResult } from "@/lib/actions/validation";
import { money, weekLabel } from "@/lib/finance/analytics";
export const fieldClass =
  "w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-50";
export type RunAction = (
  action: () => Promise<ActionResult<unknown>>,
  done?: () => void,
) => void;
export function CategoryFields({
  categories,
  category,
  subcategory,
  onChange,
  run,
  busy,
}: {
  categories: FinanceCategory[];
  category: string;
  subcategory: string;
  onChange: (category: string, subcategory: string) => void;
  run: RunAction;
  busy: boolean;
}) {
  const [creating, setCreating] = useState<"main" | "sub" | null>(null);
  const [name, setName] = useState("");
  const [added, setAdded] = useState<FinanceCategory[]>([]);
  const all = [
    ...categories,
    ...added.filter(
      (c) => !categories.some((existing) => existing.id === c.id),
    ),
  ];
  const selected = all.find((c) => c.id === category);
  const [subs, setSubs] = useState<
    { id: string; name: string; parentId: string }[]
  >([]);
  return (
    <div className="space-y-3">
      <label className="block space-y-1">
        <span className="text-sm">Categoría</span>
        <select
          className={fieldClass}
          value={category}
          disabled={busy}
          onChange={(e) => onChange(e.target.value, "")}
        >
          <option value="">Sin clasificar</option>
          {all
            .filter((c) => !c.archived || c.id === category)
            .map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
        </select>
      </label>
      <label className="block space-y-1">
        <span className="text-sm">Subcategoría</span>
        <select
          className={fieldClass}
          disabled={!category || busy}
          value={subcategory}
          onChange={(e) => onChange(category, e.target.value)}
        >
          <option value="">Sin subcategoría</option>
          {selected?.subcategories
            .filter((s) => !s.archived || s.id === subcategory)
            .map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          {subs
            .filter(
              (s) =>
                s.parentId === category &&
                !selected?.subcategories.some(
                  (existing) => existing.id === s.id,
                ),
            )
            .map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
        </select>
      </label>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={busy}
          onClick={() => setCreating("main")}
        >
          + Categoría
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={!category || busy}
          onClick={() => setCreating("sub")}
        >
          + Subcategoría
        </Button>
      </div>
      {creating && (
        <div className="flex flex-wrap gap-2">
          <input
            aria-label={
              creating === "main" ? "Nueva categoría" : "Nueva subcategoría"
            }
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            maxLength={80}
          />
          <Button
            type="button"
            disabled={!name.trim() || busy}
            onClick={() =>
              run(async () => {
                const result = await createCategoryAction({
                  name,
                  ...(creating === "sub" ? { parentId: category } : {}),
                });
                if (result.success && result.data) {
                  const id = result.data.id;
                  if (creating === "main") {
                    setAdded((a) => [
                      ...a,
                      { id, name, archived: false, subcategories: [] },
                    ]);
                    onChange(id, "");
                  } else {
                    setSubs((a) => [...a, { id, name, parentId: category }]);
                    onChange(category, id);
                  }
                  setCreating(null);
                  setName("");
                }
                return result;
              })
            }
          >
            Crear
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setCreating(null)}
          >
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
}
export function ManualPaymentForm({
  data,
  initialTarget = "",
  initialCycle = "",
  initialDate = "",
  initialAmount = "",
  error,
  run,
  busy,
  done,
}: {
  data: FinanceWorkspaceData;
  initialTarget?: string;
  initialCycle?: string;
  initialDate?: string;
  initialAmount?: string;
  error?: string;
  run: RunAction;
  busy: boolean;
  done: () => void;
}) {
  const today = new Date().toLocaleDateString("en-CA");
  const [source, setSource] = useState<"" | "CASH" | "CREDIT" | "DEBIT">("");
  const [accountId, setAccountId] = useState("");
  const [kind, setKind] = useState<"EXPENSE" | "INCOME">("EXPENSE");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [amount, setAmount] = useState(initialAmount);
  const [occurrenceId, setOccurrenceId] = useState(
    data.occurrences.find(
      (o) =>
        o.targetId === initialTarget &&
        (initialCycle
          ? o.cycleReference.slice(0, 10) === initialCycle.slice(0, 10)
          : !initialDate ||
            o.cycleReference.slice(0, 10) === initialDate.slice(0, 10)),
    )?.id ?? "",
  );
  const occurrence = data.occurrences.find((o) => o.id === occurrenceId);
  const [requestId] = useState(() => crypto.randomUUID());
  const [adjusting, setAdjusting] = useState(false);
  const insufficient =
    source === "CASH" &&
    kind === "EXPENSE" &&
    Math.round(Number(amount) * 100) > data.cash.balanceCents;
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (busy || insufficient || !source) return;
        const f = new FormData(e.currentTarget);
        run(
          () =>
            createManualMovementAction({
              requestId,
              name: String(f.get("name")),
              amountCents: Math.round(Number(amount) * 100),
              date: String(f.get("date")),
              source,
              accountId: source === "DEBIT" ? accountId || undefined : undefined,
              kind: occurrence?.targetId.startsWith("credit-card:")
                ? "CARD_PAYMENT"
                : kind,
              categoryId: category || undefined,
              subcategoryId: subcategory || undefined,
              ...(occurrence && kind === "EXPENSE"
                ? {
                    targetId: occurrence.targetId,
                    cycleReference: occurrence.cycleReference,
                  }
                : {}),
            }),
          done,
        );
      }}
    >
      <label className="block space-y-1">
        <span>Concepto</span>
        <input
          name="name"
          required
          maxLength={120}
          defaultValue={occurrence?.name}
          className={fieldClass}
        />
      </label>
      <div className="grid grid-cols-2 gap-3">
        <label className="space-y-1">
          <span>Importe USD</span>
          <input
            aria-label="Importe USD"
            type="number"
            required
            min="0.01"
            step="0.01"
            className={fieldClass}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label className="space-y-1">
          <span>Fecha del pago</span>
          <input
            name="date"
            type="date"
            required
            defaultValue={initialDate || today}
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block space-y-1">
        <span>Medio de pago</span>
        <select
          className={fieldClass}
          value={source}
          onChange={(e) => {
            const nextSource = e.target.value as "" | "CASH" | "CREDIT" | "DEBIT";
            setSource(nextSource);
            if (nextSource !== "DEBIT") setAccountId("");
            if (
              nextSource === "CREDIT" &&
              occurrence?.targetId.startsWith("credit-card:")
            ) {
              setOccurrenceId("");
            }
            setKind("EXPENSE");
          }}
        >
          <option value="">Seleccionar medio de pago</option>
          <option value="CASH">
            Efectivo · {money(data.cash.balanceCents)}
          </option>
          <option value="CREDIT">Tarjeta de crédito</option>
          <option value="DEBIT">Tarjeta de débito</option>
        </select>
      </label>
      {source === "DEBIT" && data.accounts.length > 0 && (
        <label className="block space-y-1">
          <span>Cuenta bancaria</span>
          <select
            className={fieldClass}
            value={accountId}
            disabled={busy}
            onChange={(e) => setAccountId(e.target.value)}
          >
            <option value="">Sin cuenta vinculada</option>
            {data.accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
        </label>
      )}
      {source === "CREDIT" && (
        <p className="text-sm text-muted-foreground">
          La deuda de esta tarjeta no está incluida en la proyección.
        </p>
      )}
      {(source === "CASH" || source === "DEBIT") && (
        source === "DEBIT" ? (
          <p className="text-sm text-muted-foreground">
            {occurrence?.targetId.startsWith("credit-card:")
              ? "Pago de tarjeta desde cuenta bancaria"
              : "Pago desde cuenta bancaria"}
          </p>
        ) : occurrence?.targetId.startsWith("credit-card:") ? (
          <p className="text-sm text-muted-foreground">Pago de tarjeta</p>
        ) : (
          <label className="block space-y-1">
            <span>Movimiento</span>
            <select
              className={fieldClass}
              value={kind}
              onChange={(e) =>
                setKind(e.target.value as "EXPENSE" | "INCOME")
              }
            >
              <option value="EXPENSE">Pago</option>
              <option value="INCOME">Ingreso</option>
            </select>
          </label>
        )
      )}
      <CategoryFields
        categories={data.categories}
        category={category}
        subcategory={subcategory}
        onChange={(c, s) => {
          setCategory(c);
          setSubcategory(s);
        }}
        run={run}
        busy={busy}
      />
      {kind === "EXPENSE" && (
        <label className="block space-y-1">
          <span>
            {occurrence?.targetId.startsWith("credit-card:")
              ? "Pago de tarjeta y semana"
              : "Gasto y semana"}
          </span>
          <select
            className={fieldClass}
            value={occurrenceId}
            onChange={(e) => {
              setOccurrenceId(e.target.value);
              const nextOccurrence = data.occurrences.find(
                (item) => item.id === e.target.value,
              );
              if (
                nextOccurrence?.targetId.startsWith("credit-card:") &&
                source !== "DEBIT"
              ) {
                setSource("CASH");
                setKind("EXPENSE");
              }
            }}
          >
            <option value="">Sin gasto planificado</option>
            {data.occurrences.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name} · {weekLabel(o.weekStart)} ·{" "}
                {o.closure === "OPEN" ? "Abierto" : "Cerrado"}
              </option>
            ))}
          </select>
        </label>
      )}
      {insufficient && (
        <div className="space-y-2 rounded-md border border-destructive p-3">
          <p role="alert" className="text-sm text-destructive">
            Saldo insuficiente. Faltan{" "}
            {money(Math.round(Number(amount) * 100) - data.cash.balanceCents)}.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => setAdjusting(true)}
          >
            Ajustar Efectivo
          </Button>
        </div>
      )}
      <Button className="w-full" disabled={busy || insufficient || !source}>
        {busy ? "Guardando…" : "Registrar pago"}
      </Button>
      <Dialog open={adjusting} onOpenChange={setAdjusting}>
        <AppDialogContent aria-describedby={undefined}>
          <DialogTitle>Ajustar Efectivo</DialogTitle>
          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          <CashAdjustment
            run={run}
            busy={busy}
            done={() => setAdjusting(false)}
          />
        </AppDialogContent>
      </Dialog>
    </form>
  );
}
export function CashAdjustment({
  run,
  busy,
  done,
}: {
  run: RunAction;
  busy: boolean;
  done: () => void;
}) {
  const [requestId] = useState(() => crypto.randomUUID());
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const f = new FormData(e.currentTarget);
        run(
          () =>
            adjustCashAction({
              requestId,
              amountCents: Math.round(Number(f.get("amount")) * 100),
              reason: String(f.get("reason")),
              date: String(f.get("date")),
            }),
          done,
        );
      }}
    >
      <label className="block space-y-1">
        <span>Aumentar (+) o reducir (−), USD</span>
        <input
          className={fieldClass}
          name="amount"
          type="number"
          step="0.01"
          required
        />
      </label>
      <label className="block space-y-1">
        <span>Motivo</span>
        <input className={fieldClass} name="reason" required maxLength={160} />
      </label>
      <label className="block space-y-1">
        <span>Fecha</span>
        <input
          className={fieldClass}
          name="date"
          type="date"
          defaultValue={new Date().toLocaleDateString("en-CA")}
          required
        />
      </label>
      <Button disabled={busy}>{busy ? "Guardando…" : "Guardar ajuste"}</Button>
    </form>
  );
}
export function CategoryManager({
  categories,
  run,
  busy,
}: {
  categories: FinanceCategory[];
  run: RunAction;
  busy: boolean;
}) {
  return (
    <div className="space-y-5">
      {categories.map((c) => (
        <section key={c.id}>
          <CategoryRow
            id={c.id}
            name={c.name}
            archived={c.archived}
            run={run}
            busy={busy}
          />
          <div className="ml-4 space-y-2 border-l pl-3">
            {c.subcategories.map((s) => (
              <CategoryRow
                key={s.id}
                {...s}
                isSubcategory
                run={run}
                busy={busy}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
function CategoryRow({
  id,
  name,
  archived,
  isSubcategory,
  run,
  busy,
}: {
  id: string;
  name: string;
  archived: boolean;
  isSubcategory?: boolean;
  run: RunAction;
  busy: boolean;
}) {
  const [value, setValue] = useState(name);
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        aria-label={`Nombre de ${name}`}
        className={`${fieldClass} min-w-0 flex-1`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="outline"
        size="sm"
        disabled={busy || !value.trim() || value === name}
        onClick={() =>
          run(() => updateCategoryAction({ id, name: value, isSubcategory }))
        }
      >
        Guardar
      </Button>
      <Button
        variant="ghost"
        size="sm"
        disabled={busy}
        onClick={() =>
          run(() =>
            updateCategoryAction({ id, archived: !archived, isSubcategory }),
          )
        }
      >
        {archived ? "Restaurar" : "Archivar"}
      </Button>
    </div>
  );
}
