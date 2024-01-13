import type{ TimeBetween } from "./timeBetween";

export type Experience = {
    id: string;
    title: string;
    company: string;
    location: string;
    date: TimeBetween;
    description: string;
    image: string | null;
    imageFallback: string;
};