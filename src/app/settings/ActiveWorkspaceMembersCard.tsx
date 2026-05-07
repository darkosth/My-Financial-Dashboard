"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Crown, ShieldX, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { removeWorkspaceMember } from "@/lib/actions/settingsActions";

export default function ActiveWorkspaceMembersCard({
  members,
  currentUserId,
  canManageMembers,
}: {
  members: Array<{
    id: string;
    role: string;
    userId: string;
    user: { name?: string | null; email?: string | null };
  }>;
  currentUserId: string;
  canManageMembers: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const handleRemove = (memberId: string, memberName: string) => {
    const confirmed = window.confirm(`Remove "${memberName}" from this workspace?`);

    if (!confirmed) {
      return;
    }

    setMessage("");
    setError("");

    startTransition(async () => {
      const result = await removeWorkspaceMember(memberId);

      if (!result.success) {
        const message = "error" in result ? result.error : "Could not remove member.";
        setError(message);
        return;
      }

      setMessage(`${memberName} was removed from the workspace.`);
      router.refresh();
    });
  };

  return (
    <Card className="shadow-sm border-border md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Users className="w-5 h-5 text-indigo-600" />
          Members
        </CardTitle>
        <CardDescription>
          See who has access to this workspace. Owners can remove members from here.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {members.map((member) => {
            const isOwner = member.role === "OWNER";
            const isCurrentUser = member.userId === currentUserId;
            const memberName = member.user.name || member.user.email;

            return (
              <div
                key={member.id}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{memberName}</p>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {isOwner ? "Owner" : "Member"}
                    </span>
                    {isCurrentUser ? (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
                        You
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{member.user.email}</p>
                </div>

                <div className="flex items-center gap-2">
                  {isOwner ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                      <Crown className="w-3.5 h-3.5" />
                      Workspace owner
                    </span>
                  ) : canManageMembers ? (
                    <Button
                      onClick={() => handleRemove(member.id, memberName)}
                      disabled={isPending}
                      variant="destructive"
                    >
                      <ShieldX className="w-4 h-4 mr-2" />
                      Kick
                    </Button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {!canManageMembers ? (
          <p className="text-sm text-muted-foreground">Only the workspace owner can invite or remove members.</p>
        ) : null}

        {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </CardContent>
    </Card>
  );
}
