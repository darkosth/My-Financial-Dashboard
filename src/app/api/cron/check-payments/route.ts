import { NextResponse } from "next/server";
import { sendDueTelegramNotifications } from "@/lib/telegramNotifications";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (process.env.NODE_ENV === "production" && !cronSecret) {
    console.error("CRON_SECRET is required in production.");
    return new NextResponse("Cron is not configured", { status: 500 });
  }

  if (process.env.NODE_ENV === "production" && authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const summary = await sendDueTelegramNotifications();
    return NextResponse.json({ success: summary.failed === 0, ...summary }, { status: summary.failed > 0 ? 502 : 200 });
  } catch (error) {
    console.error("Telegram notification cron failed:", error instanceof Error ? error.message : String(error));
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
