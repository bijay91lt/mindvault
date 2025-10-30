"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Note } from "@/types/note";
import { loadNotes, saveNotes } from "@/lib/storage";

type NotesContextType = {
  notes: Note[];
  addNote: (note: Omit<Note, "id" | "createdAt">) => void;
  updateNote: (id: string, updated: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => Note | undefined;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>(loadNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (noteData: Omit<Note, "id" | "createdAt">) => {
    const newNote: Note = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...noteData,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateNote = (id: string, updated: Partial<Note>) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updated } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const getNoteById = (id: string) => {
    return notes.find((note) => note.id === id);
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, updateNote, deleteNote, getNoteById }}
    >
      {children}
    </NotesContext.Provider>
  );
}
export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNote must be used within NotesProvider");
  }
  return context;
}
