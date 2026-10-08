ALTER TABLE "FinancialMovement" DROP CONSTRAINT "FinancialMovement_source";
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_source"
  CHECK ("source" IN ('BANK','CASH','CREDIT','DEBIT','ADJUSTMENT'));
