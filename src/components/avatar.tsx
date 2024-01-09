import Image from "next/image";

export default function Avatar() {
    return (
        <>
            <Image src="/avatar.png" alt="mathieu avatar" width={200} height={200} className="rounded-full" />
        </>
    )
}