import { format } from 'date-fns';

export default function Date({ children }: { children: Date }) {
    const formattedDate = format(children, 'MMM yyyy')
    return formattedDate
}