import type { Experience as ExperienceType } from "@/types/Experience";
import ID from "@/utils/ID";
import DisplayCard from "../display-card";

export default function MyExperiences({ experiences }: { experiences: ExperienceType[] }) {

    return (
        <>
            <h3 className="sticky top-0 text-3xl bg-white text-center font-extrabold z-40 py-5 mb-28 md:mb-0">My experiences</h3>
            <div className="md:h-svh md:flex md:flex-col md:items-center md:justify-center">
                <div className="md:flex md:flex-col md:gap-y-5">
                    {experiences.map((experience) => (
                        <DisplayCard
                            image={experience.images[0]}
                            title={experience.title}
                            date={experience.date}
                            description={experience.description}
                            location={experience.location}
                            key={ID()} />))
                    }
                </div>
            </div>
        </>
    )
}