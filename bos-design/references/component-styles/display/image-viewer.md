# ImageViewer

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9203:3062`
- 切图节点: `15297:265`
- Component set: `Upload 上传 / ImageViewer 图片预览`
- Directory category: `展示 / ImageViewer 图片预览`
- Demo: `component-demo/image-viewer-demo.html`
- 切图目录: `component-demo/assets/image-viewer/`

## Purpose

用于图片内容的缩略展示与全屏查看。基于 Taro 原生 `previewImage` API，不支持预览界面自定义。

This file records the Figma visual style only.

## 视觉 Token 声明

ImageViewer 为全屏沉浸式预览，使用固定的黑底白字，不随设计系统 token 变化。本组件的视觉属性为通用值。

## 核心行为

| 行为 | 说明 |
|---|---|
| 手势缩放 | 所有类型均支持双指放大缩小查看 |
| 关闭预览 | 点击图片或向下滑动图片 |
| 多张切换 | 横滑查看下一张，滑动到最后一张时**不循环** |
| 长按操作 | 长按照片展示 ActionSheet 动作面板，可配置功能操作入口 |

## 预览模式

### 单张 · 仅浏览

全屏黑底，图片居中展示。无顶部导航栏。

### 多张

全屏黑底，图片居中展示。顶部显示半透明导航栏，包含页码指示器。

## 预览容器

| Property | Value |
|---|---|
| Background | `black` (纯黑) |
| Size | 全屏 390×844 (iPhone 标准) |

## 顶部导航栏 (Top-Nav) — 多张模式

| Property | Value |
|---|---|
| Height | 48px |
| Background | `translucent-light` (40% 黑色半透明) |
| Position | 顶部，全宽 |
| 页码文字 | 16px / semibold 600 / `anti` / line-height 24px / center |
| 页码格式 | `当前/总数`，如 `1/6` |

## 图片展示规则

图片根据自身比例在屏幕内自适应展示：

### 竖屏照片 (Portrait)

| Property | Value |
|---|---|
| 展示方式 | 宽度撑满屏幕 (width: 390px)，高度按比例 |
| 垂直位置 | 垂直居中于屏幕 |
| 示例尺寸 | 390×693px |

### 横屏照片 (Landscape)

| Property | Value |
|---|---|
| 展示方式 | 宽度撑满屏幕 (width: 390px)，高度按比例 |
| 垂直位置 | 垂直居中于屏幕 |
| 示例尺寸 | 390×219px |

### 超长图片 (Extra Tall)

| Property | Value |
|---|---|
| 展示方式 | 宽度撑满屏幕，高度超出屏幕 |
| 交互 | 支持上下滑动查看完整图片 |
| 示例尺寸 | 390×1366px |

### 超宽图片 (Extra Wide)

| Property | Value |
|---|---|
| 展示方式 | 宽度撑满屏幕，高度按比例（很矮） |
| 垂直位置 | 垂直居中于屏幕 |
| 示例尺寸 | 390×145px |

## ActionSheet 长按操作

长按图片弹出动作面板，可配置的操作项：

| 操作 | 说明 |
|---|---|
| 发送给朋友 | 分享图片 |
| 保存图片 | 保存到相册 |
| 收藏 | 收藏图片 |
| 翻译图片中的文字 | OCR 翻译 |
| 取消 | 关闭面板 |

ActionSheet 样式参考 ActionSheet 组件规范。

## 切图资产

| 文件 | 尺寸 | 用途 |
|---|---|
| `portrait-photo.png` | 390×693 | 竖屏照片示例 |
| `landscape-photo.png` | 390×219 | 横屏照片示例 |
| `extra-tall-photo.png` | 390×1366 | 超长图片示例 |
| `extra-wide-photo.png` | 390×145 | 超宽图片示例 |

## Color Tokens

| Token | Use |
|---|---|
| 预览背景 | `black` | 全屏预览底色 |
| 导航栏背景 | `translucent-light` | 多张模式顶部栏 |
| 页码文字 | `white1` | 导航栏页码 |

## Do Not Infer

- 不要自定义预览界面 UI — 使用 Taro 原生 `previewImage` API。
- 不要在单张模式显示顶部导航栏 — 仅多张模式有。
- 不要让图片循环滑动 — 滑到最后一张时停止。
- 不要改变预览背景色 — 固定纯黑 `black`。
- 不要省略手势缩放支持 — 所有图片类型均支持。
- 不要自绘 ActionSheet — 使用系统/组件库的 ActionSheet。
