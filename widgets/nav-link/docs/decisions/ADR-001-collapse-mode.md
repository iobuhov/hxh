# ADR-001: Collapse mode via explicit Collapse, not NavLink nesting

Status: Accepted
Date: 2026-07-13

## Context

NavLink needs an expandable variant that groups child links. Mantine's `NavLink` has built-in
nesting: pass `children` and it renders its own `Collapse` plus a rotating chevron. That approach
was tried and removed in `62f7080` ("drop navlink nesting").

Mendix complicates it: children arrive through a `widgets`-type property, so `children` is always a
truthy ReactNode once the property exists in the XML — even when the page author dropped nothing in
it. Mantine keys its nesting off `withChildren = !!children`, so every NavLink would render as an
expandable parent with a chevron, whether or not it has nested links.

## Decision

Add an explicit `mode` enumeration (`link` | `collapse`). In `collapse` mode the widget:

- forces the root to `component="button"` (a toggle, not a navigation target)
- owns `opened` state locally, seeded from `defaultOpened`
- renders the chevron itself as `rightSection`
- renders `props.children` in its own `<Collapse>` sibling

Nesting is therefore opt-in per instance and driven by page config, not by the accidental presence
of a widgets property.

## Consequences

- Two sources of collapse behavior exist in the codebase (ours and Mantine's built-in). We never
  pass `children` to Mantine's `NavLink`, so its nesting path stays dormant.
- Indentation is hardcoded to `--mantine-spacing-lg`; the old `childrenOffset` property was not
  reintroduced. Add it back if page authors need control.
- `onClick` is ignored in collapse mode — the click is the toggle.

## Gotcha: Mantine 9 renamed `Collapse`'s `in` prop to `expanded`

The first implementation used `<Collapse in={opened}>`, correct for Mantine 8 and what most docs and
model training data suggest. In v9 the prop is `expanded`. An unrecognized prop is not an error —
it's spread onto the underlying Box as a DOM attribute — so the collapse silently never opened while
state toggled correctly underneath.

Related: closed children stay mounted inside React 19's `<Activity mode="hidden">`, which renders as
`display: none !important` in the DOM. That is Mantine's doing, not Mendix hiding the subtree.

When wiring any Mantine component, verify prop names against
`node_modules/@mantine/core/esm/components/{Component}/{Component}.mjs`.
