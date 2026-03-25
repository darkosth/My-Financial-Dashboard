import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AlertCircle } from "lucide-react";
import AcceptInviteClient from "./AcceptInviteClient";

export default async function InvitePage({ params }) {
  const { token } = await params; // Next.js 15+ requiere await aquí
  const session = await auth();

  // 1. Buscamos de quién es este link
  const invite = await prisma.workspaceInvite.findUnique({
    where: { token },
    include: { workspace: { include: { owner: true } } }
  });

  // Si el link es falso o lo apagaste
  if (!invite || !invite.active) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <Card className="max-w-md w-full border-red-200">
          <CardHeader className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl text-slate-900">Enlace Inválido</CardTitle>
            <CardDescription className="text-base">
              Esta invitación no existe o ya ha expirado. Pídele al administrador un nuevo enlace.
            </CardDescription>
          </CardHeader>
        {/* AQUÍ BORRAMOS EL </CardContent> QUE ESTORBABA */}
        </Card>
      </div>
    );
  }

  // 2. RENDERIZAMOS LA SALA DE ESPERA
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <Card className="max-w-md w-full shadow-lg border-2 border-slate-200">
        <CardHeader className="text-center space-y-2">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">
            Has sido invitado
          </CardTitle>
          <CardDescription className="text-base">
            <span className="font-semibold text-slate-800">{invite.workspace.owner.name || "Alguien"}</span> te ha invitado a colaborar en su espacio financiero:
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="p-4 bg-slate-100 rounded-xl text-center border border-slate-200">
            <p className="text-lg font-bold text-slate-800">{invite.workspace.name}</p>
          </div>

          {!session ? (
            <div className="text-center space-y-3">
              <p className="text-sm text-amber-600 font-medium bg-amber-50 p-3 rounded-lg border border-amber-100">
                Debes iniciar sesión primero para aceptar esta invitación.
              </p>
              {/* Puedes cambiar esta ruta si tu login está en otro lado */}
              <a href="/api/auth/signin" className="w-full flex justify-center px-4 py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800">
                Iniciar Sesión
              </a>
            </div>
          ) : (
            <AcceptInviteClient token={token} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}