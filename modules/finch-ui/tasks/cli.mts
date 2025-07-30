import * as zx from "zx";
import { cac } from "cac";
import { css } from "./css.task.mjs";
import { clean } from "./clean.task.mjs";
import { syncWidgets } from "./sync-widgets.task.mjs";
import { copyWidgets } from "./copy-widgets.task.mjs";
import { watchWidgets } from "./watch-widgets.task.mjs";
import log from "fancy-log";

const cli = cac('finch');

cli.command("build", "Build the module").action(async () => {
    await clean();
    await syncWidgets();
    await css();
    await copyWidgets();
});

cli.command("dev", "Build and watch for changes").action(async () => {
    await clean();
    await syncWidgets();
    await css();
    await watchWidgets();
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

cli.parse();
