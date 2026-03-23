import "server-only";

import prisma from "@/lib/prisma";
import { buildFinanceSnapshot } from "@/lib/financeEngine";
import { getCurrentUserContext } from "@/lib/workspaceContext";

export async function loadFinanceData() {
  const context = await getCurrentUserContext();
  const workspaceId = context.activeWorkspace.id;
  const appSettingsPromise = prisma.appSettings?.findFirst
    ? prisma.appSettings.findFirst({ where: { workspaceId } })
    : Promise.resolve(null);

  const [accounts, creditCards, templates, historyRecords, creditCardHistoryRecords, carryovers, pendingExpenses, appSettings] =
    await Promise.all([
      prisma.account.findMany({ where: { workspaceId }, orderBy: { createdAt: "asc" } }),
      prisma.creditCard.findMany({ where: { workspaceId }, orderBy: { createdAt: "asc" } }),
      prisma.template.findMany({ where: { workspaceId }, orderBy: { createdAt: "asc" } }),
      prisma.history.findMany({ where: { workspaceId }, orderBy: { datePaid: "desc" } }),
      prisma.creditCardPaymentHistory.findMany({ where: { workspaceId }, orderBy: { datePaid: "desc" } }),
      prisma.paymentCarryover.findMany({ where: { workspaceId } }),
      prisma.pendingExpense.findMany({ where: { workspaceId }, orderBy: { createdAt: "desc" } }),
      appSettingsPromise,
    ]);

  return {
    context,
    accounts,
    creditCards,
    templates,
    historyRecords,
    creditCardHistoryRecords,
    carryovers,
    pendingExpenses,
    appSettings,
  };
}

export async function loadFinanceSnapshot(today = new Date()) {
  const data = await loadFinanceData();
  return buildFinanceSnapshot(data, today);
}
