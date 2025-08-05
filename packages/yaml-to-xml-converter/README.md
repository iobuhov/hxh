# @mendix/yaml-to-xml-converter

Convert YAML widget definitions to Mendix XML format for pluggable widgets.

## Installation

```bash
npm install @mendix/yaml-to-xml-converter
```

## Usage

### CLI

```bash
# Convert YAML to XML and output to console
npx yaml-to-xml input.yaml

# Convert YAML to XML and save to file
npx yaml-to-xml input.yaml output.xml
```

### Programmatic

```typescript
import { convertYamlFileToXml, convertYamlStringToXml } from '@mendix/yaml-to-xml-converter';

// Convert from file
const xml = convertYamlFileToXml('input.yaml', 'output.xml');

// Convert from string
const yamlString = `
widget:
  id: com.mendix.widget.web.example.Example
  name: Example Widget
  properties:
    General:
      myProperty:
        type: string
        caption: My Property
`;

const xml = convertYamlStringToXml(yamlString);
```

## YAML Syntax

The YAML structure follows a simplified format that maps to the Mendix XML schema:

```yaml
widget:
  id: com.mendix.widget.web.example.Example
  name: Example Widget
  description: "Widget description"
  pluginWidget: true
  offlineCapable: true
  studioProCategory: "Data containers"
  studioCategory: "Data Containers"
  helpUrl: "https://docs.mendix.com/..."
  
  properties:
    General:
      myProperty:
        type: string
        caption: My Property
        description: "Property description"
        default: "default value"
        required: false
```

### Property Types

- `string` - Text input
- `boolean` - Checkbox
- `integer` - Number input
- `enumeration` - Dropdown with predefined values
- `selection` - Selection control
- `attribute` - Entity attribute
- `action` - Microflow/Nanoflow
- `widgets` - Custom content
- `textTemplate` - Dynamic text
- `expression` - Expression
- `object` - Complex object with nested properties

### Property Attributes

- `type` - The property type (required)
- `caption` - Display name in Studio Pro (required)
- `description` - Help text (optional)
- `default` - Default value (optional)
- `required` - Whether the property is required (default: true)
- `isList` - Whether the property is a list (default: false)
- `dataSource` - Reference to another property (optional)
- `onChange` - Property to trigger on change (optional)

### Enumeration Values

```yaml
myEnum:
  type: enumeration
  caption: My Enum
  enumerationValues:
    value1: Display Name 1
    value2: Display Name 2
```

### Selection Types

```yaml
mySelection:
  type: selection
  caption: My Selection
  selectionTypes: [None, Single, Multi]
```

### Attribute Types

```yaml
myAttribute:
  type: attribute
  caption: My Attribute
  attributeTypes: [String, Boolean, Integer]
  associationTypes: [Reference, ReferenceSet]
```

### Nested Properties

For complex objects with nested properties:

```yaml
myObject:
  type: object
  isList: true
  caption: My Object
  properties:
    General:
      name:
        type: string
        caption: Name
      value:
        type: integer
        caption: Value
```

### Translations

```yaml
myText:
  type: textTemplate
  caption: My Text
  translations:
    en_US: English text
    nl_NL: Dutch text
```

### Return Types

For expression properties:

```yaml
myExpression:
  type: expression
  caption: My Expression
  returnType: Boolean
```

## API Reference

### `convertYamlFileToXml(inputPath: string, outputPath?: string): string`

Converts a YAML file to XML format.

- `inputPath` - Path to the input YAML file
- `outputPath` - Optional path to save the output XML file
- Returns the XML string

### `convertYamlStringToXml(yamlString: string): string`

Converts a YAML string to XML format.

- `yamlString` - YAML string to convert
- Returns the XML string

### `convertYamlToXmlStructure(yamlData: YamlData): any`

Converts parsed YAML data to XML structure.

- `yamlData` - Parsed YAML data
- Returns the XML structure object

### `convertPropertyToXml(propName: string, propData: PropertyData): any`

Converts a single property to XML format.

- `propName` - Name of the property
- `propData` - Property data object
- Returns the XML property object

## Types

### `YamlData`

```typescript
interface YamlData {
  widget: WidgetData;
}
```

### `WidgetData`

```typescript
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
```

### `PropertyData`

```typescript
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
```

## License

Apache-2.0 