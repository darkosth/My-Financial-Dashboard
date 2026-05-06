import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const ensureUserAccess = async (user) => {
  const dbUser = await prisma.user.upsert({
    where: { email: user.email },
    update: {
      name: user.name ?? undefined,
      image: user.image ?? undefined,
    },
    create: {
      email: user.email,
      name: user.name ?? null,
      image: user.image ?? null,
    },
  });

  let workspace = await prisma.workspace.findFirst({
    where: { ownerUserId: dbUser.id },
    orderBy: { createdAt: "asc" },
  });

  if (!workspace) {
    workspace = await prisma.workspace.create({
      data: {
        name: `${user.name?.trim() || user.email.split("@")[0]} Workspace`,
        ownerUserId: dbUser.id,
      },
    });
  }

  await prisma.workspaceMember.upsert({
    where: {
      userId_workspaceId: {
        userId: dbUser.id,
        workspaceId: workspace.id,
      },
    },
    update: {
      role: "OWNER",
    },
    create: {
      userId: dbUser.id,
      workspaceId: workspace.id,
      role: "OWNER",
    },
  });

  const preference = await prisma.userPreference.findUnique({
    where: { userId: dbUser.id },
  });

  if (!preference) {
    await prisma.userPreference.create({
      data: {
        userId: dbUser.id,
        activeWorkspaceId: workspace.id,
      },
    });
  } else if (!preference.activeWorkspaceId) {
    await prisma.userPreference.update({
      where: { userId: dbUser.id },
      data: { activeWorkspaceId: workspace.id },
    });
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
    error: "/",
  },
  providers: [Google],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      await ensureUserAccess(user);
      return true;
    },
  },
});
