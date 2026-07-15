"use client";

import { useState, useTransition } from "react";
import { KeyRound, ShieldCheck, UserPlus, UserRoundX } from "lucide-react";
import { useRouter } from "next/navigation";
import { grantPlaidAccess, revokePlaidAccess } from "@/lib/actions/featureAccessActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type GrantRow = {
  active: boolean;
  createdBy: string;
  email: string;
  revokedAt: string | null;
  revokedBy: string | null;
  updatedAt: string;
};

type PendingAction = { kind: "grant" | "revoke"; email: string } | null;
type ActionError = { email: string; message: string; scope: "form" | "row" } | null;

export default function AccessAdminPanel({
  grants,
  superAdminEmails,
}: {
  grants: GrantRow[];
  superAdminEmails: string[];
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<ActionError>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [isPending, startTransition] = useTransition();

  const applyGrant = (targetEmail: string, clearInput = false) => {
    setError(null);
    setPendingAction({ kind: "grant", email: targetEmail });
    startTransition(async () => {
      const result = await grantPlaidAccess(targetEmail);
      if (!result.success) {
        setError({ email: targetEmail, message: result.error || "No se pudo conceder el acceso premium.", scope: clearInput ? "form" : "row" });
        setPendingAction(null);
        return;
      }
      if (clearInput) {
        setEmail("");
      }
      setPendingAction(null);
      router.refresh();
    });
  };

  const revokeGrant = (targetEmail: string) => {
    if (!window.confirm(`Revocar Plaid Premium para ${targetEmail}? La sincronizacion se detendra, pero los ultimos datos permaneceran visibles.`)) {
      return;
    }

    setError(null);
    setPendingAction({ kind: "revoke", email: targetEmail });
    startTransition(async () => {
      const result = await revokePlaidAccess(targetEmail);
      if (!result.success) {
        setError({ email: targetEmail, message: result.error || "No se pudo revocar el acceso premium.", scope: "row" });
        setPendingAction(null);
        return;
      }
      setPendingAction(null);
      router.refresh();
    });
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              <KeyRound className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">Control global</p>
              <h1 className="text-3xl font-black tracking-tight">Acceso premium</h1>
            </div>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground">Autoriza Plaid por correo. El dashboard manual permanece disponible sin este permiso.</p>
        </div>
        <Badge variant="secondary" className="w-fit px-3 py-1.5">{grants.filter((grant) => grant.active).length} activos</Badge>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Card className="h-fit border-emerald-200 shadow-sm dark:border-emerald-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><UserPlus className="h-5 w-5 text-emerald-600" /> Autorizar correo</CardTitle>
            <CardDescription>El permiso funciona aunque el usuario todavía no haya iniciado sesión.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                applyGrant(email, true);
              }}
            >
            <div className="space-y-2">
              <Label htmlFor="premium-email">Correo de Google</Label>
              <Input
                id="premium-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="user@example.com"
                autoComplete="email"
                aria-describedby={error?.scope === "form" ? "premium-email-error" : undefined}
                disabled={pendingAction?.kind === "grant"}
                required
              />
            </div>
            {error?.scope === "form" ? <p id="premium-email-error" role="alert" className="text-sm font-medium text-red-600 dark:text-red-300">{error.message}</p> : null}
            <Button type="submit" className="w-full bg-emerald-700 text-white hover:bg-emerald-800" disabled={isPending || !email.trim()}>
              {pendingAction?.kind === "grant" && pendingAction.email === email ? "Concediendo..." : "Conceder Plaid Premium"}
            </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-amber-200 bg-amber-50/60 dark:border-amber-950 dark:bg-amber-950/20">
            <CardContent className="flex items-start gap-3 py-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300" />
              <div>
                <p className="text-sm font-semibold">Supercuenta</p>
                <p className="mt-1 break-all text-sm text-muted-foreground">{superAdminEmails.join(", ") || "Sin correo administrador configurado"}</p>
              </div>
            </CardContent>
          </Card>

          {grants.length === 0 ? (
            <Card><CardContent className="py-10 text-center text-sm text-muted-foreground">Todavía no hay accesos premium asignados.</CardContent></Card>
          ) : (
            grants.map((grant) => (
              <Card key={grant.email} className={grant.active ? "border-emerald-200 dark:border-emerald-950" : "border-border bg-muted/20"}>
                <CardContent className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="break-all font-semibold" title={grant.email}>{grant.email}</p>
                      <Badge variant={grant.active ? "default" : "outline"}>{grant.active ? "Premium" : "Revocado"}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {grant.active ? `Autorizado por ${grant.createdBy}` : `Revocado por ${grant.revokedBy || "administrador"}`}
                    </p>
                  </div>
                  {error?.scope === "row" && error.email === grant.email ? (
                    <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-300">{error.message}</p>
                  ) : null}
                  {grant.active ? (
                    <Button variant="outline" disabled={isPending} onClick={() => revokeGrant(grant.email)} className="text-red-600 hover:text-red-700">
                      <UserRoundX className="mr-2 h-4 w-4" />
                      {pendingAction?.kind === "revoke" && pendingAction.email === grant.email ? "Revocando..." : "Revocar"}
                    </Button>
                  ) : (
                    <Button variant="outline" disabled={isPending} onClick={() => applyGrant(grant.email)}>
                      {pendingAction?.kind === "grant" && pendingAction.email === grant.email ? "Reactivando..." : "Reactivar"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
