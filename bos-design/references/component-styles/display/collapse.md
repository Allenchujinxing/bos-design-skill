# Collapse

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5281:669`
- Component set: `Collapse 折叠面板`
- Directory category: `展示 / Collapse 折叠面板`
- Demo: `component-demo/collapse-demo.html`

## Purpose

用于将复杂内容分组折叠，用户可按需展开查看详情。常用于订单详情、设置项分组、FAQ 等场景。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 组件结构

```
┌─────────────────────────────────────────────┐
│  [图标]  标题文本  [辅助图标]     [箭头 ▼]  │  ← Header 54px
├─────────────────────────────────────────────┤
│                                             │
│  折叠内容区域（展开时显示）                   │  ← Content
│                                             │
├─────────────────────────────────────────────┤
│  [图标]  标题文本               [箭头 ▶]    │  ← 收起状态
├─────────────────────────────────────────────┤
│  [图标]  标题文本               [箭头 ▶]    │  ← 收起状态
└─────────────────────────────────────────────┘
```

## 面板类型

| 类型 | 说明 |
|---|---|
| 基础折叠 | 标题 + 箭头，点击展开/收起内容 |
| 带图标折叠 | 标题前有图标 + 箭头 |
| 分组折叠 | 多个面板组成一组，可配置手风琴模式 |

## Header 区域

| Property | Value |
|---|---|
| 高度 | 54px |
| Padding | 0 16px（左右） |
| 标题字体 | 14px / regular 400 / `gray1` / line-height 22px |
| 标题对齐 | 左对齐，垂直居中 |
| 箭头图标 | 16×16px，`gray3` |
| 箭头位置 | 右侧，垂直居中 |
| 分割线 | 底部 0.5px solid `gray6`（面板之间） |
| 背景 | `white1` |

### 带前置图标

| Property | Value |
|---|---|
| 图标尺寸 | 20×20px |
| 图标颜色 | `gray1` |
| 图标与标题间距 | 8px |

## Content 区域（展开态）

| Property | Value |
|---|---|
| Padding | 12px 16px |
| 背景 | `white1` |
| 字体 | 14px / regular 400 / `gray2` / line-height 22px |
| 分割线 | 顶部无（紧跟 Header 底部分割线） |

## 箭头图标

| 状态 | 方向 | 说明 |
|---|---|---|
| 收起 | 向右 ▶ 或向下 ▼ | 表示可展开 |
| 展开 | 向下 ▼ 或向上 ▲ | 表示可收起 |

箭头切换时带旋转动画。

### 箭头位置变体

| 位置 | 说明 | 间距 |
|---|---|---|
| 右侧（默认） | 箭头在 Header 最右侧，垂直居中 | — |
| 标题右侧 | 箭头紧跟标题文字右侧 | 标题与箭头间距 4px |

标题右侧模式适用于 Header 右侧还有其他操作区域（如金额、按钮）的场景，箭头跟随标题而非占据整行右端。

## 交互行为

| 行为 | 说明 |
|---|---|
| 点击 Header | 切换展开/收起状态 |
| 展开动画 | 内容区高度从 0 过渡到实际高度，duration 300ms，ease |
| 收起动画 | 内容区高度从实际高度过渡到 0，duration 300ms，ease |
| 箭头旋转 | 同步旋转 90° 或 180°，duration 300ms |
| 手风琴模式 | 同一组内同时只能展开一个面板，展开新面板时自动收起其他 |
| 默认展开 | 支持配置初始展开的面板 |
| 禁用 | 支持禁用某个面板，禁用时标题和箭头变为 `gray4` |

## 分组容器

| Property | Value |
|---|---|
| 背景 | `white1` |
| 圆角 | 遵循圆角体系（模块级 `radius-card`，默认 `radius-xl`） |
| 边框 | 可选，0.5px solid `gray6` |
| 面板间分割 | 0.5px solid `gray6`，左侧缩进 16px |

## 状态

| 状态 | Header 样式 | Content |
|---|---|---|
| 收起（默认） | 标题 `gray1`，箭头 `gray3` 向右 | 隐藏 |
| 展开 | 标题 `gray1`，箭头 `gray3` 向下 | 显示 |
| 禁用 | 标题 `gray4`，箭头 `gray4` | 不可操作 |

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `accordion` | boolean | false | 是否手风琴模式（同时只展开一个） |
| `defaultActive` | string[] | [] | 默认展开的面板 key 列表 |
| `bordered` | boolean | true | 是否有外边框 |
| `headerHeight` | number | 54 | Header 高度 (px) |
| `icon` | node | — | 标题前置图标 |
| `arrow` | enum | `right` | 箭头位置：`right`（行尾）/ `title`（标题右侧，间距 4px） |
| `disabled` | boolean | false | 是否禁用 |

## Do Not Infer

- 不要省略展开/收起动画 — 必须有高度过渡 + 箭头旋转。
- 不要让内容区直接显隐（display:none/block）— 用 height 过渡实现平滑动画。
- 不要在 Header 区域放按钮或复杂交互 — Header 整体可点击。
- 不要给 Content 区域加独立圆角 — 圆角在外层容器上。
- 不要硬编码颜色 — 所有颜色引用 design token。
