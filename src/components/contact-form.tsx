"use client"
import { sendMessageToDiscord } from "@/server/contact-form";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import Label from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import { useRef } from "react";
import type { FormEvent } from "react";
import { useToast } from "./ui/toast/use-toast";
import { Checkbox } from "./ui/checkbox";
import WritingPhrase from "./writing-phrase";
import whoAmI from "@/data/whoAmI.json"


export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const { toast } = useToast();
    const handleSubmit = async (event: FormEvent) => {

        try {
            event.preventDefault();
            const formData = new FormData(event.currentTarget as HTMLFormElement);

            await sendMessageToDiscord(formData);

            toast({
                title: "Mathieu Andriamiraho",
                description: "Merci, j'ai bien reçu votre message !"
            })

            formRef?.current?.reset()

        } catch (err) {
            toast({
                title: "Error",
                description: "error when sending the message to Mathieu"
            })
            console.log(err)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-[50svw] h-svh">
                <h2 className="text-3xl text-center font-bold">Contact me now !</h2>
                <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-5 w-64">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="youremail@here.fr" required />
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here" required />
                    <div className="flex gap-x-4 items-center justify-center">
                        <Checkbox id="accept" />
                        <Label htmlFor="accept">Accept the terms of use </Label>
                    </div>
                    <Button type="submit">Send your message</Button>
                </form>
            </div>
            <div className="w-[50svw] h-svh hidden md:flex items-center justify-center">
                <div className="text-black flex gap-2 text-3xl">
                    I am a<WritingPhrase words={whoAmI} delay={100} />
                </div>
            </div>
        </div>
    )
}