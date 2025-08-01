# Finch UI Module Documentation

The Finch UI module provides build tools and utilities for the Finch UI component toolkit. This module handles CSS compilation, widget synchronization, and development workflows.

## Overview

The `@mendix/finch-ui` module is a build toolkit that manages:

- CSS compilation with PostCSS
- Widget dependency synchronization
- Development file watching
- Build artifact management

## Available Scripts

### Build Commands

#### `pnpm build`

Builds the complete module with all assets:

- Cleans previous build artifacts
- Synchronizes widget dependencies
- Compiles CSS with PostCSS
- Copies widget MPK files

```bash
cd modules/finch-ui
pnpm build
```

#### `pnpm dev`

Starts development mode with file watching:

- Cleans previous build artifacts
- Synchronizes widget dependencies
- Watches CSS files for changes
- Watches widget files for changes
- Runs continuously until stopped with Ctrl+C

```bash
cd modules/finch-ui
pnpm dev
```

### Utility Commands

#### `pnpm clean`

Removes all build artifacts and temporary files:

```bash
cd modules/finch-ui
pnpm clean
```

#### `pnpm sync-widgets`

Synchronizes widget dependencies and ensures all required files are in place:

```bash
cd modules/finch-ui
pnpm sync-widgets
```

#### `pnpm copy-widgets`

Copies widget MPK files to the appropriate distribution location:

```bash
cd modules/finch-ui
pnpm copy-widgets
```

#### `pnpm watch-css`

Watches CSS files for changes and automatically recompiles:

```bash
cd modules/finch-ui
pnpm watch-css
```

## CSS Processing

The module processes CSS using PostCSS with the following features:

### Source Files

- **Input**: `src/css/main.css`
- **Output**: `themesource/radixkit/web/css/main.css`

### PostCSS Configuration

The CSS compilation uses several PostCSS plugins:

- **postcss-import**: Handles `@import` statements
- **postcss-nested-import**: Processes nested imports
- **postcss-preset-mantine**: Mantine-specific CSS processing
- **postcss-simple-vars**: Variable processing

### Configuration File

Located at `postcss.config.cjs`:

```javascript
module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-nested-import"),
        require("postcss-preset-mantine"),
        require("postcss-simple-vars")
    ]
};
```

## File Structure

```
modules/finch-ui/
├── tasks/
│   ├── cli.mts              # Main CLI entry point
│   ├── css.task.mts         # CSS compilation task
│   ├── clean.task.mts       # Clean build artifacts
│   ├── sync-widgets.task.mts # Widget synchronization
│   ├── copy-widgets.task.mts # Copy widget files
│   ├── watch-css.task.mts   # CSS file watching
│   └── watch-widgets.task.mts # Widget file watching
├── src/
│   └── css/
│       └── main.css         # Source CSS file
├── themesource/             # Compiled CSS output
├── postcss.config.cjs       # PostCSS configuration
└── package.json
```

## Dependencies

### Core Dependencies

- `@mantine/core`: Mantine UI component library
- `@mendix/button`: Button widget (workspace dependency)

### Development Dependencies

- `tsx`: TypeScript execution environment
- `cac`: Command-line argument parser
- `chokidar`: File watching
- `postcss`: CSS processing
- `fancy-log`: Colored console output
- `picocolors`: Terminal colors

## Development Workflow

### Typical Development Process

1. **Start Development Mode**:

    ```bash
    cd modules/finch-ui
    pnpm dev
    ```

2. **Make Changes**:
    - Edit CSS files in `src/css/`
    - Modify widget files
    - Changes are automatically detected and processed

3. **Build for Production**:
    ```bash
    pnpm build
    ```

### Environment Setup

Ensure you have the required dependencies installed:

```bash
pnpm install
```

## Troubleshooting

### Common Issues

1. **Build Fails**: Run `pnpm clean` first to remove stale artifacts
2. **CSS Not Updating**: Check that `pnpm dev` is running and watching files
3. **Widget Sync Issues**: Run `pnpm sync-widgets` to refresh dependencies

### Debug Mode

For verbose output, you can run tasks directly:

```bash
npx tsx tasks/cli.mts build
```

## Integration

The Finch UI module integrates with:

- Mendix Studio Pro for widget deployment
- Mantine UI components for styling
- PostCSS for advanced CSS processing
- TypeScript for type safety

## Contributing

When contributing to the Finch UI module:

1. Follow the existing code structure
2. Test changes with `pnpm dev`
3. Ensure builds complete successfully with `pnpm build`
4. Update documentation for any new scripts or features
