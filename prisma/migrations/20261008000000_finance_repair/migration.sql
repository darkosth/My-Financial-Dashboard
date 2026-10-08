ALTER TABLE "FinancialMovement" ADD COLUMN "balanceImpactCents" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "FinancialMovement" ADD COLUMN "replacedManualState" JSONB;
