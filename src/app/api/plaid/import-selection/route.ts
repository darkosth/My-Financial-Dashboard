import { importPlaidAccounts } from "@/lib/plaidSync";
import { apiErrorResponse } from "@/lib/apiErrors";
import { assertSameOriginRequest } from "@/lib/requestOrigin";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    await assertSameOriginRequest();

    const body = (await request.json()) as { remoteAccountIds?: string[] };
    const remoteAccountIds = Array.isArray(body.remoteAccountIds) ? body.remoteAccountIds.filter((value): value is string => typeof value === "string") : [];
    const result = await importPlaidAccounts({ remoteAccountIds });
    revalidatePath("/dashboard");
    revalidatePath("/calendar");
    revalidatePath("/settings");
    return Response.json(result);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to import Plaid accounts",
      fallbackMessage: "No se pudieron importar las cuentas seleccionadas.",
    });
  }
}
