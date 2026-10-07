"use client";

import { useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import { AppDialogContent, Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LearningQueueData } from "@/lib/learningData";

type PaymentOption = LearningQueueData["paymentOptions"][number];

const formatMoney = (amountCents: number) => new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
}).format(amountCents / 100);

const normalizeSearch = (value: string) => value
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

export default function PaymentCandidatePicker({
  disabled,
  onSelect,
  options,
  selectedTargetId,
  rankedTargetIds = [],
}: {
  disabled: boolean;
  onSelect: (targetId: string) => void;
  options: PaymentOption[];
  selectedTargetId: string | null;
  rankedTargetIds?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const grouped = useMemo(() => {
    const normalizedQuery = normalizeSearch(query.trim());
    const filtered = normalizedQuery
      ? options.filter((option) => normalizeSearch(`${option.name} ${option.category}`).includes(normalizedQuery))
      : options;
    const rankedIds = new Set(rankedTargetIds);
    const byId = new Map(filtered.map((option) => [option.targetId, option]));
    return {
      probable: [...rankedIds].flatMap((id) => byId.has(id) ? [byId.get(id)!] : []),
      remaining: filtered.filter((option) => !rankedIds.has(option.targetId)),
    };
  }, [options, query, rankedTargetIds]);

  const choose = (targetId: string) => {
    onSelect(targetId);
    setOpen(false);
    setQuery("");
  };

  return (
    <Dialog modal open={open} onOpenChange={(nextOpen) => { setOpen(nextOpen); if (!nextOpen) setQuery(""); }}>
      <DialogTrigger asChild>
        <Button type="button" size="sm" variant="outline" disabled={disabled}>
          {selectedTargetId ? "Cambiar" : "Seleccionar"}
        </Button>
      </DialogTrigger>
      <AppDialogContent size="wide" onPointerDownOutside={(event) => event.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Seleccionar pago</DialogTitle>
          <DialogDescription className="sr-only">Seleccionar el gasto para este movimiento.</DialogDescription>
        </DialogHeader>

        <label className="relative block">
          <span className="sr-only">Buscar pago</span>
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            className="pl-8"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nombre o categoría"
            value={query}
          />
        </label>

        <div className="max-h-[50dvh] overflow-y-auto overscroll-contain border-y border-border">
          {grouped.probable.length > 0 ? (
            <OptionGroup label="Más probables" onSelect={choose} options={grouped.probable} selectedTargetId={selectedTargetId} />
          ) : null}
          {grouped.remaining.length > 0 ? (
            <OptionGroup label={grouped.probable.length ? "Otros gastos" : "Todos los gastos"} onSelect={choose} options={grouped.remaining} selectedTargetId={selectedTargetId} />
          ) : null}
          {grouped.probable.length === 0 && grouped.remaining.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">No hay coincidencias.</p>
          ) : null}
        </div>
      </AppDialogContent>
    </Dialog>
  );
}

function OptionGroup({
  label,
  onSelect,
  options,
  selectedTargetId,
}: {
  label: string;
  onSelect: (targetId: string) => void;
  options: PaymentOption[];
  selectedTargetId: string | null;
}) {
  return (
    <section aria-label={label} className="py-2">
      <h3 className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</h3>
      {options.map((option) => (
        <button
          key={option.targetId}
          type="button"
          aria-pressed={selectedTargetId === option.targetId}
          onClick={() => onSelect(option.targetId)}
          className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="min-w-0">
            <span className="block truncate font-medium">{option.name}</span>
            <span className="block text-xs text-muted-foreground">
              {option.amountCents > 0 ? formatMoney(option.amountCents) : "Sin monto actual"}
            </span>
          </span>
          {selectedTargetId === option.targetId ? <Check className="size-4 shrink-0 text-emerald-600" /> : null}
        </button>
      ))}
    </section>
  );
}
