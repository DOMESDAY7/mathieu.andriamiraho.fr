"use client";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import ID from "@/utils/ID";
import cn from "@/utils/cn";

export const AnimatedTooltip = ({
    children,
    content,
    className,
}: {
    children: React.ReactNode;
    content: string | React.ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig,
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig,
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };

    return (
        <>
            <div
                className={cn("group relative", className)}
                key={ID()}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <AnimatePresence mode="wait">
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                            className="absolute -left-1/2 top-0 z-50 flex  flex-col items-center justify-center rounded-md bg-white px-4 py-2 text-xs shadow-xl"
                        >
                            <div className="relative z-30 text-base font-bold text-black">
                                {content}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div onMouseMove={handleMouseMove}>{children}</div>
            </div>
        </>
    );
};
