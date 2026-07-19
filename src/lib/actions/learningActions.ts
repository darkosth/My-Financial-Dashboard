"use server";

import { LearningRecordKind } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { parseRequiredText, type ActionResult } from "@/lib/actions/validation";
import { assertCurrentFeatureAccess } from "@/lib/featureAccess";
import { LEARNING_LIQUIDITY_ACCOUNT_WHERE } from "@/lib/learningAccountPolicy";
import { refreshLearningSuggestionsForWorkspace } from "@/lib/learningData";
import { getLearningCandidateForTransaction, getLearningPaymentCatalog } from "@/lib/learningMatcher";
import { learningTransactionWhere, readLearningTransaction, toLearningJson } from "@/lib/learningStore";
import { syncLearningTransactionsForWorkspace } from "@/lib/learningSync";
import { isLearningTransactionReviewable } from "@/lib/learningSyncPolicy";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";

type ReviewLearningInput = {
  plaidItemId: string;
  predictedTemplateId?: string | null;
  selectedCycleReference?: string | null;
  selectedTemplateId?: string | null;
  transactionId: string;
};

const logLearningError = (action: string, error: unknown) => {
  const response = typeof error === "object" && error !== null && "response" in error
    ? (error as {
        response?: {
          data?: {
            error_code?: unknown;
            error_type?: unknown;
            request_id?: unknown;
          };
          status?: unknown;
        };
      }).response
    : null;

  console.error(action, {
    errorCode: typeof response?.data?.error_code === "string" ? response.data.error_code : null,
    errorType: typeof response?.data?.error_type === "string" ? response.data.error_type : null,
    message: error instanceof Error ? error.message : String(error),
    requestId: typeof response?.data?.request_id === "string" ? response.data.request_id : null,
    status: typeof response?.status === "number" ? response.status : null,
  });
};

export async function syncLearningTransactionsAction(): Promise<ActionResult<Awaited<ReturnType<typeof syncLearningTransactionsForWorkspace>>>> {
  try {
    await assertCurrentFeatureAccess("PLAID");
    const { activeWorkspace } = await getCurrentUserContext();
    const result = await syncLearningTransactionsForWorkspace(activeWorkspace.id);
    await refreshLearningSuggestionsForWorkspace(activeWorkspace.id);
    revalidatePath("/dashboard");
    revalidatePath("/learning");
    return { success: true, data: result };
  } catch (error) {
    logLearningError("Failed to sync learning transactions:", error);
    return { success: false, error: "No se pudieron sincronizar las transacciones." };
  }
}

export async function reviewLearningTransactionAction({
  plaidItemId,
  predictedTemplateId,
  selectedTemplateId,
  transactionId,
}: ReviewLearningInput): Promise<ActionResult> {
  try {
    await assertCurrentFeatureAccess("PLAID");
    const { activeWorkspace, user } = await getCurrentUserContext();
    const validatedPlaidItemId = parseRequiredText(plaidItemId, "Plaid item id");
    const validatedTransactionId = parseRequiredText(transactionId, "Transaction id");
    const where = learningTransactionWhere(validatedPlaidItemId, validatedTransactionId);
    const record = await prisma.learningRecord.findUnique({ where });
    const transaction = record ? readLearningTransaction(record.payload) : null;
    if (!record || record.workspaceId !== activeWorkspace.id || record.kind !== LearningRecordKind.TRANSACTION || !transaction) {
      throw new Error("Learning transaction not found");
    }
    if (!isLearningTransactionReviewable(transaction)) {
      throw new Error("Learning transaction is not reviewable");
    }
    const liquidityAccount = await prisma.plaidRemoteAccount.findFirst({
      where: {
        ...LEARNING_LIQUIDITY_ACCOUNT_WHERE,
        plaidAccountId: transaction.accountId,
        workspaceId: activeWorkspace.id,
      },
      select: { id: true },
    });
    if (!liquidityAccount) throw new Error("Learning transaction is outside the liquidity account scope");
    const predictedTargetId = predictedTemplateId
      ? parseRequiredText(predictedTemplateId, "Predicted template id")
      : null;
    if (predictedTargetId) {
      const predictedCreditCardId = predictedTargetId.startsWith("credit-card:")
        ? predictedTargetId.slice("credit-card:".length)
        : null;
      const predictedTarget = predictedCreditCardId
        ? await prisma.creditCard.findFirst({
            where: { dueDate: { not: null }, id: predictedCreditCardId, workspaceId: activeWorkspace.id },
            select: { id: true },
          })
        : await prisma.template.findFirst({
            where: { id: predictedTargetId, workspaceId: activeWorkspace.id },
            select: { id: true },
          });
      if (!predictedTarget) throw new Error("Learning prediction target not found");
    }

    const reviewedAt = new Date().toISOString();
    if (!selectedTemplateId) {
      await prisma.learningRecord.update({
        where: { id: record.id },
        data: {
          payload: toLearningJson({
            ...transaction,
            review: {
              outcome: "IGNORED",
              rejectedTemplateId: predictedTargetId,
              reviewedAt,
              reviewedByUserId: user.id,
              selectedCycleReference: null,
              selectedTemplateId: null,
            },
          }),
        },
      });
    } else {
      const templateId = parseRequiredText(selectedTemplateId, "Template id");
      const creditCardId = templateId.startsWith("credit-card:")
        ? templateId.slice("credit-card:".length)
        : null;
      const [templates, creditCards] = await Promise.all([
        prisma.template.findMany({
          where: { id: templateId, workspaceId: activeWorkspace.id },
        }),
        prisma.creditCard.findMany({
          where: { id: creditCardId ?? "", workspaceId: activeWorkspace.id },
        }),
      ]);
      const selectedItem = getLearningPaymentCatalog({ creditCards, templates })
        .find((item) => item.targetId === templateId);
      if (!selectedItem) throw new Error("Learning payment option not found");
      const selectedCandidate = getLearningCandidateForTransaction(
        selectedItem,
        transaction.authorizedDate ?? transaction.date,
      );
      const cycleReference = selectedCandidate?.cycleReference ?? null;

      const confirmedSuggestion = predictedTargetId === templateId;

      await prisma.learningRecord.update({
        where: { id: record.id },
        data: {
          payload: toLearningJson({
            ...transaction,
            review: {
              outcome: confirmedSuggestion ? "CONFIRMED_SUGGESTION" : "MANUAL_SELECTION",
              rejectedTemplateId: null,
              reviewedAt,
              reviewedByUserId: user.id,
              selectedCycleReference: cycleReference,
              selectedTemplateId: templateId,
            },
          }),
        },
      });
    }

    await refreshLearningSuggestionsForWorkspace(activeWorkspace.id);
    revalidatePath("/dashboard");
    revalidatePath("/learning");
    return { success: true };
  } catch (error) {
    logLearningError("Failed to review learning transaction:", error);
    return { success: false, error: "No se pudo guardar la revisión." };
  }
}

export async function undoLearningTransactionReviewAction({
  plaidItemId,
  transactionId,
}: {
  plaidItemId: string;
  transactionId: string;
}): Promise<ActionResult> {
  try {
    await assertCurrentFeatureAccess("PLAID");
    const { activeWorkspace } = await getCurrentUserContext();
    const validatedPlaidItemId = parseRequiredText(plaidItemId, "Plaid item id");
    const validatedTransactionId = parseRequiredText(transactionId, "Transaction id");
    const where = learningTransactionWhere(validatedPlaidItemId, validatedTransactionId);
    const record = await prisma.learningRecord.findUnique({ where });
    const transaction = record ? readLearningTransaction(record.payload) : null;
    if (!record || record.workspaceId !== activeWorkspace.id || record.kind !== LearningRecordKind.TRANSACTION || !transaction) {
      throw new Error("Learning transaction not found");
    }
    const liquidityAccount = await prisma.plaidRemoteAccount.findFirst({
      where: {
        ...LEARNING_LIQUIDITY_ACCOUNT_WHERE,
        plaidAccountId: transaction.accountId,
        workspaceId: activeWorkspace.id,
      },
      select: { id: true },
    });
    if (!liquidityAccount) throw new Error("Learning transaction is outside the liquidity account scope");

    await prisma.learningRecord.update({
      where: { id: record.id },
      data: { payload: toLearningJson({ ...transaction, review: null }) },
    });
    await refreshLearningSuggestionsForWorkspace(activeWorkspace.id);
    revalidatePath("/dashboard");
    revalidatePath("/learning");
    return { success: true };
  } catch (error) {
    logLearningError("Failed to undo learning review:", error);
    return { success: false, error: "No se pudo deshacer la revisión." };
  }
}
