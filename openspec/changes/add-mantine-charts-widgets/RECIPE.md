# Chart widget recipe (for building the remaining charts)

Reference implementations already complete: `widgets/area-chart`, `widgets/bar-chart` (cartesian),
and `widgets/lib-mantine-charts` (runtime). Follow these exactly.

## Steps per widget

1. **Scaffold** (from repo root `/Users/illia.obukhau/cx/finch`):
   ```
   pnpm add-widget "<PascalName>" "<description>"
   ```
   The fixed generator produces correct package.json (with `@mantine/core`, `@mantine/hooks`,
   `@mendix/yaml-to-xml-converter`, `update-xml` script), a `rollup.config.mjs`, and a starter
   `src/<kebab>.yaml`. Package dir is kebab-case, e.g. `line-chart`.

2. **package.json** — add these three deps (keep alphabetical order in the deps block):
   - `"@mantine/charts": "catalog:"`
   - `"@mendix/finch-chart-utils": "workspace:*"`  (only if using the shared helper)
   - `"recharts": "catalog:"`

3. **rollup.config.mjs** — change the external from `../../mantine/mantine.main.mjs` to
   `../../mantine-charts/mantine-charts.main.mjs`. (If the widget ALSO uses a `@mantine/core`
   component directly, ALSO push `../../mantine/mantine.main.mjs`.)

4. **src/<kebab>.yaml** — replace the starter. Use `studioProCategory: Finch / Charts` and
   `studioCategory: Finch / Charts`. Model the data-binding on area-chart/bar-chart:
   - `datasource` (type `datasource`, `isList: true`)
   - For cartesian charts: `categoryAttribute` (type `attribute`, `dataSource: datasource`,
     attributeTypes String/Enum/DateTime/Integer/Long/Decimal) + a `series` object list
     (`dataSource: ../datasource` on the inner `valueAttribute`).
   - For single-series/circular charts: a `series`/segment object list with name/value/color, or
     bind name+value+color attributes over the datasource directly.
   - Appearance props: ONLY include props that exist on the Mantine component. VERIFY names against
     `mantine/packages/@mantine/charts/src/<Component>/<Component>.tsx` and the shared
     `GridChartBaseProps` in `mantine/packages/@mantine/charts/src/types.ts`. Enum values must match
     the Mantine union type exactly. Do NOT invent props (Mantine 9 silently spreads unknown props
     to the DOM — no error, just broken).
   - yaml enum key `y` / boolean-like scalars must be quoted (`'y'`) to avoid YAML coercion.

5. **Generate XML + typings**:
   ```
   cd widgets/<kebab> && pnpm update-xml && pnpm build
   ```
   `update-xml` regenerates `<Pascal>.xml`; `pnpm build` regenerates `typings/<Pascal>Props.d.ts`.

6. **src/<Pascal>.tsx** — read the generated typings first, then implement:
   - `import { buildCartesianData } from "@mendix/finch-chart-utils";` (cartesian) or
     `buildSegmentData` (circular).
   - `import { <Component> as Mantine<Component> } from "../../mantine-charts/mantine-charts.main.mjs";`
   - `const items = datasource.status === "available" ? (datasource.items ?? []) : [];`
   - Read attribute values with `.get(item)`: category via `.get(item).displayValue`, numeric via
     `.get(item).value` (a `Big` | undefined — the helper's `toNumber` handles coercion).
   - `Big` scalar props (e.g. decimals): `x ? Number(x.toString()) : <default>`.
   - Pass `h={height}`, `className={props.class}`, `style={props.style}`. Optional string props:
     `unit || undefined`.

7. **Build again** and confirm the built
   `dist/tmp/widgets/com/mendix/finch/widget/<lower>/<Pascal>.mjs` imports ONLY
   `../../mantine-charts/mantine-charts.main.mjs` and `react` (helper is inlined, charts external).

## Data-shape groups

- **Cartesian multi-series** (category + series list): Line, Composite, Radar → like area/bar.
- **Circular single-series** ({name,value,color} rows): Donut, Pie, Funnel, RadialBar → `buildSegmentData`.
- **Specialized** (bespoke, read the component's data type carefully): Scatter, Bubble, Sparkline,
  BarsList, Heatmap, Treemap, Sankey.

Do NOT edit the OpenSpec tasks.md — the orchestrator tracks progress.
