import convert from "xml-js";
import { YamlData, PropertyData } from "./types.js";

export function convertYamlToXmlStructure(yamlData: YamlData): any {
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

export function convertPropertyToXml(propName: string, propData: PropertyData): any {
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