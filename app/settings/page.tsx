'use client';
import { ThemeToggle } from "@/contexts/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-medium">Theme</h2>
            <p className="text-sm text-muted-foreground">
              Switch between light and dark mode
            </p>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
