import type { Experience } from "@/types/Experience";
import IMG from "../ui/IMG";
import Date from "../ui/Date";
import ID from "@/utils/ID";

const experience = ({ id, title, company, location, date, description, images, imageFallback, mobileImage }: Experience) => {
    return (
        <div key={id} className="w-full m-auto h-svh">
            <div className="sticky top-1/4 md:flex items-center justify-center">
                <div className="hidden md:block">
                    {images?.map((image) => (
                        <IMG
                            src={image}
                            fallback={imageFallback}
                            alt={title}
                            className="w-1/2 md:1/3 m-auto"
                            width={75}
                            height={75}
                            key={ID()}
                        />
                    ))}
                </div>
                <div className="md:hidden block">
                    <IMG
                        src={mobileImage}
                        fallback={imageFallback}
                        alt={title}
                        className="w-1/2 md:1/3 m-auto"
                        width={75}
                        height={75}
                    />
                </div>
                <div>
                    <h2 className="font-extrabold text-3xl">{company}</h2>
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p>{description}</p>
                    <p className="text-sm"><Date>{date.from}</Date> - <Date>{date.to}</Date></p>
                    <h3>{location}</h3>
                </div>

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