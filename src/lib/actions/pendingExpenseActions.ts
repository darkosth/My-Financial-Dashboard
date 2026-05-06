"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { getMoneyAmount, validationFailure, type ActionResult } from "@/lib/actions/validation";
import { getMoneyUpdateData } from "@/lib/money";

export async function createPendingExpense(formData: FormData): Promise<ActionResult> {
  try {
    const amount = getMoneyAmount(formData, "amount", "Amount", { allowZero: false });
    const description = formData.get("description")?.toString().trim().slice(0, 160) || null;
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.pendingExpense.create({
      data: {
        ...getMoneyUpdateData(amount, "amountCents"),
        description,
        workspaceId: activeWorkspace.id,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error creating pending expense:", error);
    return validationFailure(error, "Failed to create pending expense");
  }
}

export async function deletePendingExpense(id: string): Promise<ActionResult> {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const expense = await prisma.pendingExpense.findFirst({
      where: { id, workspaceId: activeWorkspace.id },
    });

    if (!expense) {
      throw new Error("Pending expense not found");
    }

    await prisma.pendingExpense.delete({
      where: { id: expense.id },
    });

    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error deleting pending expense:", error);
    return { success: false, error: "Failed to delete pending expense" };
  }
}

export async function clearPendingExpenses(): Promise<ActionResult> {
  try {
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.pendingExpense.deleteMany({
      where: { workspaceId: activeWorkspace.id },
    });

    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error clearing pending expenses:", error);
    return { success: false, error: "Failed to clear pending expenses" };
  }
}

