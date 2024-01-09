import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Avatar from "@/components/avatar";
import ContainerFullScreen from "@/components/container-full-screen";
import Textarea from "@/components/ui/Textarea";



export default function HomePage() {
  return (
    <main>
      <ContainerFullScreen className="grid gap-y-5 place-content-center place-items-center">
        <Avatar />
        <h1 className="text-3xl text-center">👋🏽Hi, my name is <br /><span className=" font-bold">Mathieu Andriamiraho</span></h1>
        <Button>Discover me ↓</Button>
      </ContainerFullScreen>

      <ContainerFullScreen className="grid gap-y-5 place-content-center place-items-center">
        <Input type="email" placeholder="youremail@here.fr" />
        <Textarea placeholder="Your message here" />
      </ContainerFullScreen>

    </main>
  );
}
