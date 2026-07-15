"use server";

import { revalidatePath } from "next/cache";
import { getPlaidItemIdForLocalEntity, syncPlaidItemById, unlinkPlaidEntity } from "@/lib/plaidSync";
import type { ActionResult } from "@/lib/actions/validation";
import { FeatureAccessDeniedError } from "@/lib/featureAccess";

const logPlaidActionError = (action: string, error: unknown) => {
  const details =
    error instanceof Error
      ? {
          name: error.name,
          message: error.message,
        }
      : {
          message: String(error),
        };

  console.error(`${action}:`, details);
};

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
  revalidatePath("/settings");
};

export async function refreshLinkedPlaidEntity(entityType: "account" | "credit-card", entityId: string): Promise<ActionResult> {
  try {
    const plaidItemId = await getPlaidItemIdForLocalEntity({ entityType, entityId });

    if (!plaidItemId) {
      throw new Error("No linked Plaid item found");
    }

    await syncPlaidItemById(plaidItemId);
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    logPlaidActionError("Error refreshing Plaid sync", error);
    if (error instanceof FeatureAccessDeniedError) {
      return { success: false, error: "Plaid requiere acceso premium." };
    }
    return { success: false, error: "No se pudo actualizar el balance sincronizado." };
  }
}

export async function disconnectLinkedPlaidEntity(entityType: "account" | "credit-card", entityId: string): Promise<ActionResult> {
  try {
    await unlinkPlaidEntity({ entityType, entityId });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    logPlaidActionError("Error disconnecting Plaid entity", error);
    return { success: false, error: "No se pudo desvincular la cuenta del banco." };
  }
}
