"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
    >
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <span className="hidden dark:inline">Light mode</span>
      <span className="dark:hidden">Dark mode</span>
    </button>
  );
}
