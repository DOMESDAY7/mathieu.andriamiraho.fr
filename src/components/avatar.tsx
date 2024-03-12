import cn from "@/utils/cn";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    width?: number;
    height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
    className,
    width = 200,
    height = 200,
    ...props
}) => {
    return (
        <AnimatedTooltip
            content={
                <Image
                    src="/emoji/waving-hand.svg"
                    width={30}
                    height={30}
                    alt="hello"
                />
            }
            className="md:justify-self-end"
        >
            <Image
                src="/avatar.png"
                alt="mathieu avatar"
                width={width}
                height={height}
                {...props}
                className={cn("rounded-full border bg-gray-200", className)}
            />
        </AnimatedTooltip>
    );
};
export default Avatar;
