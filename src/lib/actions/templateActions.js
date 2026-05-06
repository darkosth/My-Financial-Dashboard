"use server";

import { addDays, startOfDay } from "date-fns";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  getNextTemplateOccurrence,
  getProjectionWeekStart,
  getTemplateCycleReference,
} from "@/lib/waterfallCalculations";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import {
  getCategory,
  getDayOfMonth,
  getFrequency,
  getMoneyAmount,
  getOptionalDateOnly,
  getRequiredText,
  parseCalendarDate,
  parseMoneyAmount,
  parseRequiredText,
  validationFailure,
} from "@/lib/actions/validation";
import {
  getMoneyUpdateData,
  serializeHistoryRecord,
  serializePaymentCarryover,
  serializeTemplate,
} from "@/lib/money";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/templates");
  revalidatePath("/calendar");
};

const normalizeAmount = (value) => parseMoneyAmount(value ?? 0, "Paid amount");

async function settleTemplateOccurrence({ templateId, occurrenceDate, amountPaid, moveRemainingToNextWeek = false }) {
  const { activeWorkspace } = await getCurrentUserContext();
  const validatedTemplateId = parseRequiredText(templateId, "Template id");
  const templateRecord = await prisma.template.findFirst({
    where: { id: validatedTemplateId, workspaceId: activeWorkspace.id },
  });
  const template = templateRecord ? serializeTemplate(templateRecord) : null;

  if (!template) {
    throw new Error("Gasto no encontrado");
  }

  const normalizedOccurrenceDate = parseCalendarDate(occurrenceDate, "Occurrence date");

  const cycleReference = getTemplateCycleReference(template, normalizedOccurrenceDate);
  const alreadyPaidRecords = await prisma.history.findMany({
    where: {
      templateId: validatedTemplateId,
      workspaceId: activeWorkspace.id,
      cycleReference,
    },
  });
  const alreadyPaid = alreadyPaidRecords.map(serializeHistoryRecord);

  const paidAmountSoFar = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);
  const remainingBeforeAction = Math.max(template.amount - paidAmountSoFar, 0);
  const safeAmountPaid = Math.min(Math.max(amountPaid, 0), remainingBeforeAction);
  const remainingAfterPayment = Math.max(remainingBeforeAction - safeAmountPaid, 0);

  if (safeAmountPaid > 0) {
    await prisma.history.create({
      data: {
        templateId: template.id,
        ...getMoneyUpdateData(safeAmountPaid, "amountPaidCents"),
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
        ...getMoneyUpdateData(remainingAfterPayment, "remainingAmountCents"),
        workspaceId: activeWorkspace.id,
        targetWeekStart: addDays(getProjectionWeekStart(normalizedOccurrenceDate), 7),
      },
      create: {
        templateId: template.id,
        workspaceId: activeWorkspace.id,
        originCycleReference: cycleReference,
        targetWeekStart: addDays(getProjectionWeekStart(normalizedOccurrenceDate), 7),
        ...getMoneyUpdateData(remainingAfterPayment, "remainingAmountCents"),
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
  const validatedCarryoverId = parseRequiredText(carryoverId, "Carryover id");
  const carryoverRecord = await prisma.paymentCarryover.findFirst({
    where: { id: validatedCarryoverId, workspaceId: activeWorkspace.id },
  });
  const carryover = carryoverRecord ? serializePaymentCarryover(carryoverRecord) : null;

  if (!carryover) {
    throw new Error("Gasto movido no encontrado");
  }

  const templateRecord = await prisma.template.findFirst({
    where: { id: carryover.templateId, workspaceId: activeWorkspace.id },
  });
  const template = templateRecord ? serializeTemplate(templateRecord) : null;

  if (!template) {
    throw new Error("Gasto no encontrado");
  }

  const alreadyPaidRecords = await prisma.history.findMany({
    where: {
      templateId: template.id,
      workspaceId: activeWorkspace.id,
      cycleReference: carryover.originCycleReference,
    },
  });
  const alreadyPaid = alreadyPaidRecords.map(serializeHistoryRecord);

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
        ...getMoneyUpdateData(safeAmountPaid, "amountPaidCents"),
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
        ...getMoneyUpdateData(remainingAfterPayment, "remainingAmountCents"),
        targetWeekStart: addDays(startOfDay(new Date(carryover.targetWeekStart)), 7),
      },
    });
  } else {
    await prisma.paymentCarryover.update({
      where: { id: carryover.id },
      data: {
        ...getMoneyUpdateData(remainingAfterPayment, "remainingAmountCents"),
      },
    });
  }

  revalidateFinanceViews();
  return { success: true };
}

export async function createTemplate(formData) {
  try {
    const name = getRequiredText(formData, "name", "Template name");
    const amount = getMoneyAmount(formData, "amount", "Amount", { allowZero: false });
    const frequency = getFrequency(formData);
    const category = getCategory(formData);
    const isAutoPay = formData.get("isAutoPay") === "on";
    const dayOfMonth = getDayOfMonth(formData, "dayOfMonth", "Day of month", { optional: true });
    const lastPaidAt = getOptionalDateOnly(formData, "lastPaidAt", "Last paid at");

    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.template.create({
      data: {
        name,
        ...getMoneyUpdateData(amount, "amountCents"),
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
    return validationFailure(error, "Failed to create template");
  }
}

export async function deleteTemplate(id) {
  try {
    const templateId = parseRequiredText(id, "Template id");
    const { activeWorkspace } = await getCurrentUserContext();
    const template = await prisma.template.findFirst({
      where: { id: templateId, workspaceId: activeWorkspace.id },
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
  try {
    const name = getRequiredText(formData, "name", "Template name");
    const amount = getMoneyAmount(formData, "amount", "Amount", { allowZero: false });
    const frequency = getFrequency(formData);
    const category = getCategory(formData);
    const isAutoPay = formData.get("isAutoPay") === "on";
    const dayOfMonth = getDayOfMonth(formData, "dayOfMonth", "Day of month", { optional: true });
    const lastPaidAt = getOptionalDateOnly(formData, "lastPaidAt", "Last paid at");

    const { activeWorkspace } = await getCurrentUserContext();
    const templateId = parseRequiredText(id, "Template id");
    const templateRecord = await prisma.template.findFirst({
      where: { id: templateId, workspaceId: activeWorkspace.id },
    });
    const template = templateRecord ? serializeTemplate(templateRecord) : null;

    if (!template) {
      throw new Error("Template not found");
    }

    await prisma.template.update({
      where: { id: template.id },
      data: {
        name,
        ...getMoneyUpdateData(amount, "amountCents"),
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
    return validationFailure(error, "Failed to update template");
  }
}

export async function markAsPaid(id) {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const templateId = parseRequiredText(id, "Template id");
    const templateRecord = await prisma.template.findFirst({ where: { id: templateId, workspaceId: activeWorkspace.id } });
    const template = templateRecord ? serializeTemplate(templateRecord) : null;
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const occurrenceDate = getNextTemplateOccurrence(template, new Date());
    if (!occurrenceDate) {
      throw new Error("No se pudo calcular la proxima ocurrencia del gasto");
    }

    const alreadyPaidRecords = await prisma.history.findMany({
      where: {
        templateId,
        workspaceId: activeWorkspace.id,
        cycleReference: getTemplateCycleReference(template, occurrenceDate),
      },
    });
    const alreadyPaid = alreadyPaidRecords.map(serializeHistoryRecord);
    const paidAmount = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);
    const outstandingAmount = Math.max(template.amount - paidAmount, 0);

    return await settleTemplateOccurrence({
      templateId,
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
    const validatedTemplateId = parseRequiredText(templateId, "Template id");
    const templateRecord = await prisma.template.findFirst({ where: { id: validatedTemplateId, workspaceId: activeWorkspace.id } });
    const template = templateRecord ? serializeTemplate(templateRecord) : null;
    if (!template) {
      throw new Error("Gasto no encontrado");
    }

    const normalizedOccurrenceDate = parseCalendarDate(occurrenceDate, "Occurrence date");
    const alreadyPaidRecords = await prisma.history.findMany({
      where: {
        templateId: validatedTemplateId,
        workspaceId: activeWorkspace.id,
        cycleReference: getTemplateCycleReference(template, normalizedOccurrenceDate),
      },
    });
    const alreadyPaid = alreadyPaidRecords.map(serializeHistoryRecord);
    const paidAmount = alreadyPaid.reduce((acc, record) => acc + record.amountPaid, 0);

    return await settleTemplateOccurrence({
      templateId: validatedTemplateId,
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
    const validatedTemplateId = parseRequiredText(templateId, "Template id");
    const occurrence = parseCalendarDate(occurrenceDate, "Occurrence date");
    const amountPaid = normalizeAmount(amountPaidInput);

    return await settleTemplateOccurrence({
      templateId: validatedTemplateId,
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
    const validatedTemplateId = parseRequiredText(templateId, "Template id");
    const occurrence = parseCalendarDate(occurrenceDate, "Occurrence date");
    const amountPaid = normalizeAmount(amountPaidInput);

    return await settleTemplateOccurrence({
      templateId: validatedTemplateId,
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
    const validatedTemplateId = parseRequiredText(templateId, "Template id");
    return await settleTemplateOccurrence({
      templateId: validatedTemplateId,
      occurrenceDate: parseCalendarDate(occurrenceDate, "Occurrence date"),
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
    const validatedCarryoverId = parseRequiredText(carryoverId, "Carryover id");
    const { activeWorkspace } = await getCurrentUserContext();
    const carryoverRecord = await prisma.paymentCarryover.findFirst({
      where: { id: validatedCarryoverId, workspaceId: activeWorkspace.id },
    });
    const carryover = carryoverRecord ? serializePaymentCarryover(carryoverRecord) : null;

    if (!carryover) {
      throw new Error("Gasto movido no encontrado");
    }

    const amountToPay =
      amountPaidInput == null ? carryover.remainingAmount : normalizeAmount(amountPaidInput);

    return await settleCarryover({
      carryoverId: validatedCarryoverId,
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
      carryoverId: parseRequiredText(carryoverId, "Carryover id"),
      amountPaid: normalizeAmount(amountPaidInput),
      moveRemainingToNextWeek: true,
    });
  } catch (error) {
    console.error("Error moving carryover to next week:", error);
    return { success: false, error: "Failed to move carryover to next week" };
  }
}
