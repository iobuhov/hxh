# ADR-001: Separate charts runtime that reuses LibMantine's core

Status: Accepted
Date: 2026-07-14

## Context

`@mantine/charts` is built on `recharts` and depends on `@mantine/core` (+ `@mantine/hooks`).
Finch ships shared runtime dependencies once via stub "lib" widgets: `LibMantine` emits
`@mantine/core` + `@mantine/hooks` as a single ES module at
`com/mendix/finch/mantine/mantine.main.mjs`, and consumer widgets import from the relative runtime
path `../../mantine/mantine.main.mjs` (marked `external`) so Mantine loads once per app.

Charts need the same treatment, but three shapes were possible:

1. Fold charts into `LibMantine` — every app loading Mantine would also download `recharts` even
   when no chart is used.
2. A self-contained `LibMantineCharts` that bundles its own `@mantine/core` — duplicates the
   largest dependency on any page that already loads `LibMantine`.
3. A separate `LibMantineCharts` that reuses `LibMantine`'s core runtime.

## Decision

Option 3. `LibMantineCharts` bundles only `@mantine/charts` + `recharts`. `@mantine/core`,
`@mantine/hooks`, and React are kept `external`.

The critical detail: `LibMantine` does **not** expose `@mantine/core` as a bare specifier at
runtime — it bundles core into its own `core.mjs` and re-exports everything from
`mantine.main.mjs`. So externalizing `@mantine/core` as a bare import would emit
`import ... from "@mantine/core"`, which does not resolve in Mendix. Instead the rollup config
rewrites those bare externals to `LibMantine`'s relative runtime path via `output.paths`:

```js
paths: {
  "@mantine/core": "../mantine/mantine.main.mjs",
  "@mantine/hooks": "../mantine/mantine.main.mjs"
}
```

`recharts` is emitted as its own chunk via `advancedChunks` so it can be cached independently and
the charts glue chunk stays small.

The five symbols `@mantine/charts` imports from core (`DEFAULT_THEME`, `getThemeColor`,
`MantineProvider`, `useMantineTheme`, and `useId` from hooks) are all re-exported by
`mantine.main.mjs`, so the remap is complete. (`MantineColor` / `MantineTheme` are type-only and
disappear at build.)

## Consequences

- **Load-order dependency**: `LibMantineCharts` requires `LibMantine` to be present on the same
  page/layout. Placing a chart widget without `LibMantine` breaks core symbol resolution. Both libs
  are placed together on the layout.
- The sibling relative path (`../mantine/...`) is correct only because both libs deploy under
  `com/mendix/finch/`. If that layout changes, the `output.paths` remap must change too.
- `recharts` is pinned to `^3.2.1` (the published `@mantine/charts@9.4.1` peer floor), not the
  stale `recharts@2.15.4` vendored under `mantine/node_modules`.
