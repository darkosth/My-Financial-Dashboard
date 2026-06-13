"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type PlaidAutoSyncProps = {
  workspaceId: string;
  enabled: boolean;
};

const SYNC_INTERVAL_MS = 10 * 60 * 1000;

export default function PlaidAutoSync({ workspaceId, enabled }: PlaidAutoSyncProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const storageKey = `plaid-sync:${workspaceId}`;
    const lastRunAt = Number(window.sessionStorage.getItem(storageKey) || 0);

    if (Date.now() - lastRunAt < SYNC_INTERVAL_MS) {
      return;
    }

    window.sessionStorage.setItem(storageKey, String(Date.now()));

    void fetch("/api/plaid/sync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(async (response) => {
        const payload = (await response.json().catch(() => null)) as { skipped?: boolean } | null;

        if (!response.ok) {
          throw new Error("Plaid sync request failed");
        }

        if (!payload?.skipped) {
          router.refresh();
        }
      })
      .catch(() => {
        window.sessionStorage.removeItem(storageKey);
      });
  }, [enabled, router, workspaceId]);

  return null;
}
