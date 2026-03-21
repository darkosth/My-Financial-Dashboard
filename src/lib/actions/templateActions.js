"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTemplate(formData) {
  // 1. Extraemos los datos crudos que vienen del formulario HTML (formData) y los convertimos a los tipos de datos que queremos guardar en la base de datos.
  const name = formData.get("name");
  const amount = parseFloat(formData.get("amount"));
  const frequency = formData.get("frequency");
  const category = formData.get("category");
  const isAutoPay = formData.get("isAutoPay") === "on";
  const dayOfMonth = formData.get("dayOfMonth") ? parseInt(formData.get("dayOfMonth")) : null;
  
  let lastPaidAt = null;
  if (formData.get("lastPaidAt")) {
    lastPaidAt = new Date(formData.get("lastPaidAt"));
  }

  try {
    await prisma.template.create({
      data: {
        name,
        amount,
        frequency,
        category,
        isAutoPay,
        dayOfMonth,
        lastPaidAt,
      },
    });

    // Después de crear el nuevo template, le decimos a Next.js que vuelva a generar la página de templates para que muestre el nuevo template sin necesidad de recargar manualmente.
    revalidatePath("/templates");
    
    return { success: true };
    
  } catch (error) {
    console.error("Error saving template to database:", error);
    return { success: false, error: "Failed to create template" };
  }
}