const { test, expect } = require("@playwright/test");

test("dashboard and calendar render", async ({ page }) => {
  await page.goto("/?e2e=1");

  await expect(page.getByRole("heading", { name: /Hola,|Hello,/ })).toBeVisible();
  await expect(page.getByText(/Liquidez Proyectada a 4 Semanas/)).toBeVisible();
  await expect(page.getByText(/Cuentas/)).toBeVisible();

  await page.goto("/calendar?e2e=1");

  await expect(page.getByRole("heading", { name: /Calendario de liquidez|Liquidity Calendar/ })).toBeVisible();
  await expect(page.getByText("Sun", { exact: true })).toBeVisible();
  await expect(page.getByText("Sat", { exact: true })).toBeVisible();
});
