export type SettlementDateCandidate = {
  sourceCycleReference?: Date | string | null;
  occurrenceDate?: Date | string | null;
};

export const getSettlementDate = (item: SettlementDateCandidate | null | undefined) =>
  item?.sourceCycleReference ?? item?.occurrenceDate ?? null;

