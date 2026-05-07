"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { applyPaymentAction, type ApplyPaymentActionInput } from "@/lib/actions/paymentActions";
import { getSettlementDate, type SettlementDateCandidate } from "@/lib/paymentResolution";
import type { PaymentAction, PaymentItem } from "@/components/payments/PaymentActionDialog";

export type PaymentDialogItem = PaymentItem &
  SettlementDateCandidate & {
  kind?: PaymentItem["kind"] | ApplyPaymentActionInput["kind"];
  templateId: string;
  carryoverId?: string | null;
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
  }) => {
    if (!selectedItem || isSubmitting) {
      return { success: false, error: "No item selected" };
    }

    setIsSubmitting(true);

    try {
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
