import { fs } from "zx";
import log from "fancy-log";
import chokidar from "chokidar";
import { pc } from "./lib/pc.mjs";
import { projectPath } from "./lib/env.mjs";
import { ensureWidgetsDistDir, copyExistingMpks, copySingleMpk } from "./lib/widget-utils.mjs";
import { onExit } from "./lib/on-exit.mjs";

export async function watchWidgets() {
    log("Start mpk watcher...");

    try {
        const widgetsDistPath = await ensureWidgetsDistDir(projectPath);

        await copyExistingMpks(widgetsDistPath);

        const pkg = await fs.readJSON("package.json");
        const widgetDists = Object.entries<string>(pkg.dependencies).flatMap(([dep, version]) =>
            version.startsWith("workspace:") ? [`./node_modules/${dep}/dist`] : []
        );

        const watcher = chokidar.watch(widgetDists, {
            ignored: (path, stats) => {
                if (stats?.isDirectory()) {
                    return path.endsWith("tmp");
                }

                return !!(stats?.isFile() && !path.endsWith(".mpk"));
            },
            persistent: true,
            ignoreInitial: true,
            usePolling: true,
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
            });

        log(pc.green("Watching for mpk file changes..."));

        onExit(async () => {
            log(pc.dim("Stopping mpk watcher..."));
            try {
                await watcher.close();
            } catch (error) {
                log.error("Error stopping mpk watcher:", error);
            }
            log(pc.dim("mpk watcher stopped"));
        });
    } catch (error) {
        log.error("Error setting up widget watch:", error);
    }
}
