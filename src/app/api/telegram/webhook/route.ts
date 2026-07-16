import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";
import { hashTelegramLinkToken, parseTelegramStartCommand, secretsMatch } from "@/lib/telegramPolicy";
import prisma from "@/lib/prisma";

type TelegramUpdate = {
  update_id?: number;
  message?: {
    text?: string;
    chat?: { id?: number; type?: string };
    from?: { id?: number; is_bot?: boolean };
  };
};

class InvalidTelegramLinkError extends Error {}

export async function POST(request: Request) {
  const configuredSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const suppliedSecret = request.headers.get("x-telegram-bot-api-secret-token");

  if (!configuredSecret) {
    console.error("TELEGRAM_WEBHOOK_SECRET is not configured.");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  if (!secretsMatch(suppliedSecret, configuredSecret)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const update = (await request.json().catch(() => null)) as TelegramUpdate | null;
  const message = update?.message;
  const chatId = message?.chat?.id;
  const telegramUserId = message?.from?.id;
  const rawToken = parseTelegramStartCommand(message?.text);

  if (
    message?.chat?.type !== "private" ||
    message?.from?.is_bot ||
    !Number.isSafeInteger(chatId) ||
    !Number.isSafeInteger(telegramUserId) ||
    chatId !== telegramUserId ||
    !rawToken
  ) {
    return NextResponse.json({ ok: true });
  }

  const normalizedChatId = String(chatId);
  const normalizedTelegramUserId = String(telegramUserId);

  try {
    const outcome = await prisma.$transaction(async (tx) => {
      const now = new Date();
      const linkToken = await tx.telegramLinkToken.findUnique({
        where: { tokenHash: hashTelegramLinkToken(rawToken) },
        select: { consumedAt: true, id: true, userId: true },
      });

      if (!linkToken) throw new InvalidTelegramLinkError();
      if (linkToken.consumedAt) {
        const existingConnection = await tx.telegramConnection.findUnique({ where: { userId: linkToken.userId } });
        if (
          existingConnection?.chatId === normalizedChatId &&
          existingConnection.telegramUserId === normalizedTelegramUserId
        ) {
          return "replay" as const;
        }
        throw new InvalidTelegramLinkError();
      }

      const consumed = await tx.telegramLinkToken.updateMany({
        where: { id: linkToken.id, consumedAt: null, expiresAt: { gt: now } },
        data: { consumedAt: now },
      });
      if (consumed.count !== 1) throw new InvalidTelegramLinkError();

      const chatOwner = await tx.telegramConnection.findFirst({
        where: {
          OR: [{ chatId: normalizedChatId }, { telegramUserId: normalizedTelegramUserId }],
        },
        select: { userId: true },
      });
      if (chatOwner && chatOwner.userId !== linkToken.userId) {
        throw new InvalidTelegramLinkError();
      }

      await tx.telegramConnection.upsert({
        where: { userId: linkToken.userId },
        update: { chatId: normalizedChatId, telegramUserId: normalizedTelegramUserId },
        create: {
          userId: linkToken.userId,
          chatId: normalizedChatId,
          telegramUserId: normalizedTelegramUserId,
        },
      });
      return "linked" as const;
    });

    if (outcome === "linked") {
      await sendTelegramMessage(normalizedChatId, "<b>MyFinance conectado.</b> Ya puedes activar alertas por workspace en Settings.");
    }
  } catch (error) {
    if (!(error instanceof InvalidTelegramLinkError)) {
      console.error("Telegram webhook link failed:", error instanceof Error ? error.message : String(error));
    }
    await sendTelegramMessage(normalizedChatId, "Este enlace no es valido o ya expiro. Genera uno nuevo desde MyFinance.");
  }

  return NextResponse.json({ ok: true });
}
