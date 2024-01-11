export default function Label({ children, htmlFor }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="font-bold text-lg"> {children}</label >
    )
}