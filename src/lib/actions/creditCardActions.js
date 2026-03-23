"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getNextTemplateOccurrence, getTemplateCycleReference } from "@/lib/waterfallCalculations";

const revalidateFinanceViews = () => {
  revalidatePath("/");
  revalidatePath("/calendar");
};

// 1. CREAR
export async function createCreditCard(formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  // Si no te pasan un pago mínimo, por defecto asume el 2% del balance o 0
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : (balance * 0.07);
  const dueDate = parseInt(formData.get("dueDate"));

  try {
    await prisma.creditCard.create({
      data: { name, balance, creditLimit, minimumPayment, dueDate },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error creating credit card:", error);
    return { success: false, error: "Failed to create credit card" };
  }
}

// 2. ACTUALIZAR
export async function updateCreditCard(id, formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : (balance * 0.02);
  const dueDate = parseInt(formData.get("dueDate"));

  try {
    await prisma.creditCard.update({
      where: { id: id },
      data: { name, balance, creditLimit, minimumPayment, dueDate },
    });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating credit card:", error);
    return { success: false, error: "Failed to update credit card" };
  }
}

// 3. ELIMINAR
export async function deleteCreditCard(id) {
  try {
    await prisma.creditCard.delete({
      where: { id: id },
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
    const creditCard = await prisma.creditCard.findUnique({
      where: { id: creditCardId },
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
      occurrenceDateInput ? new Date(occurrenceDateInput) : getNextTemplateOccurrence(scheduledItem, new Date());

    if (!occurrenceDate) {
      throw new Error("Could not calculate credit card payment occurrence");
    }

    const cycleReference = getTemplateCycleReference(scheduledItem, occurrenceDate);
    const previousPayments = await prisma.creditCardPaymentHistory.findMany({
      where: {
        creditCardId,
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
