export default function ContainerFullScreen({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={"h-svh " + className}>
            {children}
        </section>
    )
}