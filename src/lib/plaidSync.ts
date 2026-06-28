import "server-only";

import {
  DataSource,
  PlaidImportTargetKind,
  PlaidItemStatus,
  PlaidSyncStatus,
  Prisma,
  type PlaidRemoteAccount,
} from "@prisma/client";
import { CountryCode } from "plaid";
import prisma from "@/lib/prisma";
import { amountToCents, centsToAmount } from "@/lib/money";
import {
  buildPlaidDisplayName,
  buildLinkTokenRequest,
  decryptPlaidAccessToken,
  encryptPlaidAccessToken,
  extractBalanceAccounts,
  getPlaidClient,
  getPlaidInstitutionName,
  mapPlaidAccountKind,
} from "@/lib/plaid";
import { getCurrentUserContext } from "@/lib/workspaceContext";

type DbClient = Prisma.TransactionClient;
type PlaidBalanceAccount = ReturnType<typeof extractBalanceAccounts>[number];

type PlaidApiError = {
  response?: {
    data?: {
      error_code?: string;
      error_message?: string;
    };
  };
};

type SyncSummary = {
  updatedAccounts: number;
  updatedCreditCards: number;
  status: PlaidItemStatus;
};

export type PlaidReviewAccount = {
  id: string;
  name: string;
  officialName: string | null;
  institutionName: string | null;
  mask: string | null;
  kind: "DEPOSITORY" | "CREDIT" | "LOAN" | "INVESTMENT" | "OTHER";
  subtype: string | null;
  currentBalance: number | null;
  availableBalance: number | null;
  creditLimit: number | null;
  isSupported: boolean;
  isImported: boolean;
};

const withPlaidItemLock = async <T>(lockKey: string, fn: (tx: DbClient) => Promise<T>): Promise<T> =>
  prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${lockKey}))`;
    return fn(tx);
  });

const getErrorDetails = (error: unknown) => {
  const plaidError = error as PlaidApiError;
  return {
    code: plaidError?.response?.data?.error_code ?? null,
    message: plaidError?.response?.data?.error_message ?? (error instanceof Error ? error.message : "Unknown Plaid error"),
  };
};

const resolveItemStatusFromError = (errorCode: string | null) => {
  if (errorCode === "ITEM_LOGIN_REQUIRED" || errorCode === "PENDING_DISCONNECT" || errorCode === "PENDING_EXPIRATION") {
    return PlaidItemStatus.NEEDS_REAUTH;
  }

  return PlaidItemStatus.ACTIVE;
};

const serializeReviewAccount = (remote: PlaidRemoteAccount & { item: { institutionName: string | null } }): PlaidReviewAccount => ({
  id: remote.id,
  name: remote.name,
  officialName: remote.officialName,
  institutionName: remote.item.institutionName,
  mask: remote.mask,
  kind: remote.kind,
  subtype: remote.subtype,
  currentBalance: remote.currentBalanceCents == null ? null : centsToAmount(remote.currentBalanceCents),
  availableBalance: remote.availableBalanceCents == null ? null : centsToAmount(remote.availableBalanceCents),
  creditLimit: remote.creditLimitCents == null ? null : centsToAmount(remote.creditLimitCents),
  isSupported: remote.kind === "DEPOSITORY" || remote.kind === "CREDIT",
  isImported: remote.isImported,
});

const buildRemoteAccountUpsertPayload = ({
  workspaceId,
  plaidItemId,
  institutionName,
  account,
}: {
  workspaceId: string;
  plaidItemId: string;
  institutionName: string | null;
  account: PlaidBalanceAccount;
}) => ({
  workspaceId,
  plaidItemId,
  plaidAccountId: account.account_id,
  kind: mapPlaidAccountKind(account.type),
  subtype: account.subtype ?? null,
  name: buildPlaidDisplayName({
    institutionName,
    remoteName: account.name,
    officialName: account.official_name,
    mask: account.mask,
  }),
  officialName: account.official_name ?? null,
  mask: account.mask ?? null,
  isoCurrencyCode: account.balances.iso_currency_code ?? account.balances.unofficial_currency_code ?? null,
  currentBalanceCents: amountToCents(account.balances.current ?? 0),
  availableBalanceCents: account.balances.available == null ? null : amountToCents(account.balances.available),
  creditLimitCents: account.balances.limit == null ? null : amountToCents(account.balances.limit),
  lastSyncedAt: new Date(),
});

type PlaidItemSnapshot = {
  accounts: PlaidBalanceAccount[];
  institutionId: string | null;
  institutionName: string | null;
};

const fetchPlaidItemSnapshot = async ({
  accessTokenCiphertext,
}: {
  accessTokenCiphertext: string;
}): Promise<PlaidItemSnapshot> => {
  const client = getPlaidClient();
  const accessToken = decryptPlaidAccessToken(accessTokenCiphertext);
  const balanceResponse = await client.accountsBalanceGet({
    access_token: accessToken,
  });
  const institutionId = balanceResponse.data.item.institution_id;
  const institution =
    institutionId
      ? await client
          .institutionsGetById({
            institution_id: institutionId,
            country_codes: [CountryCode.Us],
          })
          .catch(() => null)
      : null;
  return {
    accounts: extractBalanceAccounts(balanceResponse.data),
    institutionId: institutionId ?? null,
    institutionName: getPlaidInstitutionName(institution?.data?.institution),
  };
};

const persistPlaidItemSnapshot = async ({
  tx,
  plaidItemId,
  workspaceId,
  snapshot,
}: {
  tx: DbClient;
  plaidItemId: string;
  workspaceId: string;
  snapshot: PlaidItemSnapshot;
}) => {
  await tx.plaidItem.update({
    where: { id: plaidItemId },
    data: {
      institutionId: snapshot.institutionId,
      institutionName: snapshot.institutionName,
    },
  });

  for (const account of snapshot.accounts) {
    const payload = buildRemoteAccountUpsertPayload({
      workspaceId,
      plaidItemId,
      institutionName: snapshot.institutionName,
      account,
    });

    const remoteAccount = await tx.plaidRemoteAccount.upsert({
      where: { plaidAccountId: payload.plaidAccountId },
      create: payload,
      update: payload,
    });

    if (remoteAccount.importedAccountId) {
      await tx.account.update({
        where: { id: remoteAccount.importedAccountId },
        data: {
          balanceCents: payload.availableBalanceCents ?? payload.currentBalanceCents ?? 0,
        },
      });
    }

    if (remoteAccount.importedCreditCardId) {
      await tx.creditCard.update({
        where: { id: remoteAccount.importedCreditCardId },
        data: {
          balanceCents: payload.currentBalanceCents ?? 0,
          ...(payload.creditLimitCents == null ? {} : { creditLimitCents: payload.creditLimitCents }),
        },
      });
    }
  }
};

export const createPlaidLinkToken = async ({
  plaidItemId,
  requireExistingItem = false,
}: {
  plaidItemId?: string;
  requireExistingItem?: boolean;
} = {}) => {
  const { user, activeWorkspace } = await getCurrentUserContext();
  const client = getPlaidClient();
  const existingItem =
    plaidItemId
      ? await prisma.plaidItem.findFirst({
          where: { id: plaidItemId, workspaceId: activeWorkspace.id },
        })
      : null;

  if (plaidItemId && requireExistingItem && !existingItem) {
    throw new Error("No linked bank item was found to reconnect.");
  }

  const accessToken =
    existingItem?.accessTokenCiphertext != null ? decryptPlaidAccessToken(existingItem.accessTokenCiphertext) : undefined;
  const response = await client.linkTokenCreate(
    buildLinkTokenRequest({
      clientUserId: `${user.id}:${activeWorkspace.id}`,
      accessToken,
      webhook: process.env.PLAID_WEBHOOK_URL?.trim() || undefined,
    }),
  );

  return {
    linkToken: response.data.link_token,
    mode: accessToken ? ("update" as const) : ("connect" as const),
  };
};

export const connectPlaidItem = async ({ publicToken }: { publicToken: string }) => {
  const { activeWorkspace } = await getCurrentUserContext();
  const client = getPlaidClient();
  const exchange = await client.itemPublicTokenExchange({
    public_token: publicToken,
  });
  const encryptedAccessToken = encryptPlaidAccessToken(exchange.data.access_token);
  const existingItem = await prisma.plaidItem.findUnique({
    where: { plaidItemId: exchange.data.item_id },
  });

  if (existingItem && existingItem.workspaceId !== activeWorkspace.id) {
    throw new Error("This bank connection belongs to a different workspace.");
  }

  const item = await prisma.plaidItem.upsert({
    where: { plaidItemId: exchange.data.item_id },
    create: {
      workspaceId: activeWorkspace.id,
      plaidItemId: exchange.data.item_id,
      accessTokenCiphertext: encryptedAccessToken,
      status: PlaidItemStatus.ACTIVE,
    },
    update: {
      workspaceId: activeWorkspace.id,
      accessTokenCiphertext: encryptedAccessToken,
      status: PlaidItemStatus.ACTIVE,
      lastSyncStatus: PlaidSyncStatus.PENDING,
      lastSyncErrorCode: null,
      lastSyncErrorMessage: null,
    },
  });

  try {
    const snapshot = await fetchPlaidItemSnapshot({
      accessTokenCiphertext: encryptedAccessToken,
    });

    await withPlaidItemLock(`plaid-item:${item.id}`, async (tx) => {
      await persistPlaidItemSnapshot({
        tx,
        plaidItemId: item.id,
        workspaceId: activeWorkspace.id,
        snapshot,
      });
      await tx.plaidItem.update({
        where: { id: item.id },
        data: {
          status: PlaidItemStatus.ACTIVE,
          lastSyncStatus: PlaidSyncStatus.OK,
          lastSyncedAt: new Date(),
          lastSyncErrorCode: null,
          lastSyncErrorMessage: null,
        },
      });
    });
  } catch (error) {
    const { code, message } = getErrorDetails(error);
    const status = resolveItemStatusFromError(code);

    await prisma.plaidItem.update({
      where: { id: item.id },
      data: {
        status,
        lastSyncStatus: PlaidSyncStatus.ERROR,
        lastSyncErrorCode: code,
        lastSyncErrorMessage: message,
      },
    });

    throw error;
  }

  const remotes = await prisma.plaidRemoteAccount.findMany({
    where: { plaidItemId: item.id },
    include: {
      item: {
        select: {
          institutionName: true,
        },
      },
    },
    orderBy: [{ kind: "asc" }, { name: "asc" }],
  });

  return {
    plaidItemId: item.id,
    accounts: remotes.map(serializeReviewAccount),
  };
};

export const importPlaidAccounts = async ({ remoteAccountIds }: { remoteAccountIds: string[] }) => {
  const { activeWorkspace } = await getCurrentUserContext();
  const uniqueIds = [...new Set(remoteAccountIds)];

  if (!uniqueIds.length) {
    throw new Error("No accounts selected for import");
  }

  return prisma.$transaction(async (tx) => {
    const remotes = await tx.plaidRemoteAccount.findMany({
      where: {
        id: { in: uniqueIds },
        workspaceId: activeWorkspace.id,
      },
      orderBy: { createdAt: "asc" },
    });

    let accountsImported = 0;
    let creditCardsImported = 0;

    for (const remote of remotes) {
      if (remote.isImported || (remote.kind !== "DEPOSITORY" && remote.kind !== "CREDIT")) {
        continue;
      }

      const plaidItem = await tx.plaidItem.findFirst({
        where: {
          id: remote.plaidItemId,
          workspaceId: activeWorkspace.id,
        },
        select: { id: true },
      });

      if (!plaidItem) {
        throw new Error("Plaid item workspace mismatch.");
      }

      if (remote.kind === "DEPOSITORY") {
        const account = await tx.account.create({
          data: {
            workspaceId: activeWorkspace.id,
            name: remote.name,
            balanceCents: remote.availableBalanceCents ?? remote.currentBalanceCents ?? 0,
            source: DataSource.PLAID,
          },
        });

        await tx.plaidRemoteAccount.update({
          where: { id: remote.id },
          data: {
            isImported: true,
            importTargetKind: PlaidImportTargetKind.ACCOUNT,
            importedAccountId: account.id,
            lastSyncedAt: new Date(),
          },
        });

        accountsImported += 1;
        continue;
      }

      const creditCard = await tx.creditCard.create({
        data: {
          workspaceId: activeWorkspace.id,
          name: remote.name,
          balanceCents: remote.currentBalanceCents ?? 0,
          creditLimitCents: remote.creditLimitCents ?? 0,
          source: DataSource.PLAID,
          dueDate: null,
          lastReviewedAt: null,
        },
      });

      await tx.plaidRemoteAccount.update({
        where: { id: remote.id },
        data: {
          isImported: true,
          importTargetKind: PlaidImportTargetKind.CREDIT_CARD,
          importedCreditCardId: creditCard.id,
          lastSyncedAt: new Date(),
        },
      });

      creditCardsImported += 1;
    }

    return {
      accountsImported,
      creditCardsImported,
    };
  });
};

export const syncPlaidItemById = async (plaidItemId: string): Promise<SyncSummary> => {
  const { activeWorkspace } = await getCurrentUserContext();
  const item = await prisma.plaidItem.findFirst({
    where: {
      id: plaidItemId,
      workspaceId: activeWorkspace.id,
    },
  });

  if (!item) {
    throw new Error("Plaid item not found");
  }

  if (!item.accessTokenCiphertext) {
    await prisma.plaidItem.update({
      where: { id: item.id },
      data: {
        status: PlaidItemStatus.DISCONNECTED,
        lastSyncStatus: PlaidSyncStatus.ERROR,
        lastSyncErrorCode: "DISCONNECTED",
        lastSyncErrorMessage: "This bank connection has been disconnected.",
      },
    });

    return {
      updatedAccounts: 0,
      updatedCreditCards: 0,
      status: PlaidItemStatus.DISCONNECTED,
    };
  }

  try {
    const snapshot = await fetchPlaidItemSnapshot({
      accessTokenCiphertext: item.accessTokenCiphertext!,
    });

    return await withPlaidItemLock(`plaid-item:${item.id}`, async (tx) => {
      const before = await tx.plaidRemoteAccount.findMany({
        where: { plaidItemId: item.id },
      });

      await persistPlaidItemSnapshot({
        tx,
        plaidItemId: item.id,
        workspaceId: activeWorkspace.id,
        snapshot,
      });

      await tx.plaidItem.update({
        where: { id: item.id },
        data: {
          status: PlaidItemStatus.ACTIVE,
          lastSyncStatus: PlaidSyncStatus.OK,
          lastSyncedAt: new Date(),
          lastSyncErrorCode: null,
          lastSyncErrorMessage: null,
        },
      });

      return {
        updatedAccounts: before.filter((remote) => remote.importTargetKind === PlaidImportTargetKind.ACCOUNT).length,
        updatedCreditCards: before.filter((remote) => remote.importTargetKind === PlaidImportTargetKind.CREDIT_CARD).length,
        status: PlaidItemStatus.ACTIVE,
      };
    });
  } catch (error) {
    const { code, message } = getErrorDetails(error);
    const status = resolveItemStatusFromError(code);

    await prisma.plaidItem.update({
      where: { id: item.id },
      data: {
        status,
        lastSyncStatus: PlaidSyncStatus.ERROR,
        lastSyncErrorCode: code,
        lastSyncErrorMessage: message,
      },
    });

    if (status === PlaidItemStatus.NEEDS_REAUTH) {
      return {
        updatedAccounts: 0,
        updatedCreditCards: 0,
        status,
      };
    }

    throw error;
  }
};

export const syncWorkspacePlaidItems = async () => {
  const { activeWorkspace } = await getCurrentUserContext();
  const items = await prisma.plaidItem.findMany({
    where: {
      workspaceId: activeWorkspace.id,
      status: {
        in: [PlaidItemStatus.ACTIVE, PlaidItemStatus.NEEDS_REAUTH],
      },
    },
    orderBy: { createdAt: "asc" },
  });

  let updatedAccounts = 0;
  let updatedCreditCards = 0;

  for (const item of items) {
    const result = await syncPlaidItemById(item.id).catch(() => null);

    if (!result) {
      continue;
    }

    updatedAccounts += result.updatedAccounts;
    updatedCreditCards += result.updatedCreditCards;
  }

  return {
    syncedItems: items.length,
    updatedAccounts,
    updatedCreditCards,
  };
};

export const getPlaidItemIdForLocalEntity = async ({
  entityType,
  entityId,
}: {
  entityType: "account" | "credit-card";
  entityId: string;
}) => {
  const { activeWorkspace } = await getCurrentUserContext();
  const remote = await prisma.plaidRemoteAccount.findFirst({
    where:
      entityType === "account"
        ? { importedAccountId: entityId, workspaceId: activeWorkspace.id }
        : { importedCreditCardId: entityId, workspaceId: activeWorkspace.id },
    select: {
      plaidItemId: true,
    },
  });

  return remote?.plaidItemId ?? null;
};

export const unlinkPlaidEntity = async ({
  entityType,
  entityId,
}: {
  entityType: "account" | "credit-card";
  entityId: string;
}) => {
  const { activeWorkspace } = await getCurrentUserContext();

  return prisma.$transaction(async (tx) => {
    const remote = await tx.plaidRemoteAccount.findFirst({
      where:
        entityType === "account"
          ? { importedAccountId: entityId, workspaceId: activeWorkspace.id }
          : { importedCreditCardId: entityId, workspaceId: activeWorkspace.id },
      include: {
        item: true,
      },
    });

    if (!remote) {
      throw new Error("Linked Plaid account not found");
    }

    if (entityType === "account" && remote.importedAccountId) {
      await tx.account.update({
        where: { id: remote.importedAccountId },
        data: { source: DataSource.MANUAL },
      });
    }

    if (entityType === "credit-card" && remote.importedCreditCardId) {
      await tx.creditCard.update({
        where: { id: remote.importedCreditCardId },
        data: { source: DataSource.MANUAL },
      });
    }

    await tx.plaidRemoteAccount.update({
      where: { id: remote.id },
      data: {
        isImported: false,
        importTargetKind: null,
        importedAccountId: null,
        importedCreditCardId: null,
      },
    });

    const remainingImports = await tx.plaidRemoteAccount.count({
      where: {
        plaidItemId: remote.plaidItemId,
        isImported: true,
      },
    });

    if (remainingImports === 0) {
      await tx.plaidItem.update({
        where: { id: remote.plaidItemId },
        data: {
          status: PlaidItemStatus.DISCONNECTED,
          accessTokenCiphertext: null,
        },
      });
    }

    return {
      plaidItemId: remote.plaidItemId,
      disconnectedItem: remainingImports === 0,
    };
  });
};
