# Dashboard

Goal: Reproduce the playground dashboard in Mendix using composable Finch widgets.

Reference: `packages/playground/src/App.tsx`

## Layout

- AppShell with `layout="alt"` (navbar full height, header inset)
- Collapsible navbar (69px collapsed, 260px expanded)
- Header with app branding
- Main content area with dashboard cards

## Widgets Used

| Widget | Purpose |
|--------|---------|
| ThemeProvider | MantineProvider + CSS variables, `colorScheme="auto"` |
| AppShell | Layout shell (header, navbar, main) |
| NavLink | Sidebar navigation items |
| Title | Page headings (h1-h6) |
| Text | Body text |
| Card | Stat/info cards |
| SimpleGrid | Responsive grid for cards |
| Stack | Vertical layout |
| Group | Horizontal layout |

## Progress

- [x] Widgets scaffolded and building (app-shell, card, group, nav-link, simple-grid, stack, text, theme-provider, title)
- [x] Shared Mantine lib bundled (`lib-mantine`)
- [x] finch-web module dependencies filtered to dashboard-only
- [x] ThemeProvider deployed and applying Mantine CSS in Mendix
- [x] AppShell rendering with header, navbar, main sections
- [x] Title widget rendering inside main content
- [ ] NavLink widgets in navbar
- [ ] Header content (branding, burger toggle)
- [ ] SimpleGrid + Card widgets in main content for dashboard stats
- [ ] Collapsible navbar behavior
- [ ] Dark/light theme toggle
