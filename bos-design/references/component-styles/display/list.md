# List

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9280:6592`
- Component set: `List 列表`
- Directory category: `展示 / List 列表`

## Purpose

Use List for rendering items in a vertical sequence, commonly for settings entries, information displays, and functional entries. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Variant Axes

| Axis | Values |
|---|---|
| `type` | `text` (纯文本展示), `operate` (操作入口，带右箭头) |
| `layout` | `horizontal` (水平布局，标题和辅助说明同行), `vertical` (垂直布局，标题在上辅助说明在下) |
| `fronticon` | `true`, `false` — toggle leading icon |
| `tips` | `true`, `false` — toggle trailing helper text |
| `operateType` | `Default` |

## Anatomy

```
[container (bg surface-primary)]
  [row (py 16, px 12; divider inset 12px; gap 8)]
    [front icon?] [title + (subtitle?)] [tips? / operation?]
```

Each list item is a row inside a container. Row horizontal padding (12px) creates the inset gutter; the divider line is further inset from row edges so it aligns with the content area. The container itself has no horizontal padding — this lets the row's active background span edge-to-edge while the divider stays centered.

## Container

| Property | Value |
|---|---|
| Background | `surface-primary` |
| Width | Full parent (390px in spec) |
| Layout | Flex column, items start-aligned |
| Overflow | Clip |

## Row (list item)

| Property | Value |
|---|---|
| Padding | 16px vertical, 12px horizontal |
| Divider | 0.5px line at bottom, inset 12px on each side (centered with content area) |
| Layout | Flex row, 8px gap, items center-aligned (vertical layout: items start-aligned) |
| Width | Full parent |

Implementation note: the divider is inset from row edges while the active background spans the full row. This can be achieved with the row owning horizontal padding and a pseudo-element (e.g. `::after`) for the inset divider, rather than a standard `border-bottom`.

## Row Heights

| Layout | Content | Row height (including 16px × 2 padding) |
|---|---|
| Horizontal | Title only | 56px (16 + 24 + 16) |
| Vertical | Title + subtitle | 80px (16 + 24 + 2 + 22 + 16) |

## Front Icon (fronticon, Optional)

| Property | Value |
|---|---|
| Size | 20×20px (with 24px vertical icon area in vertical layout) |
| Gap to title | 4px |
| Color | Default icon color per design system |

In vertical layout, the icon sits in a 20×24 area to vertically align with the title baseline.

## Title

| Property | Value |
|---|---|
| Font | `Body/16-regular` — PingFang SC, 16px, weight 400, line-height 24px |
| Color | `text-primary` |
| Text overflow | Ellipsis, single line |
| Layout | Flex grow `1 0 0`, min-width 0 |

## Subtitle (Vertical layout only)

| Property | Value |
|---|---|
| Font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Color | `text-placeholder` |
| Gap from title | 2px |
| Text overflow | Ellipsis, single line (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis`) |
| Copy guideline | 文本内容建议不超过 2 行（Content guideline, not component behavior） |
| Recommended text | 辅助说明文本，建议不超过2行 |

Note: the copy rule "建议不超过2行" is a content guideline for writers, not a forced line-clamp. The component itself renders subtitle as a single-line ellipsis.

## Tips (辅助说明文本, Optional)

Trailing helper text shown on the right side of the row.

| Property | Value |
|---|---|
| Font | `Body/16-regular` — PingFang SC, 16px, weight 400, line-height 24px |
| Color | `text-placeholder` |
| Text align | Right |
| Text overflow | Ellipsis, single line |

Only shown when `type=text` (纯文本展示) or `type=operate` with tips enabled.

## Operation (Operate type only)

### Right Arrow

| Property | Value |
|---|---|
| Icon | `ic_right_line`, 20×20px |
| Color | Default icon color |
| Gap from tips text | 8px |

When `type=operate`, the row ends with a right-arrow icon indicating tap-to-navigate. The operation is right-aligned and includes optional tips text before the arrow.

### Right-side Control Variants

Beyond the default tips text + arrow, the right-side operation area supports:

| Variant | Description |
|---|---|
| Switch (开关) | 44×24px toggle switch; tracks on/off state |
| Button (按钮) | Secondary small button, 32px height, `radius-lg` radius, 14px text |
| Icon Group (图标组) | One or more 20×20 action icons (e.g. edit, copy), 16px gap |
| Dot Badge + Arrow | 8×8 red dot before the right arrow, 4px gap |
| Number Badge + Arrow | Number badge (e.g. 99, 99+) before the right arrow, 4px gap |

Each variant replaces the default tips text or is combined with the arrow based on business requirements.

## Usage Scenarios

| Scenario | Description |
|---|---|
| 纯展示列表 (Display-only) | Information display without tap action, uses `type=text` |
| 功能列表 (Functional) | Tap to navigate to a new page, popup, or bottom sheet, uses `type=operate` |
| 卡片列表 (Card) | List wrapped in a card container with border-radius and outer side margins |

### Card Variant

| Property | Value |
|---|---|
| Width | 366px (`space-page-margin` from 390px screen) |
| Background | `surface-primary` |
| Border-radius | `radius-3xl` |
| Last row divider | Hidden (card edge replaces it) |

Card lists use the same row structure as standalone lists; the container adds outer side margins and a rounded corner clip.

## Icon Controlled Display (图标可控展示)

The `fronticon` prop toggles the leading icon on or off. When `fronticon=false`, the title and content shift left without the icon space.

## Click Interaction State (点击交互状态)

From the Figma annotation:
- On tap, the list row background inverts to `surface-page`
- Background reverts to `surface-primary` on release
- The active background fills the **entire row width** (edge-to-edge), not inset by the 12px content padding

| State | Background |
|---|---|
| Default | `surface-primary` |
| Pressed/Active | `surface-page` (full row width) |

Note: the divider line is inset by 12px on each side (centered within the row's content area), while the active background spans the full row — these two rules are independent.

## Color Tokens

| Token | Use |
|---|---|
| `Color/neutral/surface-primary-bg-color-container` | List background (default) |
| `Color/neutral/surface-page-bg-color-page` | List row active/pressed background |
| `Color/neutral/border-divider-component-stroke` | Row bottom border |
| `Color/icon&text/text-primary-text-icon-color-default` | Title text |
| `Color/icon&text/text-placeholder-text-icon-color-placeholder` | Subtitle, tips text |

## Do Not Infer

- Do not override list styles with default Taroify Cell/List visual styles.
- Do not change the 16px vertical padding or the 12px horizontal row padding.
- Do not use divider widths other than 0.5px.
- Do not extend the divider to the row edge — it must be inset 12px on each side to align with the content area.
- Do not inset the active background — it spans the full row width edge-to-edge.
- Do not remove the right arrow from `type=operate` rows.
- Do not use subtitle with horizontal layout — subtitle is vertical-layout only.
- Do not show a divider on the last row if the list is wrapped in a card container.
- Do not use multi-line subtitle in the component — the "建议不超过2行" rule is a copy guideline, not a line-clamp behavior.
