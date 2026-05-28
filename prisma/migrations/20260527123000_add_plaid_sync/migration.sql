CREATE TYPE "DataSource" AS ENUM ('MANUAL', 'PLAID');
CREATE TYPE "PlaidItemStatus" AS ENUM ('ACTIVE', 'NEEDS_REAUTH', 'DISCONNECTED');
CREATE TYPE "PlaidSyncStatus" AS ENUM ('PENDING', 'OK', 'ERROR');
CREATE TYPE "PlaidAccountKind" AS ENUM ('DEPOSITORY', 'CREDIT', 'LOAN', 'INVESTMENT', 'OTHER');
CREATE TYPE "PlaidImportTargetKind" AS ENUM ('ACCOUNT', 'CREDIT_CARD');

ALTER TABLE "accounts"
  ADD COLUMN "source" "DataSource" NOT NULL DEFAULT 'MANUAL';

CREATE INDEX "accounts_workspaceId_source_idx" ON "accounts"("workspaceId", "source");

ALTER TABLE "credit_cards"
  ADD COLUMN "source" "DataSource" NOT NULL DEFAULT 'MANUAL',
  ALTER COLUMN "dueDate" DROP NOT NULL;

CREATE INDEX "credit_cards_workspaceId_source_idx" ON "credit_cards"("workspaceId", "source");

CREATE TABLE "plaid_items" (
  "id" TEXT NOT NULL,
  "workspaceId" TEXT NOT NULL,
  "plaid_item_id" TEXT NOT NULL,
  "access_token_ciphertext" TEXT,
  "institution_id" TEXT,
  "institution_name" TEXT,
  "status" "PlaidItemStatus" NOT NULL DEFAULT 'ACTIVE',
  "last_sync_status" "PlaidSyncStatus" NOT NULL DEFAULT 'PENDING',
  "last_synced_at" TIMESTAMP(3),
  "last_sync_error_code" TEXT,
  "last_sync_error_message" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "plaid_items_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "plaid_items_plaid_item_id_key" ON "plaid_items"("plaid_item_id");
CREATE INDEX "plaid_items_workspaceId_status_idx" ON "plaid_items"("workspaceId", "status");

CREATE TABLE "plaid_remote_accounts" (
  "id" TEXT NOT NULL,
  "plaidItemId" TEXT NOT NULL,
  "workspaceId" TEXT NOT NULL,
  "plaid_account_id" TEXT NOT NULL,
  "kind" "PlaidAccountKind" NOT NULL,
  "subtype" TEXT,
  "name" TEXT NOT NULL,
  "official_name" TEXT,
  "mask" TEXT,
  "iso_currency_code" TEXT,
  "current_balance_cents" INTEGER,
  "available_balance_cents" INTEGER,
  "credit_limit_cents" INTEGER,
  "is_imported" BOOLEAN NOT NULL DEFAULT false,
  "import_target_kind" "PlaidImportTargetKind",
  "imported_account_id" TEXT,
  "imported_credit_card_id" TEXT,
  "last_synced_at" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "plaid_remote_accounts_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "plaid_remote_accounts_plaid_account_id_key" ON "plaid_remote_accounts"("plaid_account_id");
CREATE UNIQUE INDEX "plaid_remote_accounts_imported_account_id_key" ON "plaid_remote_accounts"("imported_account_id");
CREATE UNIQUE INDEX "plaid_remote_accounts_imported_credit_card_id_key" ON "plaid_remote_accounts"("imported_credit_card_id");
CREATE INDEX "plaid_remote_accounts_workspaceId_is_imported_idx" ON "plaid_remote_accounts"("workspaceId", "is_imported");
CREATE INDEX "plaid_remote_accounts_plaidItemId_idx" ON "plaid_remote_accounts"("plaidItemId");

ALTER TABLE "plaid_items"
  ADD CONSTRAINT "plaid_items_workspaceId_fkey"
  FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "plaid_remote_accounts"
  ADD CONSTRAINT "plaid_remote_accounts_plaidItemId_fkey"
  FOREIGN KEY ("plaidItemId") REFERENCES "plaid_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "plaid_remote_accounts"
  ADD CONSTRAINT "plaid_remote_accounts_imported_account_id_fkey"
  FOREIGN KEY ("imported_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "plaid_remote_accounts"
  ADD CONSTRAINT "plaid_remote_accounts_imported_credit_card_id_fkey"
  FOREIGN KEY ("imported_credit_card_id") REFERENCES "credit_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "plaid_remote_accounts"
  ADD CONSTRAINT "plaid_remote_accounts_single_import_target_chk"
  CHECK (NOT ("imported_account_id" IS NOT NULL AND "imported_credit_card_id" IS NOT NULL));

ALTER TABLE "plaid_remote_accounts"
  ADD CONSTRAINT "plaid_remote_accounts_import_target_kind_chk"
  CHECK (
    ("import_target_kind" IS NULL AND "imported_account_id" IS NULL AND "imported_credit_card_id" IS NULL)
    OR ("import_target_kind" = 'ACCOUNT' AND "imported_account_id" IS NOT NULL AND "imported_credit_card_id" IS NULL)
    OR ("import_target_kind" = 'CREDIT_CARD' AND "imported_credit_card_id" IS NOT NULL AND "imported_account_id" IS NULL)
  );
