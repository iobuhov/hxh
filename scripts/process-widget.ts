#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync } from "fs";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
import { join } from "path";
import { execSync } from "child_process";

interface OldPropertySpec {
    originalType?: string;
    group: string;
    caption: string;
    description: string;
    default?: string;
    xml: {
        type: string;
        required: boolean;
        enumerationValues?: Array<{ key: string }>;
    };
}

interface OldSpecFile {
    [key: string]: OldPropertySpec;
}

function convertOldSpecToNewYaml(oldSpec: OldSpecFile, widgetInfo: any): string {
    const properties: any = {};

    // Group properties by their group
    const groups: Record<string, any> = {};

    for (const [propKey, propSpec] of Object.entries(oldSpec)) {
        const groupName = propSpec.group || "General";
        if (!groups[groupName]) {
            groups[groupName] = {};
        }

        const newProp: any = {
            type: propSpec.xml.type,
            caption: propSpec.caption,
            description: propSpec.description,
            required: propSpec.xml.required
        };

        if (propSpec.default) {
            newProp.default = propSpec.default;
        }

        if (propSpec.xml.enumerationValues) {
            newProp.enumerationValues = {};
            for (const enumVal of propSpec.xml.enumerationValues) {
                newProp.enumerationValues[enumVal.key] = enumVal.key;
            }
        }

        groups[groupName][propKey] = newProp;
    }

    const newSpec = {
        widget: {
            id: `com.mendix.finch.widget.${widgetInfo.widgetName}`,
            name: widgetInfo.widgetName,
            description: widgetInfo.description,
            pluginWidget: true,
            offlineCapable: false,
            properties: groups
        }
    };

    return JSON.stringify(newSpec, null, 2)
        .replace(/"/g, "")
        .replace(/:/g, ": ")
        .replace(/,\n/g, "\n")
        .replace(/{\n/g, "\n")
        .replace(/}\n/g, "\n")
        .replace(/\[\n/g, "\n")
        .replace(/\]\n/g, "\n");
}

function processWidget(widgetName: string, specName: string): boolean {
    try {
        console.log(`Processing ${widgetName}...`);

        const widgetDir = join("widgets", widgetName);
        const specFile = join("specs/props", `${specName}.yaml`);
        const packageJsonPath = join(widgetDir, "package.json");

        if (!existsSync(widgetDir)) {
            console.log(`  ✗ Widget directory not found: ${widgetDir}`);
            return false;
        }

        if (!existsSync(specFile)) {
            console.log(`  ✗ Spec file not found: ${specFile}`);
            return false;
        }

        // Read package.json to get widget info
        const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
        const widgetInfo = {
            widgetName: packageJson.widgetName,
            description: packageJson.description
        };

        // Step 1: Copy spec file
        const srcSpecPath = join(widgetDir, "src", `${specName}.yaml`);
        execSync(`cp "${specFile}" "${srcSpecPath}"`);
        console.log(`  ✓ Copied spec file`);

        // Step 2: Install converter
        if (!packageJson.dependencies?.["@mendix/yaml-to-xml-converter"]) {
            execSync(`cd "${widgetDir}" && pnpm add --workspace @mendix/yaml-to-xml-converter`, { stdio: "pipe" });
            console.log(`  ✓ Installed converter`);
        } else {
            console.log(`  ✓ Converter already installed`);
        }

        // Step 3: Add update-xml script
        if (!packageJson.scripts?.["update-xml"]) {
            packageJson.scripts["update-xml"] = `yaml-to-xml src/${specName}.yaml src/${widgetInfo.widgetName}.xml`;
            writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4));
            console.log(`  ✓ Added update-xml script`);
        } else {
            console.log(`  ✓ update-xml script already exists`);
        }

        // Step 4: Read and convert old spec file
        const oldSpecContent = readFileSync(srcSpecPath, "utf8");
        const parsedSpec = parseYaml(oldSpecContent);

        // Check if it's already in new format
        if (parsedSpec && typeof parsedSpec === "object" && "widget" in parsedSpec) {
            console.log(`  ✓ Already in new format, updating widget ID`);
            const newSpec = parsedSpec as any;
            newSpec.widget.id = `com.mendix.finch.widget.${widgetInfo.widgetName}`;
            newSpec.widget.name = widgetInfo.widgetName;
            newSpec.widget.description = widgetInfo.description;
            writeFileSync(srcSpecPath, stringifyYaml(newSpec));
        } else {
            const oldSpec = parsedSpec as OldSpecFile;

            // Step 5: Convert to new format (simplified version)
            const newYamlContent = `widget:
  id: com.mendix.finch.widget.${widgetInfo.widgetName}
  name: ${widgetInfo.widgetName}
  description: ${widgetInfo.description}
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
${Object.entries(oldSpec)
    .map(
        ([key, spec]) => `      ${key}:
        type: ${spec.xml.type}
        caption: ${spec.caption}
        description: ${spec.description}
        required: ${spec.xml.required}${
            spec.default
                ? `
        default: ${spec.default}`
                : ""
        }${
            spec.xml.enumerationValues
                ? `
        enumerationValues:
${spec.xml.enumerationValues.map(ev => `          ${ev.key}: ${ev.key}`).join("\n")}`
                : ""
        }`
    )
    .join("\n        \n")}`;

            writeFileSync(srcSpecPath, newYamlContent);
            console.log(`  ✓ Converted YAML to new format`);
        }

        // Step 6: Test conversion
        execSync(`cd "${widgetDir}" && pnpm run update-xml`, { stdio: "pipe" });
        console.log(`  ✓ Generated XML file`);

        console.log(`  ✅ Successfully processed ${widgetName}`);
        return true;
    } catch (error) {
        console.log(`  ✗ Failed to process ${widgetName}: ${error}`);
        return false;
    }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: tsx process-widget.ts <widget-name> <spec-name>");
    console.log("   or: tsx process-widget.ts --batch <count>");
    process.exit(1);
}

if (args[0] === "--batch") {
    const count = parseInt(args[1]) || 10;
    console.log(`Processing next ${count} widgets...`);

    const widgetList = readFileSync("widget_list.txt", "utf8")
        .trim()
        .split("\n")
        .map(line => line.split(","));

    let processed = 0;
    let failed = 0;

    for (let i = 0; i < Math.min(count, widgetList.length); i++) {
        const [widgetName, specName] = widgetList[i];
        if (processWidget(widgetName, specName)) {
            processed++;
        } else {
            failed++;
        }
    }

    console.log(`\nBatch processing complete:`);
    console.log(`Successfully processed: ${processed} widgets`);
    console.log(`Failed: ${failed} widgets`);
} else {
    const [widgetName, specName] = args;
    processWidget(widgetName, specName);
}
