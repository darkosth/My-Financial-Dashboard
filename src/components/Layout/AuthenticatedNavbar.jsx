"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useRef, useState } from "react";
import {
  CalendarIcon,
  LayoutDashboard,
  Menu,
  ReceiptText,
  Settings2,
  Settings, // Nuevo ícono para la página de Settings
  Wallet,
  LogOut,
  PlusCircle,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPendingExpense } from "@/lib/actions/pendingExpenseActions";

const navLinks = [
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
];

const getLinkClassName = (isActive) =>
  `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-emerald-50 text-emerald-700" : "text-slate-600 hover:bg-slate-100 hover:text-emerald-700"
  }`;

export default function AuthenticatedNavbar({ userName, workspaceName, hasAccounts }) {
  const pathname = usePathname();
  const router = useRouter();
  const expenseFormRef = useRef(null);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const handleExpenseSubmit = async (formData) => {
    const result = await createPendingExpense(formData);

    if (result.success) {
      expenseFormRef.current?.reset();
      setIsExpenseOpen(false);
      router.refresh();
    } else {
      alert("There was an error registering the one-time expense.");
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
            <Wallet className="h-6 w-6 text-emerald-600" />
            <div className="flex flex-col leading-none">
              <span className="text-lg">MyFinance</span>
              <span className="hidden text-[11px] font-medium text-slate-500 sm:block">{workspaceName}</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-1 sm:flex">
              {navLinks.map((link) => {
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel className="space-y-1">
                  <div className="text-sm font-semibold text-slate-900">{userName}</div>
                  <div className="text-xs text-slate-500">{workspaceName}</div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <div className="sm:hidden">
                  {navLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href} className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span>{link.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuSeparator />
                </div>

                {/* ENLACE AL CENTRO DE MANDO (SETTINGS) */}
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2 font-medium text-slate-900">
                    <Settings className="h-4 w-4" />
                    <span>Workspace Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/templates" className="flex items-center gap-2">
                    <Settings2 className="h-4 w-4" />
                    <span>Templates</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/unique-expenses" className="flex items-center gap-2">
                    <ReceiptText className="h-4 w-4" />
                    <span>Unique Expenses</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={() => setIsExpenseOpen(true)}>
                  <PlusCircle className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Registrar gasto único</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive" onSelect={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <Dialog open={isExpenseOpen} onOpenChange={setIsExpenseOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Descontar liquidez</DialogTitle>
            <DialogDescription>
              Registra una compra rapida para restarla de tu liquidez real mientras actualizas tus cuentas manualmente.
            </DialogDescription>
          </DialogHeader>

          <form action={handleExpenseSubmit} ref={expenseFormRef} className="grid gap-5 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount" className="text-slate-700">
                Monto del gasto
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  className="pl-7 text-lg font-semibold"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" className="text-slate-700">
                Descripcion <span className="font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <Input
                id="description"
                name="description"
                placeholder={hasAccounts ? "Ej: Cafe, gasolina, Home Depot..." : "Ej: Cafe, gasolina..."}
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full">
                Restar de mi liquidez
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}