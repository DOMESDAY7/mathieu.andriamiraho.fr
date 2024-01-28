import type { Education as EducationType } from "@/types/Education"
import Date from "../ui/Date"
import ID from "@/utils/ID"
import IMG from "../ui/IMG"

const EducationComponent = ({ images, degree, school, date, location, description }: EducationType) => {
    return (
        <div className="w-full m-auto h-svh md:h-[unset]">
            <div className="sticky top-1/4 md:flex md:flex-row-reverse md:items-start items-center gap-x-5 md:justify-center">
                <div className="hidden md:block">
                    {images?.map((image: string) => (
                        <div key={ID()} className="w-[50svw]">
                            <IMG
                                src={image}
                                // fallback={imageFallback}
                                alt={school}
                                className="w-full h-full md:1/3 m-auto"
                                key={ID()}
                                width={1000}
                                height={1000}
                            />
                        </div>
                    ))}
                </div>
                <div className="md:hidden block">
                    <IMG
                        src={images[0] ?? ""}
                        // fallback={imageFallback}
                        alt={school}
                        className="w-1/2 md:1/3 m-auto"
                        width={75}
                        height={75}
                    />
                </div>
                <div className="sticky top-1/3 md:w-[50svw] md:flex items-center justify-center">
                    <div className="md:w-3/4 w-5/6 m-auto">
                        <h2 className="font-extrabold text-3xl">{school}</h2>
                        <h1 className="font-bold text-xl">{degree}</h1>
                        <p>{description}</p>
                        <p className="text-sm"><Date>{date.from}</Date> - <Date>{date.to}</Date></p>
                        <h3>{location}</h3>
                    </div>
                </div>

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

            {educations?.map((education) => (
                <EducationComponent
                    key={ID()}
                    {...education}

                />
            ))}
        </div>
    )
}
