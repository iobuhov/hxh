import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { stringify, parse } from "yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const propsDir = "specs/props";
const commonPropsFile = "specs/props/common.yaml";

try {
  // Read all YAML files in the props directory
  const files = fs.readdirSync(propsDir).filter(file => file.endsWith(".yaml") && file !== "common.yaml");
  
  console.log(`Found ${files.length} YAML files to analyze...`);
  
  // Collect all props and their occurrences with descriptions
  const propOccurrences = {};
  
  files.forEach(file => {
    const filePath = path.join(propsDir, file);
    const content = parse(fs.readFileSync(filePath, "utf8"));
    
    Object.keys(content).forEach(propName => {
      const prop = content[propName];
      
      if (!propOccurrences[propName]) {
        propOccurrences[propName] = {
          occurrences: [],
          files: []
        };
      }
      
      // Store the prop with its description and file info
      propOccurrences[propName].occurrences.push({
        prop: prop,
        file: file
      });
      propOccurrences[propName].files.push(file);
    });
  });
  
  // Find common props (appearing in more than 1 file)
  const commonProps = {};
  const commonPropNames = [];
  
  Object.keys(propOccurrences).forEach(propName => {
    const occurrence = propOccurrences[propName];
    if (occurrence.files.length > 1) {
      commonPropNames.push(propName);
      
      // Create a detailed common prop entry with all descriptions
      const descriptions = occurrence.occurrences.map(occ => ({
        description: occ.prop.description,
        file: occ.file,
        originalType: occ.prop.originalType,
        default: occ.prop.default
      }));
      
      // Use the most common description (or the first one if all are unique)
      const descriptionCounts = {};
      descriptions.forEach(desc => {
        const key = desc.description;
        descriptionCounts[key] = (descriptionCounts[key] || 0) + 1;
      });
      
      const mostCommonDescription = Object.keys(descriptionCounts).reduce((a, b) => 
        descriptionCounts[a] > descriptionCounts[b] ? a : b
      );
      
      // Find the most common originalType and default
      const typeCounts = {};
      const defaultCounts = {};
      descriptions.forEach(desc => {
        typeCounts[desc.originalType] = (typeCounts[desc.originalType] || 0) + 1;
        if (desc.default) {
          defaultCounts[desc.default] = (defaultCounts[desc.default] || 0) + 1;
        }
      });
      
      const mostCommonType = Object.keys(typeCounts).reduce((a, b) => 
        typeCounts[a] > typeCounts[b] ? a : b
      );
      
      const mostCommonDefault = Object.keys(defaultCounts).length > 0 ? 
        Object.keys(defaultCounts).reduce((a, b) => 
          defaultCounts[a] > defaultCounts[b] ? a : b
        ) : undefined;
      
      commonProps[propName] = {
        originalType: mostCommonType,
        group: "General",
        caption: propName.charAt(0).toUpperCase() + propName.slice(1).replace(/([A-Z])/g, " $1").trim(),
        description: mostCommonDescription,
        ...(mostCommonDefault && { default: mostCommonDefault }),
        _occurrences: occurrence.files.length,
        _allDescriptions: descriptions
      };
    }
  });
  
  // Sort common props by frequency (most common first)
  commonPropNames.sort((a, b) => {
    const aCount = propOccurrences[a].files.length;
    const bCount = propOccurrences[b].files.length;
    return bCount - aCount;
  });
  
  console.log(`Found ${Object.keys(commonProps).length} common props`);
  
  // Write common props to common.yaml
  const commonPropsYaml = stringify(commonProps, {
    indent: 2,
    lineWidth: 80
  });
  
  fs.writeFileSync(commonPropsFile, commonPropsYaml);
  console.log(`Created ${commonPropsFile}`);
  
  // Update all files to reference common props
  files.forEach(file => {
    const filePath = path.join(propsDir, file);
    const content = parse(fs.readFileSync(filePath, "utf8"));
    const updatedContent = {};
    let hasChanges = false;
    
    Object.keys(content).forEach(propName => {
      const prop = content[propName];
      
      if (propOccurrences[propName] && propOccurrences[propName].files.length > 1) {
        // This is a common prop, replace with reference
        updatedContent[propName] = {
          $ref: "common.yaml#" + propName
        };
        hasChanges = true;
      } else {
        // Keep the original prop
        updatedContent[propName] = prop;
      }
    });
    
    if (hasChanges) {
      const updatedYaml = stringify(updatedContent, {
        indent: 2,
        lineWidth: 80
      });
      fs.writeFileSync(filePath, updatedYaml);
      console.log(`Updated ${file}`);
    }
  });
  
  console.log("All files updated successfully!");
  
  // Print summary of common props
  console.log("\nCommon props summary:");
  commonPropNames.forEach(propName => {
    const occurrence = propOccurrences[propName];
    console.log(`- ${propName}: appears in ${occurrence.files.length} files`);
  });
  
} catch (error) {
  console.error("Error processing files:", error);
} 