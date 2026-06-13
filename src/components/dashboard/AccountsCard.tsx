"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MoreHorizontal, Plus, RefreshCcw, ShieldAlert, Unplug } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { createAccount, deleteAccount, updateAccount } from "@/lib/actions/accountActions";
import { disconnectLinkedPlaidEntity, refreshLinkedPlaidEntity } from "@/lib/actions/plaidActions";

type AccountRow = {
  id: string;
  name: string;
  balance: number;
  source?: "MANUAL" | "PLAID";
  institutionName?: string | null;
  mask?: string | null;
  subtype?: string | null;
  plaidItemId?: string | null;
  plaidStatus?: string | null;
  lastSyncedAt?: Date | string | null;
};

type AccountsCardProps = {
  accounts: AccountRow[];
  totalLiquidity: number;
  pendingExpensesTotal: number;
};

const formatSyncDate = (value: Date | string | null | undefined) => {
  if (!value) {
    return "Sin sync aun";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
};

export default function AccountsCard({ accounts, totalLiquidity, pendingExpensesTotal }: AccountsCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [editingAccount, setEditingAccount] = React.useState<AccountRow | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const linkedAccountCount = accounts.filter((account) => account.source === "PLAID").length;
  const isEditingPlaid = editingAccount?.source === "PLAID";

  const handleSubmit = async (formData: FormData) => {
    const result = editingAccount ? await updateAccount(editingAccount.id, formData) : await createAccount(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingAccount(null);
      formRef.current?.reset();
      router.refresh();
    } else {
      alert(result.error || "Hubo un error al guardar la cuenta.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Seguro que quieres eliminar esta cuenta?")) return;

    const result = await deleteAccount(id);
    if (!result.success) {
      alert("Hubo un error al eliminar la cuenta.");
      return;
    }
    router.refresh();
  };

  const handleRefresh = async (id: string) => {
    const result = await refreshLinkedPlaidEntity("account", id);
    if (!result.success) {
      alert(result.error || "No se pudo actualizar el balance sincronizado.");
      return;
    }
    router.refresh();
  };

  const handleDisconnect = async (id: string) => {
    if (!window.confirm("Esta accion desvinculara el sync bancario y dejara la cuenta como manual. Continuar?")) {
      return;
    }

    const result = await disconnectLinkedPlaidEntity("account", id);
    if (!result.success) {
      alert(result.error || "No se pudo desvincular la cuenta.");
      return;
    }
    router.refresh();
  };

  const openReconnectRoute = (account: AccountRow) => {
    if (!account.plaidItemId) {
      alert("No se encontro la referencia bancaria para esta cuenta.");
      return;
    }

    const searchParams = new URLSearchParams({
      mode: "reconnect",
      plaidItemId: account.plaidItemId,
    });
    router.push(`/plaid?${searchParams.toString()}`);
  };

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cuentas" className="border-none">
            <AccordionTrigger className="px-6 py-5 transition-all hover:bg-muted/50 hover:no-underline">
              <div className="flex w-full items-center justify-between pr-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-foreground">Liquidez</h2>
                  {linkedAccountCount > 0 ? (
                    <p className="text-xs text-muted-foreground">{linkedAccountCount} cuentas con Bank sync</p>
                  ) : null}
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-3xl font-black tabular-nums text-emerald-600 dark:text-emerald-400">
                      ${totalLiquidity.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                    {pendingExpensesTotal > 0 ? (
                      <p className="mt-1 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-950/40">
                        Ajustado por gastos unicos
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t pt-2">
              <div className="px-6">
                <Table>
                  <TableBody>
                    {accounts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="py-4 text-center text-muted-foreground">
                          No tienes cuentas registradas.
                        </TableCell>
                      </TableRow>
                    ) : null}

                    {accounts.map((account) => {
                      const isPlaid = account.source === "PLAID";
                      const needsReauth = account.plaidStatus === "NEEDS_REAUTH";
                      const disconnected = account.plaidStatus === "DISCONNECTED";

                      return (
                        <TableRow
                          key={account.id}
                          className="cursor-pointer transition-colors hover:bg-muted/60"
                          onClick={() => {
                            setEditingAccount(account);
                            setIsOpen(true);
                          }}
                        >
                          <TableCell className="w-1/2 font-medium text-base">
                            <div className="flex flex-col gap-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span>{account.name}</span>
                                <Badge variant={isPlaid ? "secondary" : "outline"}>{isPlaid ? "Bank sync" : "Manual"}</Badge>
                                {needsReauth ? <Badge variant="destructive">Needs reauth</Badge> : null}
                                {disconnected ? <Badge variant="outline">Desvinculada</Badge> : null}
                              </div>
                              {isPlaid ? (
                                <span className="text-xs font-normal text-muted-foreground">
                                  {account.institutionName || "Banco"}{account.mask ? ` • ${account.mask}` : ""}{account.subtype ? ` • ${account.subtype}` : ""} • Sync: {formatSyncDate(account.lastSyncedAt)}
                                </span>
                              ) : null}
                            </div>
                          </TableCell>
                          <TableCell className="text-right text-base font-semibold text-emerald-600 dark:text-emerald-400">
                            ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>

                          <TableCell className="w-[40px] px-0 text-right sm:w-[60px] sm:px-4" onClick={(event: React.MouseEvent) => event.stopPropagation()}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-10 w-10 rounded-full p-0 transition-colors hover:bg-muted">
                                  <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                                </Button>
                              </DropdownMenuTrigger>

                              <DropdownMenuContent align="end" className="w-52 rounded-xl border-border p-2 shadow-xl">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setEditingAccount(account);
                                    setIsOpen(true);
                                  }}
                                  className="mb-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300 dark:data-[highlighted]:bg-blue-950/50 dark:data-[highlighted]:text-blue-300"
                                >
                                  {isPlaid ? "Editar nombre" : "Editar cuenta"}
                                </DropdownMenuItem>

                                {isPlaid ? (
                                  <>
                                    <DropdownMenuItem
                                      onClick={() => handleRefresh(account.id)}
                                      className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium"
                                    >
                                      <RefreshCcw className="mr-2 h-4 w-4" />
                                      Actualizar balance
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() => openReconnectRoute(account)}
                                      className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium"
                                    >
                                      <ShieldAlert className="mr-2 h-4 w-4" />
                                      Reconectar banco
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                      onClick={() => handleDisconnect(account.id)}
                                      className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 dark:hover:bg-red-950/45 dark:hover:text-red-200 dark:data-[highlighted]:bg-red-950/45 dark:data-[highlighted]:text-red-200"
                                    >
                                      <Unplug className="mr-2 h-4 w-4" />
                                      Desvincular banco
                                    </DropdownMenuItem>
                                  </>
                                ) : (
                                  <>
                                    <DropdownMenuItem
                                      onClick={() => handleDelete(account.id)}
                                      className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 dark:hover:bg-red-950/45 dark:hover:text-red-200 dark:data-[highlighted]:bg-red-950/45 dark:data-[highlighted]:text-red-200"
                                    >
                                      Eliminar cuenta
                                    </DropdownMenuItem>
                                  </>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              <div className="px-6 pb-4 pt-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setEditingAccount(null);
                    setIsOpen(true);
                  }}
                  className="mt-2 w-full border border-dashed border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Plus className="mr-2 h-4 w-4" /> Agregar Cuenta Manual
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => router.push("/plaid")}
                  className="mt-2 w-full border border-dashed border-border text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/40 dark:hover:text-blue-200"
                >
                  <Plus className="mr-2 h-4 w-4" /> Conectar banco
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Dialog
        open={isOpen}
        onOpenChange={(nextOpen) => {
          setIsOpen(nextOpen);
          if (!nextOpen) {
            setEditingAccount(null);
          }
        }}
      >
        <AppDialogContent>
          <DialogHeader>
            <DialogTitle>{editingAccount ? (isEditingPlaid ? "Editar cuenta sincronizada" : "Actualizar balance") : "Agregar cuenta"}</DialogTitle>
            <DialogDescription>
              {editingAccount
                ? isEditingPlaid
                  ? "Las cuentas con Bank sync actualizan su balance automaticamente. Aqui solo puedes ajustar el nombre visible."
                  : "Actualiza el dinero disponible que tienes actualmente en esta cuenta."
                : "Registra el dinero disponible que tienes actualmente en tu banco o en efectivo."}
            </DialogDescription>
          </DialogHeader>

          <form action={handleSubmit} ref={formRef} className="grid gap-6 py-4">
            <div className="grid gap-2">
              {editingAccount && !isEditingPlaid ? (
                <div className="mb-2 space-y-1 text-center">
                  <p className="text-2xl font-bold tracking-tight text-foreground">{editingAccount.name}</p>
                  <input type="hidden" name="name" value={editingAccount.name} />
                </div>
              ) : (
                <>
                  <Label htmlFor="name">Nombre de la cuenta</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ej: Chase Checking, Efectivo..."
                    required
                    className="text-lg"
                    defaultValue={editingAccount?.name ?? ""}
                  />
                </>
              )}
            </div>

            {isEditingPlaid ? (
              <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
                El balance se actualiza desde el banco. Usa <span className="font-medium text-foreground">Actualizar balance</span> desde el menu de la cuenta si quieres forzar un refresh manual.
              </div>
            ) : (
              <div className="grid gap-3 rounded-xl border border-border bg-muted/40 p-6 text-center">
                <Label
                  htmlFor="balance"
                  className="block w-full text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Nuevo Balance ($)
                </Label>
                <Input
                  id="balance"
                  name="balance"
                  type="number"
                  step="0.01"
                  inputMode="decimal"
                  className="h-16 text-center text-4xl font-black text-emerald-600 focus-visible:ring-emerald-500 dark:text-emerald-400"
                  defaultValue={editingAccount?.balance}
                  placeholder="0.00"
                  required
                  autoFocus={!!editingAccount}
                  onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                />
              </div>
            )}

            <DialogFooter className="mt-2">
              <Button type="submit" className="w-full py-6 text-lg font-bold">
                {editingAccount ? "Guardar cambios" : "Crear cuenta"}
              </Button>
            </DialogFooter>
          </form>
        </AppDialogContent>
      </Dialog>

    </section>
  );
}
