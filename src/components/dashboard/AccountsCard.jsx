"use client";
import { useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";

// Importamos el Modal y los Inputs
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Importamos nuestras Server Actions
import { createAccount, updateAccount, deleteAccount } from "@/lib/actions/accountActions";

export default function AccountsCard({ accounts, totalLiquidity }) {
  
  // LA MEMORIA DEL COMPONENTE
  const [isOpen, setIsOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const formRef = useRef(null);

  // EL CEREBRO DE GUARDADO (Dos Caras)
  const handleSubmit = async (formData) => {
    let result;
    
    if (editingAccount) {
      result = await updateAccount(editingAccount.id, formData);
    } else {
      result = await createAccount(formData);
    }

    if (result.success) {
      setIsOpen(false);
      setEditingAccount(null);
      formRef.current?.reset();
    } else {
      alert("Hubo un error al guardar la cuenta.");
    }
  };

  // EL CEREBRO DE BORRADO
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      const result = await deleteAccount(id);
      if (!result.success) {
        alert("Error deleting the account.");
      }
    }
  };

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="cuentas" className="border-none">
            
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
              <div className="flex justify-between items-center w-full pr-4">
                <h2 className="text-xl font-semibold text-slate-900">Cuentas</h2>
                <p className="text-2xl font-bold text-emerald-600">
                  ${totalLiquidity.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pt-2 border-t">
              <div className="px-6">
                <Table>
                  <TableBody>
                    {/* Verificamos si no hay cuentas para mostrar un mensaje vacío */}
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
                              {/* BOTÓN DE EDITAR */}
                              <DropdownMenuItem 
                                onClick={() => {
                                  setEditingAccount(account);
                                  setIsOpen(true);
                                }}
                                className="cursor-pointer text-blue-600 focus:text-blue-600 focus:bg-blue-50"
                              >
                                Edit Account
                              </DropdownMenuItem>
                              {/* BOTÓN DE ELIMINAR */}
                              <DropdownMenuItem 
                                onClick={() => handleDelete(account.id)}
                                className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                              >
                                Delete Account
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
                {/* BOTÓN DE CREAR NUEVA CUENTA */}
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setEditingAccount(null); // Limpiamos memoria
                    setIsOpen(true);
                  }}
                  className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Account
                </Button>
              </div>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* EL MODAL INVISIBLE (Solo aparece cuando isOpen es true) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingAccount ? "Edit Account" : "Add New Account"}</DialogTitle>
            <DialogDescription>
              Registra el dinero disponible que tienes actualmente en tu banco o efectivo.
            </DialogDescription>
          </DialogHeader>
          
          <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre de la cuenta</Label>
              <Input 
                id="name" 
                name="name" 
                defaultValue={editingAccount?.name} 
                placeholder="Ej: Chase Checking, Efectivo..." 
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="balance">Balance Actual ($)</Label>
              <Input 
                id="balance" 
                name="balance" 
                type="number" 
                step="0.01" 
                defaultValue={editingAccount?.balance} 
                placeholder="0.00" 
                required 
              />
            </div>
            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full">
                {editingAccount ? "Update Account" : "Save Account"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}