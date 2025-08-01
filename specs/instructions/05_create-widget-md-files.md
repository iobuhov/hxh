# 05 Create widget markdown files

## Objective

Create markdown documentation files for all Mantine widgets following a consistent template structure.

## Expected output

- Markdown files for all 85 Mantine widgets in `specs/widgets/` directory
- Each file follows the template structure with widget name, link to Mantine docs, and props section
- All files are properly formatted and ready for props documentation

## Steps

### 1. Read documentation and understand requirements

- Read all documentation files in `specs/instructions/` directory
- Review `specs/data/widgets.json` to get the complete list of widgets
- Review `specs/data/mantine-core-data.json` to understand widget metadata

### 2. Create widget markdown files

For each widget in the widgets.json file, create a markdown file in `specs/widgets/` directory with the following structure:

```markdown
# WidgetName

https://mantine.dev/core/widget-slug/

## Props
```

### 3. Add component links

For each widget, add the appropriate Mantine documentation link using the slug from `mantine-core-data.json`:

- Format: `https://mantine.dev/core/{slug}/`
- Example: `https://mantine.dev/core/avatar/` for Avatar component
- Place the link under the main heading

### 4. Clone Mantine repository for props extraction

```bash
git clone https://github.com/mantinedev/mantine.git mantine
```

### 5. Ensure repository is not tracked by git

Add the mantine folder to `.gitignore`:

```gitignore
# Mantine repository
mantine/
```

### 6. Widget categories

The widgets are organized into the following categories:

**Layout (9 widgets):**

- AppShell, AspectRatio, Center, Container, Flex, Grid, Group, SimpleGrid, Stack

**Inputs (21 widgets):**

- AngleSlider, Checkbox, Chip, ColorInput, ColorPicker, Fieldset, FileInput, Input, JsonInput, NativeSelect, NumberInput, PasswordInput, PinInput, Radio, RangeSlider, Rating, SegmentedControl, Slider, Switch, Textarea, TextInput

**Combobox (7 widgets):**

- Autocomplete, Combobox, MultiSelect, Pill, PillsInput, Select, TagsInput

**Buttons (5 widgets):**

- ActionIcon, Button, CloseButton, CopyButton, FileButton

**Navigation (9 widgets):**

- Anchor, Breadcrumbs, Burger, NavLink, Pagination, Stepper, TableOfContents, Tabs, Tree

**Feedback (7 widgets):**

- Alert, Loader, Notification, Progress, RingProgress, SemiCircleProgress, Skeleton

**Overlays (10 widgets):**

- Affix, Dialog, Drawer, FloatingIndicator, HoverCard, LoadingOverlay, Menu, Modal, Overlay, Popover, Tooltip

**Data display (13 widgets):**

- Accordion, Avatar, BackgroundImage, Badge, Card, ColorSwatch, Image, Indicator, Kbd, NumberFormatter, Spoiler, ThemeIcon, Timeline

**Typography (9 widgets):**

- Blockquote, Code, Highlight, List, Mark, Table, Text, Title, Typography

### 7. Props extraction process (ignore this step)

For each widget (e.g., Avatar), follow these steps:

1. Access the props page by adding `?t=props` to the Mantine documentation URL
2. Parse the props information from the documentation
3. Add the props to the corresponding markdown file under the "## Props" section

### 8. File naming convention

- Use PascalCase for widget names
- File extension: `.md`
- Example: `Avatar.md`, `Button.md`, `Checkbox.md`

### 9. Template structure

Each markdown file should follow this exact structure:

```markdown
# WidgetName

https://mantine.dev/core/widget-slug/

## Props

[Props documentation will be added here]
```

### 10. Verification

After creating all files:

1. Verify all 85 widgets have corresponding markdown files
2. Check that all links are correctly formatted
3. Ensure consistent formatting across all files
4. Verify that mantine repository is properly ignored by git

## Notes

- The Mantine repository is cloned locally for accessing source code and documentation
- All widget files are created with consistent structure for easy maintenance
- Props documentation will be extracted from the local Mantine source code
- The process ensures all widgets from @mantine/core package are documented
