import { NextResponse } from "next/server";
import { importPlaidAccounts } from "@/lib/plaidSync";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { remoteAccountIds?: string[] };
    const remoteAccountIds = Array.isArray(body.remoteAccountIds) ? body.remoteAccountIds.filter((value): value is string => typeof value === "string") : [];
    const result = await importPlaidAccounts({ remoteAccountIds });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to import Plaid accounts:", error);
    return NextResponse.json({ error: "Failed to import selected accounts." }, { status: 500 });
  }
}
