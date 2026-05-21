# Swiper

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `8373:23359`
- Component set: `Swiper 轮播图`
- Directory category: `展示 / Swiper 轮播图`
- Demo: `component-demo/swiper-demo.html`
- 切图目录: `component-demo/assets/swiper/`

## Purpose

用于图片内容的轮播展示，支持 Banner 运营位和相册浏览两种场景。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色引用自搭配的 Design 规范文件（如 `references/design.md`）。Swiper 的指示器颜色（白色/半透明黑）为通用值，不随设计系统变化；容器圆角遵循 design 规范的圆角体系。

## 样式类型

| 样式 | 名称 | 指示器 | 典型场景 |
|---|---|---|---|
| 样式 1 | Banner 轮播小圆点 | 圆点 (dots) | 首页运营 Banner、活动入口 |
| 样式 2 | 相册轮播数字 | 数字胶囊 (1/9) | 图片详情、相册浏览 |

---

## 样式 1：Banner 轮播小圆点

### 行为

| 行为 | 默认值 | 可配置 |
|---|---|---|
| 自动轮播 | 开启 | 支持关闭 |
| 切换时长 | 500ms | 支持自定义 |
| 循环播放 | 开启（自动轮播时） | 支持关闭 |
| 手势滑动 | 支持 | — |

### 容器

| Property | Value |
|---|---|
| 宽度 | 撑满容器（示例 390px） |
| 高度 | 按图片比例，示例 240px |
| 圆角 | 12px |
| 溢出 | hidden |

### 圆点指示器 (Dots Indicator)

| Property | Value |
|---|---|
| 位置 | 图片底部水平居中 |
| 距底部 | 8px |
| 圆点尺寸 | 6×6px |
| 圆点间距 | 4px |
| 当前页圆点 | 宽度拉伸为 16px，高度 6px，圆角 3px |
| 当前页颜色 | `white1` (100% 不透明) |
| 非当前页颜色 | `white1` (40% 不透明) |

---

## 样式 2：相册轮播数字

### 行为

| 行为 | 默认值 | 可配置 |
|---|---|---|
| 自动轮播 | 关闭（不自动播放） | — |
| 手势滑动 | 支持 | — |
| 循环播放 | 不循环 | — |

### 容器

| Property | Value |
|---|---|
| 宽度 | 撑满容器（示例 390px） |
| 高度 | 按图片比例，示例 420px |
| 圆角 | 0（全屏相册场景）或 12px（卡片内） |

### 数字指示器 (Number Indicator)

| Property | Value |
|---|---|
| 位置 | 默认底部水平居中，支持调整至左下角或右下角 |
| 距底部 | 8px |
| 距左/右 | 12px（左下角/右下角时） |
| 背景 | `#000000` 40% 不透明 |
| 尺寸 | 高 24px，宽自适应（min-width 37px） |
| 圆角 | 12px (全圆角胶囊) |
| 文字 | 12px / regular 400 / `#fff` / line-height 20px / center |
| 格式 | `当前/总数`，如 `1/9` |

### 数字指示器位置变体

| 位置 | 说明 |
|---|---|
| 底部居中 | 默认位置 |
| 左下角 | `left: 12px; bottom: 8px` |
| 右下角 | `right: 12px; bottom: 8px` |

---

## 轮播时序

| 参数 | 默认值 | 说明 |
|---|---|---|
| 停留时长 (interval) | 2000ms (2s) | 每张图片停留展示的时间 |
| 切换动画时长 (duration) | 500ms | 从当前页滑到下一页的过渡动画时长 |
| 缓动函数 | ease | 切换动画的缓动曲线 |

一轮完整周期 = 停留时长 + 切换动画时长 = 2000ms + 500ms = 2500ms

---

## 手势交互

| 行为 | 说明 |
|---|---|
| 滑动方向 | 水平左右滑动 |
| 触发阈值 | 滑动距离 > 40px 时触发切换 |
| 快速连续滑动 | 支持，每次滑动独立判断方向和阈值 |
| 滑动时暂停自动轮播 | 手指触摸时暂停，松手后恢复自动轮播计时 |
| 边界行为 (非循环) | 滑到第一张/最后一张时，继续同方向滑动无效果 |
| 边界行为 (循环) | 最后一张左滑回到第一张，第一张右滑到最后一张 |

---

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `autoplay` | boolean | 样式1: true / 样式2: false | 是否自动轮播 |
| `interval` | number | 2000 | 自动轮播停留时长 (ms) |
| `duration` | number | 500 | 切换动画时长 (ms) |
| `loop` | boolean | 样式1: true / 样式2: false | 是否循环播放 |
| `indicatorType` | enum | 按样式 | `dots` 圆点 / `number` 数字胶囊 |
| `indicatorPosition` | enum | `center` | `center` / `left` / `right`（仅数字指示器） |
| `indicatorColor` | string | `anti` | 圆点颜色（active 100%，inactive 40%） |
| `indicatorBg` | string | `rgba(0,0,0,0.4)` | 数字胶囊背景色 |
| `borderRadius` | number | 12 | 容器圆角 (px)，全屏场景可设为 0 |
| `height` | number/string | 按图片比例 | 容器高度 |

---

## Color Tokens

| Token | Value | Use |
|---|---|---|
| 圆点 (active) | `#ffffff` 100% | 当前页圆点 |
| 圆点 (inactive) | `#ffffff` 40% | 非当前页圆点 |
| 数字指示器背景 | `rgba(0,0,0,0.4)` | 数字胶囊底色 |
| 数字指示器文字 | `#ffffff` | 页码文字 |

## 切图资产

| 文件 | 尺寸 | 说明 |
|---|---|---|
| `banner-sample.png` | 390×240 | Banner 轮播示例图 |
| `album-sample.png` | 390×420 | 相册轮播示例图 |

## Do Not Infer

- 不要在相册模式开启自动轮播 — 相册模式仅手动滑动。
- 不要让圆点指示器使用非白色 — 固定白色 + 透明度区分。
- 不要给数字指示器用方角 — 固定 12px 全圆角胶囊。
- 不要省略指示器 — 每种轮播样式必须有对应的指示器。
- 不要让 Banner 轮播无限加速 — 切换时长最小建议 300ms。
