"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { usePlaidLink } from "react-plaid-link";
import { AlertCircle, CheckCircle2, Landmark, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { PlaidReviewAccount } from "@/lib/plaidSync";

type PlaidBankSyncDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plaidItemId?: string | null;
  mode?: "connect" | "reconnect";
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

export default function PlaidBankSyncDialog({
  open,
  onOpenChange,
  plaidItemId = null,
  mode = "connect",
}: PlaidBankSyncDialogProps) {
  const router = useRouter();
  const [linkToken, setLinkToken] = React.useState<string | null>(null);
  const [linkMode, setLinkMode] = React.useState<"connect" | "update">("connect");
  const [isPlaidLinkActive, setIsPlaidLinkActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [review, setReview] = React.useState<ConnectResponse | null>(null);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [importSummary, setImportSummary] = React.useState<ImportResponse | null>(null);
  const openedRef = React.useRef(false);

  const resetState = React.useCallback(() => {
    setLinkToken(null);
    setLinkMode("connect");
    setIsPlaidLinkActive(false);
    setLoading(false);
    setError(null);
    setReview(null);
    setSelectedIds([]);
    setImportSummary(null);
    openedRef.current = false;
  }, []);

  const handleLinkSuccess = React.useCallback(
    async (publicToken: string) => {
      setLoading(true);
      setIsPlaidLinkActive(false);
      setError(null);

      try {
        if (plaidItemId || mode === "reconnect" || linkMode === "update") {
          if (!plaidItemId) {
            throw new Error("No linked bank item was found to reconnect.");
          }

          await postJson("/api/plaid/sync", { plaidItemId });
          router.refresh();
          setImportSummary({ accountsImported: 0, creditCardsImported: 0 });
          return;
        }

        const payload = await postJson<ConnectResponse>("/api/plaid/connect", { publicToken });
        setReview(payload);
        setSelectedIds(payload.accounts.filter((account) => account.isSupported && !account.isImported).map((account) => account.id));
      } catch (caughtError) {
        setError(caughtError instanceof Error ? caughtError.message : "No se pudo conectar el banco.");
      } finally {
        setLoading(false);
      }
    },
    [linkMode, mode, plaidItemId, router],
  );

  const { open: openPlaid, ready } = usePlaidLink({
    token: linkToken,
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

  const handleOpenPlaid = React.useCallback(() => {
    if (!linkToken || !ready) {
      return;
    }

    setIsPlaidLinkActive(true);
    openPlaid();
  }, [linkToken, openPlaid, ready]);

  React.useEffect(() => {
    if (!open) {
      resetState();
      return;
    }

    if (linkToken || review || importSummary || loading) {
      return;
    }

    setLoading(true);
    setError(null);

    void postJson<LinkTokenResponse>("/api/plaid/link-token", { plaidItemId })
      .then((payload) => {
        setLinkToken(payload.linkToken);
        setLinkMode(payload.mode);
      })
      .catch((caughtError) => {
        setError(caughtError instanceof Error ? caughtError.message : "No se pudo iniciar Plaid Link.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [importSummary, linkToken, loading, open, plaidItemId, resetState, review]);

  React.useEffect(() => {
    if (!open || !linkToken || !ready || openedRef.current || review || importSummary) {
      return;
    }

    openedRef.current = true;
    handleOpenPlaid();
  }, [handleOpenPlaid, importSummary, linkToken, open, ready, review]);

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
      router.refresh();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "No se pudieron importar las cuentas seleccionadas.");
    } finally {
      setLoading(false);
    }
  };

  const renderImportSummary = () => (
    <div className="space-y-4 py-2">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5" />
          <div className="space-y-2">
            <p className="font-semibold">
              {plaidItemId || mode === "reconnect" || linkMode === "update"
                ? "La conexion bancaria se actualizo correctamente."
                : "La importacion bancaria se completo."}
            </p>
            {importSummary && (importSummary.accountsImported > 0 || importSummary.creditCardsImported > 0) ? (
              <p className="text-sm">
                {importSummary.accountsImported} cuentas bancarias y {importSummary.creditCardsImported} tarjetas sincronizadas quedaron agregadas al dashboard.
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {!plaidItemId && mode !== "reconnect" ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
          {warningCopy}
        </div>
      ) : null}

      <DialogFooter>
        <Button
          className="w-full"
          onClick={() => {
            onOpenChange(false);
            router.refresh();
          }}
        >
          Cerrar
        </Button>
      </DialogFooter>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-4 py-2">
      <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        Selecciona que cuentas quieres importar. Las cuentas bancarias se agregaran a Liquidez y las tarjetas a Credit Cards.
      </div>

      <div className="space-y-3">
        {review?.accounts.map((account) => {
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
                  <Badge variant="outline">{account.kind === "DEPOSITORY" ? "Cuenta bancaria" : account.kind === "CREDIT" ? "Tarjeta" : account.kind}</Badge>
                  {account.isImported ? <Badge variant="secondary">Ya importada</Badge> : null}
                </div>
                <p className="text-xs text-muted-foreground">
                  {account.institutionName || "Institucion bancaria"}{account.mask ? ` • ${account.mask}` : ""}{account.subtype ? ` • ${account.subtype}` : ""}
                </p>
                <p className="text-xs text-muted-foreground">
                  {account.kind === "DEPOSITORY"
                    ? `Disponible: ${account.availableBalance?.toFixed(2) ?? "--"} | Actual: ${account.currentBalance?.toFixed(2) ?? "--"}`
                    : `Deuda actual: ${account.currentBalance?.toFixed(2) ?? "--"} | Limite: ${account.creditLimit?.toFixed(2) ?? "--"}`}
                </p>
                {!account.isSupported ? (
                  <p className="text-xs text-amber-600 dark:text-amber-300">Este tipo de cuenta se guardo para futuro, pero no se importa en esta version.</p>
                ) : null}
              </div>
            </label>
          );
        })}
      </div>

      <DialogFooter className="gap-2 sm:justify-between">
        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button type="button" onClick={handleImport} disabled={loading || selectedIds.length === 0}>
          {loading ? "Importando..." : "Importar seleccion"}
        </Button>
      </DialogFooter>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AppDialogContent
        size="wide"
        showCloseButton={!isPlaidLinkActive}
        onEscapeKeyDown={(event) => {
          if (isPlaidLinkActive) {
            event.preventDefault();
          }
        }}
        onInteractOutside={(event) => {
          if (isPlaidLinkActive) {
            event.preventDefault();
          }
        }}
        onPointerDownOutside={(event) => {
          if (isPlaidLinkActive) {
            event.preventDefault();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{plaidItemId || mode === "reconnect" ? "Reconectar banco" : "Conectar banco"}</DialogTitle>
          <DialogDescription>
            {plaidItemId || mode === "reconnect"
              ? "Plaid abrira el flujo de reautenticacion para restaurar el sync del banco sin crear una conexion nueva."
              : "Plaid abrira tu banco para traer balances y tarjetas sin reemplazar tus cuentas manuales."}
          </DialogDescription>
        </DialogHeader>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4" />
              <span>{error}</span>
            </div>
          </div>
        ) : null}

        {importSummary ? (
          renderImportSummary()
        ) : review ? (
          renderReview()
        ) : (
          <div className={`space-y-4 py-4 ${isPlaidLinkActive ? "pointer-events-none opacity-60" : ""}`}>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
              {plaidItemId || mode === "reconnect" ? <RefreshCcw className="mt-0.5 h-5 w-5 text-muted-foreground" /> : <Landmark className="mt-0.5 h-5 w-5 text-muted-foreground" />}
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {loading ? "Preparando Plaid Link..." : isPlaidLinkActive ? "Plaid Link activo..." : "Abriendo Plaid Link..."}
                </p>
                <p>
                  {isPlaidLinkActive
                    ? "El formulario queda bloqueado mientras completas o cancelas Plaid Link."
                    : "Si no aparece automaticamente, usa el boton de abajo para abrir el flujo manualmente."}
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isPlaidLinkActive}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleOpenPlaid} disabled={!ready || loading || !linkToken || isPlaidLinkActive}>
                Abrir Plaid Link
              </Button>
            </DialogFooter>
          </div>
        )}
      </AppDialogContent>
    </Dialog>
  );
}
