# Toast

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `7761:1721`
- Component set: `Toast 轻提示`
- Directory category: `反馈 / Toast 轻提示`
- Demo: `component-demo/toast-demo.html`

## Purpose

用于轻量级反馈或提示。

1. 自动在页面中心弹出，一定时间后自动消失
2. 弹出形式为非模态，无需页面遮罩
3. 只做提示信息展示，不可交互
4. 消失时长由提示文字数决定：5 个字以内持续 1 秒消失；5–20 个字持续 3 秒消失

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 类型

| 类型 | 说明 | 布局 |
|---|---|---|
| Only Text 纯文字 | 仅文字提示 | 水平居中 |
| Horizontal Layout with Icon 带横向图标 | 图标 + 文字水平排列 | 水平 |
| Vertical Layout with Icon 带竖向图标 | 图标在上 + 文字在下 | 垂直 |

---

## Only Text 纯文字

### 容器

| Property | Value |
|---|---|
| Background | `rgba(0,0,0,0.8)` |
| 圆角 | `radius-xl` |
| 最小宽度 | 124px |
| 最大宽度 | 无限制（按文字撑开） |
| Padding | 10px 上下，12px 左右 |
| 位置 | 页面垂直居中，水平居中 |

### 文字

| Property | Value |
|---|---|
| 字体 | 14px / regular 400 / `anti`（白色）/ line-height 22px / center |
| 最大行数 | 2 行 |
| 单行最多 | 10 个字 |

---

## Horizontal Layout with Icon 带横向图标

### 容器

| Property | Value |
|---|---|
| Background | `rgba(0,0,0,0.8)` |
| 圆角 | `radius-xl` |
| 最小宽度 | 124px |
| 最大宽度 | 175px |
| Padding | 10px 上下，12px 左右 |
| 布局 | flex 水平，图标 + 文字 |

### 图标

| Property | Value |
|---|---|
| 尺寸 | 20×20px |
| 颜色 | `anti`（白色） |
| 与文字间距 | 4px |

### 图标类型

| 图标 | 说明 |
|---|---|
| loading | 加载中（旋转动画，代码实现） |
| success (✓) | 成功提示 |
| fail (✕) | 失败提示 |
| warning (!) | 警示信息 |

### 文字

| Property | Value |
|---|---|
| 字体 | 14px / regular 400 / `anti` / line-height 22px |
| 对齐 | 左对齐（跟随图标） |
| 最大行数 | 1 行，超出截断 |

---

## Vertical Layout with Icon 带竖向图标

### 容器

| Property | Value |
|---|---|
| Background | `rgba(0,0,0,0.8)` |
| 圆角 | `radius-xl` |
| 尺寸 | 90×90px（固定正方形） |
| 位置 | 页面垂直居中，水平居中 |
| 布局 | flex 垂直居中 |

### 图标

| Property | Value |
|---|---|
| 尺寸 | 36×36px |
| 颜色 | `anti`（白色） |
| 位置 | 容器上半部分居中 |

### 图标类型

| 图标 | 说明 |
|---|---|
| success (✓) | 成功提示 |
| fail (✕) | 失败提示 |
| warning (!) | 警示信息 |

### 文字

| Property | Value |
|---|---|
| 字体 | 14px / regular 400 / `anti` / line-height 22px / center |
| 位置 | 图标下方 |
| 最大行数 | 1 行 |

---

## 消失时长规则

| 文字数 | 持续时长 |
|---|---|
| ≤ 5 个字 | 1 秒 |
| 5–20 个字 | 3 秒 |

## 动效

| 行为 | 说明 |
|---|---|
| 出现 | 淡入（opacity 0→1），duration 200ms |
| 消失 | 淡出（opacity 1→0），duration 200ms |
| Loading 图标 | 持续旋转动画（360° 循环），代码实现 |

## Do Not Infer

- 不要加遮罩层 — Toast 是非模态的，不阻断操作。
- 不要让 Toast 可交互 — 只做展示，不可点击。
- 不要让纯文字超过 2 行。
- 不要让横向图标模式超过 175px 宽。
- 不要让竖向图标模式改变 90×90px 的固定尺寸。
- 不要硬编码颜色 — 容器背景 `rgba(0,0,0,0.8)` 为通用值，文字/图标用 `anti`。
- 不要省略 loading 旋转动画 — 必须代码实现持续旋转。
