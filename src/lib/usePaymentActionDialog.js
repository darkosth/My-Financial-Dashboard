"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { applyPaymentAction } from "@/lib/actions/paymentActions";
import { getSettlementDate } from "@/lib/paymentResolution";

export function usePaymentActionDialog() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPaymentDialog = (item) => {
    setSelectedItem(item);
  };

  const closePaymentDialog = () => {
    if (isSubmitting) return;
    setSelectedItem(null);
  };

  const submitPaymentAction = async ({ action, amountPaid }) => {
    if (!selectedItem || isSubmitting) {
      return { success: false, error: "No item selected" };
    }

    setIsSubmitting(true);

    try {
      const result = await applyPaymentAction({
        kind: selectedItem.kind,
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
