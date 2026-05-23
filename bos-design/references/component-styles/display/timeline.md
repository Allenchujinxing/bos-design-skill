# Timeline

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11268:12893`
- Component set: `Timeline 时间轴`
- Directory category: `展示 / Timeline 时间轴`

## Purpose

Use Timeline to display a series of events or activities in chronological order along a vertical axis. Common use cases include order tracking, activity logs, operation history, and status change records. The component is vertical-only layout. Timeline order (ascending/descending) is determined by business requirements; the component itself does not enforce order. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

Each timeline item is a horizontal flex row:

```
[dot-column] [content-column]
```

- **Dot column**: node icon (20×20) wrapped in a 2px padding container (total 24×24 hit area), with a vertical connector line below.
- **Content column**: title group (标题组) + optional content group (内容组), stacked vertically with 8px gap.

Multiple timeline items stack vertically. Default gap between items is **24px** (customizable).

## Timeline Item (时间轴基础样式)

| Property | Value |
|---|---|
| Layout | Flex row, 8px gap, align items start |
| Width | Full parent |

## Node Icon (节点图标)

All node icons are 20×20px, wrapped in a container with 2px padding (total touch area 24×24px). The icon has a hidden background layer (`bg`, opacity 0) for potential hit-area expansion.

### Default Dot Variants

| Variant | Size | Style | Color |
|---|---|---|
| 当前节点 (Current) | 20×20px | Solid filled circle (r=4 inner dot) | `Branding-1` |
| 已完成节点 (Completed) | 20×20px | Solid filled circle (r=4 inner dot) | `Success-1` |
| 未开始/失效节点 (Inactive) | 20×20px | Hollow ring circle (r=3.25, stroke 1.5) | `gray5` |
| 成功 (Success) | 20×20px | Filled circle (r=8) + checkmark icon | `Success-1` + white stroke |
| 失败 (Failure) | 20×20px | Filled circle (r=8) + cross icon | `Error-1` + white stroke |
| 警示 (Warning) | 20×20px | Filled circle (r=8) + exclamation icon | `Warning-1` + white stroke |

Default dot variants come in two sizes in the Figma spec:
- **小 (Small)**: 20×20px — used inline in the timeline
- **大 (Large)**: 20×20px icon area — same icon, used as reference/example

### Custom Icons

- Icons support customization: any icon from the TaroUI icon library (20×20px).
- Custom image cutouts (切图) are also supported.
- Icon and color both support customization.

## Connector Line (线)

Two line styles available, chosen per business requirement:

| Style | Stroke Weight | Color | Dash |
|---|---|---|
| 实线 (Solid) | 1px | `gray6` | none |
| 虚线 (Dashed) | 1px | `gray6` | 4 |

| Property | Value |
|---|---|
| Width | 1px (stroke weight) |
| Color | `gray6` |
| Position | Centered under the node icon dot |
| Layout | Flex grow, fills vertical space between icons |
| Hidden | On last item (no line below last node) |

## Title Group (标题组)

The title group is a composable sub-component with toggleable slots: `title`, `subtitle`, `time`. Two main title font size options exist.

### Title Group Combinations

| Combination | title | subtitle | time | Description |
|---|---|---|---|
| 主标题+副标题+时间 | on | on | on | Full: title row + subtitle + time |
| 主标题(无操作入口)+副标题+时间 | on (no action) | on | on | Title without action entry |
| 主标题+副标题 | on | on | off | Title + subtitle only |
| 主标题+时间 | on | off | on | Title + time only |
| 副标题+时间 | off | on | on | Subtitle + time |
| 主标题 | on | off | off | Title only |
| 副标题 | off | on | off | Subtitle only |
| 时间 | off | off | on | Time only |

### Title Row (主标题)

Two font size options:

#### Font Size 16 (Default)

| Property | Value |
|---|---|
| Layout | Flex row, 12px gap, align center |
| Font | `Title/16-semibold` — PingFang SC, 16px, weight 600, line-height 24px |
| Color (基础) | `gray1` |
| Color (选中/当前) | `Branding-1` |
| Color (已完成) | `gray2` |
| Text | Flex grow, min-width 0 |

#### Font Size 18

| Property | Value |
|---|---|
| Layout | Flex row, 12px gap, align center |
| Font | `Title/18-semibold` — PingFang SC, 18px, weight 600, line-height 26px |
| Color (基础) | `gray1` |
| Color (选中/当前) | `Branding-1` |
| Color (已完成) | `gray2` |
| Text | Flex grow, min-width 0 |

### Action Entry (操作入口, Optional)

| Property | Value |
|---|---|
| Position | Right side of title row, flex shrink 0 |
| Layout | Flex row, 4px gap, align center, justify end |
| Text font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Text color | `gray2` |
| Icon | `ic_right_line`, 16×16px |
| Text align | Right |

### Subtitle (副标题)

| Property | Value |
|---|---|
| Font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Color | `gray2` |
| Text wrap | Supported (multi-line, min-width full) |

### Time (时间)

| Property | Value |
|---|---|
| Font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Color | `gray2` |
| Gap from subtitle | 4px |

### Subtitle + Time Container

| Property | Value |
|---|---|
| Layout | Flex column, 4px gap, align start |
| Width | Full parent |

### Title Group Container

| Property | Value |
|---|---|
| Layout | Flex column, 8px gap, align start |
| Width | Full parent (334px in spec, flex in practice) |

## Time Display Formats (时间样式)

| Scenario | Format (无标题) | Format (有标题) |
|---|---|
| 当天 (Today) | `今天 11:30` | `标题：今天 11:30` |
| 非当天，本年度内 | `01.01 11:30` | `标题：01.01 11:30` |
| 非本年度内 | `2025.01.01 11:30` | `标题：2025.01.01 11:30` |

Title text in the "有标题" format is customizable.

## Content Group (内容组)

The content group is a composable sub-component with toggleable slots: `textcontent`, `picture`, `address`. Content is not limited to the following forms and supports customization.

### Content Group Combinations

| Combination | textcontent | picture | address |
|---|---|---|
| 文本+图片+地址 | on | on | on |
| 文本+图片 | on | on | off |
| 文本+地址 | on | off | on |
| 文本 | on | off | off |
| 图片+地址 | off | on | on |
| 图片 | off | on | off |
| 地址 | off | off | on |

### Text Content (文本)

Two background options:

| Background | Value | Border-radius |
|---|---|
| 灰色背景 (Gray) | `gray8` | 8px |
| 白色背景 (White) | `white1` | 8px |

| Property | Value |
|---|---|
| Padding | 12px |
| Layout | Flex row, align center, justify center |
| Font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Text color | `gray1` |
| Text wrap | Supported |
| Width | Full parent |

### Picture (图片)

| Property | Value |
|---|---|
| Layout | Flex column, 8px gap |
| Row layout | Flex row, 10px gap, align center |
| Thumbnail size | Flex `1 0 0`, aspect ratio 1:1, ~82×82px per item (4 per row) |
| Border-radius | `radius-xl` |
| Object-fit | Cover |
| Max rows | 2 rows (8 images total in spec) |
| Click action | Image preview (图片预览) |

### Address (地址)

| Property | Value |
|---|---|
| Layout | Flex row, 2px gap, align start |
| Icon | `ic_location_line`, 16×16px, with 3px vertical padding |
| Text font | `Body/14-regular` — PingFang SC, 14px, weight 400, line-height 22px |
| Text color | `gray2` |
| Arrow icon | `ic_right_line`, 16×16px, with 3px vertical padding |
| Click action | Navigate to Amap (跳转高德导航) |
| Height | 22px |

#### Address Display Modes

| Mode | Description |
|---|---|
| 无特殊要求全部展示 | Address text displays in full, no truncation |
| 点击热区 | Entire address row (icon + text + arrow) is a single tap target |

### Content Group Container

| Property | Value |
|---|---|
| Layout | Flex column, 8px gap, align start |
| Width | Full parent |

## Three Visual States

### 基础样式 (Default/Base)

| Element | Style |
|---|---|
| Node icon | Default variant per status |
| Title color | `gray1` |
| Title font | `Title/16-semibold` or `Title/18-semibold` |

### 选中样式 (Selected/Current)

| Element | Style |
|---|---|
| Node icon | 当前节点 variant (brand blue dot) |
| Title color | `Branding-1` (主标题显示主题色) |
| Title font | `Title/16-semibold` or `Title/18-semibold` |

### 已完成样式 (Completed)

Standard component configuration, used by design as needed.

| Element | Style |
|---|---|
| Node icon | 已完成节点 variant (green dot) or custom completed icon |
| Title color | `gray2` (主标题置灰) |
| Title font | `Title/16-semibold` or `Title/18-semibold` |

## Extreme Cases (极端情况)

The title group handles extreme cases with two sub-variants:
- **有操作入口** (With action entry): title + subtitle + time + action link on the right
- **无操作入口** (Without action entry): title + subtitle + time, full width text

Both support text wrapping for long content.

## Color Tokens

| Token | Use |
|---|---|
| `Color/brand/branding-1` | Selected/current node title, current node dot |
| `Color/icon&text/gray1-text-icon-color-default` | Default title, text content, default node dot |
| `Color/icon&text/gray2-tex-icon-color-secondary` | Subtitle, time, action entry text, completed title, address text |
| `Color/neutral/gray5-component-border` | Inactive node dot stroke |
| `Color/neutral/gray6-component-stroke` | Connector line (solid & dashed) |
| `Color/neutral/gray8-bg-color-page` | Text content gray background |
| `Color/neutral/white1-bg-color-container` | Text content white background |
| `Color/semantic/success-1` | Completed node dot, success icon |
| `Color/semantic/error-1` | Failure icon |
| `Color/semantic/warning-1` | Warning icon |

## Layout Notes

- Item gap defaults to **24px**, supports customization.
- Timeline order (ascending/descending) is set per business requirement; the component does not enforce order.
- The component does **not** include background color — background is set by the page container.
- Content area supports customization beyond the listed combinations.
- Icon and title primary color both support customization.

## Do Not Infer

- Do not override timeline styles with default Taroify Timeline visual styles.
- Do not show a connector line below the last timeline item.
- Do not assume a fixed item gap — default is 24px but it is customizable.
- Do not add a background color to the timeline component itself; it is transparent.
- Do not mix solid and dashed connector lines within the same timeline instance unless explicitly required.
- Do not change the node icon container padding from 2px.
- Do not use font sizes other than 16px or 18px for the main title.
