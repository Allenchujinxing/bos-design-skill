# ImagePicker 图片上传

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `9639:3125`
- Sub-components: `未上传-容器390`, `已上传&上传中-容器390`, `上传-容器390`
- Directory category: `输入 / ImagePicker 图片上传`

## Purpose

用于相册读取或拉起拍照的图片上传功能。支持单选上传和多选上传，一行最多展示 4 张照片，照片宽度根据屏幕宽度动态适配。本文件仅记录 Figma 视觉样式。


## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

ImagePicker 由以下部分组成：

1. **标题区（Header）** — 可选，包含标题、副标题、说明入口
2. **上传容器（Container）** — 白色背景容器，承载标题区、图片项和上传按钮
3. **上传按钮（Add Button）** — 灰色圆角方块，中间显示图标
4. **已上传图片（Image Item）** — 显示图片缩略图，右上角带删除按钮
5. **状态蒙层（Overlay）** — 上传中/重新上传/上传失败时覆盖在图片上的半透明蒙层

## 标题区（Header）

标题区位于上传容器顶部，与下方图片网格间距 12px（容器 flex column gap）。有两种使用场景，标题样式不同。

### 标题区变体

| 变体 | 包含内容 |
|---|---|
| 标题 + 副标题 + 说明入口 | 完整标题区 |
| 标题 + 说明入口 | 无副标题 |
| 标题 + 副标题 | 无说明入口 |
| 仅标题 | 最简形式 |

### 场景1：独立模块

上传模块作为独立区块使用。

#### 标题行

| Property | Value |
|---|---|
| 布局 | Flex row, space-between, items center |
| 标题字体 | `Title/16-semibold` 16px, weight 600, line-height 24px |
| 标题颜色 | `gray1` `gray1` |
| 标题最大宽度 | 96px |
| 必填标记 | `*`，`Body/16-regular` 16px, weight 400, color `error-1` `Error-1` |
| 标题与必填标记间距 | 紧邻（无额外间距） |

#### 说明入口（右侧）

| Property | Value |
|---|---|
| 布局 | Inline grid, items start |
| 图标 | `ic_info_circle_line` 14×14px, margin-top 2px |
| 图标颜色 | `gray3` `gray3` |
| 文字 | "说明入口"，12px Regular, line-height 18px |
| 文字颜色 | `gray3` `gray3` |
| 图标与文字间距 | 16px（margin-left） |

#### 副标题

| Property | Value |
|---|---|
| 字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 颜色 | `gray3` `gray3` |
| 宽度 | 100% |
| 与标题行间距 | 4px（flex column gap） |

### 场景2：表单内模块

上传模块作为表单中的一个字段使用。

#### 标题行

| Property | Value |
|---|---|
| 布局 | Flex row, space-between, items center |
| 标题前图标 | 16×16px，可选 |
| 图标与标题间距 | 4px |
| 标题字体 | `Body/14-regular` 14px, weight 400, line-height 22px |
| 标题颜色 | `gray1` `gray1` |
| 必填标记 | `*`，14px Regular, color `error-1` `Error-1` |

#### 说明入口（右侧）

与独立模块相同：`ic_info_circle_line` 14px + "说明入口" 12px，颜色 `gray3`。

#### 副标题

与独立模块相同：12px Regular, line-height 18px, 颜色 `gray3`，与标题行间距 4px。

### 间距总结

| 间距位置 | Value |
|---|---|
| 标题与副标题 | 4px（标题区 flex column gap） |
| 标题区与图片网格 | 12px（容器 flex column gap） |
| 容器内边距 | 12px（上下左右） |

## Layout 组件布局

模块内一行最多展示 4 张照片，照片宽度根据屏幕宽度动态适配。

### 宽度计算公式

```
照片宽度 = (容器宽度 - 间距 12px × 5) / 4
```

以 390px 设计稿为例：容器 padding 12px × 2 = 24px，3 个间距 12px × 3 = 36px，剩余 330px / 4 ≈ 82px。

### 容器（Container）

| Property | Value |
|---|---|
| 宽度 | 100%（设计稿 390px） |
| 背景色 | `anti` |
| 内边距 | 12px |
| 布局 | Flex column, 12px gap |
| 每行布局 | Flex row, 12px gap, items start-aligned |
| 每行最多 | 4 项 |

### 图片项尺寸

| Property | Value |
|---|---|
| 宽度 | 动态计算（设计稿 82px） |
| 高度 | 与宽度相同（正方形） |
| 圆角 | 8px |
| 间距 | 12px（水平和垂直） |

## Type 组件类型

### 上传按钮 — 文件/照片类型（type=file）

默认上传按钮，中间显示加号图标。

| Property | Value |
|---|---|
| 尺寸 | 82×82px（与图片项相同） |
| 背景色 | `gray8` `gray8` |
| 圆角 | 8px |
| 图标 | `ic_add_line` 加号 |
| 图标尺寸 | 32×32px |
| 图标颜色 | `gray3` `gray3`（推断自视觉） |
| 图标位置 | 居中 |

### 上传按钮 — 拍照类型（type=camera）

拍照上传按钮，中间显示相机图标。

| Property | Value |
|---|---|
| 尺寸 | 82×82px |
| 背景色 | `gray8` `gray8` |
| 圆角 | 8px |
| 图标 | `ic_camera_fill` 相机 |
| 图标尺寸 | 32×32px |
| 图标位置 | 居中 |

## Single File Upload 单选上传

仅允许上传一张图片。

| 状态 | 显示内容 |
|---|---|
| 未上传 | 仅显示上传按钮 |
| 已上传 | 仅显示已上传图片（带删除按钮），无上传按钮 |

## Multiple File Uploads 多选上传

允许上传多张图片，上传按钮始终显示在最后（除非达到上限）。

### 布局变体

| 已上传数量 | 第一行 | 第二行 |
|---|---|---|
| 0 | 上传按钮 | — |
| 1~2 | 图片 + 上传按钮 | — |
| 3 | 图片 ×3 + 上传按钮 | — |
| 4 | 图片 ×4 | 上传按钮 |
| 5 | 图片 ×4 | 图片 + 上传按钮 |
| 6 | 图片 ×4 | 图片 ×2 + 上传按钮 |
| 达到上限 | 图片填满 | 无上传按钮 |

## 已上传图片（Image Item）

### 默认状态（status=done）

| Property | Value |
|---|---|
| 尺寸 | 82×82px |
| 圆角 | 8px |
| 图片填充 | `object-fit: cover` |
| overflow | clip |

### 删除按钮

位于图片右上角。

| Property | Value |
|---|---|
| 位置 | 右上角，与图片边缘对齐 |
| 背景色 | `translucent-bg-color` `rgba(0,0,0,0.7)` |
| 内边距 | 2px |
| 圆角 | 左下 4px，右上 8px（与图片圆角对齐），其余 0 |
| 图标 | `ic_close_line` 关闭 |
| 图标尺寸 | 16×16px |
| 图标颜色 | `anti` |

## Status 上传状态

### Loading 加载状态（status=loading）

图片上传中，显示蒙层和加载图标。

| Property | Value |
|---|---|
| 蒙层背景 | `rgba(0,0,0,0.6)` |
| 蒙层圆角 | 8px |
| 加载图标 | `ic_loading_line` |
| 加载图标尺寸 | 20×20px |
| 加载图标颜色 | `anti` |
| 加载图标位置 | 居中 |
| 删除按钮 | 显示（右上角） |

### Re-Upload 重新上传（status=reupload）

上传完成但需要重新上传，显示蒙层、刷新图标和文字。

| Property | Value |
|---|---|
| 蒙层背景 | `rgba(0,0,0,0.6)` |
| 蒙层圆角 | 8px |
| 图标 | `ic_refresh_line` 刷新 |
| 图标形状 | Filled 顺时针圆弧箭头（近闭合圆弧，右上角带三角箭头尖），viewBox `0 0 20 20`，内部 path 区域 `inset 12.5%`（即 15×15px 居中） |
| 图标尺寸 | 20×20px |
| 图标颜色 | `anti` |
| 图标位置 | 垂直居中偏上（top 24.39%） |
| 文字 | "重新上传" |
| 文字字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 文字颜色 | `anti` |
| 文字位置 | 图标下方，水平居中 |
| 文字宽度 | 62px |
| 文字对齐 | center |
| 删除按钮 | 显示（右上角） |

### Error 上传失败（status=error）

上传失败，显示蒙层、错误图标和文字。

| Property | Value |
|---|---|
| 蒙层背景 | `rgba(0,0,0,0.6)` |
| 蒙层圆角 | 8px |
| 图标 | `ic_clear_circle_line` 错误圆圈 |
| 图标尺寸 | 20×20px |
| 图标颜色 | `anti` |
| 图标位置 | 垂直居中偏上（top 24.39%） |
| 文字 | "上传失败" |
| 文字字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 文字颜色 | `anti` |
| 文字位置 | 图标下方，水平居中 |
| 文字宽度 | 62px |
| 文字对齐 | center |
| 删除按钮 | 显示（右上角） |

## Icon Reference

状态蒙层中使用的图标均为 filled 形状（非 stroke），viewBox `0 0 20 20`，path 区域 `inset 12.5%`（15×15px 居中于 20×20 容器）。

### ic_refresh_line（重新上传）

顺时针近闭合圆弧，右上角带三角箭头尖。

```svg
<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.22 2.5c2.03 0 3.88.76 5.26 2.02l.96-.96c.1-.1.26-.05.29.08l.72 3.62c.02.11-.08.22-.2.2l-3.61-.73c-.13-.03-.18-.19-.09-.28l.75-.75C13.23 4.75 11.8 4.17 10.22 4.17c-3.37 0-6.05 2.64-6.05 5.83 0 3.2 2.68 5.83 6.05 5.83 2.61 0 4.81-1.58 5.67-3.78.17-.43.65-.64 1.08-.47.43.17.64.65.47 1.08C16.34 15.5 13.51 17.5 10.22 17.5 5.98 17.5 2.5 14.17 2.5 10S5.98 2.5 10.22 2.5z"/></svg>
```

### ic_clear_circle_line（上传失败）

圆圈内叉号。

### ic_loading_line（加载中）

圆弧加载指示器，需配合旋转动画使用。

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/neutral/white1-bg-color-container` | `#ffffff` | 容器背景 |
| `Color/neutral/gray8-bg-color-page` | `#f5f7fa` | 上传按钮背景 |
| `Color/neutral/translucent-bg-color` | `rgba(0,0,0,0.7)` | 删除按钮背景 |
| `Color/icon&text/gray1-text-icon-color-default` | `#111111` | 标题文字颜色 |
| `Color/icon&text/gray3-text-icon-color-placeholder` | `#879099` | 副标题、说明入口颜色 |
| `Color/error/error-1` | `#f72626` | 必填标记 `*` 颜色 |
| 蒙层色 | `rgba(0,0,0,0.6)` | 上传中/重新上传/失败蒙层 |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Title/16-semibold` | 16px | 600 | 24px | 独立模块标题 |
| `Body/14-regular` | 14px | 400 | 22px | 表单内标题 |
| `Body/12-regular` | 12px | 400 | 18px | 副标题、说明入口文字、重新上传/上传失败文字 |

## Do Not Infer

- 不要改变一行最多 4 张的限制。
- 不要改变图片项的正方形比例，宽高始终相等。
- 不要改变图片间距 12px。
- 不要改变删除按钮的圆角规则：左下 4px，右上 8px，其余 0。
- 不要省略蒙层效果，上传中/重新上传/失败状态必须有 `rgba(0,0,0,0.6)` 蒙层。
- 不要改变上传按钮的图标尺寸 32×32px。
- 不要改变状态图标尺寸 20×20px（加载/刷新/错误）。
- 不要在单选上传模式下同时显示已上传图片和上传按钮。
- 不要改变照片宽度的动态计算公式：`(容器宽度 - 间距 12 × 5) / 4`。
- 不要改变标题与副标题的间距 4px。
- 不要改变标题区与图片网格的间距 12px。
- 不要混用两种场景的标题样式：独立模块用 16px Semibold，表单内用 14px Regular。
- 不要省略必填标记 `*` 的红色 `Error-1`。
- 不要将 `ic_refresh_line` 画成 stroke 双箭头样式，它是 filled 的单段顺时针圆弧箭头（参见 Icon Reference 章节的 SVG path）。
