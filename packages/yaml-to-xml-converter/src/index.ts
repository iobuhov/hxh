import { parse } from "yaml";
import convert from "xml-js";
import { readFileSync, writeFileSync } from "fs";
import { YamlData } from "./types.js";
import { convertYamlToXmlStructure, convertPropertyToXml } from "./converter.js";

export { convertYamlToXmlStructure, convertPropertyToXml } from "./converter.js";
export type { YamlData, PropertyData, WidgetData } from "./types.js";

export function convertYamlFileToXml(inputPath: string, outputPath?: string): string {
    const fileContent = readFileSync(inputPath, "utf-8");
    const parsed = parse(fileContent) as YamlData;
    const xmlStructure = convertYamlToXmlStructure(parsed);
    const output = convert.js2xml(xmlStructure, {
        compact: true,
        spaces: 4
    });

    // Fix self-closing tags to have space before slash
    let fixedOutput = output.replace(/\/>/g, " />");

    // Fix XML declaration to match expected format
    fixedOutput = fixedOutput.replace(
        '<?xml version="1.0" encoding="utf-8"?>',
        '<?xml version="1.0" encoding="utf-8" ?>'
    );

    if (outputPath) {
        writeFileSync(outputPath, fixedOutput, "utf-8");
    }

    return fixedOutput;
}

export function convertYamlStringToXml(yamlString: string): string {
    const parsed = parse(yamlString) as YamlData;
    const xmlStructure = convertYamlToXmlStructure(parsed);
    const output = convert.js2xml(xmlStructure, {
        compact: true,
        spaces: 4
    });

    // Fix self-closing tags to have space before slash
    let fixedOutput = output.replace(/\/>/g, " />");

    // Fix XML declaration to match expected format
    fixedOutput = fixedOutput.replace(
        '<?xml version="1.0" encoding="utf-8"?>',
        '<?xml version="1.0" encoding="utf-8" ?>'
    );

    return fixedOutput;
} 