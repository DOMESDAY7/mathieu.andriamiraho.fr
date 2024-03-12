import type { Education as EducationType } from "@/types/Education";
import ID from "@/utils/ID";
import DisplayCard from "../display-card";

export default function MyEducationalBg({
    educations,
}: {
    educations: EducationType[];
}) {
    return (
        <>
            <h3 className="sticky top-0 z-40 mb-28 bg-white py-5 text-center text-3xl font-extrabold md:mb-0">
                My educational
                <br /> background
            </h3>
            <div className="md:flex md:h-svh md:flex-col md:items-center md:justify-center md:gap-y-7">
                {/* <div className="md:flex md:flex-col md:gap-y-5"> */}
                {educations?.map((education) => (
                    <DisplayCard
                        key={ID()}
                        image={education.images[0] ?? ""}
                        title={education.school}
                        date={education.date}
                        description={education.description}
                        location=""
                    />
                ))}
                {/* </div> */}
            </div>
        </>
    );
}
