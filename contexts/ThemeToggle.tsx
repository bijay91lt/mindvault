"use client";

import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun
        className="h-4 w-4 text-muted-foreground"
        onClick={() => toggleTheme()}
      />
      {/* <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      /> */}
      <Moon
        className="h=4 w-4 text-muted-foreground"
        onClick={() => toggleTheme()}
      />
    </div>
  );
}
