# Filter Bar 筛选栏

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `14539:4276`
- Component set: `筛选组件`

## Purpose

页面顶部的筛选触发器组件，横向排列多个筛选项按钮，点击后触发下拉面板展开。

与 `input/dropdown-panel.md` 组合使用，筛选栏负责触发和状态展示，下拉面板负责内容和选择交互。两者的交互规则见 `dropdown-panel.md` 的"交互模式"章节。

1. 支持通栏模式（等分宽度）和地图模式（自适应宽度）
2. 筛选项支持默认态、选中态、已选回显数字
3. 筛选项数量支持 2–4 个
4. 图标使用 `ic_caret_down_fill`（展开时旋转 180°）

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## 类型

| 类型 | 说明 | 布局 |
|---|---|
| default（通栏） | 筛选项等分容器宽度，适用于普通页面顶部 | 等分 flex |
| map（地图场景） | 筛选项自适应内容宽度，带投影，适用于浮在地图上方 | 自适应 flex + gap |

---

## Default 通栏模式

### 容器

| Property | Value |
|---|---|
| 背景 | surface-primary |
| 高度 | 32px |
| 宽度 | 100%（通栏） |
| 布局 | flex，子项等分宽度（flex: 1） |

### 筛选项

| Property | Value |
|---|---|
| 高度 | 32px |
| 内边距 | 1px 8px |
| 圆角 | `radius-xl` |
| 布局 | flex 水平居中，gap 2px |
| 文字对齐 | 居中 |

### 筛选项状态

**默认态**

| Property | Value |
|---|---|
| 文字 | 14px / regular 400 / text-primary / line-height 22px |
| 图标 | `ic_caret_down_fill` 16×16px，text-placeholder |

**选中态（有已选项）**

| Property | Value |
|---|---|
| 文字 | 14px / semibold 600 / Branding-1 / line-height 22px |
| 图标 | `ic_caret_down_fill` 16×16px，Branding-1 |

**选中态 + 回显数字**

| Property | Value |
|---|---|
| 文字 | 14px / semibold 600 / Branding-1 |
| 回显数字 | 12×12px 圆形，Branding-1 背景，白色文字 10px |
| 图标 | `ic_caret_down_fill` 16×16px，Branding-1 |
| 排列顺序 | 文字 → 回显数字 → 下拉图标 |

---

## Map 地图模式

### 容器

| Property | Value |
|---|---|
| 背景 | 透明（筛选项各自带背景） |
| 高度 | 32px |
| 布局 | flex 水平，gap 8px，不等分 |
| 位置 | 浮在地图上方 |

### 筛选项

| Property | Value |
|---|---|
| 高度 | 32px |
| 内边距 | 1px 8px |
| 背景 | surface-primary |
| 圆角 | `radius-xl` |
| 投影 | 一级投影 `shadow-1` |
| 布局 | flex 水平居中，gap 2px |
| 宽度 | 自适应内容（shrink-0） |

### 筛选项状态

同通栏模式的默认态和选中态。

---

## Do Not Infer

- 不要让筛选项超过 4 个 — 超出时应使用其他筛选模式（如页面筛选）。
- 不要在通栏模式下给筛选项加投影 — 投影仅用于地图模式。
- 不要修改下拉图标尺寸 — 固定 16×16px。
- 不要在默认态使用 semibold 字重 — 默认态 regular 400，选中态才用 semibold 600。
- 不要省略回显数字的圆形背景 — 必须是 12px 圆形 + 品牌色底 + 白色数字。
