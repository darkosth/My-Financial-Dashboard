"use client";

import * as React from "react";
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { formatCalendarDateLabel } from "@/lib/calendarDate";
import type { ActionResult } from "@/lib/actions/validation";

export type PaymentAction = "full" | "partial_stay" | "partial_move" | "move";

export type PaymentItem = {
  kind?: string | null;
  name: string;
  amount: number;
  occurrenceDate: Date | string;
};

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const ACTION_LABELS = {
  full: "Pago completo",
  partial_stay: "Pago parcial",
  partial_move: "Pago parcial y mover",
  move: "Reprogramar",
};

const ACTION_DESCRIPTIONS = {
  full: "Cubre este gasto por completo y lo quita de pendientes.",
  partial_stay: "Registra una parte del pago y deja el resto pendiente en esta misma semana.",
  partial_move: "Registra una parte del pago y mueve el restante a la siguiente semana.",
  move: "Reprograma el gasto completo para la siguiente semana sin registrar pago.",
};

const CONFIRM_LABELS = {
  full: "Confirmar pago",
  partial_stay: "Registrar abono",
  partial_move: "Mover restante",
  move: "Reprogramar gasto",
};

const getAvailableActions = (item: PaymentItem | null | undefined): PaymentAction[] => {
  if (!item) return [];

  if (item.kind === "credit-card") {
    return ["full"];
  }

  return ["full", "partial_stay", "partial_move", "move"];
};

const getDefaultAction = (item: PaymentItem | null | undefined): PaymentAction => getAvailableActions(item)[0] ?? "full";
const isAmountEditable = (action: PaymentAction) => action === "partial_stay" || action === "partial_move";
const getConfirmLabel = (action: PaymentAction) => CONFIRM_LABELS[action] ?? "Confirmar";
const getComputedAmountValue = (item: PaymentItem | null | undefined, action: PaymentAction, amount: string) => {
  if (!item) return amount;
  return isAmountEditable(action) ? amount : item.amount?.toString() ?? "";
};

type PaymentActionDialogProps = {
  item: PaymentItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitAction: (payload: { action: PaymentAction; amountPaid?: string }) => Promise<ActionResult>;
  isSubmitting?: boolean;
};

export default function PaymentActionDialog({
  item,
  open,
  onOpenChange,
  onSubmitAction,
  isSubmitting = false,
}: PaymentActionDialogProps) {
  const [action, setAction] = React.useState<PaymentAction>(getDefaultAction(item));
  const [amount, setAmount] = React.useState(item?.amount?.toString() ?? "");
  const [showHelp, setShowHelp] = React.useState(false);
  const amountInputRef = React.useRef<HTMLInputElement | null>(null);

  const availableActions = React.useMemo(() => getAvailableActions(item), [item]);
  const shouldEnableAmountInput = isAmountEditable(action);
  const amountValue = getComputedAmountValue(item, action, amount);

  React.useEffect(() => {
    if (!open || !item) return;
    if (!shouldEnableAmountInput) return;

    amountInputRef.current?.focus();
  }, [action, open, item, shouldEnableAmountInput]);

  const handleConfirm = async () => {
    if (!item || isSubmitting) return;

    if (shouldEnableAmountInput) {
      const parsedAmount = Number.parseFloat(amountValue);
      if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
        alert("Ingresa un monto mayor a cero.");
        return;
      }
    }

    const result = await onSubmitAction({
      action,
      amountPaid: shouldEnableAmountInput ? amountValue : undefined,
    });

    if (!result?.success) {
      alert("No se pudo registrar la accion del pago.");
    }
  };

    const confirmLabel = getConfirmLabel(action);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AppDialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <DialogTitle className="text-lg font-semibold">{item?.name}</DialogTitle>
              {item && (
                <DialogDescription>
                  {formatCurrency(item.amount)} {" • "} {formatCalendarDateLabel(item.occurrenceDate, { weekday: "short", day: "2-digit", month: "short" })}
                </DialogDescription>
              )}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              className="w-fit self-start px-2 text-muted-foreground ring-1 ring-emerald-500/20 hover:text-foreground"
              onClick={() => setShowHelp((current) => !current)}
              aria-label={showHelp ? "Ocultar ayuda" : "Mostrar ayuda"}
              aria-expanded={showHelp}
            >
              <CircleHelp className="mr-1 h-4 w-4" />
              {showHelp ? "Ocultar ayuda" : "Como funciona"}
            </Button>
          </div>
        </DialogHeader>

        {item && (
          <div className="space-y-5">
            {showHelp && (
              <div className="rounded-xl border border-blue-200 bg-blue-50/80 p-4 text-xs text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-100">
                {availableActions.map((availableAction) => (
                  <p key={availableAction} className={cn(availableAction !== availableActions[0] && "mt-2")}>
                    <strong>{ACTION_LABELS[availableAction]}:</strong> {ACTION_DESCRIPTIONS[availableAction]}
                  </p>
                ))}
              </div>
            )}

            <div className="grid gap-2">
              <Label>Accion</Label>
              <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-muted/30 p-1">
                {availableActions.map((availableAction) => (
                  <button
                    key={availableAction}
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setAction(availableAction)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-center text-xs font-medium transition-all sm:text-sm",
                      action === availableAction
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "text-muted-foreground hover:bg-background/80 hover:text-foreground"
                    )}
                  >
                    {ACTION_LABELS[availableAction]}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[140px] rounded-2xl border border-border bg-muted/20 px-4 py-4">
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <Label htmlFor="payment-action-amount">Monto a pagar</Label>
                <Input
                  ref={amountInputRef}
                  id="payment-action-amount"
                  type="number"
                  step="0.01"
                  min="0"
                  max={item.amount ?? undefined}
                  placeholder={shouldEnableAmountInput ? "0.00" : undefined}
                  value={amountValue}
                  readOnly={!shouldEnableAmountInput}
                  onChange={(event) => {
                    if (!shouldEnableAmountInput) return;
                    setAmount((event.target as HTMLInputElement).value);
                  }}
                  className={cn(
                    "h-16 w-full max-w-[240px] text-center text-4xl font-bold transition-opacity focus-visible:border-transparent focus-visible:ring-emerald-500",
                    shouldEnableAmountInput
                      ? "bg-background text-foreground opacity-100"
                      : "cursor-default bg-muted/40 text-muted-foreground opacity-60"
                  )}
                />
              </div>
            </div>
          </div>
        )}

        <DialogFooter className="flex flex-col items-center gap-4 sm:flex-col">
          <Button
            className="w-full px-8 py-6 text-base font-bold shadow-md transition-transform hover:scale-[1.02]"
            onClick={handleConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Guardando..." : confirmLabel}
          </Button>
        </DialogFooter>
      </AppDialogContent>
    </Dialog>
  );
}
