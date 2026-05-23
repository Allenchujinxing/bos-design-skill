# TabBar

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11701:1804`
- Directory category: `基础 / TabBar 底部标签栏`

## Purpose

Use TabBar for switching between top-level content modules at the bottom of the screen. It sits at the bottom of the page content area, above the Home Indicator safe area. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for tab switching behavior, route binding, and badge logic.

## Content Types

TabBar supports three content modes for its items:

| Type | Component name | Description |
|---|---|---|
| Text | `item/tabBar-tag-horizontal/content` | Text label only |
| Icon & Text | `item/tabBar-tag-horizontal/content&icon` | Icon above text label |
| Icon | `item/tabBar-tag-horizontal/icon` | Icon only, no text |

The icon slot is a 24×24px placeholder area. Use iconfont icons from `basic/icon.md` inside that slot. The icon area has a fixed 24×24 background; the iconfont icon itself can be sized within that area (e.g. 24×24 or 20×20).

## Tab Count

TabBar supports flexible tab counts. Observed in Figma:

| Tabs | Item width (in 390px) |
|---|---|
| 4 tabs | 87.5px each (Filled style) |
| 3 tabs | ~119.3px each (`flex: 1 0 0`) |
| 2 tabs | 183px each (`flex: 1 0 0`) |

Items use equal flex distribution within the container.

## Dimensions

### Filled Style (default)

| Property | Value |
|---|---|
| Height | 56px |
| Width | Full parent width (390px in 390pt design) |
| Background | `white1` |
| Padding | 8px all sides |
| Item gap | 8px |
| Top divider | 0.5px line, `gray6` `gray6` |
| Layout | Flex row, items centered, overflow clip |

### Capsule Style

| Property | Value |
|---|---|
| Height | 56px (content area), 64px (with selected indicator) |
| Width | Narrower than full width (366px observed, with side margins) |
| Background | `white1` |
| Border-radius | `radius-full` (text/icon) or `radius-full` (icon with indicator) |
| Padding | 12px horizontal, 8px vertical |
| Item gap | 8px |
| Shadow | `0px 2px 8px rgba(17,17,17,0.04)` (一级阴影-用于灰色背景) |
| Layout | Flex row, items centered, no top divider |

## Item Dimensions

### Text only (`content`)

| Property | Value |
|---|---|
| Item width | Equal flex or fixed (87.5px for 4 tabs) |
| Item padding | 16px horizontal, 8px vertical |
| Item border-radius | `radius-full` (full round) |
| Item height | 40px |

### Icon & Text (`content&icon`)

| Property | Value |
|---|---|
| Item width | Equal flex (`flex: 1 0 0`) or fixed (87.5px for 4 tabs) |
| Item padding | 16px horizontal, 2px vertical |
| Item border-radius | `radius-full` (selected) or `radius-full` (unselected) |
| Item height | 44px |
| Icon size | 24×24px |
| Icon-to-text gap | 0px (stacked, icon top offset 2px, text at 26px) |

### Icon only (`icon`)

| Property | Value |
|---|---|
| Item width | Equal flex or fixed (87.5px for 4 tabs) |
| Item padding | 8px |
| Item border-radius | `radius-full` |
| Item height | 40px |
| Icon size | 24×24px, centered |

## Typography

### Text label (Text type)

| State | Token | Font | Size | Weight | Line-height | Color |
|---|---|---|---|---|---|---|
| Selected | `Title/16-semibold` | PingFang SC | 16px | 600 | 24px | `Branding-1` `Branding-1` |
| Unselected | `Body/16-regular` | PingFang SC | 16px | 400 | 24px | `gray1` `gray1` |

### Text label (Icon & Text type)

| State | Token | Font | Size | Weight | Line-height | Color |
|---|---|---|---|---|---|---|
| Selected | `Special/11-semibold` | PingFang SC | 11px | 600 | 16px | `Branding-1` `Branding-1` |
| Unselected | `Special/11-regular` | PingFang SC | 11px | 400 | 16px | `gray1` `gray1` |

## Icon Color Tokens

| State | Color | Token |
|---|---|---|
| Selected | `Branding-1` | `Color/brand/branding-1` |
| Unselected | `gray3` | `Color/icon&text/gray3-text-icon-color-placeholder` |

In the icon placeholder, the selected icon uses `Branding-1` blue and the unselected icons use `gray3`.

## Item Style Variants

### Normal (default)

- Selected item: brand-colored text/icon, no background fill.
- Unselected items: default text/icon colors, no background.

### Label (selected indicator)

- Selected item: brand-colored text/icon with a light brand background pill.
- Background: `Branding-3` `Branding-3`.
- Border-radius: `radius-full` (full round pill).
- Unselected items: no background.

## TabBar Style Variants

### Filled (default)

- Full-width bar, white background.
- Top border: 0.5px divider line.
- No border-radius on the bar itself.
- Bar sticks to the bottom edge of the viewport.

### Capsule (floating)

- Narrower than viewport (366px in 390px design, ~12px side margins).
- White background with full-round corners (`radius-full`).
- Shadow: `0px 2px 8px rgba(17,17,17,0.04)`.
- No top divider line.
- Floats above the page content with spacing from bottom edge.

### Capsule with selected indicator

- Same as Capsule but taller (64px) to accommodate a circular selection indicator.
- Selected item shows a 52×52px circle behind the icon.
- The circle uses a brand or dark fill to highlight the active tab.
- Icon inside the selected circle uses `white1` color.

## Customization Notes

From the Figma spec:

1. Three content modes must be supported: icon+text, icon only, text only.
2. Background is customizable: background color, background material, bar width/height, border-radius, inner/outer shadow.
3. Selected/unselected styles are customizable: text color, icon line/filled style, selected shape, icon supports custom image upload.

## Layout Usage

- TabBar sits at the bottom of the page, above the Home Indicator safe area (34px on iPhone).
- Page content should account for the TabBar height to avoid content being hidden behind it.
- Use Filled style for standard full-width bottom navigation.
- Use Capsule style for floating navigation on pages with immersive content (maps, media).
- Support 2–4 tabs; items distribute equally.

## Do Not Infer

- Do not override this component with default Taroify TabBar visual styles.
- Do not invent additional TabBar heights outside 56px (Filled) or 56–64px (Capsule).
- Do not use emoji, text characters, custom SVG, or external icon libraries as icon placeholders; use iconfont icons only.
- Do not mix content types within the same TabBar (all items should be the same type).
- Do not add borders to individual tab items; use the bar-level top divider or shadow only.
