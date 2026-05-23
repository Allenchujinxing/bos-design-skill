# Message 消息通知

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `14601:15210`
- Component set: `message`

## Purpose

页面顶部的轻量级消息通知，用于操作反馈或系统提示。浮在页面内容上方，支持自动消失或手动关闭。

1. 浮层展示，不占据页面布局空间
2. 支持前置图标、关闭按钮的组合
3. 宽度可自定义
4. 出现后可设置自动消失时间，或由用户手动关闭

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## 容器

| Property | Value |
|---|---|
| 背景 | white1 |
| 圆角 | `radius-xl` |
| 投影 | 二级投影 `shadow-2` |
| 内边距 | 12px |
| 宽度 | 343px（可自定义，根据页面场景调整） |
| 高度 | 46px（单行）/ 自适应（多行） |
| 位置 | 页面顶部居中或页面底部居中，浮层展示 |
| 布局 | flex 水平，justify-content: space-between，items-center |

---

## 左侧内容

| Property | Value |
|---|---|
| 布局 | flex 水平，gap 8px，items-center |
| 图标 | 20×20px，可从 iconfont 选择图标并自定义颜色 |
| 文字 | 14px / line-height 22px / gray1 |
| 字重 | 可 regular 400 或 semibold 600，根据业务场景决定 |

---

## 右侧关闭按钮

| Property | Value |
|---|---|
| 图标 | `ic_close_line` 16×16px |
| 颜色 | gray3 |
| 可选 | 支持不展示关闭按钮 |

---

## 变体组合

| 变体 | 前置图标 | 关闭按钮 | 说明 |
|---|---|---|
| 完整 | ✓ | ✓ | 图标 + 文字 + 关闭 |
| 无关闭 | ✓ | ✗ | 图标 + 文字，自动消失 |
| 无图标 | ✗ | ✓ | 纯文字 + 关闭 |
| 最简 | ✗ | ✗ | 纯文字，自动消失 |

---

## 动效

| 行为 | 顶部位置 | 底部位置 |
|---|---|
| 出现 | 从上方滑入 + 淡入，duration 250ms，ease-out | 从下方滑入 + 淡入，duration 250ms，ease-out |
| 消失 | 向上滑出 + 淡出，duration 200ms，ease-in | 向下滑出 + 淡出，duration 200ms，ease-in |
| 自动消失 | 默认 3 秒后自动消失，可自定义时长 | 同左 |

### 位置规则

| 位置 | 距离 | 说明 |
|---|---|
| 顶部 | 导航栏下方（top: 96px，即状态栏 44px + 导航栏 44px + 8px 间距） | 常用于操作反馈 |
| 底部 | 距页面底部 48px（避开安全区和底部操作栏） | 常用于不打断当前操作的提示 |

---

## Do Not Infer

- 不要改变文字字号 — 固定 14px，只允许调整字重。
- 不要让消息通知遮挡导航栏 — 应在导航栏下方展示。
- 不要省略投影 — 消息通知必须有二级投影区分层级。
- 不要让宽度超过页面宽度 — 最大不超过 390 - 12*2 = 366px。
