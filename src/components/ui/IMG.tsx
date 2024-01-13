"use client"
import cn from '@/utils/cn'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type PropsImage = {
    fallback?: string,
    alt: string,
    src: string | null
    className?: string
    width?: number
    height?: number
}

const IMG = ({
    fallback = "/fallback.svg",
    alt,
    src,
    className,
    width,
    height
}: PropsImage) => {
    const [error, setError] = useState<boolean | null>(false)

    useEffect(() => {
        setError(null)
    }, [src])

    if (src === null) src = fallback

    return (
        <Image
            alt={alt}
            onError={() => setError(true)}
            src={error ? fallback : src}
            className={cn(className)}
            width={width}
            height={height}
        />
    )
}

export default IMG;