# Textarea 多行文本框

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5351:2142`
- Sub-components: `Textarea 多行文本框`, `placeholder`, `item/label-horizontal`, `item/label-vertical`, `External Label-outline`, `External Label-fill`
- Directory category: `输入 / Textarea 多行文本框`

## Purpose

Use Textarea for multi-line text input. Supports horizontal label layout (label left, content right), vertical label layout (label above content), external label with bordered/filled input box, optional label with icon and required indicator, character counter, and disabled state. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

A Textarea consists of:

1. **Label area** (optional) — Label text, optional icon, optional required indicator
2. **Content area** — Multi-line text input with placeholder
3. **Character counter** — Shows current/max character count (e.g., "0/30")

## Standard Textarea (Inline Label)

### Container

| Property | Value |
|---|---|
| Background | `white1` |
| Padding | 0 12px |
| Width | 100% (390px) |
| Bottom border | 0.5px solid `gray6` `gray6` |

### Inner Row — Horizontal Layout (左右)

| Property | Value |
|---|---|
| Padding | 16px vertical |
| Layout | Flex row, 12px gap, items start |

### Inner Row — Vertical Layout (上下)

| Property | Value |
|---|---|
| Padding | 16px vertical |
| Layout | Flex column, 8px gap, items start |

### Label — Horizontal

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center |
| Width | 86px (fixed) |
| Icon (optional) | 20×20px iconfont icon, `gray1` `gray1` |
| Label text | `Body/16-regular` 16px, weight 400, line-height 24px, `gray1` `gray1` |
| Required indicator | `*`, 16px, `error-0` `Error-0` |

### Label — Vertical

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center |
| Width | 100% |
| Icon (optional) | 16×16px iconfont icon, `gray1` `gray1` |
| Label text | `Body/14-regular` 14px, weight 400, line-height 22px, `gray1` `gray1` |
| Required indicator | `*`, 14px, `error-0` `Error-0` |

### Content Area (placeholder)

| Property | Value |
|---|---|
| Layout | Flex column, 8px gap |
| Flex | 1 (horizontal) / full width (vertical) |
| Text font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Placeholder color | `gray3` `gray3` |
| Input text color | `gray1` `gray1` |
| Disabled text color | `gray4` (both text and placeholder) |
| Min height | 3 lines (72px text area) |
| Cursor | `Branding-1` `Branding-1`, 1px wide |

### Character Counter

| Property | Value |
|---|---|
| Font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Alignment | Right (`text-align: right`) |
| Width | 100% |
| Normal color | Current count `gray1` `gray1`, separator+max `gray3` (e.g., **28**/30) |
| Placeholder color | `gray3` (e.g., 0/30) |
| Over limit color | Count `Error-1` (e.g., **31**/30) |

## External Label Textarea

Label is outside and above a bordered or filled input box.

### Container

| Property | Value |
|---|---|
| Layout | Flex column, 6px gap |
| Width | 100% |

### External Label

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center |
| Padding left | 4px (outline) / 0 (fill) |
| Icon (optional) | 16×16px iconfont icon |
| Label text | `Body/14-regular` 14px, weight 400, line-height 22px, `gray1` `gray1` |
| Required indicator | `*`, 14px, `error-0` `Error-0` |

### Input Box — Outline Theme

| Property | Value |
|---|---|
| Background | `white1` |
| Border | 1px solid `gray5` `gray5` |
| Border radius | `radius-xl` |
| Padding | 16px 12px |

### Input Box — Fill Theme

| Property | Value |
|---|---|
| Background | `gray8` `gray8` |
| Border | None |
| Border radius | `radius-xl` |
| Padding | 16px 12px |

### Content inside external box

Same as standard content area — 16px text, 12px counter, 8px gap between them.

## States

| State | Text color | Counter color | Description |
|---|---|---|---|
| Default | `gray3` (placeholder) | `gray3` `gray3` | Empty, showing placeholder |
| Input | `gray1` `gray1` + cursor `Branding-1` | Count `gray1`, max `gray3` | User is typing |
| Over limit | `gray1` `gray1` + cursor `Branding-1` | Count `Error-1`, max `Error-1` | Exceeded max characters, input is NOT blocked — user can continue typing, counter turns red as warning |
| Disabled | `gray4` `gray4` | `gray3` `gray3` | Non-editable |

## Layout Variants

| Layout | Description |
|---|---|
| 通栏布局-上下 | Full-width, vertical label |
| 通栏布局-水平 | Full-width, horizontal label |
| 卡片布局-上下 | Card container (`radius-3xl` padding, `radius-3xl` border-radius), vertical label |
| 卡片布局-水平 | Card container (`radius-3xl` padding, `radius-3xl` border-radius), horizontal label |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Input cursor |
| `Color/error/error-0` | | Required indicator |
| `Color/error/error-1` | | Over-limit counter |
| `Color/icon&text/gray1-text-icon-color-default` | | Label text, input text, normal counter |
| `Color/icon&text/gray3-text-icon-color-placeholder` | | Placeholder, counter max |
| `Color/icon&text/gray4-text-icon-color-disable` | | Disabled text |
| `Color/neutral/gray5-component-border` | | Outline theme border |
| `Color/neutral/gray6-component-stroke` | | Bottom border |
| `Color/neutral/gray8-bg-color-page` | | Fill theme background |
| `Color/neutral/white1-bg-color-container` | | Container background |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Body/16-regular` | 16px | 400 | 24px | Horizontal label, input text, placeholder |
| `Body/14-regular` | 14px | 400 | 22px | Vertical/external label |
| `Body/12-regular` | 12px | 400 | 18px | Character counter |

## Do Not Infer

- Do not change the horizontal label width from 86px.
- Do not change the 12px gap between label and content in horizontal layout.
- Do not change the 8px gap between label and content in vertical layout.
- Do not change the 8px gap between text area and character counter.
- Do not change the external label input border-radius from `radius-xl`.
- Do not omit the character counter — it is always present.
- Do not change the counter alignment from right-aligned.
- Do not use semibold for any text in Textarea; all text is regular weight (400).
- Do not change the min display height of 3 lines for the text area.
- Do not use `error-1` `Error-1` for the required indicator — it uses `error-0` `Error-0`.
- Do not use `maxlength` to block input when exceeding the character limit — the counter turns red but input must remain allowed.
- Do not use `gray3` `gray3` for disabled placeholder — disabled state uses `gray4` `gray4` for both text and placeholder.
