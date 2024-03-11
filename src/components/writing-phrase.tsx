"use client";
import emojiToSvg from "@/server/emojiToSvg";
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
                // if (nex letter equal to a word in ":" then add a space and use the svg
                // if (nextLetter === ":") {
                //     // find the next ":"
                //     for (let j = i + 1; j < currentWord.length; j++) {
                //         if (currentWord[j] === ":") {
                //             const emoji = currentWord.slice(i - 1, j + 3);
                //             const res = async()await emojiToSvg(emoji)
                //                 console.log(res)
                //                 // add the emoji
                //                 console.log("test")
                //                 setWord((word) => word + emojiToSvg(emoji));
                //                 i = j;

                //             break;
                //         }
                //     }
                // }

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
