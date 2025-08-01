# Accordion

https://mantine.dev/core/accordion/

## Props

### Accordion

```json
{
    "chevron": {
        "originalType": "React.ReactNode",
        "group": "General",
        "caption": "Custom Chevron Icon",
        "description": "Custom chevron icon"
    },
    "chevronIconSize": {
        "originalType": "string | number",
        "default": "16",
        "group": "General",
        "caption": "Chevron Icon Size",
        "description": "Size of the default chevron icon. Ignored when chevron prop is set."
    },
    "chevronPosition": {
        "originalType": "AccordionChevronPosition",
        "default": "right",
        "group": "General",
        "caption": "Chevron Position",
        "description": "Position of the chevron relative to the item label"
    },
    "chevronSize": {
        "originalType": "string | number",
        "default": "auto",
        "group": "General",
        "caption": "Chevron Container Size",
        "description": "Size of the chevron icon container"
    },
    "defaultValue": {
        "originalType": "string | string[] | null",
        "group": "General",
        "caption": "Default Value",
        "description": "Uncontrolled component default value"
    },
    "disableChevronRotation": {
        "originalType": "boolean",
        "group": "General",
        "caption": "Disable Chevron Rotation",
        "description": "If set, chevron rotation is disabled"
    },
    "loop": {
        "originalType": "boolean",
        "default": "true",
        "group": "General",
        "caption": "Enable Keyboard Loop",
        "description": "If set, arrow keys loop though items (first to last and last to first)"
    },
    "multiple": {
        "originalType": "boolean",
        "group": "General",
        "caption": "Allow Multiple Open Items",
        "description": "If set, multiple items can be opened at the same time"
    },
    "onChange": {
        "originalType": "((value: AccordionValue<Multiple>) => void)",
        "group": "General",
        "caption": "Change Handler",
        "description": "Called when value changes, payload originalType depends on multiple prop"
    },
    "order": {
        "originalType": "2 | 3 | 4 | 5 | 6",
        "group": "General",
        "caption": "Heading Order",
        "description": "Heading order, has no effect on visuals"
    },
    "radius": {
        "originalType": "MantineRadius | number",
        "default": "theme.defaultRadius",
        "group": "General",
        "caption": "Border Radius",
        "description": "Key of theme.radius or any valid CSS value to set border-radius. Numbers are converted to rem."
    },
    "transitionDuration": {
        "originalType": "number",
        "default": "200",
        "group": "General",
        "caption": "Transition Duration",
        "description": "Transition duration in ms"
    },
    "value": {
        "originalType": "string | string[] | null",
        "group": "General",
        "caption": "Current Value",
        "description": "Controlled component value"
    }
}
```

### Accordion.Item

```json
{
    "value": {
        "originalType": "string",
        "group": "General",
        "caption": "Item Value",
        "description": "Value that is used to manage the accordion state"
    }
}
```

### Accordion.Panel

```json
{
    "onTransitionEnd": {
        "originalType": "(() => void)",
        "group": "General",
        "caption": "Transition End Handler",
        "description": "Called when the panel animation completes"
    }
}
```

### Accordion.Control

```json
{
    "chevron": {
        "originalType": "React.ReactNode",
        "group": "General",
        "caption": "Custom Chevron Icon",
        "description": "Custom chevron icon"
    },
    "children": {
        "originalType": "React.ReactNode",
        "group": "General",
        "caption": "Control Label",
        "description": "Control label"
    },
    "disabled": {
        "originalType": "boolean",
        "group": "General",
        "caption": "Disabled State",
        "description": "Sets disabled attribute, prevents interactions"
    },
    "icon": {
        "originalType": "React.ReactNode",
        "group": "General",
        "caption": "Control Icon",
        "description": "Icon displayed next to the label"
    }
}
```

### Accordion.Chevron

```json
{
    "size": {
        "originalType": "string | number",
        "default": "16",
        "group": "General",
        "caption": "Chevron Size",
        "description": "Controls width and height of the icon, 16 by default"
    }
}
```
