import type { TimeBetween } from "./timeBetween.d";

export type Education = {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  date: TimeBetween;
  description: string;
  location: string;
  images: string[];
};
