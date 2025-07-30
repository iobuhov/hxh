import { fs } from "zx";
import log from "fancy-log";
import chokidar from "chokidar";
import pc from "picocolors";
import { ensureWidgetsDistDir, copyExistingMpks, copySingleMpk } from "./lib/widget-utils.mjs";
import { onExit } from "signal-exit";

export async function watchWidgets() {
    log("Start mpk watcher...");

    try {
        const widgetsDistPath = await ensureWidgetsDistDir();

        await copyExistingMpks(widgetsDistPath);

        const pkg = await fs.readJSON("package.json");
        const widgetDists = Object.entries<string>(pkg.dependencies).flatMap(([dep, version]) =>
            version.startsWith("workspace:") ? [`./node_modules/${dep}`] : []
        );

        const watcher = chokidar.watch(widgetDists, {
            ignored: (path, stats) => !!(stats?.isFile() && !path.endsWith(".mpk")),
            persistent: true,
            ignoreInitial: true,
            awaitWriteFinish: {
                stabilityThreshold: 300,
                pollInterval: 100
            }
        });

        watcher
            .on("add", filePath => {
                log(pc.dim(`New MPK file detected: ${filePath.split("/").pop()}`));
                copySingleMpk(filePath, widgetsDistPath);
            })
            .on("change", filePath => {
                log(pc.dim(`MPK file changed: ${filePath.split("/").pop()}`));
                copySingleMpk(filePath, widgetsDistPath);
            })
            .on("unlink", filePath => {
                log(`MPK file removed: ${filePath.split("/").pop()}`);
            })
            .on("error", error => {
                log.error("Watch error:", error);
            })
            .on("ready", () => {
                log(pc.dim("File watcher is ready"));
            });

        log(pc.green("Watching for mpk file changes..."));

        onExit(() => {
            log("Stopping watch...");
            watcher.close();
        });
    } catch (error) {
        log.error("Error setting up widget watch:", error);
    }
}
