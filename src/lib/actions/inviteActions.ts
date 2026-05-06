"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/lib/actions/validation";

export type GenerateInviteTokenResult = ActionResult<{ token: string }> | ActionResult;

export async function generateInviteToken(workspaceId: string): Promise<{ success: true; token: string } | { success: false; error: string }> {
  try {
    const { user } = await getCurrentUserContext();
    const membership = await prisma.workspaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user.id,
          workspaceId,
        },
      },
    });

    if (!membership || membership.role !== "OWNER") {
      return { success: false, error: "Only the workspace owner can generate invite links." };
    }

    const token = crypto.randomUUID();

    await prisma.workspaceInvite.create({
      data: {
        token,
        workspaceId,
      },
    });

    return { success: true, token };
  } catch (error) {
    console.error("Error generating invite:", error);
    return { success: false, error: "Failed to generate invite link." };
  }
}

export async function acceptWorkspaceInvite(token: string): Promise<ActionResult> {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return { success: false, error: "You must sign in first." };
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return { success: false, error: "User not found." };
    }

    const invite = await prisma.workspaceInvite.findUnique({
      where: { token },
      include: { workspace: true },
    });

    if (!invite || !invite.active) {
      return { success: false, error: "The invite link is invalid or expired." };
    }

    const existingMember = await prisma.workspaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user.id,
          workspaceId: invite.workspaceId,
        },
      },
    });

    if (!existingMember) {
      await prisma.workspaceMember.create({
        data: {
          userId: user.id,
          workspaceId: invite.workspaceId,
          role: "MEMBER",
        },
      });
    }

    await prisma.userPreference.upsert({
      where: { userId: user.id },
      update: { activeWorkspaceId: invite.workspaceId },
      create: {
        userId: user.id,
        activeWorkspaceId: invite.workspaceId,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/settings");

    return { success: true };
  } catch (error) {
    console.error("Error accepting invite:", error);
    return { success: false, error: "Failed to process invite." };
  }
}

