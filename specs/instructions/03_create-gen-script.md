# 03 Create script to generate widgets

## Objective ts script to generate widgets

## Expected output

- `scripts/gen-widgets.ts` file with the script

## Steps

1. Create `specs/data/widgets.json` with the list of widgets listed in `02_list-of-mantine-widgets.md`.
   File should contain object where keys are widget names and values are objects with shape like this:
   { name: <widgetname>, description: \[widgetdescription\] }. Use widget dewcriptions from `mantine-core-data.json`

2. Create scripts directory at the root. Add tsconfig.json. Create gen-widgets script that will iterate over widgets in specs/data/widgets.json and call `pnpm add-widget <widgetname> <widgetdescripton>`
