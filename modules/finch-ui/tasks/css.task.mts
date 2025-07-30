import { $ } from "zx";
import log from "fancy-log";
import pc from "picocolors";

export async function css() {
    log("Building main.css...");
    await $`postcss src/css/main.css -o dist/themesource/finch-ui/web/main.css`;
    log(pc.green("main.css built"));
}
