import { importPlaidAccounts } from "@/lib/plaidSync";
import { apiErrorResponse } from "@/lib/apiErrors";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { remoteAccountIds?: string[] };
    const remoteAccountIds = Array.isArray(body.remoteAccountIds) ? body.remoteAccountIds.filter((value): value is string => typeof value === "string") : [];
    const result = await importPlaidAccounts({ remoteAccountIds });
    return Response.json(result);
  } catch (error) {
    return apiErrorResponse(error, {
      action: "Failed to import Plaid accounts",
      fallbackMessage: "No se pudieron importar las cuentas seleccionadas.",
    });
  }
}
