import { $, fs } from "zx";
import log from "fancy-log";
import chokidar from "chokidar";
import pc from "picocolors";
import { ensureWidgetsDistDir, copyExistingMpks, copySingleMpk, findMpkFiles } from "./lib/widget-utils.mjs";
import fg from "fast-glob";

export async function watchWidgets() {
    log("Watching widget MPK files...");
    
    try {
        const widgetsDistPath = await ensureWidgetsDistDir();
        
        // Initial copy of existing MPK files
        await copyExistingMpks(widgetsDistPath);
        
        const pkg = await fs.readJSON("package.json");
        const widgetDists = Object.entries<string>(pkg.dependencies).flatMap(
            ([dep, version]) => version.startsWith("workspace:") ? [`./node_modules/${dep}`] : []
        );


        console.log(widgetDists);

        const watcher = chokidar.watch(widgetDists, {
            ignored: (path, stats) => !!(stats?.isFile() && !path.endsWith('.mpk')),
            persistent: true,
            ignoreInitial: true,
            // followSymlinks: true,
            
            awaitWriteFinish: {
                stabilityThreshold: 300,
                pollInterval: 100
            },
            // usePolling: true,
            // interval: 1000
        });

        console.log(watcher.getWatched());
        
        watcher
            .on('add', (filePath) => {
                log(`New MPK file detected: ${filePath.split('/').pop()}`);
                copySingleMpk(filePath, widgetsDistPath);
            })
            .on('change', (filePath) => {
                log(`MPK file changed: ${filePath.split('/').pop()}`);
                copySingleMpk(filePath, widgetsDistPath);
            })
            .on('unlink', (filePath) => {
                log(`MPK file removed: ${filePath.split('/').pop()}`);
            })
            .on('error', (error) => {
                log.error("Watch error:", error);
            })
            .on('ready', () => {
                log(pc.green("File watcher is ready"));
            })
            // .on('all', (filePath) => {
            //     log(`File changed: ${filePath}`);
            // })
        
        log("Watching for MPK file changes...");
        log("Press Ctrl+C to stop watching");
        
        // Set up periodic refresh as a fallback
        // const refreshInterval = setInterval(async () => {
        //     try {
        //         await copyExistingMpks(widgetsDistPath);
        //     } catch (error) {
        //         log.error("Error during periodic refresh:", error);
        //     }
        // }, 5000); // Refresh every 5 seconds
        
        // Keep the process running
        process.on('SIGINT', () => {
            log("Stopping watch...");
            watcher.close();
        });
        
    } catch (error) {
        log.error("Error setting up widget watch:", error);
    }
} 