"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DEFAULT_WEEKLY_INCOME } from "@/lib/financeEngine";
import { getCurrentUserContext } from "@/lib/workspaceContext";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
  revalidatePath("/settings"); // Agregamos la nueva ruta para que se refresque al guardar
};

// ==========================================
// FUNCIONES ORIGINALES (INTACTAS)
// ==========================================

export async function updateAppSettings(formData) {
  const weeklyIncome = Number.parseFloat(formData.get("weeklyIncome"));

  if (!Number.isFinite(weeklyIncome) || weeklyIncome < 0) {
    return { success: false, error: "Invalid weekly income" };
  }

  try {
    const { activeWorkspace } = await getCurrentUserContext();
    const existingSettings = await prisma.appSettings.findFirst({
      where: { workspaceId: activeWorkspace.id },
    });

    if (existingSettings) {
      await prisma.appSettings.update({
        where: { id: existingSettings.id },
        data: { weeklyIncome },
      });
    } else {
      await prisma.appSettings.create({
        data: {
          workspaceId: activeWorkspace.id,
          weeklyIncome,
        },
      });
    }

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating app settings:", error);
    return { success: false, error: "Failed to update app settings" };
  }
}

export async function getAppSettings() {
  const { activeWorkspace } = await getCurrentUserContext();
  const appSettings = prisma.appSettings?.findFirst
    ? await prisma.appSettings.findFirst({
        where: { workspaceId: activeWorkspace.id },
      })
    : null;

  return appSettings ?? {
    id: 1,
    workspaceId: activeWorkspace.id,
    weeklyIncome: DEFAULT_WEEKLY_INCOME,
  };
}

// ==========================================
// NUEVA FUNCIÓN PARA LA PÁGINA SETTINGS
// ==========================================

export async function updateWeeklyIncome(workspaceId, newIncome) {
  const weeklyIncome = Number.parseFloat(newIncome);

  if (!Number.isFinite(weeklyIncome) || weeklyIncome < 0) {
    return { success: false, error: "Invalid weekly income" };
  }

  try {
    const existingSettings = await prisma.appSettings.findFirst({
      where: { workspaceId: workspaceId },
    });

    if (existingSettings) {
      await prisma.appSettings.update({
        where: { id: existingSettings.id },
        data: { weeklyIncome },
      });
    } else {
      await prisma.appSettings.create({
        data: {
          workspaceId: workspaceId,
          weeklyIncome,
        },
      });
    }

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating weekly income:", error);
    return { success: false, error: "Failed to update income" };
  }
}