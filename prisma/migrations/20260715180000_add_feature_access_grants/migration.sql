-- CreateEnum
CREATE TYPE "FeatureKey" AS ENUM ('PLAID');

-- CreateTable
CREATE TABLE "feature_access_grants" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "feature" "FeatureKey" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdByUserId" TEXT NOT NULL,
    "revokedByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "feature_access_grants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "feature_access_grants_email_feature_key" ON "feature_access_grants"("email", "feature");

-- CreateIndex
CREATE INDEX "feature_access_grants_feature_active_idx" ON "feature_access_grants"("feature", "active");

-- AddForeignKey
ALTER TABLE "feature_access_grants" ADD CONSTRAINT "feature_access_grants_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_access_grants" ADD CONSTRAINT "feature_access_grants_revokedByUserId_fkey" FOREIGN KEY ("revokedByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
