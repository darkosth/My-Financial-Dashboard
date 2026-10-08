"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CategoryFields, fieldClass, type RunAction } from "./FinanceForms";
import type { FinanceWorkspaceData, Movement } from "@/lib/finance/uiTypes";
import OccurrencePicker from "./OccurrencePicker";
import { dateDistance } from "@/lib/finance/matching";
import { money } from "@/lib/finance/analytics";
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
  replaceManualMovementAction,
} from "@/lib/actions/financeActions";
export default function MovementEditor({
  movement: m,
  initialTarget = "",
  data,
  run,
  busy,
  done,
}: {
  movement: Movement;
  initialTarget?: string;
  data: FinanceWorkspaceData;
  run: RunAction;
  busy: boolean;
  done: () => void;
}) {
  const [category, setCategory] = useState(m.categoryId ?? "");
  const [subcategory, setSubcategory] = useState(m.subcategoryId ?? "");
  const [duplicateChoice, setDuplicateChoice] = useState("");
  const [occurrenceId, setOccurrenceId] = useState(
    m.reconciliation?.occurrenceId ?? [...data.occurrences].filter(o => o.targetId === initialTarget).sort((a,b) => dateDistance(a.occurrenceDate ?? a.weekStart,m.date) - dateDistance(b.occurrenceDate ?? b.weekStart,m.date))[0]?.id ?? "",
  );
  const [counterpart, setCounterpart] = useState("");
  const [history, setHistory] = useState("");
  const [refundOfId, setRefundOfId] = useState("");
  const [confirmReverse, setConfirmReverse] = useState(false);
  const available = data.occurrences.filter(o => (o.currency ?? "USD") === m.currency && (m.kind === "CARD_PAYMENT" ? o.targetId.startsWith("credit-card:") : m.source === "BANK" || !o.targetId.startsWith("credit-card:")));
  const occurrence = data.occurrences.find(o => o.id === occurrenceId);
  const legacy = data.legacyPayments.filter(p => p.amountCents === m.amountCents && (!occurrence || (p.targetId === occurrence.targetId && p.cycleReference === occurrence.cycleReference)));
  const duplicates = m.replacementCandidates ?? [];
  const replacing = duplicates.find(p => p.id === duplicateChoice);
  const withClassification: RunAction = (action, completed) => run(async () => {
    if ((category || null) !== m.categoryId || (subcategory || null) !== m.subcategoryId) {
      const result = await classifyMovementAction({movementId:m.id,categoryId:category || null,subcategoryId:subcategory || null});
      if (!result.success) return result;
    }
    return action();
  }, completed);
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
          busy={busy || !!m.reversedAt || m.kind === "TRANSFER"}
        />
        <Button
          variant="outline"
          disabled={busy || !!m.reversedAt || m.kind === "TRANSFER"}
          onClick={() =>
            run(
              () =>
                classifyMovementAction({
                  movementId: m.id,
                  categoryId: category || null,
                  subcategoryId: subcategory || null,
                }),
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
            {m.reconciliation || m.transferId || m.replacesManualPayment
              ? "Desvincula el pago o la transferencia antes de aceptar el cambio."
              : "El importe, fecha o estado ha cambiado. Revisa los datos antes de aceptarlos."}
          </p>
          <Button
            variant="outline"
            disabled={busy || !!m.reconciliation || !!m.transferId || !!m.replacesManualPayment}
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
      {(m.reconciliation || m.replacesManualPayment) && (
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
            <OccurrencePicker occurrences={available} value={occurrenceId} onChange={setOccurrenceId} referenceDate={m.date} rankedIds={m.rankedOccurrenceIds} busy={busy} />
            {occurrence && <div className="rounded-md bg-muted p-3 text-sm"><p>Pagado: {money(occurrence.paidCents)} · Previsto: {money(occurrence.expectedCents)}</p><p>Con este cargo: {money(occurrence.paidCents + (replacing?.targetId ? 0 : m.amountCents))}</p>{occurrence.closure !== "OPEN" && <p>El gasto seguirá cerrado; los cargos adicionales quedarán como exceso.</p>}</div>}
            {duplicates.length > 0 && <fieldset className="space-y-2 rounded-md border p-3"><legend className="px-1 font-medium">¿Este cargo corresponde a un pago registrado?</legend>
              {duplicates.map(p => <label key={p.id} className="flex items-start gap-2 text-sm"><input type="radio" name={`duplicate-${m.id}`} checked={duplicateChoice === p.id} disabled={busy} onChange={() => {setDuplicateChoice(p.id);if(p.targetId){setOccurrenceId(data.occurrences.find(o => o.targetId === p.targetId && o.cycleReference === p.cycleReference)?.id ?? "");}}} /><span>{p.name} · {p.date} · {money(p.amountCents)}</span></label>)}
              <label className="flex items-start gap-2 text-sm"><input type="radio" name={`duplicate-${m.id}`} checked={duplicateChoice === "new"} disabled={busy} onChange={() => setDuplicateChoice("new")} /><span>Es otro pago; sumar ambos importes</span></label>
            </fieldset>}
            <Button disabled={busy || (!occurrence && !replacing) || (duplicates.length > 0 && !duplicateChoice)} onClick={() => {
              if (occurrence) withClassification(() => reconcileMovementAction({movementId:m.id,targetId:occurrence.targetId,cycleReference:occurrence.cycleReference,replacesMovementId:replacing?.id,confirmSeparatePayment:duplicateChoice === "new"}),done);
              else if(replacing) withClassification(() => replaceManualMovementAction({movementId:m.id,replacesMovementId:replacing.id}),done);
            }}>{replacing ? "Vincular sin duplicar" : "Confirmar conciliación"}</Button>
            {m.source === "BANK" && legacy.length > 0 && <details className="space-y-3"><summary className="cursor-pointer text-sm">Vincular un pago anterior</summary>
              <select aria-label="Pago existente" className={fieldClass} value={history} onChange={e => setHistory(e.target.value)}><option value="">Seleccionar pago</option>{legacy.map(p => <option key={p.id} value={p.id}>{data.occurrences.find(o => o.targetId === p.targetId)?.name ?? "Pago"} · {p.date} · {money(p.amountCents)} · período {p.cycleReference}</option>)}</select>
              <Button variant="outline" disabled={busy || !history} onClick={() => {const p=legacy.find(p=>p.id===history);if(p)withClassification(()=>linkExistingPaymentAction({movementId:m.id,historyId:p.id,targetId:p.targetId}),done);}}>Vincular sin duplicar</Button>
            </details>}
          </section>
        )}
      {editable &&
        m.source === "BANK" &&
        !m.reconciliation &&
        !m.transferId &&
        !m.replacesManualPayment && (
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
        !m.transferId &&
        !m.replacesManualPayment && (
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
      {editable && m.source !== "BANK" && !m.transferId &&
        !m.replacesManualPayment && (
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
