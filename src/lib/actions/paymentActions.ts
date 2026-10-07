"use server";

import {
  moveCarryoverToNextWeek,
  moveWaterfallItemToNextWeek,
} from "@/lib/actions/templateActions";
import type { ActionResult } from "@/lib/actions/validation";

type PaymentActionKind = "credit-card" | "template";
type PaymentAction =
  | "full"
  | "partial_stay"
  | "partial_move"
  | "move";

export type ApplyPaymentActionInput = {
  kind: PaymentActionKind | string;
  templateId: string;
  carryoverId?: string | null;
  settlementDate?: unknown;
  action: PaymentAction | string;
  amountPaid?: unknown;
};

export async function applyPaymentAction({ kind, templateId, carryoverId, settlementDate, action }: ApplyPaymentActionInput): Promise<ActionResult> {
  if (action !== "move") {
    return { success: false, error: "Registra el pago desde Movimientos." };
  }

  if (kind === "credit-card") {
    return { success: false, error: "Reprograma el pago desde la planificación de gastos." };
  }

  return carryoverId
    ? moveCarryoverToNextWeek(carryoverId)
    : moveWaterfallItemToNextWeek(templateId, settlementDate);
}
