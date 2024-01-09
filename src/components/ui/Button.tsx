export default function Button({ children }: { children: React.ReactNode }) {
    return(
        <button className="threeD-btn">
            {children}
        </button>
    )
}