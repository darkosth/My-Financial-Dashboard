"use client";
import { useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";

// Importamos el Modal y los Inputs
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Importamos el motor del servidor
import { createCreditCard, updateCreditCard, deleteCreditCard } from "@/lib/actions/creditCardActions";

export default function CreditCardsCard({ creditCards, totalCreditLimit, totalAvailableCredit, totalDebt }) {
  
  // LA MEMORIA DEL COMPONENTE
  const [isOpen, setIsOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const formRef = useRef(null);

  // EL CEREBRO DE GUARDADO (Dos Caras)
  const handleSubmit = async (formData) => {
    let result;
    
    if (editingCard) {
      result = await updateCreditCard(editingCard.id, formData);
    } else {
      result = await createCreditCard(formData);
    }

    if (result.success) {
      setIsOpen(false);
      setEditingCard(null);
      formRef.current?.reset();
    } else {
      alert("Hubo un error al guardar la tarjeta.");
    }
  };

  // EL CEREBRO DE BORRADO
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this credit card?")) {
      const result = await deleteCreditCard(id);
      if (!result.success) {
        alert("Error deleting the card.");
      }
    }
  };

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="credit-cards" className="border-none">
            
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
              <div className="flex justify-between items-center w-full pr-4">
                <h2 className="text-xl font-semibold text-slate-900">Tarjetas de Crédito</h2>
                <p className="text-2xl font-bold text-red-600 whitespace-nowrap">
                  -${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pt-2 border-t">
              <div className="px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tarjeta</TableHead>
                      <TableHead className="text-right">Límite</TableHead>
                      <TableHead className="text-right">Disponible</TableHead>
                      <TableHead className="text-right">Deuda</TableHead>
                      <TableHead className="w-[50px]"></TableHead> 
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    
                    {/* Verificamos si no hay tarjetas */}
                    {creditCards.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-slate-500 py-4">
                          No tienes tarjetas de crédito registradas.
                        </TableCell>
                      </TableRow>
                    )}

                    {creditCards.map((card) => {
                      const availableCredit = card.creditLimit - card.balance;
                      return (
                        <TableRow key={card.id} className="hover:bg-slate-100/50">
                          <TableCell className="font-medium text-base">
                            <div className="flex flex-col">
                              <span>{card.name}</span>
                              <span className="text-xs text-muted-foreground font-normal">Due {card.dueDate}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right text-muted-foreground">
                            ${card.creditLimit.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                          </TableCell>
                          <TableCell className="text-right text-emerald-600 font-medium">
                            ${availableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-base">
                            ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
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
                                    setEditingCard(card);
                                    setIsOpen(true);
                                  }}
                                  className="cursor-pointer text-blue-600 focus:text-blue-600 focus:bg-blue-50"
                                >
                                  Edit Card
                                </DropdownMenuItem>
                                {/* BOTÓN DE ELIMINAR */}
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(card.id)}
                                  className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                                >
                                  Delete Card
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableFooter className="bg-slate-50 font-semibold">
                    <TableRow>
                      <TableCell>Totales</TableCell>
                      <TableCell className="text-right text-slate-600">
                        ${totalCreditLimit.toLocaleString("en-US", { minimumFractionDigits: 0 })}
                      </TableCell>
                      <TableCell className="text-right text-emerald-600">
                        ${totalAvailableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="text-right text-red-600">
                        ${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              <div className="px-6 pb-4 pt-2">
                {/* BOTÓN DE CREAR NUEVA TARJETA */}
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setEditingCard(null);
                    setIsOpen(true);
                  }}
                  className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Credit Card
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
            <DialogTitle>{editingCard ? "Edit Credit Card" : "Add New Credit Card"}</DialogTitle>
            <DialogDescription>
              Añade los detalles de tu tarjeta para trackear tu deuda y límite de crédito.
            </DialogDescription>
          </DialogHeader>
          
          <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
            
            <div className="space-y-2">
              <Label htmlFor="name">Nombre de la Tarjeta</Label>
              <Input id="name" name="name" defaultValue={editingCard?.name} placeholder="Ej: Chase Freedom, Amex..." required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="balance">Deuda Actual ($)</Label>
                <Input id="balance" name="balance" type="number" step="0.01" defaultValue={editingCard?.balance} placeholder="0.00" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="creditLimit">Límite Total ($)</Label>
                <Input id="creditLimit" name="creditLimit" type="number" step="0.01" defaultValue={editingCard?.creditLimit} placeholder="0.00" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minimumPayment">Pago Mín. ($) <span className="text-xs font-normal text-muted-foreground">(Opcional)</span></Label>
                <Input id="minimumPayment" name="minimumPayment" type="number" step="0.01" defaultValue={editingCard?.minimumPayment} placeholder="Ej: 35.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Día de Corte (1-31)</Label>
                <Input id="dueDate" name="dueDate" type="number" min="1" max="31" defaultValue={editingCard?.dueDate} placeholder="Ej: 15" required />
              </div>
            </div>

            <DialogFooter className="mt-4">
              <Button type="submit" className="w-full">
                {editingCard ? "Update Card" : "Save Card"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}