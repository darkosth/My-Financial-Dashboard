import { NextResponse } from "next/server";
import { connectPlaidItem } from "@/lib/plaidSync";
import { parseRequiredText } from "@/lib/actions/validation";
import { isPlaidConfigured } from "@/lib/plaid";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return NextResponse.json({ error: "Plaid is not configured." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { publicToken?: string };
    const publicToken = parseRequiredText(body.publicToken, "Public token");
    const result = await connectPlaidItem({ publicToken });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to connect Plaid item:", error);
    return NextResponse.json({ error: "Failed to connect bank account." }, { status: 500 });
  }
}
