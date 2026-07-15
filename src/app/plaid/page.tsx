import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { redirect } from "next/navigation";
import PlaidBankSyncFlow from "@/components/plaid/PlaidBankSyncFlow";
import { currentUserHasFeatureAccess } from "@/lib/featureAccess";

type PlaidPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const getSingleParam = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function PlaidPage({ searchParams }: PlaidPageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (!(await currentUserHasFeatureAccess("PLAID"))) {
    redirect("/dashboard?premium=plaid");
  }

  const resolvedParams = (await searchParams) ?? {};
  const requestedMode = getSingleParam(resolvedParams.mode);
  const requestedPlaidItemId = getSingleParam(resolvedParams.plaidItemId);
  const mode: "connect" | "reconnect" = requestedMode === "reconnect" ? "reconnect" : "connect";

  let institutionName: string | null = null;
  let initialError: string | null = null;

  if (mode === "reconnect") {
    if (!requestedPlaidItemId) {
      initialError = "No se encontro la referencia bancaria para esta reconexion.";
    } else {
      const { activeWorkspace } = await getCurrentUserContext();
      const plaidItem = await prisma.plaidItem.findFirst({
        where: {
          id: requestedPlaidItemId,
          workspaceId: activeWorkspace.id,
        },
        select: {
          id: true,
          institutionName: true,
        },
      });

      if (!plaidItem) {
        initialError = "La conexion bancaria solicitada no existe en este workspace.";
      } else {
        institutionName = plaidItem.institutionName;
      }
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PlaidBankSyncFlow
        canStartFreshConnect={mode === "reconnect"}
        initialError={initialError}
        institutionName={institutionName}
        mode={mode}
        plaidItemId={mode === "reconnect" ? (requestedPlaidItemId ?? null) : null}
      />
    </main>
  );
}
