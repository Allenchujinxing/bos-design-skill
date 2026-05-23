# Picker 选择器

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9104:10576`
- Sub-components: `Picker`, `item/option`, `picker-indicator`, `弹层标题`, `Basic_ Toolbar`, `mask-top`, `mask-bottom`
- Directory category: `输入 / Picker 选择器`

## Purpose

Use Picker for selecting from a set of predefined data via a scrollable drum-roller interface. Supports 1–4 columns, two button layout positions (header / bottom), and a special combination with bottom full-width button + close icon. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

The Picker is a bottom sheet panel consisting of:

1. **Title Bar** (top) — Title text, cancel/confirm actions or close icon
2. **Roller Area** (middle) — Scrollable columns with selection indicator
3. **Toolbar** (bottom, optional) — Action buttons when using bottom button layout

## Container

| Property | Value |
|---|---|
| Background | `white1` |
| Border radius | 12px top-left, 12px top-right (bottom sheet style) |
| Width | 390px (full screen width) |
| Layout | Flex column, items center |

## Title Bar

Two layout variants for the action buttons:

### Header Layout (操作位置-顶部)

Actions are inline with the title in the header row.

| Property | Value |
|---|---|
| Height | Auto (padding-based) |
| Padding | 16px vertical, 12px horizontal |
| Layout | Flex row, 4px gap, justify center |
| Background | `white1` |
| Border radius | 12px top-left, 12px top-right |

| Element | Font | Color | Width |
|---|---|---|---|
| Cancel text | `Body/14-regular` 14px, weight 400, line-height 22px | `gray3` `gray3` | 56px, center |
| Title text | `Title/18-semibold` 18px, weight 600, line-height 26px | `gray1` `gray1` | Flex, max-width 216px, center, truncate |
| Confirm text | `Body/14-regular` 14px, weight 400, line-height 22px | `Branding-1` `Branding-1` | 56px, center |

### Bottom Layout (操作位置-底部)

Title is centered in the header, actions are in a bottom toolbar.

| Property | Value |
|---|---|
| Header padding | 16px vertical, 12px horizontal |
| Header layout | Flex row, justify space-between |
| Title | `Title/18-semibold` 18px, weight 600, line-height 26px, `gray1` `gray1`, center, max-width 216px |

### Special Combination (底部大按钮 + 右上关闭)

Title centered with a close icon (24×24px) on the right. Left side has an invisible placeholder for symmetry.

| Element | Property |
|---|---|
| Close icon | iconfont `ic_close_line`, 24×24px, right side |
| Left placeholder | 24×24px, `opacity: 0` (invisible, for centering) |
| Title | Same as bottom layout |

## Roller Area

The scrollable selection columns.

### Container

| Property | Value |
|---|---|
| Padding | 0 16px bottom 16px |
| Visible rows | 3 rows |
| Row pitch | 40px |
| Roller area height | 136px (3 × 40px visible rows + 16px bottom padding) |
| Center spacer | 1 empty row slot above and below the option list |
| Layout | Flex row, items center, justify center |
| Position | Relative (for indicator and masks) |

### Selection Indicator (picker-indicator)

The highlighted band showing the currently selected row.

| Property | Value |
|---|---|
| Height | 40px |
| Background | `gray7` `gray7` |
| Border radius | 6px |
| Position | Absolute, horizontally stretched (left 16px, right 16px) |
| Vertical position | Centered vertically in the roller area |

### Column

Each column is a vertical list of options.

| Property | Value |
|---|---|
| Layout | Flex column, 16px gap, items center, justify center |
| Flex | 1 (equal width columns) |
| Min width | 1px |

### Option Item (item/option)

| Property | Value |
|---|---|
| Layout | Flex row, 0px gap, items center, justify center |
| Padding | 0 8px |
| Width | 100% |
| Height | 24px (text line-height) |
| Text overflow | `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap` |

| State | Font | Color |
|---|---|---|
| Unselected | `Body/16-regular` 16px, weight 400, line-height 24px | `gray3` `gray3` |
| Selected | `Mark/16-semibold` 16px, weight 600, line-height 24px | `gray1` `gray1` |
| Empty (spacer) | — | — (24px height placeholder, no text) |

### Fade Masks

Gradient masks at top and bottom of the roller area to create the drum-roller fade effect.

| Mask | Property |
|---|---|
| Top mask | Height 40px, gradient from `white` to `transparent`, positioned at top |
| Bottom mask | Height 40px, gradient from `white` to `transparent`, rotated 180° (fade from bottom) |
| Position | Absolute, left 16px, right 16px |

## Bottom Toolbar

Used when `buttonLayout = "Bottom"` or in the special combination layout.

### Two-Button Layout (取消 + 确认)

| Property | Value |
|---|---|
| Container padding | 12px |
| Layout | Flex row, 12px gap |
| Background | `white1` |
| Overflow | Clip |

| Button | Background | Text Color | Font | Border Radius | Min Width | Padding |
|---|---|---|---|---|---|---|
| Cancel (取消) | `Branding-3` `Branding-3` | `Branding-1` `Branding-1` | `Title/18-semibold` 18px, weight 600, line-height 26px | 10px | 112px | 11px 20px |
| Confirm (确认) | `Branding-1` `Branding-1` | `anti` | `Title/18-semibold` 18px, weight 600, line-height 26px | 10px | 112px | 11px 20px |
| Both | Flex 1 (equal width) | | | | | |

### Single-Button Layout (确认 only)

| Property | Value |
|---|---|
| Button width | 100% |
| Background | `Branding-1` `Branding-1` |
| Text | `Title/18-semibold` 18px, weight 600, `white` |
| Border radius | 10px |
| Padding | 11px 20px |

### Disabled Button State (已约满)

| Property | Value |
|---|---|
| Background | `Branding-2` `Branding-2` |
| Text color | `anti` |
| Cursor | Not allowed |

## Column Count Variants

| Variant | Columns | Example Use |
|---|---|---|
| 1 column | 1 | User name selection |
| 2 columns | 2 | Province + district (地区) |
| 3 columns | 3 | Year + month + day (日期) |
| 4 columns | 4 | Generic multi-dimension selection |

## Title Bar + Toolbar Matching

The design spec includes a section on matching title bar style with toolbar style:

| Combination | Title Bar | Toolbar |
|---|---|---|
| Header actions | Cancel / Title / Confirm in header | None |
| Bottom two-button | Title only (centered) | Cancel + Confirm buttons |
| Bottom single-button + close | Title + close icon (right) | Single confirm button |
| Bottom disabled | Title + close icon (right) | Disabled button (已约满) |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Confirm text, confirm button bg, cancel button text |
| `Color/brand/branding-2` | | Disabled button bg |
| `Color/brand/branding-3` | | Cancel button bg |
| `Color/icon&text/gray1-text-icon-color-default` | | Title text, selected option text |
| `Color/icon&text/gray3-text-icon-color-placeholder` | | Cancel text (header), unselected option text |
| `Color/neutral/gray7-bg-color-component` | | Selection indicator bg |
| `Color/neutral/white1-bg-color-container` | | Container bg, mask gradient start |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Title/18-semibold` | 18px | 600 | 26px | Title text, toolbar button text |
| `Body/16-regular` | 16px | 400 | 24px | Unselected option text |
| `Mark/16-semibold` | 16px | 600 | 24px | Selected option text |
| `Body/14-regular` | 14px | 400 | 22px | Header cancel/confirm text |

## Implementation Notes

### Title Bar Layout

Header layout uses `justify-content: space-between` to position cancel on the left, title in the center, and confirm on the right. Do NOT use `justify-content: center` with gaps — it will misalign the three elements. The title naturally centers because cancel and confirm have equal fixed widths (56px).

For the close-icon variant, add an invisible spacer (same size as the close icon, 24px) on the left side to keep the title centered via space-between.

### Roller Scroll Interaction

The roller columns are **touch/drag scrollable**, not click-to-select. Implementation requirements:

1. **Drag to scroll** — User touches/clicks and drags vertically to scroll through options. Track `touchstart`/`mousedown` → `touchmove`/`mousemove` → `touchend`/`mouseup`.
2. **Snap to nearest** — On release, calculate the nearest item index from the current scroll offset and animate (`transition: transform 0.3s ease-out`) to snap the item into the indicator band.
3. **Centering math** — Each item uses a 40px row pitch (matches the indicator height). With 3 visible rows, add 1 empty row slot (40px) above and below the real options so the first and last items can scroll to the center position.
4. **Offset formula** — `translateY = -(selectedIndex * 40px)`. The inner container is translated vertically; the indicator band stays fixed in the center.
5. **Boundary clamping** — Clamp the selected index to `[0, items.length - 1]` after snapping.
6. **Disable page scroll** — Use `touch-action: none` or `e.preventDefault()` on touchmove to prevent the page from scrolling while dragging a column.

### Selected Item Styling

Only the item aligned with the indicator band (the snapped item) gets the selected style (`font-weight: 600`, `color: gray1`). All other items use the unselected style (`font-weight: 400`, `color: gray3`). Update styles after each snap.

## Do Not Infer

- Do not change the selection indicator height from 40px or border-radius from 6px.
- Do not change the visible row count from 3 rows unless a new Figma variant explicitly defines it.
- Do not change the roller area height from 136px.
- Do not remove the 1 empty row slot above and below the real options; they are required for first/last option centering.
- Do not change the 16px gap between option items in a column.
- Do not remove the top/bottom fade masks; they are essential for the drum-roller visual effect.
- Do not change the mask height from 48px.
- Do not mix header and bottom button layouts in the same Picker instance.
- Do not change the column equal-width behavior; all columns share space equally via `flex: 1`.
- Do not use bold for unselected options; only the selected option uses semibold (600).
- Do not change the toolbar button border-radius from 10px.
- Do not omit the invisible left placeholder in the close-icon title bar variant; it ensures the title stays centered.
