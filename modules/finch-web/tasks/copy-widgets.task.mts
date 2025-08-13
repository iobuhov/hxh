import { $ } from "zx";
import log from "fancy-log";
import { pc } from "./lib/pc.mjs";
import { projectPath } from "./lib/env.mjs";
import { ensureWidgetsDistDir, copyExistingMpks } from "./lib/widget-utils.mjs";

export async function copyWidgets() {
    log("Copying widget MPK files...");

    try {
        const widgetsDistPath = await ensureWidgetsDistDir(projectPath);
        await copyExistingMpks(widgetsDistPath);
    } catch (error) {
        log.error("Error copying widget MPK files:", error);
    }
}
