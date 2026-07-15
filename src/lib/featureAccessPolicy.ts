export type FeatureKey = "PLAID";

export type FeatureAccessInput = {
  activeFeatures: readonly string[];
  email: string | null | undefined;
  feature: FeatureKey;
  superAdminEmails: readonly string[];
};

export const normalizeEmail = (value: string) => value.trim().toLowerCase();

export const isValidEmail = (value: string) => {
  const normalized = normalizeEmail(value);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
};

export const parseEmailList = (value: string | null | undefined) => {
  const emails = (value ?? "")
    .split(",")
    .map(normalizeEmail)
    .filter((email) => email && isValidEmail(email));

  return [...new Set(emails)];
};

export const hasFeatureAccess = ({
  activeFeatures,
  email,
  feature,
  superAdminEmails,
}: FeatureAccessInput) => {
  if (!email) {
    return false;
  }

  const normalizedEmail = normalizeEmail(email);
  const normalizedSuperAdmins = superAdminEmails.map(normalizeEmail);

  return normalizedSuperAdmins.includes(normalizedEmail) || activeFeatures.includes(feature);
};
