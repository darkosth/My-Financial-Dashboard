import { PlaidAccountKind } from "@prisma/client";

type LearningAccountScopeCandidate = {
  importedAccountId: string | null;
  isImported: boolean;
  kind: string;
};

export const LEARNING_LIQUIDITY_ACCOUNT_WHERE = {
  importedAccountId: { not: null },
  isImported: true,
  kind: PlaidAccountKind.DEPOSITORY,
} as const;

export const isLearningLiquidityAccount = ({
  importedAccountId,
  isImported,
  kind,
}: LearningAccountScopeCandidate) =>
  kind === PlaidAccountKind.DEPOSITORY && isImported && importedAccountId !== null;
