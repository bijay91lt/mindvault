import { NotesProvider } from "@/contexts/NotesContext";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";

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
          <NotesProvider>
            <Header />
            {children}
          </NotesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
