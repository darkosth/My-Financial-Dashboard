"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightLeft, DoorOpen, CheckCircle2, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { leaveWorkspace, switchActiveWorkspace } from "@/lib/actions/settingsActions";

export default function WorkspaceAccessCard({ activeWorkspaceId, memberships }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSwitch = (workspaceId) => {
    setMessage("");
    setError("");

    startTransition(async () => {
      const result = await switchActiveWorkspace(workspaceId);

      if (!result.success) {
        setError(result.error || "Could not switch workspace.");
        return;
      }

      setMessage("Active workspace updated.");
      router.refresh();
    });
  };

  const handleLeave = (workspaceId, workspaceName) => {
    const confirmed = window.confirm(`Leave "${workspaceName}"? You will lose access to its data.`);

    if (!confirmed) {
      return;
    }

    setMessage("");
    setError("");

    startTransition(async () => {
      const result = await leaveWorkspace(workspaceId);

      if (!result.success) {
        setError(result.error || "Could not leave workspace.");
        return;
      }

      setMessage(`You left "${workspaceName}".`);
      router.refresh();
    });
  };

  return (
    <Card className="shadow-sm border-border md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Building2 className="w-5 h-5 text-sky-600" />
          My Workspaces
        </CardTitle>
        <CardDescription>
          View every workspace you belong to, switch between them, or leave shared workspaces.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {memberships.map((membership) => {
            const isActive = membership.workspace.id === activeWorkspaceId;
            const isOwner = membership.role === "OWNER";

            return (
              <div
                key={membership.id}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{membership.workspace.name}</p>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {isOwner ? "Owner" : "Member"}
                    </span>
                    {isActive ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        Active
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Owner: {membership.workspace.owner.name || membership.workspace.owner.email}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {!isActive ? (
                    <Button onClick={() => handleSwitch(membership.workspace.id)} disabled={isPending} variant="outline">
                      <ArrowRightLeft className="w-4 h-4 mr-2" />
                      Switch
                    </Button>
                  ) : (
                    <Button disabled variant="outline">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Active
                    </Button>
                  )}

                  {!isOwner ? (
                    <Button
                      onClick={() => handleLeave(membership.workspace.id, membership.workspace.name)}
                      disabled={isPending}
                      variant="destructive"
                    >
                      <DoorOpen className="w-4 h-4 mr-2" />
                      Leave
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </CardContent>
    </Card>
  );
}
