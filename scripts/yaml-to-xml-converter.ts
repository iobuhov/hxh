#!/usr/bin/env tsx

import { parse } from "yaml";
import convert from "xml-js";
import { readFileSync, writeFileSync } from "fs";

interface PropertyData {
    type: string;
    caption: string;
    description?: string;
    default?: any;
    required?: boolean;
    isList?: boolean;
    dataSource?: string;
    enumerationValues?: Record<string, string>;
    selectionTypes?: string[];
    attributeTypes?: string[];
    associationTypes?: string[];
    returnType?: string;
    properties?: Record<string, Record<string, PropertyData>>;
    onChange?: string;
    translations?: Record<string, string>;
}

interface WidgetData {
    id: string;
    name: string;
    description?: string;
    pluginWidget?: boolean;
    offlineCapable?: boolean;
    studioProCategory?: string;
    studioCategory?: string;
    helpUrl?: string;
    properties?: Record<string, Record<string, PropertyData>>;
}

interface YamlData {
    widget: WidgetData;
}

function convertYamlToXmlStructure(yamlData: YamlData): any {
    const widget = yamlData.widget;

    // Start with the widget element
    const result = {
        _declaration: {
            _attributes: {
                version: "1.0",
                encoding: "utf-8"
            }
        },
        widget: {
            _attributes: {
                id: widget.id,
                pluginWidget: widget.pluginWidget || false,
                offlineCapable: widget.offlineCapable || false,
                xmlns: "http://www.mendix.com/widget/1.0/",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation":
                    "http://www.mendix.com/widget/1.0/ ../../../../node_modules/mendix/custom_widget.xsd"
            },
            name: widget.name,
            description: widget.description || "",
            studioProCategory: widget.studioProCategory,
            studioCategory: widget.studioCategory,
            helpUrl: widget.helpUrl,
            properties: {
                propertyGroup: [] as any[]
            }
        }
    };

    // Convert properties
    if (widget.properties) {
        for (const [groupName, groupProps] of Object.entries(widget.properties)) {
            const propertyGroup = {
                _attributes: {
                    caption: groupName
                },
                propertyGroup: [] as any[]
            };

            for (const [subGroupName, subGroupProps] of Object.entries(groupProps)) {
                if (typeof subGroupProps === "object" && subGroupProps !== null && "type" in subGroupProps) {
                    // This is a direct property
                    const property = convertPropertyToXml(subGroupName, subGroupProps as PropertyData);
                    propertyGroup.propertyGroup.push({
                        _attributes: {
                            caption: subGroupName
                        },
                        property: [property]
                    });
                } else {
                    // This is a nested property group
                    const subPropertyGroup = {
                        _attributes: {
                            caption: subGroupName
                        },
                        property: [] as any[]
                    };

                    for (const [propName, propData] of Object.entries(subGroupProps as Record<string, PropertyData>)) {
                        const property = convertPropertyToXml(propName, propData);
                        subPropertyGroup.property.push(property);
                    }

                    propertyGroup.propertyGroup.push(subPropertyGroup);
                }
            }

            result.widget.properties.propertyGroup.push(propertyGroup);
        }
    }

    return result;
}

function convertPropertyToXml(propName: string, propData: PropertyData): any {
    const property: any = {
        _attributes: {
            key: propName,
            type: propData.type
        }
    };

    // Add optional attributes
    if (propData.isList) property._attributes.isList = propData.isList;
    if (propData.required !== undefined) property._attributes.required = propData.required;
    if (propData.default !== undefined) property._attributes.defaultValue = propData.default;
    if (propData.dataSource) property._attributes.dataSource = propData.dataSource;
    if (propData.onChange) property._attributes.onChange = propData.onChange;

    // Add child elements
    property.caption = propData.caption;
    property.description = propData.description || "";

    // Handle enumeration values
    if (propData.enumerationValues) {
        property.enumerationValues = {
            enumerationValue: Object.entries(propData.enumerationValues).map(([key, value]) => ({
                _attributes: { key },
                _text: value
            }))
        };
    }

    // Handle selection types
    if (propData.selectionTypes) {
        property.selectionTypes = {
            selectionType: propData.selectionTypes.map((type: string) => ({
                _attributes: { name: type }
            }))
        };
    }

    // Handle attribute types
    if (propData.attributeTypes) {
        property.attributeTypes = {
            attributeType: propData.attributeTypes.map((type: string) => ({
                _attributes: { name: type }
            }))
        };
    }

    // Handle association types
    if (propData.associationTypes) {
        property.associationTypes = {
            associationType: propData.associationTypes.map((type: string) => ({
                _attributes: { name: type }
            }))
        };
    }

    // Handle return type
    if (propData.returnType) {
        property.returnType = {
            _attributes: { type: propData.returnType }
        };
    }

    // Handle translations
    if (propData.translations) {
        property.translations = {
            translation: Object.entries(propData.translations).map(([lang, text]) => ({
                _attributes: { lang },
                _text: text
            }))
        };
    }

    // Handle nested properties
    if (propData.properties) {
        property.properties = {
            propertyGroup: [] as any[]
        };

        for (const [nestedGroupName, nestedGroupProps] of Object.entries(propData.properties)) {
            const nestedPropertyGroup = {
                _attributes: {
                    caption: nestedGroupName
                },
                property: [] as any[]
            };

            for (const [nestedPropName, nestedPropData] of Object.entries(nestedGroupProps)) {
                const nestedProperty = convertPropertyToXml(nestedPropName, nestedPropData);
                nestedPropertyGroup.property.push(nestedProperty);
            }

            property.properties.propertyGroup.push(nestedPropertyGroup);
        }
    }

    return property;
}

function convertYamlFileToXml(inputPath: string, outputPath?: string): string {
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

// CLI interface

if (import.meta.url === `file://${process.argv[1]}`) {
    const inputPath = process.argv[2];
    const outputPath = process.argv[3];

    if (!inputPath) {
        console.error("Please provide an input YAML file path as the first argument.");
        console.error("Usage: tsx yaml-to-xml-converter.ts <input.yaml> [output.xml]");
        process.exit(1);
    }

    try {
        const result = convertYamlFileToXml(inputPath, outputPath);
        console.log(result);
    } catch (error) {
        console.error("Error converting YAML to XML:", error);
        process.exit(1);
    }
}

export { convertYamlFileToXml, convertYamlToXmlStructure, convertPropertyToXml };
