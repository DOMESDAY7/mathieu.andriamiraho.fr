import type { Experience as ExperienceType } from "@/types/Experience";
import ID from "@/utils/ID";
import DisplayCard from "../display-card";

export default function MyExperiences({
    experiences,
}: {
    experiences: ExperienceType[];
}) {
    return (
        <>
            <h3 className="sticky top-0 z-40 mb-28 bg-white py-5 text-center text-3xl font-extrabold md:mb-0">
                My experiences
            </h3>
            <div className="md:flex md:h-svh md:flex-col md:items-center md:justify-end md:gap-y-7">
                {experiences.map((experience) => (
                    <DisplayCard
                        image={experience.images[0]}
                        title={experience.title}
                        date={experience.date}
                        description={experience.description}
                        location={experience.location}
                        key={ID()}
                    />
                ))}
                {/* </div> */}
            </div>
        </>
    );
}
