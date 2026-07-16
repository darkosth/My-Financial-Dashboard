import assert from "node:assert/strict";
import test from "node:test";
import manifest from "../app/manifest.ts";

test("PWA manifest keeps MyFinance navigation inside the installed app", () => {
  const config = manifest();

  assert.equal(config.start_url, "/");
  assert.equal(config.scope, "/");
  assert.equal(config.display, "standalone");
  assert.ok(config.icons?.some((icon) => icon.src === "/icon.svg" && icon.sizes === "any"));
});
