"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getNextTemplateOccurrence, getTemplateCycleReference } from "@/lib/waterfallCalculations";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { getCreditCardEffectiveMinimumPayment } from "@/lib/creditCardReview";
import { getMoneyUpdateData, serializeCreditCard, serializeHistoryRecord } from "@/lib/money";
import {
  getDayOfMonth,
  getMoneyAmount,
  getOptionalMoneyAmount,
  getOptionalPercentage,
  getRequiredText,
  parseCalendarDate,
  parseRequiredText,
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
        ...getMoneyUpdateData(balance, "balanceCents"),
        ...getMoneyUpdateData(creditLimit, "creditLimitCents"),
        ...getMoneyUpdateData(minimumPayment, "minimumPaymentCents"),
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
    const creditCardId = parseRequiredText(id, "Credit card id");
    const name = getRequiredText(formData, "name", "Credit card name");
    const balance = getMoneyAmount(formData, "balance", "Balance");
    const creditLimit = getMoneyAmount(formData, "creditLimit", "Credit limit");
    const minimumPayment = getOptionalMoneyAmount(formData, "minimumPayment", "Minimum payment", balance * 0.02);
    const minimumPaymentPercentage = getOptionalPercentage(formData, "minimumPaymentPercentage", "Minimum payment percentage");
    const apr = getOptionalPercentage(formData, "apr", "APR");
    const dueDate = getDayOfMonth(formData, "dueDate", "Due date");
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCardRecord = await prisma.creditCard.findFirst({
      where: { id: creditCardId, workspaceId: activeWorkspace.id },
    });
    const creditCard = creditCardRecord ? serializeCreditCard(creditCardRecord) : null;

    if (!creditCard) {
      throw new Error("Credit card not found");
    }

    await prisma.creditCard.update({
      where: { id: creditCard.id },
      data: {
        name,
        ...getMoneyUpdateData(balance, "balanceCents"),
        ...getMoneyUpdateData(creditLimit, "creditLimitCents"),
        ...getMoneyUpdateData(minimumPayment, "minimumPaymentCents"),
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
    const creditCardId = parseRequiredText(id, "Credit card id");
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCard = await prisma.creditCard.findFirst({
      where: { id: creditCardId, workspaceId: activeWorkspace.id },
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
    const validatedCreditCardId = parseRequiredText(creditCardId, "Credit card id");
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCardRecord = await prisma.creditCard.findFirst({
      where: { id: validatedCreditCardId, workspaceId: activeWorkspace.id },
    });
    const creditCard = creditCardRecord ? serializeCreditCard(creditCardRecord) : null;

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
        ? parseCalendarDate(occurrenceDateInput, "Settlement date")
        : getNextTemplateOccurrence(scheduledItem, new Date());

    if (!occurrenceDate) {
      throw new Error("Could not calculate credit card payment occurrence");
    }

    const cycleReference = getTemplateCycleReference(scheduledItem, occurrenceDate);
    const previousPayments = await prisma.creditCardPaymentHistory.findMany({
      where: {
        creditCardId: validatedCreditCardId,
        workspaceId: activeWorkspace.id,
        cycleReference,
      },
    });
    const alreadyPaid = previousPayments.map(serializeHistoryRecord).reduce((acc, item) => acc + item.amountPaid, 0);
    const pendingAmount = Math.max(minimumPayment - alreadyPaid, 0);

    if (pendingAmount <= 0) {
      revalidateFinanceViews();
      return { success: true };
    }

    await prisma.creditCardPaymentHistory.create({
      data: {
        creditCardId: validatedCreditCardId,
        ...getMoneyUpdateData(pendingAmount, "amountPaidCents"),
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
