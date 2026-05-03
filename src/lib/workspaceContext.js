import "server-only";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { DEFAULT_WEEKLY_INCOME } from "@/lib/financeEngine";

const isE2ETestMode = process.env.E2E_TEST_MODE === "1";
const E2E_WORKSPACE_ID = "__e2e_workspace__";
const E2E_USER = {
  id: "__e2e_user__",
  email: "e2e@example.com",
  name: "E2E User",
  image: null,
};

const getSessionIdentity = async () => {
  const session = await auth();

  if (session?.user?.email) {
    return {
      email: session.user.email,
      name: session.user.name ?? null,
      image: session.user.image ?? null,
    };
  }

  if (isE2ETestMode) {
    return E2E_USER;
  }

  return null;
};

const buildDefaultWorkspaceName = (identity) => {
  const baseName = identity.name?.trim() || identity.email?.split("@")[0] || "Personal";
  return `${baseName} Workspace`;
};

async function ensureUserWorkspaceAccess(identity) {
  const user = await prisma.user.upsert({
    where: { email: identity.email },
    update: {
      name: identity.name ?? undefined,
      image: identity.image ?? undefined,
    },
    create: {
      email: identity.email,
      name: identity.name,
      image: identity.image,
    },
  });

  let ownedWorkspace = await prisma.workspace.findFirst({
    where: { ownerUserId: user.id },
    orderBy: { createdAt: "asc" },
  });

  // Si el usuario es nuevo, le creamos su propio espacio privado por defecto
  if (!ownedWorkspace) {
    ownedWorkspace = await prisma.workspace.create({
      data: {
        name: buildDefaultWorkspaceName(identity),
        ownerUserId: user.id,
      },
    });
  }

  await prisma.workspaceMember.upsert({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId: ownedWorkspace.id,
      },
    },
    update: {
      role: "OWNER",
    },
    create: {
      userId: user.id,
      workspaceId: ownedWorkspace.id,
      role: "OWNER",
    },
  });

  let preference = await prisma.userPreference.findUnique({
    where: { userId: user.id },
  });

  if (!preference) {
    preference = await prisma.userPreference.create({
      data: {
        userId: user.id,
        activeWorkspaceId: ownedWorkspace.id,
      },
    });
  } else if (!preference.activeWorkspaceId) {
    preference = await prisma.userPreference.update({
      where: { userId: user.id },
      data: { activeWorkspaceId: ownedWorkspace.id },
    });
  }

  const memberships = await prisma.workspaceMember.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "asc" },
  });

  const activeMembership =
    memberships.find((membership) => membership.workspaceId === preference.activeWorkspaceId) ?? memberships[0] ?? null;

  const activeWorkspace =
    activeMembership
      ? await prisma.workspace.findUnique({
          where: { id: activeMembership.workspaceId },
        })
      : null;

  if (activeMembership && preference.activeWorkspaceId !== activeMembership.workspaceId) {
    preference = await prisma.userPreference.update({
      where: { userId: user.id },
      data: { activeWorkspaceId: activeMembership.workspaceId },
    });
  }

  return {
    user,
    memberships,
    preference,
    activeWorkspace: activeWorkspace ?? ownedWorkspace,
  };
}

async function migrateLegacyDataToWorkspace(workspaceId) {
  await prisma.account.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.creditCard.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.template.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.history.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.creditCardPaymentHistory.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.pendingExpense.updateMany({ where: { workspaceId: null }, data: { workspaceId } });
  await prisma.paymentCarryover.updateMany({ where: { workspaceId: null }, data: { workspaceId } });

  const existingLegacySettings = prisma.appSettings?.findFirst
    ? await prisma.appSettings.findFirst({
        where: { workspaceId: null },
        orderBy: { createdAt: "asc" },
      })
    : null;

  if (existingLegacySettings) {
    await prisma.appSettings.update({
      where: { id: existingLegacySettings.id },
      data: { workspaceId },
    });
  } else if (prisma.appSettings?.findFirst) {
    const workspaceSettings = await prisma.appSettings.findFirst({
      where: { workspaceId },
    });

    if (!workspaceSettings) {
      await prisma.appSettings.create({
        data: {
          workspaceId,
          weeklyIncome: DEFAULT_WEEKLY_INCOME,
        },
      });
    }
  }
}

export async function getCurrentUserContext() {
  if (isE2ETestMode) {
    return {
      user: E2E_USER,
      memberships: [],
      preference: {
        id: "__e2e_preference__",
        userId: E2E_USER.id,
        activeWorkspaceId: E2E_WORKSPACE_ID,
      },
      activeWorkspace: {
        id: E2E_WORKSPACE_ID,
        name: "E2E Workspace",
        ownerUserId: E2E_USER.id,
      },
    };
  }

  const identity = await getSessionIdentity();

  if (!identity?.email) {
    throw new Error("Unauthorized");
  }

  // 1. Aseguramos que el usuario exista y tenga su propio espacio privado
  const context = await ensureUserWorkspaceAccess(identity);
  
  // 2. Revisamos si hay datos huérfanos viejos (solo por seguridad)
  await migrateLegacyDataToWorkspace(context.activeWorkspace.id);

  return context;
}