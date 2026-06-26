# ADR-002: Use Mantine UI for Mendix Widget Library

## Status
Accepted

## Date
2026-06-05

## Context
We are building a library of Mendix pluggable widgets to enable AI-assisted page generation. The core hypothesis is that wrapping a well-documented React component library as Mendix widgets will allow AI models (trained on that library's documentation) to generate Mendix UIs with 1-1 component parity.

Key requirements:
- Pre-built, styled components (production-ready without custom styling work)
- CSS-based theming (avoid CSS-in-JS runtime overhead)
- Accessibility foundation (ARIA attributes, keyboard support, screen readers)
- Proven integration pattern with our existing MobX reactivity layer for Mendix attribute binding
- AI-friendly component mapping (1-1 parity between library and Mendix widgets)

Previously attempted Radix UI but abandoned due to excessive custom styling requirements. The headless/unstyled approach required building a complete design system on top, which was unsustainable for 30+ components.

## Decision
Use Mantine UI v8.2.1 as the component library for Mendix pluggable widgets.

## Alternatives Considered

### Radix UI (Previously Attempted)
- Pros: Headless/unstyled components with world-class accessibility, smaller bundle size, complete styling control
- Cons: Requires building a complete design system on top (custom styles for 30+ components is prohibitive work)
- Rejected: **Already tried this approach in a previous iteration.** The amount of custom styling work required per component was unsustainable. Mantine provides pre-built styles out of the box, eliminating this burden.

### Material-UI (MUI)
- Pros: Industry standard, mature ecosystem, enterprise backing
- Cons: Uses Emotion (CSS-in-JS runtime overhead), larger bundle size, more opinionated styling system
- Rejected: Mantine v8+ uses static CSS files with no runtime overhead, lighter weight, simpler theming API

### Ant Design
- Pros: Comprehensive component library, strong enterprise focus
- Cons: Highly opinionated design language, CSS-in-JS runtime, less flexible theming
- Rejected: Mantine's design system is more neutral and CSS-based theming is simpler

### Chakra UI
- Pros: Great developer experience, style props API
- Cons: Uses Emotion (CSS-in-JS runtime), React Context-heavy theming complicates Mendix widget initialization
- Rejected: Mantine's CSS-based approach avoids runtime overhead and context initialization complexity

### Blueprint
- Pros: Enterprise-focused, strong TypeScript support
- Cons: Heavy design language (desktop-app aesthetic), larger bundle size
- Rejected: Mantine is lighter and more suited to modern web applications

### Build Custom Components
- Pros: Complete control, no external dependencies
- Cons: Months of design and development work, reinventing accessibility patterns, eliminates AI training data (defeats the AI generation use case)
- Rejected: Project hypothesis requires using a well-documented library that AI models can map to Mendix widgets


## Consequences

### Positive
- Pre-built components with complete styles eliminate months of design work
- CSS-based styling (no CSS-in-JS runtime overhead) improves performance vs Emotion-based libraries
- Mantine's theming system provides consistent visual design across all widgets
- 1-1 component mapping enables AI models to generate Mendix UIs directly from Mantine patterns
- MobX reactivity pattern already validated in another Mendix widget project (proven integration approach)
- Accessibility foundation built-in: proper ARIA roles/attributes, keyboard navigation, screen reader support (tested with VoiceOver), automated testing with jest-axe, WAI-ARIA compliance

### Negative
- **Mantine version upgrades**: Major version changes may require updating all widgets. Migration cost unknown until attempted.
- **Maintenance burden**: Responsible for tracking Mantine releases, security patches, and breaking changes indefinitely.
- **Design constraints**: Locked into Mantine's design opinions. Customization beyond theming may be difficult.
- **Parallel design system**: Widgets won't match Mendix's native Atlas UI components visually.
- **Accessibility responsibility**: Mantine provides accessible primitives, but Mendix developers must configure labels, contrast ratios, and semantic HTML correctly. Widgets do not enforce accessible usage.
- **Bundle size unmeasured**: Total JavaScript and CSS size unknown until working widgets are built and profiled.
- **Project viability**: If Mantine integration fails, project will be abandoned. No fallback to another library planned.

### Technical Notes
- Mantine version pinned at 8.2.1 via PNPM catalog (see `pnpm-workspace.yaml`)
- PostCSS processes Mantine CSS using `postcss-preset-mantine` (config in `modules/finch-web/postcss.config.cjs`)
- MobX wrapper layer (proven in another repository) will be ported to `@mendix/lib-mantine` package to bridge Mendix attributes ↔ Mantine components
- 90 widgets generated via `@mendix/finch-widget-generator` are scaffolding; actual implementation prioritizes form components first
- Theme provider widget completed (foundation for all other widgets)
