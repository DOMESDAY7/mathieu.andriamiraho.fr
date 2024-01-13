"use client"
import Button from "@/components/ui/Button";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import { DownloadCloud } from 'lucide-react';
import WritingPhrase from "@/components/writing-phrase";
import ContactForm from "@/components/contact-form";
import type{ Experience } from "@/types/Experience";
import ID from "@/utils/ID";
import MyExperiences from "@/components/experiences/MyExperiences";
import type{ Education } from "@/types/Education";
import MyEducationalBg from "@/components/educational-bg/MyEducationalBg";


export default function HomePage() {

  const whoAmI = [
    "Developper 💻",
    "engineer 🧠",
    "passionate 🤩",
    "designer 🖌",
    "mocha lover ☕",
    "marvel movie viewer 🎞"
  ]


  const experiences: Experience[] = [
    {
      id: ID(),
      title: "Apprentice IT engineer quality project",
      description: "Creation of tools to monitor the IT quality of multi-national installations throughout Europe, the middle East and Africa",
      company: "EssilorLuxottica",
      date: {
        from: new Date("2022-09-01"),
        to: new Date()
      },
      location: "Créteil, France",
      image: "/glasses.png",
      imageFallback: "🕶️",
    },
    {
      id: ID(),
      title: "FullStack developper internship",
      description: "Creation of a digital working environment for the teaching staff and students.",
      company: "Progress Group",
      date: {
        from: new Date("2022-04-01"),
        to: new Date("2022-06-01")
      },
      location: "Créteil, France",
      image: "/computer.png",
      imageFallback: "🖥️",
    },
    {
      id: ID(),
      title: "FullStack developper internship",
      description: "Design creation and web integration of the latest e commerce site.",
      company: "La Prairie créative",
      date: {
        from: new Date("2022-04-01"),
        to: new Date("2022-06-01")
      },
      location: "Créteil, France",
      image: "/laptop.png",
      imageFallback: "💻",
    }
  ]

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
      <div className="hidden md:flex items-center h-svh w-svw justify-center bg-white fixed top-0 z-50">
        <h1 className="font-extrabold text-7xl  ">👋🏿Only mobile is available for now</h1>
      </div>
      <ContainerFullScreen className="relative grid gap-y-5 place-content-center place-items-center snap-center">
        <Button className="absolute top-5 right-5"><DownloadCloud /></Button>
        <Avatar />
        <h1 className="text-3xl text-center">👋🏽Hi, my name is <br /><span className=" font-bold">Mathieu Andriamiraho</span></h1>
        <Button>Discover me ↓</Button>
      </ContainerFullScreen>
      <ContainerFullScreen className="bg-black snap-center flex items-center justify-center">
        <div className="text-white flex gap-2 text-3xl">
          I am a<WritingPhrase words={whoAmI} delay={100} />
        </div>
      </ContainerFullScreen>

      <div>
        <MyExperiences experiences={experiences} />
      </div>

      <div>
        <MyEducationalBg educations={educations} />
      </div>


      <ContainerFullScreen className="grid gap-y-5 place-content-center place-items-center snap-center">
        <ContactForm />
      </ContainerFullScreen>

    </main>
  );
}
