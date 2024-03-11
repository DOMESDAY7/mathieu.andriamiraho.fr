"use server";

type logSchema = {
    type: "info" | "error" | "warning";
    message: string;
};

export default async function getClientlog({ type, message }: logSchema) {
    console.log(`${type}: ${message}`);
}
