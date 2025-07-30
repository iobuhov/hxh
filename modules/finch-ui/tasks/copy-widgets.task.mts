import { $ } from "zx";
import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import log from "fancy-log";
import fg from "fast-glob";

export async function copyWidgets() {
    log.info("📦 Copying widget MPK files...");
    
    try {
        // Create dist/widgets directory if it doesn't exist
        const widgetsDistPath = join(process.cwd(), "dist", "widgets");
        await mkdir(widgetsDistPath, { recursive: true });
        
        // Find all MPK files in node_modules from widget packages
        const mpkFiles = await fg([
            "node_modules/@mendix/*/dist/*/*.mpk",
            "node_modules/*/dist/*/*.mpk"
        ], {
            cwd: process.cwd(),
            absolute: true
        });
        
        log.info(`🔍 Found ${mpkFiles.length} MPK files`);
        
        if (mpkFiles.length === 0) {
            log.info("🌙 No MPK files found in node_modules");
            return;
        }
        
        // Copy each MPK file to dist/widgets
        for (const mpkFile of mpkFiles) {
            const fileName = mpkFile.split('/').pop() || 'unknown.mpk';
            const destPath = join(widgetsDistPath, fileName);
            
            try {
                await copyFile(mpkFile, destPath);
                log.info(`✅ Copied: ${fileName}`);
            } catch (error) {
                log.error(`❌ Failed to copy ${fileName}:`, error);
            }
        }
        
        log.info(`✅ Successfully copied ${mpkFiles.length} MPK files to dist/widgets`);
        
    } catch (error) {
        log.error("❌ Error copying widget MPK files:", error);
    }
} 