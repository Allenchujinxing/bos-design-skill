# Range Slider 范围滑块

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `14708:16594`
- Sub-components: `Slider thumb`, `Active track`, `Inactive track`
- Directory category: `输入 / Range Slider 范围滑块`

## Purpose

Use Range Slider for selecting a numeric value, a range interval, or a discrete step along a horizontal axis. Supports single-thumb (one value) and dual-thumb (range) modes. Two layout variants control where the current value is displayed: at the ends of the track, or below the track with a header label. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

The Range Slider consists of:

1. **Track** — A horizontal bar representing the full value range
2. **Active Bar** — The highlighted portion of the track representing the selected value/range
3. **Thumb(s)** — Draggable circular handles (one for single mode, two for range mode)
4. **Value Labels** — Text showing the current value(s), positioned differently per variant

## Variants

### Variant 1: 数值在两端的模式 (Values at Ends)

Values are displayed as static labels at the left and right ends of the slider. The selected value or range is shown via a bubble above the thumb or as inline text.

| Property | Value |
|---|---|
| Layout | Flex row, items centered, 8px gap |
| Min label | Left of track, 14px regular, `gray1`, right-aligned |
| Max label | Right of track, 14px regular, `gray1`, right-aligned |
| Track width | Flex 1 (fills available space) |

#### Value Bubble (above thumb)

| Property | Value |
|---|---|
| Position | Centered above thumb, bottom offset ~6px above thumb top |
| Font | `14/CN-Regular` 14px, weight 400, line-height 22px |
| Color | `gray1` `gray1` |
| Alignment | Center, `white-space: nowrap` |

### Variant 2: 数值在滑杆下面的模式 (Values Below Track)

A header row above the track shows a hint label and the current selected value. Min/max labels appear below the track.

#### Header Row

| Property | Value |
|---|---|
| Layout | Flex row, space-between, items baseline |
| Hint text | `Mark/14-semibold` 14px, weight 600, line-height 22px, `gray2` `gray2` |
| Value text | `Mark/14-semibold` 14px, weight 600, line-height 22px, `Branding-1` `Branding-1` |
| Margin bottom | 8px |

#### Below-Track Labels

| Property | Value |
|---|---|
| Layout | Flex row, space-between |
| Font | `Body/12-regular` 12px, weight 400, line-height 18px |
| Color | `gray2` `gray2` |
| Margin top | 4px |

## Track

### Inactive Track (background)

| Property | Value |
|---|---|
| Height | 4px |
| Background | `gray6` `gray6` |
| Border radius | `radius-full` (Variant 1) / `radius-xs` (Variant 2) |
| Width | 100% of container |

### Active Track (selected range)

| Property | Value |
|---|---|
| Height | 4px |
| Background | `Branding-1` `Branding-1` |
| Border radius | Same as inactive track |
| Position | Absolute, aligned to track top |
| Left | Percentage of min value (or 0% for single thumb) |
| Width | Percentage span of selected range |

## Thumb

| Property | Value |
|---|---|
| Size | 24×24px (Variant 1) / 28×28px (Variant 2) |
| Shape | Circle (`border-radius: 50%` / `radius-full`) |
| Background | `anti` |
| Border | 2px solid `Branding-1` `Branding-1` |
| Shadow | `Shadow/Shadow-1`（见 `references/design.md` Shadow 体系） |
| Position | Absolute, centered vertically on track, `transform: translate(-50%, -50%)` |
| Cursor | `grab` (default), `grabbing` (while dragging) |
| Z-index | 2 (above track) |

### Thumb Grip Lines (inner decoration)

| Property | Value |
|---|---|
| Layout | 3 vertical lines, centered inside thumb, 3px gap |
| Line size | 2px wide × 10px tall |
| Line color | `Branding-2` `Branding-2` |
| Line radius | 1px |

## Modes

### Single Thumb

- One thumb controls the selected value
- Active bar spans from the track start (0%) to the thumb position
- Used for selecting a single numeric value (e.g., vehicle count)

### Dual Thumb (Range)

- Two thumbs define the start and end of a range
- Active bar spans between the two thumbs
- Thumbs cannot cross each other (min thumb ≤ max thumb)
- Minimum gap between thumbs = 1 step
- Used for selecting time intervals or numeric ranges

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | | Active track, thumb border, selected value text |
| `Color/brand/branding-2` | | Thumb grip lines |
| `Color/icon&text/gray1-text-icon-color-default` | | End labels, value bubble text |
| `Color/icon&text/gray2-tex-icon-color-secondary` | | Header hint text, below-track labels |
| `Color/neutral/gray6-component-stroke` | | Inactive track |
| `Color/neutral/white1-bg-color-container` | | Thumb background |

## Interaction

1. **Drag** — User presses and drags a thumb horizontally. The thumb follows the pointer, snapping to the nearest step value. The active bar and value labels update in real time.
2. **Tap track** (optional) — Tapping on the track area moves the nearest thumb to that position.
3. **Dual thumb constraint** — In range mode, the min thumb cannot be dragged past the max thumb and vice versa. A minimum gap of one step is enforced.
4. **Touch handling** — Use `touch-action: none` on the track wrapper to prevent page scrolling during drag. Support both mouse and touch events.

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `14/CN-Regular` | 14px | 400 | 22px | End labels, value bubbles |
| `Mark/14-semibold` | 14px | 600 | 22px | Header hint, header value |
| `Body/12-regular` | 12px | 400 | 18px | Below-track min/max labels |

## Do Not Infer

- Do not change the thumb sizes: 24px for Variant 1, 28px for Variant 2.
- Do not remove the grip lines inside the thumb; they are a key visual indicator.
- Do not use a different shadow than `Shadow/Shadow-1` on the thumb.
- Do not place value labels both at the ends and below the track simultaneously — use one variant or the other.
- Do not allow thumbs to overlap or cross in dual-thumb mode.
- Do not add tick marks or step indicators on the track unless explicitly designed.
- Do not change the track height from 4px.
