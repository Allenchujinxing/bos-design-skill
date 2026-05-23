# Progress

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `14891:12669`
- Component set: `Progress 进度条`
- Directory category: `展示 / Progress 进度条`
- Demo: `component-demo/progress-demo.html`

## Purpose

用于展示任务当前的进度。线性进度条，支持 4 种状态。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 组件结构

```
┌──────────────────────────────────────────────────┐
│  [========进度填充========|---轨道---]  [尾部]    │
│  ← ─ ─ ─ ─ ─ 轨道 track ─ ─ ─ ─ ─ →  8px gap  │
└──────────────────────────────────────────────────┘
```

- **轨道 (track)**: 背景条，固定高度
- **填充 (inner)**: 已完成进度，从左到右
- **尾部 (tail)**: 百分比文字 或 状态图标

## 尺寸

| Property | Value |
|---|---|
| 整体宽度 | 自适应容器（示例 343px） |
| 轨道高度 | 6px |
| 轨道圆角 | 999px (全圆角胶囊) |
| 填充高度 | 6px (撑满轨道) |
| 填充圆角 | 999px |
| Gap (轨道 → 尾部) | 8px |
| 尾部宽度 | 36px |
| 图标尺寸 | 20×20px |

## 状态 (type)

| Type | 填充颜色 | 尾部内容 | 说明 |
|---|---|---|---|
| `process` | `Branding-1` | 百分比文字 `80%` | 进行中 |
| `complete` | `Success-1` | iconfont 完成状态图标 | 已完成，填充 100% |
| `warning` | `Warning-1` | iconfont 警示状态图标 | 警告 |
| `error` | `Error-1` | iconfont 错误状态图标 | 错误 |

## 轨道样式

| Property | Value |
|---|---|
| Background | `gray6` |
| Height | 6px |
| Border-radius | 999px |

## 填充样式

| Property | Value |
|---|---|
| Height | 6px (与轨道等高) |
| Border-radius | 999px |
| Width | 按百分比，如 80% |
| Color (process) | `Branding-1` |
| Color (complete) | `Success-1` |
| Color (warning) | `Warning-1` |
| Color (error) | `Error-1` |

## 尾部样式

### 百分比文字 (process 状态)

| Property | Value |
|---|---|
| Font | 14px / regular 400 / `gray1` / line-height 22px |
| Alignment | 右对齐 |
| Width | 36px |

### 状态图标 (complete / warning / error)

| Property | Value |
|---|---|
| Size | 20×20px |
| 居中于 | 36px 宽的尾部区域 |
| 图标来源 | iconfont，优先使用状态语义最接近的图标 |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Gray6` | 轨道背景 |
| `Branding-1` | process 填充 |
| `Success-1` | complete 填充 + 图标 |
| `Warning-1` | warning 填充 + 图标 |
| `Error-1` | error 填充 + 图标 |
| `gray1` | `#111` | 百分比文字 |

### 状态图标选择

| 状态 | Iconfont 选择 |
|---|---|
| `complete` | 优先 `ic_verified_line` 或语义相近的完成图标 |
| `warning` | iconfont 无精确警示图标时，使用语义最接近的 iconfont 占位并标注 |
| `error` | 优先 `ic_error_circle_fill` 或语义相近的错误图标 |

## 自定义能力

Progress 组件支持以下维度的自定义：

### 尾部内容自定义

尾部区域（轨道右侧）支持 3 种展示模式，可通过配置切换：

| 模式 | 说明 | 示例 |
|---|---|---|
| `percent` | 显示百分比数字 | `80%` |
| `text` | 显示自定义文字 | `完成`、`失败`、`上传中` |
| `icon` | 显示自定义图标 | iconfont 状态图标或业务语义图标 |

#### 文字模式

| Property | 默认值 | 可自定义 |
|---|---|---|
| 内容 | 百分比 | 任意文字，如"完成"、"失败" |
| 字号 | 14px | 支持自定义 |
| 颜色 | `gray1` | 支持自定义，建议跟随进度条颜色 |
| 字重 | regular 400 | 支持自定义 |

#### 图标模式

| Property | 默认值 | 可自定义 |
|---|---|---|
| 图标 | 状态语义 iconfont 图标 | 支持传入自定义 iconfont 图标 |
| 尺寸 | 20×20px | 支持自定义，建议不超过 24px |
| 颜色 | 跟随状态色 | 支持自定义 |

### 进度条粗细自定义

轨道和填充高度支持自定义，两者始终等高：

| Property | 默认值 | 可自定义范围 | 说明 |
|---|---|---|---|
| `strokeWidth` | 6px | 2px – 12px | 轨道 + 填充高度 |
| 圆角 | 999px | 自动跟随（始终全圆角） | 不建议改为方角 |

常用粗细档位：

| 档位 | 高度 | 适用场景 |
|---|---|---|
| 细 | 2px – 4px | 信息密度高的列表、卡片内 |
| 默认 | 6px | 通用场景 |
| 粗 | 8px – 12px | 强调型进度、大面积展示 |

### 进度条颜色自定义

填充颜色和轨道背景色均支持自定义：

| Property | 默认值 | 可自定义 | 说明 |
|---|---|---|---|
| `activeColor` | 按状态取色（见上方状态表） | 任意颜色值 | 填充条颜色 |
| `trackColor` | `gray6` | 任意颜色值 | 轨道背景色 |

自定义颜色时的约束：
- 填充色与轨道色需有足够对比度，建议对比度 ≥ 3:1
- 如果自定义了填充色，尾部图标/文字颜色建议与填充色保持一致
- 不建议使用渐变色（设计规范未定义渐变进度条）

### 自定义属性汇总

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `percent` | number | 0 | 进度百分比 0–100 |
| `type` | enum | `process` | 状态：process / complete / warning / error |
| `strokeWidth` | number | 6 | 轨道 + 填充高度 (px) |
| `activeColor` | string | 按 type 取色 | 填充条颜色 |
| `trackColor` | string | `gray6` | 轨道背景色 |
| `tailMode` | enum | `percent` | 尾部模式：percent / text / icon |
| `tailText` | string | — | tailMode=text 时的文字内容 |
| `tailIcon` | string/node | — | tailMode=icon 时的 iconfont 图标 |
| `tailColor` | string | `gray1` | 尾部文字/图标颜色 |

## Do Not Infer

- 不要使用方角 — 轨道和填充均为全圆角 999px，不支持自定义圆角值。
- 不要给进度条加阴影或边框。
- 不要使用渐变色填充 — 仅支持纯色。
- 自定义粗细时轨道和填充必须等高 — 不允许填充比轨道细或粗。
- 自定义 iconfont 图标尺寸不要超过 24px — 避免破坏与轨道的视觉平衡。
- 不要为状态图标引用 SVG 切图、图片或外部图标库；找不到精确状态图标时使用语义相近的 iconfont 占位并标注。
- 尾部区域宽度建议保持 36px — 如果文字较长（如"上传中"），可适当放宽但不超过 56px。
