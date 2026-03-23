"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPendingExpense(formData) {
  const amount = parseFloat(formData.get("amount"));
  const description = formData.get("description")?.trim() || null;

  if (!Number.isFinite(amount) || amount <= 0) {
    return { success: false, error: "Invalid amount" };
  }

  try {
    await prisma.pendingExpense.create({
      data: {
        amount,
        description,
      },
    });

    revalidatePath("/");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error creating pending expense:", error);
    return { success: false, error: "Failed to create pending expense" };
  }
}

export async function deletePendingExpense(id) {
  try {
    await prisma.pendingExpense.delete({
      where: { id },
    });

    revalidatePath("/");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error deleting pending expense:", error);
    return { success: false, error: "Failed to delete pending expense" };
  }
}

export async function clearPendingExpenses() {
  try {
    await prisma.pendingExpense.deleteMany();

    revalidatePath("/");
    revalidatePath("/calendar");
    revalidatePath("/unique-expenses");
    return { success: true };
  } catch (error) {
    console.error("Error clearing pending expenses:", error);
    return { success: false, error: "Failed to clear pending expenses" };
  }
}
