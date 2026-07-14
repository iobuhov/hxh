## 1. Dependencies

- [x] 1.1 Add `@mantine/charts: 9.4.1` and `recharts: ^3.2.1` to the catalog in `pnpm-workspace.yaml` (recharts pinned to the published peer-dep floor `>=3.2.1`, not the stale vendored 2.15.4)
- [x] 1.2 Run `pnpm install` and confirm the catalog resolves (`@mantine/charts@9.4.1`, `recharts@3.9.2`)

## 2. Shared runtime lib-mantine-charts

- [x] 2.1 Scaffold `widgets/lib-mantine-charts` from the `lib-lucide` layout (package.json `widgetName: LibMantineCharts`, empty `LibMantineCharts.tsx`, `.xml`, `package.xml` under `com/mendix/finch/widget/libmantinecharts`)
- [x] 2.2 Add `src/mantine-charts.main.ts` re-exporting `@mantine/charts`
- [x] 2.3 Write `rollup.config.mjs` emitting to `com/mendix/finch/mantine-charts/`, externalizing react + remapping `@mantine/core`/`@mantine/hooks` to LibMantine's runtime via a `resolveId` plugin (mpx/rolldown ignores `output.paths`), splitting `recharts` into its own chunk via `advancedChunks`
- [x] 2.4 Import `@mantine/charts/styles.css` after `@mantine/core/styles.css` in `modules/finch-web/src/styles/main.css`
- [x] 2.5 Write ADR in `widgets/lib-mantine-charts/docs/decisions/` covering the charts-runtime split and the `lib-mantine` load-order dependency
- [x] 2.6 Build the lib and confirm `mantine-charts.main.mjs` + a separate recharts chunk are emitted

## 3. Prove runtime with Area chart

- [x] 3.1 Scaffold `widgets/area-chart` via the widget generator (generator template was stale: emitted an invalid `@mendix/pluggable-widgets-tools: catalog:` dep and no rollup.config/update-xml — fixed by hand against the badge pattern)
- [x] 3.2 Author `src/area-chart.yaml` (datasource, `categoryAttribute`, repeatable `series` with valueAttribute/name/color, plus type/curveType/orientation/gridAxis/tickLine/height/unit/strokeWidth/withGradient/withDots/withLegend/withTooltip/withXAxis/withYAxis verified against vendored `AreaChart.tsx` + `GridChartBaseProps`) and run `pnpm update-xml`
- [x] 3.3 Implement `AreaChart.tsx`: map `datasource.items` + series config into recharts `data`/`series`, import from `../../mantine-charts/mantine-charts.main.mjs`
- [x] 3.4 Externalize `../../mantine-charts/mantine-charts.main.mjs` in `rollup.config.mjs`
- [x] 3.5 Built, registered in `finch-web`, copied `AreaChart` + `LibMantineCharts` mpks into `mxproject/widgets/`. Built widget bundle imports only `../../mantine-charts/...` + `react` (4.66 KB → charts not duplicated). Visual render check in Studio Pro skipped per user (GUI action, not headless-drivable).

## 4. Shared data-mapping helpers

- [x] 4.1 Extract the cartesian multi-series mapping into `@mendix/finch-chart-utils` (`buildCartesianData`) — dependency-free helper taking accessor callbacks so it stays free of Mendix/Big types; bundles/inlines into widgets (proven with area-chart). area-chart refactored to use it.
- [x] 4.2 Define the circular `{name,value,color}` mapping helper (`buildSegmentData` in `@mendix/finch-chart-utils`), plus a shared `toNumber` coercion.

## 5. Cartesian charts (Bar, Line, Composite, Radar)

- [x] 5.1 Bar chart: yaml + tsx + rollup, reusing the cartesian helper, props verified against `BarChart.tsx` (built, externalizes charts runtime, 5.21 KB)
- [x] 5.2 Line chart: yaml + tsx + rollup, props verified against `LineChart.tsx` (5.41 KB)
- [x] 5.3 Composite chart: per-series `seriesType` enum (bar/line/area) mapped onto Mantine series; `orientation` omitted (not on CompositeChart's Omit'd base) (5.48 KB)
- [x] 5.4 Radar chart: polar prop surface (withPolarGrid/AngleAxis/RadiusAxis), not GridChartBaseProps; verified against `RadarChart.tsx` (4.84 KB)

## 6. Circular charts (Donut, Pie, Funnel, RadialBar)

- [x] 6.1 Donut chart: `buildSegmentData` from name/value/color attributes; uses `size` (px); verified against `DonutChart.tsx` (4.91 KB)
- [x] 6.2 Pie chart: `size` + `labelsPosition`; no `thickness` (donut-only); verified against `PieChart.tsx` (4.85 KB)
- [x] 6.3 Funnel chart: `size` + labelsPosition (right/left/inside); verified against `FunnelChart.tsx` (4.68 KB)
- [x] 6.4 RadialBar chart: `h={height}` + required `dataKey="value"`; verified against `RadialBarChart.tsx` (4.74 KB)

## 7. Specialized charts

- [x] 7.1 Scatter chart: one datasource = one series; x/y attrs → `data:[{color,name,data:[{x,y}]}]`, `dataKey={{x,y}}` (4.58 KB)
- [x] 7.2 Bubble chart: x(category)/y/z attrs → `[{x,y,z}]`, `dataKey={{x,y,z}}`, `range` as min/max int props (4.48 KB)
- [x] 7.3 Sparkline: numeric attr → flat `number[]`; `trendColors` omitted in favor of `color` (4.49 KB)
- [x] 7.4 BarsList: `{name,value,color}` (Mantine field is `name`, not `label` — corrected) via `buildSegmentData` (4.63 KB)
- [x] 7.5 Heatmap: date→value `Record<YYYY-MM-DD, number>`; complex color/locale/split props omitted (4.58 KB)
- [x] 7.6 Treemap: FLAT `[{name,value,color}]`, `dataKey="value"`; nested children not supported (first pass); no `withLabels` prop exists (4.59 KB)
- [x] 7.7 Sankey: single links datasource, nodes derived from distinct source/target as numeric indices; node field is `name`; `nodeWidth`/`nodePadding` (4.76 KB)

## Extra (discovered during apply)

- [x] E.1 Fixed the stale widget generator (`packages/finch-widget-generator`): corrected `package.json.hbs` (removed invalid `@mendix/pluggable-widgets-tools: catalog:`, added `@mantine/core`/`@mantine/hooks`/`@mendix/yaml-to-xml-converter` + `update-xml` script), added `rollup.config.hbs` and `widget.yaml.hbs` templates and wired them into `widget.js`. Now scaffolds installable widgets.
- [x] E.2 Created `packages/finch-chart-utils` (`@mendix/finch-chart-utils`) housing `buildCartesianData`, `buildSegmentData`, `toNumber` — dependency-free, bundles/inlines into widgets.

## 8. Module wiring and verification

- [x] 8.1 Add `lib-mantine-charts` and all 16 chart widgets to `modules/finch-web/package.json` dependencies
- [x] 8.2 Ran module `pnpm build` (css + copy-widgets): all 16 chart mpks + LibMantineCharts copied into `mxproject/widgets/` (52 mpks total). Added `@mantine/charts` as a module dep so postcss-import can resolve `@mantine/charts/styles.css`.
- [~] 8.3 Visual render check in Studio Pro SKIPPED per user (GUI action, not headless-drivable). Build-level verification done: all 16 widgets build TS-clean and externalize the shared charts runtime; runtime import path resolves.
- [x] 8.4 Ran `/opsx:verify`: all runtime + chart-widgets spec requirements pass; 16/16 widgets build clean and externalize the shared runtime; no import leaks. Only open item is the deliberately-skipped visual render check (8.3).
