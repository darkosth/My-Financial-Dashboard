"use server";

import { addDays } from "date-fns";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  getNextTemplateOccurrence,
  getProjectionWeekStart,
  getTemplateCycleReference,
} from "@/lib/waterfallCalculations";

const revalidateFinanceViews = () => {
  revalidatePath("/");
  revalidatePath("/templates");
  revalidatePath("/calendar");
};

const normalizeAmount = (value) => {
  const amount = Number.parseFloat(value);
  return Number.isFinite(amount) ? amount : 0;
};

async function settleTemplateOccurrence({ templateId, occurrenceDate, amountPaid, moveRemainingToNextWeek = false }) {
  const template = await prisma.template.findUnique({
    where: { id: templateId },
  });

  if (!template) {
    throw new Error("Gasto no encontrado");
  }

  const cycleReference = getTemplateCycleReference(template, occurrenceDate);
  const alreadyPaid = await prisma.history.findMany({
    where: {
      templateId,
      cycleReference,
    },
  });

  const paidAmountSoFar = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);
  const remainingBeforeAction = Math.max(template.amount - paidAmountSoFar, 0);
  const safeAmountPaid = Math.min(Math.max(amountPaid, 0), remainingBeforeAction);
  const remainingAfterPayment = Math.max(remainingBeforeAction - safeAmountPaid, 0);

  if (safeAmountPaid > 0) {
    await prisma.history.create({
      data: {
        templateId: template.id,
        amountPaid: safeAmountPaid,
        cycleReference,
        datePaid: new Date(),
      },
    });
  }

  if (moveRemainingToNextWeek && remainingAfterPayment > 0) {
    await prisma.paymentCarryover.upsert({
      where: {
        templateId_originCycleReference: {
          templateId: template.id,
          originCycleReference: cycleReference,
        },
      },
      update: {
        remainingAmount: remainingAfterPayment,
        targetWeekStart: addDays(getProjectionWeekStart(occurrenceDate), 7),
      },
      create: {
        templateId: template.id,
        originCycleReference: cycleReference,
        targetWeekStart: addDays(getProjectionWeekStart(occurrenceDate), 7),
        remainingAmount: remainingAfterPayment,
      },
    });
  } else {
    await prisma.paymentCarryover.deleteMany({
      where: {
        templateId: template.id,
        originCycleReference: cycleReference,
      },
    });
  }

  if (!moveRemainingToNextWeek || remainingAfterPayment <= 0) {
    await prisma.template.update({
      where: { id: template.id },
      data: {
        lastPaidAt: occurrenceDate,
      },
    });
  }

  revalidateFinanceViews();
  return { success: true };
}

export async function createTemplate(formData) {
  const name = formData.get("name");
  const amount = parseFloat(formData.get("amount"));
  const frequency = formData.get("frequency");
  const category = formData.get("category");
  const isAutoPay = formData.get("isAutoPay") === "on";
  const dayOfMonth = formData.get("dayOfMonth") ? parseInt(formData.get("dayOfMonth")) : null;

  let lastPaidAt = null;
  if (formData.get("lastPaidAt")) {
    lastPaidAt = new Date(formData.get("lastPaidAt"));
  }

  try {
    await prisma.template.create({
      data: {
        name,
        amount,
        frequency,
        category,
        isAutoPay,
        dayOfMonth,
        lastPaidAt,
      },
    });

    revalidatePath("/templates");
    revalidatePath("/calendar");
    return { success: true };
  } catch (error) {
    console.error("Error saving template to database:", error);
    return { success: false, error: "Failed to create template" };
  }
}

export async function deleteTemplate(id) {
  try {
    await prisma.template.delete({
      where: {
        id,
      },
    });
    revalidatePath("/templates");
    revalidatePath("/calendar");
    return { success: true };
  } catch (error) {
    console.error("Error deleting template:", error);
    return { success: false, error: "Failed to delete template" };
  }
}

export async function updateTemplate(id, formData) {
  const name = formData.get("name");
  const amount = parseFloat(formData.get("amount"));
  const frequency = formData.get("frequency");
  const category = formData.get("category");
  const isAutoPay = formData.get("isAutoPay") === "on";
  const dayOfMonth = formData.get("dayOfMonth") ? parseInt(formData.get("dayOfMonth")) : null;

  let lastPaidAt = null;
  if (formData.get("lastPaidAt")) {
    lastPaidAt = new Date(formData.get("lastPaidAt"));
  }

  try {
    await prisma.template.update({
      where: { id },
      data: {
        name,
        amount,
        frequency,
        category,
        isAutoPay,
        dayOfMonth,
        lastPaidAt,
      },
    });

    revalidatePath("/templates");
    revalidatePath("/calendar");
    return { success: true };
  } catch (error) {
    console.error("Error updating template:", error);
    return { success: false, error: "Failed to update template" };
  }
}

export async function markAsPaid(id) {
  try {
    const template = await prisma.template.findUnique({ where: { id } });
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const occurrenceDate = getNextTemplateOccurrence(template, new Date());
    if (!occurrenceDate) {
      throw new Error("No se pudo calcular la próxima ocurrencia del gasto");
    }

    const alreadyPaid = await prisma.history.findMany({
      where: {
        templateId: id,
        cycleReference: getTemplateCycleReference(template, occurrenceDate),
      },
    });
    const paidAmount = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);
    const outstandingAmount = Math.max(template.amount - paidAmount, 0);

    return await settleTemplateOccurrence({
      templateId: id,
      occurrenceDate,
      amountPaid: outstandingAmount,
      moveRemainingToNextWeek: false,
    });
  } catch (error) {
    console.error("Error marking template as paid:", error);
    return { success: false, error: "Failed to mark as paid" };
  }
}

export async function markWaterfallItemAsPaid(templateId, occurrenceDate) {
  try {
    const template = await prisma.template.findUnique({ where: { id: templateId } });
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const alreadyPaid = await prisma.history.findMany({
      where: {
        templateId,
        cycleReference: getTemplateCycleReference(template, occurrenceDate),
      },
    });
    const paidAmount = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);

    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: new Date(occurrenceDate),
      amountPaid: Math.max(template.amount - paidAmount, 0),
      moveRemainingToNextWeek: false,
    });
  } catch (error) {
    console.error("Error marking waterfall item as paid:", error);
    return { success: false, error: "Failed to mark waterfall item as paid" };
  }
}

export async function deferWaterfallItem(templateId, occurrenceDate, amountPaidInput) {
  try {
    const occurrence = new Date(occurrenceDate);
    const amountPaid = normalizeAmount(amountPaidInput);

    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: occurrence,
      amountPaid,
      moveRemainingToNextWeek: true,
    });
  } catch (error) {
    console.error("Error deferring waterfall item:", error);
    return { success: false, error: "Failed to defer waterfall item" };
  }
}

export async function moveWaterfallItemToNextWeek(templateId, occurrenceDate) {
  try {
    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: new Date(occurrenceDate),
      amountPaid: 0,
      moveRemainingToNextWeek: true,
    });
  } catch (error) {
    console.error("Error moving waterfall item to next week:", error);
    return { success: false, error: "Failed to move waterfall item to next week" };
  }
}
