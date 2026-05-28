import { NextResponse } from "next/server";
import { parseOptionalText } from "@/lib/actions/validation";
import { syncPlaidItemById, syncWorkspacePlaidItems } from "@/lib/plaidSync";
import { isPlaidConfigured } from "@/lib/plaid";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return NextResponse.json({ skipped: true, reason: "plaid_not_configured" });
  }

  try {
    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string };
    const plaidItemId = parseOptionalText(body.plaidItemId, "Plaid item id");

    if (plaidItemId) {
      const result = await syncPlaidItemById(plaidItemId);
      return NextResponse.json(result);
    }

    const result = await syncWorkspacePlaidItems();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to sync Plaid balances:", error);
    return NextResponse.json({ error: "Failed to sync balances." }, { status: 500 });
  }
}
