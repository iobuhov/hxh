import test from "ava";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { convertYamlStringToXml } from "../dist/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to load fixture
function loadFixture(name) {
    const fixturePath = join(__dirname, "fixtures", `${name}.yaml`);
    return readFileSync(fixturePath, "utf-8");
}

// Helper function to assert XML contains expected elements
function assertXmlContains(t, xml, ...expectedElements) {
    for (const element of expectedElements) {
        t.true(xml.includes(element), `XML should contain "${element}"`);
    }
}

// Helper function to assert XML structure
function assertXmlStructure(t, xml) {
    // Basic XML structure checks
    t.true(xml.startsWith('<?xml version="1.0" encoding="utf-8" ?>'), "XML should start with correct declaration");
    t.true(xml.includes("<widget"), "XML should contain widget element");
    t.true(xml.includes("</widget>"), "XML should contain closing widget element");
    t.true(xml.includes("<properties>"), "XML should contain properties element");
    t.true(xml.includes("</properties>"), "XML should contain closing properties element");
}

// Snapshot tests for all property types
test("string property snapshot", t => {
    const yaml = loadFixture("string");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("boolean property snapshot", t => {
    const yaml = loadFixture("boolean");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("integer property snapshot", t => {
    const yaml = loadFixture("integer");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("decimal property snapshot", t => {
    const yaml = loadFixture("decimal");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("enumeration property snapshot", t => {
    const yaml = loadFixture("enumeration");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("selection property snapshot", t => {
    const yaml = loadFixture("selection");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("attribute property snapshot", t => {
    const yaml = loadFixture("attribute");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("action property snapshot", t => {
    const yaml = loadFixture("action");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("association property snapshot", t => {
    const yaml = loadFixture("association");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("datasource property snapshot", t => {
    const yaml = loadFixture("datasource");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("entity property snapshot", t => {
    const yaml = loadFixture("entity");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("entityConstraint property snapshot", t => {
    const yaml = loadFixture("entityConstraint");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("expression property snapshot", t => {
    const yaml = loadFixture("expression");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("file property snapshot", t => {
    const yaml = loadFixture("file");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("form property snapshot", t => {
    const yaml = loadFixture("form");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("icon property snapshot", t => {
    const yaml = loadFixture("icon");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("image property snapshot", t => {
    const yaml = loadFixture("image");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("microflow property snapshot", t => {
    const yaml = loadFixture("microflow");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("nanoflow property snapshot", t => {
    const yaml = loadFixture("nanoflow");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("object property snapshot", t => {
    const yaml = loadFixture("object");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("textTemplate property snapshot", t => {
    const yaml = loadFixture("textTemplate");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("widgets property snapshot", t => {
    const yaml = loadFixture("widgets");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("translatableString property snapshot", t => {
    const yaml = loadFixture("translatableString");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("complex widget snapshot", t => {
    const yaml = loadFixture("complex");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

// Structural tests to ensure basic XML validity
test("should convert basic string property", t => {
    const yaml = loadFixture("string");
    const xml = convertYamlStringToXml(yaml);

    assertXmlStructure(t, xml);
    assertXmlContains(
        t,
        xml,
        'type="string"',
        'key="myString"',
        "<caption>My String</caption>",
        'defaultValue="Hello World"',
        'required="false"'
    );
});

test("should convert enumeration property", t => {
    const yaml = loadFixture("enumeration");
    const xml = convertYamlStringToXml(yaml);

    assertXmlStructure(t, xml);
    assertXmlContains(
        t,
        xml,
        'type="enumeration"',
        'key="myEnumeration"',
        "<caption>My Enumeration</caption>",
        'defaultValue="option1"',
        "<enumerationValues>",
        '<enumerationValue key="option1">Option 1</enumerationValue>',
        '<enumerationValue key="option2">Option 2</enumerationValue>',
        '<enumerationValue key="option3">Option 3</enumerationValue>'
    );
});

test("should convert object property with nested properties", t => {
    const yaml = loadFixture("object");
    const xml = convertYamlStringToXml(yaml);

    assertXmlStructure(t, xml);
    assertXmlContains(
        t,
        xml,
        'type="object"',
        'key="myObject"',
        "<caption>My Object</caption>",
        'isList="true"',
        "<properties>",
        '<propertyGroup caption="General">',
        'key="name"',
        'type="string"',
        'key="value"',
        'type="integer"'
    );
});

test("should handle self-closing tags correctly", t => {
    const yaml = loadFixture("string");
    const xml = convertYamlStringToXml(yaml);

    // Check that self-closing tags have space before slash
    t.true(xml.includes("<helpUrl />"));
    t.false(xml.includes("<helpUrl/>"));
});

test("should handle XML declaration correctly", t => {
    const yaml = loadFixture("string");
    const xml = convertYamlStringToXml(yaml);

    // Check XML declaration format
    t.true(xml.startsWith('<?xml version="1.0" encoding="utf-8" ?>'));
    t.false(xml.startsWith('<?xml version="1.0" encoding="utf-8"?>'));
});

// Test for auto-generated comment
test("should include auto-generated comment in XML output", t => {
    const yaml = loadFixture("string");
    const xml = convertYamlStringToXml(yaml);

    // Check that the auto-generated comment is present
    t.true(xml.includes("<!--This is an auto-generated XML file. Do not edit manually.-->"));

    // Check that the comment appears after the XML declaration
    const lines = xml.split("\n");
    t.true(lines[0].startsWith('<?xml version="1.0" encoding="utf-8"'));
    t.true(lines[1].includes("<!--This is an auto-generated XML file. Do not edit manually.-->"));
});

// Edge case tests with inline YAML
test("inline multiline attribute snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.Multiline
  name: Multiline Test
  description: "Test widget with multiline property"
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
      myMultiline:
        type: string
        caption: My Multiline
        description: "A test multiline property"
        multiline: true
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('multiline="true"'));
    t.snapshot(xml, "multiline attribute");
});

test("inline onChange attribute snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.OnChange
  name: OnChange Test
  description: "Test widget with onChange property"
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
      myOnChange:
        type: string
        caption: My OnChange
        description: "A test onChange property"
        onChange: onChangeHandler
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('onChange="onChangeHandler"'));
    t.snapshot(xml, "onChange attribute");
});

test("inline returnType with attributes snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.ReturnType
  name: ReturnType Test
  description: "Test widget with returnType"
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
      myReturnType:
        type: expression
        caption: My ReturnType
        description: "A test returnType"
        returnType: String
        returnTypeIsList: true
        returnTypeEntityProperty: ../entity
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('<returnType type="String" isList="true" entityProperty="../entity" />'));
    t.snapshot(xml, "returnType with attributes");
});

test("inline actionVariables snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.ActionVariables
  name: ActionVariables Test
  description: "Test widget with actionVariables"
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
      myActionVariables:
        type: action
        caption: My ActionVariables
        description: "A test actionVariables"
        actionVariables:
          - key: param1
            type: String
            caption: Parameter 1
          - key: param2
            type: Boolean
            caption: Parameter 2
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes("<actionVariables>"));
    t.true(xml.includes('<actionVariable key="param1" type="String" caption="Parameter 1" />'));
    t.true(xml.includes('<actionVariable key="param2" type="Boolean" caption="Parameter 2" />'));
    t.snapshot(xml, "actionVariables");
});

test("inline systemProperty snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.SystemProperty
  name: SystemProperty Test
  description: "Test widget with systemProperty"
  pluginWidget: true
  offlineCapable: false
  
  properties:
    General:
      Label:
        type: systemProperty
        category: General
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('<systemProperty key="Label">'));
    t.true(xml.includes("<category>General</category>"));
    t.snapshot(xml, "systemProperty");
});

test("inline phonegap configuration snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.Phonegap
  name: Phonegap Test
  description: "Test widget with phonegap"
  pluginWidget: true
  offlineCapable: false
  phonegap:
    enabled: true
  
  properties:
    General:
      myProperty:
        type: string
        caption: My Property
        description: "A test property"
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('<phonegap enabled="true" />'));
    t.snapshot(xml, "phonegap configuration");
});

test("inline full widget metadata snapshot", t => {
    const yaml = `
widget:
  id: com.mendix.widget.web.test.FullMetadata
  name: Full Metadata Test
  description: "Test widget with all metadata"
  pluginWidget: true
  offlineCapable: true
  mobile: true
  supportedPlatform: All
  needsEntityContext: true
  studioProCategory: "Data containers"
  studioCategory: "Data Containers"
  helpUrl: "https://docs.mendix.com/test"
  
  properties:
    General:
      myProperty:
        type: string
        caption: My Property
        description: "A test property"
        required: false
`;
    const xml = convertYamlStringToXml(yaml);
    t.true(xml.includes('pluginWidget="true"'));
    t.true(xml.includes('offlineCapable="true"'));
    t.true(xml.includes('mobile="true"'));
    t.true(xml.includes('supportedPlatform="All"'));
    t.true(xml.includes('needsEntityContext="true"'));
    t.true(xml.includes("<studioProCategory>Data containers</studioProCategory>"));
    t.true(xml.includes("<studioCategory>Data Containers</studioCategory>"));
    t.true(xml.includes("<helpUrl>https://docs.mendix.com/test</helpUrl>"));
    t.snapshot(xml, "full widget metadata");
});

// Test for nested property groups
test("nested property groups snapshot", t => {
    const yaml = loadFixture("nested-groups");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("should handle deeply nested property groups", t => {
    const yaml = loadFixture("nested-groups");
    const xml = convertYamlStringToXml(yaml);

    assertXmlStructure(t, xml);

    // Check main property groups exist
    assertXmlContains(
        t,
        xml,
        '<propertyGroup caption="General">',
        '<propertyGroup caption="Advanced">',
        '<propertyGroup caption="Styling">'
    );

    // Check nested object properties
    assertXmlContains(t, xml, 'key="complexObject" type="object"', 'key="appearance" type="object"', "<properties>");

    // Check deeply nested property groups within objects
    assertXmlContains(
        t,
        xml,
        '<propertyGroup caption="Configuration">',
        '<propertyGroup caption="Actions">',
        '<propertyGroup caption="Colors">',
        '<propertyGroup caption="Typography">'
    );

    // Check specific nested properties
    assertXmlContains(
        t,
        xml,
        'key="name" type="string"',
        'key="priority" type="enumeration"',
        'key="onClickAction" type="action"',
        'key="primaryColor" type="string"',
        'key="fontSize" type="enumeration"'
    );

    // Check multiline attribute
    t.true(xml.includes('multiline="true"'));

    // Check action variables in nested actions
    assertXmlContains(
        t,
        xml,
        "<actionVariables>",
        '<actionVariable key="item" type="Object" caption="Current Item" />',
        '<actionVariable key="index" type="Integer" caption="Item Index" />'
    );

    // Check enumeration values in nested properties
    assertXmlContains(
        t,
        xml,
        '<enumerationValue key="low">Low Priority</enumerationValue>',
        '<enumerationValue key="critical">Critical Priority</enumerationValue>',
        '<enumerationValue key="xlarge">Extra Large</enumerationValue>'
    );
});

// Test for sub-groups (nested property groups within main property groups)
test("sub groups snapshot", t => {
    const yaml = loadFixture("sub-groups");
    const xml = convertYamlStringToXml(yaml);
    t.snapshot(xml);
});

test("should handle sub-groups within main property groups", t => {
    const yaml = loadFixture("sub-groups");
    const xml = convertYamlStringToXml(yaml);

    assertXmlStructure(t, xml);

    // Check main property groups exist
    assertXmlContains(
        t,
        xml,
        '<propertyGroup caption="General">',
        '<propertyGroup caption="Appearance">',
        '<propertyGroup caption="Behavior">',
        '<propertyGroup caption="Advanced">'
    );

    // Check sub-groups within General
    assertXmlContains(t, xml, '<propertyGroup caption="BasicSettings">', '<propertyGroup caption="DataSource">');

    // Check sub-groups within Appearance
    assertXmlContains(t, xml, '<propertyGroup caption="Layout">', '<propertyGroup caption="Theme">');

    // Check sub-groups within Behavior
    assertXmlContains(t, xml, '<propertyGroup caption="Events">', '<propertyGroup caption="Validation">');

    // Check sub-groups within Advanced
    assertXmlContains(t, xml, '<propertyGroup caption="Performance">', '<propertyGroup caption="Debug">');

    // Check direct properties in main groups (not in sub-groups)
    assertXmlContains(t, xml, 'key="widgetTitle" type="string"');

    // Check properties within sub-groups
    assertXmlContains(
        t,
        xml,
        'key="enabled" type="boolean"',
        'key="entity" type="entity"',
        'key="width" type="enumeration"',
        'key="colorScheme" type="enumeration"',
        'key="onClick" type="action"',
        'key="required" type="boolean"',
        'key="cacheEnabled" type="boolean"',
        'key="debugMode" type="boolean"'
    );

    // Check attribute types in DataSource sub-group
    assertXmlContains(
        t,
        xml,
        "<attributeTypes>",
        '<attributeType name="String" />',
        '<attributeType name="DateTime" />'
    );

    // Check action variables in Events sub-group
    assertXmlContains(
        t,
        xml,
        "<actionVariables>",
        '<actionVariable key="clickEvent" type="String" caption="Click Event Type" />'
    );

    // Check translations in Validation sub-group
    assertXmlContains(
        t,
        xml,
        "<translations>",
        '<translation lang="en_US">This field is required</translation>',
        '<translation lang="nl_NL">Dit veld is verplicht</translation>'
    );

    // Check enumeration values in various sub-groups
    assertXmlContains(
        t,
        xml,
        '<enumerationValue key="auto">Auto</enumerationValue>',
        '<enumerationValue key="full">Full Width (100%)</enumerationValue>',
        '<enumerationValue key="primary">Primary</enumerationValue>',
        '<enumerationValue key="trace">Trace</enumerationValue>'
    );

    // Check return type in expression property
    assertXmlContains(t, xml, '<returnType type="Boolean" />');
});
