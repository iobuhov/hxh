import { $ } from "zx";
import { rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import log from "fancy-log";
import { pc } from "./lib/pc.mjs";
import { projectPath } from "./lib/env.mjs";

export async function clean() {
    if (projectPath) {
        let themeSourcePath = join(projectPath, "themesource", "finch-ui");
        if (existsSync(themeSourcePath)) {
            await rm(themeSourcePath, { recursive: true, force: true });
            log.info(pc.green("Cleaned theme source directory"));
        } else {
            log.info(pc.dim("Theme source directory does not exist, nothing to clean"));
        }
        return;
    }

    const distPath = join(process.cwd(), "dist");

    if (existsSync(distPath)) {
        await rm(distPath, { recursive: true, force: true });
        log.info(pc.green("Cleaned dist directory"));
    } else {
        log.info(pc.dim("Dist directory does not exist, nothing to clean"));
    }
}
