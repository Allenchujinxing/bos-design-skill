# Empty

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `5503:1709`
- Component set: `Empty States 界面特殊状态`
- Directory category: `展示 / Empty 空状态`
- Demo: `component-demo/empty-demo.html`
- 切图目录: `component-demo/assets/empty/`

## Purpose

Empty States represent exceptional situations in the app — error states and no-data states. The category includes:

- **Component-level exceptions**: 无网络 (No network), 加载失败 (Load failed), 搜索无结果 (No search results)
- **Non-component exceptions**: 无消息 (No messages), 无收藏 (No favorites), 无历史 (No history), 无订单 (No orders), 无图片 (No images)

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

## Illustrations

All illustrations are **切图** (pre-rendered image cutouts exported as PNG), not vector components.由设计团队提供，前端以 `<img>` 引用，不自绘。

### 切图命名约定

```
empty-<scene>-<size>.png
```

示例：`empty-order-180.png`、`empty-search-120.png`、`empty-network-180.png`

### Illustration Sizes

| Level | Width × Height | Use |
|---|---|
| 页面级 (Page-level) | 180×180px | 全屏空状态 |
| 局部级 (Local) | 120×120px | 模块/Tab 内空状态 |

### Common Illustration Themes

| Theme | Name |
|---|---|
| 无车/暂不可用 | No vehicle / Unavailable |
| 电量不足 | Low battery |
| 无头盔 | No helmet |
| 车辆故障 | Vehicle malfunction |
| 无定位 | No location |
| 继续加油 | Keep going |
| 无订单 | No orders |
| 无消息 | No messages |
| 搜索无结果 | No search results |
| 无网络 | No network |
| 加载失败 | Load failed |

## Page-Level Empty State (页面级空状态)

整个页面内容区为空时使用。内容垂直居中于可视区域，水平居中。

### 通用布局

```
┌─────────────────────────────────┐
│         Status Bar 44px         │
│         Title Bar  44px         │
│                                 │
│                                 │
│        ┌─────────────┐          │
│        │  Illust     │ 180×180  │
│        │  (切图)     │          │
│        └─────────────┘          │
│              ↕ 20px             │
│           标题文字               │
│              ↕ 8px              │
│           正文描述               │
│              ↕ 12px             │
│          [ 按钮 ]               │
│                                 │
└─────────────────────────────────┘
```

### Variant 1: 只有标题 (Title only)

| Property | Value |
|---|---|
| Illustration | 180×180px, 水平居中 |
| Gap (illustration → title) | 20px |
| Title | 18px / semibold 600 / `text-primary` / line-height 26px / center |
| Max title width | 366px (即 `space-page-margin` 左右边距) |

### Variant 2: 标题 + 正文 (Title + body)

| Property | Value |
|---|---|
| Illustration | 180×180px, 水平居中 |
| Gap (illustration → title) | 20px |
| Title | 18px / semibold 600 / `text-primary` / line-height 26px / center |
| Gap (title → body) | 8px |
| Body | 14px / regular 400 / `text-placeholder` / line-height 22px / center |
| Max body width | 366px |

### Variant 3: 标题 + 正文 + 按钮 (Title + body + button)

| Property | Value |
|---|---|
| Illustration | 180×180px, 水平居中 |
| Gap (illustration → title) | 20px |
| Title | 18px / semibold 600 / `text-primary` / line-height 26px / center |
| Gap (title → body) | 8px |
| Body | 14px / regular 400 / `text-placeholder` / line-height 22px / center |
| Gap (body → button) | 12px |
| Button | **Primary / Large**: min-width 156px, height 48px, border-radius `radius-2xl` |

#### 页面级按钮样式

| Property | Value |
|---|---|
| Size | `large` |
| Variant | `primary` |
| Height | 48px |
| Min width | 156px |
| Padding | 0 20px |
| Border-radius | `radius-2xl` |
| Background | `Branding-1` |
| Background (pressed) | `Branding-0` |
| Font | 16px / semibold 600 / `text-inverse` / line-height 24px |

## Local/Partial Empty State (局部级空状态)

用于模块内部（Tab 内容区、卡片内部等）的空状态。通常位于 Tab 栏或模块标题下方。

### 通用布局

```
┌─────────────────────────────────┐
│  Tab 1  │  Tab 2  │  Tab 3     │  ← Tabs 44px
├─────────────────────────────────┤
│                                 │
│        ┌─────────────┐          │
│        │  Illust     │ 120×120  │
│        │  (切图)     │          │
│        └─────────────┘          │
│              ↕ 12px             │
│           标题文字               │
│              ↕ 12px             │
│          [ 按钮 ]               │
│                                 │
└─────────────────────────────────┘
```

### Variant 1: 局部空态 (Local empty with title)

| Property | Value |
|---|---|
| Illustration | 120×120px, 水平居中 |
| Gap (illustration → title) | 12px |
| Title | 16px / regular 400 / `text-primary` / line-height 24px / center |
| Container | 垂直居中于所属模块内容区 |

### Variant 2: 局部空态 + 按钮 (Local empty with button)

| Property | Value |
|---|---|
| Illustration | 120×120px, 水平居中 |
| Gap (illustration → title) | 12px |
| Title | 16px / regular 400 / `text-primary` / line-height 24px / center |
| Gap (title → button) | 12px |
| Button | **Primary / Small**: min-width 88px, height 32px, border-radius `radius-lg` |

#### 局部级按钮样式

| Property | Value |
|---|---|
| Size | `small` |
| Variant | `primary` |
| Height | 32px |
| Min width | 88px |
| Padding | 0 12px |
| Border-radius | `radius-lg` |
| Background | `Branding-1` |
| Background (pressed) | `Branding-0` |
| Font | 14px / semibold 600 / `text-inverse` / line-height 22px |

## Text Styles

| Style | Font | Size | Line-height | Weight | Color | Use |
|---|---|---|---|---|
| Page title | PingFang SC | 18px | 26px | Semibold 600 | `text-primary` | 页面级标题 |
| Page body | PingFang SC | 14px | 22px | Regular 400 | `text-placeholder` | 页面级正文 |
| Local title | PingFang SC | 16px | 24px | Regular 400 | `text-primary` | 局部级标题 |

## Color Tokens

| Token | Use |
|---|---|
| `text-primary` | 标题文字 |
| `text-placeholder` | 正文/描述文字 |
| `Branding-1` | 按钮背景 |
| `Branding-0` | 按钮按压态 |
| `text-inverse` `surface-primary` | 按钮文字 |
| `surface-primary` | 页面/模块背景 |

## State Semantics And Copy

Empty is not decoration. It should explain what happened, why it matters, and what the user can do next.

### State Types

| State | Use when | Required message |
|---|---|
| True empty | Nothing has been created yet | What this object is and how to create the first one |
| Search empty | Search, filter, or category selection returns no results | What criteria failed and how to reset or broaden the search |
| List/feed empty | A list, feed, queue, or notification center has no items | Confirm the current status and show the next useful action |
| Upload empty | No files, photos, or media have been added | What can be uploaded and how to add it |
| Permission denied | User lacks access or a device permission is disabled | What permission is missing and how to request or enable it |
| Plan gated | Feature requires a higher plan or entitlement | What value unlocks and how to upgrade/contact support |
| Config required | A setup or connection step is missing | What must be configured and where to do it |
| Loading failed | Data request failed | What failed, retry action, and fallback/support path |
| Partial data | Some content loaded and other content failed | Which data is missing and whether the page remains usable |
| Offline | Network is unavailable or unstable | What cannot sync and what remains available |
| Location unavailable | Location permission, GPS, or region data is unavailable | Why location is needed and how to recover |

### Copy Rules

- Title names the condition, not the component.
- Explanation includes reason, impact, or next step.
- Action uses verbs: Create, Retry, Clear filters, Enable access, Contact admin.
- Keep mobile copy short enough to scan in one glance.
- Avoid vague labels: No data, Error, Failed, Something went wrong.

### Placement Rules

- Full page: onboarding empty, first-use empty, permission denied, major loading failure.
- Section inline: chart/list/module empty, partial data failure, optional setup missing.
- List end: no more results, queue complete, all caught up.
- Bottom sheet: picker no results, upload failure, action unavailable.
- Form field: validation, missing value, unsupported format.

## 间距速查

| Gap | Value | Context |
|---|---|
| Illustration → Title (page) | 20px | 页面级 |
| Illustration → Title (local) | 12px | 局部级 |
| Title → Body | 8px | 页面级有正文时 |
| Body/Title → Button | 12px | 有按钮时 |
| 页面左右边距 | `space-page-margin` | max-width = 366px |

## Do Not Infer

- 不要用矢量/SVG 自绘插画 — 必须使用设计团队提供的切图 PNG。
- 不要随意缩放插画 — 页面级 180×180px，局部级 120×120px，不接受其他尺寸。
- 不要左对齐标题或正文 — 所有空状态文字均水平居中。
- 不要省略插画 — 每个空状态必须包含一张切图。
- 不要放置多个 CTA 按钮 — 每个空状态最多一个按钮。
- 不要使用 outline/secondary 按钮 — Figma 中空状态的按钮均为 **primary** 实心样式。
- 不要使用 body 文字大于 14px — 正文是从属描述，不能喧宾夺主。
- 不要在局部级使用 large 按钮 — 局部级固定用 small (32px)。
- 不要在页面级使用 small 按钮 — 页面级固定用 large (48px)。
