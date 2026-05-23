# Tab 选项卡

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `7497:6314`
- Component set: `Tabs 选项卡-应用`
- Directory category: `导航 / Tab 选项卡`

## Purpose

用于页面内容区域的切换。选项卡位于导航栏下方或页面内容中。支持四种视觉风格、两个层级、多种布局方式。本文件仅记录 Figma 视觉样式。


## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Tab Styles

四种视觉风格：

| 风格 | 组件名 | 使用场景 |
|---|---|---|
| 导航 (Navigation) | `Tab_导航` | 顶部页面导航，带返回箭头 |
| 通用 (General) | `Tab_通用` | 页面内内容切换，无返回箭头 |
| Tag | `Tab_tag` | 紧凑标签式，用于筛选或分类 |
| 胶囊 (Capsule) | `Tab_胶囊` | 胶囊分段控件 |

## Variant Axes

| 轴 | 值 |
|---|---|
| `tab` | `Tab_导航`, `Tab_通用`, `Tab_tag`, `Tab_胶囊` |
| Level（层级） | `一级` (Primary), `二级` (Secondary) |
| Layout（布局） | `均分` (Equal), `左对齐` (Left-aligned) |
| Count（数量） | `2`, `3`, 更多（可滚动） |
| Divider（分割线） | `true`, `false` — 底部分割线 |
| Right icon（右侧图标） | `true`, `false` — 右侧图标/入口 |

## 容器（Container）

### 导航 / 通用（一级）

| Property | Value |
|---|---|
| 高度 | 44px |
| 宽度 | 100%（设计稿 390px） |
| 背景色 | `white1` |
| 底部分割线 | 0.5px solid `gray6`（可选） |

### Tag（一级）

| Property | Value |
|---|---|
| 高度 | 44px |
| 宽度 | 100%（设计稿 390px） |
| 背景色 | `white1` |
| 左内边距 | 12px |
| 底部分割线 | 0.5px solid `gray6`（可选） |

### 胶囊（一级）

| Property | Value |
|---|---|
| 高度 | 36px |
| 宽度 | 366px（两侧 12px margin，全宽） |
| 背景色 | `gray7` `gray7` |
| 圆角 | `radius-xl` |
| 内边距 | 2px |
| 布局 | Flex row, 均分 |

### 胶囊（二级）

| Property | Value |
|---|---|
| 高度 | 28px |
| 宽度 | 内容自适应（非全宽） |
| 背景色 | `gray7` `gray7` |
| 圆角 | `radius-md` |
| 内边距 | 2px |
| 间距 | 2px（items 之间） |
| 布局 | Inline flex, 等分宽度（取最宽项统一） |

## Tab Item 样式

### 导航 — 一级

| Property | 选中 | 未选中 |
|---|---|---|
| 字体 | `Title/18-semibold` | `Title/18-regular` |
| 字号 | 18px, weight 600, line-height 26px | 18px, weight 400, line-height 26px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 指示器 | 20×`radius-sm` pill, `Branding-1` `Branding-1`, radius 11px | 无 |
| 指示器间距 | 文字下方 6px | — |

导航 Tab 包含返回箭头（24×24px, left 12px, top 10px），支持可选的右侧图标区域（带白色渐变遮罩）。

### 通用 — 一级（均分）

| Property | 选中 | 未选中 |
|---|---|---|
| 字体 | `Title/16-semibold` | `Body/16-regular` |
| 字号 | 16px, weight 600, line-height 24px | 16px, weight 400, line-height 24px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 指示器 | 20×`radius-sm` pill, `Branding-1` `Branding-1`, radius 11px | 无 |
| 指示器间距 | 文字下方 5px | — |
| 布局 | 等宽，居中 | 等宽，居中 |

### 通用 — 一级（左对齐）

字体和指示器与均分相同，但 items 左对齐。最小间距：32px（不滚动）/ 28px（可滚动）。

### 通用 / 导航 — 二级（仅文本）

| Property | 选中 | 未选中 |
|---|---|---|
| 字体 | `Title/14-semibold` | `Body/14-regular` |
| 字号 | 14px, weight 600, line-height 22px | 14px, weight 400, line-height 22px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 指示器 | 无 | 无 |
| 间距 | 16px | 16px |
| 布局 | 左对齐, inline flex | 左对齐 |

### Tag — 一级

| Property | 选中 | 未选中 |
|---|---|---|
| 背景色 | `gray7` `gray7` | `gray7` `gray7` |
| 字体 | `Mark/14-semibold` | `Body/14-regular` |
| 字号 | 14px, weight 600, line-height 22px | 14px, weight 400, line-height 22px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 内边距 | 8px horizontal, 3px vertical | 8px horizontal, 3px vertical |
| 圆角 | `radius-md` | `radius-md` |
| 间距 | 8px | 8px |

### Tag — 二级

| Property | 选中 | 未选中 |
|---|---|---|
| 背景色 | `gray7` `gray7` | `gray7` `gray7` |
| 字体 | `Mark/12-semibold` | `Body/12-regular` |
| 字号 | 12px, weight 600, line-height 18px | 12px, weight 400, line-height 18px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 高度 | 24px | 24px |
| 内边距 | 8px horizontal, 3px vertical | 8px horizontal, 3px vertical |
| 圆角 | `radius-md` | `radius-md` |
| 间距 | 8px | 8px |

### 胶囊 — 一级

| Property | 选中 | 未选中 |
|---|---|---|
| 背景色 | `white1` | 透明 |
| 字体 | `Mark/14-semibold` | `Body/14-regular` |
| 字号 | 14px, weight 600, line-height 22px | 14px, weight 400, line-height 22px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 圆角 | `radius-lg` | `radius-lg` |
| 阴影 | `0 3px 4px rgba(0,0,0,0.12)` | 无 |
| 内边距 | 12px horizontal, 5px vertical | 12px horizontal, 5px vertical |
| 布局 | `flex: 1 0 0`, 均分 | `flex: 1 0 0`, 均分 |

### 胶囊 — 二级

| Property | 选中 | 未选中 |
|---|---|---|
| 背景色 | `white1` | 透明 |
| 字体 | `Mark/12-semibold` | `Body/12-regular` |
| 字号 | 12px, weight 600, line-height 18px | 12px, weight 400, line-height 18px |
| 颜色 | `gray1` `gray1` | `gray2` `gray2` |
| 圆角 | `radius-xs` | `radius-xs` |
| 阴影 | 无 | 无 |
| 内边距 | 8px horizontal | 8px horizontal |
| 布局 | 等分宽度，基于内容自适应 | 同左 |

二级胶囊容器宽度由内容决定（非全宽），但所有 tab item 等分宽度（取最宽项的宽度统一）。

### 胶囊一级 vs 二级对比

| Property | 一级 | 二级 |
|---|---|---|
| 容器高度 | 36px | 28px |
| 容器宽度 | 全宽 366px | 内容自适应 |
| 容器圆角 | `radius-xl` | `radius-md` |
| 容器 padding | 2px | 2px |
| 容器 gap | 0（滑块定位） | 2px |
| 选中项圆角 | `radius-lg` | `radius-xs` |
| 选中项阴影 | `0 3px 4px rgba(0,0,0,0.12)` | 无 |
| 字号 | 14px | 12px |
| Item 内边距 | 12px horizontal | 8px horizontal |

## Transition 过渡动效

### 胶囊 Tab 滑块

胶囊 Tab 切换时，选中背景块应有平滑滑动过渡。

| Property | Value |
|---|---|
| 实现方式 | 独立滑块元素，通过 `transform: translateX()` 定位 |
| 持续时间 | 300ms |
| 缓动曲线 | `cubic-bezier(.4, 0, .2, 1)` |
| 一级滑块宽度 | 容器内宽 / tab 数量（均分） |
| 二级滑块宽度 | 最宽 item 的宽度（等分） |
| 初始化 | 不播放动画，直接定位到当前选中项 |

### 导航 / 通用 指示器

| Property | Value |
|---|---|
| 动画属性 | `opacity` |
| 持续时间 | 250ms |
| 缓动曲线 | `ease` |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/icon&text/gray1-text-icon-color-default` | | 选中文字 |
| `Color/icon&text/gray2-tex-icon-color-secondary` | | 未选中文字 |
| `Color/brand/branding-1` | | 指示器 pill |
| `Color/neutral/gray7-bg-color-component` | | Tag 背景、胶囊容器 |
| `Color/neutral/white1-bg-color-container` | | 容器背景、胶囊选中项 |
| `Color/neutral/gray6-component-stroke` | | 底部分割线 |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Title/18-semibold` | 18px | 600 | 26px | 导航一级选中 |
| `Title/18-regular` | 18px | 400 | 26px | 导航一级未选中 |
| `Title/16-semibold` | 16px | 600 | 24px | 通用一级选中 |
| `Body/16-regular` | 16px | 400 | 24px | 通用一级未选中 |
| `Title/14-semibold` | 14px | 600 | 22px | 二级选中、Tag 一级选中 |
| `Body/14-regular` | 14px | 400 | 22px | 二级未选中、Tag 一级未选中、胶囊一级未选中 |
| `Mark/14-semibold` | 14px | 600 | 22px | Tag 一级选中、胶囊一级选中 |
| `Mark/12-semibold` | 12px | 600 | 18px | Tag 二级选中、胶囊二级选中 |
| `Body/12-regular` | 12px | 400 | 18px | Tag 二级未选中、胶囊二级未选中 |

## Badge 徽标

导航和通用 Tab 支持可选的徽标：

| 类型 | 尺寸 | 颜色 | 位置 |
|---|---|---|---|
| 红点 | 8×8px | `Error-1` | 文字右上角 |
| 数字 | 自适应宽度, min 8px | `Error-1` 背景, 白色文字 | 文字右上角 |

## 右侧图标/入口

导航和 Tag Tab（仅一级）支持可选的右侧区域：

| Property | Value |
|---|---|
| 区域宽度 | 80px，右侧对齐 |
| 渐变遮罩 | 从透明到白色（从左到右），提示可滚动 |
| 图标 | 24×24px，垂直居中 |
| 文字入口 | 特殊场景，带箭头图标 |

## 溢出行为

- 超出容器宽度时，Tab 可水平滚动。
- 滚动时应露出约 0.5 个下一项，提示还有更多内容。
- 最小间距：Tag 8px，导航/通用 28px。
- Tag 宽度根据文字内容自适应。

## Do Not Infer

- 不要用 Taroify 默认的 Tab 视觉样式覆盖本文件定义的样式。
- 不要在同一个 Tab 栏中混用不同风格（所有 item 必须使用相同风格）。
- 不要在 Tag 或胶囊风格上使用指示器 pill，它们用背景色/阴影区分选中态。
- 不要给 Tag 背景使用自定义颜色，统一使用 `gray7` `gray7`。
- 不要在没有返回箭头的场景使用导航 Tab，应使用通用 Tab。
- 不要将胶囊一级的容器圆角 `radius-xl` 与二级的 `radius-md` 混用。
- 不要在胶囊二级上添加选中项阴影，二级无阴影。
- 不要将胶囊二级做成全宽，二级容器宽度由内容决定。
- 不要省略胶囊 Tab 的滑块滑动过渡动画。
- 不要改变胶囊二级 item 的内边距 8px。
