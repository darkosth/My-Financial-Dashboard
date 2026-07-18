-- CreateEnum
CREATE TYPE "LearningRecordKind" AS ENUM ('SYNC_STATE', 'TRANSACTION');

-- CreateTable
CREATE TABLE "learning_records" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "plaidItemId" TEXT NOT NULL,
    "kind" "LearningRecordKind" NOT NULL,
    "externalKey" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "learning_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "learning_records_plaidItemId_kind_externalKey_key"
ON "learning_records"("plaidItemId", "kind", "externalKey");

CREATE INDEX "learning_records_workspaceId_kind_updatedAt_idx"
ON "learning_records"("workspaceId", "kind", "updatedAt");

-- AddForeignKey
ALTER TABLE "learning_records"
ADD CONSTRAINT "learning_records_workspaceId_fkey"
FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "learning_records"
ADD CONSTRAINT "learning_records_plaidItemId_fkey"
FOREIGN KEY ("plaidItemId") REFERENCES "plaid_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
