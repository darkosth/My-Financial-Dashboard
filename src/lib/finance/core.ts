import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ValidationError } from "@/lib/actions/validation";
export type Tx = Prisma.TransactionClient;
export function cents(value: number, signed = false) {
  if (
    !Number.isSafeInteger(value) ||
    Math.abs(value) > 1000000000 ||
    (!signed && value <= 0) ||
    value === 0
  )
    throw new ValidationError("Importe inválido.");
  return value;
}
export function dateOnly(value: string) {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    !Number.isFinite(new Date(value + "T00:00:00Z").getTime()) ||
    new Date(value + "T00:00:00Z").toISOString().slice(0, 10) !== value
  )
    throw new ValidationError("Fecha inválida.");
  return new Date(value + "T00:00:00Z");
}
export function thursday(date: Date) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() - ((result.getUTCDay() + 3) % 7));
  return result;
}
export function nextClosure(
  previous: string,
  expected: number,
  paid: number,
  undo = false,
) {
  if (previous === "MANUAL" || (!undo && previous === "AUTO")) return previous;
  return expected > 0 &&
    paid * 100 >= expected * 95 &&
    paid * 100 <= expected * 105
    ? "AUTO"
    : "OPEN";
}
export async function atomic<T>(
  workspaceId: string,
  fn: (tx: Tx) => Promise<T>,
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await prisma.$transaction(
        async (tx) => {
          await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`finance:${workspaceId}`}))`;
          return fn(tx);
        },
        {
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
          maxWait: 10000,
          timeout: 20000,
        },
      );
    } catch (error) {
      if (
        attempt < 2 &&
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2034"
      )
        continue;
      throw error;
    }
  }
}
export async function audit(
  tx: Tx,
  workspaceId: string,
  userId: string,
  action: string,
  movementId: string | null,
  payload: Prisma.InputJsonValue = {},
) {
  await tx.financeEvent.create({
    data: { workspaceId, userId, action, movementId, payload },
  });
}
export async function movementFor(tx: Tx, workspaceId: string, id: string) {
  const row = await tx.financialMovement.findFirst({
    where: { id, workspaceId },
  });
  if (!row || row.reversedAt)
    throw new ValidationError("Movimiento no disponible.");
  return row;
}
export async function categoryFor(
  tx: Tx,
  workspaceId: string,
  categoryId?: string | null,
  subcategoryId?: string | null,
) {
  if (!categoryId) {
    if (subcategoryId) throw new ValidationError("Selecciona categoría.");
    return;
  }
  const category = await tx.financeCategory.findFirst({
    where: { id: categoryId, workspaceId, archived: false },
  });
  if (!category) throw new ValidationError("Categoría no disponible.");
  if (
    subcategoryId &&
    !(await tx.financeSubcategory.findFirst({
      where: { id: subcategoryId, categoryId, archived: false },
    }))
  )
    throw new ValidationError("Subcategoría no disponible.");
}
export async function cashDelta(tx: Tx, workspaceId: string, delta: number) {
  await tx.financeCash.upsert({
    where: { workspaceId },
    create: { workspaceId },
    update: {},
  });
  const changed = await tx.financeCash.updateMany({
    where: {
      workspaceId,
      ...(delta < 0 ? { balanceCents: { gte: -delta } } : {}),
    },
    data: { balanceCents: { increment: delta } },
  });
  if (changed.count !== 1)
    throw new ValidationError(
      "Saldo de Efectivo insuficiente. Ajusta el saldo antes de guardar.",
    );
}
export function dayRange(date: Date) {
  const gte = dateOnly(date.toISOString().slice(0, 10));
  const lt = new Date(gte);
  lt.setUTCDate(lt.getUTCDate() + 1);
  return { gte, lt };
}
