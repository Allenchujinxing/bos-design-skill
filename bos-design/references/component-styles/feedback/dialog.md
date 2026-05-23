# Dialog

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11691:6841`
- Component set: `Dialog 对话框`
- Directory category: `反馈 / Dialog 对话框`
- Demo: `component-demo/dialog-demo.html`

## Purpose

模态对话框，用于重要信息确认、操作二次确认、信息输入等场景。居中弹出，阻断当前流程，需用户主动操作后关闭。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## 组件结构

```
┌─────────────────────────────────────────┐  ← 遮罩层
│                                         │
│      ┌───────────────────────┐          │
│      │  [图片区域]（可选）    │          │  ← 顶部图片
│      ├───────────────────────┤          │
│      │  标题                  │          │
│      │  描述文本              │          │  ← 内容区
│      │  [输入框]（可选）      │          │
│      ├───────────────────────┤          │
│      │  [取消]    [确认]      │          │  ← 操作区
│      └───────────────────────┘          │
│                                         │
│              [✕ 关闭]（可选）            │  ← 弱化关闭
└─────────────────────────────────────────┘
```

## 类型

| 类型 | 说明 | 操作按钮 |
|---|---|---|
| 类型1: Feedback Dialog | 反馈类，仅通知 | 单按钮（确认） |
| 类型2: Confirmation Dialog | 确认类，需决策 | 双按钮（取消 + 确认） |
| 类型3: Dialog with Input | 输入类，需填写 | 双按钮（取消 + 确认） |
| 类型4: Dialog with Image (贴边) | 带图片，图片贴边 | 单/双按钮 |
| 类型5: Dialog with Image (不贴边) | 带图片，图片有内边距 | 单/双按钮 |
| 类型6: 弱化取消 | 关闭行为用底部 ✕ 图标 | 单按钮 + 底部关闭图标 |

## 遮罩层

| Property | Value |
|---|---|
| Background | `rgba(0,0,0,0.7)`（translucent） |
| 点击遮罩 | 默认不关闭（需主动操作按钮） |

## 对话框容器

| Property | Value |
|---|---|
| 宽度 | 304px（固定） |
| Background | `white1` |
| 圆角 | `radius-3xl`（第一梯度，面板级） |
| 位置 | 屏幕垂直居中，水平居中 |
| 阴影 | 无（通过遮罩区分层级） |

## 内容区

### 标题

| Property | Value |
|---|---|
| 字体 | 18px / semibold 600 / `gray1` / line-height 26px |
| Padding | 20px 左右，20px 顶部 |
| 对齐 | 居中对齐 |
| 最大行数 | 建议 1 行，无标题时可省略 |

### 描述文本

| Property | Value |
|---|---|
| 字体 | 16px / regular 400 / `gray2` / line-height 24px |
| Padding | 20px 左右 |
| 与标题间距 | 8px |
| 最大行数 | 建议 3 行以内 |
| 无标题时 | 描述文本作为主内容，padding-top 20px |

### 内容变体

| 变体 | 说明 |
|---|---|
| 标题 + 描述 | 最常用 |
| 仅描述 | 无标题，描述作为主内容，padding-top 20px |
| 仅标题 | 无描述，标题可多行（建议 2 行以内） |
| 滚动内容 | 内容超长时支持滚动，底部有渐隐遮罩（24px 高白色渐变），最大内容高度约 300px |

## 输入框（类型3）

| Property | Value |
|---|---|
| 高度 | 48px |
| 宽度 | 264px（容器宽 304 - 左右 20px padding） |
| Background | `gray8` |
| 圆角 | `radius-xl`（模块内圆角） |
| 字体 | 16px / regular 400 / `gray1` / line-height 24px |
| Placeholder | 16px / regular 400 / `gray3` |
| Padding | 12px 内边距 |
| 与描述间距 | 16px |

## 图片区域

### 贴边图片（类型4）

| Property | Value |
|---|---|
| 宽度 | 304px（撑满容器） |
| 高度 | 228px |
| 圆角 | 顶部 `radius-3xl`（跟随容器），底部 0 |
| 位置 | 容器最顶部 |

### 不贴边图片（类型5）

| Property | Value |
|---|---|
| 宽度 | 264px（容器宽 - 左右 20px） |
| 高度 | 198px |
| 圆角 | `radius-xl`（模块内圆角） |
| Padding | 20px（距容器边缘） |
| 位置 | 内容区内，可在标题上方或下方 |

### 图片位置变体

| 位置 | 说明 |
|---|---|
| 图片在上 + 标题描述在下 | 最常用 |
| 标题描述在上 + 图片在下 | 先说明再展示 |
| 仅图片 + 标题（无描述） | 简洁展示 |

## 操作区

### 按钮式操作（类型1-5）

| Property | Value |
|---|---|
| 按钮高度 | 40px（middle 档） |
| 按钮圆角 | `radius-xl` |
| Padding | 20px 左右，0 上，20px 下 |
| 按钮间距 | 12px（双按钮时） |

#### 单按钮（反馈类）

| Property | Value |
|---|---|
| 宽度 | 263px（撑满操作区） |
| 样式 | Primary / Middle |

#### 双按钮（确认类）

| Property | Value |
|---|---|
| 每个宽度 | 125.5px（等分） |
| 左按钮 | Secondary / Middle（取消） |
| 右按钮 | Primary / Middle（确认） |

### 文字式操作

无按钮背景，纯文字链接，通过分割线与内容区分隔。

#### 单文字按钮（反馈类）

| Property | Value |
|---|---|
| 高度 | 56px |
| 布局 | 居中 |
| 字体 | 16px / regular 400 / `Branding-1` / line-height 24px / center |
| 分割线 | 顶部 0.5px solid `gray6` |

#### 双文字按钮（确认类）

| Property | Value |
|---|---|
| 高度 | 56px |
| 布局 | 等分两栏，垂直居中 |
| 取消文字 | 16px / regular 400 / `gray1` / center |
| 确认文字 | 16px / regular 400 / `Branding-1` / center |
| 分割线 | 顶部 0.5px solid `gray6` |
| 竖分割线 | 中间 0.5px solid `gray6` |

## 弱化关闭（类型6）

| Property | Value |
|---|---|
| 关闭图标 | 28×28px 圆形关闭按钮 |
| 位置 | 对话框下方居中，间距 24px |
| 颜色 | `anti`（白色） |
| 说明 | 用于不需要强制操作的场景，用户可直接关闭 |

## 交互行为

| 行为 | 说明 |
|---|---|
| 弹出动画 | 缩放 + 淡入，从 0.9 scale 到 1，duration 200ms，ease-out |
| 关闭动画 | 缩放 + 淡出，从 1 到 0.9 scale，duration 150ms，ease-in |
| 遮罩点击 | 默认不关闭（强制用户操作），可配置为可关闭 |
| 按钮点击 | 执行回调 + 关闭对话框 |
| 输入框聚焦 | 键盘弹起时对话框上移避让 |

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `title` | string | — | 标题 |
| `content` | string/node | — | 描述内容 |
| `image` | string | — | 图片 URL |
| `imagePosition` | enum | `'top'` | `top`（图片在上）/ `bottom`（图片在下） |
| `imageEdge` | boolean | true | 图片是否贴边 |
| `showInput` | boolean | false | 是否显示输入框 |
| `inputPlaceholder` | string | — | 输入框占位文字 |
| `confirmText` | string | `'确认'` | 确认按钮文字 |
| `cancelText` | string | `'取消'` | 取消按钮文字 |
| `showCancel` | boolean | true | 是否显示取消按钮 |
| `buttonStyle` | enum | `'button'` | `button`（按钮式）/ `text`（文字式） |
| `closeOnOverlay` | boolean | false | 点击遮罩是否关闭 |
| `showClose` | boolean | false | 是否显示底部关闭图标（类型6） |

## Do Not Infer

- 不要让对话框宽度自适应 — 固定 304px。
- 不要省略遮罩层 — 对话框必须有遮罩。
- 不要默认允许点击遮罩关闭 — 对话框需要用户主动操作。
- 不要在对话框内放超过 2 个操作按钮。
- 不要让描述文本超过 3 行 — 超长内容用滚动模式。
- 不要硬编码颜色 — 所有颜色引用 design token。
- 不要给对话框加阴影 — 通过遮罩区分层级。
- 不要让贴边图片有内边距 — 贴边就是 0 padding。
