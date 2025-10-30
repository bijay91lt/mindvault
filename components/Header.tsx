"use client";
import { ThemeToggle } from "@/contexts/ThemeToggle";

function Header() {
  return (
    <div
      className="flex justify-end w-full px-10 py-10"
      onClick={(e) => e.stopPropagation()}
    >
      <ThemeToggle />
    </div>
  );
}

export default Header;
