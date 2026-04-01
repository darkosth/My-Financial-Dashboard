export const getSettlementDate = (item) => item?.sourceCycleReference ?? item?.occurrenceDate ?? null;
