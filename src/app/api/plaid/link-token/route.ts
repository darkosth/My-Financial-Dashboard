import { createPlaidLinkToken } from "@/lib/plaidSync";
import { isPlaidConfigured } from "@/lib/plaid";
import { apiErrorResponse, apiJsonError } from "@/lib/apiErrors";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return apiJsonError(503, "PLAID_NOT_CONFIGURED", "Plaid no esta configurado en este entorno.");
  }

  try {
    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string };
    const data = await createPlaidLinkToken({ plaidItemId: body.plaidItemId });
    return Response.json(data);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to create Plaid link token",
      fallbackMessage: "No se pudo iniciar Plaid Link.",
    });
  }
}
