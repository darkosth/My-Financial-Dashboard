import "server-only";

import prisma from "@/lib/prisma";
import { buildFinanceSnapshot } from "@/lib/financeEngine";

export async function loadFinanceData() {
  const appSettingsPromise = prisma.appSettings?.findUnique
    ? prisma.appSettings.findUnique({ where: { id: 1 } })
    : Promise.resolve(null);

  const [accounts, creditCards, templates, historyRecords, creditCardHistoryRecords, carryovers, pendingExpenses, appSettings] =
    await Promise.all([
      prisma.account.findMany({ orderBy: { createdAt: "asc" } }),
      prisma.creditCard.findMany({ orderBy: { createdAt: "asc" } }),
      prisma.template.findMany({ orderBy: { createdAt: "asc" } }),
      prisma.history.findMany({ orderBy: { datePaid: "desc" } }),
      prisma.creditCardPaymentHistory.findMany({ orderBy: { datePaid: "desc" } }),
      prisma.paymentCarryover.findMany(),
      prisma.pendingExpense.findMany({ orderBy: { createdAt: "desc" } }),
      appSettingsPromise,
    ]);

  return {
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
