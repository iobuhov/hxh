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
        _comment: "This is an auto-generated XML file. Do not edit manually.",
        widget: {
            _attributes: {
                id: widget.id,
                pluginWidget: widget.pluginWidget || false,
                offlineCapable: widget.offlineCapable || false,
                xmlns: "http://www.mendix.com/widget/1.0/",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation":
                    "http://www.mendix.com/widget/1.0/ ../../../../node_modules/mendix/custom_widget.xsd"
            } as any,
            name: widget.name,
            description: widget.description || "",
            studioProCategory: widget.studioProCategory,
            studioCategory: widget.studioCategory,
            helpUrl: widget.helpUrl,
            properties: {
                propertyGroup: [] as any[]
            }
        } as any
    };

    // Add optional widget attributes
    if (widget.mobile !== undefined) result.widget._attributes.mobile = widget.mobile;
    if (widget.supportedPlatform) result.widget._attributes.supportedPlatform = widget.supportedPlatform;
    if (widget.needsEntityContext !== undefined)
        result.widget._attributes.needsEntityContext = widget.needsEntityContext;

    // Add phonegap configuration
    if (widget.phonegap) {
        result.widget.phonegap = {
            _attributes: {
                enabled: widget.phonegap.enabled
            }
        };
    }

    // Convert properties
    if (widget.properties) {
        for (const [groupName, groupProps] of Object.entries(widget.properties)) {
            const propertyGroup: any = {
                _attributes: {
                    caption: groupName
                },
                property: [] as any[],
                systemProperty: [] as any[],
                propertyGroup: [] as any[]
            };

            for (const [propName, propData] of Object.entries(groupProps)) {
                if (typeof propData === "object" && propData !== null) {
                    if ("type" in propData) {
                        if (propData.type === "systemProperty") {
                            // Handle system property
                            const systemProperty: any = {
                                _attributes: {
                                    key: propName
                                }
                            };
                            if (propData.category) {
                                systemProperty.category = propData.category;
                            }
                            propertyGroup.systemProperty.push(systemProperty);
                        } else {
                            // This is a regular property - add it directly to the group
                            const property = convertPropertyToXml(propName, propData as PropertyData);
                            propertyGroup.property.push(property);
                        }
                    } else {
                        // This is a sub-group - recursively handle it
                        const subGroup: any = {
                            _attributes: {
                                caption: propName
                            },
                            property: [] as any[],
                            systemProperty: [] as any[]
                        };

                        for (const [subPropName, subPropData] of Object.entries(
                            propData as Record<string, PropertyData>
                        )) {
                            if (typeof subPropData === "object" && subPropData !== null && "type" in subPropData) {
                                if (subPropData.type === "systemProperty") {
                                    // Handle system property in sub-group
                                    const systemProperty: any = {
                                        _attributes: {
                                            key: subPropName
                                        }
                                    };
                                    if (subPropData.category) {
                                        systemProperty.category = subPropData.category;
                                    }
                                    subGroup.systemProperty.push(systemProperty);
                                } else {
                                    // This is a regular property in sub-group
                                    const property = convertPropertyToXml(subPropName, subPropData as PropertyData);
                                    subGroup.property.push(property);
                                }
                            }
                        }

                        // Remove empty arrays from sub-group
                        if (subGroup.property.length === 0) {
                            delete subGroup.property;
                        }
                        if (subGroup.systemProperty.length === 0) {
                            delete subGroup.systemProperty;
                        }

                        propertyGroup.propertyGroup.push(subGroup);
                    }
                }
            }

            // Remove empty arrays
            if (propertyGroup.property.length === 0) {
                delete propertyGroup.property;
            }
            if (propertyGroup.systemProperty.length === 0) {
                delete propertyGroup.systemProperty;
            }
            if (propertyGroup.propertyGroup.length === 0) {
                delete propertyGroup.propertyGroup;
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
    if (propData.multiline) property._attributes.multiline = propData.multiline;
    if (propData.setLabel) property._attributes.setLabel = propData.setLabel;
    if (propData.isLinked) property._attributes.isLinked = propData.isLinked;
    if (propData.isMetaData) property._attributes.isMetaData = propData.isMetaData;
    if (propData.defaultType) property._attributes.defaultType = propData.defaultType;
    if (propData.parameterIsList) property._attributes.parameterIsList = propData.parameterIsList;
    if (propData.isPath) property._attributes.isPath = propData.isPath;
    if (propData.pathType) property._attributes.pathType = propData.pathType;
    if (propData.allowNonPersistableEntities)
        property._attributes.allowNonPersistableEntities = propData.allowNonPersistableEntities;
    if (propData.entityProperty) property._attributes.entityProperty = propData.entityProperty;

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
        if (propData.returnTypeIsList) property.returnType._attributes.isList = propData.returnTypeIsList;
        if (propData.returnTypeEntityProperty)
            property.returnType._attributes.entityProperty = propData.returnTypeEntityProperty;
        if (propData.returnTypeAssignableTo)
            property.returnType._attributes.assignableTo = propData.returnTypeAssignableTo;
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

    // Handle action variables
    if (propData.actionVariables) {
        property.actionVariables = {
            actionVariable: propData.actionVariables.map(variable => ({
                _attributes: {
                    key: variable.key,
                    type: variable.type,
                    caption: variable.caption
                }
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
