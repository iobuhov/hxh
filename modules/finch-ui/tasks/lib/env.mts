import "dotenv/config";
import { access } from "node:fs/promises";
import log from "fancy-log";
import { tokens } from "./formatMsg.mjs";

const mxp = process.env.MX_PROJECT_PATH;

if (mxp) {
    try {
        await access(mxp);
    } catch (error) {
        log.error(tokens.err, tokens.mxp, "Error accessing project path:", error);
        process.exit(1);
    }
}

export const projectPath = mxp;
