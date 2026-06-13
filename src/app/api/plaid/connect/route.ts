import { connectPlaidItem } from "@/lib/plaidSync";
import { parseRequiredText } from "@/lib/actions/validation";
import { isPlaidConfigured } from "@/lib/plaid";
import { apiErrorResponse, apiJsonError } from "@/lib/apiErrors";
import { assertSameOriginRequest } from "@/lib/requestOrigin";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  if (!isPlaidConfigured()) {
    return apiJsonError(503, "PLAID_NOT_CONFIGURED", "Plaid no esta configurado en este entorno.");
  }

  try {
    await assertSameOriginRequest();

    const body = (await request.json()) as { publicToken?: string };
    const publicToken = parseRequiredText(body.publicToken, "Public token");
    const result = await connectPlaidItem({ publicToken });
    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/settings");
    return Response.json(result);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to connect Plaid item",
      fallbackMessage: "No se pudo conectar el banco.",
    });
  }
}
