## Context

Finch wraps Mantine components as Mendix pluggable widgets. Shared runtime deps (`@mantine/core`, `lucide-react`) are shipped once via stub "lib" widgets (`lib-mantine`, `lib-lucide`) that emit their dependency as a separate ES module under `dist/tmp/widgets/com/mendix/finch/{name}/`; consumer widgets import from a relative runtime path (e.g. `../../mantine/mantine.main.mjs`) and mark it `external` in `rollup.config.mjs`, so Mantine loads once per app.

`@mantine/charts` (v9.4.1, already vendored under `mantine/node_modules`) is built on `recharts` and depends on `@mantine/core`. The 16 chart types have heterogeneous data inputs: multi-series cartesian data, single-series segments, coordinate pairs, and bespoke shapes (heatmap, sankey, treemap, sparkline). Mendix supplies data as list datasources with bound attributes, so a mapping layer is required.

## Goals / Non-Goals

**Goals:**
- Ship all 16 chart types as individual widgets with 1-1 Mantine parity.
- Load `@mantine/charts` + `recharts` exactly once via a `lib-mantine-charts` runtime, reusing `lib-mantine`'s core.
- Provide a Mendix-native data-binding contract (list datasource + repeatable series config).
- Keep XML generated from YAML, consistent with existing widgets.

**Non-Goals:**
- Exposing `ChartTooltip` / `ChartLegend` as standalone widgets (configured via chart props instead).
- A JSON-string data escape hatch (datasource + series only, per decision).
- Custom chart theming beyond Mantine's documented props.

## Decisions

**Separate charts runtime that reuses core.** `lib-mantine-charts` externalizes `@mantine/core`, `@mantine/hooks`, and React so it only bundles `@mantine/charts` + `recharts`. Alternative — bundling its own core — was rejected as it duplicates the largest dependency; folding charts into `lib-mantine` was rejected because every app loading Mantine would then pay for recharts even without charts. Trade-off: a load-order dependency on `lib-mantine`, documented in an ADR.

**recharts in its own chunk.** recharts is large; emitting it via `advancedChunks` (as `lib-mantine` does for core/hooks) lets it be cached independently and keeps the charts glue chunk small.

**Datasource + repeatable series binding.** Mirrors the existing `table` widget's `datasource` + repeatable object list. Chart widgets read `datasource.items`, apply each series' bound value attribute, and construct the recharts `data`/`series` structures. Rejected: a single JSON string attribute (bypasses Mendix typing and modeling).

**Group widgets by data shape to share mapping code.** Cartesian multi-series (Area/Bar/Line/Composite/Radar) share one mapping helper; circular charts (Donut/Pie/Funnel/RadialBar) share `{name,value,color}` mapping; specialized charts (Scatter/Bubble/Heatmap/BarsList/Treemap/Sankey/Sparkline) get bespoke mapping. This bounds duplication while respecting each chart's real input.

**Verify props against vendored v9 source.** Per project guidance, unknown props silently spread to the DOM in Mantine 9. Each widget's YAML property surface is derived from the chart's `.tsx` props interface in `mantine/packages/@mantine/charts/src/{Chart}/`, not from memory or v8 docs.

## Risks / Trade-offs

- **Load-order dependency on `lib-mantine`** → Documented in an ADR and the runtime spec; both libs are placed on the layout together.
- **recharts version drift** (peer `>=3.2.1`) → Pin to the vendored version in the catalog to match what Mantine 9.4.1 was tested against.
- **16 widgets is a large surface** → Sequence delivery: prove runtime + one chart (Area) end-to-end before fanning out the remaining 15; group by data shape to reuse mapping logic.
- **Bespoke charts (Sankey/Treemap/Heatmap) have complex inputs** → These may need richer nested config objects; scope each individually and accept they land after the simpler groups.
- **CSS layer/order regressions** → Ensure `@mantine/charts/styles.css` imports after core styles in `main.css`.

## Migration Plan

Purely additive — no existing widget or spec changes. Rollback is removing the new packages and the two catalog/CSS/module-registration edits. Deploy order within the change: catalog deps → runtime lib + CSS → verify with Area chart → remaining widgets → module registration.
