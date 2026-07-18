"use client";

import type * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  BrainCircuit,
  CalendarIcon,
  LayoutDashboard,
  Menu,
  ReceiptText,
  Settings2,
  Settings,
  Wallet,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks: Array<{ href: string; label: string; icon: React.ComponentType<{ className?: string }>; requiresPlaid?: boolean }> = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/calendar",
    label: "Calendar",
    icon: CalendarIcon,
  },
  {
    href: "/learning",
    label: "Learning",
    icon: BrainCircuit,
    requiresPlaid: true,
  },
];

const getLinkClassName = (isActive: boolean) =>
  `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
      : "text-muted-foreground hover:bg-muted hover:text-emerald-700 dark:hover:text-emerald-400"
  }`;

const mobileMenuContentClassName =
  "w-64 max-md:w-[min(22rem,calc(100vw-1rem))] max-md:p-2 max-md:duration-200 max-md:ease-out max-md:data-open:slide-in-from-right-8 max-md:data-closed:slide-out-to-right-8";

const mobileMenuItemClassName =
  "max-md:min-h-14 max-md:gap-3 max-md:px-4 max-md:py-3 max-md:text-lg";

const mobileMenuIconClassName = "h-4 w-4 max-md:h-6 max-md:w-6";

export default function AuthenticatedNavbar({
  userName,
  workspaceName,
  buildCommitLabel,
  buildCommitSha,
  hasPlaidAccess,
  isSuperAdmin,
}: {
  userName: string;
  workspaceName: string;
  buildCommitLabel?: string | null;
  buildCommitSha?: string | null;
  hasPlaidAccess: boolean;
  isSuperAdmin: boolean;
}) {
  const pathname = usePathname();
  const visibleNavLinks = navLinks.filter((link) => !link.requiresPlaid || hasPlaidAccess);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
            <Wallet className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-2">
                <span className="text-lg">MyFinance</span>
                {buildCommitLabel ? (
                  <span
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground"
                    title={buildCommitSha || "local build"}
                  >
                    {buildCommitLabel}
                  </span>
                ) : null}
              </div>
              <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">{workspaceName}</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-1 md:flex">
              {visibleNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link key={link.href} href={link.href} className={getLinkClassName(isActive)}>
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className={mobileMenuContentClassName}>
                <DropdownMenuLabel className="space-y-1 max-md:px-4 max-md:py-3">
                  <div className="text-sm font-semibold text-foreground max-md:text-lg">{userName}</div>
                  <div className="text-xs text-muted-foreground max-md:text-sm">{workspaceName}</div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <div className="md:hidden">
                  {visibleNavLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <DropdownMenuItem key={link.href} asChild className={mobileMenuItemClassName}>
                        <Link href={link.href} className="flex items-center gap-2 max-md:gap-3">
                          <Icon className={mobileMenuIconClassName} />
                          <span>{link.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuSeparator />
                </div>

                {/* ENLACE AL CENTRO DE MANDO (SETTINGS) */}
                <DropdownMenuItem asChild className={mobileMenuItemClassName}>
                  <Link href="/settings" className="flex items-center gap-2 font-medium text-foreground max-md:gap-3">
                    <Settings className={mobileMenuIconClassName} />
                    <span>Workspace Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild className={mobileMenuItemClassName}>
                  <Link href="/templates" className="flex items-center gap-2 max-md:gap-3">
                    <Settings2 className={mobileMenuIconClassName} />
                    <span>Templates</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className={mobileMenuItemClassName}>
                  <Link href="/unique-expenses" className="flex items-center gap-2 max-md:gap-3">
                    <ReceiptText className={mobileMenuIconClassName} />
                    <span>Unique Expenses</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {isSuperAdmin ? (
                  <>
                    <DropdownMenuItem asChild className={mobileMenuItemClassName}>
                      <Link href="/admin/access" className="flex items-center gap-2 font-medium text-emerald-700 max-md:gap-3 dark:text-emerald-300">
                        <ShieldCheck className={mobileMenuIconClassName} />
                        <span>Premium Access</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                ) : null}

                <DropdownMenuItem variant="destructive" onSelect={handleLogout} className={mobileMenuItemClassName}>
                  <LogOut className={mobileMenuIconClassName} />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
