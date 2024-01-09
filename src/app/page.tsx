import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import Textarea from "@/components/ui/Textarea";

import { DownloadCloud } from 'lucide-react';


export default function HomePage() {
  return (
    <main className="snap-y">
      <ContainerFullScreen className="relative grid gap-y-5 place-content-center place-items-center snap-center">
        <Button className="absolute top-5 right-5"><DownloadCloud /></Button>
        <Avatar />
        <h1 className="text-3xl text-center">👋🏽Hi, my name is <br /><span className=" font-bold">Mathieu Andriamiraho</span></h1>
        <Button>Discover me ↓</Button>
      </ContainerFullScreen>
      <ContainerFullScreen className="bg-black snap-center">
        <p className="text-white">
          I am a <span className="text-center text-white">Fullstack developer</span>
        </p>
      </ContainerFullScreen>

      <ContainerFullScreen className="grid gap-y-5 place-content-center place-items-center snap-center">
        <Input type="email" placeholder="youremail@here.fr" />
        <Textarea placeholder="Your message here" />
      </ContainerFullScreen>

    </main>
  );
}
