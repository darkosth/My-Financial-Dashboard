"use server";

import { revalidatePath } from "next/cache";
import { getPlaidItemIdForLocalEntity, syncPlaidItemById, unlinkPlaidEntity } from "@/lib/plaidSync";
import type { ActionResult } from "@/lib/actions/validation";

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
    console.error("Error refreshing Plaid sync:", error);
    return { success: false, error: "No se pudo actualizar el balance sincronizado." };
  }
}

export async function disconnectLinkedPlaidEntity(entityType: "account" | "credit-card", entityId: string): Promise<ActionResult> {
  try {
    await unlinkPlaidEntity({ entityType, entityId });
    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error disconnecting Plaid entity:", error);
    return { success: false, error: "No se pudo desvincular la cuenta del banco." };
  }
}
