# Tag Group

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9187:10954`
- Component set: `Tag Group 标签组`
- Directory category: `展示 / TagGroup 标签组`

## Purpose

Use TagGroup for multi-select scenarios with a collection of clickable tags. Common use cases include filter selection, category picking, and preference tagging. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Types

| Type | Description |
|---|---|
| 居中对齐类 | Tags are center-aligned within their container, text centered |
| 左对齐类 | Tags are left-aligned, text left-aligned, fixed width container |

## Customization Rules

From the Figma spec notes:
- **Customizable**: color, border-radius
- **Not customizable**: height, padding, font size

## Layout Rules

- Layout follows button alignment rules
- Supports line wrapping, height auto-adapts
- Tags within a row use flex wrap

## Size Variants

### 居中对齐类 (Center-aligned)

| Size | Height | Padding (h × v) | Font size | Line-height | Border-radius |
|---|---|---|---|---|
| 28 | 28px | 8px × 3px | 14px | 22px | 4px |
| 32 | 32px | 12px × 7px | 14px | 22px | 6px |
| 40 | 40px | 16px × 8px | 16px | 24px | 8px |
| 48 | 48px | 20px × 11px | 18px | 26px | 10px |

- Width: auto (content-driven), single-line
- Text align: center
- Supports multi-line text wrapping within a tag

### 左对齐类 (Left-aligned)

| Size | Height | Padding | Font size | Line-height | Border-radius | Default width | Min width |
|---|---|---|---|---|---|
| 28 | 28px | 8px × 3px | 14px | 22px | 4px | 220px | 128px |
| 32 | 32px | 12px × 7px | 14px | 22px | 6px | 220px | 136px (pl 12 / pr 4) |
| 40 | 40px | pl 16 / pr 8 / py 8 | 16px | 24px | 6px | 220px | 160px |
| 48 | 48px | pl 20 / pr 34 / py 12 | 18px | 26px | 8px | 220px | 184px |

- Width: fixed (default 220px, supports min-width variant)
- Text align: left
- Text overflow: ellipsis (single line, `text-overflow: ellipsis; overflow: hidden; white-space: nowrap`)
- 最小边距 (minimum padding) variant uses tighter widths for shorter content

## Common Properties

| Property | Value |
|---|---|
| Background (default) | `gray8` |
| Text color (default) | `gray1` |
| Font weight (default) | Regular 400 |
| Font family | PingFang SC |
| Layout | Flex row, wrap, gap between items |
| Overflow | Clip |

## Component States (仅跳转标签)

| State | Background | Border | Text color | Font weight |
|---|---|---|---|
| 默认 (Default) | `gray8` | none | `gray1` | Regular 400 |
| 选中 (Selected) | `Branding-3` | 1px solid `Branding-1` | `Branding-1` | Semibold 600 |
| 不可点 (Disabled) | `gray8` | none | `gray4` | Regular 400 |

## Icon Support

Tags in the group support optional icons:

### Left Icon (带左侧 icon)

| Property | Value |
|---|---|
| Icon | e.g. `ic_add_line` (+ icon) |
| Size | 20×20px |
| Position | Before text |
| Gap | 4px |

### Right Icon (带右侧 icon)

| Property | Value |
|---|---|
| Icon | e.g. `ic_close_line` (× icon) |
| Size | 20×20px |
| Position | After text |
| Gap | 4px |

## Color Tokens

| Token | Use |
|---|---|
| `Color/neutral/gray8-bg-color-page` | Default tag background |
| `Color/icon&text/gray1-text-icon-color-default` | Default text color |
| `Color/brand/branding-1` | Selected border, selected text |
| `Color/brand/branding-3` | Selected background |
| `Color/icon&text/gray4-text-icon-color-disable` | Disabled text color |

## Do Not Infer

- Do not override tag group styles with default Taroify TagGroup visual styles.
- Do not change the fixed height, padding, or font size per size variant — these are not customizable.
- Do not use border-radius values other than those specified per size (4/6/8/`radius-2xl`).
- Do not add a border to default state tags — only selected state has a border.
- Do not use bold font weight for default state — only selected state uses Semibold 600.
- Do not mix center-aligned and left-aligned types within the same tag group.
