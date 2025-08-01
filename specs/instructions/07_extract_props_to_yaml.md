# 07 Extract Props to YAML

## Objective

Extract all component props from `mantine/apps/mantine.dev/src/.docgen/docgen.json` and convert them to YAML format for easier processing and documentation.

## Expected output

- All component props extracted as individual JSON files in `specs/props/`
- All JSON files converted to YAML format in `specs/props_yaml/`
- Each file contains props with: originalType, group, caption, description, and default values

## Steps

### Step 1: Create extraction script

Created `extract_props.js` to extract all components from docgen.json:

```javascript
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docgenPath = "mantine/apps/mantine.dev/src/.docgen/docgen.json";
const outputDir = "specs/props";

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    const docgenData = JSON.parse(fs.readFileSync(docgenPath, "utf8"));

    // Extract each component
    Object.keys(docgenData).forEach(componentName => {
        const componentData = docgenData[componentName];

        if (componentData && componentData.props) {
            // Convert the props to the format we want
            const formattedProps = {};

            Object.keys(componentData.props).forEach(propName => {
                const prop = componentData.props[propName];
                formattedProps[propName] = {
                    originalType: prop.type.name,
                    group: "General",
                    caption:
                        propName.charAt(0).toUpperCase() +
                        propName
                            .slice(1)
                            .replace(/([A-Z])/g, " $1")
                            .trim(),
                    description: prop.description.replace(/<code>/g, "").replace(/<\/code>/g, ""),
                    ...(prop.defaultValue && { default: prop.defaultValue.replace(/`/g, "") })
                };
            });

            // Create the output file
            const fileName = componentName.replace(/\./g, "_").toLowerCase() + ".json";
            const filePath = path.join(outputDir, fileName);

            fs.writeFileSync(filePath, JSON.stringify(formattedProps, null, 2));
            console.log(`Created ${fileName}`);
        }
    });

    console.log("All component props extracted successfully!");
} catch (error) {
    console.error("Error processing docgen.json:", error);
}
```

### Step 2: Run extraction script

```bash
node extract_props.js
```

**Output**: Successfully extracted 254 component files including:

- Core components (Button, Text, ActionIcon, etc.)
- Layout components (Grid, Stack, Container, etc.)
- Form components (Input, Select, Checkbox, etc.)
- Navigation components (Menu, Tabs, Pagination, etc.)
- Chart components (LineChart, BarChart, etc.)

### Step 3: Create YAML conversion script

Created `convert_to_yaml.js` to convert JSON files to YAML:

```javascript
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stringify } from "yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const propsDir = "specs/props";
const outputDir = "specs/props_yaml";

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    // Read all JSON files in the props directory
    const files = fs.readdirSync(propsDir).filter(file => file.endsWith(".json"));

    console.log(`Found ${files.length} JSON files to convert...`);

    files.forEach(file => {
        const jsonPath = path.join(propsDir, file);
        const yamlPath = path.join(outputDir, file.replace(".json", ".yaml"));

        // Read JSON file
        const jsonContent = fs.readFileSync(jsonPath, "utf8");
        const data = JSON.parse(jsonContent);

        // Convert to YAML
        const yamlContent = stringify(data, {
            indent: 2,
            lineWidth: 80
        });

        // Write YAML file
        fs.writeFileSync(yamlPath, yamlContent);
        console.log(`Converted ${file} to ${file.replace(".json", ".yaml")}`);
    });

    console.log("All files converted successfully!");
} catch (error) {
    console.error("Error converting files:", error);
}
```

### Step 4: Run YAML conversion

```bash
node convert_to_yaml.js
```

**Output**: Successfully converted all 254 JSON files to YAML format

## Results

### File Structure

- `specs/props/` - Contains 254 JSON files with component props
- `specs/props_yaml/` - Contains 254 YAML files with component props

### File Format

Each file contains props in the following structure:

```yaml
propName:
    originalType: TypeScript type
    group: General
    caption: Human-friendly name
    description: Clean description
    default: Default value (when available)
```

### Example Files

- `button.json` / `button.yaml` - Button component props
- `text.json` / `text.yaml` - Text component props
- `accordion.json` / `accordion.yaml` - Accordion component props

### Key Features

1. **Standardized format** - All props follow the same structure
2. **Human-friendly captions** - Auto-generated from prop names
3. **Clean descriptions** - HTML tags removed
4. **Default values** - Preserved when available
5. **YAML format** - More readable than JSON for documentation

## Usage

The extracted props can now be used for:

- Generating widget documentation
- Creating prop tables
- Building UI documentation
- Automated code generation
- Component analysis

## Cleanup

Both temporary scripts (`extract_props.js` and `convert_to_yaml.js`) were deleted after successful execution.
