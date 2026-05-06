"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { getMoneyAmount, getRequiredText, parseRequiredText, validationFailure } from "@/lib/actions/validation";
import { getMoneyUpdateData } from "@/lib/money";

// 1. CREAR
export async function createAccount(formData) {
  try {
    const name = getRequiredText(formData, "name", "Account name");
    const balance = getMoneyAmount(formData, "balance", "Balance");
    const { activeWorkspace } = await getCurrentUserContext();
    await prisma.account.create({
      data: { name, workspaceId: activeWorkspace.id, ...getMoneyUpdateData(balance, "balanceCents") },
    });
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error creating account:", error);
    return validationFailure(error, "Failed to create account");
  }
}

// 2. ACTUALIZAR
export async function updateAccount(id, formData) {
  try {
    const accountId = parseRequiredText(id, "Account id");
    const name = getRequiredText(formData, "name", "Account name");
    const balance = getMoneyAmount(formData, "balance", "Balance");
    const { activeWorkspace } = await getCurrentUserContext();
    const account = await prisma.account.findFirst({
      where: { id: accountId, workspaceId: activeWorkspace.id },
    });

    if (!account) {
      throw new Error("Account not found");
    }

    await prisma.account.update({
      where: { id: account.id },
      data: { name, ...getMoneyUpdateData(balance, "balanceCents") },
    });
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error updating account:", error);
    return validationFailure(error, "Failed to update account");
  }
}

// 3. ELIMINAR
export async function deleteAccount(id) {
  try {
    const accountId = parseRequiredText(id, "Account id");
    const { activeWorkspace } = await getCurrentUserContext();
    const account = await prisma.account.findFirst({
      where: { id: accountId, workspaceId: activeWorkspace.id },
    });

    if (!account) {
      throw new Error("Account not found");
    }

    await prisma.account.delete({
      where: { id: account.id },
    });
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error deleting account:", error);
    return { success: false, error: "Failed to delete account" };
  }
}
