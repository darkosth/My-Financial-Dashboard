import fs from "node:fs/promises";
import path from "node:path";

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

const telegramRequest = async (token, method, payload = {}) => {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await response.json();
  if (!response.ok || !body.ok) throw new Error(`Telegram ${method} failed with status ${response.status}`);
  return body.result;
};

await loadEnvFiles();
const token = process.env.TELEGRAM_BOT_TOKEN;
const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
const rawAppUrl = process.env.TELEGRAM_WEBHOOK_URL || process.env.APP_URL || "";
const allowedHosts = new Set(["finance.darkosth.com", "finance-dashboard-preview.darkosth.com"]);
const replace = process.argv.includes("--replace");
let appUrl;

try {
  appUrl = new URL(rawAppUrl);
} catch {
  throw new Error("TELEGRAM_WEBHOOK_URL must be a valid canonical HTTPS URL.");
}

if (
  !token ||
  !secret ||
  appUrl.protocol !== "https:" ||
  !allowedHosts.has(appUrl.hostname) ||
  appUrl.username ||
  appUrl.password ||
  appUrl.search ||
  appUrl.hash ||
  (appUrl.pathname !== "/" && appUrl.pathname !== "")
) {
  throw new Error("TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET and an HTTPS TELEGRAM_WEBHOOK_URL are required.");
}
if (!replace) throw new Error("Webhook replacement requires the explicit --replace flag.");

const bot = await telegramRequest(token, "getMe");
const currentWebhook = await telegramRequest(token, "getWebhookInfo");
const currentHost = currentWebhook.url ? new URL(currentWebhook.url).hostname : "none";
console.log(`Replacing Telegram webhook ${currentHost} -> ${appUrl.hostname}.`);
await telegramRequest(token, "setWebhook", {
  url: `${appUrl.origin}/api/telegram/webhook`,
  allowed_updates: ["message"],
  drop_pending_updates: false,
  secret_token: secret,
});

console.log(`Webhook configured for @${bot.username}. Set TELEGRAM_BOT_USERNAME=${bot.username} in the same environment.`);
