import IMG from "@/components/ui/IMG";
import DateFormatted from "./ui/date-formatted";
import cn from "classnames";

type DisplayCardProps = {
    image?: string | null;
    title: string;
    date: {
        from: string;
        to: string;
    };
    location?: string;
    description: string;
};

const DisplayCard = ({ image, title, date, location, description }: DisplayCardProps) => {
    return (
        <div className="w-full m-auto mb-36 md:mb-0">
            <div className={cn(
                "md:flex md:flex-row-reverse md:gap-x-5 md:items-start",
                "flex-col items-center justify-center gap-y-16")}
            >
                <div className="mb-5 md:mb-0">
                    <IMG
                        src={image ?? null}
                        alt={title}
                        className="w-1/2 md:1/3 m-auto"
                        width={75}
                        height={75}
                    />
                </div>
                <div className="md:w-[50svw] md:flex items-center justify-center">
                    <div className="md:w-3/4 w-5/6 m-auto">
                        <h2 className="font-extrabold text-3xl">{title}</h2>
                        <p>{description}</p>
                        <p className="text-sm"><DateFormatted>{date.from}</DateFormatted> - <DateFormatted>{date.to}</DateFormatted></p>
                        {location && <h3>{location}</h3>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayCard;
