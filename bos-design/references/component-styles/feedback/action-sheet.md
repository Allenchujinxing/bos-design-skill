# ActionSheet

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9752:1714`
- Component set: `ActionSheet 动作面板`
- Directory category: `反馈 / ActionSheet 动作面板`
- Demo: `component-demo/action-sheet-demo.html`

## Purpose

从底部弹出的模态框，提供和当前场景相关的操作动作，也支持提供信息输入和描述。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 组件结构

```
┌─────────────────────────────────────────┐  ← 遮罩层
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [描述文案]（可选）              │    │  ← 顶部圆角 `radius-3xl`
│  ├─────────────────────────────────┤    │
│  │  操作一                          │    │
│  ├─────────────────────────────────┤    │
│  │  操作二                          │    │
│  ├─────────────────────────────────┤    │
│  │  操作三                          │    │
│  ├─────────────────────────────────┤    │
│  │  ██████ 8px 间隔 ██████         │    │  ← surface-component 分隔条
│  ├─────────────────────────────────┤    │
│  │  取消                            │    │  ← 取消按钮
│  ├─────────────────────────────────┤    │
│  │  [安全区 34px]                   │    │  ← iOS 底部安全区
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

## 类型

| 类型 | 说明 |
|---|---|
| 无描述 | 直接展示操作列表 |
| 有描述 | 顶部有描述文案，下方操作列表 |
| 描述很长 | 描述文案最多 20 字，超出截断 |
| 特殊选项 | 某些操作项可自定义颜色（如危险操作用 `Error-1`，品牌操作用 `Branding-1`） |
| 选项中辅助文案 | 操作项下方有辅助描述文字 |
| 禁用选项 | 某些操作项不可点击，文字变为 `text-disabled` |

## 遮罩层

| Property | Value |
|---|---|
| Background | `translucent` |
| 点击遮罩 | 关闭面板 |

## 面板容器

| Property | Value |
|---|---|
| Background | `surface-primary` |
| 圆角 | 顶部 `radius-3xl`（第一梯度，面板级），底部 0 |
| 位置 | 屏幕底部，贴底 |
| 宽度 | 100%（390px） |

## 描述区域（可选）

| Property | Value |
|---|---|
| Padding | 12px 10px |
| 字体 | 14px / regular 400 / `text-placeholder` / line-height 22px / center |
| 最大字数 | 20 字，超出截断（...） |
| 分割线 | 底部 0.5px solid `border-divider` |
| 宽度 | 366px（10px 左右 padding） |

## 操作项

| Property | Value |
|---|---|
| 高度 | 56px（padding 16px 上下） |
| Padding | 16px 10px |
| 字体 | 16px / regular 400 / `text-primary` / line-height 24px / center |
| 背景 | `surface-primary` |
| 按压态 | 背景变为 `surface-page` |

### 操作项颜色变体

| 变体 | 文字颜色 | 说明 |
|---|---|
| 默认 | `text-primary` | 普通操作 |
| 危险 | `Error-1` | 退出登录、注销账号等破坏性操作 |
| 品牌 | `Branding-1` | 强调操作 |
| 禁用 | `text-disabled` | 不可操作，无按压态 |

### 操作项辅助文案

| Property | Value |
|---|---|
| 字体 | 12px / regular 400 / `text-placeholder` / line-height 18px / center |
| 与主文字间距 | 4px |
| 位置 | 主文字下方 |

## 分隔条（操作区与取消按钮之间）

| Property | Value |
|---|---|
| 高度 | 8px |
| Background | `surface-component` |
| 宽度 | 100% |

## 取消按钮

| Property | Value |
|---|---|
| 高度 | 56px |
| 字体 | 16px / regular 400 / `text-primary` / line-height 24px / center |
| 背景 | `surface-primary` |
| 按压态 | 背景变为 `surface-page` |

## 底部安全区

| Property | Value |
|---|---|
| 高度 | 34px（iPhone X 及以上） |
| Background | `surface-primary` |
| 说明 | 取消按钮下方，叠在底部导航安全区上 |

## 交互行为

| 行为 | 说明 |
|---|---|
| 弹出动画 | 面板从底部上滑进场，duration 300ms，ease-out；遮罩同步淡入 |
| 关闭动画 | 面板下滑退场回底部，duration 300ms；遮罩同步淡出，动画结束后隐藏 |
| 点击遮罩关闭 | 支持 |
| 点击操作项 | 执行操作 + 关闭面板（下滑退场） |
| 点击取消 | 关闭面板（下滑退场） |
| 禁用项点击 | 无响应 |

## 开发注意

- 面板需叠在底部导航安全区上（取消按钮下方留 34px 白色安全区）
- 正确做法：面板底部包含安全区 ✅
- 错误做法：面板悬浮在安全区上方，底部露出遮罩 ❌

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|
| `description` | string | — | 顶部描述文案 |
| `actions` | Action[] | [] | 操作项列表 |
| `cancelText` | string | `'取消'` | 取消按钮文字 |
| `maskClosable` | boolean | true | 点击遮罩是否关闭 |

### Action 对象

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|
| `text` | string | — | 操作项文字 |
| `color` | enum | `'default'` | `default` / `danger` / `brand` |
| `disabled` | boolean | false | 是否禁用 |
| `description` | string | — | 辅助描述文字 |

## Do Not Infer

- 不要省略取消按钮 — 每个 ActionSheet 必须有取消操作。
- 不要省略 8px 分隔条 — 取消按钮与操作列表之间必须有分隔。
- 不要省略底部安全区 — iOS 设备必须预留 34px。
- 不要给面板加阴影 — 通过遮罩层区分层级。
- 不要让描述文案超过 20 字 — 超出截断。
- 不要硬编码颜色 — 所有颜色引用 design token。
- 不要让禁用项有按压态反馈。
