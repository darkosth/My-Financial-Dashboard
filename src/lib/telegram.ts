export async function sendTelegramMessage(text: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Telegram credentials are missing in .env");
    return false;
  }

  // Endpoint oficial de la API de Telegram
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML", // Nos permite usar negritas <b> y cursivas <i>
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API responded with status ${response.status}`);
    }

    return true;
  } catch (error: unknown) {
    console.error("Failed to send Telegram message:", error);
    return false;
  }
}
