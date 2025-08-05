#!/usr/bin/env tsx

import { parse } from "yaml";
import convert from "xml-js";
import { readFileSync } from "fs";

// Test YAML input that should generate the expected XML
const testYaml = `
widget:
  id: com.mendix.widget.web.datagrid.Datagrid
  name: Data grid 2
  description: ""
  pluginWidget: true
  offlineCapable: true
  studioProCategory: Data containers
  studioCategory: Data Containers
  helpUrl: https://docs.mendix.com/appstore/modules/data-grid-2
  
  properties:
    General:
      advanced:
        type: boolean
        default: false
        caption: Enable advanced options
        description: ""
      
      datasource:
        type: datasource
        isList: true
        caption: Data source
        description: ""
      
      refreshInterval:
        type: integer
        default: 0
        caption: Refresh time (in seconds)
        description: ""
      
      itemSelection:
        type: selection
        dataSource: datasource
        caption: Selection
        description: ""
        selectionTypes: [None, Single, Multi]
      
      itemSelectionMethod:
        type: enumeration
        default: checkbox
        caption: Selection method
        description: ""
        enumerationValues:
          checkbox: Checkbox
          rowClick: Row click
      
      itemSelectionMode:
        type: enumeration
        default: clear
        caption: Toggle on click
        description: Defines item selection behavior.
        enumerationValues:
          toggle: Yes
          clear: No
      
      showSelectAllToggle:
        type: boolean
        default: true
        caption: Show (un)check all toggle
        description: Show a checkbox in the grid header to check or uncheck multiple items.
      
      loadingType:
        type: enumeration
        default: spinner
        required: true
        caption: Loading type
        description: ""
        enumerationValues:
          spinner: Spinner
          skeleton: Skeleton
      
      refreshIndicator:
        type: boolean
        default: false
        caption: Show refresh indicator
        description: Show a refresh indicator when the data is being loaded.
      
      Columns:
        columns:
          type: object
          isList: true
          caption: Columns
          description: ""
          properties:
            General:
              showContentAs:
                type: enumeration
                default: attribute
                caption: Show
                description: ""
                enumerationValues:
                  attribute: Attribute
                  dynamicText: Dynamic text
                  customContent: Custom content
              
              attribute:
                type: attribute
                dataSource: ../datasource
                required: false
                caption: Attribute
                description: Attribute is required if the column can be sorted or filtered
                attributeTypes: [String, AutoNumber, Boolean, DateTime, Decimal, Enum, Integer, Long]
                associationTypes: [Reference, ReferenceSet]
              
              content:
                type: widgets
                dataSource: ../datasource
                required: false
                caption: Custom content
                description: ""
              
              dynamicText:
                type: textTemplate
                dataSource: ../datasource
                required: false
                caption: Dynamic text
                description: ""
              
              exportValue:
                type: textTemplate
                dataSource: ../datasource
                required: false
                caption: Export value
                description: ""
              
              header:
                type: textTemplate
                required: false
                caption: Caption
                description: ""
              
              tooltip:
                type: textTemplate
                required: false
                dataSource: ../datasource
                caption: Tooltip
                description: ""
              
              filter:
                type: widgets
                required: false
                caption: Filter
                description: ""
              
              visible:
                type: expression
                required: true
                default: true
                caption: Visible
                description: ""
                returnType: Boolean
            
            "Column capabilities":
              sortable:
                type: boolean
                default: true
                caption: Can sort
                description: ""
              
              resizable:
                type: boolean
                default: true
                caption: Can resize
                description: ""
              
              draggable:
                type: boolean
                default: true
                caption: Can reorder
                description: ""
              
              hidable:
                type: enumeration
                default: yes
                caption: Can hide
                description: ""
                enumerationValues:
                  yes: Yes
                  hidden: Yes, hidden by default
                  no: No
              
              allowEventPropagation:
                type: boolean
                default: true
                caption: Allow row events
                description: If set to yes, then all default events on the row, such as "on click" or selection, will be triggered when the user interacts with custom content.
            
            Appearance:
              width:
                type: enumeration
                default: autoFill
                caption: Column width
                description: ""
                enumerationValues:
                  autoFill: Auto-fill
                  autoFit: Auto-fit content
                  manual: Manual
              
              minWidth:
                type: enumeration
                default: auto
                caption: Min width
                description: ""
                enumerationValues:
                  auto: Auto
                  minContent: Set by content
                  manual: Manual
              
              minWidthLimit:
                type: integer
                default: 100
                caption: Min width value (px)
                description: ""
              
              size:
                type: integer
                default: 1
                caption: Column size
                description: ""
              
              alignment:
                type: enumeration
                default: left
                caption: Alignment
                description: ""
                enumerationValues:
                  left: Left
                  center: Center
                  right: Right
              
              columnClass:
                type: expression
                required: false
                dataSource: ../datasource
                caption: Dynamic cell class
                description: ""
                returnType: String
              
              wrapText:
                type: boolean
                default: false
                caption: Wrap text
                description: ""
        
        columnsFilterable:
          type: boolean
          default: true
          caption: Show column filters
          description: ""
`;

// Function to convert YAML structure to XML-compatible structure
function convertYamlToXmlStructure(yamlData: any): any {
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
                pluginWidget: widget.pluginWidget,
                offlineCapable: widget.offlineCapable,
                xmlns: "http://www.mendix.com/widget/1.0/",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation":
                    "http://www.mendix.com/widget/1.0/ ../../../../node_modules/mendix/custom_widget.xsd"
            },
            name: widget.name,
            description: widget.description,
            studioProCategory: widget.studioProCategory,
            studioCategory: widget.studioCategory,
            helpUrl: widget.helpUrl,
            properties: {
                propertyGroup: []
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
                propertyGroup: []
            };

            for (const [subGroupName, subGroupProps] of Object.entries(groupProps as any)) {
                if (subGroupName === "properties") {
                    // This is a nested object with properties
                    const subPropertyGroup = {
                        _attributes: {
                            caption: subGroupName
                        },
                        property: []
                    };

                    for (const [propName, propData] of Object.entries(subGroupProps as any)) {
                        const property = convertPropertyToXml(propName, propData as any);
                        subPropertyGroup.property.push(property);
                    }

                    propertyGroup.propertyGroup.push(subPropertyGroup);
                } else {
                    // This is a direct property
                    const property = convertPropertyToXml(subGroupName, subGroupProps as any);
                    propertyGroup.propertyGroup.push({
                        _attributes: {
                            caption: subGroupName
                        },
                        property: [property]
                    });
                }
            }

            result.widget.properties.propertyGroup.push(propertyGroup);
        }
    }

    return result;
}

function convertPropertyToXml(propName: string, propData: any): any {
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

    // Handle nested properties
    if (propData.properties) {
        property.properties = {
            propertyGroup: []
        };

        for (const [nestedGroupName, nestedGroupProps] of Object.entries(propData.properties)) {
            const nestedPropertyGroup = {
                _attributes: {
                    caption: nestedGroupName
                },
                property: []
            };

            for (const [nestedPropName, nestedPropData] of Object.entries(nestedGroupProps as any)) {
                const nestedProperty = convertPropertyToXml(nestedPropName, nestedPropData as any);
                nestedPropertyGroup.property.push(nestedProperty);
            }

            property.properties.propertyGroup.push(nestedPropertyGroup);
        }
    }

    return property;
}

// Test the conversion
console.log("Testing YAML to XML conversion...");
const parsedYaml = parse(testYaml);
const xmlStructure = convertYamlToXmlStructure(parsedYaml);
const output = convert.js2xml(xmlStructure, { compact: true, spaces: 4 });

console.log("Generated XML:");
console.log(output);

// Read the expected result for comparison
const expectedXml = readFileSync("example.xml", "utf-8");
console.log("\nExpected XML:");
console.log(expectedXml);
