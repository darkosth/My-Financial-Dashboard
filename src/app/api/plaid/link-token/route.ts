import { NextResponse } from "next/server";
import { createPlaidLinkToken } from "@/lib/plaidSync";
import { isPlaidConfigured } from "@/lib/plaid";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return NextResponse.json({ error: "Plaid is not configured." }, { status: 503 });
  }

  try {
    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string };
    const data = await createPlaidLinkToken({ plaidItemId: body.plaidItemId });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to create Plaid link token:", error);
    return NextResponse.json({ error: "Failed to create link token." }, { status: 500 });
  }
}
