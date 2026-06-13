"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { usePlaidLink } from "react-plaid-link";
import { AlertCircle, ArrowLeft, CheckCircle2, Landmark, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlaidReviewAccount } from "@/lib/plaidSync";

type PlaidBankSyncFlowProps = {
  canStartFreshConnect?: boolean;
  initialError?: string | null;
  institutionName?: string | null;
  mode: "connect" | "reconnect";
  plaidItemId?: string | null;
};

type LinkTokenResponse = {
  linkToken: string;
  mode: "connect" | "update";
};

type ConnectResponse = {
  plaidItemId: string;
  accounts: PlaidReviewAccount[];
};

type ImportResponse = {
  accountsImported: number;
  creditCardsImported: number;
};

type ApiErrorPayload = {
  code?: string;
  error?: string;
};

const fallbackErrorMessage = "La conexion bancaria fallo por un error inesperado.";
const dashboardHref = "/dashboard";

const getPlaidErrorMessage = (payload: ApiErrorPayload | null, fallbackMessage: string) => {
  switch (payload?.code) {
    case "UNAUTHORIZED":
      return "Tu sesion expiro. Vuelve a iniciar sesion e intenta otra vez.";
    case "PLAID_NOT_CONFIGURED":
      return "Plaid no esta configurado en este entorno todavia.";
    case "PLAID_REAUTH_REQUIRED":
      return payload.error || "El banco pide reautenticacion antes de continuar.";
    case "PLAID_ITEM_NOT_FOUND":
      return payload.error || "No se encontro la conexion bancaria solicitada.";
    case "PLAID_WORKSPACE_MISMATCH":
      return "Esta conexion bancaria pertenece a otro workspace.";
    case "NO_REMOTE_ACCOUNTS_SELECTED":
      return "Selecciona al menos una cuenta o tarjeta para importar.";
    case "VALIDATION_ERROR":
      return payload.error || fallbackMessage;
    default:
      return payload?.error || fallbackMessage || fallbackErrorMessage;
  }
};

const postJson = async <T,>(url: string, body: Record<string, unknown>) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => ({ error: fallbackErrorMessage }))) as ApiErrorPayload;
    throw new Error(getPlaidErrorMessage(payload, fallbackErrorMessage));
  }

  return (await response.json()) as T;
};

const warningCopy =
  "Se importaron cuentas sincronizadas desde tu banco. Si ya tenias cuentas o tarjetas manuales equivalentes, revisalas y elimina las duplicadas para evitar que la liquidez o la deuda se cuenten dos veces.";

export default function PlaidBankSyncFlow({
  canStartFreshConnect = false,
  initialError = null,
  institutionName = null,
  mode,
  plaidItemId = null,
}: PlaidBankSyncFlowProps) {
  const router = useRouter();
  const [linkToken, setLinkToken] = React.useState<string | null>(null);
  const [linkMode, setLinkMode] = React.useState<"connect" | "update">("connect");
  const [isPlaidLinkActive, setIsPlaidLinkActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(initialError);
  const [review, setReview] = React.useState<ConnectResponse | null>(null);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [importSummary, setImportSummary] = React.useState<ImportResponse | null>(null);
  const [hasAttemptedAutoOpen, setHasAttemptedAutoOpen] = React.useState(false);
  const [hasLoadedLink, setHasLoadedLink] = React.useState(false);
  const [canRetryAsFreshConnect, setCanRetryAsFreshConnect] = React.useState(false);

  const handleBackToDashboard = React.useCallback(() => {
    router.push(dashboardHref);
    router.refresh();
  }, [router]);

  const handleLinkSuccess = React.useCallback(
    async (publicToken: string) => {
      setLoading(true);
      setIsPlaidLinkActive(false);
      setError(null);

      try {
        if (mode === "reconnect" || linkMode === "update") {
          if (!plaidItemId) {
            throw new Error("No linked bank item was found to reconnect.");
          }

          await postJson("/api/plaid/sync", { plaidItemId });
          handleBackToDashboard();
          return;
        }

        const payload = await postJson<ConnectResponse>("/api/plaid/connect", { publicToken });
        setReview(payload);
        setSelectedIds(payload.accounts.filter((account) => account.isSupported && !account.isImported).map((account) => account.id));
      } catch (caughtError) {
        const nextError = caughtError instanceof Error ? caughtError.message : "No se pudo conectar el banco.";
        setError(nextError);
        if (mode === "reconnect" || linkMode === "update") {
          setCanRetryAsFreshConnect(true);
        }
      } finally {
        setLoading(false);
      }
    },
    [handleBackToDashboard, linkMode, mode, plaidItemId],
  );

  const {
    error: plaidLinkError,
    open: openPlaid,
    ready,
  } = usePlaidLink({
    token: linkToken,
    onLoad: () => {
      setHasLoadedLink(true);
    },
    onSuccess: (publicToken) => {
      setIsPlaidLinkActive(false);
      void handleLinkSuccess(publicToken);
    },
    onExit: (plaidError) => {
      setIsPlaidLinkActive(false);

      if (plaidError?.display_message) {
        setError(plaidError.display_message);
      }
    },
  });

  React.useEffect(() => {
    if (!plaidLinkError) {
      return;
    }

    setError(plaidLinkError.message || "No se pudo cargar Plaid Link en esta pagina.");
    setIsPlaidLinkActive(false);
  }, [plaidLinkError]);

  const handleOpenPlaid = React.useCallback(() => {
    if (!linkToken || !ready) {
      return;
    }

    setError(null);
    setIsPlaidLinkActive(true);
    openPlaid();
  }, [linkToken, openPlaid, ready]);

  React.useEffect(() => {
    if (initialError || linkToken || review || importSummary || loading) {
      return;
    }

    setLoading(true);
    setError(null);

    void postJson<LinkTokenResponse>("/api/plaid/link-token", {
      plaidItemId,
      requireExistingItem: mode === "reconnect",
    })
      .then((payload) => {
        setCanRetryAsFreshConnect(false);
        setLinkToken(payload.linkToken);
        setLinkMode(payload.mode);
      })
      .catch((caughtError) => {
        setError(caughtError instanceof Error ? caughtError.message : "No se pudo iniciar Plaid Link.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [importSummary, initialError, linkToken, loading, mode, plaidItemId, review]);

  React.useEffect(() => {
    if (!linkToken || !ready || hasAttemptedAutoOpen || review || importSummary || initialError) {
      return;
    }

    setHasAttemptedAutoOpen(true);
    handleOpenPlaid();
  }, [handleOpenPlaid, hasAttemptedAutoOpen, importSummary, initialError, linkToken, ready, review]);

  const toggleSelection = (id: string) => {
    setSelectedIds((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));
  };

  const handleImport = async () => {
    if (!selectedIds.length) {
      setError("Selecciona al menos una cuenta o tarjeta para importar.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = await postJson<ImportResponse>("/api/plaid/import-selection", { remoteAccountIds: selectedIds });
      setImportSummary(payload);
      handleBackToDashboard();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "No se pudieron importar las cuentas seleccionadas.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-8 md:px-10">
      <div className="mb-6">
        <Button variant="ghost" onClick={handleBackToDashboard} className="px-0 text-muted-foreground hover:bg-transparent">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al dashboard
        </Button>
      </div>

      <Card className="overflow-visible">
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>{mode === "reconnect" ? "Reconectar banco" : "Conectar banco"}</CardTitle>
            <Badge variant="secondary">{mode === "reconnect" ? "Reautenticacion" : "Bank sync"}</Badge>
          </div>
          <CardDescription>
            {mode === "reconnect"
              ? `Plaid abrira el flujo de reautenticacion${institutionName ? ` para ${institutionName}` : ""} sin crear una conexion bancaria nueva.`
              : "Plaid abrira tu banco para traer balances y tarjetas sin reemplazar tus cuentas manuales."}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pb-6">
          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-4 w-4" />
                <div className="space-y-3">
                  <span className="block">{error}</span>
                  {canStartFreshConnect && (!linkToken || canRetryAsFreshConnect) && mode === "reconnect" ? (
                    <Button type="button" variant="outline" size="sm" onClick={() => router.replace("/plaid")}>
                      Conectar otro banco
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {importSummary ? (
            <div className="space-y-4 py-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <div className="space-y-2">
                    <p className="font-semibold">
                      {mode === "reconnect" || linkMode === "update"
                        ? "La conexion bancaria se actualizo correctamente."
                        : "La importacion bancaria se completo."}
                    </p>
                    {importSummary.accountsImported > 0 || importSummary.creditCardsImported > 0 ? (
                      <p className="text-sm">
                        {importSummary.accountsImported} cuentas bancarias y {importSummary.creditCardsImported} tarjetas sincronizadas quedaron agregadas al dashboard.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              {mode !== "reconnect" ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
                  {warningCopy}
                </div>
              ) : null}

              <Button className="w-full" onClick={handleBackToDashboard}>
                Volver al dashboard
              </Button>
            </div>
          ) : review ? (
            <div className="space-y-4 py-2">
              <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                Selecciona que cuentas quieres importar. Las cuentas bancarias se agregaran a Liquidez y las tarjetas a Credit Cards.
              </div>

              <div className="space-y-3">
                {review.accounts.map((account) => {
                  const selectable = account.isSupported && !account.isImported;
                  const checked = selectedIds.includes(account.id);

                  return (
                    <label
                      key={account.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors ${
                        selectable ? "border-border bg-background hover:bg-muted/40" : "border-border/60 bg-muted/20 opacity-70"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-border"
                        checked={checked}
                        disabled={!selectable || loading}
                        onChange={() => toggleSelection(account.id)}
                      />
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium text-foreground">{account.name}</p>
                          <Badge variant="outline">
                            {account.kind === "DEPOSITORY" ? "Cuenta bancaria" : account.kind === "CREDIT" ? "Tarjeta" : account.kind}
                          </Badge>
                          {account.isImported ? <Badge variant="secondary">Ya importada</Badge> : null}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {account.institutionName || "Institucion bancaria"}
                          {account.mask ? ` • ${account.mask}` : ""}
                          {account.subtype ? ` • ${account.subtype}` : ""}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {account.kind === "DEPOSITORY"
                            ? `Disponible: ${account.availableBalance?.toFixed(2) ?? "--"} | Actual: ${account.currentBalance?.toFixed(2) ?? "--"}`
                            : `Deuda actual: ${account.currentBalance?.toFixed(2) ?? "--"} | Limite: ${account.creditLimit?.toFixed(2) ?? "--"}`}
                        </p>
                        {!account.isSupported ? (
                          <p className="text-xs text-amber-600 dark:text-amber-300">
                            Este tipo de cuenta se guardo para futuro, pero no se importa en esta version.
                          </p>
                        ) : null}
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
                <Button type="button" variant="outline" onClick={handleBackToDashboard}>
                  Cancelar
                </Button>
                <Button type="button" onClick={handleImport} disabled={loading || selectedIds.length === 0}>
                  {loading ? "Importando..." : "Importar seleccion"}
                </Button>
              </div>
            </div>
          ) : (
            <div className={`space-y-4 py-2 ${isPlaidLinkActive ? "pointer-events-none opacity-60" : ""}`}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                {mode === "reconnect" ? (
                  <RefreshCcw className="mt-0.5 h-5 w-5 text-muted-foreground" />
                ) : (
                  <Landmark className="mt-0.5 h-5 w-5 text-muted-foreground" />
                )}
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    {loading ? "Preparando Plaid Link..." : isPlaidLinkActive ? "Plaid Link activo..." : "Listo para abrir Plaid Link"}
                  </p>
                  <p>
                    {isPlaidLinkActive
                      ? "El flujo queda bloqueado mientras completas o cancelas Plaid Link."
                      : ready
                        ? "Si no se abre automaticamente, usa el boton de abajo para lanzar el flujo manualmente."
                        : hasLoadedLink
                          ? "Plaid Link cargo, pero todavia no esta listo para abrirse."
                          : "Estamos cargando el SDK de Plaid para esta pagina."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
                <Button type="button" variant="outline" onClick={handleBackToDashboard} disabled={isPlaidLinkActive}>
                  Cancelar
                </Button>
                <Button type="button" onClick={handleOpenPlaid} disabled={!ready || loading || !linkToken || isPlaidLinkActive}>
                  Abrir Plaid Link
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
