import log from "fancy-log";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { $ } from "zx";
import { __name } from "./lib/consts.mjs";
import { projectPath } from "./lib/env.mjs";
import { pc } from "./lib/pc.mjs";

export async function css() {
    log("Building main.css...");

    if (projectPath) {
        // Copy to Mendix project theme source
        const themeSourcePath = join(projectPath, "themesource", __name, "web");
        await mkdir(themeSourcePath, { recursive: true });
        await $`postcss src/css/main.css -o ${themeSourcePath}/main.css`;
        log(pc.green("main.css built and copied to project theme source"));
    } else {
        // Copy to local dist
        await $`postcss src/css/main.css -o dist/themesource/${__name}/web/main.css`;
        log(pc.green("main.css built"));
    }
}
