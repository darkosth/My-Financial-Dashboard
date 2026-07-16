import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (!specifier.startsWith("@/")) {
      return nextResolve(specifier, context);
    }

    const basePath = resolve(projectRoot, "src", specifier.slice(2));
    const candidate = [basePath, `${basePath}.ts`, `${basePath}.tsx`, resolve(basePath, "index.ts")]
      .find(existsSync);

    if (!candidate) {
      return nextResolve(specifier, context);
    }

    return nextResolve(pathToFileURL(candidate).href, context);
  },
});
