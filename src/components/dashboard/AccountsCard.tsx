"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createAccount, updateAccount, deleteAccount } from "@/lib/actions/accountActions";

type AccountRow = {
  id: string;
  name: string;
  balance: number;
};

type AccountsCardProps = {
  accounts: AccountRow[];
  totalLiquidity: number;
  pendingExpensesTotal: number;
};

export default function AccountsCard({ accounts, totalLiquidity, pendingExpensesTotal }: AccountsCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [editingAccount, setEditingAccount] = React.useState<AccountRow | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = editingAccount
      ? await updateAccount(editingAccount.id, formData)
      : await createAccount(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingAccount(null);
      formRef.current?.reset();
      router.refresh();
    } else {
      alert("Hubo un error al guardar la cuenta.");
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

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cuentas" className="border-none">
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-all">
              <div className="flex justify-between items-center w-full pr-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Liquidez</h2>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
                    ${totalLiquidity.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  {pendingExpensesTotal > 0 && (
                    <p className="text-[10px] font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full inline-block mt-1">
                      Ajustado por gastos unicos
                    </p>
                  )}
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-2 border-t">
              <div className="px-6">
                <Table>
                  <TableBody>
                    {accounts.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-muted-foreground py-4">
                          No tienes cuentas registradas.
                        </TableCell>
                      </TableRow>
                    )}

                    {accounts.map((account) => (
                      <TableRow
                        key={account.id}
                        className="hover:bg-muted/60 cursor-pointer transition-colors"
                        onClick={() => {
                          setEditingAccount(account);
                          setIsOpen(true);
                        }}
                      >
                        <TableCell className="font-medium text-base w-1/2">{account.name}</TableCell>
                        <TableCell className="text-right font-semibold text-base text-emerald-600 dark:text-emerald-400">
                          ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>

                        <TableCell
                          className="px-0 sm:px-4 text-right w-[40px] sm:w-[60px]"
                          onClick={(event: React.MouseEvent) => event.stopPropagation()}
                        >
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-10 w-10 p-0 rounded-full hover:bg-muted transition-colors">
                                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                              </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl shadow-xl border-border">
                              <DropdownMenuItem
                                onClick={() => {
                                  setEditingAccount(account);
                                  setIsOpen(true);
                                }}
                                className="cursor-pointer text-sm sm:text-base font-medium py-3 px-4 rounded-lg text-blue-600 focus:text-blue-700 focus:bg-blue-50 dark:focus:bg-blue-950/40 transition-colors mb-1"
                              >
                                Editar cuenta
                              </DropdownMenuItem>

                              <DropdownMenuItem
                                onClick={() => handleDelete(account.id)}
                                className="cursor-pointer text-sm sm:text-base font-medium py-3 px-4 rounded-lg text-red-600 focus:text-red-700 focus:bg-red-50 dark:focus:bg-red-950/40 transition-colors"
                              >
                                Eliminar cuenta
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
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
                className="w-full text-muted-foreground hover:text-foreground hover:bg-muted border border-dashed border-border mt-2"
              >
                <Plus className="h-4 w-4 mr-2" /> Agregar cuenta
              </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditingAccount(null);
          }
        }}
      >
        <AppDialogContent>
          <DialogHeader>
            <DialogTitle>{editingAccount ? "Actualizar balance" : "Agregar cuenta"}</DialogTitle>
            <DialogDescription>
              {editingAccount
                ? "Actualiza el dinero disponible que tienes actualmente en esta cuenta."
                : "Registra el dinero disponible que tienes actualmente en tu banco o en efectivo."}
            </DialogDescription>
          </DialogHeader>

          <form action={handleSubmit} ref={formRef} className="grid gap-6 py-4">
            <div className="grid gap-2">
              {editingAccount ? (
                <div className="mb-2 space-y-1 text-center">
                  <p className="text-2xl font-bold text-foreground tracking-tight">
                    {editingAccount.name}
                  </p>
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
                  />
                </>
              )}
            </div>

            <div className="grid gap-3 text-center bg-muted/40 p-6 rounded-xl border border-border">
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
                className="text-center text-4xl font-black text-emerald-600 dark:text-emerald-400 focus-visible:ring-emerald-500 h-16"
                defaultValue={editingAccount?.balance}
                placeholder="0.00"
                required
                autoFocus={!!editingAccount}
                onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
              />
            </div>

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
