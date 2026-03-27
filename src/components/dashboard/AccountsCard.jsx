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

export default function AccountsCard({ accounts, totalLiquidity, pendingExpensesTotal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const [viewingAccount, setViewingAccount] = useState(null); // NUEVO ESTADO: Vista de solo lectura
  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const result = editingAccount
      ? await updateAccount(editingAccount.id, formData)
      : await createAccount(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingAccount(null);
      setViewingAccount(null);
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
                  <h2 className="text-xl font-semibold text-slate-900">LIQUIDEZ</h2>
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
                      <TableRow 
                        key={account.id} 
                        // Hacemos la fila interactiva
                        className="hover:bg-slate-100/80 cursor-pointer transition-colors"
                        onClick={() => {
                          setViewingAccount(account);
                          setEditingAccount(null);
                          setIsOpen(true);
                        }}
                      >
                        <TableCell className="font-medium text-base w-1/2">{account.name}</TableCell>
                        <TableCell className="text-right font-semibold text-base text-emerald-600">
                          ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>
                        
                        {/* stopPropagation previene abrir los detalles al usar el dropdown */}
                        <TableCell 
                          className="text-right w-[50px]"
                          onClick={(e) => e.stopPropagation()}
                        >
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
                                  setViewingAccount(null);
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
                    setViewingAccount(null);
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
          if (!open) {
            setEditingAccount(null);
            setViewingAccount(null);
          }
        }}
      >
        {/* Corrección para móviles incluida aquí */}
        <DialogContent className="sm:max-w-[425px] top-[5%] translate-y-0 sm:top-[50%] sm:-translate-y-1/2 max-h-[85dvh] overflow-y-auto">
          
          {/* CARA 1: MODO DE LECTURA */}
          {viewingAccount ? (
            <div className="flex flex-col gap-6 py-4">
              <div className="text-center space-y-2 mt-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Cuenta Registrada
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{viewingAccount.name}</h3>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Dinero Disponible</p>
                <p className="text-5xl font-black text-emerald-600">
                  ${viewingAccount.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>

              <DialogFooter className="mt-4 sm:justify-center">
                <Button 
                  className="w-full sm:w-auto px-10 py-6 text-lg font-semibold shadow-md hover:scale-105 transition-transform"
                  onClick={() => {
                    // Transición suave hacia edición
                    setEditingAccount(viewingAccount);
                    setViewingAccount(null);
                  }}
                >
                  Actualizar Balance
                </Button>
              </DialogFooter>
            </div>
          ) : (
            
            /* CARA 2: MODO FORMULARIO (Creación / Edición) */
            <>
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
                      <p className="text-2xl font-bold text-slate-900 tracking-tight" >
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
                
                <div className="grid gap-3 text-center bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <Label 
                    htmlFor="balance" 
                    className="block w-full text-center text-sm font-semibold uppercase tracking-wider text-slate-500"
                  >
                    Nuevo Balance ($)
                  </Label>
                  <Input
                    id="balance"
                    name="balance"
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    className="text-center text-3xl font-black text-emerald-600 focus-visible:ring-emerald-500 h-16"
                    defaultValue={editingAccount?.balance}
                    placeholder="0.00"
                    required
                    autoFocus={!!editingAccount}
                    onFocus={(e) => e.target.select()}
                  />
                </div>
                
                <DialogFooter className="mt-2">
                  <Button type="submit" className="w-full py-6 text-lg font-bold">
                    {editingAccount ? "Guardar cambios" : "Crear cuenta"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}