# Checkbox 多选框

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `6779:2459`
- Sub-components: `Checkbox icon`, `Checkbox text`, `Checkbox text small`, `Checkbox list`, `Checkbox group`
- Directory category: `输入 / Checkbox 多选框`

## Purpose

Use Checkbox for selecting one or more options from a predefined set and displaying the selection result. Supports two sizes (large/small), two layout modes (inline text / list row), optional subtitle text, disabled state, and indeterminate state. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

The Checkbox system has three usage patterns:

1. **Checkbox Text** — Icon + label inline, used for standalone or horizontal layouts
2. **Checkbox List** — Full-width row with label on one side and icon on the other, used in vertical lists
3. **Checkbox Group** — Multiple Checkbox List items stacked vertically

## Checkbox Icon

The selection indicator. Two shapes: square (checkbox) and circle (radio, documented separately). Four states per shape.

### Large (20×20px)

| State | Icon Name | Description |
|---|---|---|
| Unchecked | `ic_checkbox_line` | Rounded square outline, 2px stroke `gray5` `gray5`, white fill |
| Checked | `ic_checkbox_fill` | Rounded square filled `Branding-1` `Branding-1`, white checkmark inside |
| Unchecked + Disabled | `ic_checkbox_line` (disabled tokens) | Rounded square outline, 2px stroke `gray5` `gray5`, `gray8` `gray8` fill |
| Checked + Disabled | `ic_checkbox_fill` (disabled) | Rounded square filled `Branding-2` `Branding-2`, white checkmark inside |
| Indeterminate | `ic_minus_fill` | Rounded square filled `Branding-1` `Branding-1`, white horizontal dash inside |

| Property | Value |
|---|---|
| Container size | 20×20px |
| Icon inset | 8.33% (≈1.67px padding) |
| Corner radius | `radius-xs` (inner square) |

Use `ic_minus_fill` as the iconfont mapping for the indeterminate checkbox state.

### Small (16×16px)

Same states as large, proportionally scaled down.

| Property | Value |
|---|---|
| Container size | 16×16px |
| Icon inset | 8.33% |
| Wrapper height | 18px (with 1px vertical padding for alignment) |

## Checkbox Text (Inline)

Icon + text placed side by side. Used for standalone checkboxes or horizontal groups.

### Large (default)

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items start-aligned |
| Icon | Checkbox icon large (20×20px), inside 24px height container |
| Text font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Text color (default) | `gray1` `gray1` |
| Text color (disabled) | `gray4` `gray4` |

### Large with Subtitle (content=true)

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items start-aligned |
| Icon | Checkbox icon large (20×20px) |
| Text block | Flex column, 4px gap |
| Title font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Title color (default) | `gray1` `gray1` |
| Subtitle font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Subtitle color (default) | `gray2` `gray2` |
| Title + Subtitle color (disabled) | Both `gray4` `gray4` |

### Small

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items centered |
| Icon | Checkbox icon small (16×16px), inside 18px height container |
| Text font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Text color (default) | `gray1` `gray1` |
| Text color (disabled) | `gray4` `gray4` |

## Checkbox List (Full-width Row)

A full-width list item with text on the left and checkbox icon on the right. Used in vertical selection lists.

### Large (default)

| Property | Value |
|---|---|
| Container width | 100% (390px design width) |
| Container background | `white1` |
| Container padding | 0 12px (horizontal) |
| Inner row padding | 16px vertical |
| Inner row layout | Flex row, 8px gap, items start-aligned |
| Bottom border | 0.5px solid `gray6` `gray6` |
| Text | Flex 1, `Body/16-regular` 16px, weight 400, line-height 24px |
| Text color (default) | `gray1` `gray1` |
| Text color (disabled) | `gray4` `gray4` |
| Icon position | Right side, shrink 0 |
| Icon | Checkbox icon large (20×20px), inside 24px height container |

### Large with Subtitle (content=true)

| Property | Value |
|---|---|
| Inner row layout | Flex row, 8px gap, items start-aligned |
| Text block | Flex 1, flex column, 4px gap |
| Title font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Title color (default) | `gray1` `gray1` |
| Subtitle font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Subtitle color (default) | `gray2` `gray2` |
| Title + Subtitle color (disabled) | Both `gray4` `gray4` |
| Icon position | Right side, top-aligned with title |

### Small

| Property | Value |
|---|---|
| Inner row padding | 12px vertical |
| Inner row layout | Flex row, items centered, space-between |
| Text | `Body/12-regular` 12px, weight 400, line-height 18px |
| Text color (default) | `gray1` `gray1` |
| Text color (disabled) | `gray4` `gray4` |
| Icon | Checkbox icon small (16×16px), inside 18px height container with 1px vertical padding |

## Horizontal Checkbox Layout

Multiple Checkbox Text items arranged horizontally inside a container.

| Property | Value |
|---|---|
| Container background | `white1` |
| Container padding | 12px horizontal, 16px vertical (large) / 12px all (small) |
| Item gap | 12px (between checkbox text items) |
| Layout | Flex row, items start-aligned (large) / items centered (small) |

### Horizontal Variants

| Variant | Items | Size |
|---|---|---|
| Single | 1 item | Large |
| Double | 2 items | Large |
| Triple | 3 items | Large |
| Single small | 1 item | Small |
| Double small | 2 items | Small |
| Triple small | 3 items | Small |

## Checkbox Group (Vertical List)

Multiple Checkbox List items stacked vertically. Used inside popups or full-page selection views.

| Property | Value |
|---|---|
| Layout | Flex column, no gap |
| Width | 100% |
| Background | Inherits from Checkbox List items (`white1`) |

### Layout Variants

#### 通栏样式 (Full-width)

- Checkbox Group fills the full screen width (390px)
- Placed on a dark overlay background `translucent`
- Items have standard 12px horizontal padding

#### 卡片样式 (Card)

- Checkbox Group is inset from screen edges
- Placed on a dark overlay background `translucent`
- Container has reduced width with card-like appearance

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Checked icon fill |
| `Color/brand/branding-2` | | Checked + disabled icon fill |
| `Color/icon&text/gray1-text-icon-color-default` | | Default text color |
| `Color/icon&text/gray2-tex-icon-color-secondary` | | Subtitle text color |
| `Color/icon&text/gray4-text-icon-color-disable` | | Disabled text and icon color |
| `Color/neutral/gray5-component-stroke` | | Unchecked icon border |
| `Color/neutral/gray6-component-stroke` | | List item bottom border |
| `Color/neutral/gray8-bg-color-page` | | Disabled unchecked icon fill |
| `Color/neutral/white1-bg-color-container` | | Container background, unchecked icon fill |

## States

| State | Icon | Text Color | Interactive |
|---|---|---|---|
| Unchecked | Square outline, white fill | `gray1` `gray1` | Yes |
| Checked | Square filled `Branding-1`, white checkmark | `gray1` `gray1` | Yes |
| Unchecked + Disabled | Square outline, `gray8` fill | `gray4` `gray4` | No |
| Checked + Disabled | Square filled `Branding-2`, white checkmark | `gray4` `gray4` | No |
| Indeterminate | Square filled `Branding-1`, white dash | `gray1` `gray1` | Yes |

## Customization Options

Based on the "组件自定义项" section in the Figma spec:

1. **Custom icon** — The checkbox icon can be replaced with a semantic iconfont icon (e.g., radio circle icons). The icon slot accepts 20×20px or 16×16px iconfont icons only.
2. **Divider visibility** — The bottom border (0.5px divider) in Checkbox List can be hidden when needed.

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Body/16-regular` | 16px | 400 | 24px | Large checkbox text, list item text |
| `Body/14-regular` | 14px | 400 | 22px | Subtitle text |
| `Body/12-regular` | 12px | 400 | 18px | Small checkbox text |

## Do Not Infer

- Do not change the icon sizes: 20×20px for large, 16×16px for small.
- Do not use a different border radius for the checkbox square icon; it uses `radius-xs`.
- Do not change the gap between icon and text: 4px for inline, 8px for list row.
- Do not place the checkbox icon on the left in Checkbox List layout — it supports both left and right positions via the `layout` prop.
- Do not use bold/semibold for checkbox text; all text is regular weight (400).
- Do not change the list item bottom border from 0.5px solid `gray6`.
- Do not mix large and small sizes within the same Checkbox Group.
- Do not omit the disabled fill color (`gray8`) for unchecked disabled state — it must differ from the default white fill to indicate non-interactivity.
