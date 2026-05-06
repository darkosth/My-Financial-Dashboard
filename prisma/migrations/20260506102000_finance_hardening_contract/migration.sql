BEGIN;

ALTER TABLE "accounts" DROP COLUMN IF EXISTS "balance";

ALTER TABLE "credit_cards"
  DROP COLUMN IF EXISTS "balance",
  DROP COLUMN IF EXISTS "creditLimit",
  DROP COLUMN IF EXISTS "minimumPayment";

ALTER TABLE "templates" DROP COLUMN IF EXISTS "amount";

ALTER TABLE "history_records" DROP COLUMN IF EXISTS "amountPaid";

ALTER TABLE "credit_card_payment_history" DROP COLUMN IF EXISTS "amountPaid";

ALTER TABLE "pending_expenses" DROP COLUMN IF EXISTS "amount";

ALTER TABLE "payment_carryovers" DROP COLUMN IF EXISTS "remainingAmount";

ALTER TABLE "app_settings" DROP COLUMN IF EXISTS "weeklyIncome";

COMMIT;
