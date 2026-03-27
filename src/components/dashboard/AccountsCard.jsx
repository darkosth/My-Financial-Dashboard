"use client";

import { useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createAccount, updateAccount, deleteAccount } from "@/lib/actions/accountActions";

export default function AccountsCard({ accounts, totalLiquidity, totalAccountBalances, pendingExpensesTotal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const result = editingAccount
      ? await updateAccount(editingAccount.id, formData)
      : await createAccount(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingAccount(null);
      formRef.current?.reset();
    } else {
      alert("Hubo un error al guardar la cuenta.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar esta cuenta?")) return;

    const result = await deleteAccount(id);
    if (!result.success) {
      alert("Hubo un error al eliminar la cuenta.");
    }
  };

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cuentas" className="border-none">
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
              <div className="flex justify-between items-center w-full pr-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Cuentas</h2>
                  {pendingExpensesTotal > 0 && (
                    <p className="text-xs text-slate-500 mt-1">
                      Balance manual ${totalAccountBalances.toLocaleString("en-US", { minimumFractionDigits: 2 })} - gastos únicos pendientes $
                      {pendingExpensesTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-emerald-600 tabular-nums">
                    ${totalLiquidity.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  {pendingExpensesTotal > 0 && (
                    <p className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-1">
                      Ajustado por gastos únicos
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
                        <TableCell colSpan={3} className="text-center text-slate-500 py-4">
                          No tienes cuentas registradas.
                        </TableCell>
                      </TableRow>
                    )}

                    {accounts.map((account) => (
                      <TableRow key={account.id} className="hover:bg-slate-100/50">
                        <TableCell className="font-medium text-base w-1/2">{account.name}</TableCell>
                        <TableCell className="text-right font-semibold text-base">
                          ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right w-[50px]">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setEditingAccount(account);
                                  setIsOpen(true);
                                }}
                                className="cursor-pointer text-blue-600 focus:text-blue-600 focus:bg-blue-50"
                              >
                                Editar cuenta
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDelete(account.id)}
                                className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
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
                  className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2"
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
          if (!open) setEditingAccount(null); // Limpiamos el estado al cerrar el modal
        }}
      >
        <DialogContent className="sm:max-w-[425px] top-[5%] translate-y-0 sm:top-[50%] sm:-translate-y-1/2 max-h-[85dvh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingAccount ? "Actualizar balance" : "Agregar cuenta"}</DialogTitle>
            <DialogDescription>
              {editingAccount 
                ? "Actualiza el dinero disponible que tienes actualmente en esta cuenta."
                : "Registra el dinero disponible que tienes actualmente en tu banco o en efectivo."}
            </DialogDescription>
          </DialogHeader>

          <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
            <div className="grid gap-2">
              {editingAccount ? (

                <div className="mb-2 space-y-1 text-center">
                  <p className="text-lg font-semibold text-slate-900 uppercase tracking-wider" >
                    {editingAccount.name}
                  </p>
                  <input type="hidden" name="name" value={editingAccount.name} />
                </div>
              ) : (
                // Modo Creación: Input normal
                <>
                  <Label htmlFor="name">Nombre de la cuenta</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ej: Chase Checking, Efectivo..."
                    required
                  />
                </>
              )}
            </div>
            
            <div className="grid gap-2 text-center">
              <Label 
                htmlFor="balance" 
                className="block w-full text-center uppercase tracking-wider text-slate-500"
              >
                Balance Actual ($)
              </Label>
              <Input
                id="balance"
                name="balance"
                type="number"
                step="0.01"
                inputMode="decimal"
                className="text-center text-xl font-bold"
                defaultValue={editingAccount?.balance}
                placeholder="0.00"
                required
                autoFocus={!!editingAccount}
                onFocus={(e) => e.target.select()}
              />
            </div>
            
            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full">
                {editingAccount ? "Actualizar balance" : "Guardar cuenta"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}