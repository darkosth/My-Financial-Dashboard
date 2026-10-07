"use client";
import { useState } from "react";
import { buildAnalytics, money, weekLabel } from "@/lib/finance/analytics";
import type { FinanceWorkspaceData } from "@/lib/finance/uiTypes";
export default function FinanceCharts({
  data,
  from,
  to,
  currency,
}: {
  data: FinanceWorkspaceData;
  from: string;
  to: string;
  currency: string;
}) {
  const [category, setCategory] = useState("");
  const result = buildAnalytics(data, from, to, currency, category);
  const maximum = Math.max(
    1,
    ...result.categories.map(([, amount]) => Math.abs(amount)),
  );
  const weeklyMaximum = Math.max(
    1,
    ...result.weeks.flatMap((w) => [w.planned, w.paid + w.unplanned]),
  );
  return (
    <section id="graficas" className="scroll-mt-24 space-y-6 border-t pt-8">
      <h2 className="text-xl font-semibold">Gráficas</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <section className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-medium">Gastos por categoría</h3>
            <select
              aria-label="Desglose de categoría"
              className="rounded-md border bg-background p-2 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {data.categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {result.categories.length ? (
            <ul className="space-y-4">
              {result.categories.map(([name, amount]) => (
                <li key={name}>
                  <div className="mb-1 flex justify-between gap-3 text-sm">
                    <span>{name}</span>
                    <span className="tabular-nums">
                      {money(amount, currency)}
                    </span>
                  </div>
                  <div
                    className="h-3 overflow-hidden rounded bg-muted"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${(Math.abs(amount) / maximum) * 100}%`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No hay gastos en este período.
            </p>
          )}
        </section>
        <section className="min-w-0 space-y-4">
          <h3 className="font-medium">Planificado y gastado por semana</h3>
          <div className="flex gap-4 text-xs">
            <span>
              <span className="mr-1 inline-block h-2 w-2 bg-primary" />
              Planificado
            </span>
            <span>
              <span className="mr-1 inline-block h-2 w-2 bg-[var(--chart-2)]" />
              Gastado
            </span>
          </div>
          {result.weeks.length ? (
            <ul className="space-y-5">
              {result.weeks.map((w) => (
                <li key={w.week} className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    {weekLabel(w.week)}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-3 flex-1 bg-muted" aria-hidden="true">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(w.planned / weeklyMaximum) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="w-24 text-right text-xs tabular-nums">
                      <span className="sr-only">Planificado: </span>
                      {money(w.planned, currency)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 flex-1 bg-muted" aria-hidden="true">
                      <div
                        className="h-full bg-[var(--chart-2)]"
                        style={{
                          width: `${(Math.max(0, w.paid + w.unplanned) / weeklyMaximum) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="w-24 text-right text-xs tabular-nums">
                      <span className="sr-only">Gastado: </span>
                      {money(w.paid + w.unplanned, currency)}
                    </span>
                  </div>
                  {w.unplanned !== 0 && (
                    <p className="text-xs text-muted-foreground">
                      Sin planificar: {money(w.unplanned, currency)}
                    </p>
                  )}
                  {w.paid + w.unplanned > w.planned && (
                    <p className="text-xs text-destructive">
                      Exceso:{" "}
                      {money(w.paid + w.unplanned - w.planned, currency)}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No hay pagos ni gastos previstos en este período.
            </p>
          )}
        </section>
      </div>
    </section>
  );
}
