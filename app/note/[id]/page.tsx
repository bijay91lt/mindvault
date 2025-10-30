"use client";

import { useState, use } from "react";
import { useNotes } from "@/contexts/NotesContext";
import { NoteEditor } from "@/components/NoteEditor";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Trash2, Edit3, ArrowLeft } from "lucide-react";
// import type { Note } from "@/types/note";

interface NotePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NotePage({ params }: NotePageProps) {
  const { id } = use(params);
  const { getNoteById, updateNote, deleteNote } = useNotes();
  const router = useRouter();

  const note = getNoteById(id);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this note?")) {
      deleteNote(id);
      router.push("/");
    }
  };

  const handleSave = (title: string, content: string) => {
    updateNote(id, { title, content });
    setIsEditing(false);
  };

  if (!note) {
    return (
      <div className="container mx-auto py-2 px-4 text-center ">
        <Button onClick={() => router.push("/")} className="mt-4">
          <ArrowLeft /> Back to Notes
        </Button>
        <p className="text-muted-foreground">Note not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4 max-w-2xl">
      {isEditing ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Edit Notes</h1>
          <NoteEditor note={note} onSave={handleSave} />
        </>
      ) : (
        <>
            <div className="flex justify-start w-full px-0 py-0 ">
              <Button
            onClick={() => router.back()}
            variant="ghost"
            className="mt-6"
          >
            <ArrowLeft /> Back to Notes
          </Button>
            </div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-2">
            
            <h1 className="text-2xl font-bold">{note.title}</h1>
            
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button size="sm" variant="destructive" onClick={handleDelete}>
                {" "}
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </div>
          </div>
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="whitespace-pre-line text-muted-foreground">
              {note.content}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
