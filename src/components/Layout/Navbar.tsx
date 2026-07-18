import Link from "next/link";
import { CalendarIcon, LayoutDashboard, Wallet } from "lucide-react";
import { auth } from "@/auth";
import { getCurrentUserContext } from "@/lib/workspaceContext";
import { BUILD_COMMIT_LABEL, BUILD_COMMIT_SHA } from "@/lib/buildInfo";
import AuthenticatedNavbar from "@/components/Layout/AuthenticatedNavbar";
import GoogleSignInButton from "@/components/Layout/GoogleSignInButton";
import { ThemeToggle } from "@/components/theme-toggle";
import { currentUserHasFeatureAccess, isSuperAdminEmail } from "@/lib/featureAccess";

export default async function Navbar() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  if (!isAuthenticated) {
    return (
      <nav className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
            <Wallet className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <span className="text-2xl">MyFinance</span>
            {BUILD_COMMIT_LABEL ? (
              <span
                className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground"
                title={BUILD_COMMIT_SHA || "local build"}
              >
                {BUILD_COMMIT_LABEL}
              </span>
            ) : null}
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Overview</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              <CalendarIcon className="h-4 w-4" />
              <span>Flow</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <GoogleSignInButton variant="outline" className="rounded-full shadow-sm" label="Acceder" />
          </div>
        </div>
      </nav>
    );
  }

  const [context, hasPlaidAccess] = await Promise.all([
    getCurrentUserContext(),
    currentUserHasFeatureAccess("PLAID"),
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
      buildCommitLabel={BUILD_COMMIT_LABEL}
      buildCommitSha={BUILD_COMMIT_SHA}
      hasPlaidAccess={hasPlaidAccess}
      isSuperAdmin={isSuperAdminEmail(session.user?.email)}
    />
  );
}
