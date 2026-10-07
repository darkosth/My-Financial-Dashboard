"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CategoryFields, fieldClass, type RunAction } from "./FinanceForms";
import type { FinanceWorkspaceData, Movement } from "@/lib/finance/uiTypes";
import { isLearningAmountEligible } from "@/lib/learningMatcher";
import { money, weekLabel } from "@/lib/finance/analytics";
import {
  undoTransferAction,
  resolveBankChangeAction,
  setMovementTreatmentAction,
  classifyMovementAction,
  reconcileMovementAction,
  undoReconciliationAction,
  transferToCashAction,
  pairTransferAction,
  reverseManualMovementAction,
  linkExistingPaymentAction,
} from "@/lib/actions/financeActions";
export default function MovementEditor({
  movement: m,
  data,
  run,
  busy,
  done,
}: {
  movement: Movement;
  data: FinanceWorkspaceData;
  run: RunAction;
  busy: boolean;
  done: () => void;
}) {
  const [category, setCategory] = useState(m.categoryId ?? "");
  const [subcategory, setSubcategory] = useState(m.subcategoryId ?? "");
  const [search, setSearch] = useState("");
  const [occurrenceId, setOccurrenceId] = useState(
    m.reconciliation?.occurrenceId ?? "",
  );
  const [counterpart, setCounterpart] = useState("");
  const [history, setHistory] = useState("");
  const [refundOfId, setRefundOfId] = useState("");
  const [confirmReverse, setConfirmReverse] = useState(false);
  const available = data.occurrences.filter(
    (o) =>
      (o.currency ?? "USD") === m.currency &&
      (m.kind === "CARD_PAYMENT"
        ? o.targetId.startsWith("credit-card:")
        : !o.targetId.startsWith("credit-card:")) &&
      `${o.name} ${o.categoryLabel ?? ""}`
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()),
  );
  const probable = available
    .filter((o) => isLearningAmountEligible(m.amountCents, o.expectedCents))
    .sort(
      (a, b) =>
        Math.abs(a.expectedCents - m.amountCents) -
        Math.abs(b.expectedCents - m.amountCents),
    );
  const other = available.filter((o) => !probable.some((p) => p.id === o.id));
  const occurrence = data.occurrences.find((o) => o.id === occurrenceId);
  const legacy = data.legacyPayments.filter(
    (p) => !occurrence || p.targetId === occurrence.targetId,
  );
  const editable = m.status === "POSTED" && !m.reversedAt && !m.needsReview;
  return (
    <div className="space-y-6">
      <p className="text-lg font-semibold tabular-nums">
        {money(m.amountCents, m.currency)}{" "}
        <span className="text-sm font-normal text-muted-foreground">
          · {m.date.slice(0, 10)}
        </span>
      </p>
      <section className="space-y-3">
        <CategoryFields
          categories={data.categories}
          category={category}
          subcategory={subcategory}
          onChange={(c, s) => {
            setCategory(c);
            setSubcategory(s);
          }}
          run={run}
          busy={busy}
        />
        <Button
          variant="outline"
          disabled={busy}
          onClick={() =>
            run(
              () =>
                classifyMovementAction({
                  movementId: m.id,
                  categoryId: category || null,
                  subcategoryId: subcategory || null,
                }),
              done,
            )
          }
        >
          Guardar categoría
        </Button>
      </section>
      {m.status === "PENDING" && (
        <p className="text-sm text-muted-foreground">
          Pendiente de contabilizar. La conciliación estará disponible al
          confirmarse el movimiento.
        </p>
      )}
      {m.needsReview && (
        <section className="space-y-3 rounded-md border border-destructive p-3">
          <h3 className="font-medium">Cambio bancario pendiente de revisión</h3>
          <p className="text-sm">
            {m.reconciliation || m.transferId
              ? "Desvincula el pago o la transferencia antes de aceptar el cambio."
              : "El importe, fecha o estado ha cambiado. Revisa los datos antes de aceptarlos."}
          </p>
          <Button
            variant="outline"
            disabled={busy || !!m.reconciliation || !!m.transferId}
            onClick={() =>
              run(() => resolveBankChangeAction({ movementId: m.id }), done)
            }
          >
            Aceptar datos del banco
          </Button>
        </section>
      )}
      {m.transferId && (
        <section className="space-y-3 border-t pt-4">
          <h3 className="font-medium">Transferencia vinculada</h3>
          <Button
            variant="outline"
            disabled={busy}
            onClick={() =>
              run(() => undoTransferAction({ movementId: m.id }), done)
            }
          >
            Deshacer transferencia
          </Button>
        </section>
      )}
      {m.reconciliation && (
        <section className="space-y-3 border-t pt-4">
          <h3 className="font-medium">Pago vinculado</h3>
          <Button
            variant="outline"
            disabled={busy}
            onClick={() =>
              run(() => undoReconciliationAction({ movementId: m.id }), done)
            }
          >
            Deshacer conciliación
          </Button>
        </section>
      )}
      {editable &&
        !m.reconciliation &&
        m.amountCents > 0 &&
        ["EXPENSE", "CARD_PAYMENT"].includes(m.kind) && (
          <section className="space-y-3 border-t pt-4">
            <h3 className="font-medium">
              {m.kind === "CARD_PAYMENT"
                ? "Vincular pago de tarjeta"
                : "Vincular pago"}
            </h3>
            {m.reconciliation ? (
              <Button
                variant="outline"
                disabled={busy}
                onClick={() =>
                  run(
                    () => undoReconciliationAction({ movementId: m.id }),
                    done,
                  )
                }
              >
                Deshacer conciliación
              </Button>
            ) : (
              <>
                <input
                  className={fieldClass}
                  aria-label="Buscar gasto"
                  placeholder="Buscar gasto"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <label className="block space-y-1">
                  <span>Gasto y semana</span>
                  <select
                    className={fieldClass}
                    value={occurrenceId}
                    onChange={(e) => setOccurrenceId(e.target.value)}
                  >
                    <option value="">Seleccionar gasto</option>
                    {[
                      { label: "Más probables", items: probable },
                      { label: "Todos los demás gastos", items: other },
                    ].map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.items.map((o) => (
                          <option value={o.id} key={o.id}>
                            {o.name} · {weekLabel(o.weekStart)} ·{" "}
                            {money(o.expectedCents)} ·{" "}
                            {o.closure === "OPEN" ? "Abierto" : "Cerrado"}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </label>
                {occurrence && (
                  <p className="text-sm text-muted-foreground">
                    Pagado: {money(occurrence.paidCents)} · Previsto:{" "}
                    {money(occurrence.expectedCents)}
                  </p>
                )}
                <Button
                  disabled={busy || !occurrence}
                  onClick={() => {
                    if (occurrence)
                      run(
                        () =>
                          reconcileMovementAction({
                            movementId: m.id,
                            targetId: occurrence.targetId,
                            cycleReference: occurrence.cycleReference,
                          }),
                        done,
                      );
                  }}
                >
                  Confirmar pago
                </Button>
                {m.source === "BANK" && legacy.length > 0 && (
                  <details className="space-y-3">
                    <summary className="cursor-pointer text-sm">
                      Este pago ya estaba registrado
                    </summary>
                    <select
                      aria-label="Pago existente"
                      className={fieldClass}
                      value={history}
                      onChange={(e) => setHistory(e.target.value)}
                    >
                      <option value="">Seleccionar registro</option>
                      {legacy.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.date.slice(0, 10)} · {money(p.amountCents)} ·{" "}
                          {data.occurrences.find(
                            (o) => o.targetId === p.targetId,
                          )?.name ?? p.targetId}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      disabled={busy || !history}
                      onClick={() => {
                        const p = legacy.find((p) => p.id === history);
                        if (p)
                          run(
                            () =>
                              linkExistingPaymentAction({
                                movementId: m.id,
                                historyId: p.id,
                                targetId: p.targetId,
                              }),
                            done,
                          );
                      }}
                    >
                      Vincular sin duplicar
                    </Button>
                  </details>
                )}
              </>
            )}
          </section>
        )}
      {editable &&
        m.source === "BANK" &&
        !m.reconciliation &&
        !m.transferId && (
          <section className="space-y-3 border-t pt-4">
            <h3 className="font-medium">Tipo de movimiento</h3>
            {m.amountCents > 0 ? (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  disabled={busy || m.kind === "EXPENSE"}
                  onClick={() =>
                    run(
                      () =>
                        setMovementTreatmentAction({
                          movementId: m.id,
                          treatment: "EXPENSE",
                        }),
                      done,
                    )
                  }
                >
                  Gasto
                </Button>
                <Button
                  variant="outline"
                  disabled={busy || m.kind === "TRANSFER"}
                  onClick={() =>
                    run(
                      () =>
                        setMovementTreatmentAction({
                          movementId: m.id,
                          treatment: "CARD_PAYMENT",
                        }),
                      done,
                    )
                  }
                >
                  Pago de tarjeta de crédito
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  disabled={busy || m.kind === "INCOME"}
                  onClick={() =>
                    run(
                      () =>
                        setMovementTreatmentAction({
                          movementId: m.id,
                          treatment: "INCOME",
                        }),
                      done,
                    )
                  }
                >
                  Ingreso
                </Button>
                <label className="block space-y-1">
                  <span>Devolución de una compra</span>
                  <select
                    className={fieldClass}
                    value={refundOfId}
                    onChange={(e) => setRefundOfId(e.target.value)}
                  >
                    <option value="">Compra original</option>
                    {data.movements
                      .filter(
                        (o) =>
                          o.id !== m.id &&
                          o.kind === "EXPENSE" &&
                          o.amountCents > 0 &&
                          o.status === "POSTED" &&
                          !o.reversedAt &&
                          o.currency === m.currency,
                      )
                      .map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name} · {o.date.slice(0, 10)} ·{" "}
                          {money(o.amountCents, o.currency)}
                        </option>
                      ))}
                  </select>
                </label>
                <Button
                  variant="outline"
                  disabled={busy || !refundOfId}
                  onClick={() =>
                    run(
                      () =>
                        setMovementTreatmentAction({
                          movementId: m.id,
                          treatment: "REFUND",
                          refundOfId,
                        }),
                      done,
                    )
                  }
                >
                  Confirmar devolución
                </Button>
              </>
            )}
          </section>
        )}
      {editable &&
        m.source === "BANK" &&
        !m.reconciliation &&
        !m.transferId && (
          <section className="space-y-3 border-t pt-4">
            <h3 className="font-medium">Transferencia propia</h3>
            {m.amountCents > 0 && m.currency === "USD" && (
              <Button
                variant="outline"
                disabled={busy}
                onClick={() =>
                  run(() => transferToCashAction({ movementId: m.id }), done)
                }
              >
                Retiro hacia Efectivo
              </Button>
            )}
            <select
              aria-label="Contrapartida de transferencia"
              className={fieldClass}
              value={counterpart}
              onChange={(e) => setCounterpart(e.target.value)}
            >
              <option value="">Movimiento de la otra cuenta</option>
              {data.movements
                .filter(
                  (o) =>
                    o.id !== m.id &&
                    o.accountId !== m.accountId &&
                    o.source === "BANK" &&
                    o.status === "POSTED" &&
                    !o.reversedAt &&
                    !o.transferId &&
                    !o.reconciliation &&
                    o.currency === m.currency &&
                    o.amountCents === -m.amountCents,
                )
                .map((o) => (
                  <option value={o.id} key={o.id}>
                    {o.accountName} · {o.date.slice(0, 10)} ·{" "}
                    {money(o.amountCents, o.currency)}
                  </option>
                ))}
            </select>
            <Button
              variant="outline"
              disabled={busy || !counterpart}
              onClick={() =>
                run(
                  () =>
                    pairTransferAction({
                      movementId: m.id,
                      counterpartId: counterpart,
                    }),
                  done,
                )
              }
            >
              Confirmar transferencia
            </Button>
          </section>
        )}
      {editable && m.source !== "BANK" && !m.transferId && (
        <section className="space-y-3 border-t pt-4">
          {!confirmReverse ? (
            <Button
              variant="outline"
              disabled={busy}
              onClick={() => setConfirmReverse(true)}
            >
              Anular movimiento manual
            </Button>
          ) : (
            <>
              <p className="text-sm">
                Se revertirá el pago y su efecto en Efectivo, si corresponde.
              </p>
              <Button
                variant="destructive"
                disabled={busy}
                onClick={() =>
                  run(
                    () => reverseManualMovementAction({ movementId: m.id }),
                    done,
                  )
                }
              >
                Confirmar anulación
              </Button>
              <Button variant="ghost" onClick={() => setConfirmReverse(false)}>
                Cancelar
              </Button>
            </>
          )}
        </section>
      )}
    </div>
  );
}
