#!/usr/bin/env tsx

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { join } from "path";

interface Widget {
    name: string;
    description: string;
}

interface WidgetsData {
    [key: string]: Widget;
}

function main() {
    try {
        // Read the widgets data
        const widgetsPath = join(process.cwd(), "specs", "data", "widgets.json");
        const widgetsData: WidgetsData = JSON.parse(readFileSync(widgetsPath, "utf-8"));

        console.log("Starting widget generation...");
        console.log(`Found ${Object.keys(widgetsData).length} widgets to generate\n`);

        // Iterate over each widget
        for (const [widgetName, widget] of Object.entries(widgetsData)) {
            console.log(`Generating widget: ${widget.name}`);
            console.log(`Description: ${widget.description}`);

            try {
                // Call pnpm add-widget with the widget name and description
                const command = `pnpm add-widget "${widget.name}" "${widget.description}"`;
                console.log(`Executing: ${command}`);

                execSync(command, {
                    stdio: "inherit",
                    cwd: process.cwd()
                });

                console.log(`✅ Successfully generated: ${widget.name}\n`);
            } catch (error) {
                console.error(`❌ Failed to generate ${widget.name}:`, error);
                console.log("Continuing with next widget...\n");
            }
        }

        console.log("Widget generation completed!");
    } catch (error) {
        console.error("Error reading widgets data:", error);
        process.exit(1);
    }
}

main();
