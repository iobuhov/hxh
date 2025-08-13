import { $ } from "zx";
import log from "fancy-log";
import { pc } from "./lib/pc.mjs";
import { projectPath } from "./lib/env.mjs";
import { join } from "node:path";
import { mkdir } from "node:fs/promises";

export async function css() {
    log("Building main.css...");

    if (projectPath) {
        // Copy to Mendix project theme source
        const themeSourcePath = join(projectPath, "themesource", "finch-ui", "web");
        await mkdir(themeSourcePath, { recursive: true });
        await $`postcss src/css/main.css -o ${themeSourcePath}/main.css`;
        log(pc.green("main.css built and copied to project theme source"));
    } else {
        // Copy to local dist
        await $`postcss src/css/main.css -o dist/themesource/finch-ui/web/main.css`;
        log(pc.green("main.css built"));
    }
}
