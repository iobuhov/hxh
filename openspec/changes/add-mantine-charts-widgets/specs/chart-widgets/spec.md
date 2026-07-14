## ADDED Requirements

### Requirement: One widget per chart type

The system SHALL provide one Mendix pluggable widget for each of the 16 `@mantine/charts` chart types: Area, Bar, Line, Composite, Donut, Pie, Radar, Scatter, Bubble, RadialBar, Funnel, Heatmap, BarsList, Treemap, Sankey, and Sparkline.

#### Scenario: All chart types available in Studio Pro

- **WHEN** the `finch-web` module is deployed
- **THEN** each of the 16 chart widgets appears under the Finch category in the Studio Pro toolbox

#### Scenario: Chart renders from the shared runtime

- **WHEN** a chart widget renders
- **THEN** it imports its Mantine chart component from `../../mantine-charts/mantine-charts.main.mjs` and marks that path external in its rollup config

### Requirement: Datasource plus series data binding

Multi-series cartesian charts (Area, Bar, Line, Composite, Radar) SHALL bind a Mendix list `datasource`, a `dataKey` naming the category attribute, and a repeatable `series` config where each entry binds a value attribute, a display name, and a color.

#### Scenario: Mendix rows mapped to recharts data

- **WHEN** the datasource has N available items and the widget has M series entries
- **THEN** the widget produces a `data` array of N row objects, each keyed by the `dataKey` value and by each series name, and a `series` prop of M `{ name, color }` entries

#### Scenario: Datasource unavailable

- **WHEN** the datasource status is not `available`
- **THEN** the widget renders with an empty data array rather than throwing

### Requirement: Single-series charts use name/value/color rows

Circular charts (Donut, Pie, Funnel, RadialBar) SHALL bind a Mendix list `datasource` mapped to `{ name, value, color }` rows via bound attributes.

#### Scenario: Rows mapped to segments

- **WHEN** the datasource provides items with bound name, value, and color attributes
- **THEN** the widget produces a `data` array of `{ name, value, color }` objects consumed by the chart's `data` prop

### Requirement: Specialized charts define their own data shape

Charts whose input differs from the common shapes (Scatter, Bubble, Heatmap, BarsList, Treemap, Sankey, Sparkline) SHALL each define a data-binding surface matching that chart's recharts input.

#### Scenario: Scatter and Bubble map coordinate attributes

- **WHEN** a Scatter or Bubble widget binds x, y (and z for Bubble) attributes over the datasource
- **THEN** it produces the coordinate data array expected by the corresponding Mantine chart

#### Scenario: Sparkline maps a numeric sequence

- **WHEN** a Sparkline widget binds a numeric value attribute over the datasource
- **THEN** it produces a flat array of numbers for the chart's `data` prop

### Requirement: Per-chart appearance properties mirror the Mantine API

Each chart widget SHALL expose appearance properties that match the corresponding Mantine component's documented props (e.g. `type`, `curveType`, `withLegend`, `withTooltip`, `gridAxis`, `tickLine`, height, unit), with prop names verified against the installed Mantine 9 source.

#### Scenario: Appearance props forwarded to Mantine

- **WHEN** a user sets an appearance property in Studio Pro
- **THEN** the widget forwards the equivalent Mantine prop, using the v9 prop name from the vendored source

### Requirement: Widget XML generated from YAML

Each chart widget's Mendix XML SHALL be generated from a per-widget `src/{chart}.yaml` source via `pnpm update-xml`, consistent with existing Finch widgets.

#### Scenario: YAML is the source of truth

- **WHEN** a chart widget's properties change
- **THEN** the developer edits `src/{chart}.yaml` and runs `pnpm update-xml`, and the `.xml` is regenerated rather than hand-edited
