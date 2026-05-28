export type MoneyCents = number;

export const roundCurrencyAmount = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;

export const amountToCents = (value: number | string | null | undefined): MoneyCents =>
  Math.round(Number(value ?? 0) * 100);

export const centsToAmount = (value: MoneyCents | null | undefined) => roundCurrencyAmount(Number(value ?? 0) / 100);

export const resolveStoredMoney = (centsValue: MoneyCents | null | undefined) => centsToAmount(centsValue);

export const getMoneyUpdateData = <FieldName extends string>(
  amount: number | string | null | undefined,
  centsField: FieldName,
) => ({
  [centsField]: amountToCents(amount),
});

const serializePlaidMetadata = <
  T extends {
    plaidRemoteAccount?: {
      mask?: string | null;
      subtype?: string | null;
      item?: {
        id?: string | null;
        institutionName?: string | null;
        status?: string | null;
        lastSyncedAt?: Date | string | null;
      } | null;
    } | null;
  },
>(
  entity: T,
) => {
  if (!entity.plaidRemoteAccount) {
    return {
      institutionName: null,
      mask: null,
      subtype: null,
      plaidItemId: null,
      plaidStatus: null,
      lastSyncedAt: null,
    };
  }

  return {
    institutionName: entity.plaidRemoteAccount.item?.institutionName ?? null,
    mask: entity.plaidRemoteAccount.mask ?? null,
    subtype: entity.plaidRemoteAccount.subtype ?? null,
    plaidItemId: entity.plaidRemoteAccount.item?.id ?? null,
    plaidStatus: entity.plaidRemoteAccount.item?.status ?? null,
    lastSyncedAt: entity.plaidRemoteAccount.item?.lastSyncedAt ?? null,
  };
};

export const serializeAccount = <
  T extends {
    balanceCents: MoneyCents | null;
    plaidRemoteAccount?: {
      mask?: string | null;
      subtype?: string | null;
      item?: {
        id?: string | null;
        institutionName?: string | null;
        status?: string | null;
        lastSyncedAt?: Date | string | null;
      } | null;
    } | null;
  },
>(
  account: T,
) => {
  const { balanceCents, ...rest } = account;

  return {
    ...rest,
    balance: resolveStoredMoney(balanceCents),
    ...serializePlaidMetadata(account),
  };
};

export const serializeCreditCard = <
  T extends {
    balanceCents: MoneyCents | null;
    creditLimitCents: MoneyCents | null;
    minimumPaymentCents: MoneyCents | null;
    plaidRemoteAccount?: {
      mask?: string | null;
      subtype?: string | null;
      item?: {
        id?: string | null;
        institutionName?: string | null;
        status?: string | null;
        lastSyncedAt?: Date | string | null;
      } | null;
    } | null;
  },
>(
  creditCard: T,
) => {
  const { balanceCents, creditLimitCents, minimumPaymentCents, ...rest } = creditCard;

  return {
    ...rest,
    balance: resolveStoredMoney(balanceCents),
    creditLimit: resolveStoredMoney(creditLimitCents),
    minimumPayment: resolveStoredMoney(minimumPaymentCents),
    ...serializePlaidMetadata(creditCard),
  };
};

export const serializeTemplate = <T extends { amountCents: MoneyCents | null }>(template: T) => {
  const { amountCents, ...rest } = template;

  return {
    ...rest,
    amount: resolveStoredMoney(amountCents),
  };
};

export const serializeHistoryRecord = <T extends { amountPaidCents: MoneyCents | null }>(record: T) => {
  const { amountPaidCents, ...rest } = record;

  return {
    ...rest,
    amountPaid: resolveStoredMoney(amountPaidCents),
  };
};

export const serializePendingExpense = <T extends { amountCents: MoneyCents | null }>(expense: T) => {
  const { amountCents, ...rest } = expense;

  return {
    ...rest,
    amount: resolveStoredMoney(amountCents),
  };
};

export const serializePaymentCarryover = <T extends { remainingAmountCents: MoneyCents | null }>(carryover: T) => {
  const { remainingAmountCents, ...rest } = carryover;

  return {
    ...rest,
    remainingAmount: resolveStoredMoney(remainingAmountCents),
  };
};

export const serializeAppSettings = <T extends { weeklyIncomeCents: MoneyCents | null }>(settings: T) => {
  const { weeklyIncomeCents, ...rest } = settings;

  return {
    ...rest,
    weeklyIncome: resolveStoredMoney(weeklyIncomeCents),
  };
};
