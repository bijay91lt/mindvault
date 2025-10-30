import type { Note } from "@/types/note";

export const saveNotes = (notes: Note[]) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem('notes', JSON.stringify(notes));
    }
};

export const loadNotes = (): Note[] => {
    if(typeof window === 'undefined') return [];
    const stored = localStorage.getItem('notes');
    return stored ? JSON.parse(stored): [];
}