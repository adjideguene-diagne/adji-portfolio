"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored === "light" ? "light" : "dark";
    // Sync once with the browser's stored preference after mount —
    // required to avoid an SSR/client mismatch, not a derived value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.documentElement.setAttribute(
      "data-theme",
      initial === "light" ? "light" : ""
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
    document.documentElement.setAttribute(
      "data-theme",
      next === "light" ? "light" : ""
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"
      }
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-muted transition-colors hover:text-ink hover:border-border-strong"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
