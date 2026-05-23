# Switch 开关

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `8010:10360`
- Sub-components: `Switch 开关`
- Directory category: `输入 / Switch 开关`

## Purpose

用于控制某个功能的开启和关闭。支持两种尺寸（大号/小号）、内嵌文字模式、禁用状态和自定义颜色。本文件仅记录 Figma 视觉样式。


## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

Switch 由以下部分组成：

1. **轨道（Track）** — 圆角矩形背景，承载滑块和可选文字
2. **滑块（Thumb）** — 圆形白色滑块，带投影
3. **内嵌文字（Label）** — 可选，显示在轨道内部（仅大号支持）

## Props

| Prop | Type | Default | Description |
|---|---|---|
| `status` `boolean` | `true` | 开关状态，`true` 为开启，`false` 为关闭 |
| `disabled` `boolean` | `false` | 是否禁用 |
| `size` `"medium" \| "small"` | `"medium"` | 开关尺寸 |
| `text` `boolean` | `false` | 是否显示内嵌文字（仅 medium 尺寸生效） |
| `color` `string` | `Branding-1` | 自定义开启状态的轨道颜色 |

## 大号开关（Medium）— 无文字

默认尺寸，纯开关无内嵌文字。

### 轨道（Track）

| Property | 开启（status=true） | 关闭（status=false） |
|---|---|
| 宽度 | 50px | 50px |
| 高度 | 30px（padding 2px + thumb 26px） | 30px |
| 圆角 | `radius-full` | `radius-full` |
| 背景色（默认） | `Branding-1` | `border-default` |
| 背景色（禁用） | `Branding-2` | `surface-page` |
| 内边距 | 2px | 2px |
| 布局 | Flex row, justify-end | Flex row, justify-start |
| overflow | clip | clip |

### 滑块（Thumb）

| Property | Value |
|---|---|
| 尺寸 | 26×26px |
| 形状 | 圆形 |
| 颜色 | `text-inverse` |
| 阴影 | `shadow-1` — 一级阴影 |

## 小号开关（Small）— 无文字

紧凑尺寸，适用于空间有限的场景。

### 轨道（Track）

| Property | 开启（status=true） | 关闭（status=false） |
|---|---|
| 宽度 | 42px | 41px |
| 高度 | 24px（padding 2px + thumb 20px） | 24px |
| 圆角 | `radius-full`（开启）/ `radius-3xl`（关闭） | `radius-3xl` |
| 背景色（默认） | `Branding-1` | `border-default` |
| 背景色（禁用） | `Branding-2` | `surface-page` |
| 内边距 | 2px | 2px |
| 布局 | Flex row, justify-end | Flex row, justify-start |
| overflow | clip | clip |

### 滑块（Thumb）

| Property | Value |
|---|---|
| 尺寸 | 20×20px |
| 形状 | 圆形 |
| 颜色 | `text-inverse` |
| 阴影 | `shadow-1` — 一级阴影 |

## 内嵌文字模式（Medium + Text）

仅大号尺寸支持内嵌文字，最多使用 4 个字。

### 轨道（Track）

| Property | 开启（status=true） | 关闭（status=false） |
|---|---|
| 最小宽度 | 68px | 68px |
| 最大宽度 | 96px | 96px |
| 圆角 | `radius-full` | `radius-full` |
| 背景色（默认） | `Branding-1` | `border-default` |
| 背景色（禁用） | `Branding-2` | `surface-page` |
| 内边距（开启） | 2px right, 8px left, 2px top/bottom | — |
| 内边距（关闭） | — | 2px left, 8px right, 2px top/bottom |
| 布局 | Flex row, 4px gap | Flex row, 4px gap |
| overflow | clip | clip |

### 布局顺序

| 状态 | 顺序 |
|---|---|
| 开启 | 文字 → 滑块 |
| 关闭 | 滑块 → 文字 |

### 内嵌文字

| Property | 开启 | 关闭 |
|---|---|
| 默认文字 | "启用" | "停用" |
| 字体 | `Body/middle` 14px, weight 400, line-height 22px | 同左 |
| 文字颜色（开启） | `surface-primary` | — |
| 文字颜色（关闭） | — | `text-placeholder` |
| 文字颜色（禁用+开启） | `surface-primary` | — |
| 文字颜色（禁用+关闭） | — | `text-placeholder` |
| 最大宽度 | 68px | 68px |
| 最小宽度 | 1px | 1px |
| flex | 1 0 0 | 1 0 0 |
| 溢出 | ellipsis, nowrap | ellipsis, nowrap |

### 滑块（Thumb）

与大号无文字模式相同：26×26px 白色圆形带阴影。

## 自定义颜色

开启状态的轨道背景色可自定义，常见预设：

| 颜色名称 | Token | 示例场景 |
|---|---|---|
| 品牌蓝（默认） | `Branding-1` | 通用开关 |
| 警告橙 | `Warning-1` | 警告/提醒类开关 |
| 成功绿 | `Success-1` | 成功/确认类开关 |

自定义颜色仅影响开启状态的轨道背景色，关闭状态始终使用 `border-default`。禁用状态下自定义颜色不生效，统一使用 `Branding-2`（开启禁用）或 `surface-page`（关闭禁用）。

自定义颜色同时适用于无文字和内嵌文字模式，以及大号和小号尺寸。

## Color Tokens

| Token | Use |
|---|---|
| `Color/brand/branding-1` | 开启状态轨道背景（默认） |
| `Color/brand/branding-2` | 开启+禁用状态轨道背景 |
| `Color/neutral/border-default-component-border` | 关闭状态轨道背景 |
| `Color/neutral/surface-page-bg-color-page` | 关闭+禁用状态轨道背景 |
| `Color/neutral/surface-primary-bg-color-container` | 滑块颜色、开启文字颜色 |
| `Color/icon&text/text-placeholder-text-icon-color-placeholder` | 关闭状态内嵌文字颜色 |
| `Color/warning/warning-1` | 自定义颜色：警告橙 |
| `Color/success/success-color` | 自定义颜色：成功绿 |

## States

| State | 轨道背景 | 滑块 | 文字颜色 | Interactive |
|---|---|---|---|
| 开启 | `Branding-1` | 白色圆形 | `text-inverse` | Yes |
| 关闭 | `border-default` | 白色圆形 | `text-placeholder` | Yes |
| 开启 + 禁用 | `Branding-2` | 白色圆形 | `text-inverse` | No |
| 关闭 + 禁用 | `surface-page` | 白色圆形 | `text-placeholder` | No |

## Shadow

| Token | Use |
|---|---|
| `shadow-thumb` | 滑块投影（双层阴影，主阴影 + 微边缘） |

## Transition 过渡动效

切换状态时所有视觉变化应有平滑过渡，统一使用 `cubic-bezier(.4, 0, .2, 1)` 缓动曲线（Material Standard Easing）。

### 滑块位移

| Property | Value |
|---|---|
| 动画属性 | `left`（绝对定位方式） |
| 持续时间 | 300ms |
| 缓动曲线 | `cubic-bezier(.4, 0, .2, 1)` |
| 大号位移量 | 开启 `left: 22px`，关闭 `left: 2px`（位移 20px） |
| 小号位移量 | 开启 `left: 20px`，关闭 `left: 2px`（位移 18px） |
| 内嵌文字位移量 | 开启 `left: 总宽 - 28px`，关闭 `left: 2px`（根据文字宽度动态计算） |

### 轨道背景色

| Property | Value |
|---|---|
| 动画属性 | `background` |
| 持续时间 | 300ms |
| 缓动曲线 | `cubic-bezier(.4, 0, .2, 1)` |

### 内嵌文字切换

内嵌文字模式使用双 label 结构（`label-on` + `label-off`），分别固定在轨道左侧和右侧，通过 opacity 淡入淡出切换。

| Property | Value |
|---|---|
| 动画属性 | `opacity` |
| 持续时间 | 200ms |
| 缓动曲线 | `ease` |
| 开启时 | `label-on` opacity 1，`label-off` opacity 0 |
| 关闭时 | `label-on` opacity 0，`label-off` opacity 1 |

### 内嵌文字宽度计算

内嵌文字模式的轨道宽度根据文字实际像素宽度动态计算：

```
总宽度 = padding-left(8) + max(onTextWidth, offTextWidth) + gap(4) + thumb(26) + padding-right(2)
```

取 on/off 文字中较宽的那个来确定总宽度，最终限制在 68px ~ 96px 范围内。

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|
| `Body/middle` | 14px | 400 | 22px | 内嵌文字 |

## Do Not Infer

- 不要改变滑块尺寸：大号 26×26px，小号 20×20px。
- 不要在小号尺寸上使用内嵌文字模式，内嵌文字仅支持大号（medium）。
- 不要改变轨道圆角 `radius-full`（小号关闭状态为 `radius-3xl`）。
- 不要改变内嵌文字最大字数限制：最多 4 个字。
- 不要在关闭状态使用自定义颜色，关闭状态始终为 `border-default`。
- 不要在禁用状态使用自定义颜色，禁用状态有固定的颜色规则。
- 不要省略滑块的投影效果 `shadow-1`。
- 不要改变内嵌文字模式下的布局顺序：开启时文字在左滑块在右，关闭时滑块在左文字在右。
- 不要混用大号和小号尺寸。
- 不要将内边距从 2px 改为其他值。
- 不要省略过渡动画，切换状态时滑块位移、轨道背景色、文字透明度都应有平滑过渡。
- 不要使用 `transform: translateX()` 做滑块位移，应使用 `left` 属性配合 `transition`，以兼容内嵌文字模式的动态宽度计算。
- 不要使用 `justify-content` 切换来移动滑块，这种方式无法产生过渡动画。
- 不要将缓动曲线从 `cubic-bezier(.4, 0, .2, 1)` 改为 `linear` 或 `ease`（文字 opacity 除外）。
- 不要在初始化渲染时播放过渡动画，应先禁用 transition 设置初始位置后再恢复。
