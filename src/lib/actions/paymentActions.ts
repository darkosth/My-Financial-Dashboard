"use server";

import { markCreditCardAsPaid } from "@/lib/actions/creditCardActions";
import {
  deferWaterfallItem,
  markCarryoverAsPaid,
  markWaterfallItemAsPaid,
  moveCarryoverToNextWeek,
  moveWaterfallItemToNextWeek,
  partiallyPayWaterfallItem,
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

const parseAmount = (value: unknown) => {
  if (value == null || value === "") return undefined;

  const parsed = Number.parseFloat(String(value));
  return Number.isFinite(parsed) ? parsed : undefined;
};

export async function applyPaymentAction({ kind, templateId, carryoverId, settlementDate, action, amountPaid }: ApplyPaymentActionInput): Promise<ActionResult> {
  const normalizedAmount = parseAmount(amountPaid);

  if (kind === "credit-card") {
    if (action !== "full") {
      return { success: false, error: "Unsupported action for credit card" };
    }

    return markCreditCardAsPaid(templateId.replace("credit-card:", ""), settlementDate);
  }

  if (carryoverId) {
    if (action === "full") {
      return markCarryoverAsPaid(carryoverId);
    }

    if (action === "partial_stay") {
      return markCarryoverAsPaid(carryoverId, normalizedAmount ?? 0);
    }

    if (action === "partial_move") {
      return moveCarryoverToNextWeek(carryoverId, normalizedAmount ?? 0);
    }

    if (action === "move") {
      return moveCarryoverToNextWeek(carryoverId);
    }

    return { success: false, error: "Unknown payment action" };
  }

  if (action === "full") {
    return markWaterfallItemAsPaid(templateId, settlementDate);
  }

  if (action === "partial_stay") {
    return partiallyPayWaterfallItem(templateId, settlementDate, normalizedAmount ?? 0);
  }

  if (action === "partial_move") {
    return deferWaterfallItem(templateId, settlementDate, normalizedAmount ?? 0);
  }

  if (action === "move") {
    return moveWaterfallItemToNextWeek(templateId, settlementDate);
  }

  return { success: false, error: "Unknown payment action" };
}

