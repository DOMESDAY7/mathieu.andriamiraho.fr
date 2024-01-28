import WritingPhrase from "./writing-phrase";
import { getWhoAmI } from "@/ETL/etl";
import type { TWhoAmI } from "@/types/whoAmI";
import ContactForm from "./contact-form";


export default async function Footer() {

    const whoAmI = await getWhoAmI()

    return (
        <div className="flex items-center justify-center">
            <ContactForm />
            <div className="w-[50svw] h-svh hidden md:flex items-center justify-center">
                <div className="text-black flex gap-2 text-3xl">
                    I am a<WritingPhrase words={whoAmI?.map((el: TWhoAmI) => `${el.name} ${el.emoji}`) ?? []} delay={100} />
                </div>
            </div>
        </div>
    )
}