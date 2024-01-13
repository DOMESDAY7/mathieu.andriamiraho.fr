import { sendMessageToDiscord } from "@/server/contact-form";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import Label from "./ui/Label";
import { Textarea } from "./ui/Textarea";

export default function ContactForm() {
    return (
        <>
            <h2 className="text-3xl text-center font-bold">Contact me now !</h2>
            <form action={sendMessageToDiscord} className="flex flex-col gap-5 w-64">

                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="youremail@here.fr" required />

                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here" required />

                <Button type="submit">Send your message</Button>
            </form>
        </>
    )
}