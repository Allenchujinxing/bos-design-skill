# Steps

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `10001:1097`
- Directory category: `导航 / Steps 步骤条`

## Purpose

Use Steps to display multi-step processes with progress indication. Common use cases include order tracking, form wizards, task flows, and approval processes. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `Design/DESIGN-HelloCN.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for step navigation behavior, validation, and state management.

## Layout Types

### Horizontal Layouts

| Layout | Icon style | Description |
|---|---|---|
| 水平布局1 | Number icon (20px) + inline text | Compact single-line, icon and text side by side |
| 水平布局2 | Number icon (28px) + text below | Standard, icon above with title and subtitle centered below |
| 水平布局3 | Custom icon (32px with background) + text below | Icon with colored background circle, title and subtitle below |

### Vertical Layout

| Layout | Description |
|---|---|
| 垂直布局有按钮 | Vertical timeline with optional action button on the right |
| 垂直布局无按钮 | Vertical timeline without action buttons |

## Step Counts

Supports 2, 3, 4+ steps. Items use equal flex distribution (`flex: 1 0 0`).

## Container

| Property | Horizontal | Vertical |
|---|---|---|
| Width | Full parent (390px) | Full parent (390px) |
| Horizontal padding | 12px | 12px |
| Layout | Flex row, centered | Flex column, 6px gap |
| Item alignment | Center | Start |

## Step Item States

| State | Description |
|---|---|
| `process` | Current active step — highlighted with brand color |
| `default` | Upcoming/incomplete step — muted colors |
| `finish` | Completed step — supports custom completed icon |
| `loading` | Step in progress — loading indicator |

## Horizontal Layout 1 (Compact)

### Step Item

| Property | Value |
|---|---|
| Layout | Flex row, 8px gap between connector and content |
| Content | Flex row: 20px icon + 4px gap + text |

### Number Icon (20px)

| Property | Process | Default |
|---|---|---|
| Size | 20×20px | 20×20px |
| Style | Filled number icon, brand color | Filled number icon, gray |

### Text

| Property | Process | Default |
|---|---|---|
| Font | `Title/16-semibold` | `Body/16-regular` |
| Size | 16px, weight 600, line-height 24px | 16px, weight 400, line-height 24px |
| Color | `Branding-1` `Branding-1` | `gray2` `gray2` |

### Connector Line

| Property | Value |
|---|---|
| Height | 2px (visible) or 0px (hidden at start/end) |
| Color | `gray5` `gray5` |
| Border-radius | 2px on inner end |
| Layout | `flex: 1 0 0`, fills space between items |

## Horizontal Layout 2 (Standard)

### Step Item

| Property | Value |
|---|---|
| Width | Equal flex (`flex: 1 0 0`), min 92px observed |
| Layout | Flex column, 8px gap |
| Alignment | Center |

### Number Icon (28px)

| Property | Process | Default |
|---|---|---|
| Size | 28×28px | 28×28px |
| Style | Filled number, brand color | Filled number, gray |

### Connector Line

| Property | Value |
|---|---|
| Height | 2px (visible) or 0px (hidden at start/end) |
| Color | `gray6` `gray6` |
| Gap from icon | 12px |
| Border-radius | 2px on inner end |

### Title

| Property | Process | Default |
|---|---|---|
| Font | `Title/14-semibold` | `Body/14-regular` |
| Size | 14px, weight 600, line-height 22px | 14px, weight 400, line-height 22px |
| Color | `Branding-1` `Branding-1` | `gray2` `gray2` |
| Alignment | Center | Center |

### Subtitle

| Property | Value |
|---|---|
| Font | `Body/12-regular` — 12px, weight 400, line-height 18px |
| Color | `gray3` `gray3` |
| Gap from title | 2px |
| Alignment | Center |

## Horizontal Layout 3 (Custom Icon with Background)

### Step Item

| Property | Value |
|---|---|
| Width | Equal flex, min 92px |
| Layout | Flex column, 6px gap |
| Alignment | Center |

### Icon with Background

| Property | Process | Default |
|---|---|---|
| Background circle | 32×32px, brand color | 32×32px, gray |
| Icon inside | 20×20px, white | 20×20px, white |
| Connector gap | 10px from icon |

Icons are customizable — the 32×32 area is a transparent safe zone, the 28px inner circle holds the background color, and the 20×20 icon can be replaced.

### Connector Line

Same as Layout 2: 2px height, `gray6` `gray6`, hidden at start/end.

### Title & Subtitle

Same as Layout 2.

## Vertical Layout

### Step Item

| Property | Value |
|---|---|
| Layout | Flex row, 12px gap from edge, items start-aligned |
| Content area width | 246px (with button) or flex (without button) |
| Bottom padding | 24px per item (except last) |

### Number Icon (20px, vertical)

| Property | Process | Default |
|---|---|---|
| Size | 20×20px | 20×20px |
| Style | Filled number, brand color | Filled number, gray |
| Top offset | 1px |

### Vertical Connector Line

| Property | Value |
|---|---|
| Width | 2px |
| Color | `gray5` `gray5` |
| Border-radius | 2px |
| Layout | `flex: 1 0 0`, fills vertical space between icons |
| Hidden | On last item (no line below) |

### Title (Vertical)

| Property | Process | Default |
|---|---|---|
| Font | `Title/14-semibold` | `Body/14-regular` |
| Size | 14px, weight 600, line-height 22px | 14px, weight 400, line-height 22px |
| Color | `Branding-1` `Branding-1` | `gray2` `gray2` |
| Alignment | Left | Left |

### Subtitle (Vertical)

| Property | Value |
|---|---|
| Font | `Body/12-regular` — 12px, weight 400, line-height 18px |
| Color | `gray3` `gray3` |
| Gap from title | 4px |
| Text wrap | Supported (multi-line) |

### Action Button (Optional)

| Property | Value |
|---|---|
| Size | `small` button (32px height) |
| Variant | `primary` for active step |
| Position | Right-aligned, top of step item |
| Disabled | `opacity: 0` for non-active steps (hidden) |
| Font | `Mark/14-semibold` — 14px, weight 600 |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | `#0076ff` | Active step icon, title |
| `Color/brand/branding-2` | `#c2deff` | Disabled button background |
| `Color/icon&text/gray2-tex-icon-color-secondary` | `#5a6066` | Default step title |
| `Color/icon&text/gray3-text-icon-color-placeholder` | `#879099` | Subtitle text |
| `Color/neutral/gray5-component-border` | `#d3dae0` | Connector line (Layout 1, Vertical) |
| `Color/neutral/gray6-component-stroke` | `#e1e6eb` | Connector line (Layout 2, 3) |

## Customization Notes

From the Figma spec:
- Step icons are customizable — replace number icons with custom SVG icons, but keep icon styles consistent within the same Steps component.
- Completed step icons can be customized (e.g. checkmark).
- Theme color is customizable — update active icon, title, and connector colors together.
- Layout 3 supports custom background colors on the icon circle.
- Vertical layout supports custom content below the title (e.g. image uploads, tags).
- Horizontal Layout 1 does not support text wrapping; Layout 2 discourages it.
- Vertical layout supports text wrapping.

## Do Not Infer

- Do not override step styles with default Taroify Steps visual styles.
- Do not mix horizontal and vertical layouts in the same Steps component.
- Do not use inconsistent icon styles within the same Steps instance.
- Do not show connector lines at the start of the first step or end of the last step.
- Do not use arbitrary connector colors; use the specified gray tokens.
- Do not show action buttons on non-active steps in vertical layout (hide with opacity 0).
