# Finch UI Build Tools

This module contains build tools for the Finch UI system, including CSS compilation using PostCSS.

## Available Commands

### CSS Compilation

Compile `main.css` using PostCSS with autoprefixer and minification:

```bash
# Build CSS once
pnpm run build:css

# Or using the script directly
node scripts/run.mts css
```

### All Build Tasks

Run all build tasks (themesource, widgets, and CSS):

```bash
node scripts/run.mts build
```

## CSS Processing

The CSS task processes `src/css/main.css` and outputs the compiled file to `themesource/radixkit/web/css/main.css`.

### PostCSS Plugins

The CSS compilation uses the following PostCSS plugins:

- **Autoprefixer**: Automatically adds vendor prefixes for better browser compatibility
- **CSSnano**: Minifies and optimizes the CSS output

### Configuration

PostCSS configuration is defined in `postcss.config.js`:

```javascript
module.exports = {
    plugins: [
        require("autoprefixer")({
            overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"]
        }),
        require("cssnano")({
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true
                    },
                    normalizeWhitespace: true,
                    colormin: true,
                    minifyFontValues: true,
                    minifySelectors: true
                }
            ]
        })
    ]
};
```

## File Structure

```
modules/finch-ui/
├── scripts/
│   ├── run.mts              # Main script runner
│   ├── tasks/
│   │   ├── css.task.mts     # CSS compilation task
│   │   ├── themesource.task.mts
│   │   ├── widgets.task.mts
│   │   └── design-props.task.mts
│   └── lib/
├── src/
│   └── css/
│       └── main.css         # Source CSS file
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## Environment Variables

Set the `MX_PROJECT_PATH` environment variable to specify the target project path:

```bash
export MX_PROJECT_PATH="/path/to/your/mendix/project"
```

## Dependencies

The CSS build task requires the following dependencies:

- `gulp`: Task runner
- `gulp-postcss`: Gulp plugin for PostCSS
- `postcss`: CSS transformation tool
- `autoprefixer`: Vendor prefix automation
- `cssnano`: CSS minification
- `task-utils`: Utility functions for build tasks
