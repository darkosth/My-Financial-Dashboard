import "server-only";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

const getSessionIdentity = async () => {
  const session = await auth();

  if (session?.user?.email) {
    return {
      email: session.user.email,
      name: session.user.name ?? null,
      image: session.user.image ?? null,
    };
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

async function detectLegacyWorkspaceData() {
  const legacyFinds = await Promise.all([
    prisma.account.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.creditCard.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.template.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.history.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.creditCardPaymentHistory.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.pendingExpense.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.paymentCarryover.findFirst({ where: { workspaceId: null }, select: { id: true } }),
    prisma.appSettings?.findFirst
      ? prisma.appSettings.findFirst({ where: { workspaceId: null }, select: { id: true } })
      : Promise.resolve(null),
  ]);

  const tables = [
    "accounts",
    "credit_cards",
    "templates",
    "history_records",
    "credit_card_payment_history",
    "pending_expenses",
    "payment_carryovers",
    "app_settings",
  ].filter((_, index) => legacyFinds[index]);

  return {
    hasLegacyRows: tables.length > 0,
    tables,
  };
}

export async function getCurrentUserContext() {
  const identity = await getSessionIdentity();

  if (!identity?.email) {
    throw new Error("Unauthorized");
  }

  const context = await ensureUserWorkspaceAccess(identity);
  const legacyWorkspaceData = await detectLegacyWorkspaceData();

  if (legacyWorkspaceData.hasLegacyRows) {
    console.warn("Legacy rows without workspaceId detected. Run an explicit backfill before enforcing workspaceId.", legacyWorkspaceData.tables);
  }

  return {
    ...context,
    legacyWorkspaceData,
  };
}
