"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DEFAULT_WEEKLY_INCOME } from "@/lib/financeEngine";

const revalidateFinanceViews = () => {
  revalidatePath("/");
  revalidatePath("/calendar");
};

export async function updateAppSettings(formData) {
  const weeklyIncome = Number.parseFloat(formData.get("weeklyIncome"));

  if (!Number.isFinite(weeklyIncome) || weeklyIncome < 0) {
    return { success: false, error: "Invalid weekly income" };
  }

  try {
    await prisma.appSettings.upsert({
      where: { id: 1 },
      update: { weeklyIncome },
      create: {
        id: 1,
        weeklyIncome,
      },
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating app settings:", error);
    return { success: false, error: "Failed to update app settings" };
  }
}

export async function getAppSettings() {
  const appSettings = await prisma.appSettings.findUnique({ where: { id: 1 } });

  return appSettings ?? {
    id: 1,
    weeklyIncome: DEFAULT_WEEKLY_INCOME,
  };
}
