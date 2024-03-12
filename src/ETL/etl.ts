"use server";
import { Client } from "@notionhq/client";
import { env } from "@/env";

import type { Experience } from "@/types/Experience";
import type { TimeBetween } from "@/types/timeBetween";
import type { TWhoAmI } from "@/types/whoAmI";
import type { Education } from "@/types/Education";

const notion = new Client({
    auth: env.NOTION_TOKEN,
});

const getExperiences = async (): Promise<Experience[] | void> => {
    try {
        const tokenExperiences = env.EXPERIENCE_TOKEN;

        if (!tokenExperiences)
            throw new Error("no experience token was provided");

        const res = await notion.databases.query({
            database_id: tokenExperiences,
        });

        const experienceTable = res?.results?.map((el) => {
            if (!("properties" in el)) return null;

            const page = el as any;
            const pageProperties = page.properties;

            const resExperience: Experience = {
                id: pageProperties.id.id,
                location: pageProperties.location.rich_text[0].plain_text,
                description: pageProperties.description.rich_text[0].plain_text,
                company: pageProperties.company.rich_text[0].plain_text,
                mobileImage: pageProperties.mobileImage.files[0].file.url,
                images: pageProperties.images.files.map(
                    (image: any) => image.file.url as string,
                ),
                date: {
                    from: pageProperties.dates.date.start,
                    to: pageProperties.dates.date.end,
                } as TimeBetween,
                title: pageProperties.title.title[0].plain_text,
            };

            return resExperience;
        }) as Experience[];

        return experienceTable;
    } catch (e) {
        console.log(e);
    }
};

const getWhoAmI = async (): Promise<TWhoAmI[] | void> => {
    try {
        const tokenWhoAmI = env.WHO_AM_I_TOKEN;

        if (!tokenWhoAmI) throw new Error("WHO_AM_I_TOKEN was not provided");

        const res = await notion.databases.query({
            database_id: tokenWhoAmI,
        });

        const whoAmITable = res.results.map((el) => {
            if (!("properties" in el))
                throw new Error("properties is not in el");

            const page = el as any;
            const pageProperties = page.properties;

            const resIAm: TWhoAmI = {
                emoji: pageProperties.emoji.rich_text[0].plain_text,
                name: pageProperties.name.title[0].plain_text,
            };
            return resIAm;
        });

        return whoAmITable;
    } catch (e) {
        console.log(e);
    }
};

const getEducationalBg = async (): Promise<Education[] | void> => {
    try {
        const tokenEducationalBg = env.EDUCATIONAL_BG_TOKEN;

        if (!tokenEducationalBg)
            throw new Error("EDUCATIONAL_BG_TOKEN was not provided");

        const res = await notion.databases.query({
            database_id: tokenEducationalBg,
        });

        const educationalBgTable = res.results.map((el) => {
            if (!("properties" in el))
                throw new Error("properties is not in el");

            const page = el as any;
            const pageProperties = page.properties;

            const resEducationalBg: Education = {
                description: pageProperties.description.rich_text[0].plain_text,
                degree: pageProperties.degree.rich_text[0].plain_text,
                date: {
                    from: pageProperties.dates.date.start,
                    to: pageProperties.dates.date.end,
                },
                school: pageProperties.school.rich_text[0].plain_text,
                id: pageProperties.id.id,
                location: pageProperties.location.rich_text[0].plain_text,
                fieldOfStudy: pageProperties.field.title[0].plain_text,
                images: pageProperties.images.files.map(
                    (image: any) => image.file.url as string,
                ),
            };
            return resEducationalBg;
        });

        return educationalBgTable;
    } catch (e) {
        console.log(e);
    }
};

export { getExperiences, getWhoAmI, getEducationalBg };
