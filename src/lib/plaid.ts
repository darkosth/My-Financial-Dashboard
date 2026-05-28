import "server-only";

import crypto from "node:crypto";
import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products,
  type AccountBase,
  type AccountsGetResponse,
  type Institution,
  type LinkTokenCreateRequest,
} from "plaid";

const PLAID_LINK_PRODUCTS = [Products.Transactions];
const PLAID_CLIENT_NAME = "My Financial Dashboard";

type PlaidEnvName = "sandbox" | "development" | "production";

type PlaidEnvConfig = {
  clientId: string;
  secret: string;
  env: PlaidEnvName;
  encryptionSecret: string;
};

type LinkTokenBaseOptions = {
  clientUserId: string;
  webhook?: string;
};

let plaidClient: PlaidApi | null = null;

const normalizePlaidEnv = (value: string | undefined): PlaidEnvName | null => {
  if (value === "sandbox" || value === "development" || value === "production") {
    return value;
  }

  return null;
};

const readPlaidEnvConfig = (): PlaidEnvConfig | null => {
  const clientId = process.env.PLAID_CLIENT_ID?.trim();
  const secret = process.env.PLAID_SECRET?.trim();
  const env = normalizePlaidEnv(process.env.PLAID_ENV?.trim());
  const encryptionSecret = process.env.PLAID_ENCRYPTION_KEY?.trim() || process.env.AUTH_SECRET?.trim();

  if (!clientId || !secret || !env || !encryptionSecret) {
    return null;
  }

  return {
    clientId,
    secret,
    env,
    encryptionSecret,
  };
};

const getPlaidEnvConfig = (): PlaidEnvConfig => {
  const config = readPlaidEnvConfig();

  if (!config) {
    throw new Error("Plaid is not configured");
  }

  return config;
};

export const isPlaidConfigured = () => readPlaidEnvConfig() !== null;

export const getPlaidClient = () => {
  if (plaidClient) {
    return plaidClient;
  }

  const { clientId, secret, env } = getPlaidEnvConfig();

  plaidClient = new PlaidApi(
    new Configuration({
      basePath: PlaidEnvironments[env],
      baseOptions: {
        headers: {
          "PLAID-CLIENT-ID": clientId,
          "PLAID-SECRET": secret,
        },
      },
    }),
  );

  return plaidClient;
};

const deriveEncryptionKey = () => crypto.createHash("sha256").update(getPlaidEnvConfig().encryptionSecret).digest();

export const encryptPlaidAccessToken = (plaintext: string) => {
  const key = deriveEncryptionKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return [iv.toString("base64"), authTag.toString("base64"), encrypted.toString("base64")].join(".");
};

export const decryptPlaidAccessToken = (ciphertext: string) => {
  const [ivBase64, authTagBase64, encryptedBase64] = ciphertext.split(".");

  if (!ivBase64 || !authTagBase64 || !encryptedBase64) {
    throw new Error("Invalid Plaid token ciphertext");
  }

  const key = deriveEncryptionKey();
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(ivBase64, "base64"));
  decipher.setAuthTag(Buffer.from(authTagBase64, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedBase64, "base64")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
};

export const buildLinkTokenRequest = ({
  clientUserId,
  webhook,
  accessToken,
}: LinkTokenBaseOptions & { accessToken?: string }) => {
  const request: LinkTokenCreateRequest = {
    user: {
      client_user_id: clientUserId,
    },
    client_name: PLAID_CLIENT_NAME,
    language: "en",
    country_codes: [CountryCode.Us],
  };

  if (webhook) {
    request.webhook = webhook;
  }

  if (accessToken) {
    request.access_token = accessToken;
  } else {
    request.products = PLAID_LINK_PRODUCTS;
  }

  return request;
};

export const buildPlaidDisplayName = ({
  institutionName,
  remoteName,
  officialName,
  mask,
}: {
  institutionName?: string | null;
  remoteName: string;
  officialName?: string | null;
  mask?: string | null;
}) => {
  const baseName = officialName?.trim() || remoteName.trim();
  const institution = institutionName?.trim();
  const suffix = mask?.trim() ? ` • ${mask.trim()}` : "";

  return [institution, baseName].filter(Boolean).join(" ") + suffix;
};

export const mapPlaidAccountKind = (type: AccountBase["type"]) => {
  switch (type) {
    case "depository":
      return "DEPOSITORY" as const;
    case "credit":
      return "CREDIT" as const;
    case "loan":
      return "LOAN" as const;
    case "investment":
      return "INVESTMENT" as const;
    default:
      return "OTHER" as const;
  }
};

export const isSupportedPlaidImportKind = (type: AccountBase["type"]) => type === "depository" || type === "credit";

export const getPlaidInstitutionName = (institution: Institution | null | undefined, fallback?: string | null) =>
  institution?.name?.trim() || fallback?.trim() || null;

export const extractBalanceAccounts = (response: AccountsGetResponse) => response.accounts;
