# Input 输入框

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5317:2423`
- Sub-components: `standard input`, `External label input`, `item/label-horizontal`, `item/label-vertical`, `item/content area`, `suffix`
- Directory category: `输入 / Input 输入框`

## Purpose

Use Input for single-line or multi-line text entry in forms. Supports horizontal label layout (left-aligned / right-aligned), vertical label layout (label above input), external label with bordered input field, required field indicator, icon prefix, helper text, feedback states (error/warning/success), disabled state, display-only state, and suffix actions (buttons, icons, units, links). This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

A standard input row consists of:

1. **Label area** (left or top) — Label text, optional icon prefix, optional required indicator
2. **Content area** (right or below) — Input value / placeholder, optional helper text
3. **Suffix area** (optional, right) — Action button, icon, unit text, or link

## Standard Input (Inline Label)

The primary input pattern. Label and input content are on the same row.

### Container

| Property | Value |
|---|---|
| Background | `white1` |
| Padding | 0 12px (horizontal) |
| Width | 100% (390px design width) |
| Bottom border | 0.5px solid `gray6` `gray6` |
| Bottom border inset | 12px left and 12px right, aligned with the content gutter |

Implementation note: use a pseudo-element or inner divider for the bottom border so the divider is inset by 12px on both sides. In H5/CSS, render the 0.5px divider as `height: 1px; transform: scaleY(0.5); transform-origin: bottom;` and keep it above the row background so it is not covered by the next row. Do not use `height: 0.5px` together with `scaleY(0.5)`, because that renders thinner than the spec. Do not use a full-width `border-bottom` on the outer container.

### Inner Row

| Property | Value |
|---|---|
| Padding | 16px vertical |
| Layout | Flex row, 8px gap |
| Alignment | Items start (default), items center (with suffix button) |

### Label — Horizontal (item/label-horizontal)

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items start |
| Min width | 140px |
| Icon (optional) | 20×20px iconfont icon, `gray1` `gray1` |
| Label text | `Body/16-regular` 16px, weight 400, line-height 24px, `gray1` `gray1` |
| Label max width | 96px, `white-space: nowrap` |
| Required indicator | `*`, 16px regular, `error-1` `Error-1`, after label text |

### Label — Vertical (item/label-vertical)

Used in the vertical (上下) layout variant. Label is above the input content.

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center |
| Icon (optional) | 16×16px iconfont icon, `gray1` `gray1` |
| Label text | `Body/14-regular` 14px, weight 400, line-height 22px, `gray1` `gray1` |
| Required indicator | `*`, 14px regular, `error-1` `Error-1` |

### Content Area (item/content area)

| Property | Value |
|---|---|
| Layout | Flex column, 4px gap |
| Flex | 1 (fills remaining space) |
| Min width | 1px (prevents overflow) |

#### Horizontal — Left-aligned Label

| Property | Value |
|---|---|
| Text alignment | Right (`text-align: right`, `items-end`) |
| Input text | `Body/16-regular` 16px, weight 400, line-height 24px |
| Helper text | `Body/12-regular` 12px, weight 400, line-height 18px |

#### Horizontal — Right-aligned Label

Same as left-aligned but content text is right-aligned.

#### Vertical Layout

| Property | Value |
|---|---|
| Text alignment | Left (`text-align: left`, `items-start`) |
| Input text | `Body/16-regular` 16px, weight 400, line-height 24px |
| Inner layout | Flex column, 8px gap between label and content |

### Suffix Area

Optional right-side element. Shrink 0, does not flex.

#### Action Button

| Property | Value |
|---|---|
| Height | 28px |
| Background | `Branding-1` `Branding-1` |
| Border radius | `radius-md` |
| Padding | 4px 8px |
| Text | `Mark/12-semibold` 12px, weight 600, line-height 18px, `white` |
| Note | Row alignment changes to `items-center` when button is present |

#### Unit Text

| Property | Value |
|---|---|
| Font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Color | `gray1` `gray1` |
| Position | Right of content area |

#### Icon Suffix

| Property | Value |
|---|---|
| Size | 20×20px iconfont icon |
| Color | `gray3` (default) |

#### Clear Icon (输入清空)

When the input has content and is focused, a clear icon appears on the right to clear the value.

| Property | Value |
|---|---|
| Size | 20×20px iconfont icon |
| Icon | iconfont `ic_clear_fill` |
| Color | `gray3` `gray3` |
| Behavior | Tap to clear input value |

#### Link Text

| Property | Value |
|---|---|
| Font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Color | `Branding-1` `Branding-1` |

## States

### Text Colors by State

| State | Input text color | Helper text color | Label color |
|---|---|---|---|
| Default (placeholder) | `gray3` `gray3` | `gray3` `gray3` | `gray1` `gray1` |
| Active (focused) | `gray1` `gray1` | `gray3` `gray3` | `gray1` `gray1` |
| Filled (has value) | `gray1` `gray1` | `gray3` `gray3` | `gray1` `gray1` |
| Disabled | `gray4` `gray4` | — | `gray1` `gray1` |
| Display (read-only) | `gray1` `gray1` | — | `gray1` `gray1` |
| Error | `gray1` `gray1` | `error-1` `Error-1` | `gray1` `gray1` |
| Warning | `gray1` `gray1` | `warning-1` `Warning-1` | `gray1` `gray1` |
| Success | `gray1` `gray1` | `success-1` `Success-1` | `gray1` `gray1` |

### Feedback States

When a validation state is active, the helper text below the input value changes color to match the semantic color. The input value text itself remains `gray1` `gray1`.

| Feedback | Helper text color | Helper text example |
|---|---|---|
| Error | `error-1` `Error-1` | "错误提示信息" |
| Warning | `warning-1` `Warning-1` | "警告提示信息" |
| Success | `success-1` `Success-1` | "成功提示信息" |

## External Label Input

A separate input style where the label is outside and above a bordered input box. Used for form fields that need visual separation.

### Container

| Property | Value |
|---|---|
| Layout | Flex column, 8px gap |
| Width | 100% |

### External Label

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items center |
| Icon (optional) | 16×16px iconfont icon |
| Label text | `Body/14-regular` 14px, weight 400, line-height 22px, `gray1` `gray1` |
| Required indicator | `*`, 14px regular, `error-1` `Error-1` |

### Input Box

| Property | Value |
|---|---|
| Height | 48px |
| Background | `white1` |
| Border | 1px solid `gray5` `gray5` |
| Border radius | `radius-xl` |
| Padding | 12px |
| Gap | 12px (between input text and suffix) |
| Input text | `Body/16-regular` 16px, weight 400, line-height 24px |
| Placeholder color | `gray3` `gray3` |

### Themes

| Theme | Background | Border |
|---|---|---|
| Outline (描边) | `white1` | 1px solid `gray5` `gray5` |
| Filled (填充) | `gray7` `gray7` | None |

### Tips (below input box)

| Property | Value |
|---|---|
| Font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Color | `gray3` (default) / semantic color for feedback states |
| Padding left | 4px |

## Layout Variants

### 通栏布局-上下 (Full-width Vertical)

Standard input rows stacked vertically with vertical label layout. Each row has label on top, input below.

| Property | Value |
|---|---|
| Row height | ~86px (16px padding top + 22px label + 8px gap + 24px input + 16px padding bottom) |
| Container padding | 0 12px |

### 通栏布局-水平 (Full-width Horizontal)

Standard input rows stacked vertically with horizontal label layout. Label on left, input on right.

| Property | Value |
|---|---|
| Row height | ~78px (with helper) / ~56px (without helper) |
| Container padding | 0 12px |

### 卡片布局-上下 (Card Vertical)

Same as full-width vertical but wrapped in a card container.

| Property | Value |
|---|---|
| Card padding | 12px |
| Card background | `white1` |
| Card border radius | `radius-xl` (follows design system radius-8) |
| Inner rows | Same as full-width vertical but width = card width - 24px |

### 卡片布局-水平 (Card Horizontal)

Same as full-width horizontal but wrapped in a card container.

## Special Scenarios

### Label with Icon

Label area can include a 20×20px iconfont icon before the label text (horizontal) or a 16×16px iconfont icon (vertical). The icon is optional and controlled by the `icon` prop. Note: Figma uses a larger container (e.g. 24px) around the icon for auto-layout alignment — the rendered icon size is the icon size listed here, not the container size.

### Label Overflow Handling

| Scenario | Solution |
|---|---|
| Label container fixed width | 86px for the label text area (within 140px min-width label container) |
| Label text too long | `max-width: 96px`, `white-space: nowrap`, text truncated |
| Input container height adaptive | Content area grows to accommodate wrapped text |
| Best practice for long labels | Switch to vertical (上下) layout |

### Input with Selector

Input fields that trigger a picker/selector instead of keyboard input. The content area shows the selected value and may include a right arrow icon to indicate tappability.

## Customization Options

1. **Custom icon** — The label icon slot accepts any icon component
2. **Divider visibility** — The bottom border (0.5px divider) can be hidden

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Action button background, link text |
| `Color/icon&text/gray1-text-icon-color-default` | | Label text, filled input text |
| `Color/icon&text/gray2-tex-icon-color-secondary` | | Secondary text |
| `Color/icon&text/gray3-text-icon-color-placeholder` | | Placeholder text, helper text |
| `Color/icon&text/gray4-text-icon-color-disable` | | Disabled text |
| `Color/icon&text/text-icon-color-anti` | `white1` | Button text on brand background |
| `Color/error/error-1` | | Required indicator, error helper text |
| `Color/warning/warning-1` | | Warning helper text |
| `Color/success/success-1` | | Success helper text |
| `Color/neutral/gray5-component-border` | | External label input border |
| `Color/neutral/gray6-component-stroke` | | Standard input bottom border |
| `Color/neutral/gray7-bg-color-component` | | Filled theme background |
| `Color/neutral/white1-bg-color-container` | | Container background |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Body/16-regular` | 16px | 400 | 24px | Horizontal label text, input value, placeholder, unit text |
| `Body/14-regular` | 14px | 400 | 22px | Vertical label text, external label text, link text |
| `Body/12-regular` | 12px | 400 | 18px | Helper text, tips text |
| `Mark/12-semibold` | 12px | 600 | 18px | Action button text |

## Do Not Infer

- Do not change the label min-width of 140px in horizontal layout.
- Do not change the label max-width of 96px for text truncation.
- Do not use bold/semibold for label text; labels are always regular weight (400).
- Do not change the 8px gap between label and content area.
- Do not change the 4px gap between input text and helper text in the content area.
- Do not change the bottom border from 0.5px solid `gray6`.
- Do not extend the bottom border to the row edge — it must be inset 12px on both sides.
- Do not use the external label input style for standard inline forms — they are separate patterns.
- Do not change the external label input box height from 48px.
- Do not change the external label input border radius from `radius-xl`.
- Do not mix horizontal and vertical label layouts within the same form section.
- Do not place the required `*` indicator before the label text; it always comes after.
