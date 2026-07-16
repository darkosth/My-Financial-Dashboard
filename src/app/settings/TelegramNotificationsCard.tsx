"use client";

import { useEffect, useState, useTransition } from "react";
import { BellRing, ExternalLink, Link2Off, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createTelegramLink,
  disconnectTelegram,
  setTelegramNotificationsEnabled,
} from "@/lib/actions/telegramActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AppDialogContent,
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PendingAction = "connect" | "toggle" | "disconnect" | null;

export default function TelegramNotificationsCard({
  connected,
  enabled,
  workspaceName,
}: {
  connected: boolean;
  enabled: boolean;
  workspaceName: string;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [telegramUrl, setTelegramUrl] = useState<string | null>(null);
  const [awaitingConnection, setAwaitingConnection] = useState(false);
  const [disconnectOpen, setDisconnectOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (connected || !awaitingConnection) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let attempts = 0;
    const stopPolling = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    };
    const refreshWhenVisible = () => {
      if (document.visibilityState !== "visible") return;
      stopPolling();
      router.refresh();
      intervalId = setInterval(() => {
        attempts += 1;
        router.refresh();
        if (attempts >= 15) stopPolling();
      }, 2_000);
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      stopPolling();
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [awaitingConnection, connected, router]);

  const connect = () => {
    setError(null);
    setPendingAction("connect");
    startTransition(async () => {
      try {
        const result = await createTelegramLink();
        if (!result.success) {
          setError(result.error || "Telegram connection could not be prepared.");
          return;
        }
        if (!result.data) {
          setError("Telegram connection could not be prepared.");
          return;
        }
        setTelegramUrl(result.data.url);
      } catch {
        setError("Telegram connection could not be prepared.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  const toggle = () => {
    setError(null);
    setPendingAction("toggle");
    startTransition(async () => {
      try {
        const result = await setTelegramNotificationsEnabled(!enabled);
        if (!result.success) {
          setError(result.error || "Telegram alerts could not be updated.");
          return;
        }
        router.refresh();
      } catch {
        setError("Telegram alerts could not be updated.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  const disconnect = () => {
    setError(null);
    setPendingAction("disconnect");
    startTransition(async () => {
      try {
        const result = await disconnectTelegram();
        if (!result.success) {
          setError(result.error || "Telegram could not be disconnected.");
          return;
        }
        setDisconnectOpen(false);
        setTelegramUrl(null);
        router.refresh();
      } catch {
        setError("Telegram could not be disconnected.");
      } finally {
        setPendingAction(null);
      }
    });
  };

  const statusLabel = !connected ? "Disconnected" : enabled ? "Alerts active" : "Alerts paused";

  return (
    <Card className="shadow-sm border-border" aria-busy={isPending}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Send className="h-5 w-5 text-sky-600" />
            Telegram
          </CardTitle>
          <Badge variant={connected && enabled ? "default" : "outline"}>{statusLabel}</Badge>
        </div>
        <CardDescription>Receive payments due today or tomorrow in a private chat. Included in the free tier.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {connected ? (
          <>
            <div className="rounded-xl border border-border bg-muted/30 p-3">
              <p className="text-sm font-medium">Alerts for {workspaceName}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {enabled ? "Active" : "Paused"}. Messages include financial names and amounts.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={toggle} disabled={isPending} className="min-h-11 flex-1" variant={enabled ? "outline" : "default"}>
                <BellRing className="mr-2 h-4 w-4" />
                {pendingAction === "toggle" ? (enabled ? "Pausing..." : "Activating...") : enabled ? "Pause alerts" : "Activate alerts"}
              </Button>
              <Button onClick={() => setDisconnectOpen(true)} disabled={isPending} variant="ghost" className="min-h-11 text-red-600 hover:text-red-700">
                <Link2Off className="mr-2 h-4 w-4" />
                Disconnect
              </Button>
            </div>
          </>
        ) : telegramUrl ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">The secure link expires in 10 minutes.</p>
            <Button asChild className="min-h-11 w-full">
              <a href={telegramUrl} target="_blank" rel="noreferrer" onClick={() => setAwaitingConnection(true)}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Telegram
              </a>
            </Button>
          </div>
        ) : (
          <Button onClick={connect} disabled={isPending} className="min-h-11 w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            {pendingAction === "connect" ? "Preparing..." : "Connect Telegram"}
          </Button>
        )}
        {error ? <p role="alert" aria-live="polite" className="text-sm font-medium text-red-600 dark:text-red-300">{error}</p> : null}
      </CardContent>
      <Dialog open={disconnectOpen} onOpenChange={setDisconnectOpen}>
        <AppDialogContent>
          <DialogHeader>
            <DialogTitle>Disconnect Telegram?</DialogTitle>
            <DialogDescription>Alerts for all of your workspaces will be paused. You can reconnect later.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant="outline" className="min-h-11">Cancel</Button></DialogClose>
            <Button variant="destructive" className="min-h-11" disabled={isPending} onClick={disconnect}>
              {pendingAction === "disconnect" ? "Disconnecting..." : "Disconnect"}
            </Button>
          </DialogFooter>
        </AppDialogContent>
      </Dialog>
    </Card>
  );
}
