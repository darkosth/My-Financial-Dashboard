import "server-only";

import prisma from "@/lib/prisma";
import { buildFinanceSnapshot } from "@/lib/financeEngine";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import {
  serializeAccount,
  serializeAppSettings,
  serializeCreditCard,
  serializeHistoryRecord,
  serializePaymentCarryover,
  serializePendingExpense,
  serializeTemplate,
} from "@/lib/money";

export async function loadFinanceData() {
  const context = await getCurrentUserContext();
  const workspaceId = context.activeWorkspace.id;
  const appSettingsPromise = prisma.appSettings?.findFirst
    ? prisma.appSettings.findFirst({ where: { workspaceId } })
    : Promise.resolve(null);

  const [accounts, creditCards, templates, historyRecords, creditCardHistoryRecords, carryovers, pendingExpenses, appSettings] =
    await Promise.all([
      prisma.account.findMany({
        where: { workspaceId },
        include: {
          plaidRemoteAccount: {
            include: {
              item: {
                select: {
                  id: true,
                  institutionName: true,
                  status: true,
                  lastSyncedAt: true,
                },
              },
            },
          },
        },
        orderBy: { createdAt: "asc" },
      }),
      prisma.creditCard.findMany({
        where: { workspaceId },
        include: {
          plaidRemoteAccount: {
            include: {
              item: {
                select: {
                  id: true,
                  institutionName: true,
                  status: true,
                  lastSyncedAt: true,
                },
              },
            },
          },
        },
        orderBy: { createdAt: "asc" },
      }),
      prisma.template.findMany({ where: { workspaceId }, orderBy: { createdAt: "asc" } }),
      prisma.history.findMany({ where: { workspaceId }, orderBy: { datePaid: "desc" } }),
      prisma.creditCardPaymentHistory.findMany({ where: { workspaceId }, orderBy: { datePaid: "desc" } }),
      prisma.paymentCarryover.findMany({ where: { workspaceId } }),
      prisma.pendingExpense.findMany({ where: { workspaceId }, orderBy: { createdAt: "desc" } }),
      appSettingsPromise,
    ]);

  return {
    context,
    accounts: accounts.map(serializeAccount),
    creditCards: creditCards.map(serializeCreditCard),
    templates: templates.map(serializeTemplate),
    historyRecords: historyRecords.map(serializeHistoryRecord),
    creditCardHistoryRecords: creditCardHistoryRecords.map(serializeHistoryRecord),
    carryovers: carryovers.map(serializePaymentCarryover),
    pendingExpenses: pendingExpenses.map(serializePendingExpense),
    appSettings: appSettings ? serializeAppSettings(appSettings) : null,
  };
}

export async function loadFinanceSnapshot(today: Date = new Date()) {
  const data = await loadFinanceData();
  return buildFinanceSnapshot(data, today);
}
