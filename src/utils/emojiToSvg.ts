export default function emojiToSvg(emoji: string): string {
    // Remove the colons from the emoji
    emoji = emoji.replace(/:/g, "");
    const emojiName = (emoji + ".svg").trim();
    const emojiImg = `/emoji/${emojiName}`;
    return emojiImg;
}
