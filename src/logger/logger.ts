import getClientlog from "@/server/getClientlog";

type logType = "info" | "error" | "warning";

/**
 * This function sends a log to the server when called on the client
 * @param type type of log
 * @param message message to log
 * @returns
 */
export default async function log(type: logType, message: string) {
    // detect if the log wal call on client
    if (typeof window !== "undefined") {
        await getClientlog({ type, message });
        console.log("log sent to server");

        return;
    }

    console.log(`${type}: ${message}`);
}
