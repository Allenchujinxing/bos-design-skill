# Popup

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9948:9058`
- Component set: `Popup 弹出层`
- Directory category: `反馈 / Popup 弹出层`
- Demo: `component-demo/popup-demo.html`

## Purpose

由其他控件触发，屏幕滑出或弹出一块自定义内容区域。底部弹层定义了 Title 部分的样式，Title 以下的内容区域基于需求自定义。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `Design/DESIGN-HelloCN.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 组件结构

```
┌─────────────────────────────────────────┐  ← 遮罩层 70%
│                                         │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [左操作]   标题   [右操作/关闭] │    │  ← Title Bar（规范定义）
│  ├─────────────────────────────────┤    │
│  │                                 │    │
│  │     自定义内容区域               │    │  ← 基于需求定义
│  │                                 │    │
│  ├─────────────────────────────────┤    │
│  │  [底部 Toolbar]（可选）          │    │  ← 底部操作
│  ├─────────────────────────────────┤    │
│  │  [安全区 34px]                   │    │  ← iOS 底部安全区
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

## 尺寸定义

| Property | Value |
|---|---|
| 宽度 | 100%（390px） |
| 最小高度 | 163px（屏幕 20% 占比） |
| 最大高度 | 731px（屏幕 90% 占比，留顶部 10% 可见遮罩） |
| 顶部圆角 | 12px（第一梯度，面板级） |
| 底部圆角 | 0（贴底） |

## 行为 & 动效

### 出现动效

| 元素 | 动画 | 时长 |
|---|---|---|
| 浮层 | 从底部向上滑入到指定高度 | 250ms |
| 蒙层 | 透明度 0% → 70%，匀速渐显 | 250ms |

### 消失动效

| 元素 | 动画 | 时长 |
|---|---|---|
| 浮层 | 从指定高度向下滑出 | 250ms |
| 蒙层 | 透明度 70% → 0%，匀速渐隐 | 250ms |

## 关闭方式

| 方式 | 说明 |
|---|---|
| 方式一 | 点击关闭 icon 或关闭文字（Title Bar 内） |
| 方式二 | 点击黑色蒙层 |

## Title Bar（规范定义部分）

Title Bar 是 Popup 唯一由设计规范定义样式的区域，有两种布局模式：

### 模式 A：两侧操作按钮（文字式）

| Property | Value |
|---|---|
| 高度 | 50px |
| Padding | 12px 左右 |
| 布局 | flex，三栏（左操作 / 标题 / 右操作） |
| 标题 | 18px / semibold 600 / `gray1` / line-height 26px / center |
| 标题最大宽度 | 216px，超出截断（text-overflow: ellipsis） |
| 标题最大字数 | 12 个字符 |
| 左操作文字 | 14px / regular 400 / `gray3` / line-height 22px |
| 右操作文字 | 14px / regular 400 / `Branding-1` / line-height 22px |
| 操作按钮最大字数 | 4 个字 |
| 操作按钮颜色 | 支持自定义 |

### 模式 B：关闭图标式

| Property | Value |
|---|---|
| 高度 | 自适应（padding 12px） |
| Padding | 12px |
| 布局 | flex，三栏（左占位 / 标题 / 右关闭图标） |
| 标题 | 18px / semibold 600 / `gray1` / line-height 26px / center |
| 关闭图标 | 24×24px，`gray1` |
| 左侧 | 等宽占位（保持标题居中），opacity: 0 |

### 模式 C：仅标题（无关闭按钮）

| Property | Value |
|---|---|
| 高度 | 自适应（padding 12px） |
| Padding | 12px |
| 布局 | flex，居中 |
| 标题 | 18px / semibold 600 / `gray1` / line-height 26px / center |

### 副标题（可选）

| Property | Value |
|---|---|
| 字体 | 14px / regular 400 / `gray2` / line-height 22px / center |
| 与标题间距 | 8px |
| 最大行数 | 2 行，超出截断 |

## 内容区域（自定义）

Title Bar 以下的区域由业务需求定义，常见内容类型：

| 类型 | 说明 |
|---|---|
| 纯文本 | 正文说明，14px / `gray1` / line-height 22px |
| 图片 | 16:9 比例图片区域，圆角 8px |
| 文字 + 图片 | 混合内容 |
| 列表 | 选项列表、设置项等 |
| 表单 | 输入框、选择器等 |

内容区 Padding：12px 左右，12px 底部。

## 底部操作（可选）

### 嵌入 Toolbar

| Property | Value |
|---|---|
| 高度 | 自适应 |
| Padding | 12px |
| 按钮间距 | 12px |
| 按钮样式 | 参考 `basic/button.md`，常用 large 48px 高 |
| 布局 | 双按钮等分（次要 + 主要）或单按钮撑满 |

### 无底部操作

仅 Title Bar + 内容区，无底部按钮。

## 底部安全区适配

| 平台 | 规则 |
|---|---|
| iOS (iPhone X+) | 底部预留 34px 安全区，背景色与弹层一致（`white1`） |
| Android | 安全区高度为 0 或跟随系统虚拟导航栏 |

**正确做法：** 安全区包含在弹层内部，Toolbar 按钮在安全区上方。
**错误做法：** 弹层悬浮在安全区上方，底部露出遮罩。

## 遮罩层

| Property | Value |
|---|---|
| Background | `rgba(0,0,0,0.7)` |
| 点击遮罩 | 关闭弹层 |

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `title` | string | — | 标题文字，最多 12 字 |
| `subtitle` | string | — | 副标题 |
| `titleBarMode` | enum | `'close'` | `close`（关闭图标）/ `actions`（文字操作）/ `titleOnly`（仅标题） |
| `leftAction` | string | — | 左侧操作文字（模式 A） |
| `rightAction` | string | — | 右侧操作文字（模式 A） |
| `height` | number/string | `'auto'` | 弹层高度，auto 时按内容撑开 |
| `maskClosable` | boolean | true | 点击遮罩是否关闭 |
| `showToolbar` | boolean | false | 是否显示底部 Toolbar |

## Do Not Infer

- 不要自定义 Title Bar 的样式 — Title Bar 是规范定义的，严格按照上述模式实现。
- 不要让弹层高度超过屏幕 90% — 最大 731px。
- 不要省略顶部圆角 — 固定 12px。
- 不要让标题超过 12 个字 — 超出截断。
- 不要忘记底部安全区 — iOS 必须预留 34px。
- 不要硬编码颜色 — 所有颜色引用 design token。
- 不要改变动效时长 — 出现/消失均为 250ms。
