const { test, expect } = require("@playwright/test");

const TEMPLATE_AMOUNT = 125;

const startOfDay = (value) => {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
};

const addDays = (value, amount) => {
  const date = startOfDay(value);
  date.setDate(date.getDate() + amount);
  return date;
};

const getThursdayWeekStart = (value) => {
  const date = startOfDay(value);
  const diff = (date.getDay() - 4 + 7) % 7;
  return addDays(date, -diff);
};

test("biweekly carryover can collide with the next cycle and both can be paid", async ({ page }) => {
  const templateName = `E2E Biweekly Clash ${Date.now()}`;
  const weekOneStart = getThursdayWeekStart(new Date());
  const firstOccurrence = addDays(weekOneStart, 6);
  const lastPaidAt = addDays(firstOccurrence, -14).toISOString().substring(0, 10);

  await page.goto("/templates?e2e=1");
  await page.getByRole("button", { name: /Nuevo Gasto Fijo/i }).click();

  await page.locator("#name").fill(templateName);
  await page.locator("#amount").fill(String(TEMPLATE_AMOUNT));
  await page.locator("#category").selectOption("FOOD");
  await page.locator("#frequency").selectOption("BIWEEKLY");
  await page.locator("#lastPaidAt").fill(lastPaidAt);
  await page.getByRole("button", { name: /Guardar Gasto Fijo/i }).click();

  await page.goto("/dashboard?e2e=1");

  const waterfallCard = page.locator("section").filter({ has: page.getByText("Liquidez Proyectada a 4 Semanas") }).first();
  await waterfallCard.getByRole("button", { name: /Liquidez Proyectada a 4 Semanas/i }).click();

  const waterfallExpenseButtons = () => waterfallCard.locator("ul button");
  const pendingButton = () => waterfallExpenseButtons().filter({ hasText: `${templateName} (pendiente)` });
  const anyTemplateButton = () => waterfallExpenseButtons().filter({ hasText: templateName });
  const activeTemplateButtons = () => waterfallCard.locator("ul button:not([disabled])").filter({ hasText: templateName });

  expect(await activeTemplateButtons().count()).toBeGreaterThan(0);

  await activeTemplateButtons().first().click();
  await page.getByRole("button", { name: /Mover a la siguiente semana/i }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();

  await expect(pendingButton()).toHaveCount(1);

  await pendingButton().click();
  await page.getByRole("button", { name: /Mover a la siguiente semana/i }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();

  await expect(pendingButton()).toHaveCount(1);
  expect(await anyTemplateButton().count()).toBeGreaterThan(1);

  await pendingButton().click();
  await page.getByRole("button", { name: /PAGO COMPLETO/i }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();

  await expect(pendingButton()).toHaveCount(0);
  expect(await activeTemplateButtons().count()).toBeGreaterThan(0);

  await activeTemplateButtons().first().click();
  await page.getByRole("button", { name: /PAGO COMPLETO/i }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();

  await expect(activeTemplateButtons()).toHaveCount(0);
});
