import Button from "@/components/ui/Button";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import MyExperiences from "@/components/experiences/MyExperiences";
import MyEducationalBg from "@/components/educational-bg/MyEducationalBg";
import Link from "next/link";
import { getEducationalBg, getExperiences } from "@/ETL/etl";
import Footer from "@/components/footer";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const experiences = await getExperiences();
    const educations = await getEducationalBg();

    return (
        <main className="flex flex-col">
            <ContainerFullScreen className="relative grid snap-center place-content-center place-items-center gap-y-5 md:grid-cols-2 md:gap-0">
                <Avatar className="md:row-span-2 md:self-center md:justify-self-end" />
                <div className="justify-self-start text-center text-3xl md:text-left">
                    <Image
                        src={"/emoji/waving-hand.svg"}
                        alt="waving hand"
                        width={20}
                        height={20}
                    />
                    Hi, my name is
                    <br />
                    <span className="font-bold">Mathieu Andriamiraho</span>
                </div>
                <div className="flex items-center justify-center md:col-start-2 md:row-start-2 md:gap-5 md:justify-self-start">
                    <Button className="md:justify-self-start" asChild>
                        <Link href="#whoIAm" className="flex">
                            Discover me
                        </Link>
                    </Button>

                    <Button
                        className="absolute right-5 top-5 flex gap-x-2 md:relative md:right-0 md:top-0"
                        asChild
                    >
                        <Link href="/cv.pdf" target="_blank">
                            <p className="hidden md:block">
                                Download my resume
                            </p>
                        </Link>
                    </Button>
                </div>
            </ContainerFullScreen>

            <div>
                <MyExperiences experiences={experiences ?? []} />
            </div>

            <div>
                <MyEducationalBg educations={educations ?? []} />
            </div>

            <ContainerFullScreen>
                <Footer />
            </ContainerFullScreen>
        </main>
    );
}
