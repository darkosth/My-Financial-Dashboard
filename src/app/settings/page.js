import { loadFinanceSnapshot } from "@/lib/financeData";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wallet, Users, Repeat, ReceiptText, ChevronRight } from "lucide-react";
import Link from "next/link";
import InviteButton from "@/components/Workspace/InviteButton";
import WeeklyIncomeForm from "./WeeklyIncomeForm";
import WorkspaceAccessCard from "./WorkspaceAccessCard";
import ActiveWorkspaceMembersCard from "./ActiveWorkspaceMembersCard";

export default async function SettingsPage() {
  const [snapshot, context] = await Promise.all([loadFinanceSnapshot(), getCurrentUserContext()]);
  const activeWorkspaceId = context.activeWorkspace?.id;
  const currentWeeklyIncome = snapshot.appSettings?.weeklyIncome || 0;
  const currentMembership = context.memberships.find((membership) => membership.workspaceId === activeWorkspaceId) ?? null;
  const canManageMembers = currentMembership?.role === "OWNER";

  const [workspaceMembers, workspaceMemberships] = await Promise.all([
    activeWorkspaceId
      ? prisma.workspaceMember.findMany({
          where: { workspaceId: activeWorkspaceId },
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
          orderBy: [
            { role: "desc" },
            { createdAt: "asc" },
          ],
        })
      : [],
    prisma.workspaceMember.findMany({
      where: { userId: context.user.id },
      include: {
        workspace: {
          include: {
            owner: {
              select: {
                email: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  return (
    <main className="min-h-screen bg-background p-6 font-sans text-foreground md:p-10">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* HEADER */}
        <div className="flex items-center gap-3 border-b border-border pb-6">
          <div className="p-3 bg-muted rounded-xl text-foreground">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Workspace Settings</h1>
            <p className="text-muted-foreground mt-1">
              Manage your financial rules, income, and team members for{" "}
              <span className="font-semibold text-foreground">{snapshot.context?.activeWorkspace?.name}</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CARD 1: WEEKLY INCOME */}
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Wallet className="w-5 h-5 text-blue-600" />
                Weekly Income
              </CardTitle>
              <CardDescription>
                Set your standard weekly income. This is the baseline used to calculate your cash waterfall projections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WeeklyIncomeForm currentIncome={currentWeeklyIncome} workspaceId={activeWorkspaceId} />
            </CardContent>
          </Card>

          {/* CARD 2: TEAM & ACCESS (INVITES) */}
          <Card className="shadow-sm border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Users className="w-5 h-5 text-indigo-600" />
                Team & Access
              </CardTitle>
              <CardDescription>
                Generate a magic link to invite a family member to view and edit this workspace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {activeWorkspaceId && canManageMembers ? (
                <div className="max-w-xs">
                  <InviteButton workspaceId={activeWorkspaceId} />
                </div>
              ) : activeWorkspaceId ? (
                <p className="text-sm text-muted-foreground">Only the workspace owner can generate invite links.</p>
              ) : (
                <p className="text-sm text-red-500">Workspace ID not found.</p>
              )}
            </CardContent>
          </Card>

          <WorkspaceAccessCard activeWorkspaceId={activeWorkspaceId} memberships={workspaceMemberships} />

          <ActiveWorkspaceMembersCard
            members={workspaceMembers}
            currentUserId={context.user.id}
            canManageMembers={canManageMembers}
          />

          {/* CARD 3: TEMPLATES ACCESS */}
          <Card className="shadow-sm border-border transition-colors group hover:bg-muted/20">
            <Link href="/templates" className="block h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-emerald-600" />
                    Recurring Templates
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </CardTitle>
                <CardDescription>
                  Manage your fixed expenses (rent, subscriptions, car payments) that happen on a regular schedule.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          {/* CARD 4: UNIQUE EXPENSES ACCESS */}
          <Card className="shadow-sm border-border transition-colors group hover:bg-muted/20">
            <Link href="/unique-expenses" className="block h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <ReceiptText className="w-5 h-5 text-amber-600" />
                    Unique Expenses
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </CardTitle>
                <CardDescription>
                  Manage one-time pending payments (like a medical bill or a spontaneous purchase) to keep your cashflow accurate.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

        </div>
      </div>
    </main>
  );
}
