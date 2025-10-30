"use client";

import { useTheme } from "./ThemeContext";
import { Switch } from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className="h=4 w-4 text-muted-foreground" />
    </div>
  );
}
