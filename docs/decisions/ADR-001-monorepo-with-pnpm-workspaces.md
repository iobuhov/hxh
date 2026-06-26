# ADR-001: Use PNPM Workspaces for Monorepo Management

## Status
Accepted

## Date
2025-08-01

## Context
The Finch project is a Mendix widget library wrapping 90+ Mantine UI components. Key requirements:
- Manage 90+ individual widget packages with shared dependencies
- Share common tooling (build scripts, linting, formatting) across all widgets
- Coordinate builds across interdependent packages (e.g., theme-provider widget must build before widgets that consume it)
- Minimize disk space and installation time (shared dependencies across 90+ packages)
- Support local development with fast incremental builds
- Package some widgets together into distributable Mendix modules (.mpk files)

The project structure includes:
- `widgets/*` - 90+ individual Mendix widget packages
- `modules/finch-web` - Aggregates all widgets into a single Mendix module
- `packages/*` - Shared tooling (prettier config, generators, converters)
- `mantine/` - Vendored Mantine source for reference

## Decision
Use PNPM workspaces with Turborepo for monorepo management.

## Alternatives Considered

### NPM Workspaces
- Pros: Built into npm, no additional tooling required, similar workspace syntax
- Cons: Slower installation, less efficient disk usage (no content-addressable store), weaker dependency hoisting control
- Rejected: PNPM's content-addressable store is critical when managing 90+ packages with shared dependencies. NPM would duplicate common dependencies, consuming significantly more disk space.

### Yarn Workspaces
- Pros: Mature ecosystem, good monorepo support, faster than npm
- Cons: Plug'n'Play (PnP) mode can cause compatibility issues with Mendix tooling; Classic mode has similar disk usage inefficiency as npm
- Rejected: PNPM offers better disk efficiency and simpler mental model than Yarn PnP, while avoiding Yarn Classic's duplication issues.

### Lerna (with any package manager)
- Pros: Specialized monorepo tooling with versioning and publishing features
- Cons: Adds another layer of complexity; versioning/publishing not needed (internal packages, not published to npm)
- Rejected: Overkill for this use case. PNPM workspaces + Turborepo provide sufficient orchestration without Lerna's publishing overhead.

### Rush
- Pros: Enterprise-grade monorepo manager, strong at scale
- Cons: Opinionated about project structure, steep learning curve, more complex than needed
- Rejected: Designed for very large organizations (Microsoft-scale). PNPM + Turbo are simpler and sufficient for 90+ packages.

## Consequences

### Positive
- **Disk efficiency**: PNPM's content-addressable store means shared dependencies (React, Mantine, Mendix SDK) are stored once, symlinked everywhere. ~70% disk savings compared to npm.
- **Faster installs**: With `enableGlobalVirtualStore: false` in `pnpm-workspace.yaml`, dependencies are shared across the workspace but isolated from global store, preventing cross-project pollution while maintaining speed.
- **Strict dependency resolution**: PNPM's strict mode prevents phantom dependencies (using a package not declared in `package.json`). Critical for ensuring each widget declares its real dependencies.
- **Catalog protocol**: PNPM's `catalog:` protocol in `pnpm-workspace.yaml` allows declaring dependency versions once and reusing them across all packages. Ensures version consistency for `@mantine/core`, `react`, `mendix` SDK, etc.
- **Turborepo integration**: `turbo.json` orchestrates builds with dependency-aware parallelization. If widget A depends on widget B, Turbo builds B first, then A. With `"concurrency": "128"`, all independent widgets build in parallel.
- **Workspace protocol**: Using `workspace:*` for internal dependencies (e.g., `@mendix/theme-provider: workspace:*`) ensures widgets always use the local version during development, not a stale published version.

### Negative
- **Team learning curve**: Team members unfamiliar with PNPM need to learn its CLI (`pnpm add`, `pnpm --filter`, etc.). However, commands are similar to npm/yarn, and the team is small.
- **CI/CD setup**: CI must use PNPM. Added `packageManager: "pnpm@10.13.1"` to `package.json` for Corepack to auto-install the correct version.
- **Tooling compatibility**: Some Mendix-specific tools assume npm/yarn. Workaround: PNPM has good compatibility mode, and most issues are resolved by hoisting patterns in `pnpm-workspace.yaml` (e.g., `publicHoistPattern: ['*prettier*', '@types/*']`).

### Key Configuration Decisions
- **`enableGlobalVirtualStore: false`**: Prevents workspace from sharing dependencies with user's global PNPM cache. Ensures reproducible builds and avoids cross-contamination between projects on developer machines.
- **`onlyBuiltDependencies: ['@parcel/watcher', 'core-js']`**: These packages must be built from source (native dependencies). PNPM will always rebuild them instead of using cached versions, ensuring compatibility with local architecture.
- **`overrides`**: Forces specific versions of transitive dependencies (e.g., `react: 'catalog:'` ensures all packages use the same React version, even if a dependency requests a different one). Critical for preventing multiple React instances in the bundle.
- **`publicHoistPattern`**: Hoists Prettier and `@types/*` to the workspace root. Prettier needs to be at the root for IDE integration; TypeScript types need to be accessible to all packages.
- **Turborepo `concurrency: 128`**: Allows up to 128 parallel tasks. With 90+ widgets, this maximizes build throughput on CI machines with many cores.

## Notes
- The Mendix CLI tool (`mpx`) is distributed as a local tarball (`pkg/mendix-mpx-0.1.1.tgz`) and installed via override: `mpx: file:pkg/mendix-mpx-0.1.1.tgz`. This ensures all widgets use the same bundler version.
- Each widget has a `package.xml` that defines Mendix-specific metadata. The build process (via `mpx`) bundles the widget code and this XML into an `.mpk` file.
- The `modules/finch-web` package aggregates all widget `.mpk` files into a single distributable Mendix module using a custom build script (`tasks/cli.mts`).
