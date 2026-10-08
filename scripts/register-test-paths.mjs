import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

registerHooks({
  resolve(specifier, context, nextResolve) {
    const relative = specifier.startsWith(".") &&
      context.parentURL?.startsWith(pathToFileURL(resolve(projectRoot, "src")).href + "/") &&
      !/\.[cm]?[jt]sx?$/.test(specifier);
    if (!specifier.startsWith("@/") && !relative) {
      return nextResolve(specifier, context);
    }

    const basePath = relative
      ? fileURLToPath(new URL(specifier, context.parentURL))
      : resolve(projectRoot, "src", specifier.slice(2));
    const candidate = [basePath, `${basePath}.ts`, `${basePath}.tsx`, resolve(basePath, "index.ts")]
      .find(existsSync);

    if (!candidate) {
      return nextResolve(specifier, context);
    }

    return nextResolve(pathToFileURL(candidate).href, context);
  },
});
