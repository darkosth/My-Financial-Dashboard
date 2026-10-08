import type { FinanceWorkspaceData } from "./uiTypes";
export const money = (cents: number, currency = "USD") =>
  new Intl.NumberFormat("es-US", { style: "currency", currency }).format(
    cents / 100,
  );
export const dateKey = (date: string) => date.slice(0, 10);
export function weekStart(date: string) {
  const parsed = new Date(`${dateKey(date)}T12:00:00Z`);
  parsed.setUTCDate(parsed.getUTCDate() - ((parsed.getUTCDay() + 3) % 7));
  return parsed.toISOString().slice(0, 10);
}
export function weekLabel(date: string) {
  const start = new Date(`${dateKey(date)}T12:00:00Z`);
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 6);
  const format = (value: Date) =>
    value.toLocaleDateString("es", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  return `Semana ${Math.floor((start.getUTCDate() - 1) / 7) + 1} · ${format(start)} – ${format(end)}`;
}
export function buildAnalytics(
  data: FinanceWorkspaceData,
  from: string,
  to: string,
  currency: string,
  categoryId = "",
) {
  const validRange =
    /^\d{4}-\d{2}-\d{2}$/.test(from) &&
    /^\d{4}-\d{2}-\d{2}$/.test(to) &&
    from <= to;
  if (!validRange) return { categories: [], weeks: [] };
  const inPeriod = (date: string) =>
    dateKey(date) >= from && dateKey(date) <= to;
  const weekOverlaps = (date: string) =>
    dateKey(date) >= weekStart(from) && dateKey(date) <= to;
  const actual = data.movements.filter(
    (m) =>
      m.currency === currency &&
      m.status === "POSTED" &&
      !m.reversedAt &&
      (m.kind === "EXPENSE" || m.kind === "REFUND"),
  );
  const categories = new Map<string, number>();
  for (const m of actual.filter(
    (m) => inPeriod(m.date) && (!categoryId || m.categoryId === categoryId),
  )) {
    const category = data.categories.find((c) => c.id === m.categoryId);
    const label = categoryId
      ? (category?.subcategories.find((s) => s.id === m.subcategoryId)?.name ??
        "Sin subcategoría")
      : (category?.name ?? "Sin clasificar");
    categories.set(label, (categories.get(label) ?? 0) + m.amountCents);
  }
  const weeks = new Map<
    string,
    { week: string; planned: number; paid: number; unplanned: number }
  >();
  const row = (key: string) => {
    if (!weeks.has(key))
      weeks.set(key, { week: key, planned: 0, paid: 0, unplanned: 0 });
    return weeks.get(key)!;
  };
  for (const o of data.occurrences.filter(
    (o) =>
      (o.currency ?? "USD") === currency &&
      !o.targetId.startsWith("credit-card:") &&
      weekOverlaps(o.weekStart),
  )) {
    const value = row(dateKey(o.weekStart));
    value.planned += o.expectedCents;
    value.paid += o.paidCents;
  }
  for (const m of actual.filter((m) => (!m.reconciliation || m.kind === "REFUND") && inPeriod(m.date)))
    row(weekStart(m.date)).unplanned += m.amountCents;
  return {
    categories: [...categories].sort((a, b) => b[1] - a[1]),
    weeks: [...weeks.values()].sort((a, b) => a.week.localeCompare(b.week)),
  };
}
