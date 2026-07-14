## Why

Finch wraps Mantine UI as Mendix pluggable widgets for AI-assisted page generation, but the `@mantine/charts` family has no coverage yet. Data visualization is a common page requirement, and without chart widgets, generated pages fall back to tables or nothing. Adding all chart types completes parity with Mantine's charting surface.

## What Changes

- Add a new shared runtime library `lib-mantine-charts` that ships `@mantine/charts` + `recharts` once, mirroring the existing `lib-mantine` / `lib-lucide` stub-widget pattern. It reuses `lib-mantine`'s `@mantine/core` runtime (core/react stay external), so only charts + recharts are bundled.
- Add 16 chart widgets, one per `@mantine/charts` chart type: Area, Bar, Line, Composite, Donut, Pie, Radar, Scatter, Bubble, RadialBar, Funnel, Heatmap, BarsList, Treemap, Sankey, Sparkline.
- Establish a chart data-binding contract: a Mendix list `datasource` plus a repeatable `series` config (each entry binds a value attribute, a display name, and a color). The widget transforms Mendix rows into the `data`/`series` shape recharts expects.
- Add `@mantine/charts` and `recharts` to the PNPM catalog and import `@mantine/charts/styles.css` into the `finch-web` module CSS.
- Register `lib-mantine-charts` and all 16 chart widgets in `modules/finch-web`.

## Capabilities

### New Capabilities
- `mantine-charts-runtime`: Shared runtime library that externalizes `@mantine/charts` + `recharts` as a single Mendix client module, reusing the `lib-mantine` core runtime.
- `chart-widgets`: The 16 chart pluggable widgets, their per-chart property surfaces, and the shared datasource + series data-binding contract that maps Mendix data into recharts-compatible input.

### Modified Capabilities
<!-- None. This is purely additive; no existing widget requirements change. -->

## Impact

- **New packages**: `widgets/lib-mantine-charts` + 16 `widgets/{chart}` packages.
- **Dependencies**: adds `@mantine/charts@9.4.1` and `recharts` to the catalog (`pnpm-workspace.yaml`); both are already vendored under `mantine/node_modules`.
- **Build**: each chart widget's `rollup.config.mjs` externalizes the `../../mantine-charts/mantine-charts.main.mjs` runtime path (and `../../mantine/mantine.main.mjs` where core is used).
- **Module**: `modules/finch-web` gains 17 new workspace deps and one CSS import; `main.css` load order must keep `@mantine/core` styles before chart styles.
- **Runtime coupling**: `lib-mantine-charts` depends on `lib-mantine` being present on the page (load-order dependency, documented in an ADR).
