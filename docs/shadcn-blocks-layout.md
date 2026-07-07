# Shadcn Blocks Layout — Mantine Implementation Guide

Reference: https://ui.shadcn.com/blocks (sidebar-07 variant)

## Target Layout Structure

The layout has 3 zones:

### 1. Left Sidebar (300px, collapsible)

- **Top**: Team switcher (dropdown with logo + name + plan)
- **Middle "Platform" section**: Collapsible nav groups (Playground, Models, Documentation, Settings) — each with icon + chevron + sub-items
- **Middle "Projects" section**: Flat nav items (Design Engineering, Sales & Marketing, Travel) with action menus
- **Bottom**: User avatar + name + email dropdown

### 2. Header (60px, top bar inside main area)

- Sidebar toggle (burger)
- Vertical separator
- Breadcrumbs (e.g., "Build Your Application > Data Fetching")

### 3. Main Content (flex column, padded)

- Grid of placeholder cards (3 columns)
- Full-width content block below

---

## Mantine Widget Tree

```
ThemeProvider
└── AppShell (layout="alt", navbar=300px, header=60px)
    ├── Header slot:
    │   └── Group (horizontal, align center, gap md, px md)
    │       ├── Burger (toggle navbar on mobile)
    │       ├── Separator (vertical divider — styled div)
    │       └── Breadcrumbs (items from page context)
    │
    ├── Navbar slot:
    │   └── Stack (full height, justify space-between)
    │       ├── Stack (top section)
    │       │   ├── Group (team switcher — logo + text + dropdown)
    │       │   ├── Text "Platform" (section label, dimmed, small, uppercase)
    │       │   ├── NavLink "Playground" (icon, active, children: History/Starred/Settings)
    │       │   ├── NavLink "Models" (icon, children: Genesis/Explorer/Quantum)
    │       │   ├── NavLink "Documentation" (icon, children: Intro/Get Started/...)
    │       │   ├── NavLink "Settings" (icon, children: General/Team/Billing/Limits)
    │       │   ├── Text "Projects" (section label)
    │       │   ├── NavLink "Design Engineering" (icon, flat)
    │       │   ├── NavLink "Sales & Marketing" (icon, flat)
    │       │   └── NavLink "Travel" (icon, flat)
    │       └── Group (bottom — user section)
    │           ├── Avatar
    │           ├── Stack (name + email)
    │           └── Menu (dropdown: Account/Billing/Logout)
    │
    └── Main slot:
        └── Stack (gap md)
            ├── SimpleGrid (3 cols)
            │   ├── Card (placeholder)
            │   ├── Card (placeholder)
            │   └── Card (placeholder)
            └── Card (full width content block)
```

---

## Widgets to Implement (Priority Order)

| # | Widget | Mantine Component | Purpose |
|---|--------|------------------|---------|
| 1 | **NavLink** | `NavLink` | Sidebar nav items (collapsible with nested children) |
| 2 | **Burger** | `Burger` | Mobile sidebar toggle |
| 3 | **Group** | `Group` | Horizontal flex layout (header, user section) |
| 4 | **Stack** | `Stack` | Vertical flex layout (sidebar structure) |
| 5 | **Breadcrumbs** | `Breadcrumbs` | Header breadcrumb trail |
| 6 | **Avatar** | `Avatar` | User section at sidebar bottom |
| 7 | **Menu** | `Menu` | Dropdown actions (user, projects) |
| 8 | **Text** | `Text` | Labels, section headers |
| 9 | **SimpleGrid** | `SimpleGrid` | Main content card grid |
| 10 | **Card** | `Card` | Content blocks |

---

## Styling Notes

### AppShell `layout="alt"`
Already configured — sidebar extends full height (top to bottom), header only spans the main content area. This matches shadcn's sidebar-07 exactly.

### Sidebar Appearance
- Background: `var(--mantine-color-body)` with subtle `border-right: 1px solid var(--mantine-color-default-border)`
- Section labels: `Text size="xs" fw={500} c="dimmed" tt="uppercase" px="md"`
- NavLink children (sub-items): built-in — nest `NavLink` components inside parent `NavLink`

### Header
- Height: 60px (already set in AppShell)
- Items centered vertically with `Group align="center"`
- Separator: thin vertical line via a styled `div` or Mantine `Divider orientation="vertical"`

### Content Area
- Padding via AppShell `padding="md"`
- Card grid: `SimpleGrid cols={3}` with responsive breakpoints
- Placeholder cards: `aspect-ratio: 16/9`, `bg="var(--mantine-color-default-hover)"`, `radius="xl"`

---

## Key Difference from Shadcn

Shadcn's sidebar-07 supports "collapsible to icon-only" mode on desktop. Mantine's AppShell only collapses navbar fully on mobile.

**To replicate icon-only collapse:**
- Use controlled `navbar.width` state (toggle between 300px and 80px)
- Conditionally hide NavLink labels when collapsed
- Show only icons + tooltips in collapsed state

This is a nice-to-have, not required for the basic layout.

---

## Current State

| Component | Status |
|-----------|--------|
| AppShell | ✅ Implemented (layout="alt", 300px navbar, 60px header) |
| ThemeProvider | ✅ Implemented |
| NavLink | ❌ Stub |
| Burger | ❌ Stub |
| Group | ❌ Stub |
| Stack | ❌ Stub |
| Breadcrumbs | ❌ Stub |
| Avatar | ❌ Stub |
| Menu | ❌ Stub |
| Text | ❌ Stub |
| SimpleGrid | ❌ Stub |
| Card | ❌ Stub |
