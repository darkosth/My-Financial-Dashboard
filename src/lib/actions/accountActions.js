"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 1. CREAR
export async function createAccount(formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));

  try {
    await prisma.account.create({
      data: { name, balance },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error creating account:", error);
    return { success: false, error: "Failed to create account" };
  }
}

// 2. ACTUALIZAR
export async function updateAccount(id, formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));

  try {
    await prisma.account.update({
      where: { id: id },
      data: { name, balance },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating account:", error);
    return { success: false, error: "Failed to update account" };
  }
}

// 3. ELIMINAR
export async function deleteAccount(id) {
  try {
    await prisma.account.delete({
      where: { id: id },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting account:", error);
    return { success: false, error: "Failed to delete account" };
  }
}