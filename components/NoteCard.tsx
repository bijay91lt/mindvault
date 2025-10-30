'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import type { Note } from '@/types/note';


interface NoteCardProps {
    note: Note;
}

export function NoteCard({ note }: NoteCardProps){
    const preview = note.content.length > 100
        ? note.content.substring(0, 100) + '...'
        : note.content;

        return (
            <Link href={`/note/${note.id}`} className='block h-full'>
                <Card className='h-full flex felx-col hover:shadow-md transition-shadow'>
                    <CardHeader className='pb-2'>
                        <CardTitle className='line-clamp=1 text-lg'>{note.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='grow pt-0'>
                        <p className='text-muted-foreground text-sm line-clamp-3'>
                            {preview}
                        </p>
                    </CardContent>

                </Card>
            </Link>
        )
}