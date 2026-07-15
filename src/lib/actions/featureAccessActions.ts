"use server";

import { FeatureKey } from "@prisma/client";
import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/lib/actions/validation";
import { assertCurrentSuperAdmin } from "@/lib/featureAccess";
import { isValidEmail, normalizeEmail } from "@/lib/featureAccessPolicy";
import prisma from "@/lib/prisma";

const refreshAccessViews = () => {
  revalidatePath("/admin/access");
  revalidatePath("/dashboard");
  revalidatePath("/plaid");
};

export async function grantPlaidAccess(email: string): Promise<ActionResult> {
  try {
    const actor = await assertCurrentSuperAdmin();
    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      return { success: false, error: "Escribe un correo valido." };
    }

    await prisma.featureAccessGrant.upsert({
      where: {
        email_feature: {
          email: normalizedEmail,
          feature: FeatureKey.PLAID,
        },
      },
      update: {
        active: true,
        createdByUserId: actor.id,
        revokedAt: null,
        revokedByUserId: null,
      },
      create: {
        email: normalizedEmail,
        feature: FeatureKey.PLAID,
        createdByUserId: actor.id,
      },
    });

    refreshAccessViews();
    return { success: true };
  } catch (error) {
    console.error("Failed to grant Plaid access:", error instanceof Error ? error.message : String(error));
    return { success: false, error: "No se pudo conceder el acceso premium." };
  }
}

export async function revokePlaidAccess(email: string): Promise<ActionResult> {
  try {
    const actor = await assertCurrentSuperAdmin();
    const normalizedEmail = normalizeEmail(email);

    await prisma.featureAccessGrant.updateMany({
      where: {
        active: true,
        email: normalizedEmail,
        feature: FeatureKey.PLAID,
      },
      data: {
        active: false,
        revokedAt: new Date(),
        revokedByUserId: actor.id,
      },
    });

    refreshAccessViews();
    return { success: true };
  } catch (error) {
    console.error("Failed to revoke Plaid access:", error instanceof Error ? error.message : String(error));
    return { success: false, error: "No se pudo revocar el acceso premium." };
  }
}
