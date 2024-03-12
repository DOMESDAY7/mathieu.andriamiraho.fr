"use client";
import { useEffect, useState } from "react";
import emojiToSvg from "@/utils/emojiToSvg";

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
        let emojiEnd = -1;

        // Pre-render the first emoji if present
        if (currentWord.startsWith(":")) {
            for (let j = 1; j < currentWord.length; j++) {
                if (currentWord[j] === ":") {
                    emojiEnd = j;
                    break;
                }
            }
            if (emojiEnd !== -1) {
                const emoji = currentWord.slice(0, emojiEnd + 1);
                const emojiImg = emojiToSvg(emoji);
                setWord(
                    (word) =>
                        word +
                        `<Image src="${emojiImg}" alt="emoji" width={20} height={20}/>`,
                );
                i = emojiEnd + 1; // Skip to the end of the emoji
            }
        }

        const interval = setInterval(() => {
            if (i < currentWord.length) {
                const nextLetter = currentWord[i];

                if (nextLetter === ":") {
                    // Find the next ":" and ensure it's part of an emoji
                    for (let j = i + 1; j < currentWord.length; j++) {
                        if (
                            currentWord[j] === " " ||
                            currentWord[j] === "\n" ||
                            currentWord[j] === "\t"
                        ) {
                            break;
                        }
                        if (currentWord[j] === ":") {
                            emojiEnd = j;
                            break;
                        }
                    }
                    if (emojiEnd !== -1) {
                        const emoji = currentWord.slice(i, emojiEnd + 1);
                        const emojiImg = emojiToSvg(emoji);
                        setWord(
                            (word) =>
                                word +
                                `<Image src="${emojiImg}" alt="emoji" width={20} height={20}/>`,
                        );
                        i = emojiEnd + 1; // Skip to the end of the emoji
                    }
                }

                if (emojiEnd === -1) {
                    setWord((word) => word + nextLetter);
                    i++;
                }
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
            <div dangerouslySetInnerHTML={{ __html: word }} />
            <div className="animate-blink h-full w-2 bg-white" />
        </div>
    );
}
