import "server-only";

import type { FeatureKey as PrismaFeatureKey, User } from "@prisma/client";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import {
  hasFeatureAccess,
  normalizeEmail,
  parseEmailList,
  type FeatureKey,
} from "@/lib/featureAccessPolicy";

export class FeatureAccessDeniedError extends Error {
  constructor(public readonly feature: FeatureKey) {
    super(`Premium access required for ${feature}`);
    this.name = "FeatureAccessDeniedError";
  }
}

export class SuperAdminRequiredError extends Error {
  constructor() {
    super("Super administrator access required");
    this.name = "SuperAdminRequiredError";
  }
}

export const getSuperAdminEmails = () => parseEmailList(process.env.SUPER_ADMIN_EMAILS);

export const isSuperAdminEmail = (email: string | null | undefined) => {
  if (!email) {
    return false;
  }

  return getSuperAdminEmails().includes(normalizeEmail(email));
};

export const userHasFeatureAccess = async (email: string | null | undefined, feature: FeatureKey) => {
  if (!email) {
    return false;
  }

  const normalizedEmail = normalizeEmail(email);
  const grant = await prisma.featureAccessGrant.findUnique({
    where: {
      email_feature: {
        email: normalizedEmail,
        feature: feature as PrismaFeatureKey,
      },
    },
    select: {
      active: true,
      feature: true,
    },
  });

  return hasFeatureAccess({
    activeFeatures: grant?.active ? [grant.feature] : [],
    email: normalizedEmail,
    feature,
    superAdminEmails: getSuperAdminEmails(),
  });
};

export const currentUserHasFeatureAccess = async (feature: FeatureKey) => {
  const session = await auth();
  return userHasFeatureAccess(session?.user?.email, feature);
};

export const assertCurrentFeatureAccess = async (feature: FeatureKey) => {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  if (!(await userHasFeatureAccess(session.user.email, feature))) {
    throw new FeatureAccessDeniedError(feature);
  }

  return session.user;
};

export const assertCurrentSuperAdmin = async (): Promise<User> => {
  const session = await auth();
  const email = session?.user?.email;

  if (!email || !isSuperAdminEmail(email)) {
    throw new SuperAdminRequiredError();
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new SuperAdminRequiredError();
  }

  return user;
};
