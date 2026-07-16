"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/lib/actions/validation";
import { getTelegramBotUsername } from "@/lib/telegram";
import { hashTelegramLinkToken } from "@/lib/telegramPolicy";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";

const LINK_TTL_MS = 10 * 60 * 1000;

export async function createTelegramLink(): Promise<ActionResult<{ url: string }>> {
  try {
    const botUsername = getTelegramBotUsername();
    if (!botUsername) {
      return { success: false, error: "Telegram no esta configurado todavia." };
    }

    const { user } = await getCurrentUserContext();
    const rawToken = randomBytes(32).toString("base64url");
    const now = new Date();

    await prisma.$transaction([
      prisma.telegramLinkToken.deleteMany({
        where: { userId: user.id },
      }),
      prisma.telegramLinkToken.create({
        data: {
          userId: user.id,
          tokenHash: hashTelegramLinkToken(rawToken),
          expiresAt: new Date(now.getTime() + LINK_TTL_MS),
        },
      }),
    ]);

    return {
      success: true,
      data: { url: `https://t.me/${botUsername}?start=${rawToken}` },
    };
  } catch (error) {
    console.error("Failed to create Telegram link:", error instanceof Error ? error.message : String(error));
    return { success: false, error: "No se pudo iniciar la conexion con Telegram." };
  }
}

export async function setTelegramNotificationsEnabled(enabled: boolean): Promise<ActionResult> {
  try {
    const { user, activeWorkspace, memberships } = await getCurrentUserContext();
    const membership = memberships.find((item) => item.workspaceId === activeWorkspace.id);
    if (!membership) {
      return { success: false, error: "No perteneces a este workspace." };
    }

    if (enabled) {
      const connection = await prisma.telegramConnection.findUnique({ where: { userId: user.id } });
      if (!connection) {
        return { success: false, error: "Conecta Telegram antes de activar las alertas." };
      }
    }

    await prisma.telegramNotificationPreference.upsert({
      where: { workspaceMemberId: membership.id },
      update: { enabled },
      create: { workspaceMemberId: membership.id, enabled },
    });
    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Failed to update Telegram preference:", error instanceof Error ? error.message : String(error));
    return { success: false, error: "No se pudo actualizar la preferencia de Telegram." };
  }
}

export async function disconnectTelegram(): Promise<ActionResult> {
  try {
    const { user } = await getCurrentUserContext();
    await prisma.$transaction([
      prisma.telegramConnection.deleteMany({ where: { userId: user.id } }),
      prisma.telegramLinkToken.deleteMany({ where: { userId: user.id } }),
      prisma.telegramNotificationPreference.updateMany({
        where: { workspaceMember: { userId: user.id } },
        data: { enabled: false },
      }),
    ]);
    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Failed to disconnect Telegram:", error instanceof Error ? error.message : String(error));
    return { success: false, error: "No se pudo desconectar Telegram." };
  }
}
