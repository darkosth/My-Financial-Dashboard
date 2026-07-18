"use server";

import { LearningRecordKind } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { parseRequiredText, type ActionResult } from "@/lib/actions/validation";
import { assertCurrentFeatureAccess } from "@/lib/featureAccess";
import { LEARNING_LIQUIDITY_ACCOUNT_WHERE } from "@/lib/learningAccountPolicy";
import { getLearningExpenseCandidates, refreshLearningSuggestionsForWorkspace } from "@/lib/learningData";
import { learningTransactionWhere, readLearningTransaction, toLearningJson } from "@/lib/learningStore";
import { syncLearningTransactionsForWorkspace } from "@/lib/learningSync";
import { isLearningTransactionReviewable } from "@/lib/learningSyncPolicy";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";

type ReviewLearningInput = {
  plaidItemId: string;
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
    revalidatePath("/learning");
    return { success: true, data: result };
  } catch (error) {
    logLearningError("Failed to sync learning transactions:", error);
    return { success: false, error: "No se pudieron sincronizar las transacciones." };
  }
}

export async function reviewLearningTransactionAction({
  plaidItemId,
  selectedCycleReference,
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

    const reviewedAt = new Date().toISOString();
    if (!selectedTemplateId) {
      await prisma.learningRecord.update({
        where: { id: record.id },
        data: {
          payload: toLearningJson({
            ...transaction,
            review: {
              outcome: "IGNORED",
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
      const cycleReference = parseRequiredText(selectedCycleReference, "Cycle reference");
      const templates = await prisma.template.findMany({
        where: { id: templateId, workspaceId: activeWorkspace.id },
      });
      const candidates = getLearningExpenseCandidates(templates, transaction.authorizedDate ?? transaction.date);
      const selectedCandidate = candidates.find(
        (candidate) => candidate.templateId === templateId && candidate.cycleReference === cycleReference,
      );
      if (!selectedCandidate) throw new Error("Learning expense candidate not found");

      const confirmedSuggestion =
        transaction.suggestion?.templateId === templateId &&
        transaction.suggestion.cycleReference === cycleReference;

      await prisma.learningRecord.update({
        where: { id: record.id },
        data: {
          payload: toLearningJson({
            ...transaction,
            review: {
              outcome: confirmedSuggestion ? "CONFIRMED_SUGGESTION" : "MANUAL_SELECTION",
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
    revalidatePath("/learning");
    return { success: true };
  } catch (error) {
    logLearningError("Failed to review learning transaction:", error);
    return { success: false, error: "No se pudo guardar la revisión." };
  }
}
