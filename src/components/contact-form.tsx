"use client";
import { sendMessageToDiscord } from "@/server/contact-form";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import Label from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import { useRef } from "react";
import type { FormEvent } from "react";
import { useToast } from "./ui/toast/use-toast";
import { Checkbox } from "./ui/checkbox";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const { toast } = useToast();

    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            const formData = new FormData(
                event.currentTarget as HTMLFormElement,
            );

            await sendMessageToDiscord(formData);

            toast({
                title: "Mathieu Andriamiraho",
                description: "Merci, j'ai bien reçu votre message !",
            });

            formRef?.current?.reset();
        } catch (err) {
            toast({
                title: "Error",
                description: "error when sending the message to Mathieu",
            });
            console.log(err);
        }
    };

    return (
        <div className="flex h-svh w-[50svw] flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold">Contact me now !</h2>
            <form
                ref={formRef}
                onSubmit={(e) => handleSubmit(e)}
                className="flex w-64 flex-col gap-y-5"
            >
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@here.fr"
                    required
                />
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here"
                    required
                />
                <div className="flex items-center justify-center gap-x-4">
                    <Checkbox id="accept" />
                    <Label htmlFor="accept">Accept the terms of use </Label>
                </div>
                <Button type="submit">Send your message</Button>
            </form>
        </div>
    );
}
