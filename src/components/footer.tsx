import WritingPhrase from "./writing-phrase";
import { getWhoAmI } from "@/ETL/etl";
import type { TWhoAmI } from "@/types/whoAmI";
import ContactForm from "./contact-form";

export default async function Footer() {
    const whoAmI = await getWhoAmI();

    return (
        <div className="flex items-center justify-center">
            <ContactForm />
            <div className="hidden h-svh w-[50svw] items-center justify-center md:flex">
                <div className="flex gap-2 text-3xl text-black">
                    I am a
                    <WritingPhrase
                        words={
                            whoAmI?.map(
                                (el: TWhoAmI) => `${el.name}${el.emoji}`,
                            ) ?? []
                        }
                        delay={150}
                    />
                </div>
            </div>
        </div>
    );
}
