"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DEFAULT_WEEKLY_INCOME } from "@/lib/financeEngine";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { parseMoneyAmount, parseRequiredText, validationFailure } from "@/lib/actions/validation";
import { getMoneyUpdateData, serializeAppSettings } from "@/lib/money";

const revalidateFinanceViews = () => {
  revalidatePath("/dashboard");
  revalidatePath("/calendar");
  revalidatePath("/settings");
};

const getWorkspaceMembership = async (userId, workspaceId) =>
  prisma.workspaceMember.findUnique({
    where: {
      userId_workspaceId: {
        userId,
        workspaceId,
      },
    },
  });

const parseWeeklyIncome = (value) => parseMoneyAmount(value, "Weekly income");

// ==========================================
// FUNCIONES ORIGINALES (INTACTAS)
// ==========================================

export async function updateAppSettings(formData) {
  try {
    const weeklyIncome = parseWeeklyIncome(formData.get("weeklyIncome"));
    const { activeWorkspace } = await getCurrentUserContext();
    const existingSettings = await prisma.appSettings.findFirst({
      where: { workspaceId: activeWorkspace.id },
    });

    if (existingSettings) {
      await prisma.appSettings.update({
        where: { id: existingSettings.id },
        data: getMoneyUpdateData(weeklyIncome, "weeklyIncomeCents"),
      });
    } else {
      await prisma.appSettings.create({
        data: {
          workspaceId: activeWorkspace.id,
          ...getMoneyUpdateData(weeklyIncome, "weeklyIncomeCents"),
        },
      });
    }

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating app settings:", error);
    return validationFailure(error, "Failed to update app settings");
  }
}

export async function getAppSettings() {
  const { activeWorkspace } = await getCurrentUserContext();
  const appSettings = prisma.appSettings?.findFirst
    ? await prisma.appSettings.findFirst({
        where: { workspaceId: activeWorkspace.id },
      })
    : null;

  return appSettings ? serializeAppSettings(appSettings) : {
    id: 1,
    workspaceId: activeWorkspace.id,
    weeklyIncome: DEFAULT_WEEKLY_INCOME,
  };
}

// ==========================================
// NUEVA FUNCIÓN PARA LA PÁGINA SETTINGS
// ==========================================

export async function updateWeeklyIncome(workspaceId, newIncome) {
  try {
    const validatedWorkspaceId = parseRequiredText(workspaceId, "Workspace id");
    const weeklyIncome = parseWeeklyIncome(newIncome);
    const { user } = await getCurrentUserContext();
    const membership = await getWorkspaceMembership(user.id, validatedWorkspaceId);

    if (!membership) {
      return { success: false, error: "You do not have access to this workspace." };
    }

    const existingSettings = await prisma.appSettings.findFirst({
      where: { workspaceId: validatedWorkspaceId },
    });

    if (existingSettings) {
      await prisma.appSettings.update({
        where: { id: existingSettings.id },
        data: getMoneyUpdateData(weeklyIncome, "weeklyIncomeCents"),
      });
    } else {
      await prisma.appSettings.create({
        data: {
          workspaceId: validatedWorkspaceId,
          ...getMoneyUpdateData(weeklyIncome, "weeklyIncomeCents"),
        },
      });
    }

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error updating weekly income:", error);
    return validationFailure(error, "Failed to update income");
  }
}

export async function switchActiveWorkspace(workspaceId) {
  try {
    const validatedWorkspaceId = parseRequiredText(workspaceId, "Workspace id");
    const { user } = await getCurrentUserContext();
    const membership = await getWorkspaceMembership(user.id, validatedWorkspaceId);

    if (!membership) {
      return { success: false, error: "You do not belong to that workspace." };
    }

    await prisma.userPreference.upsert({
      where: { userId: user.id },
      update: { activeWorkspaceId: validatedWorkspaceId },
      create: {
        userId: user.id,
        activeWorkspaceId: validatedWorkspaceId,
      },
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error switching workspace:", error);
    return { success: false, error: "Failed to switch workspace." };
  }
}

export async function removeWorkspaceMember(memberId) {
  try {
    const validatedMemberId = parseRequiredText(memberId, "Member id");
    const { user, activeWorkspace } = await getCurrentUserContext();
    const currentMembership = await getWorkspaceMembership(user.id, activeWorkspace.id);

    if (!currentMembership || currentMembership.role !== "OWNER") {
      return { success: false, error: "Only the workspace owner can remove members." };
    }

    const targetMembership = await prisma.workspaceMember.findUnique({
      where: { id: validatedMemberId },
      include: {
        user: true,
      },
    });

    if (!targetMembership || targetMembership.workspaceId !== activeWorkspace.id) {
      return { success: false, error: "Member not found in this workspace." };
    }

    if (targetMembership.role === "OWNER" || targetMembership.userId === user.id) {
      return { success: false, error: "The workspace owner cannot be removed." };
    }

    const fallbackMembership = await prisma.workspaceMember.findFirst({
      where: {
        userId: targetMembership.userId,
        workspaceId: {
          not: activeWorkspace.id,
        },
      },
      orderBy: { createdAt: "asc" },
    });

    await prisma.workspaceMember.delete({
      where: { id: validatedMemberId },
    });

    await prisma.userPreference.upsert({
      where: { userId: targetMembership.userId },
      update: {
        activeWorkspaceId: fallbackMembership?.workspaceId ?? null,
      },
      create: {
        userId: targetMembership.userId,
        activeWorkspaceId: fallbackMembership?.workspaceId ?? null,
      },
    });

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error removing workspace member:", error);
    return { success: false, error: "Failed to remove workspace member." };
  }
}

export async function leaveWorkspace(workspaceId) {
  try {
    const validatedWorkspaceId = parseRequiredText(workspaceId, "Workspace id");
    const { user, activeWorkspace } = await getCurrentUserContext();
    const membership = await getWorkspaceMembership(user.id, validatedWorkspaceId);

    if (!membership) {
      return { success: false, error: "You do not belong to that workspace." };
    }

    if (membership.role === "OWNER") {
      return { success: false, error: "Owners cannot leave their own workspace." };
    }

    const fallbackMembership = await prisma.workspaceMember.findFirst({
      where: {
        userId: user.id,
        workspaceId: {
          not: validatedWorkspaceId,
        },
      },
      orderBy: { createdAt: "asc" },
    });

    if (!fallbackMembership) {
      return { success: false, error: "You need at least one workspace to continue." };
    }

    await prisma.workspaceMember.delete({
      where: { id: membership.id },
    });

    if (activeWorkspace.id === validatedWorkspaceId) {
      await prisma.userPreference.upsert({
        where: { userId: user.id },
        update: { activeWorkspaceId: fallbackMembership.workspaceId },
        create: {
          userId: user.id,
          activeWorkspaceId: fallbackMembership.workspaceId,
        },
      });
    }

    revalidateFinanceViews();
    return { success: true };
  } catch (error) {
    console.error("Error leaving workspace:", error);
    return { success: false, error: "Failed to leave workspace." };
  }
}
