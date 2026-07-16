-- CreateEnum
CREATE TYPE "TelegramNotificationKind" AS ENUM ('TEMPLATE', 'CREDIT_CARD', 'CARRYOVER');
CREATE TYPE "TelegramDeliveryStatus" AS ENUM ('PENDING', 'SENT', 'FAILED');

-- CreateTable
CREATE TABLE "telegram_connections" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "telegramUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "telegram_connections_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "telegram_link_tokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "telegram_link_tokens_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "telegram_notification_preferences" (
    "id" TEXT NOT NULL,
    "workspaceMemberId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "telegram_notification_preferences_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "telegram_notification_deliveries" (
    "id" TEXT NOT NULL,
    "preferenceId" TEXT NOT NULL,
    "kind" "TelegramNotificationKind" NOT NULL,
    "eventId" TEXT NOT NULL,
    "occurrenceDate" DATE NOT NULL,
    "leadDays" INTEGER NOT NULL,
    "dedupeKey" TEXT NOT NULL,
    "status" "TelegramDeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "sentAt" TIMESTAMP(3),
    "lastAttemptAt" TIMESTAMP(3),
    "lastErrorCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "telegram_notification_deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "telegram_connections_userId_key" ON "telegram_connections"("userId");
CREATE UNIQUE INDEX "telegram_connections_chatId_key" ON "telegram_connections"("chatId");
CREATE UNIQUE INDEX "telegram_connections_telegramUserId_key" ON "telegram_connections"("telegramUserId");
CREATE UNIQUE INDEX "telegram_link_tokens_tokenHash_key" ON "telegram_link_tokens"("tokenHash");
CREATE INDEX "telegram_link_tokens_userId_expiresAt_idx" ON "telegram_link_tokens"("userId", "expiresAt");
CREATE UNIQUE INDEX "telegram_notification_preferences_workspaceMemberId_key" ON "telegram_notification_preferences"("workspaceMemberId");
CREATE INDEX "telegram_notification_preferences_enabled_idx" ON "telegram_notification_preferences"("enabled");
CREATE UNIQUE INDEX "telegram_notification_deliveries_dedupeKey_key" ON "telegram_notification_deliveries"("dedupeKey");
CREATE INDEX "telegram_notification_deliveries_status_lastAttemptAt_idx" ON "telegram_notification_deliveries"("status", "lastAttemptAt");

-- AddForeignKey
ALTER TABLE "telegram_connections" ADD CONSTRAINT "telegram_connections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "telegram_link_tokens" ADD CONSTRAINT "telegram_link_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "telegram_notification_preferences" ADD CONSTRAINT "telegram_notification_preferences_workspaceMemberId_fkey" FOREIGN KEY ("workspaceMemberId") REFERENCES "workspace_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "telegram_notification_deliveries" ADD CONSTRAINT "telegram_notification_deliveries_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "telegram_notification_preferences"("id") ON DELETE CASCADE ON UPDATE CASCADE;
