"use server";
export async function sendMessageToDiscord() {
    const url = process.env.DISCORD_WEBHOOK_URL ?? "";

    if (!url) throw new Error("DISCORD_WEBHOOK_URL is not set")

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": "sxsxsxsxsxs"
        })
    })



    console.log(res)

}