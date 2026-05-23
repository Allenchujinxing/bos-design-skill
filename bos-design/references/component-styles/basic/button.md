# Button

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5499:4653`
- Mobile demo page: `6454:5499`
- Component set reference: `5497:4074`
- Directory category: `基础 / Button 按钮`

## Purpose

Use Button for explicit commands such as submit, confirm, retry, start task, complete task, cancel, or low-emphasis text actions. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for click behavior, loading behavior, disabled behavior, form submission, dialogs, and toast feedback.

## Variant Axes

The Figma component set exposes these axes:

| Axis | Values |
|---|---|
| `size` | `large`, `middle`, `small`, `extra small` |
| `variant` | `primary`, `secondary`, `outline`, `text` |
| `theme` | `brand`, `error` |
| `press` | `true`, `false` |
| `disable` | `true`, `false` |
| `fronticon` | `true`, `false` |
| `endicon` | `true`, `false` |
| `singleicon` | `true`, `false` |

## Anatomy

- Root button container.
- Label.
- Optional leading icon slot.
- Optional trailing icon slot.
- Optional icon-only button.
- Optional loading indicator for submitted/loading actions.

Icon slots are replaceable. Preserve Button spacing, color, and size rules; choose icon meaning from `references/component-styles/basic/icon.md`. If the iconfont does not include an exact match, use the closest semantic iconfont placeholder and document the substitution.

## Sizes

| Size | Height | Min horizontal padding | Radius | Label token |
|---|---:|---:|---:|---|
| `large` | 48px | 20px | 10px | `Mark/16-semibold` |
| `middle` | 40px | 16px | 8px | `Mark/14-semibold` |
| `small` | 32px | 12px | 6px | `Mark/12-semibold` |
| `extra small` | 28px | 8px | 4px | `Mark/12-semibold` |

Observed examples:

- Label only: `large` 76px, `middle` 64px, `small` 52px, `extra small` 40px.
- Label with one icon: `large` 104px.
- Label with leading and trailing icons: `large` 132px.
- Icon-only button is square: 48, 40, 32, or 28px by size.
- Full-width mobile button: 366px wide in a 390px page with 12px side margins.
- Two-button group: two 177px buttons with an 8px gap in a 390px page.

## Typography

Use semibold label text.

- `Mark/16-semibold`: PingFang SC, 16px, weight 600, line-height 24px.
- `Mark/14-semibold`: PingFang SC, 14px, weight 600, line-height 22px.
- `Mark/12-semibold`: PingFang SC, 12px, weight 600, line-height 18px.

Do not use regular-weight body text for Button labels unless a future Figma component variant explicitly defines it.

## Theme Tokens

| Theme | Normal | Pressed | Disabled | Light background |
|---|---|---|---|---|
| `brand` | `Branding-1` `Branding-1` | `Branding-0` `Branding-0` | `Branding-2` `Branding-2` | `Branding-3` `Branding-3` |
| `error` | `Error-1` `Error-1` | `Error-0` `Error-0` | `Error-2` | `Error-3` |

Other tokens:

- Anti text/icon: `anti`.
- Default text/icon: `gray1` `gray1`.
- Container background: `white1`.
- Icon/text gap fallback: `Space/4` = 4px.

## Variants

### Primary

- Solid theme-color background.
- Pressed uses the theme pressed token.
- Disabled uses the theme disabled token.
- Label and icons use anti text/icon color.
- Use for the strongest action in a page area.

### Secondary

- Light theme background with theme-colored label/icon.
- Pressed state should visibly strengthen the theme expression.
- Disabled uses the matching disabled theme treatment.
- Use for lower-emphasis but still command-like actions.

### Outline

- White or transparent background.
- 1px theme-colored border.
- Theme-colored label/icon.
- Pressed uses pressed theme color for border/text/icon or light theme fill when extra feedback is needed.
- Disabled uses the matching disabled theme token.

### Text

- No visible container fill.
- Theme-colored label/icon.
- Pressed uses pressed theme color.
- Disabled uses disabled theme color.
- Use for low-emphasis inline commands.

## States

| State | Visual rule |
|---|---|
| Normal | Use the selected `variant` and `theme`. |
| Pressed | Use the matching pressed token, such as `Branding-0` or `Error-0`. |
| Disabled | Use the matching disabled token and keep the button visibly unavailable. |
| Loading | Keep button width, height, radius, and alignment stable while showing loading feedback. |

The Figma spec notes that when customizing a button theme color, the pressed and disabled state colors must be updated together.

## Icon Rules

- Leading and trailing icon slots are supported.
- Icon-only buttons use square dimensions matching the button height.
- Icon color follows the label color for the active variant and state.
- Icon and label gap should use the Figma component spacing; fallback to 4px.
- Use icon-only buttons only when the meaning is conventional or strongly supported by surrounding context.

## Layout Usage

- Full-width actions in a mobile page use 12px side margins.
- Button groups use equal widths and an 8px gap.
- Keep only one primary filled action in the same immediate decision area.
- Pair destructive or high-risk `error` actions with confirmation patterns from Taroify/Dialog when needed.
- In BOS field-work pages, prefer `large` or `middle` for primary thumb-zone actions.
- In dense manager pages, use `small`, `extra small`, `text`, or `outline` only for local row-level actions.

## Customization

Figma shows two special customization directions:

- Shape customization: full-round or square-corner buttons.
- Theme customization: custom button theme color.

Only use custom shape or custom theme when the product scenario explicitly needs it. When changing the theme color, update normal, pressed, disabled, and light-background colors together.

## Do Not Infer

- Do not override this component with default Taroify visual styles.
- Do not invent extra button sizes.
- Do not use arbitrary padding or radius values outside the size table.
- Do not use brand blue as decoration when the button is not an action.
- Do not make multiple primary buttons compete in the same area.
