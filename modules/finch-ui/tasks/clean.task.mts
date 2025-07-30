import { $ } from "zx";
import { rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import log from "fancy-log";

export async function clean() {
    const distPath = join(process.cwd(), "dist");
    
    if (existsSync(distPath)) {
        await rm(distPath, { recursive: true, force: true });
        log.info("✅ Cleaned dist directory");
    } else {
        log.info("🌙 Dist directory does not exist, nothing to clean");
    }
} 