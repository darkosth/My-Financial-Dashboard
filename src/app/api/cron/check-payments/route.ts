import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendTelegramMessage } from "@/lib/telegram";
import { getCreditCardEffectiveMinimumPayment } from "@/lib/creditCardReview";
import { serializeCreditCard } from "@/lib/money";

const newYorkDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const getNewYorkDayWithOffset = (date: Date, offsetDays = 0) => {
  const parts = newYorkDateFormatter.formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const shiftedDate = new Date(Date.UTC(year, month - 1, day + offsetDays, 12, 0, 0, 0));

  return shiftedDate.getUTCDate();
};

export async function GET(request: Request) {
  // 1. Capa de Seguridad (Protección contra intrusos)
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  const telegramWorkspaceId = process.env.TELEGRAM_WORKSPACE_ID;

  if (process.env.NODE_ENV === "production" && !cronSecret) {
    console.error("CRON_SECRET is required in production.");
    return new NextResponse("Cron is not configured", { status: 500 });
  }

  if (process.env.NODE_ENV === "production" && !telegramWorkspaceId) {
    console.error("TELEGRAM_WORKSPACE_ID is required in production.");
    return new NextResponse("Cron is not configured", { status: 500 });
  }

  // En producción, exigimos un token de seguridad. En localhost, permitimos pruebas libres.
  if (process.env.NODE_ENV === "production" && authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // 2. Control de Zona Horaria (El Reloj de Nueva York)
    const today = new Date();
    // Extraemos hoy y mañana como fechas reales en Nueva York para respetar cierres de mes.
    const currentDay = getNewYorkDayWithOffset(today);
    const tomorrowDay = getNewYorkDayWithOffset(today, 1);

    // Queremos avisar si la tarjeta vence hoy, o mañana (1 día de anticipación)
    const targetDays = Array.from(new Set([currentDay, tomorrowDay]));

    // 3. Consulta a la Base de Datos
    const dueCards = await prisma.creditCard.findMany({
      where: {
        ...(telegramWorkspaceId ? { workspaceId: telegramWorkspaceId } : {}),
        dueDate: { in: targetDays },
        balanceCents: { gt: 0 }, // Solo avisar si la tarjeta realmente tiene deuda
      },
    });

    if (dueCards.length === 0) {
      return NextResponse.json({ message: "No active debts due today or tomorrow." });
    }

    // 4. Armar el Mensaje
    let message = "🔔 <b>FINANCIAL ALERT</b> 🔔\n\n";

    dueCards
      .map(serializeCreditCard)
      .forEach((card) => {
        const minimumPayment = getCreditCardEffectiveMinimumPayment(card);
        const dueText = card.dueDate === currentDay ? "🚨 TODAY" : "⚠️ TOMORROW";
        message += `💳 <b>${card.name}</b>\n`;
        message += `📅 Due: ${dueText}\n`;
        message += `💰 Debt: $${card.balance.toFixed(2)}\n`;
        message += `💵 Min Payment: $${minimumPayment.toFixed(2)}\n\n`;
      });

    message += "<i>Don't forget to mark it as paid in your dashboard!</i>";

    // 5. Enviar a Telegram
    await sendTelegramMessage(message);

    return NextResponse.json({
      success: true,
      notifiedCards: dueCards.length,
      message: "Telegram notification sent successfully.",
    });
  } catch (error) {
    console.error("Cron Job Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
