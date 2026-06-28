"use server";

import prisma from "@/lib/prisma";
import { DataSource, type Prisma } from "@prisma/client";
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
  type ActionResult,
} from "@/lib/actions/validation";

type DbClient = Prisma.TransactionClient;

const withAdvisoryLock = async <T>(lockKey: string, fn: (tx: DbClient) => Promise<T>): Promise<T> =>
  prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${lockKey}))`;
    return fn(tx);
  });

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
};

export async function createCreditCard(formData: FormData): Promise<ActionResult> {
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

export async function updateCreditCard(id: string, formData: FormData): Promise<ActionResult> {
  try {
    const creditCardId = parseRequiredText(id, "Credit card id");
    const name = getRequiredText(formData, "name", "Credit card name");
    const { activeWorkspace } = await getCurrentUserContext();
    const creditCardRecord = await prisma.creditCard.findFirst({
      where: { id: creditCardId, workspaceId: activeWorkspace.id },
      include: {
        plaidRemoteAccount: true,
      },
    });
    const creditCard = creditCardRecord ? serializeCreditCard(creditCardRecord) : null;

    if (!creditCard) {
      throw new Error("Credit card not found");
    }

    const canEditPlaidCreditLimit =
      creditCardRecord?.source === DataSource.PLAID && creditCardRecord.plaidRemoteAccount?.creditLimitCents == null;

    await prisma.creditCard.update({
      where: { id: creditCard.id },
      data:
        creditCardRecord?.source === DataSource.PLAID
          ? {
              name,
              ...(canEditPlaidCreditLimit
                ? {
                    ...getMoneyUpdateData(
                      getOptionalMoneyAmount(formData, "creditLimit", "Credit limit", 0) ?? 0,
                      "creditLimitCents",
                    ),
                  }
                : {}),
              ...getMoneyUpdateData(
                getOptionalMoneyAmount(formData, "minimumPayment", "Minimum payment", creditCard.minimumPayment ?? 0) ?? 0,
                "minimumPaymentCents",
              ),
              minimumPaymentPercentage: getOptionalPercentage(formData, "minimumPaymentPercentage", "Minimum payment percentage"),
              apr: getOptionalPercentage(formData, "apr", "APR"),
              dueDate: getDayOfMonth(formData, "dueDate", "Due date", { optional: true }),
              lastReviewedAt: new Date(),
            }
          : {
              name,
              ...getMoneyUpdateData(getMoneyAmount(formData, "balance", "Balance"), "balanceCents"),
              ...getMoneyUpdateData(getMoneyAmount(formData, "creditLimit", "Credit limit"), "creditLimitCents"),
              ...getMoneyUpdateData(
                getOptionalMoneyAmount(formData, "minimumPayment", "Minimum payment", creditCard.balance * 0.02),
                "minimumPaymentCents",
              ),
              minimumPaymentPercentage: getOptionalPercentage(formData, "minimumPaymentPercentage", "Minimum payment percentage"),
              apr: getOptionalPercentage(formData, "apr", "APR"),
              dueDate: getDayOfMonth(formData, "dueDate", "Due date"),
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

export async function deleteCreditCard(id: string): Promise<ActionResult> {
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

export async function markCreditCardAsPaid(creditCardId: string, occurrenceDateInput: unknown = null): Promise<ActionResult> {
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
      name: creditCard.name,
    };
    const occurrenceDate =
      occurrenceDateInput ? parseCalendarDate(occurrenceDateInput, "Settlement date") : getNextTemplateOccurrence(scheduledItem, new Date());

    if (!occurrenceDate) {
      throw new Error("Could not calculate credit card payment occurrence");
    }

    const cycleReference = getTemplateCycleReference(scheduledItem, occurrenceDate);
    const cycleKey = cycleReference.toISOString();
    await withAdvisoryLock(`credit-card:${activeWorkspace.id}:${validatedCreditCardId}:${cycleKey}`, async (tx) => {
      const previousPayments = await tx.creditCardPaymentHistory.findMany({
        where: {
          creditCardId: validatedCreditCardId,
          workspaceId: activeWorkspace.id,
          cycleReference,
        },
      });
      const alreadyPaid = previousPayments.map(serializeHistoryRecord).reduce((acc, item) => acc + item.amountPaid, 0);
      const pendingAmount = Math.max(minimumPayment - alreadyPaid, 0);

      if (pendingAmount <= 0) {
        return;
      }

      await tx.creditCardPaymentHistory.create({
        data: {
          creditCardId: validatedCreditCardId,
          ...getMoneyUpdateData(pendingAmount, "amountPaidCents"),
          workspaceId: activeWorkspace.id,
          cycleReference,
          datePaid: new Date(),
        },
      });
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error marking credit card payment as paid:", error);
    return { success: false, error: "Failed to mark credit card payment as paid" };
  }
}
