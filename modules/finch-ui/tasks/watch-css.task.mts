import log from "fancy-log";
import chokidar from "chokidar";
import { pc } from "./lib/pc.mjs";
import { onExit } from "./lib/on-exit.mjs";
import { tokens } from "./lib/formatMsg.mjs";
import { css } from "./css.task.mjs";

export async function watchCss() {
    log("Start CSS watcher...");

    try {
        await css();

        const watcher = chokidar.watch("src/css", {
            ignored: (path, stats) => !!(stats?.isFile() && !path.endsWith(".css")),
            persistent: true,
            ignoreInitial: true
        });

        watcher
            .on("add", filePath => {
                log(pc.dim(`New CSS file detected: ${filePath.split("/").pop()}`));
                css();
            })
            .on("change", filePath => {
                log(pc.dim(`CSS file changed: ${filePath.split("/").pop()}`));
                css();
            })
            .on("unlink", filePath => {
                log(`CSS file removed: ${filePath.split("/").pop()}`);
                css();
            })
            .on("error", error => {
                log.error(tokens.err, "Watch error:", error);
            })
            .on("ready", () => {
                log(pc.dim("CSS file watcher is ready"));
            });

        log(pc.green("Watching for CSS file changes..."));

        onExit(async () => {
            log(pc.dim("Stopping CSS watch..."));
            await watcher.close();
        });
    } catch (error) {
        log.error("Error setting up CSS watch:", error);
    }
}
