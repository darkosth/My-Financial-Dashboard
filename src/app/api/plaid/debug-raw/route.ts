import { parseRequiredText } from "@/lib/actions/validation";
import { getPlaidRawBalanceDebug } from "@/lib/plaidSync";
import { isPlaidConfigured } from "@/lib/plaid";
import { apiErrorResponse, apiJsonError } from "@/lib/apiErrors";
import { assertSameOriginRequest } from "@/lib/requestOrigin";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return apiJsonError(503, "PLAID_NOT_CONFIGURED", "Plaid no esta configurado en este entorno.");
  }

  try {
    await assertSameOriginRequest();

    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string };
    const plaidItemId = parseRequiredText(body.plaidItemId, "Plaid item id");
    const result = await getPlaidRawBalanceDebug({ plaidItemId });
    return Response.json(result);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to debug raw Plaid balances",
      fallbackMessage: "No se pudo leer el payload raw de Plaid.",
    });
  }
}
