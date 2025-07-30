import { $ } from "zx";
import log from "fancy-log";
import { ensureWidgetsDistDir, copyExistingMpks } from "./lib/widget-utils.mjs";

export async function copyWidgets() {
    log.info("📦 Copying widget MPK files...");
    
    try {
        const widgetsDistPath = await ensureWidgetsDistDir();
        await copyExistingMpks(widgetsDistPath);
    } catch (error) {
        log.error("❌ Error copying widget MPK files:", error);
    }
} 