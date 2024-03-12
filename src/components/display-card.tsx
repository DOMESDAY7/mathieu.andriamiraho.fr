import IMG from "@/components/ui/IMG";
import DateFormatted from "./ui/date-formatted";
import cn from "classnames";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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

const DisplayCard = ({
    image,
    title,
    date,
    location,
    description,
}: DisplayCardProps) => {
    return (
        <CardContainer
            containerClassName="w-full md:h-[10svh] md:mb-[5svh]"
            className="mb-36 w-11/12 rounded-xl hover:shadow-xl md:mb-0 md:h-[5svh] md:w-1/2"
        >
            <CardBody
                className={cn(
                    "md:flex md:flex-row-reverse md:items-start md:gap-x-5",
                    "flex-col items-center justify-center gap-y-16",
                    "w-full",
                )}
            >
                <CardItem
                    className="mb-5 w-full md:mb-0 md:w-[unset]"
                    translateZ={100}
                    as="div"
                >
                    <IMG
                        src={image ?? null}
                        alt={title}
                        className="md:1/3 m-auto w-1/2"
                        width={75}
                        height={75}
                    />
                </CardItem>
                <CardItem
                    className="items-center justify-center md:flex md:w-[50svw]"
                    as="div"
                    translateZ={50}
                >
                    <div className="m-auto w-5/6 md:w-3/4">
                        <h2 className="text-3xl font-extrabold">{title}</h2>
                        <p>{description}</p>
                        <p className="text-sm">
                            <DateFormatted>{date.from}</DateFormatted> -{" "}
                            <DateFormatted>{date.to}</DateFormatted>
                        </p>
                        {location && <h3>{location}</h3>}
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

export default DisplayCard;
