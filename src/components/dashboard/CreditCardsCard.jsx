"use client";
import { useState, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";

import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { createCreditCard, updateCreditCard, deleteCreditCard } from "@/lib/actions/creditCardActions";

export default function CreditCardsCard({ creditCards, totalCreditLimit, totalAvailableCredit, totalDebt }) {
  // LA MEMORIA DEL COMPONENTE
  const [isOpen, setIsOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [viewingCard, setViewingCard] = useState(null); // NUEVO ESTADO: Para la vista de solo lectura
  const formRef = useRef(null);

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
      setViewingCard(null);
      formRef.current?.reset();
    } else {
      alert("Hubo un error al guardar la tarjeta.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta tarjeta de crédito?")) {
      const result = await deleteCreditCard(id);
      if (!result.success) {
        alert("No se pudo eliminar la tarjeta.");
      }
    }
  };

  const totalMinimumPayment = creditCards.reduce((sum, card) => sum + (card.minimumPayment || 0), 0);
  const sortedCreditCards = [...creditCards].sort((a, b) => b.balance - a.balance);

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="credit-cards" className="border-none">
            
            <AccordionTrigger className="px-4 sm:px-6 py-5 hover:no-underline hover:bg-muted/50 transition-all">
              <div className="flex justify-between items-center w-full pr-2 sm:pr-4">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">Tarjetas de Crédito</h2>
                <p className="text-xl sm:text-2xl font-bold text-red-600 whitespace-nowrap">
                  -${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="pt-2 border-t">
              <div className="px-2 sm:px-6 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-2 sm:px-4 text-xs sm:text-sm">Tarjeta</TableHead>
                      <TableHead className="px-2 sm:px-4 text-right text-xs sm:text-sm">Disponible</TableHead>
                      <TableHead className="px-2 sm:px-4 text-right text-xs sm:text-sm whitespace-nowrap">Pago Mín.</TableHead>
                      <TableHead className="w-[40px] sm:w-[60px] px-0 sm:px-4"></TableHead> 
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    
                    {creditCards.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-4 text-sm">
                          No tienes tarjetas de crédito registradas.
                        </TableCell>
                      </TableRow>
                    )}

                    {sortedCreditCards.map((card) => {
                      const availableCredit = card.creditLimit - card.balance;
                      return (
                        <TableRow 
                          key={card.id} 
                          // Convertimos la fila en un botón interactivo
                          className="cursor-pointer transition-colors hover:bg-muted/60"
                          onClick={() => {
                            setViewingCard(card);
                            setEditingCard(null);
                            setIsOpen(true);
                          }}
                        >
                          <TableCell className="px-2 sm:px-4 font-medium text-sm sm:text-base max-w-[120px] sm:max-w-[200px]">
                            <div className="flex flex-col">
                              <span className="truncate" title={card.name}>{card.name}</span>
                              <span className="text-[10px] sm:text-xs text-muted-foreground font-normal">Due {card.dueDate}</span>
                            </div>
                          </TableCell>
                          
                          <TableCell className="px-2 sm:px-4 text-right text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base">
                            ${availableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          
                          <TableCell className="px-2 sm:px-4 text-right text-amber-600 font-semibold text-sm sm:text-base">
                            ${(card.minimumPayment || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </TableCell>
                          
                          {/* AQUI COMIENZA EL MENÚ DESPLEGABLE PREMIUM */}
                          <TableCell 
                            className="px-0 sm:px-4 text-right w-[40px] sm:w-[60px]"
                            onClick={(e) => e.stopPropagation()}
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
                                    setEditingCard(card);
                                    setViewingCard(null);
                                    setIsOpen(true);
                                  }}
                                  className="cursor-pointer text-sm sm:text-base font-medium py-3 px-4 rounded-lg text-blue-600 transition-colors mb-1 hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300 dark:focus:bg-blue-950/50 dark:focus:text-blue-300 dark:data-[highlighted]:bg-blue-950/50 dark:data-[highlighted]:text-blue-300"
                                >
                                  Editar tarjeta
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem 
                                  onClick={() => handleDelete(card.id)}
                                  className="cursor-pointer text-sm sm:text-base font-medium py-3 px-4 rounded-lg text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 dark:hover:bg-red-950/45 dark:hover:text-red-200 dark:focus:bg-red-950/45 dark:focus:text-red-200 dark:data-[highlighted]:bg-red-950/45 dark:data-[highlighted]:text-red-200"
                                >
                                  Eliminar tarjeta
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                          {/* AQUI TERMINA EL MENÚ */}

                        </TableRow>
                      );
                    })}
                  </TableBody>
                  
                  <TableFooter className="bg-muted/40 font-semibold text-sm sm:text-base">
                    <TableRow>
                      <TableCell className="px-2 sm:px-4">Totales</TableCell>
                      <TableCell className="px-2 sm:px-4 text-right text-emerald-600 dark:text-emerald-400">
                        ${totalAvailableCredit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="px-2 sm:px-4 text-right text-amber-600">
                        ${totalMinimumPayment.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="px-0 sm:px-4"></TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
              
              <div className="px-4 sm:px-6 pb-4 pt-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setEditingCard(null);
                    setViewingCard(null);
                    setIsOpen(true);
                  }}
                  className="w-full text-muted-foreground hover:text-foreground hover:bg-muted/70 border border-dashed border-border mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Nueva tarjeta de crédito
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* EL MODAL DE DOS CARAS */}
      <Dialog 
        open={isOpen} 
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditingCard(null);
            setViewingCard(null);
          }
        }}
      >
        <AppDialogContent>
          
          {/* CARA 1: MODO DE LECTURA (Detalles limpios) */}
          {viewingCard ? (
            <div className="flex flex-col gap-6 py-2">
              <div className="text-center space-y-1 mt-4">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{viewingCard.name}</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  Día de corte: {viewingCard.dueDate}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 bg-muted/40 p-5 rounded-2xl border border-border shadow-sm">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Límite Total</p>
                  <p className="text-lg font-semibold text-foreground">
                    ${viewingCard.creditLimit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Deuda Actual</p>
                  <p className="text-lg font-bold text-red-600">
                    ${viewingCard.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Disponible</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    ${(viewingCard.creditLimit - viewingCard.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Pago Mín.</p>
                  <p className="text-lg font-bold text-amber-600">
                    ${(viewingCard.minimumPayment || 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>

              <DialogFooter className="mt-2 sm:justify-center">
                <Button 
                  className="w-full sm:w-auto px-8"
                  onClick={() => {
                    // Transición suave de lectura a edición
                    setEditingCard(viewingCard);
                    setViewingCard(null);
                  }}
                >
                  Editar tarjeta
                </Button>
              </DialogFooter>
            </div>
          ) : (
            
            /* CARA 2: MODO FORMULARIO (Edición o Creación) */
            <>
              <DialogHeader>
                <DialogTitle>{editingCard ? "Editar tarjeta" : "Nueva tarjeta de crédito"}</DialogTitle>
                <DialogDescription>
                  Indica deuda, límite y día de corte para seguir tu crédito en el tablero.
                </DialogDescription>
              </DialogHeader>
              
              <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
                
                <div className="grid gap-2 text-center">
                  {editingCard ? (
                    <div className="mb-2 space-y-1">
                      <Label className="block w-full text-center uppercase tracking-wider text-muted-foreground">
                        Tarjeta a actualizar
                      </Label>
                      <p className="text-lg font-bold text-foreground uppercase tracking-wider">
                        {editingCard.name}
                      </p>
                      <input type="hidden" name="name" value={editingCard.name} />
                    </div>
                  ) : (
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name">Nombre de la Tarjeta</Label>
                      <Input id="name" name="name" placeholder="Ej: Chase Freedom, Amex..." required className="bg-background" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="balance">Deuda Actual ($)</Label>
                    <Input 
                      id="balance" 
                      name="balance" 
                      type="number" 
                      step="0.01" 
                      inputMode="decimal"
                      defaultValue={editingCard?.balance} 
                      placeholder="0.00" 
                      required 
                      onFocus={(e) => e.target.select()}
                      className="bg-background text-right font-medium text-red-600 dark:text-red-400 focus-visible:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creditLimit">Límite Total ($)</Label>
                    <Input 
                      id="creditLimit" 
                      name="creditLimit" 
                      type="number" 
                      step="0.01" 
                      inputMode="decimal"
                      defaultValue={editingCard?.creditLimit} 
                      placeholder="0.00" 
                      required 
                      onFocus={(e) => e.target.select()}
                      className="bg-background text-right font-medium text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minimumPayment">Pago Mín. ($)</Label>
                    <Input 
                      id="minimumPayment" 
                      name="minimumPayment" 
                      type="number" 
                      step="0.01" 
                      inputMode="decimal"
                      defaultValue={editingCard?.minimumPayment} 
                      placeholder="0.00" 
                      onFocus={(e) => e.target.select()}
                      className="bg-background text-right font-medium text-amber-600 dark:text-amber-400 focus-visible:ring-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Día de Corte</Label>
                    <Input 
                      id="dueDate" 
                      name="dueDate" 
                      type="number" 
                      inputMode="numeric"
                      min="1" 
                      max="31" 
                      defaultValue={editingCard?.dueDate} 
                      placeholder="Ej: 15" 
                      required 
                      onFocus={(e) => e.target.select()}
                      className="bg-background text-center text-foreground"
                    />
                  </div>
                </div>

                <DialogFooter className="mt-4">
                  <Button type="submit" className="w-full">
                    {editingCard ? "Guardar cambios" : "Crear tarjeta"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </AppDialogContent>
      </Dialog>
    </section>
  );
}