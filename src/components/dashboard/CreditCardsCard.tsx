"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MoreHorizontal, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AppDialogContent, Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createCreditCard, deleteCreditCard, updateCreditCard } from "@/lib/actions/creditCardActions";
import {
  CREDIT_CARD_STALE_REVIEW_DAYS,
  getCreditCardEffectiveMinimumPayment,
  getCreditCardLastReviewedAt,
  getCreditCardMonthlyInterestEstimate,
  isCreditCardStale,
} from "@/lib/creditCardReview";

type CreditCardRow = {
  id: string;
  name: string;
  balance: number;
  creditLimit: number;
  dueDate?: number | null;
  minimumPayment?: number | null;
  minimumPaymentPercentage?: number | null;
  apr?: number | null;
  lastReviewedAt?: Date | string | null;
  createdAt: Date | string;
};

type CreditCardsCardProps = {
  creditCards: CreditCardRow[];
  totalCreditLimit: number;
  totalAvailableCredit: number;
  totalDebt: number;
};

const formatReviewedDate = (value: Date | string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const formatApr = (value: number) =>
  `${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

const formatPercent = (value: number) =>
  `${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

const staleRowClassName =
  "border-l-4 border-l-red-500 bg-red-50/80 hover:bg-red-100/80 dark:border-l-red-400 dark:bg-red-950/30 dark:hover:bg-red-950/45";

const staleBadgeClassName =
  "border-red-200 bg-red-100 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200";

const staleBannerClassName =
  "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800 dark:border-red-900/50 dark:bg-red-950/35 dark:text-red-100";

export default function CreditCardsCard({
  creditCards,
  totalCreditLimit,
  totalAvailableCredit,
  totalDebt,
}: CreditCardsCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [editingCard, setEditingCard] = React.useState<CreditCardRow | null>(null);
  const [viewingCard, setViewingCard] = React.useState<CreditCardRow | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const monthlyInterestEstimate = viewingCard ? getCreditCardMonthlyInterestEstimate(viewingCard) : null;

  const handleSubmit = async (formData: FormData) => {
    const result = editingCard ? await updateCreditCard(editingCard.id, formData) : await createCreditCard(formData);

    if (result.success) {
      setIsOpen(false);
      setEditingCard(null);
      setViewingCard(null);
      formRef.current?.reset();
      router.refresh();
    } else {
      alert("Hubo un error al guardar la tarjeta.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Seguro que quieres eliminar esta tarjeta de credito?")) {
      const result = await deleteCreditCard(id);
      if (!result.success) {
        alert("No se pudo eliminar la tarjeta.");
      } else {
        setIsOpen(false);
        setEditingCard(null);
        setViewingCard(null);
        router.refresh();
      }
    }
  };

  const totalMinimumPayment = creditCards.reduce((sum, card) => sum + getCreditCardEffectiveMinimumPayment(card), 0);
  const totalMonthlyInterest = creditCards.reduce(
    (sum, card) => sum + (getCreditCardMonthlyInterestEstimate(card) || 0),
    0
  );
  const sortedCreditCards = [...creditCards].sort((a, b) => b.balance - a.balance);

  return (
    <section>
      <Card className="overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="credit-cards" className="border-none">
            <AccordionTrigger className="px-4 py-5 transition-all hover:bg-muted/50 hover:no-underline sm:px-6">
              <div className="flex w-full items-center justify-between pr-2 sm:pr-4">
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">Tarjetas de Credito</h2>
                <p className="whitespace-nowrap text-xl font-bold text-red-600 sm:text-2xl">
                  -${totalDebt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t pt-2">
              <div className="overflow-hidden px-2 sm:px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="px-2 text-xs sm:px-4 sm:text-sm">Tarjeta</TableHead>
                      <TableHead className="px-2 text-right text-xs sm:px-4 sm:text-sm">Disponible</TableHead>
                      <TableHead className="px-2 text-right text-xs sm:px-4 sm:text-sm whitespace-nowrap">Pago Min.</TableHead>
                      <TableHead className="px-2 text-right text-xs sm:px-4 sm:text-sm whitespace-nowrap">Interes/Mes</TableHead>
                      <TableHead className="w-[40px] px-0 sm:w-[60px] sm:px-4" />
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {creditCards.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="py-4 text-center text-sm text-muted-foreground">
                          No tienes tarjetas de credito registradas.
                        </TableCell>
                      </TableRow>
                    )}

                    {sortedCreditCards.map((card) => {
                      const availableCredit = card.creditLimit - card.balance;
                      const stale = isCreditCardStale(card);
                      const minimumPayment = getCreditCardEffectiveMinimumPayment(card);
                      const monthlyInterestEstimate = getCreditCardMonthlyInterestEstimate(card);

                      return (
                        <TableRow
                          key={card.id}
                          className={`cursor-pointer transition-colors ${stale ? staleRowClassName : "hover:bg-muted/60"}`}
                          onClick={() => {
                            setViewingCard(card);
                            setEditingCard(null);
                            setIsOpen(true);
                          }}
                        >
                          <TableCell className="max-w-[120px] px-2 font-medium text-sm sm:max-w-[200px] sm:px-4 sm:text-base">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2">
                                <span className="truncate" title={card.name}>
                                  {card.name}
                                </span>
                                {stale ? (
                                  <Badge variant="outline" className={staleBadgeClassName}>
                                    Actualizar
                                  </Badge>
                                ) : null}
                              </div>
                              <span className="text-[10px] font-normal text-muted-foreground sm:text-xs">Due {card.dueDate}</span>
                            </div>
                          </TableCell>

                          <TableCell className="px-2 text-right text-sm font-medium text-emerald-600 dark:text-emerald-400 sm:px-4 sm:text-base">
                            {formatCurrency(availableCredit)}
                          </TableCell>

                          <TableCell className="px-2 text-right text-sm font-semibold text-amber-600 sm:px-4 sm:text-base">
                            {formatCurrency(minimumPayment)}
                          </TableCell>

                          <TableCell className="px-2 text-right text-sm font-semibold text-foreground sm:px-4 sm:text-base">
                            {monthlyInterestEstimate == null ? "--" : formatCurrency(monthlyInterestEstimate)}
                          </TableCell>

                          <TableCell className="w-[40px] px-0 text-right sm:w-[60px] sm:px-4" onClick={(event) => event.stopPropagation()}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-10 w-10 rounded-full p-0 transition-colors hover:bg-muted">
                                  <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                                </Button>
                              </DropdownMenuTrigger>

                              <DropdownMenuContent align="end" className="w-48 rounded-xl border-border p-2 shadow-xl">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setEditingCard(card);
                                    setViewingCard(null);
                                    setIsOpen(true);
                                  }}
                                  className="mb-1 cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700 sm:text-base dark:hover:bg-blue-950/50 dark:hover:text-blue-300 dark:focus:bg-blue-950/50 dark:focus:text-blue-300 dark:data-[highlighted]:bg-blue-950/50 dark:data-[highlighted]:text-blue-300"
                                >
                                  Editar tarjeta
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  onClick={() => handleDelete(card.id)}
                                  className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 data-[highlighted]:bg-red-50 data-[highlighted]:text-red-700 sm:text-base dark:hover:bg-red-950/45 dark:hover:text-red-200 dark:focus:bg-red-950/45 dark:focus:text-red-200 dark:data-[highlighted]:bg-red-950/45 dark:data-[highlighted]:text-red-200"
                                >
                                  Eliminar tarjeta
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>

                  <TableFooter className="bg-muted/40 text-sm font-semibold sm:text-base">
                    <TableRow>
                      <TableCell className="px-2 sm:px-4">Totales</TableCell>
                      <TableCell className="px-2 text-right text-emerald-600 dark:text-emerald-400 sm:px-4">
                        {formatCurrency(totalAvailableCredit)}
                      </TableCell>
                      <TableCell className="px-2 text-right text-amber-600 sm:px-4">
                        {formatCurrency(totalMinimumPayment)}
                      </TableCell>
                      <TableCell className="px-2 text-right text-foreground sm:px-4">
                        {formatCurrency(totalMonthlyInterest)}
                      </TableCell>
                      <TableCell className="px-0 sm:px-4" />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>

              <div className="px-4 pb-4 pt-2 sm:px-6">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setEditingCard(null);
                    setViewingCard(null);
                    setIsOpen(true);
                  }}
                  className="mt-2 w-full border border-dashed border-border text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                >
                  <Plus className="mr-2 h-4 w-4" /> Nueva tarjeta de credito
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
            setEditingCard(null);
            setViewingCard(null);
          }
        }}
      >
        <AppDialogContent>
          {viewingCard ? (
            <div className="flex flex-col gap-6 py-2">
              {isCreditCardStale(viewingCard) ? (
                <div className={staleBannerClassName}>
                  Esta tarjeta lleva mas de {CREDIT_CARD_STALE_REVIEW_DAYS} dias sin actualizarse.
                </div>
              ) : null}

              <div className="mt-4 space-y-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{viewingCard.name}</h3>
                <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                  Dia de corte: {viewingCard.dueDate}
                </div>
                <p className="text-sm text-muted-foreground">
                  Ultima actualizacion: {formatReviewedDate(getCreditCardLastReviewedAt(viewingCard))}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-muted/40 p-5 shadow-sm">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Limite Total</p>
                  <p className="text-lg font-semibold text-foreground">{formatCurrency(viewingCard.creditLimit)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Deuda Actual</p>
                  <p className="text-lg font-bold text-red-600">{formatCurrency(viewingCard.balance)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Disponible</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {formatCurrency(viewingCard.creditLimit - viewingCard.balance)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Pago Min.</p>
                  <p className="text-lg font-bold text-amber-600">
                    {formatCurrency(getCreditCardEffectiveMinimumPayment(viewingCard))}
                  </p>
                  {(viewingCard.minimumPaymentPercentage ?? 0) > 0 ? (
                    <p className="text-xs text-muted-foreground">
                      Minimo fijo: {formatCurrency(viewingCard.minimumPayment || 0)} - Porcentaje:{" "}
                      {formatPercent(viewingCard.minimumPaymentPercentage ?? 0)}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">APR</p>
                  <p className="text-lg font-semibold text-foreground">
                    {viewingCard.apr == null ? "No configurado" : formatApr(viewingCard.apr)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Interes/Mes</p>
                  <p className="text-lg font-semibold text-foreground">
                    {monthlyInterestEstimate == null
                      ? "No configurado"
                      : formatCurrency(monthlyInterestEstimate)}
                  </p>
                </div>
              </div>

              <DialogFooter className="mt-2 sm:justify-center">
                <Button
                  className="w-full px-8 sm:w-auto"
                  onClick={() => {
                    setEditingCard(viewingCard);
                    setViewingCard(null);
                  }}
                >
                  Editar tarjeta
                </Button>
              </DialogFooter>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>{editingCard ? "Editar tarjeta" : "Nueva tarjeta de credito"}</DialogTitle>
                <DialogDescription>
                  Indica deuda, limite, APR y dia de corte para seguir tu credito en el tablero.
                </DialogDescription>
              </DialogHeader>

              <form action={handleSubmit} ref={formRef} className="grid gap-4 py-4">
                <div className="grid gap-2 text-center">
                  {editingCard ? (
                    <div className="mb-2 space-y-1">
                      <Label className="block w-full text-center uppercase tracking-wider text-muted-foreground">
                        Tarjeta a actualizar
                      </Label>
                      <p className="text-lg font-bold uppercase tracking-wider text-foreground">{editingCard.name}</p>
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
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-right font-medium text-red-600 focus-visible:ring-red-500 dark:text-red-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creditLimit">Limite Total ($)</Label>
                    <Input
                      id="creditLimit"
                      name="creditLimit"
                      type="number"
                      step="0.01"
                      inputMode="decimal"
                      defaultValue={editingCard?.creditLimit}
                      placeholder="0.00"
                      required
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-right font-medium text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minimumPayment">Pago Min. Fijo ($)</Label>
                    <Input
                      id="minimumPayment"
                      name="minimumPayment"
                      type="number"
                      step="0.01"
                      inputMode="decimal"
                      defaultValue={editingCard?.minimumPayment ?? undefined}
                      placeholder="0.00"
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-right font-medium text-amber-600 focus-visible:ring-amber-500 dark:text-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minimumPaymentPercentage">Pago Min. (%)</Label>
                    <Input
                      id="minimumPaymentPercentage"
                      name="minimumPaymentPercentage"
                      type="number"
                      step="0.01"
                      inputMode="decimal"
                      defaultValue={editingCard?.minimumPaymentPercentage ?? ""}
                      placeholder="Ej: 2.00"
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-right font-medium text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Dia de Corte</Label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="31"
                      defaultValue={editingCard?.dueDate ?? ""}
                      placeholder="Ej: 15"
                      required
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-center text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apr">APR (%)</Label>
                    <Input
                      id="apr"
                      name="apr"
                      type="number"
                      step="0.01"
                      inputMode="decimal"
                      defaultValue={editingCard?.apr ?? ""}
                      placeholder="Ej: 24.99"
                      onFocus={(event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()}
                      className="bg-background text-right font-medium text-foreground"
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
