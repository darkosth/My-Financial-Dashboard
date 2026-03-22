"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 1. CREAR
export async function createCreditCard(formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  // Si no te pasan un pago mínimo, por defecto asume el 2% del balance o 0
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : (balance * 0.07);
  const dueDate = parseInt(formData.get("dueDate"));

  try {
    await prisma.creditCard.create({
      data: { name, balance, creditLimit, minimumPayment, dueDate },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error creating credit card:", error);
    return { success: false, error: "Failed to create credit card" };
  }
}

// 2. ACTUALIZAR
export async function updateCreditCard(id, formData) {
  const name = formData.get("name");
  const balance = parseFloat(formData.get("balance"));
  const creditLimit = parseFloat(formData.get("creditLimit"));
  const minimumPayment = formData.get("minimumPayment") ? parseFloat(formData.get("minimumPayment")) : (balance * 0.02);
  const dueDate = parseInt(formData.get("dueDate"));

  try {
    await prisma.creditCard.update({
      where: { id: id },
      data: { name, balance, creditLimit, minimumPayment, dueDate },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating credit card:", error);
    return { success: false, error: "Failed to update credit card" };
  }
}

// 3. ELIMINAR
export async function deleteCreditCard(id) {
  try {
    await prisma.creditCard.delete({
      where: { id: id },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting credit card:", error);
    return { success: false, error: "Failed to delete credit card" };
  }
}