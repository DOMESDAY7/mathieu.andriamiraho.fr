"use server";
import fs from "fs";
import path from "path";

export default async function emojiToSvg(emoji: string): Promise<string> {
    console.log("emoji");
    // Remove the colons from the emoji
    emoji = emoji.replace(/:/g, "");
    const emojiName = emoji.slice(1, emoji.length - 1) + ".svg";
    const emojiPath = path.join(process.cwd(), "src", "emoji", emojiName);
    const svg = fs.readFileSync(emojiPath, "utf-8");
    return svg;
}
