# YAML to XML Widget Converter

This script converts YAML widget definitions to Mendix XML format for pluggable widgets.

## Usage

```bash
# Convert YAML to XML and output to console
npx tsx scripts/convert-props.ts input.yaml

# Convert YAML to XML and save to file
npx tsx scripts/convert-props.ts input.yaml output.xml
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

## Examples

See `scripts/test-widget.yaml` for a complete example that generates the same XML as `example.xml`.

## Key Simplifications

The YAML syntax provides several simplifications over the raw XML:

1. **Flattened Attributes** - Widget attributes are direct key-value pairs
2. **Simplified Enumerations** - Use key-value objects instead of verbose XML
3. **Array Syntax** - Use arrays for selection types and attribute types
4. **Nested Structure** - Properties are grouped by their natural hierarchy
5. **Type Safety** - TypeScript interfaces ensure correct structure

## Conversion Rules

The converter follows these rules from `xml-js.txt`:

- YAML objects become XML elements
- YAML arrays become XML element lists
- YAML key-value pairs become XML attributes
- Special handling for `_attributes`, `_text`, and nested structures
