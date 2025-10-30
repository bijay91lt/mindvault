import { NotesProvider } from "@/contexts/NotesContext";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "MindVault",
  description: "Your personal note-taking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NotesProvider>{children}</NotesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
