import "server-only";

import type { User, UserPreference, Workspace, WorkspaceMember } from "@prisma/client";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export type SessionIdentity = {
  email: string;
  name: string | null;
  image: string | null;
};

export type CurrentUserContext = {
  user: User;
  memberships: WorkspaceMember[];
  preference: UserPreference;
  activeWorkspace: Workspace;
};

const getSessionIdentity = async (): Promise<SessionIdentity | null> => {
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

const buildDefaultWorkspaceName = (identity: SessionIdentity) => {
  const baseName = identity.name?.trim() || identity.email?.split("@")[0] || "Personal";
  return `${baseName} Workspace`;
};

async function ensureUserWorkspaceAccess(identity: SessionIdentity): Promise<CurrentUserContext> {
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

  if (!preference) {
    throw new Error("Failed to ensure user preference");
  }

  const memberships = await prisma.workspaceMember.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "asc" },
  });

  const activeWorkspaceId = preference.activeWorkspaceId;
  const activeMembership =
    memberships.find((membership) => membership.workspaceId === activeWorkspaceId) ?? memberships[0] ?? null;

  const activeWorkspace =
    activeMembership
      ? await prisma.workspace.findUnique({
          where: { id: activeMembership.workspaceId },
        })
      : null;

  if (activeMembership && activeWorkspaceId !== activeMembership.workspaceId) {
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

export async function getCurrentUserContext(): Promise<CurrentUserContext> {
  const identity = await getSessionIdentity();

  if (!identity?.email) {
    throw new Error("Unauthorized");
  }

  return ensureUserWorkspaceAccess(identity);
}
