"use client";
import { useState } from "react";
import type { Occurrence } from "@/lib/finance/uiTypes";
import { dateDistance } from "@/lib/finance/matching";
import { money, weekLabel } from "@/lib/finance/analytics";

const field = "w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-50";
export default function OccurrencePicker({ occurrences, value, onChange, referenceDate, rankedIds = [], busy = false }: {
  occurrences: Occurrence[]; value: string; onChange: (id: string) => void;
  referenceDate: string; rankedIds?: string[]; busy?: boolean;
}) {
  const [query, setQuery] = useState("");
  const current = occurrences.find(o => o.id === value);
  const nearest = [...occurrences].sort((a,b) => dateDistance(a.occurrenceDate ?? a.weekStart, referenceDate) - dateDistance(b.occurrenceDate ?? b.weekStart, referenceDate));
  const targetMap = new Map<string, Occurrence>();
  for (const occurrence of nearest) if (!targetMap.has(occurrence.targetId)) targetMap.set(occurrence.targetId, occurrence);
  const targets = [...targetMap.values()];
  const ranked = rankedIds.flatMap(id => occurrences.find(o => o.id === id) ?? []);
  const probable = ranked.filter((o, i) => ranked.findIndex(p => p.targetId === o.targetId) === i);
  const remaining = targets.filter(o => !probable.some(p => p.targetId === o.targetId)).sort((a,b) => a.name.localeCompare(b.name));
  const matches = (o: Occurrence) => `${o.name} ${o.categoryLabel ?? ""}`.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  const weeks = nearest.filter(o => o.targetId === current?.targetId);
  return <div className="space-y-3">
    <label className="block space-y-1 text-sm"><span>Buscar gasto</span><input className={field} value={query} disabled={busy} onChange={e => setQuery(e.target.value)} /></label>
    <label className="block space-y-1"><span>Gasto</span>
      <select className={field} disabled={busy} value={current?.targetId ?? ""} onChange={e => onChange(nearest.find(o => o.targetId === e.target.value)?.id ?? "")}>
        <option value="">Sin gasto planificado</option>
        {current && !matches(current) && <option value={current.targetId}>{current.name}</option>}
        {[{label:"Más probables",items:probable},{label:"Todos los demás gastos",items:remaining}].map(group => <optgroup key={group.label} label={group.label}>{group.items.filter(matches).map(o => <option key={o.targetId} value={o.targetId}>{o.name} · {money(o.expectedCents, o.currency)}</option>)}</optgroup>)}
      </select>
    </label>
    {current && <label className="block space-y-1"><span>Semana / período</span>
      <select className={field} disabled={busy} value={value} onChange={e => onChange(e.target.value)}>
        {weeks.map(o => <option key={o.id} value={o.id}>{weekLabel(o.weekStart)} · {o.closure === "OPEN" ? "Abierto" : "Cerrado"} · {money(o.paidCents)} de {money(o.expectedCents)}</option>)}
      </select>
    </label>}
  </div>;
}
