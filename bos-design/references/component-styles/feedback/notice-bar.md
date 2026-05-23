# NoticeBar 公告栏

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `14601:3718`
- Component set: `通知栏`

## Purpose

用于页面内的通知、提示、警告等信息展示。支持多种状态颜色和右侧操作区变体。

1. 常驻展示或可关闭
2. 支持 4 种语义状态（信息/成功/错误/警告）
3. 右侧操作区支持箭头跳转、关闭、操作按钮或无操作
4. 支持通栏和卡片两种形态

与 `input/dropdown-panel.md` 组合使用时，可作为下拉面板内的提示信息。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## 容器

### 尺寸

| 尺寸 | 高度 | 内边距 | 文字 | 图标 | 右侧操作图标 |
|---|---|---|---|---|---|
| 默认 | 46px（单行）/ 自适应 | 12px | 14px / regular 400 / line-height 22px | 20×20px | 16×16px |
| 小尺寸 | 自适应（上下 12px 撑高） | 12px | 12px / regular 400 / line-height 18px | 16×16px | 14×14px |

| Property | Value |
|---|---|
| 布局 | flex 水平，gap 8px，items-center |
| 圆角 | 0px（通栏）或 8px（卡片形式），可自定义 |
| 溢出 | hidden |

### 容器形态

| 形态 | 说明 |
|---|---|
| 通栏 | 宽度 100%（390px），无圆角，贴边展示 |
| 卡片 | 宽度自适应（如 366px = 390 - 12*2），有圆角，左右留边距 |

---

## 状态与背景色

| 状态 | 背景色 | 图标色 | 说明 |
|---|---|---|---|
| default（信息） | Branding-3 | Branding-1 | 普通信息提示 |
| success | Success-3 | Success-1 | 成功提示 |
| error | Error-3 | Error-1 | 错误/异常提示 |
| warning | Warning-3 | Warning-1 | 警告提示 |

背景色可自定义，不限于以上 4 种。

---

## 左侧内容

| Property | Value |
|---|---|
| 布局 | flex 水平，gap 8px，items-center，flex: 1 |
| 图标 | 20×20px，颜色跟随状态（见上表），可从 iconfont 选择图标 |
| 文字 | 14px / regular 400 / gray1 / line-height 22px |
| 文字换行 | 支持多行（word-break: break-word），容器高度自适应 |

---

## 右侧操作区

| 变体 | 图标/内容 | 尺寸 | 说明 |
|---|---|---|---|
| 箭头 | `ic_right_line` | 16×16px | 点击跳转详情 |
| 关闭 | `ic_close_line` | 16×16px | 点击关闭公告栏 |
| 操作按钮 | 文字按钮 | 自适应 | 如"查看详情"、"去处理" |
| 无 | — | — | 纯展示，无操作 |

右侧操作区图标颜色：gray3。

---

## 内容折行

当文字内容超出一行时：
- 容器高度自适应（从 46px 增加到 68px 或更多）
- 文字自动换行，保持 line-height 22px
- 右侧操作区与第一行文字垂直居中对齐

---

## Do Not Infer

- 不要硬编码背景色 — 背景色根据状态或业务自定义。
- 不要让图标尺寸偏离 20×20px。
- 不要在无操作区变体中添加右侧图标。
- 不要让文字截断 — 多行时容器高度自适应。
- 不要省略左侧图标 — 公告栏必须有图标辅助识别状态。
