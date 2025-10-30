"use client";

import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ChangeEvent, useState, useEffect} from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Search notes...'}: SearchBarProps){
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, onSearch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            className="pl-10"
            />
        </div>
    )
}