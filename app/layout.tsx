import { NotesProvider } from '@/contexts/NotesContext';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MindVault',
  description: 'Your personal note-taking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}