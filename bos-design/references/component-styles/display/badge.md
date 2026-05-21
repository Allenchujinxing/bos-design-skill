# Badge

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `8374:24470`
- Component set: `Badge 提示徽标`
- Directory category: `展示 / Badge 提示徽标`

## Purpose

Use Badge to mark a status on the top-right corner of an icon or after a menu label. Common use cases include indicating new content in a section entry or highlighting a feature entry. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Types

Badge has three types:

| Type | Description |
|---|---|
| 点徽标 (Dot) | Small solid dot, indicates content change without specifying count |
| 数字徽标 (Number) | Numeric badge showing unread/pending count (1–99, overflow shows "99+") |
| 飘带徽标 (Ribbon) | Marketing-style badge with text like "New" / "Hot", shaped with one sharp corner |

## 1. Dot Badge (点徽标)

Used to notify users that section content has changed.

### Style

| Property | Value |
|---|---|
| Size | 8×8px |
| Shape | Circle |
| Background | `Error-1` `Error-1` |
| Border | none |

### Placement Variants

| Variant | Description |
|---|---|
| 点徽标 | Standalone dot |
| 文字 + 点徽标 | Dot positioned at top-right of text, 8px offset |
| icon + 点徽标 | Dot positioned at top-right of icon, overlapping the corner |
| 列表 + 点徽标 | Dot placed before the right arrow in list rows, 4px gap |

### Action State

- **Appear**: Displayed at the entry point when section content changes
- **Dismiss**: Removed after user enters the section

## 2. Number Badge (数字徽标)

Used to indicate the count of new content or pending items. Max value is 99; values beyond display as "99+".

### Style

| Property | Value |
|---|---|
| Height | 16px (fixed) |
| Min width | 16px (actual) / 24px (per spec for standalone) |
| Width | Auto-adapts to content |
| Padding | 4px horizontal, 1px vertical |
| Border-radius | 30px (full pill) |
| Background | `Error-1` `Error-1` |
| Font | `PingFang SC:Semibold`, 10px, weight 600, line-height 14px |
| Text color | `anti` |
| Text align | Center |

### Number Formatting

| Value | Display |
|---|---|
| 1–99 | Exact number (e.g. `1`, `99`) |
| ≥ 100 | `99+` |

### Placement Variants

| Variant | Description |
|---|---|
| 数字徽标 | Standalone number badge |
| icon + 数字徽标 | Badge positioned at top-right of icon, 8px offset from icon edge (large icons), 4px offset (small icons) |
| 文字 + 数字徽标 | Badge positioned at top-right of text, 8px offset |
| 列表 + 数字徽标 | Badge placed before the right arrow in list rows, 4px gap |

### Action State

- **Appear**: Shown at the section entry when there is new content or pending items
- **Dismiss**: Per content priority — either dismisses on entry or persists until items are processed

## 3. Ribbon Badge (飘带徽标)

Used for new feature alerts or key feature recommendations. Typically displays "New" / "Hot" (English words with only first letter capitalized).

### Style

| Property | Value |
|---|---|
| Height | 16px (fixed) |
| Width | Auto-adapts to content, min 24px |
| Padding | 4px horizontal, 1px vertical |
| Border-radius | 8px top-left / 8px top-right / 8px bottom-right / **1px bottom-left** |
| Background | `Error-1` `Error-1` |
| Font | `PingFang SC:Semibold`, 10px, weight 600, line-height 14px |
| Text color | `anti` |
| Text align | Center |

The distinctive 1px bottom-left corner creates the asymmetric "ribbon tail" look. The other three corners are rounded.

### With Border Variant

Some ribbon badges (e.g. overlaid on background images) add a 1px white border for contrast:

| Property | Value |
|---|---|
| Border | 1px solid `anti` |
| Border-radius | 8px TL / 10px TR / 10px BR / 1px BL |

Note: the bordered variant uses asymmetric 8/10/10/1 radii (not uniform increase).

### Content Rules

| Rule | Detail |
|---|---|
| Font size | 10px (per spec) |
| Line-height | 12px (per spec) / 14px (actual in component) |
| Font weight | Semibold 600 |
| Text format | English words first letter only capitalized (e.g. "New", "Hot", not "NEW" or "HOT") |
| Height | Fixed 16px, does not wrap |
| Width | Auto-adapts, min 24px per spec |

### Placement Variants

| Variant | Description |
|---|---|
| 飘带徽标 | Standalone ribbon badge |
| icon + 飘带徽标 | Ribbon positioned at top-right of icon, 4px offset |
| 文字 + 飘带徽标 | Ribbon positioned at top-right of text, 4px offset |

### Action State

- **Appear**: Displayed at the top-right of an icon or text by default; supports entry animation
- **Dismiss**: Per content priority — either dismisses on entry or persists permanently

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/error/error-1` | `#f72626` | Badge background (all types) |
| `Color/icon&text/text-icon-color-anti` | `#ffffff` | Badge text (number, ribbon) |
| `Color/neutral/white1-bg-color-container` | `#ffffff` | Ribbon badge white border |

## Positioning Rules

Badges are positioned absolutely relative to their anchor element:

| Anchor | Badge Position | Offset |
|---|---|---|
| Icon (24px) | Top-right corner, overlapping | ~8px above and right of icon top-right |
| Text | Top-right of text baseline | 4–8px above and right |
| List row | Before right arrow | 4px gap from arrow |

## Do Not Infer

- Do not override badge styles with default Taroify Badge visual styles.
- Do not display numbers above 99 as exact values — always use "99+" for overflow.
- Do not use colors other than `Error-1` `Error-1` for the badge background.
- Do not uppercase ribbon badge text (use "New", not "NEW").
- Do not change the asymmetric border-radius on ribbon badges — the 1px bottom-left corner is the defining feature.
- Do not use ribbon badge dimensions smaller than 16px height.
- Do not omit the white border on ribbon badges when overlaid on image backgrounds.
