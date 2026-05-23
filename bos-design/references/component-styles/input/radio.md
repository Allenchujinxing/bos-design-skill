# Radio 单选框

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `6730:2735`
- Sub-components: `Radio icon`, `Radio text`, `Radio list`
- Directory category: `输入 / Radio 单选框`

## Purpose

Use Radio for selecting exactly one option from a predefined set and displaying the selection result. Supports two sizes (large/small), two icon positions (left/right), optional subtitle text, and disabled state. Only one radio in a group can be selected at a time. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

The Radio system has two usage patterns:

1. **Radio Text** — Icon + label inline, used for standalone or horizontal layouts
2. **Radio List** — Full-width row with label and icon, used in vertical lists

## Radio Icon

The selection indicator. Circular shape, four states.

### Large (20×20px)

| State | Icon Name | Description |
|---|---|
| Unchecked | `ic_radio_line` | Circle outline, 1.5px stroke `gray5` |
| Checked | `ic_radio_fill` | Circle filled `Branding-1`, white checkmark inside |
| Unchecked + Disabled | `ic_radio_line` (disabled tokens) | Circle outline, 1.5px stroke `gray5`, `gray8` inner fill |
| Checked + Disabled | `ic_radio_fill` (disabled) | Circle filled `Branding-2`, white checkmark inside |

| Property | Value |
|---|---|
| Icon size | 20×20px iconfont icon |
| Shape | Circle (`border-radius: 50%`) |

### Small (16×16px)

Same states as large, proportionally scaled down.

| Property | Value |
|---|---|
| Icon size | 16×16px iconfont icon |

## Radio Text (Inline)

Icon + text placed side by side. Used for standalone radios or horizontal groups.

### Large (default)

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items start-aligned |
| Icon | Radio icon 20×20px |
| Text font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Text color (default) | `gray1` |
| Text color (disabled) | `gray4` |

### Large with Subtitle (content=true)

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items start-aligned |
| Icon | Radio icon 20×20px |
| Text block | Flex column, 4px gap |
| Title font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Title color (default) | `gray1` |
| Subtitle font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Subtitle color (default) | `gray2` |
| Title + Subtitle color (disabled) | Both `gray4` |

### Small

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center-aligned |
| Icon | Radio icon 16×16px |
| Text font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Text color (default) | `gray1` |
| Text color (disabled) | `gray4` |

## Radio List (Full-width Row)

A full-width list item with text and radio icon. Supports icon on left or right.

### Layout: Right (icon on right, default)

| Property | Value |
|---|---|
| Container width | 100% (390px) |
| Container background | `white1` |
| Container padding | 0 12px |
| Inner row padding | 16px vertical (large) / 12px vertical (small) |
| Inner row layout | Flex row, 8px gap, items start-aligned |
| Bottom border | 0.5px solid `gray6` |
| Text | Flex 1, left-aligned |
| Icon position | Right side, shrink 0 |

### Layout: Left (icon on left)

Same structure but icon comes first in the flex order, text second.

| Property | Value |
|---|---|
| Inner row layout | Flex row, 8px gap, items start-aligned |
| Icon position | Left side, shrink 0 |
| Text | Flex 1, left-aligned |

### Large — Text Only

| Property | Value |
|---|---|
| Text font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Text color (default) | `gray1` |
| Text color (disabled) | `gray4` |
| Icon | Radio icon 20×20px |

### Large — With Subtitle (content=true)

| Property | Value |
|---|---|
| Text block | Flex 1, flex column, 4px gap |
| Title font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Title color (default) | `gray1` |
| Subtitle font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Subtitle color (default) | `gray2` |
| Title + Subtitle color (disabled) | Both `gray4` |

### Small

| Property | Value |
|---|---|
| Inner row padding | 12px vertical |
| Text font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Text color (default) | `gray1` |
| Text color (disabled) | `gray4` |
| Icon | Radio icon 16×16px |

## Horizontal Radio Layout

Multiple Radio Text items arranged horizontally inside a container.

| Property | Value |
|---|---|
| Container background | `white1` |
| Container padding | 12px horizontal, 16px vertical (large) / 12px all (small) |
| Item gap | 12px |
| Layout | Flex row, items start-aligned (large) / items center-aligned (small) |

## Customization Options

1. **Divider visibility** — The bottom border (0.5px divider) in Radio List can be hidden.

## Color Tokens

| Token | Use |
|---|---|
| `Color/brand/branding-1` | | Checked icon fill |
| `Color/brand/branding-2` | | Checked + disabled icon fill |
| `Color/icon&text/gray1-text-icon-color-default` | | Default text color |
| `Color/icon&text/gray2-tex-icon-color-secondary` | | Subtitle text color |
| `Color/icon&text/gray4-text-icon-color-disable` | | Disabled text color |
| `Color/neutral/gray5-component-stroke` | | Unchecked icon stroke |
| `Color/neutral/gray6-component-stroke` | | List item bottom border |
| `Color/neutral/gray8-bg-color-page` | | Disabled unchecked icon inner fill |
| `Color/neutral/white1-bg-color-container` | | Container background |

## Interaction

- Only one radio in a group can be selected at a time. Selecting one automatically deselects the previously selected one.
- Tapping anywhere on the row (text or icon) toggles the selection.
- Disabled radios cannot be interacted with.

## Differences from Checkbox

| Aspect | Radio | Checkbox |
|---|---|
| Icon shape | Circle | Rounded square |
| Selection | Single (one per group) | Multiple |
| Icon position in list | Left or right (`layout` prop) | Left or right (`layout` prop) |
| Indeterminate state | Not supported | Supported |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|
| `Body/16-regular` | 16px | 400 | 24px | Large radio text, list item text |
| `Body/14-regular` | 14px | 400 | 22px | Subtitle text |
| `Body/12-regular` | 12px | 400 | 18px | Small radio text |

## Do Not Infer

- Do not change the icon sizes: 20×20px for large, 16×16px for small.
- Do not use square icons for Radio; Radio always uses circular icons.
- Do not change the gap between icon and text: 4px for inline, 8px for list row.
- Do not allow multiple radios in the same group to be selected simultaneously.
- Do not use bold/semibold for radio text; all text is regular weight (400).
- Do not change the list item bottom border from 0.5px solid `gray6`.
- Do not mix large and small sizes within the same Radio group.
- Do not omit the `layout` prop support — Radio List supports both left and right icon positions, unlike Checkbox which is right-only.
