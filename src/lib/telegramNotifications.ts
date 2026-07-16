import "server-only";

import { Prisma, TelegramDeliveryStatus, TelegramNotificationKind } from "@prisma/client";
import { getScheduledPayments } from "@/lib/financeEngine";
import {
  serializeCreditCard,
  serializeHistoryRecord,
  serializePaymentCarryover,
  serializeTemplate,
} from "@/lib/money";
import prisma from "@/lib/prisma";
import { sendTelegramMessage } from "@/lib/telegram";
import { collectTelegramNotificationCandidates, type TelegramNotificationCandidate } from "@/lib/telegramNotificationPolicy";
import { buildTelegramDeliveryKey, escapeTelegramHtml } from "@/lib/telegramPolicy";

const newYorkDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const getNewYorkToday = (now: Date) => {
  const parts = newYorkDateFormatter.formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  return new Date(Date.UTC(year, month - 1, day, 12));
};

const loadWorkspaceCandidates = async (workspaceId: string, now: Date) => {
  const [creditCards, templates, historyRecords, creditCardHistoryRecords, carryovers] = await Promise.all([
    prisma.creditCard.findMany({ where: { workspaceId } }),
    prisma.template.findMany({ where: { workspaceId } }),
    prisma.history.findMany({ where: { workspaceId } }),
    prisma.creditCardPaymentHistory.findMany({ where: { workspaceId } }),
    prisma.paymentCarryover.findMany({ where: { workspaceId } }),
  ]);
  const scheduledPayments = getScheduledPayments({
    creditCards: creditCards.map(serializeCreditCard),
    templates: templates.map(serializeTemplate),
  });

  return collectTelegramNotificationCandidates({
    scheduledPayments,
    historyRecords: historyRecords.map(serializeHistoryRecord),
    creditCardHistoryRecords: creditCardHistoryRecords.map(serializeHistoryRecord),
    carryovers: carryovers.map(serializePaymentCarryover),
    today: getNewYorkToday(now),
  });
};

const claimDelivery = async (preferenceId: string, candidate: TelegramNotificationCandidate) => {
  const dedupeKey = buildTelegramDeliveryKey({
    eventId: candidate.eventId,
    kind: candidate.kind,
    leadDays: candidate.leadDays,
    occurrenceDateKey: candidate.occurrenceDateKey,
    preferenceId,
  });

  try {
    return await prisma.telegramNotificationDelivery.create({
      data: {
        preferenceId,
        kind: candidate.kind as TelegramNotificationKind,
        eventId: candidate.eventId,
        occurrenceDate: candidate.occurrenceDate,
        leadDays: candidate.leadDays,
        dedupeKey,
      },
      select: { id: true },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return null;
    }
    throw error;
  }
};

const buildMessage = (workspaceName: string, candidates: TelegramNotificationCandidate[]) => {
  const lines = candidates.map((candidate) => {
    const dueLabel = candidate.leadDays === 0 ? "vence hoy" : "vence manana";
    const kindLabel = candidate.kind === "CREDIT_CARD" ? "Tarjeta" : candidate.kind === "CARRYOVER" ? "Pendiente movido" : "Pago";
    return `<b>${escapeTelegramHtml(candidate.name)}</b>\n${kindLabel} · ${dueLabel} · ${currencyFormatter.format(candidate.amount)}`;
  });

  return `<b>MyFinance · ${escapeTelegramHtml(workspaceName)}</b>\n\n${lines.join("\n\n")}\n\nRevisa el dashboard antes de pagar.`;
};

export const sendDueTelegramNotifications = async (now = new Date()) => {
  const preferences = await prisma.telegramNotificationPreference.findMany({
    where: { enabled: true },
    include: {
      workspaceMember: {
        include: {
          user: { include: { telegramConnection: true } },
          workspace: { select: { id: true, name: true } },
        },
      },
    },
  });
  const candidatesByWorkspace = new Map<string, Promise<TelegramNotificationCandidate[]>>();
  const summary = { failed: 0, sent: 0, skipped: 0 };

  for (const preference of preferences) {
    const connection = preference.workspaceMember.user.telegramConnection;
    if (!connection) {
      summary.skipped += 1;
      continue;
    }

    const workspace = preference.workspaceMember.workspace;
    if (!candidatesByWorkspace.has(workspace.id)) {
      candidatesByWorkspace.set(workspace.id, loadWorkspaceCandidates(workspace.id, now));
    }
    const candidates = await candidatesByWorkspace.get(workspace.id)!;
    const claimed: Array<{ candidate: TelegramNotificationCandidate; deliveryId: string }> = [];

    for (const candidate of candidates) {
      const delivery = await claimDelivery(preference.id, candidate);
      if (delivery) claimed.push({ candidate, deliveryId: delivery.id });
      else summary.skipped += 1;
    }
    if (claimed.length === 0) continue;

    const deliveryIds = claimed.map((item) => item.deliveryId);
    const currentPreference = await prisma.telegramNotificationPreference.findFirst({
      where: {
        id: preference.id,
        enabled: true,
        workspaceMember: {
          userId: preference.workspaceMember.userId,
          workspaceId: workspace.id,
        },
      },
      include: {
        workspaceMember: { include: { user: { include: { telegramConnection: true } } } },
      },
    });
    const currentConnection = currentPreference?.workspaceMember.user.telegramConnection;
    if (!currentConnection) {
      await prisma.telegramNotificationDelivery.deleteMany({ where: { id: { in: deliveryIds } } });
      summary.skipped += claimed.length;
      continue;
    }

    const result = await sendTelegramMessage(currentConnection.chatId, buildMessage(workspace.name, claimed.map((item) => item.candidate)));
    const attemptedAt = new Date();

    if (result.success) {
      await prisma.telegramNotificationDelivery.updateMany({
        where: { id: { in: deliveryIds } },
        data: {
          status: TelegramDeliveryStatus.SENT,
          attempts: { increment: 1 },
          lastAttemptAt: attemptedAt,
          sentAt: attemptedAt,
          lastErrorCode: null,
        },
      });
      summary.sent += claimed.length;
    } else {
      await prisma.telegramNotificationDelivery.updateMany({
        where: { id: { in: deliveryIds } },
        data: {
          status: TelegramDeliveryStatus.FAILED,
          attempts: { increment: 1 },
          lastAttemptAt: attemptedAt,
          lastErrorCode: result.code,
        },
      });
      summary.failed += claimed.length;
    }
  }

  return summary;
};
