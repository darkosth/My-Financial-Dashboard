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

export async function getCurrentUserContext() {
  const identity = await getSessionIdentity();

  if (!identity?.email) {
    throw new Error("Unauthorized");
  }

  return ensureUserWorkspaceAccess(identity);
}
