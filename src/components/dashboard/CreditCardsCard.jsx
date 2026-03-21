'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";


export default function CreditCardsCard({ mockCreditCards, totalCreditLimit, totalAvailableCredit, totalDebt }) {
    return (
        <section>
          <Card className="overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="credit-cards" className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-all">
                  <div className="flex justify-between items-center w-full pr-4">
                    <h2 className="text-xl font-semibold text-slate-900">Tarjetas de Crédito</h2>
                    <p className="text-2xl font-bold text-red-600">
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
                        {mockCreditCards.map((card) => {
                          const availableCredit = card.creditLimit - card.balance;
                          return (
                            <TableRow key={card.id} className="hover:bg-slate-100/50">
                              <TableCell className="font-medium text-base">{card.name}</TableCell>
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
                                    <DropdownMenuItem className="cursor-pointer">Edit Card</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">Delete Card</DropdownMenuItem>
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
                    <Button variant="ghost" className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2">
                      <Plus className="h-4 w-4 mr-2" /> Add New Credit Card
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </section>
    );
}