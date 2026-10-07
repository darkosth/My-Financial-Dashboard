"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { applyPaymentAction, type ApplyPaymentActionInput } from "@/lib/actions/paymentActions";
import { getSettlementDate, type SettlementDateCandidate } from "@/lib/paymentResolution";
import { getCalendarDateKey } from "@/lib/calendarDate";
import type { ActionResult } from "@/lib/actions/validation";
import type { PaymentAction, PaymentItem } from "@/components/payments/PaymentActionDialog";

export type PaymentDialogItem = PaymentItem &
  SettlementDateCandidate & {
  kind?: PaymentItem["kind"] | ApplyPaymentActionInput["kind"];
  templateId: string;
  carryoverId?: string | null;
  cycleReference?: Date | string | null;
};

export function usePaymentActionDialog() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<PaymentDialogItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPaymentDialog = (item: PaymentDialogItem) => {
    setSelectedItem(item);
  };

  const closePaymentDialog = () => {
    if (isSubmitting) return;
    setSelectedItem(null);
  };

  const submitPaymentAction = async ({
    action,
    amountPaid,
  }: {
    action: PaymentAction | ApplyPaymentActionInput["action"];
    amountPaid?: ApplyPaymentActionInput["amountPaid"];
  }): Promise<ActionResult> => {
    if (!selectedItem || isSubmitting) {
      return { success: false, error: "No item selected" };
    }

    setIsSubmitting(true);

    try {
      if (action !== "move") {
        const cycleReference = getCalendarDateKey(
          selectedItem.sourceCycleReference ??
            selectedItem.cycleReference ??
            getSettlementDate(selectedItem),
        );
        if (!cycleReference) {
          return { success: false, error: "No se encontró la semana de este gasto." };
        }
        const params = new URLSearchParams({
          manual: "1",
          target: selectedItem.templateId,
          cycle: cycleReference,
          amount: String(amountPaid ?? selectedItem.amount),
        });
        setSelectedItem(null);
        router.push(`/movements?${params.toString()}`);
        return { success: true };
      }

      const result = await applyPaymentAction({
        kind: selectedItem.kind ?? "template",
        templateId: selectedItem.templateId,
        carryoverId: selectedItem.carryoverId,
        settlementDate: getSettlementDate(selectedItem),
        action,
        amountPaid,
      });

      if (result.success) {
        setSelectedItem(null);
        router.refresh();
      }

      return result;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isPaymentDialogOpen: !!selectedItem,
    isSubmittingPaymentAction: isSubmitting,
    selectedPaymentItem: selectedItem,
    openPaymentDialog,
    closePaymentDialog,
    submitPaymentAction,
  };
}
