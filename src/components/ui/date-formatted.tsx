import { format, parseISO } from "date-fns";

export default function DateFormatted({ children }: { children: string }) {
    if (!children) return;
    const formattedDate = format(parseISO(children), "MMM yyyy");
    return formattedDate;
}
