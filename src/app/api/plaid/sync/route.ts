import { parseOptionalText } from "@/lib/actions/validation";
import { syncPlaidItemById, syncWorkspacePlaidItems } from "@/lib/plaidSync";
import { isPlaidConfigured } from "@/lib/plaid";
import { apiErrorResponse, apiJsonError } from "@/lib/apiErrors";
import { assertSameOriginRequest } from "@/lib/requestOrigin";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return apiJsonError(200, "PLAID_NOT_CONFIGURED", "Plaid no esta configurado en este entorno.", {
      skipped: true,
      reason: "plaid_not_configured",
    });
  }

  try {
    await assertSameOriginRequest();

    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string };
    const plaidItemId = parseOptionalText(body.plaidItemId, "Plaid item id");

    if (plaidItemId) {
      const result = await syncPlaidItemById(plaidItemId);
      revalidatePath("/dashboard");
      revalidatePath("/calendar");
      revalidatePath("/settings");
      return Response.json(result);
    }

    const result = await syncWorkspacePlaidItems();
    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/settings");
    return Response.json(result);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to sync Plaid balances",
      fallbackMessage: "No se pudieron sincronizar los balances.",
    });
  }
}
