import type{ Education as EducationType } from "@/types/Education"
import Date from "../ui/Date"

const EducationComponent = ({ degree, school, dates, location, description }: EducationType) => {
    return (
        <div className="w-3/4 m-auto" >
            <div className="sticky top-1/4">
                <h3 className="font-bold text-xl">{school}</h3>
                <h3>{degree}</h3>
                <p>{description}</p>
                <p className="text-sm"><Date>{dates.from}</Date> - <Date>{dates.to}</Date></p>
                <p>{location}</p>
            </div>
        </div>
    )
}

export default function MyEducationalBg({ educations }: { educations: EducationType[] }) {

    return (
        <div>
            <h3 className="sticky top-0 text-3xl text-center font-extrabold bg-white z-40 py-5">
                My educational<br /> background
            </h3>

            {educations.map((education) => (
                <EducationComponent
                    key={education.id}
                    {...education}

                />
            ))}
        </div>
    )
}
