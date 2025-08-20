import { cac } from "cac";
import log from "fancy-log";
import { clean } from "./clean.task.mjs";
import { copyWidgets } from "./copy-widgets.task.mjs";
import { css } from "./css.task.mjs";
import { syncWidgets } from "./sync-widgets.task.mjs";
import { watchCss } from "./watch-css.task.mjs";
import { watchWidgets } from "./watch-widgets.task.mjs";

const cli = cac("finch");

cli.command("build", "Build the module").action(async () => {
    await clean();
    await syncWidgets();
    await css();
    await copyWidgets();
});

cli.command("dev", "Build and watch for changes").action(async () => {
    await clean();
    await syncWidgets();
    await watchCss();
    await watchWidgets();
    log("Press Ctrl+C to stop watching");
});

cli.command("clean", "Clean dist files").action(async () => {
    await clean();
});

cli.command("sync-widgets", "Sync widget dependencies").action(async () => {
    await syncWidgets();
});

cli.command("copy-widgets", "Copy widget MPK files").action(async () => {
    await copyWidgets();
});

cli.command("watch-css", "Watch CSS files for changes").action(async () => {
    await watchCss();
});

cli.parse();
