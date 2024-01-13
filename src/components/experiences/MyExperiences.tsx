import type{ Experience } from "@/types/Experience";
import IMG from "../ui/IMG";
import Date from "../ui/Date";

const experience = ({ id, title, company, location, date, description, image, imageFallback }: Experience) => {
    return (
        <div key={id} className="w-3/4 m-auto h-svh">
            <div className="sticky top-1/4">
                <IMG
                    src={image}
                    fallback={imageFallback}
                    alt={title}
                    className="w-1/2 md:1/3 m-auto"
                    width={75}
                    height={75}
                />
                <h2 className="font-extrabold text-3xl">{company}</h2>
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{description}</p>
                <p className="text-sm"><Date>{date.from}</Date> - <Date>{date.to}</Date></p>
                <h3>{location}</h3>
            </div>
        </div>
    )
}

export default function MyExperiences({ experiences }: { experiences: Experience[] }) {



    return (
        <div style={{ height: `${experiences.length * 100 + 25}svh` }}>
            <h3 className="sticky top-0 text-3xl bg-white text-center font-extrabold z-40 py-5">My experiences</h3>
            {experiences.map(experience)}
        </div>
    )
}