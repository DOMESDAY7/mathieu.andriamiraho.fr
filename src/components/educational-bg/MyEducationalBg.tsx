import type { Education as EducationType } from "@/types/Education"
import ID from "@/utils/ID"
import DisplayCard from "../display-card"


export default function MyEducationalBg({ educations }: { educations: EducationType[] }) {
    return (
        <>
            <h3 className="sticky top-0 text-3xl text-center font-extrabold bg-white z-40 py-5 mb-28 md:mb-0 w-full">
                My educational<br /> background
            </h3>
            <div className="h-svh flex flex-col items-center justify-center">

                <div className="md:flex md:flex-col md:gap-y-5">
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
                </div>
            </div>
        </>
    )
}
