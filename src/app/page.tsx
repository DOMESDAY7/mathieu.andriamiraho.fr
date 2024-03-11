import Button from "@/components/ui/Button";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import { DownloadCloud, MoveDown } from 'lucide-react';
import MyExperiences from "@/components/experiences/MyExperiences";
import MyEducationalBg from "@/components/educational-bg/MyEducationalBg";
import Link from "next/link";
import { getEducationalBg, getExperiences } from "@/ETL/etl";
import Footer from "@/components/footer";


export default async function HomePage() {

  const [experiences, educations] = await Promise.all([getExperiences(), getEducationalBg()]);
  
  return (
    <main className="flex flex-col">
      <ContainerFullScreen className="relative grid gap-y-5 md:gap-0 md:grid-cols-2 place-content-center place-items-center snap-center">
        <Avatar className="md:justify-self-end md:self-center md:row-span-2" />
        <h1 className="text-3xl text-center md:text-left  justify-self-start">👋🏽Hi, my name is <br /><span className="font-bold">Mathieu Andriamiraho</span></h1>
        <div className="flex md:gap-5 md:col-start-2 md:row-start-2 items-center justify-center md:justify-self-start">
          <Button className="md:justify-self-start" asChild>
            <Link href="#whoIAm" className="flex">
              <MoveDown /> Discover me
            </Link>
          </Button>

          <Button className="absolute md:relative top-5 md:top-0 right-5 md:right-0 flex gap-x-2" asChild>
            <Link href="/cv.pdf" target="_blank">
              <DownloadCloud />
              <p className="hidden md:block">Download my resume</p>
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
