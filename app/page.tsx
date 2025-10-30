"use client";
import { useNotes } from "@/contexts/NotesContext";
import { NoteCard } from "@/components/NoteCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function HomePage() {
  const { notes } = useNotes();
  const displayNotes = notes;

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <Link href={"/new"}>
          <Button size="sm" className="'rounded-full">
            <Plus className="h-4 w-4 mr-1" />
            New
          </Button>
        </Link>
      </div>
      {displayNotes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No notes yet. Create your first one!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
