# Calendar

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5281:652` (Canvas: Calendar日历)
- Directory category: `输入 / Calendar 日历`

## Purpose

Use Calendar for date selection in single-select, multi-select, or range-select modes. Calendar can appear as a bottom sheet popup, an inline page component, or be triggered from a form input field. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for date logic, range validation, and scroll behavior.

## Usage Modes

### 1. Bottom Sheet Popup (弹层日历)

The most common mode. Calendar appears in a bottom popup triggered by a form field or button.

| Property | Value |
|---|---|
| Popup height | 675px (from bottom of 844px screen) |
| Title bar | 50px, with title text and close icon |
| Week header | 52px, 7 columns (日/一/二/三/四/五/六) |
| Date grid | Scrollable area below week header |
| Bottom action | ToolBar with confirm button (72px) |
| Home indicator | 34px safe area |
| Background overlay | Semi-transparent mask behind popup |
| Corner radius | 12px top-left and top-right, 0px bottom |
| Background | `white1` |

### 2. Inline Page Calendar (页面日历模式)

Calendar embedded directly in the page content, not in a popup. Used for task overview, scheduling, and dashboard views.

| Property | Value |
|---|---|
| Month header | "2025年 8月" with optional dropdown icon, 24px height |
| Week header | 44px, 7 columns with 48×28px cells |
| Date grid | Full page width, scrollable vertically |
| Bottom action | Optional ToolBar at page bottom |
| Navigation | Month title with caret-down icon for month picker |

### 3. Form Input Trigger (表单触发日历)

A form input field that opens the Calendar popup when tapped.

| Property | Value |
|---|---|
| Input field | Standard input component (56px height) |
| Trigger | Tap opens bottom sheet calendar |
| Display format | Selected date shown in input field |
| Variants | Single date, date range (start + end fields) |

## Calendar Grid Layout

### Week Header Row

| Property | Value |
|---|---|
| Height | 52px (popup) or 44px (inline) |
| Columns | 7 equal columns |
| Cell width | ~48px per column |
| Cell padding | 12px horizontal from container edge |
| Font | `Body/14-regular` — 14px, weight 400, line-height 22px |
| Color | `gray1` `gray1` |
| Alignment | Center |
| Labels | 日/一/二/三/四/五/六 (Chinese) or SUN/MON/TUE/WED/THU/FRI/SAT (International) |

### Month Section Header

| Property | Value |
|---|---|
| Height | 24px text |
| Font | `Body/16-regular` — 16px, weight 400, line-height 24px (popup) |
| Font (inline) | `Title/18-semibold` — 18px, weight 600, line-height 26px |
| Color | `gray1` `gray1` |
| Left padding | 12px |
| Format | "2025年 8月" or "August 2025" (international) |

### Date Cell (日历单元)

| Property | Value |
|---|---|
| Width | 48px (fixed) |
| Height | 60px (fixed) |
| Border-radius | 8px (overflow clip) |
| Content area | 40px wide text centered (4px inset from sides) |
| Column pitch | ~52.3px (366px ÷ 7), cells 48px with ~4.3px gap between |
| Column distribution | 7 columns evenly distributed within 390px - 24px (12px each side) = 366px |
| Row gap | 5px between rows (65px row pitch = 60px cell + 5px gap) |
| Date number position | Centered horizontally, y=18px from top |

## Date Cell States

### Basic States

| State | Date font | Date color | Background | Description text |
|---|---|---|---|---|
| Normal | 16px regular | `gray1` `gray1` | None | — |
| Today | 16px regular | `gray1` `gray1` | None | Shows "今天" or "今" instead of number |
| Selected (single) | 16px semibold | `anti` | 48×60 full cell, `Branding-1` `Branding-1`, radius 8px | — |
| Disabled | 16px regular | `gray3` `gray3` | None | — |
| Today disabled | 16px regular | `gray3` `gray3` | None | Shows "今天" grayed out |

### Range Selection States

| State | Date color | Background | Shape |
|---|---|---|---|
| Range start | `anti` | 48×60 full cell, `Branding-1` `Branding-1`, radius 8px | Only left side has 8px radius; right side is square (0px) to connect seamlessly with range middle fill |
| Range end | `anti` | 48×60 full cell, `Branding-1` `Branding-1`, radius 8px | Only right side has 8px radius; left side is square (0px) to connect seamlessly with range middle fill |
| Range middle | `gray1` `gray1` | Full cell 48×60px rectangle, `gray7` `gray7` | No rounding, fills full cell width and height edge-to-edge; adjacent middle cells connect without gaps |

### Special Style 1 — Status Tag + Description

Used in task/scheduling calendars. Each cell can show a colored status tag at the top and a description below the date.

| Element | Font | Color | Position |
|---|---|---|---|
| Status tag | 10px semibold | White on colored background | Top of cell, full width, 12px height |
| Date number | 16px regular/semibold | `gray1` `gray1` | Center, y=18px |
| Description | 10px regular | Customizable | Bottom, y=42px, 14px height |

Tag colors are customizable per business (e.g. green for "已达成", red for "未达成", blue for "进行中").

### Special Style 2 — Background Image

Each cell supports a custom background image that fills the entire 48×60px cell area. Date number overlays on top.

### Double Description

Cells can show text above and below the date number:

| Element | Position | Font | Height |
|---|---|---|---|
| Top text (e.g. "春节") | y=4px | 10px regular | 14px |
| Date number | y=18px | 16px regular | 24px |
| Bottom text (e.g. "¥99") | y=42px | 10px regular | 14px |

## Typography Tokens

| Token | Size | Weight | Line-height | Use |
|---|---|---|---|---|
| `Body/16-regular` | 16px | 400 | 24px | Date numbers, month headers |
| `Title/16-semibold` | 16px | 600 | 24px | Selected date number |
| `Body/14-regular` | 14px | 400 | 22px | Week header labels |
| `Body/10-regular` | 10px | 400 | 14px | Cell descriptions (price, status) |
| `Mark/10-semibold` | 10px | 600 | 14px | Status tag text |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | `#0076ff` | Selected date background, range endpoints |
| `Color/brand/branding-3` | `#ebf4ff` | (Reserved, not used for range middle) |
| `Color/neutral/gray7-bg-color-component` | `#f0f3f5` | Range middle background |
| `Color/icon&text/gray1-text-icon-color-default` | `#111111` | Normal date text |
| `Color/icon&text/gray3-text-icon-color-placeholder` | `#879099` | Disabled date text |
| `Color/neutral/white1-bg-color-container` | `#ffffff` | Selected date text, cell background |

## Selection Modes

| Mode | Description | Visual |
|---|---|---|
| Single select | Tap one date, full cell highlight | Blue 8px rounded rect on selected cell |
| Range select | Tap start + end, fill range between | Blue rounded rects on endpoints, `gray7` gray fill between |
| Same-day range | Tap same date twice = full day range | Single blue rounded rect |

## Popup Structure (Bottom Sheet)

From top to bottom:
1. **Title bar** (50px) — Title text + iconfont close icon (24×24px, right-aligned)
2. **Optional tab switcher** — e.g. "时租/日租" capsule tabs
3. **Week header** (52px) — 7 day labels
4. **Scrollable date area** — Multiple months, each with month header + date grid
5. **ToolBar** (72px) — Confirm button (full-width primary)
6. **Home indicator** (34px)

## Inline Structure (Page Mode)

From top to bottom:
1. **Month header** — "2025年 8月" with optional dropdown
2. **Week header** (44px) — 7 day labels, with bottom divider line
3. **Date grid** — Single month or multi-month scrollable
4. **Optional ToolBar** at page bottom

## Layout Rules

- Date cells are always 48×60px fixed size with 8px border-radius (overflow clip).
- 7 columns distributed evenly within the container: (390px - 12px left - 12px right) = 366px ÷ 7 ≈ 52.3px pitch per column. Each cell is 48px wide, leaving ~4.3px gap between cells.
- Date number text (40px wide) is centered within the 48px cell width.
- Months scroll vertically; each month starts on the correct weekday column.
- Empty cells at the start/end of months are left blank (no number, no background).
- Range middle fill extends the full cell size (48×60px) so adjacent fills connect without visible gaps.
- Range endpoint connection: the gray fill behind endpoints should extend 50% of the cell-wrap width (from center to edge), with the blue endpoint cell layered on top (z-index) to cover the overlap. This ensures seamless visual connection with no white gaps between the blue endpoint and gray range fill.
- When a range spans across a week boundary (Saturday to Sunday), the fill does NOT connect across the row break; each row's range fill is independent.

## Implementation Notes

When implementing this calendar, follow these critical rules to avoid common issues:

### Grid Layout
- Use CSS Grid with `grid-template-columns: repeat(7, 1fr)` and **NO column gap**. The gap between cells comes from the cell being 48px inside a wider grid column (~52.3px). If you add grid gap, range fills will have visible breaks.
- Each grid item is a `cell-wrap` container that takes the full column width. The visible 48px cell is centered inside it.

### Range Fill Connection
- Range middle cells: use a `::before` pseudo-element on the `cell-wrap` that spans `left: 0; right: 0; height: 60px` (full cell height, not 40px). This fills the entire grid column width, creating seamless connection between adjacent cells.
- Range start cell: use a `::after` pseudo-element with `right: 0; width: 50%; height: 60px` to extend gray fill from center to right edge. The blue cell sits on top with `z-index: 1`.
- Range end cell: use a `::before` pseudo-element with `left: 0; width: 50%; height: 60px` to extend gray fill from left edge to center. The blue cell sits on top with `z-index: 1`.
- Same-day selection (start === end): hide both `::before` and `::after` pseudo-elements.

### Cell Content Layout
- Use flexbox column layout inside the cell, NOT absolute positioning. Three rows: top-text (14px), date-num (24px), bottom-text (14px), with 4px margin top/bottom.
- When top-text is empty (no holiday), keep the element but use `visibility: hidden` to maintain consistent vertical alignment across all cells.

### Row Boundaries
- Mark cells at column index 0 as `row-start` and column index 6 as `row-end`.
- Range start on row-end (Saturday): hide the `::after` connector.
- Range end on row-start (Sunday): hide the `::before` connector.

## Do Not Infer

- Do not override cell dimensions; 48×60px is fixed across all calendar modes.
- Do not change the selection rounded rectangle from 48×60px with 8px radius.
- Do not use arbitrary colors for status tags; they should follow business-defined color schemes.
- Do not mix Chinese and English week labels in the same calendar instance.
- Do not add shadows or borders to individual date cells.
- Do not change the popup height or title bar structure.
