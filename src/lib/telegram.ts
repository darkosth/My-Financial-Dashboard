import "server-only";

type TelegramApiResponse<T> = {
  ok: boolean;
  description?: string;
  error_code?: number;
  result?: T;
};

export type TelegramSendResult =
  | { success: true }
  | { success: false; code: string };

const callTelegramApi = async <T>(method: string, payload: Record<string, unknown>) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
  const body = (await response.json().catch(() => null)) as TelegramApiResponse<T> | null;

  if (!response.ok || !body?.ok) {
    const error = new Error("Telegram API request failed");
    Object.assign(error, { telegramCode: body?.error_code ?? response.status });
    throw error;
  }

  return body.result as T;
};

export const getTelegramBotUsername = () => {
  const username = process.env.TELEGRAM_BOT_USERNAME?.trim().replace(/^@/, "");
  return username && /^[A-Za-z0-9_]{5,32}$/.test(username) ? username : null;
};

export async function sendTelegramMessage(chatId: string, text: string): Promise<TelegramSendResult> {
  try {
    await callTelegramApi("sendMessage", {
      chat_id: chatId,
      disable_web_page_preview: true,
      parse_mode: "HTML",
      text,
    });
    return { success: true };
  } catch (error) {
    const telegramCode =
      error && typeof error === "object" && "telegramCode" in error
        ? String(error.telegramCode)
        : "NETWORK_ERROR";
    console.error("Telegram send failed:", telegramCode);
    return { success: false, code: telegramCode.slice(0, 40) };
  }
}
