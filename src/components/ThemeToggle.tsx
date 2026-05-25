"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emit() {
  listeners.forEach((listener) => listener());
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  emit();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    () => "light",
  );

  return (
    <div className="site-sidebar__theme" role="group" aria-label="Color theme">
      <button
        type="button"
        className={`site-sidebar__theme-btn${theme === "light" ? " is-active" : ""}`}
        onClick={() => applyTheme("light")}
        aria-pressed={theme === "light"}
      >
        白
      </button>
      <span className="site-sidebar__theme-sep" aria-hidden>
        /
      </span>
      <button
        type="button"
        className={`site-sidebar__theme-btn${theme === "dark" ? " is-active" : ""}`}
        onClick={() => applyTheme("dark")}
        aria-pressed={theme === "dark"}
      >
        黑
      </button>
    </div>
  );
}
