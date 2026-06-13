import { NextResponse } from "next/server";
import { ValidationError } from "@/lib/actions/validation";

type ErrorPayload = {
  code: string;
  error: string;
};

type ErrorContext = {
  action: string;
  fallbackMessage: string;
};

type PlaidApiError = {
  response?: {
    data?: {
      error_code?: string;
      error_message?: string;
      display_message?: string | null;
    };
  };
};

export class ApiError extends Error {
  status: number;
  code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

const plaidReauthCodes = new Set(["ITEM_LOGIN_REQUIRED", "PENDING_DISCONNECT", "PENDING_EXPIRATION"]);

const buildPayload = (code: string, error: string): ErrorPayload => ({
  code,
  error,
});

const mapPlaidApiError = (error: PlaidApiError, fallbackMessage: string) => {
  const errorCode = error.response?.data?.error_code;

  if (!errorCode) {
    return null;
  }

  const message =
    error.response?.data?.display_message?.trim() ||
    error.response?.data?.error_message?.trim() ||
    fallbackMessage;

  if (plaidReauthCodes.has(errorCode)) {
    return new ApiError(409, "PLAID_REAUTH_REQUIRED", message);
  }

  return new ApiError(502, errorCode, message);
};

export const toApiError = (error: unknown, { fallbackMessage }: ErrorContext): ApiError => {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof ValidationError) {
    return new ApiError(400, "VALIDATION_ERROR", error.message);
  }

  const plaidError = mapPlaidApiError(error as PlaidApiError, fallbackMessage);

  if (plaidError) {
    return plaidError;
  }

  if (error instanceof Error) {
    switch (error.message) {
      case "Unauthorized":
        return new ApiError(401, "UNAUTHORIZED", "Necesitas iniciar sesion para conectar tu banco.");
      case "No accounts selected for import":
        return new ApiError(400, "NO_REMOTE_ACCOUNTS_SELECTED", "Selecciona al menos una cuenta o tarjeta para importar.");
      case "Plaid item not found":
      case "Linked Plaid account not found":
        return new ApiError(404, "PLAID_ITEM_NOT_FOUND", "No se encontro la conexion bancaria solicitada.");
      case "This bank connection belongs to a different workspace.":
      case "Plaid item workspace mismatch.":
        return new ApiError(403, "PLAID_WORKSPACE_MISMATCH", "Esta conexion bancaria pertenece a otro workspace.");
      case "No linked bank item was found to reconnect.":
        return new ApiError(404, "PLAID_ITEM_NOT_FOUND", "No se encontro la conexion bancaria para reconectar.");
      default:
        break;
    }
  }

  return new ApiError(500, "INTERNAL_ERROR", fallbackMessage);
};

export const logApiError = (error: unknown, { action, fallbackMessage }: ErrorContext) => {
  const normalizedError = toApiError(error, { action, fallbackMessage });
  const logMethod = normalizedError.status >= 500 ? console.error : console.warn;
  const details =
    error instanceof Error
      ? {
          name: error.name,
          message: error.message,
        }
      : {
          message: String(error),
        };

  logMethod(`${action}:`, {
    code: normalizedError.code,
    details,
    message: normalizedError.message,
    status: normalizedError.status,
  });

  return normalizedError;
};

export const apiErrorResponse = (error: unknown, context: ErrorContext) => {
  const normalizedError = logApiError(error, context);

  return NextResponse.json(buildPayload(normalizedError.code, normalizedError.message), {
    status: normalizedError.status,
  });
};

export const apiJsonError = (status: number, code: string, error: string, extra?: Record<string, unknown>) =>
  NextResponse.json(
    {
      ...buildPayload(code, error),
      ...extra,
    },
    { status },
  );
