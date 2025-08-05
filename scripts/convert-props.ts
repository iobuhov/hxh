#!/usr/bin/env tsx

import { convertYamlFileToXml } from "./yaml-to-xml-converter.js";

const path = process.argv[2];

if (!path) {
    console.error("Please provide a file path as the first argument.");
    console.error("Usage: tsx convert-props.ts <input.yaml> [output.xml]");
    process.exit(1);
}

const outputPath = process.argv[3];

try {
    const result = convertYamlFileToXml(path, outputPath);
    if (!outputPath) {
        console.log(result);
    } else {
        console.log(`Converted ${path} to ${outputPath}`);
    }
} catch (error) {
    console.error("Error converting YAML to XML:", error);
    process.exit(1);
}
