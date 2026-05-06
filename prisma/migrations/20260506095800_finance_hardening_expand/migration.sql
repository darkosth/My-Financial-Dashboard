BEGIN;

ALTER TABLE "accounts" ADD COLUMN IF NOT EXISTS "balance_cents" INTEGER;
UPDATE "accounts" SET "balance_cents" = ROUND(COALESCE("balance", 0) * 100)::INTEGER WHERE "balance_cents" IS NULL;
ALTER TABLE "accounts" ALTER COLUMN "balance_cents" SET DEFAULT 0;
ALTER TABLE "accounts" ALTER COLUMN "balance_cents" SET NOT NULL;
ALTER TABLE "accounts" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "credit_cards" ADD COLUMN IF NOT EXISTS "balance_cents" INTEGER;
ALTER TABLE "credit_cards" ADD COLUMN IF NOT EXISTS "credit_limit_cents" INTEGER;
ALTER TABLE "credit_cards" ADD COLUMN IF NOT EXISTS "minimum_payment_cents" INTEGER;
UPDATE "credit_cards"
SET
  "balance_cents" = ROUND(COALESCE("balance", 0) * 100)::INTEGER,
  "credit_limit_cents" = ROUND(COALESCE("creditLimit", 0) * 100)::INTEGER,
  "minimum_payment_cents" = ROUND(COALESCE("minimumPayment", 0) * 100)::INTEGER
WHERE
  "balance_cents" IS NULL
  OR "credit_limit_cents" IS NULL
  OR "minimum_payment_cents" IS NULL;
ALTER TABLE "credit_cards" ALTER COLUMN "balance_cents" SET DEFAULT 0;
ALTER TABLE "credit_cards" ALTER COLUMN "balance_cents" SET NOT NULL;
ALTER TABLE "credit_cards" ALTER COLUMN "credit_limit_cents" SET DEFAULT 0;
ALTER TABLE "credit_cards" ALTER COLUMN "credit_limit_cents" SET NOT NULL;
ALTER TABLE "credit_cards" ALTER COLUMN "minimum_payment_cents" SET DEFAULT 0;
ALTER TABLE "credit_cards" ALTER COLUMN "minimum_payment_cents" SET NOT NULL;
ALTER TABLE "credit_cards" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "templates" ADD COLUMN IF NOT EXISTS "amount_cents" INTEGER;
UPDATE "templates" SET "amount_cents" = ROUND(COALESCE("amount", 0) * 100)::INTEGER WHERE "amount_cents" IS NULL;
ALTER TABLE "templates" ALTER COLUMN "amount_cents" SET DEFAULT 0;
ALTER TABLE "templates" ALTER COLUMN "amount_cents" SET NOT NULL;
ALTER TABLE "templates" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "history_records" ADD COLUMN IF NOT EXISTS "amount_paid_cents" INTEGER;
UPDATE "history_records" SET "amount_paid_cents" = ROUND(COALESCE("amountPaid", 0) * 100)::INTEGER WHERE "amount_paid_cents" IS NULL;
ALTER TABLE "history_records" ALTER COLUMN "amount_paid_cents" SET DEFAULT 0;
ALTER TABLE "history_records" ALTER COLUMN "amount_paid_cents" SET NOT NULL;
ALTER TABLE "history_records" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "credit_card_payment_history" ADD COLUMN IF NOT EXISTS "amount_paid_cents" INTEGER;
UPDATE "credit_card_payment_history" SET "amount_paid_cents" = ROUND(COALESCE("amountPaid", 0) * 100)::INTEGER WHERE "amount_paid_cents" IS NULL;
ALTER TABLE "credit_card_payment_history" ALTER COLUMN "amount_paid_cents" SET DEFAULT 0;
ALTER TABLE "credit_card_payment_history" ALTER COLUMN "amount_paid_cents" SET NOT NULL;
ALTER TABLE "credit_card_payment_history" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "pending_expenses" ADD COLUMN IF NOT EXISTS "amount_cents" INTEGER;
UPDATE "pending_expenses" SET "amount_cents" = ROUND(COALESCE("amount", 0) * 100)::INTEGER WHERE "amount_cents" IS NULL;
ALTER TABLE "pending_expenses" ALTER COLUMN "amount_cents" SET DEFAULT 0;
ALTER TABLE "pending_expenses" ALTER COLUMN "amount_cents" SET NOT NULL;
ALTER TABLE "pending_expenses" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "payment_carryovers" ADD COLUMN IF NOT EXISTS "remaining_amount_cents" INTEGER;
UPDATE "payment_carryovers" SET "remaining_amount_cents" = ROUND(COALESCE("remainingAmount", 0) * 100)::INTEGER WHERE "remaining_amount_cents" IS NULL;
ALTER TABLE "payment_carryovers" ALTER COLUMN "remaining_amount_cents" SET DEFAULT 0;
ALTER TABLE "payment_carryovers" ALTER COLUMN "remaining_amount_cents" SET NOT NULL;
ALTER TABLE "payment_carryovers" ALTER COLUMN "workspaceId" SET NOT NULL;

ALTER TABLE "app_settings" ADD COLUMN IF NOT EXISTS "weekly_income_cents" INTEGER;
UPDATE "app_settings" SET "weekly_income_cents" = ROUND(COALESCE("weeklyIncome", 0) * 100)::INTEGER WHERE "weekly_income_cents" IS NULL;
ALTER TABLE "app_settings" ALTER COLUMN "weekly_income_cents" SET DEFAULT 100000;
ALTER TABLE "app_settings" ALTER COLUMN "weekly_income_cents" SET NOT NULL;
ALTER TABLE "app_settings" ALTER COLUMN "workspaceId" SET NOT NULL;

CREATE INDEX IF NOT EXISTS "accounts_workspaceId_createdAt_idx" ON "accounts"("workspaceId", "createdAt");
CREATE INDEX IF NOT EXISTS "credit_cards_workspaceId_createdAt_idx" ON "credit_cards"("workspaceId", "createdAt");
CREATE INDEX IF NOT EXISTS "templates_workspaceId_createdAt_idx" ON "templates"("workspaceId", "createdAt");
CREATE INDEX IF NOT EXISTS "history_records_workspaceId_cycleReference_idx" ON "history_records"("workspaceId", "cycleReference");
CREATE INDEX IF NOT EXISTS "history_records_templateId_cycleReference_idx" ON "history_records"("templateId", "cycleReference");
CREATE INDEX IF NOT EXISTS "credit_card_payment_history_workspaceId_cycleReference_idx" ON "credit_card_payment_history"("workspaceId", "cycleReference");
CREATE INDEX IF NOT EXISTS "credit_card_payment_history_creditCardId_cycleReference_idx" ON "credit_card_payment_history"("creditCardId", "cycleReference");
CREATE INDEX IF NOT EXISTS "pending_expenses_workspaceId_createdAt_idx" ON "pending_expenses"("workspaceId", "createdAt");
CREATE INDEX IF NOT EXISTS "payment_carryovers_workspaceId_targetWeekStart_idx" ON "payment_carryovers"("workspaceId", "targetWeekStart");

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'accounts_workspaceId_fkey') THEN
    ALTER TABLE "accounts"
      ADD CONSTRAINT "accounts_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credit_cards_workspaceId_fkey') THEN
    ALTER TABLE "credit_cards"
      ADD CONSTRAINT "credit_cards_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'templates_workspaceId_fkey') THEN
    ALTER TABLE "templates"
      ADD CONSTRAINT "templates_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'history_records_workspaceId_fkey') THEN
    ALTER TABLE "history_records"
      ADD CONSTRAINT "history_records_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'history_records_templateId_fkey') THEN
    ALTER TABLE "history_records"
      ADD CONSTRAINT "history_records_templateId_fkey"
      FOREIGN KEY ("templateId") REFERENCES "templates"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credit_card_payment_history_workspaceId_fkey') THEN
    ALTER TABLE "credit_card_payment_history"
      ADD CONSTRAINT "credit_card_payment_history_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credit_card_payment_history_creditCardId_fkey') THEN
    ALTER TABLE "credit_card_payment_history"
      ADD CONSTRAINT "credit_card_payment_history_creditCardId_fkey"
      FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'pending_expenses_workspaceId_fkey') THEN
    ALTER TABLE "pending_expenses"
      ADD CONSTRAINT "pending_expenses_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_carryovers_workspaceId_fkey') THEN
    ALTER TABLE "payment_carryovers"
      ADD CONSTRAINT "payment_carryovers_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_carryovers_templateId_fkey') THEN
    ALTER TABLE "payment_carryovers"
      ADD CONSTRAINT "payment_carryovers_templateId_fkey"
      FOREIGN KEY ("templateId") REFERENCES "templates"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'app_settings_workspaceId_fkey') THEN
    ALTER TABLE "app_settings"
      ADD CONSTRAINT "app_settings_workspaceId_fkey"
      FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id")
      ON DELETE CASCADE NOT VALID;
  END IF;
END $$;

COMMIT;
