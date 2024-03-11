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

const DisplayCard = ({
  image,
  title,
  date,
  location,
  description,
}: DisplayCardProps) => {
  return (
    <div className="m-auto mb-36 w-full md:mb-0">
      <div
        className={cn(
          "md:flex md:flex-row-reverse md:items-start md:gap-x-5",
          "flex-col items-center justify-center gap-y-16",
        )}
      >
        <div className="mb-5 md:mb-0">
          <IMG
            src={image ?? null}
            alt={title}
            className="md:1/3 m-auto w-1/2"
            width={75}
            height={75}
          />
        </div>
        <div className="items-center justify-center md:flex md:w-[50svw]">
          <div className="m-auto w-5/6 md:w-3/4">
            <h2 className="text-3xl font-extrabold">{title}</h2>
            <p>{description}</p>
            <p className="text-sm">
              <DateFormatted>{date.from}</DateFormatted> -{" "}
              <DateFormatted>{date.to}</DateFormatted>
            </p>
            {location && <h3>{location}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
