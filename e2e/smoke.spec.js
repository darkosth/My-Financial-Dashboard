const { test, expect } = require("@playwright/test");

test("landing, dashboard and calendar render", async ({ page }) => {
  await page.goto("/?e2e=1");

  await expect(page.getByRole("heading", { name: /Mira tu liquidez real/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /Continuar con Google|Entrar con Google/i })).toBeVisible();

  await page.goto("/dashboard?e2e=1");

  await expect(page.getByRole("heading", { name: /Hola,|Hello,/ })).toBeVisible();
  await expect(page.getByText(/Liquidez Proyectada a 4 Semanas/)).toBeVisible();
  await expect(page.getByText(/Workspace activo:/)).toBeVisible();
  await expect(page.getByRole("button", { name: /Open navigation menu/i })).toBeVisible();

  await page.goto("/calendar?e2e=1");

  await expect(page.getByRole("heading", { name: /Calendario de liquidez|Liquidity Calendar/ })).toBeVisible();
  await expect(page.getByText("Sun", { exact: true })).toBeVisible();
  await expect(page.getByText("Sat", { exact: true })).toBeVisible();
});
