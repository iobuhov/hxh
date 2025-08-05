#!/usr/bin/env node

import { convertYamlFileToXml } from "./index.js";

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath) {
    console.error("Please provide an input YAML file path as the first argument.");
    console.error("Usage: yaml-to-xml <input.yaml> [output.xml]");
    process.exit(1);
}

try {
    const result = convertYamlFileToXml(inputPath, outputPath);
    if (!outputPath) {
        console.log(result);
    } else {
        console.log(`Converted ${inputPath} to ${outputPath}`);
    }
} catch (error) {
    console.error("Error converting YAML to XML:", error);
    process.exit(1);
} 