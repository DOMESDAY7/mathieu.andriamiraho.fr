import { format, parseISO } from 'date-fns';

export default function Date({ children }: { children: string }) {
    if(!children) return;
    const formattedDate = format(parseISO(children), 'MMM yyyy')
    return formattedDate
}