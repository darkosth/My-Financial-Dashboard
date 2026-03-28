"use client";

import * as React from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme-constants";

const ThemeContext = React.createContext(null);

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(theme) {
  if (theme === "system") return getSystemTheme();
  return theme;
}

export function ThemeProvider({ children, defaultTheme = "system" }) {
  const [theme, setThemeState] = React.useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState("light");

  const apply = React.useCallback((t) => {
    const resolved = resolveTheme(t);
    document.documentElement.classList.toggle("dark", resolved === "dark");
    setResolvedTheme(resolved);
  }, []);

  React.useLayoutEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const next =
      stored === "light" || stored === "dark" || stored === "system" ? stored : defaultTheme;
    setThemeState(next);
    apply(next);
  }, [defaultTheme, apply]);

  const skipPersist = React.useRef(true);
  React.useEffect(() => {
    if (skipPersist.current) {
      skipPersist.current = false;
      return;
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    apply(theme);
  }, [theme, apply]);

  React.useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, apply]);

  const setTheme = React.useCallback((t) => setThemeState(t), []);

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
