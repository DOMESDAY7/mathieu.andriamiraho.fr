"use server";
import { z } from "zod";

// Define the schema for validation
const formDataSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1, "Message cannot be empty"),
});

export async function sendMessageToDiscord(formData: FormData) {
  console.log(formData);
  // Parse and validate the formData
  const parsedData = formDataSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  console.log(parsedData);
  // Check if the validation failed
  if (!parsedData.success) {
    console.error(parsedData.error);
    throw new Error("Invalid input data");
  }

  const { email, message } = parsedData.data;

  const url = process.env.DISCORD_WEBHOOK_URL ?? "";

  if (!url) throw new Error("DISCORD_WEBHOOK_URL is not set");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `${email} sent a message: ${message}`,
    }),
  });

  console.log(res);
}
