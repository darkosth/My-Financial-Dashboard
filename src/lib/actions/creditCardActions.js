"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getNextTemplateOccurrence, getTemplateCycleReference } from "@/lib/waterfallCalculations";
import { normalizeCalendarDate } from "@/lib/calendarDate";
import { getCurrentUserContext } from "@/lib/workspaceContext";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
};

const parseOptionalApr = (value) => {
  if (value == null || value === "") {
    return null;
  }

  const parsedValue = parseFloat(value);
  return Number.isNaN(parsedValue) ? null : parsedValue;
};

export async function createCreditCard(formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : balance * 0.07;
  const apr = parseOptionalApr(formData.get("apr"));
  const dueDate = parseInt(formData.get("dueDate"));

  try {
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.creditCard.create({
      data: {
        name,
        balance,
        creditLimit,
        minimumPayment,
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
    return { success: false, error: "Failed to create credit card" };
  }
}

export async function updateCreditCard(id, formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : balance * 0.02;
  const apr = parseOptionalApr(formData.get("apr"));
  const dueDate = parseInt(formData.get("dueDate"));

  try {
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
        apr,
        dueDate,
        lastReviewedAt: new Date(),
      },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating credit card:", error);
    return { success: false, error: "Failed to update credit card" };
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

    const scheduledItem = {
      id: `credit-card:${creditCard.id}`,
      kind: "credit-card",
      frequency: "MONTHLY",
      dayOfMonth: creditCard.dueDate,
      amount: creditCard.minimumPayment,
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
    const pendingAmount = Math.max(creditCard.minimumPayment - alreadyPaid, 0);

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
