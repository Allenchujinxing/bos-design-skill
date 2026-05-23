# Stepper 步进器

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `8653:26356`
- Sub-components: `基础线框样式`, `强调加减样式`
- Directory category: `输入 / Stepper 步进器`

## Purpose

Use Stepper for incrementing or decrementing a numeric value. Supports two visual styles (outlined / icon-emphasis), editable and non-editable input, configurable min/max range, and decimal support. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Style 1: 基础线框样式 (Outlined)

Three-part horizontal layout: minus button | value display | plus button, connected with shared borders.

### Minus Button

| Property | Value |
|---|---|
| Size | 28×28px |
| Border | 1px solid `gray5` (normal) / `gray6` (disabled) |
| Border radius | 4px left corners only (top-left, bottom-left) |
| Icon | `ic_remove_line`, horizontal line, centered |
| Icon color (normal) | `gray1` `gray1` |
| Icon color (disabled) | `gray4` `gray4` |

### Value Display

| Property | Value |
|---|---|
| Min width | 48px |
| Padding | 3px 4px |
| Border | Top and bottom 1px solid `gray5` (no left/right border) |
| Text font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Text color (normal) | `gray1` `gray1` |
| Text color (disabled) | `gray4` `gray4` |
| Text alignment | Center |
| Editable | When editable, shows input cursor (`Branding-1` `Branding-1`, 1px wide, 16px tall) |

### Plus Button

| Property | Value |
|---|---|
| Size | 28×28px |
| Border | 1px solid `gray5` (normal) / `gray6` (disabled) |
| Border radius | 4px right corners only (top-right, bottom-right) |
| Icon | `ic_add_line`, plus cross, centered |
| Icon color (normal) | `gray1` `gray1` |
| Icon color (disabled) | `gray4` `gray4` |

### Container

| Property | Value |
|---|---|
| Background | `white` |
| Border radius | 4px (overall) |
| Layout | Flex row, items center, no gap (buttons share borders with value) |

## Style 2: 强调加减样式 (Icon Emphasis)

Circular filled icon buttons with a value display between them.

### Minus Button

| Property | Value |
|---|---|
| Size | 24×24px |
| Icon | `ic_remove_circle_fill`, filled circle with minus line |
| Icon color (normal) | `Branding-1` `Branding-1` |
| Icon color (min disabled) | `gray4` `gray4` |
| Icon color (all disabled) | `gray4` `gray4` |

### Value Display

| Property | Value |
|---|---|
| Min width | 36px |
| Padding | 4px |
| Border radius | 4px |
| Background | `gray8` (editable) / transparent (non-editable) |
| Text font | 16px, weight 400, line-height 22px |
| Text color (normal) | `gray1` |
| Text color (disabled) | `gray4` `gray4` |
| Text alignment | Center |

### Plus Button

| Property | Value |
|---|---|
| Size | 24×24px |
| Icon | `ic_add_circle_fill`, filled circle with plus cross |
| Icon color (normal) | `Branding-1` `Branding-1` |
| Icon color (max disabled) | `gray4` `gray4` |
| Icon color (all disabled) | `gray4` `gray4` |

### Container

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap (editable) / 0px gap (non-editable), items center |
| Width | 92px (editable) / auto (non-editable) |

## States

| State | Minus | Value | Plus | Description |
|---|---|---|---|---|
| Min (最小不可减) | Disabled | Shows min value | Normal | Value is at minimum, cannot decrease |
| Max (最大不可加) | Normal | Shows max value | Disabled | Value is at maximum, cannot increase |
| Input (键入数字) | Normal | Editable with cursor | Normal | User is typing a value |
| All disabled (完全禁用) | Disabled | Disabled | Disabled | Entire stepper is non-interactive |
| Normal (可加减) | Normal | Shows current value | Normal | Both buttons active |

## Behavior Rules

1. Step increment is 1 (fixed)
2. Min/max range is configurable per business needs, no component-level limit
3. Editable vs non-editable is configurable — component must support both
4. Decimal support: when needed, display one decimal place (e.g., 9.1)
5. Stepper has fixed width
6. When input is activated, keyboard must not obscure the input field

## Customization Options

1. **Icon color** — The clickable (normal state) icon color can be customized (default is `Branding-1` `Branding-1` for emphasis style)

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Emphasis style icon (normal), input cursor |
| `Color/icon&text/gray1-text-icon-color-default` | | Outlined style icon (normal), value text |
| `Color/icon&text/gray4-text-icon-color-disable` | | Disabled icon, disabled text |
| `Color/neutral/gray5-component-border` | | Outlined style border (normal) |
| `Color/neutral/gray6-component-stroke` | | Outlined style border (disabled) |
| `Color/neutral/gray8-bg-color-page` | | Emphasis style value background (editable) |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Body/14-regular` | 14px | 400 | 22px | Outlined style value text |
| 16px regular | 16px | 400 | 22px | Emphasis style value text |

## Do Not Infer

- Do not change the outlined button size from 28×28px.
- Do not change the emphasis icon size from 24×24px.
- Do not change the outlined value min-width from 48px.
- Do not change the emphasis value min-width from 36px.
- Do not change the 4px gap in emphasis editable style or 0px gap in non-editable.
- Do not change the border-radius from 4px.
- Do not allow the value to go below min or above max.
- Do not show the input cursor when the stepper is non-editable.
- Do not use semibold for the value text; it is always regular weight.
