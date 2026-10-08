import { compatibleManualPayments, replaceInTx, replacementState, restoreReplacement } from './replacement';
import { resolveFinancePeriod } from "./periods";
import { updateLearningReview } from './learningReview';
import {
  getLearningPaymentCatalog,
} from "@/lib/learningMatcher";
import { getCalendarDateKey } from "@/lib/calendarDate";
import { ValidationError } from "@/lib/actions/validation";
import {
  atomic,
  audit,
  dateOnly,
  movementFor,
  nextClosure,
  thursday,
  dayRange,
  type Tx,
} from "./core";
export type ReconcileInput = {
  movementId: string;
  targetId: string;
  cycleReference: string;
  replacesMovementId?: string;
  confirmSeparatePayment?: boolean;
};
async function target(tx: Tx, workspaceId: string, id: string, cycle: string) {
  const cycleReference = dateOnly(cycle);
  if (id.startsWith("pending:")) {
    const row = await tx.pendingExpense.findFirst({
      where: { id: id.slice(8), workspaceId },
    });
    if (!row || getCalendarDateKey(row.createdAt) !== cycle)
      throw new ValidationError("Período de gasto puntual inválido.");
    return {
      name: row.description ?? "Gasto puntual",
      amount: row.amountCents,
      kind: "PENDING",
      entityId: row.id,
      weekStart: thursday(cycleReference),
    };
  }
  const templates = id.startsWith("credit-card:")
    ? []
    : await tx.template.findMany({ where: { id, workspaceId } });
  const cards = id.startsWith("credit-card:")
    ? await tx.creditCard.findMany({ where: { id: id.slice(12), workspaceId } })
    : [];
  const item = getLearningPaymentCatalog({ templates, creditCards: cards })[0];
  if (!item) throw new ValidationError("Gasto no encontrado.");
  const candidate = resolveFinancePeriod(item, cycle);
  if (!candidate || candidate.cycleReference !== cycle)
    throw new ValidationError(
      "El período no corresponde a una ocurrencia de este gasto.",
    );
  return {
    name: item.name,
    amount: item.amountCents,
    kind: item.kind === "credit-card" ? "CARD" : "TEMPLATE",
    entityId: item.kind === "credit-card" ? id.slice(12) : id,
    weekStart: thursday(dateOnly(candidate.occurrenceDate)),
  };
}
async function ensureOccurrence(
  tx: Tx,
  workspaceId: string,
  targetId: string,
  cycle: string,
) {
  const item = await target(tx, workspaceId, targetId, cycle);
  const cycleReference = dateOnly(cycle);
  const occurrence = await tx.financeOccurrence.upsert({
    where: {
      workspaceId_targetId_cycleReference: {
        workspaceId,
        targetId,
        cycleReference,
      },
    },
    create: {
      workspaceId,
      targetId,
      name: item.name,
      cycleReference,
      weekStart: item.weekStart,
      expectedCents: item.amount,
      currency: "USD",
    },
    update: {},
  });
  return { item, occurrence, cycleReference };
}
export async function paidFor(
  tx: Tx,
  workspaceId: string,
  occurrence: {
    targetId: string;
    cycleReference: Date;
    id: string;
  },
) {
  if (occurrence.targetId.startsWith("pending:")) {
    const sum = await tx.financeReconciliation.aggregate({
      where: { workspaceId, occurrenceId: occurrence.id, reversedAt: null },
      _sum: { amountCents: true },
    });
    return sum._sum.amountCents ?? 0;
  }
  const result = occurrence.targetId.startsWith("credit-card:")
    ? await tx.creditCardPaymentHistory.aggregate({
        where: {
          workspaceId,
          creditCardId: occurrence.targetId.slice(12),
          cycleReference: dayRange(occurrence.cycleReference),
        },
        _sum: { amountPaidCents: true },
      })
    : await tx.history.aggregate({
        where: {
          workspaceId,
          templateId: occurrence.targetId,
          cycleReference: dayRange(occurrence.cycleReference),
        },
        _sum: { amountPaidCents: true },
      });
  return result._sum.amountPaidCents ?? 0;
}
export async function reconcileInTx(
  tx: Tx,
  workspaceId: string,
  userId: string,
  input: ReconcileInput,
  legacyHistoryId?: string,
) {
  const movement = await movementFor(tx, workspaceId, input.movementId);
  if (
    movement.status !== "POSTED" ||
    movement.needsReview ||
    movement.amountCents <= 0 ||
    !["EXPENSE", "CARD_PAYMENT"].includes(movement.kind)
  )
    throw new ValidationError(
      "Solo se pueden conciliar gastos contabilizados sin revisiones pendientes.",
    );
  const active = await tx.financeReconciliation.findUnique({
    where: { activeMovementId: movement.id },
    include: { occurrence: true },
  });
  if (active) {
    if (
      active.occurrence.targetId === input.targetId &&
      active.occurrence.cycleReference.toISOString().slice(0, 10) ===
        input.cycleReference
    )
      return active;
    throw new ValidationError(
      "Deshaz la conciliación anterior antes de cambiarla.",
    );
  }
  const compatible = await compatibleManualPayments(tx, workspaceId, movement);
  if (!input.replacesMovementId && !legacyHistoryId && compatible.length && !input.confirmSeparatePayment)
    throw new ValidationError('Existe un pago manual compatible. Selecciona el pago que sustituye o confirma que es otro pago.');
  let replacedPrevious = null;
  if (input.replacesMovementId) {
    replacedPrevious = await tx.financeReconciliation.findUnique({ where: { activeMovementId: input.replacesMovementId }, include: { occurrence: true } });
    if (replacedPrevious && (replacedPrevious.occurrence.targetId !== input.targetId || replacedPrevious.occurrence.cycleReference.toISOString().slice(0, 10) !== input.cycleReference))
      throw new ValidationError('Selecciona el gasto y período del pago manual que sustituyes.');
    await replaceInTx(tx, workspaceId, userId, movement, input.replacesMovementId);
    if (replacedPrevious?.historyId) legacyHistoryId = replacedPrevious.historyId;
  }
  const { item, occurrence, cycleReference } = await ensureOccurrence(
    tx,
    workspaceId,
    input.targetId,
    input.cycleReference,
  );
  if (item.kind === "CARD") {
    if (movement.source === "CREDIT")
      throw new ValidationError("Una compra con tarjeta no puede registrarse como pago a la tarjeta.");
    if (movement.source === "BANK" && movement.kind === "EXPENSE") {
      await tx.financialMovement.update({
        where: { id: movement.id },
        data: { kind: "CARD_PAYMENT" },
      });
    } else if (movement.kind !== "CARD_PAYMENT") {
      throw new ValidationError("Clasifica este movimiento como pago de tarjeta.");
    }
  } else if (movement.kind !== "EXPENSE") {
    throw new ValidationError("Este movimiento solo puede vincularse a una tarjeta de crédito.");
  }
  if (movement.currency !== occurrence.currency)
    throw new ValidationError("Las monedas deben coincidir.");
  let historyId = legacyHistoryId ?? "";
  let ownsHistory = !legacyHistoryId;
  if (legacyHistoryId) {
    const history =
      item.kind === "CARD"
        ? await tx.creditCardPaymentHistory.findFirst({
            where: {
              id: legacyHistoryId,
              workspaceId,
              creditCardId: item.entityId,
            },
          })
        : await tx.history.findFirst({
            where: {
              id: legacyHistoryId,
              workspaceId,
              templateId: item.entityId,
            },
          });
    if (
      !history ||
      history.amountPaidCents !== movement.amountCents ||
      history.cycleReference.toISOString().slice(0, 10) !== input.cycleReference
    )
      throw new ValidationError(
        "El pago existente debe coincidir en importe y período.",
      );
    const previous = await tx.financeReconciliation.findFirst({
      where: { workspaceId, historyId: legacyHistoryId, reversedAt: null },
      include: { movement: true },
    });
    if (previous) {
      if (
        movement.source !== "BANK" ||
        !["CASH", "CREDIT", "DEBIT"].includes(previous.movement.source) ||
        previous.movement.reversedAt ||
        previous.movement.currency !== movement.currency
      )
        throw new ValidationError("Ese pago ya está vinculado.");
      await replaceInTx(tx, workspaceId, userId, movement, previous.movementId);
      ownsHistory = previous.ownsHistory;
    }
  } else if (item.kind === "TEMPLATE") {
    historyId = (
      await tx.history.create({
        data: {
          workspaceId,
          templateId: item.entityId,
          amountPaidCents: movement.amountCents,
          cycleReference,
          datePaid: movement.date,
        },
      })
    ).id;
  } else if (item.kind === "CARD") {
    historyId = (
      await tx.creditCardPaymentHistory.create({
        data: {
          workspaceId,
          creditCardId: item.entityId,
          amountPaidCents: movement.amountCents,
          cycleReference,
          datePaid: movement.date,
        },
      })
    ).id;
  }
  if (replacedPrevious) ownsHistory = replacedPrevious.ownsHistory;
  const row = await tx.financeReconciliation.create({
    data: {
      workspaceId,
      movementId: movement.id,
      activeMovementId: movement.id,
      occurrenceId: occurrence.id,
      amountCents: movement.amountCents,
      historyId,
      historyKind: item.kind,
      ownsHistory,
      previousLastPaidAt: null,
    },
  });
  const paid = await paidFor(tx, workspaceId, occurrence);
  await tx.financeOccurrence.update({
    where: { id: occurrence.id },
    data: {
      closure: nextClosure(occurrence.closure, occurrence.expectedCents, paid),
    },
  });
  if (item.kind === "TEMPLATE") {
    await tx.paymentCarryover.updateMany({
      where: {
        workspaceId,
        templateId: item.entityId,
        originCycleReference: dayRange(cycleReference),
      },
      data: {
        remainingAmountCents: Math.max(0, occurrence.expectedCents - paid),
      },
    });
  }
  await audit(tx, workspaceId, userId, "RECONCILED", movement.id, {
    reconciliationId: row.id,
    occurrenceId: occurrence.id,
  });
  await updateLearningReview(tx, workspaceId, userId, movement, input);
  return row;
}
export async function reconcileMovement(
  workspaceId: string,
  userId: string,
  input: ReconcileInput,
) {
  return atomic(workspaceId, (tx) =>
    reconcileInTx(tx, workspaceId, userId, input),
  );
}
export async function undoInTx(
  tx: Tx,
  workspaceId: string,
  userId: string,
  movementId: string,
) {
  const movement = await movementFor(tx, workspaceId, movementId);
  const row = await tx.financeReconciliation.findFirst({
    where: { workspaceId, activeMovementId: movementId },
    include: { occurrence: true },
  });
  const replacement = replacementState(movement);
  if (!row) {
    await restoreReplacement(tx, workspaceId, userId, movement);
    await updateLearningReview(tx, workspaceId, userId, movement, null);
    return;
  }
  if (row.ownsHistory && row.historyId && !replacement?.reconciliationId) {
    if (row.historyKind === "CARD")
      await tx.creditCardPaymentHistory.deleteMany({
        where: { id: row.historyId, workspaceId },
      });
    else
      await tx.history.deleteMany({
        where: { id: row.historyId, workspaceId },
      });
  }
  await tx.financeReconciliation.update({
    where: { id: row.id },
    data: { activeMovementId: null, reversedAt: new Date() },
  });
  await restoreReplacement(tx, workspaceId, userId, movement);
  await updateLearningReview(tx, workspaceId, userId, movement, null);
  const paid = await paidFor(tx, workspaceId, row.occurrence);
  await tx.financeOccurrence.update({
    where: { id: row.occurrenceId },
    data: {
      closure: nextClosure(
        row.occurrence.closure,
        row.occurrence.expectedCents,
        paid,
        true,
      ),
    },
  });
  if (row.historyKind === "TEMPLATE") {
    await tx.paymentCarryover.updateMany({
      where: {
        workspaceId,
        templateId: row.occurrence.targetId,
        originCycleReference: dayRange(row.occurrence.cycleReference),
      },
      data: {
        remainingAmountCents: Math.max(0, row.occurrence.expectedCents - paid),
      },
    });
  }

  await audit(tx, workspaceId, userId, "RECONCILIATION_UNDONE", movementId, {
    reconciliationId: row.id,
  });
}
export async function undoReconciliation(
  workspaceId: string,
  userId: string,
  movementId: string,
) {
  return atomic(workspaceId, (tx) =>
    undoInTx(tx, workspaceId, userId, movementId),
  );
}
export async function setClosure(
  workspaceId: string,
  userId: string,
  input: {
    occurrenceId: string;
    targetId?: string;
    cycleReference?: string;
    closed: boolean;
  },
) {
  return atomic(workspaceId, async (tx) => {
    let row = await tx.financeOccurrence.findFirst({
      where: { id: input.occurrenceId, workspaceId },
    });
    if (!row && input.occurrenceId.startsWith("new:")) {
      const match = /^new:(.+):(\d{4}-\d{2}-\d{2})$/.exec(input.occurrenceId);
      if (match)
        row = (await ensureOccurrence(tx, workspaceId, match[1], match[2]))
          .occurrence;
    }
    if (!row) throw new ValidationError("Gasto no encontrado.");
    await tx.financeOccurrence.update({
      where: { id: row.id },
      data: { closure: input.closed ? "MANUAL" : "OPEN" },
    });
    await audit(tx, workspaceId, userId, "CLOSURE_CHANGED", null, {
      occurrenceId: row.id,
      closed: input.closed,
    });
  });
}
export async function linkExistingPayment(
  workspaceId: string,
  userId: string,
  input: {
    movementId: string;
    historyId: string;
    targetId: string;
  },
) {
  return atomic(workspaceId, async (tx) => {
    const history = input.targetId.startsWith("credit-card:")
      ? await tx.creditCardPaymentHistory.findFirst({
          where: {
            id: input.historyId,
            workspaceId,
            creditCardId: input.targetId.slice(12),
          },
        })
      : await tx.history.findFirst({
          where: {
            id: input.historyId,
            workspaceId,
            templateId: input.targetId,
          },
        });
    if (!history) throw new ValidationError("Pago no encontrado.");
    return reconcileInTx(
      tx,
      workspaceId,
      userId,
      {
        ...input,
        cycleReference: history.cycleReference.toISOString().slice(0, 10),
      },
      history.id,
    );
  });
}

export async function replaceManualMovement(workspaceId: string, userId: string, input: { movementId: string; replacesMovementId: string }) {
  return atomic(workspaceId, async tx => {
    const bank = await movementFor(tx, workspaceId, input.movementId);
    if (await tx.financeReconciliation.findUnique({ where: { activeMovementId: bank.id } })) throw new ValidationError('Deshaz la conciliación bancaria antes de sustituir un pago.');
    const previous = await tx.financeReconciliation.findUnique({ where: { activeMovementId: input.replacesMovementId }, include: { occurrence: true } });
    if (previous) return reconcileInTx(tx, workspaceId, userId, { ...input, targetId: previous.occurrence.targetId, cycleReference: previous.occurrence.cycleReference.toISOString().slice(0, 10) });
    await replaceInTx(tx, workspaceId, userId, bank, input.replacesMovementId);
    return { id: bank.id };
  });
}
