"use client";

import { Check, LoaderCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PaymentCandidatePicker from "@/components/reconciliation/PaymentCandidatePicker";
import { formatCalendarDateLabel } from "@/lib/calendarDate";
import type { LearningQueueData } from "@/lib/learningData";

type QueueTransaction = LearningQueueData["transactions"][number];
type PaymentOption = LearningQueueData["paymentOptions"][number];

const confidenceLabels = {
  HIGH: "Alta",
  LOW: "Baja",
  MEDIUM: "Media",
  NONE: "Sin coincidencia",
} as const;

const confidenceClasses = {
  HIGH: "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200",
  LOW: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-200",
  MEDIUM: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-200",
  NONE: "border-border bg-muted text-muted-foreground",
} as const;

const reasonLabels: Record<string, string> = {
  AMOUNT: "importe",
  CATEGORY: "categoría",
  DATE: "fecha",
  LEARNED_ACCOUNT: "cuenta aprendida",
  LEARNED_MERCHANT: "comercio aprendido",
  LEARNED_REJECTION: "rechazos previos",
  NAME: "nombre",
};

const formatMoney = (amountCents: number, currencyCode: string | null) => new Intl.NumberFormat("en-US", {
  currency: currencyCode || "USD",
  style: "currency",
}).format(amountCents / 100);

export default function TransactionReviewRow({
  busy,
  onConfirm,
  onIgnore,
  onSelect,
  options,
  selectedTargetId,
  transaction,
}: {
  busy: boolean;
  onConfirm: () => void;
  onIgnore: () => void;
  onSelect: (targetId: string) => void;
  options: PaymentOption[];
  selectedTargetId: string | null;
  transaction: QueueTransaction;
}) {
  const prediction = transaction.prediction;
  const predictedOption = options.find((option) => option.targetId === prediction.suggestion?.templateId);
  const selectedOption = options.find((option) => option.targetId === selectedTargetId);
  const hasManualSelection = !!selectedOption && selectedOption.targetId !== predictedOption?.targetId;
  const evidence = prediction.suggestion?.reasons
    .slice()
    .sort((left, right) => Math.abs(right.points) - Math.abs(left.points))
    .slice(0, 3)
    .map((reason) => reasonLabels[reason.code] ?? reason.code.toLowerCase()) ?? [];

  return (
    <article aria-busy={busy} className="grid gap-4 border-t border-border py-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)] lg:gap-8">
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate font-semibold">{transaction.merchantName || transaction.name}</h3>
              {transaction.pending ? <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-800 dark:text-amber-300">Pendiente · provisional</Badge> : null}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {formatCalendarDateLabel(transaction.authorizedDate ?? transaction.date, { day: "numeric", month: "short", year: "numeric" })}
              {" · "}{transaction.institutionName}{" · "}{transaction.accountName}
            </p>
          </div>
          <p className="shrink-0 text-base font-semibold tabular-nums sm:text-lg">
            {formatMoney(transaction.amountCents, transaction.isoCurrencyCode)}
          </p>
        </div>
      </div>

      <div className="min-w-0 border-l-2 border-border pl-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Predicción</span>
          <Badge variant="outline" className={confidenceClasses[prediction.confidence]}>
            {confidenceLabels[prediction.confidence]}
          </Badge>
        </div>
        <p className="mt-1 truncate font-medium">
          {predictedOption ? (
            <>
              {predictedOption.name}{" · "}
              <span className="tabular-nums">
                {predictedOption.amountCents > 0 ? formatMoney(predictedOption.amountCents, "USD") : "sin monto actual"}
              </span>
            </>
          ) : "Sin pago sugerido"}
        </p>
        {evidence.length > 0 ? <p className="mt-1 text-xs text-muted-foreground">{evidence.join(" · ")}</p> : null}
        {hasManualSelection ? (
          <p className="mt-2 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Selección:</span>{" "}
            {selectedOption.kind === "credit-card" ? "Tarjeta · " : "Gasto · "}
            {selectedOption.name}{" · "}
            {selectedOption.amountCents > 0 ? formatMoney(selectedOption.amountCents, "USD") : "sin monto actual"}
          </p>
        ) : null}

        <div className="mt-3 flex flex-wrap gap-2">
          <Button type="button" size="sm" onClick={onConfirm} disabled={busy || !selectedTargetId}>
            {busy ? <LoaderCircle className="animate-spin motion-reduce:animate-none" /> : <Check />}
            Confirmar
          </Button>
          <PaymentCandidatePicker
            disabled={busy}
            onSelect={onSelect}
            options={options}
            selectedTargetId={selectedTargetId}
          />
          <Button type="button" size="sm" variant="ghost" onClick={onIgnore} disabled={busy}>
            Ignorar
          </Button>
        </div>
      </div>
    </article>
  );
}
