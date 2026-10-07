-- CreateTable
CREATE TABLE "FinanceCategory" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameKey" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FinanceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceSubcategory" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameKey" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FinanceSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceCash" (
    "workspaceId" TEXT NOT NULL,
    "balanceCents" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinanceCash_pkey" PRIMARY KEY ("workspaceId")
);

-- CreateTable
CREATE TABLE "FinancialMovement" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "externalKey" TEXT,
    "requestId" TEXT,
    "source" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'POSTED',
    "name" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "date" DATE NOT NULL,
    "accountId" TEXT,
    "categoryId" TEXT,
    "subcategoryId" TEXT,
    "needsReview" BOOLEAN NOT NULL DEFAULT false,
    "reversedAt" TIMESTAMP(3),
    "bankPayload" JSONB,
    "refundOfId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceOccurrence" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cycleReference" DATE NOT NULL,
    "weekStart" DATE NOT NULL,
    "expectedCents" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "closure" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinanceOccurrence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceReconciliation" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "movementId" TEXT NOT NULL,
    "activeMovementId" TEXT,
    "occurrenceId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "historyId" TEXT NOT NULL,
    "historyKind" TEXT NOT NULL,
    "ownsHistory" BOOLEAN NOT NULL DEFAULT true,
    "previousLastPaidAt" TIMESTAMP(3),
    "reversedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinanceReconciliation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceTransfer" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "outgoingId" TEXT NOT NULL,
    "incomingId" TEXT,
    "cashDeltaCents" INTEGER NOT NULL DEFAULT 0,
    "previousState" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinanceTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceEvent" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "movementId" TEXT,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinanceEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FinanceCategory_workspaceId_nameKey_key" ON "FinanceCategory"("workspaceId", "nameKey");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceSubcategory_categoryId_nameKey_key" ON "FinanceSubcategory"("categoryId", "nameKey");

-- CreateIndex
CREATE INDEX "FinancialMovement_workspaceId_date_idx" ON "FinancialMovement"("workspaceId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialMovement_workspaceId_externalKey_key" ON "FinancialMovement"("workspaceId", "externalKey");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialMovement_workspaceId_requestId_key" ON "FinancialMovement"("workspaceId", "requestId");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceOccurrence_workspaceId_targetId_cycleReference_key" ON "FinanceOccurrence"("workspaceId", "targetId", "cycleReference");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceReconciliation_activeMovementId_key" ON "FinanceReconciliation"("activeMovementId");

-- CreateIndex
CREATE INDEX "FinanceReconciliation_workspaceId_occurrenceId_idx" ON "FinanceReconciliation"("workspaceId", "occurrenceId");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceTransfer_outgoingId_key" ON "FinanceTransfer"("outgoingId");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceTransfer_incomingId_key" ON "FinanceTransfer"("incomingId");

-- CreateIndex
CREATE INDEX "FinanceEvent_workspaceId_createdAt_idx" ON "FinanceEvent"("workspaceId", "createdAt");

-- AddForeignKey
ALTER TABLE "FinanceSubcategory" ADD CONSTRAINT "FinanceSubcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "FinanceCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "FinancialMovement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_occurrenceId_fkey" FOREIGN KEY ("occurrenceId") REFERENCES "FinanceOccurrence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Financial invariants also apply to direct SQL and future callers.
ALTER TABLE "FinanceCash" ADD CONSTRAINT "FinanceCash_nonnegative" CHECK ("balanceCents" >= 0);
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_source" CHECK ("source" IN ('BANK','CASH','CREDIT','ADJUSTMENT'));
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_status" CHECK ("status" IN ('PENDING','POSTED','REMOVED'));
ALTER TABLE "FinanceOccurrence" ADD CONSTRAINT "FinanceOccurrence_closure" CHECK ("closure" IN ('OPEN','AUTO','MANUAL'));
ALTER TABLE "FinanceOccurrence" ADD CONSTRAINT "FinanceOccurrence_expected" CHECK ("expectedCents" >= 0);
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_positive" CHECK ("amountCents" > 0);
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_active" CHECK (("reversedAt" IS NULL AND "activeMovementId" IS NOT NULL AND "activeMovementId" = "movementId") OR ("reversedAt" IS NOT NULL AND "activeMovementId" IS NULL));
CREATE UNIQUE INDEX "FinanceReconciliation_active_history" ON "FinanceReconciliation" ("workspaceId", "historyKind", "historyId") WHERE "reversedAt" IS NULL AND "historyId" <> '';
CREATE UNIQUE INDEX "FinancialMovement_workspace_identity" ON "FinancialMovement" ("workspaceId", "id");
CREATE UNIQUE INDEX "FinanceOccurrence_workspace_identity" ON "FinanceOccurrence" ("workspaceId", "id");
CREATE UNIQUE INDEX "FinanceCategory_workspace_identity" ON "FinanceCategory" ("workspaceId", "id");
CREATE UNIQUE INDEX "FinanceSubcategory_parent_identity" ON "FinanceSubcategory" ("categoryId", "id");
ALTER TABLE "FinanceCategory" ADD CONSTRAINT "FinanceCategory_workspace" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE RESTRICT;
ALTER TABLE "FinanceCash" ADD CONSTRAINT "FinanceCash_workspace" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE RESTRICT;
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_workspace" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE RESTRICT;
ALTER TABLE "FinanceOccurrence" ADD CONSTRAINT "FinanceOccurrence_workspace" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE RESTRICT;
ALTER TABLE "FinanceEvent" ADD CONSTRAINT "FinanceEvent_workspace" FOREIGN KEY ("workspaceId") REFERENCES "workspaces"("id") ON DELETE RESTRICT;
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_category_scope" FOREIGN KEY ("workspaceId", "categoryId") REFERENCES "FinanceCategory"("workspaceId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_subcategory_scope" FOREIGN KEY ("categoryId", "subcategoryId") REFERENCES "FinanceSubcategory"("categoryId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_subcategory_parent" CHECK ("subcategoryId" IS NULL OR "categoryId" IS NOT NULL);
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_movement_scope" FOREIGN KEY ("workspaceId", "movementId") REFERENCES "FinancialMovement"("workspaceId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinanceReconciliation" ADD CONSTRAINT "FinanceReconciliation_occurrence_scope" FOREIGN KEY ("workspaceId", "occurrenceId") REFERENCES "FinanceOccurrence"("workspaceId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinanceTransfer" ADD CONSTRAINT "FinanceTransfer_outgoing_scope" FOREIGN KEY ("workspaceId", "outgoingId") REFERENCES "FinancialMovement"("workspaceId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinanceTransfer" ADD CONSTRAINT "FinanceTransfer_incoming_scope" FOREIGN KEY ("workspaceId", "incomingId") REFERENCES "FinancialMovement"("workspaceId", "id") ON DELETE RESTRICT;
ALTER TABLE "FinanceEvent" ADD CONSTRAINT "FinanceEvent_movement_scope" FOREIGN KEY ("workspaceId", "movementId") REFERENCES "FinancialMovement"("workspaceId", "id") ON DELETE RESTRICT;

ALTER TABLE "FinancialMovement" ADD CONSTRAINT "FinancialMovement_refund_scope" FOREIGN KEY ("workspaceId", "refundOfId") REFERENCES "FinancialMovement"("workspaceId", "id") ON DELETE RESTRICT;

CREATE FUNCTION finance_event_immutable() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'Financial audit events are immutable';
END;
$$;
CREATE TRIGGER finance_event_immutable BEFORE UPDATE OR DELETE ON "FinanceEvent" FOR EACH ROW EXECUTE FUNCTION finance_event_immutable();
