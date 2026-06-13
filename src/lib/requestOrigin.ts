import "server-only";

import { headers } from "next/headers";
import { ApiError } from "@/lib/apiErrors";

const getExpectedOrigin = (headerStore: Headers) => {
  const forwardedHost = headerStore.get("x-forwarded-host");
  const host = forwardedHost || headerStore.get("host");

  if (!host) {
    return null;
  }

  const protocol = headerStore.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
};

export const assertSameOriginRequest = async () => {
  const headerStore = await headers();
  const expectedOrigin = getExpectedOrigin(headerStore);

  if (!expectedOrigin) {
    return;
  }

  const requestOrigin = headerStore.get("origin");
  const referer = headerStore.get("referer");
  let refererOrigin: string | null = null;

  if (!requestOrigin && !referer) {
    throw new ApiError(403, "FORBIDDEN", "Solicitud no permitida desde este origen.");
  }

  if (referer) {
    try {
      refererOrigin = new URL(referer).origin;
    } catch {
      throw new ApiError(403, "FORBIDDEN", "Solicitud no permitida desde este origen.");
    }
  }

  if (requestOrigin && requestOrigin !== expectedOrigin) {
    throw new ApiError(403, "FORBIDDEN", "Solicitud no permitida desde este origen.");
  }

  if (!requestOrigin && refererOrigin && refererOrigin !== expectedOrigin) {
    throw new ApiError(403, "FORBIDDEN", "Solicitud no permitida desde este origen.");
  }
};
