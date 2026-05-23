# System 系统控件

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `7278:7448`
- Component set: `System 系统控件`
- Directory category: `基础 / System 系统控件`

## Purpose

iOS 系统级控件规范，包括状态栏（Status Bar）、底部安全区（Home Indicator）和键盘。这些是全局性的系统约束，所有页面都需要遵守。

组件文档中涉及全屏页面布局时，应引用本文件的安全区规范，而非各自重复定义。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## Status Bar 状态栏

### 尺寸

| Property | Value |
|---|---|
| 宽度 | 390px（设计稿基准） |
| 高度 | 44px |
| 位置 | 页面最顶部，固定不动 |

### 内容

| 元素 | 位置 | 样式 |
|---|---|
| 时间 | 左侧 16px，垂直底部对齐 | 16px / Semibold 600 / line-height 24px / letter-spacing -0.3px |
| 系统图标（信号、WiFi、电量） | 右侧 16px | 使用 `assets/system/status.svg` 系统状态栏资产，高度 12px，宽度自适应 |

### 主题

| 主题 | 时间颜色 | 图标颜色 | 背景 |
|---|---|---|
| Light | text-primary | text-primary | 透明或白色 |
| Dark | surface-primary | surface-primary | 透明或深色 |

### 使用规则

- 状态栏区域不放置任何可交互内容
- 导航栏紧贴状态栏下方（top: 44px）
- 地图等全屏页面中，状态栏背景为透明，内容浮在地图上方
- 普通页面中，状态栏背景跟随导航栏背景色

---

## Home Indicator 底部安全区

### 尺寸

| Property | Value |
|---|---|
| 宽度 | 390px |
| 高度 | 34px |
| 位置 | 页面最底部，固定不动 |

### 内容

| 元素 | 样式 |
|---|---|
| 小横条 | 宽 140px（36%屏宽），高 5px，圆角 2.5px，水平居中 |
| 小横条颜色（Light） | text-primary |
| 小横条颜色（Dark） | surface-primary |
| 小横条垂直位置 | 距顶部 38.24%（约 13px） |

### 使用规则

- 底部安全区内不放置可交互按钮
- 底部操作栏（如按钮、工具栏）需在安全区上方
- 底部操作栏总高度 = 内容区高度 + 34px 安全区
- 例：按钮区 72px + 安全区 34px = 底部操作栏总高 106px

---

## Keyboard 键盘

### 类型

| 类型 | 高度 | 说明 |
|---|---|
| text（文字键盘） | 336px | 标准 QWERTY 键盘 |
| number（数字键盘） | 292px | 纯数字 + 小数点 |
| emoji（表情键盘） | 384px | 表情选择面板 |

### 主题

支持 Light 和 Dark 两种主题，跟随系统设置。

### 使用规则

- 键盘弹出时，页面内容需上推避免输入框被遮挡
- 键盘高度已包含底部安全区
- 设计稿中标注键盘高度时使用上述固定值

---

## 页面布局安全区总结

```
┌─────────────────────────┐
│    Status Bar (44px)     │ ← 不放交互内容
├─────────────────────────┤
│    Navigation Bar (44px) │ ← 导航栏
├─────────────────────────┤
│                         │
│    Content Area          │ ← 可用内容区
│                         │
├─────────────────────────┤
│    Bottom Action (72px)  │ ← 操作按钮区（可选）
├─────────────────────────┤
│  Home Indicator (34px)   │ ← 不放交互内容
└─────────────────────────┘
```

### 关键高度速查

| 区域 | 高度 | 累计 |
|---|---|
| 状态栏 | 44px | 44px |
| 导航栏 | 44px | 88px |
| 底部操作区（含安全区） | 106px | — |
| 可用内容区 | 845 - 88 - 106 = 651px | — |

---

## Demo 中的适配方式

在 component-demo 的 HTML 文件中模拟系统控件：

### 状态栏模拟

```html
<div class="status-bar">
  <span class="time">9:41</span>
  <div class="sys-icons"><img src="../component-styles/assets/system/status.svg" alt=""></div>
</div>
```

```css
.status-bar {
  height: 44px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 16px 10px;
  background: var(--surface-primary); /* surface-primary */
}
.status-bar .time {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.3px;
}
.status-bar .sys-icons { height: 12px; }
.status-bar .sys-icons img { height: 12px; width: auto; }
```

系统图标（信号、WiFi、电池）使用 `assets/system/status.svg` 系统状态栏资产，不要用 CSS 手绘。该资产是系统控件例外，不适用于业务组件图标。

### 底部安全区模拟

```html
<div class="home-indicator"></div>
```

```css
.home-indicator {
  height: 34px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 13px;
}
.home-indicator::after {
  content: '';
  width: 140px;
  height: 5px;
  background: var(--text-primary); /* text-primary */
  border-radius: 2.5px;
  opacity: 0.2;
}
```

---

## Do Not Infer

- 不要在状态栏 44px 区域内放置可交互按钮。
- 不要在 Home Indicator 34px 区域内放置可交互按钮。
- 不要修改状态栏高度 — 固定 44px。
- 不要修改安全区高度 — 固定 34px。
- 不要让键盘弹出时遮挡输入框。
- 不要在 demo 中省略系统控件 — 所有全屏页面 demo 都应包含状态栏和安全区模拟。
