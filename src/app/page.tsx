
import Button from "@/components/ui/Button";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import { DownloadCloud, MoveDown } from 'lucide-react';
import WritingPhrase from "@/components/writing-phrase";
import ContactForm from "@/components/contact-form";
import type { Experience } from "@/types/Experience";
import ID from "@/utils/ID";
import MyExperiences from "@/components/experiences/MyExperiences";
import type { Education } from "@/types/Education";
import MyEducationalBg from "@/components/educational-bg/MyEducationalBg";
import Link from "next/link";
import experiences from "@/data/experiences.json"

export default function HomePage() {

  const educations: Education[] = [
    {
      id: ID(),
      school: "ESIEE - Engeneer school",
      fieldOfStudy: "IT engineering",
      dates: {
        from: new Date("2022-09-01"),
        to: new Date()
      },
      location: "Champs sur Marne, Ile de France ",
      description: "IT and applications engineer 3D Engineering and Media Technology",
      degree: "Master's degree",

    },
    {
      id: ID(),
      school: "University and Technological Institute",
      fieldOfStudy: "Multimedia and Internet Professions ",
      dates: {
        from: new Date("2022-09-01"),
        to: new Date()
      },
      location: "Champs sur Marne, Ile de France ",
      description: "DUT multimedia and internet professions",
      degree: "French DUT",
    }
  ]

  return (
    <main className="snap-y">
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
        <MyExperiences experiences={experiences} />
      </div>

      <div>
        <MyEducationalBg educations={educations} />
      </div>


      <ContainerFullScreen>
        <ContactForm />
      </ContainerFullScreen>

    </main>
  );
}
