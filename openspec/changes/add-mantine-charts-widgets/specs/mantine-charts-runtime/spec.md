## ADDED Requirements

### Requirement: Shared charts runtime library

The system SHALL provide a `lib-mantine-charts` stub widget that bundles `@mantine/charts` and `recharts` into a single Mendix client module, following the same pattern as `lib-mantine` and `lib-lucide`.

#### Scenario: Runtime module is emitted at a stable path

- **WHEN** `lib-mantine-charts` is built
- **THEN** its rollup config emits an ES module to `dist/tmp/widgets/com/mendix/finch/mantine-charts/mantine-charts.main.mjs` that re-exports everything from `@mantine/charts`

#### Scenario: Stub widget renders nothing

- **WHEN** `LibMantineCharts` is placed on a page
- **THEN** it renders an empty Fragment and only serves to load the charts runtime

### Requirement: Core runtime is reused, not duplicated

The charts runtime SHALL reuse `lib-mantine`'s `@mantine/core` runtime rather than bundling its own copy.

#### Scenario: Core and React kept external

- **WHEN** the charts runtime is bundled
- **THEN** `@mantine/core`, `@mantine/hooks`, `react`, `react-dom`, and `react/jsx-runtime` are marked external, and only `@mantine/charts` and `recharts` code is included in the output chunks

#### Scenario: recharts split into its own chunk

- **WHEN** the charts runtime is bundled
- **THEN** `recharts` is emitted as a separate chunk via `advancedChunks` so it can be cached independently

### Requirement: Chart styles are loaded by the module

The `finch-web` module SHALL load `@mantine/charts` styles after core styles.

#### Scenario: Chart styles imported after core styles

- **WHEN** `modules/finch-web/src/styles/main.css` is built
- **THEN** it imports `@mantine/charts/styles.css` and that import appears after `@mantine/core/styles.css`

### Requirement: Load-order dependency on lib-mantine

`lib-mantine-charts` SHALL require `lib-mantine` to be present on the page.

#### Scenario: Missing core runtime is documented

- **WHEN** a developer adds a chart widget to a page without `lib-mantine`
- **THEN** the documented requirement (ADR) states `lib-mantine` must be placed on the layout alongside `lib-mantine-charts`
