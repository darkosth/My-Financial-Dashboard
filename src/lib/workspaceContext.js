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

const getWorkspaceDataScore = async (workspaceId) => {
  if (!workspaceId) {
    return 0;
  }

  const [
    accounts,
    creditCards,
    templates,
    historyRecords,
    creditCardHistoryRecords,
    pendingExpenses,
    carryovers,
  ] = await Promise.all([
    prisma.account.count({ where: { workspaceId } }),
    prisma.creditCard.count({ where: { workspaceId } }),
    prisma.template.count({ where: { workspaceId } }),
    prisma.history.count({ where: { workspaceId } }),
    prisma.creditCardPaymentHistory.count({ where: { workspaceId } }),
    prisma.pendingExpense.count({ where: { workspaceId } }),
    prisma.paymentCarryover.count({ where: { workspaceId } }),
  ]);

  return (
    accounts +
    creditCards +
    templates +
    historyRecords +
    creditCardHistoryRecords +
    pendingExpenses +
    carryovers
  );
};

const getPrimaryPopulatedWorkspace = async () => {
  const workspaces = await prisma.workspace.findMany({
    include: {
      owner: true,
    },
    orderBy: { createdAt: "asc" },
  });

  const scoredWorkspaces = await Promise.all(
    workspaces.map(async (workspace) => ({
      workspace,
      score: await getWorkspaceDataScore(workspace.id),
    })),
  );

  const populatedWorkspaces = scoredWorkspaces.filter(({ score }) => score > 0);

  if (populatedWorkspaces.length !== 1) {
    return null;
  }

  return populatedWorkspaces[0].workspace;
};

async function attachUserToLegacyWorkspaceIfNeeded(context, identity) {
  if (!context.activeWorkspace?.id) {
    return context;
  }

  const currentWorkspaceScore = await getWorkspaceDataScore(context.activeWorkspace.id);

  if (currentWorkspaceScore > 0) {
    return context;
  }

  const populatedWorkspace = await getPrimaryPopulatedWorkspace();

  if (!populatedWorkspace || populatedWorkspace.id === context.activeWorkspace.id) {
    return context;
  }

  const existingMembership = context.memberships.find(
    (membership) => membership.workspaceId === populatedWorkspace.id,
  );

  if (!existingMembership) {
    await prisma.workspaceMember.create({
      data: {
        userId: context.user.id,
        workspaceId: populatedWorkspace.id,
        role: "OWNER",
      },
    });
  }

  if (populatedWorkspace.owner?.email === E2E_USER.email) {
    await prisma.workspace.update({
      where: { id: populatedWorkspace.id },
      data: {
        ownerUserId: context.user.id,
        name: buildDefaultWorkspaceName(identity),
      },
    });
  }

  const updatedPreference = await prisma.userPreference.update({
    where: { userId: context.user.id },
    data: { activeWorkspaceId: populatedWorkspace.id },
  });

  const memberships = await prisma.workspaceMember.findMany({
    where: { userId: context.user.id },
    orderBy: { createdAt: "asc" },
  });

  const activeWorkspace = await prisma.workspace.findUnique({
    where: { id: populatedWorkspace.id },
  });

  return {
    ...context,
    memberships,
    preference: updatedPreference,
    activeWorkspace: activeWorkspace ?? populatedWorkspace,
  };
}

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
  await prisma.account.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.creditCard.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.template.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.history.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.creditCardPaymentHistory.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.pendingExpense.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

  await prisma.paymentCarryover.updateMany({
    where: { workspaceId: null },
    data: { workspaceId },
  });

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

  let context = await ensureUserWorkspaceAccess(identity);
  context = await attachUserToLegacyWorkspaceIfNeeded(context, identity);
  await migrateLegacyDataToWorkspace(context.activeWorkspace.id);

  return context;
}
