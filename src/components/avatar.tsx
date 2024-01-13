import cn from "@/utils/cn";
import Image from "next/image";


interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    width?: number
    height?: number
}

const Avatar: React.FC<AvatarProps> = ({ className, width = 200, height = 200, ...props }) => {
    return (
        <Image
            src="/avatar.png"
            alt="mathieu avatar"
            width={width}
            height={height}
            {...props}
            className={cn("rounded-full", className)}
        />
    );
};
export default Avatar;