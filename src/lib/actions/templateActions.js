"use server";

import { addDays, startOfDay } from "date-fns";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  getNextTemplateOccurrence,
  getProjectionWeekStart,
  getTemplateCycleReference,
} from "@/lib/waterfallCalculations";
import { normalizeCalendarDate, parseDateOnlyString } from "@/lib/calendarDate";
import { getCurrentUserContext } from "@/lib/workspaceContext";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/templates");
  revalidatePath("/calendar");
};

const normalizeAmount = (value) => {
  const amount = Number.parseFloat(value);
  return Number.isFinite(amount) ? amount : 0;
};

async function settleTemplateOccurrence({ templateId, occurrenceDate, amountPaid, moveRemainingToNextWeek = false }) {
  const { activeWorkspace } = await getCurrentUserContext();
  const template = await prisma.template.findFirst({
    where: { id: templateId, workspaceId: activeWorkspace.id },
  });

  if (!template) {
    throw new Error("Gasto no encontrado");
  }

  const normalizedOccurrenceDate = normalizeCalendarDate(occurrenceDate);
  if (!normalizedOccurrenceDate) {
    throw new Error("Fecha de ocurrencia invalida");
  }

  const cycleReference = getTemplateCycleReference(template, normalizedOccurrenceDate);
  const alreadyPaid = await prisma.history.findMany({
    where: {
      templateId,
      workspaceId: activeWorkspace.id,
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
        workspaceId: activeWorkspace.id,
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
        workspaceId: activeWorkspace.id,
        targetWeekStart: addDays(getProjectionWeekStart(normalizedOccurrenceDate), 7),
      },
      create: {
        templateId: template.id,
        workspaceId: activeWorkspace.id,
        originCycleReference: cycleReference,
        targetWeekStart: addDays(getProjectionWeekStart(normalizedOccurrenceDate), 7),
        remainingAmount: remainingAfterPayment,
      },
    });
  } else {
    await prisma.paymentCarryover.deleteMany({
      where: {
        templateId: template.id,
        workspaceId: activeWorkspace.id,
        originCycleReference: cycleReference,
      },
    });
  }

  if (remainingAfterPayment <= 0) {
    await prisma.template.update({
      where: { id: template.id },
      data: {
        lastPaidAt: normalizedOccurrenceDate,
      },
    });
  }

  revalidateFinanceViews();
  return { success: true };
}

async function settleCarryover({ carryoverId, amountPaid, moveRemainingToNextWeek = false }) {
  const { activeWorkspace } = await getCurrentUserContext();
  const carryover = await prisma.paymentCarryover.findFirst({
    where: { id: carryoverId, workspaceId: activeWorkspace.id },
  });

  if (!carryover) {
    throw new Error("Gasto movido no encontrado");
  }

  const template = await prisma.template.findFirst({
    where: { id: carryover.templateId, workspaceId: activeWorkspace.id },
  });

  if (!template) {
    throw new Error("Gasto no encontrado");
  }

  const alreadyPaid = await prisma.history.findMany({
    where: {
      templateId: template.id,
      workspaceId: activeWorkspace.id,
      cycleReference: carryover.originCycleReference,
    },
  });

  const paidAmountSoFar = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);
  const effectiveRemaining = Math.min(
    Math.max(carryover.remainingAmount ?? 0, 0),
    Math.max(template.amount - paidAmountSoFar, 0)
  );
  const remainingBeforeAction = effectiveRemaining;
  const safeAmountPaid = Math.min(Math.max(amountPaid, 0), remainingBeforeAction);
  const remainingAfterPayment = Math.max(remainingBeforeAction - safeAmountPaid, 0);

  if (remainingBeforeAction <= 0) {
    await prisma.paymentCarryover.delete({
      where: { id: carryover.id },
    });
    revalidateFinanceViews();
    return { success: true };
  }

  if (safeAmountPaid > 0) {
    await prisma.history.create({
      data: {
        templateId: template.id,
        amountPaid: safeAmountPaid,
        workspaceId: activeWorkspace.id,
        cycleReference: carryover.originCycleReference,
        datePaid: new Date(),
      },
    });
  }

  if (remainingAfterPayment <= 0) {
    await prisma.paymentCarryover.delete({
      where: { id: carryover.id },
    });
    revalidateFinanceViews();
    return { success: true };
  }

  if (moveRemainingToNextWeek) {
    await prisma.paymentCarryover.update({
      where: { id: carryover.id },
      data: {
        remainingAmount: remainingAfterPayment,
        targetWeekStart: addDays(startOfDay(new Date(carryover.targetWeekStart)), 7),
      },
    });
  } else {
    await prisma.paymentCarryover.update({
      where: { id: carryover.id },
      data: {
        remainingAmount: remainingAfterPayment,
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
    lastPaidAt = parseDateOnlyString(formData.get("lastPaidAt"));
  }

  try {
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.template.create({
      data: {
        name,
        amount,
        frequency,
        category,
        isAutoPay,
        workspaceId: activeWorkspace.id,
        dayOfMonth,
        lastPaidAt,
      },
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error saving template to database:", error);
    return { success: false, error: "Failed to create template" };
  }
}

export async function deleteTemplate(id) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const template = await prisma.template.findFirst({
      where: { id, workspaceId: activeWorkspace.id },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    await prisma.template.delete({
      where: {
        id: template.id,
      },
    });
    revalidateFinanceViews();
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
    lastPaidAt = parseDateOnlyString(formData.get("lastPaidAt"));
  }

  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const template = await prisma.template.findFirst({
      where: { id, workspaceId: activeWorkspace.id },
    });

    if (!template) {
      throw new Error("Template not found");
    }

    await prisma.template.update({
      where: { id: template.id },
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

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating template:", error);
    return { success: false, error: "Failed to update template" };
  }
}

export async function markAsPaid(id) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const template = await prisma.template.findFirst({ where: { id, workspaceId: activeWorkspace.id } });
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const occurrenceDate = getNextTemplateOccurrence(template, new Date());
    if (!occurrenceDate) {
      throw new Error("No se pudo calcular la proxima ocurrencia del gasto");
    }

    const alreadyPaid = await prisma.history.findMany({
      where: {
        templateId: id,
        workspaceId: activeWorkspace.id,
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
    const { activeWorkspace } = await getCurrentUserContext();
    const template = await prisma.template.findFirst({ where: { id: templateId, workspaceId: activeWorkspace.id } });
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const normalizedOccurrenceDate = normalizeCalendarDate(occurrenceDate);
    const alreadyPaid = await prisma.history.findMany({
      where: {
        templateId,
        workspaceId: activeWorkspace.id,
        cycleReference: getTemplateCycleReference(template, normalizedOccurrenceDate),
      },
    });
    const paidAmount = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);

    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: normalizedOccurrenceDate,
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
    const occurrence = normalizeCalendarDate(occurrenceDate);
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

export async function partiallyPayWaterfallItem(templateId, occurrenceDate, amountPaidInput) {
  try {
    const occurrence = normalizeCalendarDate(occurrenceDate);
    const amountPaid = normalizeAmount(amountPaidInput);

    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: occurrence,
      amountPaid,
      moveRemainingToNextWeek: false,
    });
  } catch (error) {
    console.error("Error partially paying waterfall item:", error);
    return { success: false, error: "Failed to partially pay waterfall item" };
  }
}

export async function moveWaterfallItemToNextWeek(templateId, occurrenceDate) {
  try {
    return await settleTemplateOccurrence({
      templateId,
      occurrenceDate: normalizeCalendarDate(occurrenceDate),
      amountPaid: 0,
      moveRemainingToNextWeek: true,
    });
  } catch (error) {
    console.error("Error moving waterfall item to next week:", error);
    return { success: false, error: "Failed to move waterfall item to next week" };
  }
}

export async function markCarryoverAsPaid(carryoverId, amountPaidInput = null) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const carryover = await prisma.paymentCarryover.findFirst({
      where: { id: carryoverId, workspaceId: activeWorkspace.id },
    });

    if (!carryover) {
      throw new Error("Gasto movido no encontrado");
    }

    const amountToPay =
      amountPaidInput == null ? carryover.remainingAmount : normalizeAmount(amountPaidInput);

    return await settleCarryover({
      carryoverId,
      amountPaid: amountToPay,
      moveRemainingToNextWeek: false,
    });
  } catch (error) {
    console.error("Error marking carryover as paid:", error);
    return { success: false, error: "Failed to mark carryover as paid" };
  }
}

export async function moveCarryoverToNextWeek(carryoverId, amountPaidInput = 0) {
  try {
    return await settleCarryover({
      carryoverId,
      amountPaid: normalizeAmount(amountPaidInput),
      moveRemainingToNextWeek: true,
    });
  } catch (error) {
    console.error("Error moving carryover to next week:", error);
    return { success: false, error: "Failed to move carryover to next week" };
  }
}
