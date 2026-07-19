"use client";

import { useMemo, useState } from "react";
import { RefreshCw, RotateCcw, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TransactionReviewRow from "@/components/reconciliation/TransactionReviewRow";
import {
  reviewLearningTransactionAction,
  syncLearningTransactionsAction,
  undoLearningTransactionReviewAction,
} from "@/lib/actions/learningActions";
import type { LearningQueueData } from "@/lib/learningData";

const PAGE_SIZE = 12;
const getTransactionKey = ({ plaidItemId, transactionId }: { plaidItemId: string; transactionId: string }) =>
  `${plaidItemId}:${transactionId}`;

export default function ReconciliationQueue({ data }: { data: LearningQueueData }) {
  const router = useRouter();
  const [busyIds, setBusyIds] = useState<Set<string>>(new Set());
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [selectedTargets, setSelectedTargets] = useState<Record<string, string>>({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [undoTarget, setUndoTarget] = useState<{ plaidItemId: string; transactionId: string } | null>(null);
  const unresolved = useMemo(
    () => data.transactions.filter((transaction) => !hiddenIds.has(getTransactionKey(transaction))),
    [data.transactions, hiddenIds],
  );
  const visibleTransactions = unresolved.slice(0, visibleCount);

  const getSelectedTarget = (transaction: LearningQueueData["transactions"][number]) =>
    selectedTargets[getTransactionKey(transaction)] ?? transaction.prediction.suggestion?.templateId ?? null;

  const setBusy = (transactionId: string, value: boolean) => setBusyIds((current) => {
    const next = new Set(current);
    if (value) next.add(transactionId);
    else next.delete(transactionId);
    return next;
  });

  const review = async (
    transaction: LearningQueueData["transactions"][number],
    selectedTemplateId: string | null,
  ) => {
    setError(null);
    setNotice(null);
    const transactionKey = getTransactionKey(transaction);
    setBusy(transactionKey, true);
    setHiddenIds((current) => new Set(current).add(transactionKey));
    const result = await reviewLearningTransactionAction({
      plaidItemId: transaction.plaidItemId,
      predictedTemplateId: transaction.prediction.suggestion?.templateId ?? null,
      selectedTemplateId,
      transactionId: transaction.transactionId,
    });
    setBusy(transactionKey, false);
    if (!result.success) {
      setHiddenIds((current) => {
        const next = new Set(current);
        next.delete(transactionKey);
        return next;
      });
      setError(result.error);
      return;
    }

    setUndoTarget({ plaidItemId: transaction.plaidItemId, transactionId: transaction.transactionId });
    setNotice(selectedTemplateId ? "Confirmación guardada." : "Transacción ignorada.");
    router.refresh();
  };

  const undo = async () => {
    if (!undoTarget) return;
    const target = undoTarget;
    setUndoTarget(null);
    const result = await undoLearningTransactionReviewAction(target);
    if (!result.success) {
      setNotice(null);
      setError(result.error);
      return;
    }
    setHiddenIds((current) => {
      const next = new Set(current);
      next.delete(getTransactionKey(target));
      return next;
    });
    setNotice("Revisión deshecha.");
    router.refresh();
  };

  const sync = async () => {
    setError(null);
    setNotice(null);
    setUndoTarget(null);
    setSyncing(true);
    const result = await syncLearningTransactionsAction();
    setSyncing(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    const failures = result.data?.failures.length ?? 0;
    setNotice(failures > 0 ? `Sincronización parcial · ${failures} conexión${failures === 1 ? "" : "es"} con error.` : "Transacciones actualizadas.");
    router.refresh();
  };

  return (
    <>
      <div className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <span><strong className="text-foreground">{unresolved.length}</strong> por revisar</span>
          <span><strong className="text-foreground">{data.liquidityAccountCount}</strong> cuentas de liquidez</span>
          <span>
            {data.lastSyncedAt
              ? new Intl.DateTimeFormat("es-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date(data.lastSyncedAt))
              : "Sin sincronización"}
          </span>
        </div>
        <Button type="button" variant="outline" onClick={sync} disabled={syncing || busyIds.size > 0}>
          <RefreshCw className={syncing ? "animate-spin motion-reduce:animate-none" : ""} />
          {syncing ? "Sincronizando" : "Sincronizar"}
        </Button>
      </div>

      {unresolved.length === 0 ? (
        <div className="border-y border-dashed border-border py-12 text-center text-sm text-muted-foreground">
          No quedan transacciones por revisar.
        </div>
      ) : (
        <div>
          {visibleTransactions.map((transaction) => (
            <TransactionReviewRow
              key={`${transaction.plaidItemId}:${transaction.transactionId}`}
              busy={syncing || busyIds.has(getTransactionKey(transaction))}
              onConfirm={() => review(transaction, getSelectedTarget(transaction))}
              onIgnore={() => review(transaction, null)}
              onSelect={(targetId) => setSelectedTargets((current) => ({ ...current, [getTransactionKey(transaction)]: targetId }))}
              options={data.paymentOptions}
              selectedTargetId={getSelectedTarget(transaction)}
              transaction={transaction}
            />
          ))}
        </div>
      )}

      {visibleCount < unresolved.length ? (
        <div className="border-t border-border pt-4 text-center">
          <Button type="button" variant="ghost" onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}>
            Cargar más
          </Button>
        </div>
      ) : null}

      {error ? (
        <div role="alert" className="fixed bottom-4 left-1/2 z-50 flex w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 items-center justify-between gap-3 border border-red-300 border-l-4 border-l-red-500 bg-red-50 px-4 py-3 text-sm text-red-800 shadow-lg dark:border-red-900 dark:border-l-red-500 dark:bg-red-950 dark:text-red-200">
          <span>{error}</span>
          <Button type="button" size="icon-sm" variant="ghost" onClick={() => setError(null)} aria-label="Cerrar error"><X className="size-4" /></Button>
        </div>
      ) : null}
      {notice ? (
        <div role="status" className="fixed bottom-4 left-1/2 z-50 flex w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 items-center justify-between gap-3 border border-border bg-background px-4 py-3 text-sm shadow-lg">
          <span>{notice}</span>
          <div className="flex items-center gap-1">
            {undoTarget ? <Button type="button" size="sm" variant="ghost" onClick={undo}><RotateCcw />Deshacer</Button> : null}
            <Button type="button" size="icon-sm" variant="ghost" onClick={() => { setNotice(null); setUndoTarget(null); }} aria-label="Cerrar aviso"><X className="size-4" /></Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
