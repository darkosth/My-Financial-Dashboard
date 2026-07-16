import { randomUUID } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { Client } from "pg";

const loadEnvFiles = async () => {
  for (const fileName of [".env.local", ".env"]) {
    try {
      const content = await fs.readFile(path.resolve(fileName), "utf8");
      for (const line of content.split(/\r?\n/)) {
        const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
        if (!match || match[1] in process.env) continue;
        process.env[match[1]] = match[2].trim().replace(/^(['"])(.*)\1$/, "$2");
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
};

const emailArgument = process.argv.find((argument) => argument.startsWith("--email="))?.slice(8).trim().toLowerCase();
const apply = process.argv.includes("--apply");
await loadEnvFiles();

const databaseUrl = process.env.DATABASE_URL;
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const workspaceId = process.env.TELEGRAM_WORKSPACE_ID;
if (!databaseUrl || !botToken || !chatId || !workspaceId || !emailArgument) {
  throw new Error("DATABASE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, TELEGRAM_WORKSPACE_ID and --email are required.");
}

const chatResponse = await fetch(`https://api.telegram.org/bot${botToken}/getChat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ chat_id: chatId }),
});
const chatBody = await chatResponse.json();
if (!chatResponse.ok || !chatBody.ok || chatBody.result?.type !== "private") {
  throw new Error("Legacy Telegram destination is not a verified private chat.");
}

const client = new Client({ connectionString: databaseUrl, application_name: "myfinance-telegram-bootstrap" });
await client.connect();
try {
  await client.query("BEGIN");
  const membership = await client.query(
    `SELECT wm."id", wm."userId"
       FROM "workspace_members" wm
       JOIN "users" u ON u."id" = wm."userId"
      WHERE lower(u."email") = $1 AND wm."workspaceId" = $2`,
    [emailArgument, workspaceId],
  );
  if (membership.rowCount !== 1) throw new Error("The requested user is not a member of the legacy workspace.");

  const owner = await client.query(
    `SELECT "userId" FROM "telegram_connections" WHERE "chatId" = $1 OR "telegramUserId" = $1`,
    [String(chatBody.result.id)],
  );
  if (owner.rowCount && owner.rows[0].userId !== membership.rows[0].userId) {
    throw new Error("The legacy Telegram chat is already connected to another user.");
  }

  if (apply) {
    await client.query(
      `INSERT INTO "telegram_connections" ("id", "userId", "chatId", "telegramUserId", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $3, NOW(), NOW())
       ON CONFLICT ("userId") DO UPDATE SET "chatId" = EXCLUDED."chatId", "telegramUserId" = EXCLUDED."telegramUserId", "updatedAt" = NOW()`,
      [randomUUID(), membership.rows[0].userId, String(chatBody.result.id)],
    );
    await client.query(
      `INSERT INTO "telegram_notification_preferences" ("id", "workspaceMemberId", "enabled", "createdAt", "updatedAt")
       VALUES ($1, $2, true, NOW(), NOW())
       ON CONFLICT ("workspaceMemberId") DO UPDATE SET "enabled" = true, "updatedAt" = NOW()`,
      [randomUUID(), membership.rows[0].id],
    );
  }
  await client.query(apply ? "COMMIT" : "ROLLBACK");
  console.log(apply ? "Legacy Telegram connection migrated." : "Legacy Telegram bootstrap validation passed (dry run). Add --apply to write changes.");
} catch (error) {
  await client.query("ROLLBACK");
  throw error;
} finally {
  await client.end();
}
