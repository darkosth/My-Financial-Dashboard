export type Movement = {
  id: string;
  name: string;
  amountCents: number;
  currency: string;
  date: string;
  status: "PENDING" | "POSTED" | "REMOVED";
  source: "BANK" | "CASH" | "CREDIT" | "ADJUSTMENT";
  kind: "EXPENSE" | "INCOME" | "TRANSFER" | "ADJUSTMENT" | "CARD_PAYMENT" | "REFUND";
  categoryId: string | null;
  subcategoryId: string | null;
  accountName: string;
  accountId?: string | null;
  needsReview: boolean;
  reversedAt: string | null;
  transferId: string | null;
  reconciliation: { id: string; occurrenceId: string } | null;
};
export type FinanceCategory = {
  id: string;
  name: string;
  archived: boolean;
  subcategories: { id: string; name: string; archived: boolean }[];
};
export type Occurrence = {
  id: string;
  targetId: string;
  name: string;
  categoryLabel?: string;
  cycleReference: string;
  weekStart: string;
  expectedCents: number;
  paidCents: number;
  closure: "OPEN" | "AUTO" | "MANUAL";
  currency?: string;
};
export type FinanceWorkspaceData = {
  movements: Movement[];
  categories: FinanceCategory[];
  occurrences: Occurrence[];
  cash: { balanceCents: number };
  events: {
    id: string;
    action: string;
    createdAt: string;
    movementId: string | null;
  }[];
  legacyPayments: {
    id: string;
    targetId: string;
    amountCents: number;
    date: string;
    cycleReference: string;
  }[];
  accounts: { id: string; name: string }[];
};
