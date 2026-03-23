import Link from "next/link";
import { CalendarIcon, LayoutDashboard, Wallet } from "lucide-react";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { DEFAULT_WEEKLY_INCOME } from "@/lib/financeEngine";
import AuthenticatedNavbar from "@/components/Layout/AuthenticatedNavbar";
import GoogleSignInButton from "@/components/Layout/GoogleSignInButton";

const isE2ETestMode = process.env.E2E_TEST_MODE === "1";

export default async function Navbar() {
  const session = await auth();
  const isAuthenticated = !!session?.user || isE2ETestMode;

  if (!isAuthenticated) {
    return (
      <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
            <Wallet className="h-6 w-6 text-emerald-600" />
            <span className="text-lg">MyFinance</span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-700"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Overview</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-700"
            >
              <CalendarIcon className="h-4 w-4" />
              <span>Flow</span>
            </Link>
          </div>

          <GoogleSignInButton variant="outline" className="rounded-full shadow-sm" label="Acceder" />
        </div>
      </nav>
    );
  }

  const context = await getCurrentUserContext();
  const [appSettings, accountCount] = await Promise.all([
    prisma.appSettings.findFirst({
      where: { workspaceId: context.activeWorkspace.id },
    }),
    prisma.account.count({
      where: { workspaceId: context.activeWorkspace.id },
    }),
  ]);

  const userName =
    session?.user?.name?.trim() ||
    session?.user?.email?.trim() ||
    context.user?.name?.trim() ||
    context.user?.email?.trim() ||
    "MyFinance";

  return (
    <AuthenticatedNavbar
      userName={userName}
      workspaceName={context.activeWorkspace.name}
      weeklyIncome={appSettings?.weeklyIncome ?? DEFAULT_WEEKLY_INCOME}
      hasAccounts={accountCount > 0}
    />
  );
}
