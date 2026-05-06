"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getNextTemplateOccurrence, getTemplateCycleReference } from "@/lib/waterfallCalculations";
import { normalizeCalendarDate } from "@/lib/calendarDate";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { getCreditCardEffectiveMinimumPayment } from "@/lib/creditCardReview";
import {
  getDayOfMonth,
  getMoneyAmount,
  getOptionalMoneyAmount,
  getOptionalPercentage,
  getRequiredText,
  validationFailure,
} from "@/lib/actions/validation";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
};

export async function createCreditCard(formData) {
  try {
    const name = getRequiredText(formData, "name", "Credit card name");
    const balance = getMoneyAmount(formData, "balance", "Balance");
    const creditLimit = getMoneyAmount(formData, "creditLimit", "Credit limit");
    const minimumPayment = getOptionalMoneyAmount(formData, "minimumPayment", "Minimum payment", balance * 0.07);
    const minimumPaymentPercentage = getOptionalPercentage(formData, "minimumPaymentPercentage", "Minimum payment percentage");
    const apr = getOptionalPercentage(formData, "apr", "APR");
    const dueDate = getDayOfMonth(formData, "dueDate", "Due date");
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.creditCard.create({
      data: {
        name,
        balance,
        creditLimit,
        minimumPayment,
        minimumPaymentPercentage,
        apr,
        dueDate,
        workspaceId: activeWorkspace.id,
        lastReviewedAt: new Date(),
      },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error creating credit card:", error);
    return validationFailure(error, "Failed to create credit card");
  }
}

export async function updateCreditCard(id, formData) {
  try {
    const name = getRequiredText(formData, "name", "Credit card name");
    const balance = getMoneyAmount(formData, "balance", "Balance");
    const creditLimit = getMoneyAmount(formData, "creditLimit", "Credit limit");
    const minimumPayment = getOptionalMoneyAmount(formData, "minimumPayment", "Minimum payment", balance * 0.02);
    const minimumPaymentPercentage = getOptionalPercentage(formData, "minimumPaymentPercentage", "Minimum payment percentage");
    const apr = getOptionalPercentage(formData, "apr", "APR");
    const dueDate = getDayOfMonth(formData, "dueDate", "Due date");
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCard = await prisma.creditCard.findFirst({
      where: { id, workspaceId: activeWorkspace.id },
    });

    if (!creditCard) {
      throw new Error("Credit card not found");
    }

    await prisma.creditCard.update({
      where: { id: creditCard.id },
      data: {
        name,
        balance,
        creditLimit,
        minimumPayment,
        minimumPaymentPercentage,
        apr,
        dueDate,
        lastReviewedAt: new Date(),
      },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating credit card:", error);
    return validationFailure(error, "Failed to update credit card");
  }
}

export async function deleteCreditCard(id) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCard = await prisma.creditCard.findFirst({
      where: { id, workspaceId: activeWorkspace.id },
    });

    if (!creditCard) {
      throw new Error("Credit card not found");
    }

    await prisma.creditCard.delete({
      where: { id: creditCard.id },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error deleting credit card:", error);
    return { success: false, error: "Failed to delete credit card" };
  }
}

export async function markCreditCardAsPaid(creditCardId, occurrenceDateInput = null) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCard = await prisma.creditCard.findFirst({
      where: { id: creditCardId, workspaceId: activeWorkspace.id },
    });

    if (!creditCard) {
      throw new Error("Credit card not found");
    }

    const minimumPayment = getCreditCardEffectiveMinimumPayment(creditCard);
    const scheduledItem = {
      id: `credit-card:${creditCard.id}`,
      kind: "credit-card",
      frequency: "MONTHLY",
      dayOfMonth: creditCard.dueDate,
      amount: minimumPayment,
    };
    const occurrenceDate =
      occurrenceDateInput
        ? normalizeCalendarDate(occurrenceDateInput)
        : getNextTemplateOccurrence(scheduledItem, new Date());

    if (!occurrenceDate) {
      throw new Error("Could not calculate credit card payment occurrence");
    }

    const cycleReference = getTemplateCycleReference(scheduledItem, occurrenceDate);
    const previousPayments = await prisma.creditCardPaymentHistory.findMany({
      where: {
        creditCardId,
        workspaceId: activeWorkspace.id,
        cycleReference,
      },
    });
    const alreadyPaid = previousPayments.reduce((acc, item) => acc + item.amountPaid, 0);
    const pendingAmount = Math.max(minimumPayment - alreadyPaid, 0);

    if (pendingAmount <= 0) {
      revalidateFinanceViews();
      return { success: true };
    }

    await prisma.creditCardPaymentHistory.create({
      data: {
        creditCardId,
        amountPaid: pendingAmount,
        workspaceId: activeWorkspace.id,
        cycleReference,
        datePaid: new Date(),
      },
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error marking credit card payment as paid:", error);
    return { success: false, error: "Failed to mark credit card payment as paid" };
  }
}
