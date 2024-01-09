export default function Textarea({ className, placeholder }: { className?: string, placeholder: string }) {
    return (
        <textarea className={"threeD-input " + className} placeholder={placeholder} />
    )
}