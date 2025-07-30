import { $ } from "zx";
import { readFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";
import log from "fancy-log";

interface WidgetPackage {
    name: string;
    version: string;
    widgetName: string;
}

export async function syncWidgets() {
    const finchUiPackagePath = join(process.cwd(), "package.json");
    
    log("🔍 Scanning widgets using pnpm ls...");
    
    // Resolve repository root using git
    const rootResult = await $`git rev-parse --show-toplevel`;
    const repositoryRoot = rootResult.stdout.trim();
    
    log(`📍 Repository root: ${repositoryRoot}`);
    
    let widgets: WidgetPackage[] = [];
    
    try {
        // Use pnpm ls to get workspace packages with depth 1, filter for widgets, and json output
        // Run from root directory to find widgets
        const result = await $({ cwd: repositoryRoot })`pnpm ls --depth=1 --filter=./widgets/* --json`;
        const packages = JSON.parse(result.stdout);
        
        // Filter for actual widget packages (those with package.json and widgetName)
        
        for (const pkg of packages) {
            if (pkg.name && pkg.path && pkg.path.includes('/widgets/')) {
                try {
                    const packagePath = join(pkg.path, "package.json");
                    await access(packagePath);
                    const packageContent = await readFile(packagePath, "utf-8");
                    const packageJson = JSON.parse(packageContent);
                    
                    if (packageJson.widgetName) {
                        widgets.push({
                            name: packageJson.name,
                            version: packageJson.version,
                            widgetName: packageJson.widgetName
                        });                        
                    }
                } catch (error) {
                    log(`⚠️  Error reading package.json for ${pkg.name}:`, error);
                }
            }
        }
        
        log(`📦 Found ${widgets.length} widget packages`);
        
    } catch (error) {
        log("❌ Error scanning widgets:", error);
        return;
    }
    
    if (widgets.length === 0) {
        log("❌ No valid widget packages found");
        return;
    }
    
    // Read finch-ui package.json
    const finchUiPackageContent = await readFile(finchUiPackagePath, "utf-8");
    const finchUiPackage = JSON.parse(finchUiPackageContent);
    
    // Add widgets as dependencies
    const currentDependencies = finchUiPackage.dependencies || {};
    let updated = false;
    
    for (const widget of widgets) {

        if (!(widget.name in currentDependencies)) {
            currentDependencies[widget.name] = "workspace:*";
            updated = true;
            log(`🧩 Added dependency: ${widget.name} (${widget.widgetName})`);
        }
    }
    
    if (updated) {
        finchUiPackage.dependencies = currentDependencies;
        
        // Write updated package.json
        await writeFile(finchUiPackagePath, JSON.stringify(finchUiPackage, null, 4) + "\n");
        log("✅ Updated finch-ui package.json with widget dependencies");
        
        // Install dependencies
        log("📦 Installing dependencies...");
        await $`pnpm install`;
        log("✅ Dependencies installed successfully");
    } else {
        log("🌙 No new dependencies to add");
    }
} 