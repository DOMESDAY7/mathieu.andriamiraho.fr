"use client"
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import { Textarea } from "@/components/ui/Textarea";

import { DownloadCloud } from 'lucide-react';
import WritingPhrase from "@/components/writing-phrase";
import { sendMessageToDiscord } from "@/server/contact-form";
import Label from "@/components/ui/Label";


export default function HomePage() {

  const whoAmI = [
    "Developper 💻",
    "engineer 🧠",
    "passionate 🤩",
    "designer 🖌",
    "mocha lover ☕",
    "marvel movie viewer 🎞"
  ]

  return (
    <main className="snap-y">
      <ContainerFullScreen className="relative grid gap-y-5 place-content-center place-items-center snap-center">
        <Button className="absolute top-5 right-5"><DownloadCloud /></Button>
        <Avatar />
        <h1 className="text-3xl text-center">👋🏽Hi, my name is <br /><span className=" font-bold">Mathieu Andriamiraho</span></h1>
        <Button>Discover me ↓</Button>
      </ContainerFullScreen>
      <ContainerFullScreen className="bg-black snap-center flex items-center justify-center">
        <div className="text-white flex gap-2 text-3xl">
          I am a<WritingPhrase words={whoAmI} delay={200} />
        </div>
      </ContainerFullScreen>

      <ContainerFullScreen className="grid gap-y-5 place-content-center place-items-center snap-center">
        <h2 className="text-3xl text-center font-bold">Contact me now !</h2>
        <form action={sendMessageToDiscord} className="flex flex-col gap-5 w-64">

          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="youremail@here.fr" required />

          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message here" required />

          <Button type="submit">Send your message</Button>
        </form>
      </ContainerFullScreen>

    </main>
  );
}
