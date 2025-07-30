import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import log from "fancy-log";
import { pc } from "./pc.mjs";
import fg from "fast-glob";

export async function ensureWidgetsDistDir(projectPath?: string): Promise<string> {
    const widgetsDistPath = projectPath ? join(projectPath, "widgets") : join(process.cwd(), "dist", "widgets");
    await mkdir(widgetsDistPath, { recursive: true });
    return widgetsDistPath;
}

export async function findMpkFiles(): Promise<string[]> {
    return await fg(["node_modules/@mendix/*/dist/*/*.mpk", "node_modules/*/dist/*/*.mpk"], {
        cwd: process.cwd(),
        absolute: true
    });
}

export async function copySingleMpk(mpkFile: string, widgetsDistPath: string): Promise<void> {
    try {
        const fileName = mpkFile.split("/").pop() || "unknown.mpk";
        const destPath = join(widgetsDistPath, fileName);

        await copyFile(mpkFile, destPath);
        log(`${pc.dim("Copied:")} ${pc.bold(fileName)}`);
    } catch (error) {
        log.error(`Failed to copy ${mpkFile.split("/").pop()}:`, error);
    }
}

export async function copyExistingMpks(widgetsDistPath: string): Promise<void> {
    try {
        const mpkFiles = await findMpkFiles();

        log(`Found ${mpkFiles.length} existing MPK files`);

        if (mpkFiles.length === 0) {
            log("No existing MPK files found");
            return;
        }

        // Copy each existing MPK file
        for (const mpkFile of mpkFiles) {
            await copySingleMpk(mpkFile, widgetsDistPath);
        }

        log(pc.green(`Successfully copied ${mpkFiles.length} existing MPK files`));
    } catch (error) {
        log.error("Error copying existing MPK files:", error);
    }
}
