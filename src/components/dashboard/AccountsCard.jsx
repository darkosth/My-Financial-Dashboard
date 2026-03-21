"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal, Plus } from "lucide-react";

export default function AccountsCard({ mockAccounts, totalLiquidity }) {
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
                            {mockAccounts.map((account) => (
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
                                      <DropdownMenuItem className="cursor-pointer">Edit Account</DropdownMenuItem>
                                      <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">Delete Account</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="px-6 pb-4 pt-2">
                        <Button variant="ghost" className="w-full text-muted-foreground hover:text-slate-900 hover:bg-slate-100 border border-dashed border-slate-200 mt-2">
                          <Plus className="h-4 w-4 mr-2" /> Add New Account
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </section>
);
}