import Link from "next/link";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { auth } from "@/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import AcceptInviteClient from "./AcceptInviteClient";

export default async function InvitePage({
  params,
}: {
  params: { token: string } | Promise<{ token: string }>;
}) {
  const { token } = await params;
  const session = await auth();

  const invite = await prisma.workspaceInvite.findUnique({
    where: { token },
    include: { workspace: { include: { owner: true } } },
  });

  if (!invite || !invite.active) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md border-red-200 dark:border-red-900/50">
          <CardHeader className="text-center">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-500" />
            <CardTitle className="text-2xl text-foreground">Enlace invalido</CardTitle>
            <CardDescription className="text-base">
              Esta invitacion no existe o ya expiro. Pidele al administrador un nuevo enlace.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-2 border-border shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Has sido invitado</CardTitle>
          <CardDescription className="text-base">
            <span className="font-semibold text-foreground">{invite.workspace.owner.name || "Alguien"}</span> te ha invitado a
            colaborar en su espacio financiero:
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="rounded-xl border border-border bg-muted p-4 text-center">
            <p className="text-lg font-bold text-foreground">{invite.workspace.name}</p>
          </div>

          {!session ? (
            <div className="space-y-3 text-center">
              <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm font-medium text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/35 dark:text-amber-400">
                Debes iniciar sesion primero para aceptar esta invitacion.
              </p>
              <Link
                href="/"
                className="flex w-full justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Iniciar sesion
              </Link>
            </div>
          ) : (
            <AcceptInviteClient token={token} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
