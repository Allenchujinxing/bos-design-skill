# Tag

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11111:5815`
- Component set: `Tag 标签`
- Directory category: `展示 / Tag 标签`

## Purpose

Use Tag to indicate the category, attribute, or status of a subject. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Types

Tag is a standard rectangular text tag (通用).

| Type | Description |
|---|---|
| 通用 (General) | Standard rectangular tag, the primary type |

## Customization Rules

From the Figma spec notes:
- **Customizable**: color, font weight, border-radius
- **Not customizable**: height, padding, font size — these are fixed per size variant

## Variant Axes

| Axis | Values |
|---|---|
| `propValue` (Theme) | `Primary_full`, `Primary_light`, `Primary_line`, `Default_full`, `Default_light`, `Default_line`, `Discount_full`, `Discount_light`, `Discount_line`, `Danger_full`, `Danger_light`, `Danger_line`, `Success_full`, `Success_light`, `Success_line` |
| `propValue1` (Size) | `small` (16px height), `medium` (18px height), `large` (20px height), `extralarge` (24px height) |
| `icon` | `true`, `false` |

## Size Variants (通用标签尺寸)

| Size | Height | Padding (h × v) | Font size | Line-height | Font weight | Icon size | Icon support |
|---|---|---|---|---|---|
| small (16) | 16px | 4px × 1px | 10px | 14px | 600 (full only) / 400 (light, line) | — | ❌ Not supported |
| medium (18) | 18px | 4px × 1px | 11px | 16px | 600 (full only) / 400 (light, line) | 12×12px | ✅ Supported |
| large (20) | 20px | 6px × 2px | 11px | 16px | 600 (all styles) | 12×12px | ✅ Supported |
| extralarge (24) | 24px | 8px × 2px | 12px | 18px | 600 (all styles) | 14×14px | ✅ Supported |

### Font Weight Rules by Size

| Size | Full style | Light style | Line style |
|---|---|---|
| 16 (small) | Semibold 600 (反白文字加粗) | Regular 400 | Regular 400 |
| 18 (medium) | Semibold 600 (仅反白的文字加粗) | Regular 400 | Regular 400 |
| 20 (large) | Semibold 600 (所有文字都加粗) | Semibold 600 | Semibold 600 |
| 24 (extralarge) | Semibold 600 (所有文字都加粗) | Semibold 600 | Semibold 600 |

> Note: "仅反白的文字加粗" means only white-on-color text is bold; colored text on light/line backgrounds stays regular. At size 20+ all text is bold regardless of style.

## Common Properties

| Property | Value |
|---|---|
| Border-radius | `radius-md` |
| Layout | Flex row, align center |
| Icon-text gap | 2px (when icon is present) |
| Text align | Center |
| White-space | No wrap |
| Font family | PingFang SC |
| Overflow | Clip |

## Theme Colors (通用标签主题)

### Primary

| Style | Background | Border | Text color | Icon color |
|---|---|---|---|
| Primary_full | `Branding-1` | none | `text-inverse` | `text-inverse` |
| Primary_light | `Branding-3` | none | `Branding-1` | `Branding-1` |
| Primary_line | none | 1px solid `Branding-2` | `Branding-1` | `Branding-1` |

### Default

| Style | Background | Border | Text color | Icon color |
|---|---|---|---|
| Default_full | `text-primary` | none | `text-inverse` | `text-inverse` |
| Default_light | `surface-component` | none | `text-primary` | `text-primary` |
| Default_line | none | 1px solid `border-default` | `text-primary` | `text-primary` |

### Discount

| Style | Background | Border | Text color | Icon color |
|---|---|---|---|
| Discount_full | `Discount-1` `LowPrice-1` | none | `text-inverse` | `text-inverse` |
| Discount_light | `Discount-3` `LowPrice-3` | none | `Discount-1` `LowPrice-1` | `LowPrice-1` |
| Discount_line | none | 1px solid `Discount-2` `LowPrice-2` | `Discount-1` `LowPrice-1` | `LowPrice-1` |

### Danger

| Style | Background | Border | Text color | Icon color |
|---|---|---|---|
| Danger_full | `Error-0` | none | `text-inverse` | `text-inverse` |
| Danger_light | `Error-3` | none | `Error-0` | `Error-0` |
| Danger_line | none | 1px solid `Error-2` | `Error-0` | `Error-0` |

### Success

| Style | Background | Border | Text color | Icon color |
|---|---|---|---|
| Success_full | `Success-0` | none | `text-inverse` | `text-inverse` |
| Success_light | `Success-3` | none | `Success-0` |
| Success_line | none | 1px solid `Success-2` | `Success-0` |

## Icon

| Property | Value |
|---|---|
| Default icon | `ic_info_circle_line` |
| Size (medium, large) | 12×12px |
| Size (extralarge) | 14×14px |
| Color | Matches text color of the current theme |
| Position | Before text, flex shrink 0 |
| Availability | Only tags with height ≥ 18px support icons |

## Component Status (组件状态)

Tags support the following states:

| State | Description |
|---|---|
| 默认 (Default) | Standard display, no icon |
| 带图标 (With icon) | Display with leading icon (only for height ≥ 18px) |

> Only height ≥ 18px tags support the icon state. The Figma spec shows both states side by side for comparison.

## Color Tokens

| Token | Use |
|---|---|
| `Color/brand/branding-1` | Primary full bg, Primary text |
| `Color/brand/branding-2` | Primary line border |
| `Color/brand/branding-3` | Primary light bg |
| `Color/icon&text/text-primary-text-icon-color-default` | Default full bg, Default text |
| `Color/neutral/border-default-component-border` | Default line border |
| `Color/neutral/surface-component-bg-color-component` | Default light bg |
| `Color/discount/discount-1` `LowPrice-1` | Discount full bg, Discount text |
| `Color/discount/discount-2` `LowPrice-2` | Discount line border |
| `Color/discount/discount-3` `LowPrice-3` | Discount light bg |
| `Color/error/error-0` | Danger full bg, Danger text |
| `Color/error/error-2` | Danger line border |
| `Color/error/error-3` | Danger light bg |
| `Color/success/success-0` | Success full bg, Success text |
| `Color/success/success-2` | Success line border |
| `Color/success/success-3` | Success light bg |
| `Color/icon&text/text-icon-color-text-inverse` `surface-primary` | White text on full-color tags |
| `Color/neutral/surface-primary-bg-color-container` | White text (alternate token) |

## Do Not Infer

- Do not override tag styles with default Taroify Tag visual styles.
- Do not add icon support to small (16px) tags — only height ≥ 18px supports icons.
- Do not change the fixed height, padding, or font size per size variant — these are not customizable.
- Do not use font weight 600 for light/line styles at sizes 16 and 18 — only full style uses bold at those sizes.
- Do not use border-radius other than `radius-md` for standard tags.
- Do not mix themes within a single tag instance.
