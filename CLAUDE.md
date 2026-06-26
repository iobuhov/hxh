# Finch - Mantine UI Widget Library for Mendix

## Project Overview

Finch is a library of 90+ Mendix pluggable widgets wrapping Mantine UI components. The goal is to enable AI-assisted page generation by providing 1-1 component parity between Mantine's well-documented React components and Mendix widgets.

## Architecture

- **Monorepo**: PNPM workspaces + Turborepo (see ADR-001)
- **UI Library**: Mantine v8.2.1 with CSS-based theming (see ADR-002)
- **Structure**:
  - `widgets/` - 90+ individual widget packages (one per Mantine component)
  - `modules/finch-web` - Aggregates all widgets into a single Mendix module
  - `packages/` - Shared tooling (prettier, generators, converters)
  - `mantine/` - Vendored Mantine source for reference

## Widget Documentation

### OpenSpec Structure

Each widget has OpenSpec initialized for structured change management:
```
widgets/{widget-name}/
├── openspec/
│   ├── specs/           # Main specifications (features, APIs, architecture)
│   └── changes/         # Active and archived changes
│       └── archive/     # Completed changes
```

**OpenSpec workflow per widget:**
- Use `/opsx:propose "idea"` to start a new change with full artifact generation
- Use `/opsx:new "idea"` to start a change and build artifacts step-by-step
- Use `/opsx:apply` to implement tasks from a change
- Use `/opsx:verify` to validate implementation matches artifacts
- Use `/opsx:archive` to finalize and archive a completed change

**When working in a widget directory**, OpenSpec operates at the widget level:
```bash
cd widgets/accordion
# Now all /opsx: commands operate on widgets/accordion/openspec/
```

**OpenSpec file structure:**
```
widgets/accordion/openspec/changes/CHG-001-add-icon-support/
├── 01-design.md         # Design decisions and approach
├── 02-spec.md          # Technical specification
├── 03-tasks.md         # Implementation task list
└── 04-tests.md         # Test plan

widgets/accordion/openspec/specs/
├── accordion-api.md    # Widget API specification
└── accordion-arch.md   # Architecture and patterns
```

### Per-Widget ADRs

Each widget has its own architectural decisions documented in:
```
widgets/{widget-name}/docs/decisions/ADR-{number}-{title}.md
```

**When to create a widget-level ADR:**
- Why a specific Mantine component/pattern was chosen for this widget
- API design decisions (prop names, event handlers, data binding)
- Performance optimizations specific to this widget
- Known limitations or edge cases (e.g., nested components, accessibility constraints)
- Integration patterns with Mendix platform (attribute binding, validation, styling)
- Breaking changes between widget versions

**ADR naming convention:**
```
widgets/accordion/docs/decisions/ADR-001-controlled-state-for-mendix-binding.md
widgets/alert/docs/decisions/ADR-001-icon-system-and-customization.md
widgets/button/docs/decisions/ADR-001-action-binding-patterns.md
```

### Finding Widget Context

When working on a widget:
1. Read `widgets/{widget-name}/openspec/specs/` for current specifications
2. Check `widgets/{widget-name}/openspec/changes/` for active work
3. Read `widgets/{widget-name}/docs/decisions/` for architectural decisions (ADRs)
4. Check `docs/decisions/` for project-wide decisions (monorepo, Mantine choice, build system)
5. Reference `docs/finch-web.md` for build tooling and module structure

### Widget README Files

Each widget may have a `README.md` for:
- Quick start / usage examples
- Props documentation (if not obvious from TypeScript types)
- Common patterns / recipes
- Links to relevant ADRs and OpenSpec specs

Keep READMEs practical and concise - architectural rationale goes in ADRs, detailed specs in OpenSpec.

## Key Architectural Decisions

- [ADR-001: PNPM Workspaces for Monorepo](docs/decisions/ADR-001-monorepo-with-pnpm-workspaces.md)
- [ADR-002: Mantine UI for Mendix Widgets](docs/decisions/ADR-002-mantine-ui-for-mendix-widgets.md)

## Common Patterns

### MobX Reactivity Layer
Proven pattern from another Mendix widget project - bridges Mendix attributes ↔ Mantine components. Implementation lives in `@mendix/lib-mantine` package.

### Theme Provider
Foundation widget that must load before all other widgets. Provides consistent theming across all Mantine components.

### Widget Generation
Scaffolding for 90 widgets generated via `@mendix/finch-widget-generator`. Prioritize implementation of form components first.

## Development Workflow

### Building Widgets
```bash
# Build all widgets
pnpm build

# Build specific widget
cd widgets/accordion
pnpm build

# Development mode (finch-web module)
cd modules/finch-web
pnpm dev
```

### OpenSpec Workflow (Per Widget)
```bash
# Navigate to widget
cd widgets/accordion

# Start a new change with full proposal
/opsx:propose "add custom icon support to accordion items"

# Or start incrementally
/opsx:new "add custom icon support"
/opsx:continue  # Creates next artifact (design → spec → tasks → tests)

# Implement the change
/opsx:apply

# Verify before archiving
/opsx:verify

# Archive when complete
/opsx:archive
```

### Documentation Workflow
1. **For active feature work**: Use OpenSpec (`/opsx:propose` or `/opsx:new`) in the widget directory
2. **For architectural decisions**: Create ADRs in `widgets/{name}/docs/decisions/` using `documentation-and-adrs` skill
3. Keep ADRs focused on "why" decisions were made; OpenSpec handles "what" and "how" for changes
4. After archiving an OpenSpec change, consider if it warrants an ADR (major API decision, breaking change, etc.)
5. Update this CLAUDE.md if project-wide patterns emerge from widget work

## Notes

- Mantine version pinned at 8.2.1 via PNPM catalog
- PostCSS processes Mantine CSS via `postcss-preset-mantine`
- Mendix CLI (`mpx`) distributed as local tarball: `pkg/mendix-mpx-0.1.1.tgz`
- Each widget has `package.xml` with Mendix metadata (bundled into `.mpk` files)
