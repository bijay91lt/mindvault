"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNotes } from "@/contexts/NotesContext";

interface NoteEditorProps {
  note?: {
    id: string;
    title: string;
    content: string;
  };
  onSave?: (title: string, content: string) => void;
}

export function NoteEditor({ note, onSave }: NoteEditorProps) {
  const router = useRouter();
  const { addNote } = useNotes();

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title. ");
      return;
    }

    if (onSave) {
      onSave(title, content);
    } else {
      addNote({ title, content });
      router.push("/");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="spac-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="mb-2"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts..."
          rows={12}
          className="mb-2"
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Save Note</Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
