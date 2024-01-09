export default function Input({ type, placeholder }: { placeholder: string, type: string }) {
    return (
        <input type={type} placeholder={placeholder} className="threeD-input" />
    )
}