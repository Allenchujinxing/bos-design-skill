# ToolBar

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Basic Toolbar frame: `7830:6402`
- Functional category frame: `7937:3627`
- Directory category: `导航 / ToolBar 底部工具栏`

## Purpose

Use ToolBar for page-level action bars fixed at the bottom of the screen. It provides primary and secondary action buttons, optionally combined with icon shortcut entries. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `Design/DESIGN-HelloCN.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for button click behavior, form submission, and loading states.

## Component Categories

| Category | Frame name | Description |
|---|---|---|
| Basic Toolbar | `Basic_ Toolbar` | Pure button combinations (1–3 buttons) |
| Functional category | `Functional category` | Icon entries + button combinations |

## Variant Axes

### Basic Toolbar

| Axis | Values |
|---|---|
| `布局` (Layout) | `Horizontal`, `Vertical` |
| `按钮数量` (Button count) | `1`, `2`, `3` |

### Functional category

| Axis | Values |
|---|---|
| `布局` (Layout) | `Horizontal` |
| `按钮数量` (Button count) | `Single Button_1icon`, `Single Button_2icon`, `Single Button_3icon`, `Double Button_1icon`, `Double Button_2icon` |

## Container

| Property | Value |
|---|---|
| Width | Full parent width (390px in 390pt design) |
| Background | `white1` |
| Padding | 12px all sides |
| Item gap | 12px |
| Overflow | Clip |
| Layout (Horizontal) | Flex row, items start-aligned |
| Layout (Vertical) | Flex column, items start-aligned |

### Container height (derived)

| Layout | Buttons | Height |
|---|---|---|
| Horizontal | Any | 72px (12 + 48 + 12) |
| Vertical | 2 | 132px (12 + 48 + 12 + 48 + 12) |

## Button Styles

Buttons inside ToolBar use the standard Button component at `large` size. See `basic/button.md` for full button specs.

### Primary button

| Property | Value |
|---|---|
| Background | `Branding-1` `Branding-1` |
| Text color | `anti` |
| Font | `Title/18-semibold` — PingFang SC, 18px, weight 600, line-height 26px |
| Height | 48px (padding 11px top/bottom + 26px line-height) |
| Horizontal padding | 20px |
| Border-radius | 10px |

### Secondary button

| Property | Value |
|---|---|
| Background | `Branding-3` `Branding-3` |
| Text color | `Branding-1` `Branding-1` |
| Font | `Title/18-semibold` — PingFang SC, 18px, weight 600, line-height 26px |
| Height | 48px |
| Horizontal padding | 20px |
| Border-radius | 10px |

## Basic Toolbar Layouts

### 1 button (Horizontal)

- Single primary button, full width (`w-full`).

### 2 buttons (Horizontal)

- Secondary + Primary, equal flex width (`flex: 1 0 0`), 12px gap.
- Secondary on the left, Primary on the right.

### 3 buttons (Horizontal)

- Secondary + Secondary + Primary, equal flex width, 12px gap.
- Primary always on the rightmost position.

### 2 buttons (Vertical)

- Primary on top (full width), Secondary below (full width), 12px gap.
- Stacked vertically in a column layout.

## Functional Category Layouts

Functional category adds icon shortcut entries to the left of the button area.

### Icon entry item

| Property | Value |
|---|---|
| Width | 48–53px (varies by text width) |
| Background | `white1` |
| Padding | 6px horizontal, 5px vertical |
| Layout | Flex column, centered |
| Icon-to-text gap | 4px |

### Icon slot

| Property | Value |
|---|---|
| Icon size | 20×20px |
| Icon container padding | 14px horizontal (centering within item) |
| Icon color | `gray1` `gray1` |

### Icon label

| Property | Value |
|---|---|
| Font | `Body/10-regular` — PingFang SC, 10px, weight 400, line-height 14px |
| Color | `gray1` `gray1` |
| Alignment | Center |

### Functional variants

| Variant | Icons | Buttons | Layout |
|---|---|---|---|
| `Single Button_1icon` | 1 icon entry | 1 primary (flex) | Icon fixed + button fills remaining |
| `Single Button_2icon` | 2 icon entries | 1 primary (flex) | Icons fixed + button fills remaining |
| `Single Button_3icon` | 3 icon entries | 1 primary (flex) | Icons fixed + button fills remaining |
| `Double Button_1icon` | 1 icon entry | Secondary + Primary (flex each) | Icon fixed + buttons share remaining |
| `Double Button_2icon` | 2 icon entries | Secondary + Primary (flex each) | Icons fixed + buttons share remaining |

Icon entries have fixed width; buttons use `flex: 1 0 0` to fill remaining space.

## Layout Usage

- ToolBar sits at the bottom of the page, above the Home Indicator safe area.
- Page content should account for the ToolBar height to avoid content being hidden.
- Use single-button layout for simple confirmation actions (submit, save, confirm).
- Use two-button layout for paired actions (cancel + confirm, secondary + primary).
- Use three-button layout sparingly, only when three distinct actions are needed.
- Use Functional category when the page needs quick-access icon shortcuts alongside the main action.
- Primary button should always represent the strongest/most important action.
- In horizontal layouts, the primary button is always on the right.
- In vertical layouts, the primary button is on top.

## Do Not Infer

- Do not override button styles; buttons follow `basic/button.md` at `large` size.
- Do not invent additional ToolBar padding or gap values outside 12px.
- Do not mix button sizes within the same ToolBar.
- Do not place more than 3 icon entries in a Functional category ToolBar.
- Do not use icon entries without labels; each icon must have a text label below it.
- Do not add a top divider to ToolBar; it uses the white background to separate from content.
