export default function cn(...args: (string | undefined)[]): string {
    return args.filter(Boolean).join(" ");
}
