'use client';

import { useState } from "react";
import { useNotes } from "@/contexts/NotesContext";
import { NoteEditor } from "@/components/NoteEditor";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Trash2, Edit3 } from 'lucide-react';
// import type { Note } from "@/types/note";

interface NotePageProps {
  params: {
    id: string;
  };
}

export default function NotePage({ params}: NotePageProps){
  const { id } = params;
  const { getNoteById, updateNote, deleteNote } = useNotes();
  const router = useRouter();

  const note = getNoteById(id);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if(confirm('Are you sure you want to delete this note?')){
      deleteNote(id);
      router.push('/');
    }
  };

  const handleSave = (title: string, content: string) => {
    updateNote(id, { title, content });
    setIsEditing(false);
  };

  if(!note){
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-muted-foreground">Note not found</p>
        <Button onClick={() => router.push('/')} className="mt-4">
          Back to Notes
        </Button>
      </div>
    );
  }

  return(
    <div className="container mx-auto py-6 px-4 max-w-2xl">
      {isEditing? (
        <>
        <h1 className="text-2xl font-bold mb-6">Edit Notes</h1>
        <NoteEditor
        note={note}
        onSave={handleSave}
        />
        </>
      ) : (
        <>
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{note.title}</h1>
          <div className="flex gap-2">
            <Button size="sm"
            variant="outline"
            onClick={() => setIsEditing(true)}
            >
              <Edit3 className="h-4 w-4 mr-1" />
              Edit

            </Button>
            <Button
            size="sm"
            variant="destructive"
            onClick={handleDelete}
            > <Trash2 className="h-4 w-4 mr-1"/>
            Delete
            </Button>

          </div>

        </div>
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="whitespace-pre-line text-muted-foreground">
            {note.content}
          </p>
        
        </div>

        <Button 
        onClick={()=> router.back()}
        variant="ghost"
        className="mt-6"
        >
          Back to Notes
        </Button>
        </>
      )}

    </div>
  )
}