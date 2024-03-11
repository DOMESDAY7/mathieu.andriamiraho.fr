"use client";
import { useEffect, useState } from "react";

type WritingPhraseProps = {
    words: string[];
    delay: number;
};

export default function WritingPhrase({ words, delay }: WritingPhraseProps) {
    const [index, setIndex] = useState(0);
    const [word, setWord] = useState<string>("");

    useEffect(() => {
        const currentWord = words[index] ?? "";
        let i = 0;
        setWord("");

        const interval = setInterval(() => {
            if (i < currentWord.length) {
                const nextLetter = currentWord[i];
                setWord((word) => word + nextLetter);
                i++;
            } else {
                clearInterval(interval);

                setTimeout(() => {
                    setIndex((index) => (index + 1) % words.length);
                }, delay);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [index, words, delay]);

    return (
        <div className="flex">
            {word}
            <div className="animate-blink h-full w-2 bg-white" />
        </div>
    );
}
