import { FeatureKey } from "@prisma/client";
import { redirect } from "next/navigation";
import AccessAdminPanel from "./AccessAdminPanel";
import { assertCurrentSuperAdmin, getSuperAdminEmails } from "@/lib/featureAccess";
import prisma from "@/lib/prisma";

export default async function AccessAdminPage() {
  try {
    await assertCurrentSuperAdmin();
  } catch {
    redirect("/dashboard");
  }

  const grants = await prisma.featureAccessGrant.findMany({
    where: { feature: FeatureKey.PLAID },
    include: {
      createdBy: { select: { email: true, name: true } },
      revokedBy: { select: { email: true, name: true } },
    },
    orderBy: [{ active: "desc" }, { updatedAt: "desc" }],
  });

  return (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-10">
      <AccessAdminPanel
        grants={grants.map((grant) => ({
          active: grant.active,
          createdBy: grant.createdBy.name || grant.createdBy.email,
          email: grant.email,
          revokedAt: grant.revokedAt?.toISOString() ?? null,
          revokedBy: grant.revokedBy?.name || grant.revokedBy?.email || null,
          updatedAt: grant.updatedAt.toISOString(),
        }))}
        superAdminEmails={getSuperAdminEmails()}
      />
    </main>
  );
}
