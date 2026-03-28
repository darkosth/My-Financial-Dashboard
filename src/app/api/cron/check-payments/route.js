import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { sendTelegramMessage } from "@/lib/telegram";

export async function GET(request) {
  // 1. Capa de Seguridad (Protección contra intrusos)
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  
  // En producción, exigimos un token de seguridad. En localhost, permitimos pruebas libres.
  if (process.env.NODE_ENV === "production" && authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    // 2. Control de Zona Horaria (El Reloj de Nueva York)
    const today = new Date();
    const options = { timeZone: "America/New_York", day: "numeric" };
    // Extraemos solo el número del día (1 al 31) según tu hora local
    const currentDay = parseInt(new Intl.DateTimeFormat("en-US", options).format(today));

    // Queremos avisar si la tarjeta vence hoy, o mañana (1 día de anticipación)
    const targetDays = [currentDay, currentDay === 31 ? 1 : currentDay + 1];

    // 3. Consulta a la Base de Datos
    const dueCards = await prisma.creditCard.findMany({
      where: {
        dueDate: { in: targetDays },
        balance: { gt: 0 } // Solo avisar si la tarjeta realmente tiene deuda
      }
    });

    if (dueCards.length === 0) {
      return NextResponse.json({ message: "No active debts due today or tomorrow." });
    }

    // 4. Armar el Mensaje
    let message = "🔔 <b>FINANCIAL ALERT</b> 🔔\n\n";

    dueCards.forEach(card => {
      const dueText = card.dueDate === currentDay ? "🚨 TODAY" : "⚠️ TOMORROW";
      message += `💳 <b>${card.name}</b>\n`;
      message += `📅 Due: ${dueText}\n`;
      message += `💰 Debt: $${card.balance.toFixed(2)}\n`;
      message += `💵 Min Payment: $${(card.minimumPayment || 0).toFixed(2)}\n\n`;
    });

    message += "<i>Don't forget to mark it as paid in your dashboard!</i>";

    // 5. Enviar a Telegram
    await sendTelegramMessage(message);

    return NextResponse.json({ 
      success: true, 
      notifiedCards: dueCards.length,
      message: "Telegram notification sent successfully."
    });

  } catch (error) {
    console.error("Cron Job Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}