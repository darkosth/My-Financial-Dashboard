import { createPlaidLinkToken } from "@/lib/plaidSync";
import { ValidationError, parseOptionalText } from "@/lib/actions/validation";
import { isPlaidConfigured } from "@/lib/plaid";
import { apiErrorResponse, apiJsonError } from "@/lib/apiErrors";
import { assertSameOriginRequest } from "@/lib/requestOrigin";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return apiJsonError(503, "PLAID_NOT_CONFIGURED", "Plaid no esta configurado en este entorno.");
  }

  try {
    await assertSameOriginRequest();

    const body = (await request.json().catch(() => ({}))) as { plaidItemId?: string; requireExistingItem?: boolean };
    const plaidItemId = parseOptionalText(body.plaidItemId, "Plaid item id");

    if (body.requireExistingItem != null && typeof body.requireExistingItem !== "boolean") {
      throw new ValidationError("Require existing item is invalid");
    }

    const data = await createPlaidLinkToken({
      plaidItemId: plaidItemId ?? undefined,
      requireExistingItem: body.requireExistingItem === true,
    });
    return Response.json(data);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to create Plaid link token",
      fallbackMessage: "No se pudo iniciar Plaid Link.",
    });
  }
}
