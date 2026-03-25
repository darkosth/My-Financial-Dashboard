import { auth } from "@/auth";
import { loadFinanceSnapshot } from "@/lib/financeData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Wallet, Users, Repeat, ReceiptText, ChevronRight } from "lucide-react";
import Link from "next/link";
import InviteButton from "@/components/Workspace/InviteButton";
import WeeklyIncomeForm from "./WeeklyIncomeForm";

export default async function SettingsPage() {
  const [session, snapshot] = await Promise.all([auth(), loadFinanceSnapshot()]);
  const activeWorkspaceId = snapshot.context?.activeWorkspace?.id;
  
  // Extraemos el ingreso actual para pasarlo al formulario
  const currentWeeklyIncome = snapshot.appSettings?.weeklyIncome || 0;

  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans text-slate-900 md:p-10">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* HEADER */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
          <div className="p-3 bg-slate-200 rounded-xl text-slate-700">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Workspace Settings</h1>
            <p className="text-slate-500 mt-1">
              Manage your financial rules, income, and team members for <span className="font-semibold text-slate-700">{snapshot.context?.activeWorkspace?.name}</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1: WEEKLY INCOME */}
          <Card className="shadow-sm border-slate-200">
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
          <Card className="shadow-sm border-slate-200">
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
              {activeWorkspaceId ? (
                <div className="max-w-xs">
                  <InviteButton workspaceId={activeWorkspaceId} />
                </div>
              ) : (
                <p className="text-sm text-red-500">Workspace ID not found.</p>
              )}
            </CardContent>
          </Card>

          {/* CARD 3: TEMPLATES ACCESS */}
          <Card className="shadow-sm border-slate-200 hover:border-slate-300 transition-colors group">
            <Link href="/templates" className="block h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-emerald-600" />
                    Recurring Templates
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                </CardTitle>
                <CardDescription>
                  Manage your fixed expenses (rent, subscriptions, car payments) that happen on a regular schedule.
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          {/* CARD 4: UNIQUE EXPENSES ACCESS */}
          <Card className="shadow-sm border-slate-200 hover:border-slate-300 transition-colors group">
            <Link href="/unique-expenses" className="block h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <ReceiptText className="w-5 h-5 text-amber-600" />
                    Unique Expenses
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
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