export const roundCurrencyAmount = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export const amountToCents = (value) => Math.round(Number(value ?? 0) * 100);

export const centsToAmount = (value) => roundCurrencyAmount(Number(value ?? 0) / 100);

export const resolveStoredMoney = (centsValue) => centsToAmount(centsValue);

export const getMoneyUpdateData = (amount, centsField) => ({
  [centsField]: amountToCents(amount),
});

export const serializeAccount = ({ balanceCents, ...account }) => ({
  ...account,
  balance: resolveStoredMoney(balanceCents),
});

export const serializeCreditCard = ({
  balanceCents,
  creditLimitCents,
  minimumPaymentCents,
  ...creditCard
}) => ({
  ...creditCard,
  balance: resolveStoredMoney(balanceCents),
  creditLimit: resolveStoredMoney(creditLimitCents),
  minimumPayment: resolveStoredMoney(minimumPaymentCents),
});

export const serializeTemplate = ({ amountCents, ...template }) => ({
  ...template,
  amount: resolveStoredMoney(amountCents),
});

export const serializeHistoryRecord = ({ amountPaidCents, ...record }) => ({
  ...record,
  amountPaid: resolveStoredMoney(amountPaidCents),
});

export const serializePendingExpense = ({ amountCents, ...expense }) => ({
  ...expense,
  amount: resolveStoredMoney(amountCents),
});

export const serializePaymentCarryover = ({ remainingAmountCents, ...carryover }) => ({
  ...carryover,
  remainingAmount: resolveStoredMoney(remainingAmountCents),
});

export const serializeAppSettings = ({ weeklyIncomeCents, ...settings }) => ({
  ...settings,
  weeklyIncome: resolveStoredMoney(weeklyIncomeCents),
});
