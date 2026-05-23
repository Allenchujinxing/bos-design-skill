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

标题区位于上传容器顶部，与下方图片网格间距 8px（容器 flex column gap）。有两种使用场景，标题样式不同。

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
| 标题颜色 | `text-primary` |
| 标题最大宽度 | 96px |
| 必填标记 | `*`，`Body/16-regular` 16px, weight 400, color `error-1` `Error-1` |
| 标题与必填标记间距 | 紧邻（无额外间距） |

#### 说明入口（右侧）

| Property | Value |
|---|---|
| 布局 | Inline grid, items start |
| 图标 | `ic_info_circle_line` 14×14px, margin-top 2px |
| 图标颜色 | `text-placeholder` |
| 文字 | "说明入口"，12px Regular, line-height 18px |
| 文字颜色 | `text-placeholder` |
| 图标与文字间距 | 16px（margin-left） |

#### 副标题

| Property | Value |
|---|---|
| 字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 颜色 | `text-placeholder` |
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
| 标题颜色 | `text-primary` |
| 必填标记 | `*`，14px Regular, color `error-1` `Error-1` |

#### 说明入口（右侧）

与独立模块相同：`ic_info_circle_line` 14px + "说明入口" 12px，颜色 `text-placeholder`。

#### 副标题

与独立模块相同：12px Regular, line-height 18px, 颜色 `text-placeholder`，与标题行间距 4px。

### 间距总结

| 间距位置 | Value |
|---|---|
| 标题与副标题 | 4px（标题区 flex column gap） |
| 标题区与图片网格 | 8px（容器 flex column gap） |
| 容器内边距 | 上下 `space-card-padding`，左右 `space-page-margin` |
| 照片之间间距 | 8px（水平和垂直） |

## Layout 组件布局

模块内一行最多展示 4 张照片，照片宽度根据屏幕宽度动态适配。

### 宽度计算公式

```
照片宽度 = (容器宽度 - 两侧间距 12×2 - 照片间距 8×3) / 4，结果向下取整
```

以 390px 设计稿为例：
- **独立模块**（容器宽度 390px）：(390 - 12×2 - 8×3) / 4 = 85px
- **表单内模块**（容器宽度 366px）：(366 - 12×2 - 8×3) / 4 = 78px

### 容器（Container）

| Property | Value |
|---|---|
| 宽度 | 100%（设计稿 390px） |
| 背景色 | `text-inverse` |
| 内边距 | 上下 `space-card-padding`，左右 `space-page-margin` |
| 布局 | Flex column, 8px gap |
| 每行布局 | Flex row, 8px gap, items start-aligned |
| 每行最多 | 4 项 |

### 图片项尺寸

| Property | Value |
|---|---|
| 宽度 | 动态计算（390px 独立模块示例 85px，366px 表单内示例 78px） |
| 高度 | 与宽度相同（正方形） |
| 圆角 | `radius-xl` |
| 间距 | 8px（水平和垂直） |

## Type 组件类型

### 上传按钮 — 文件/照片类型（type=file）

默认上传按钮，中间显示加号图标。

| Property | Value |
|---|---|
| 尺寸 | 与图片项相同，按动态宽度保持正方形 |
| 背景色 | `surface-page` |
| 圆角 | `radius-xl` |
| 图标 | `ic_add_line` 加号 |
| 图标尺寸 | 32×32px |
| 图标颜色 | `text-placeholder`（推断自视觉） |
| 图标位置 | 居中 |

### 上传按钮 — 拍照类型（type=camera）

拍照上传按钮，中间显示相机图标。

| Property | Value |
|---|---|
| 尺寸 | 与图片项相同，按动态宽度保持正方形 |
| 背景色 | `surface-page` |
| 圆角 | `radius-xl` |
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
|---|---|
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
| 尺寸 | 按动态宽度保持正方形 |
| 圆角 | `radius-xl` |
| 图片填充 | `object-fit: cover` |
| overflow | clip |

### 删除按钮

位于图片右上角。

| Property | Value |
|---|---|
| 位置 | 右上角，与图片边缘对齐 |
| 背景色 | `translucent` |
| 内边距 | 2px |
| 圆角 | 左下 `radius-md`，右上 `radius-xl`（与图片圆角对齐），其余 0 |
| 图标 | `ic_close_line` 关闭 |
| 图标尺寸 | 16×16px |
| 图标颜色 | `text-inverse` |

## Status 上传状态

### Loading 加载状态（status=loading）

图片上传中，显示蒙层和加载图标。

| Property | Value |
|---|---|
| 蒙层背景 | `translucent-medium` |
| 蒙层圆角 | `radius-xl` |
| 加载图标 | `ic_loading_line` |
| 加载图标尺寸 | 20×20px |
| 加载图标颜色 | `text-inverse` |
| 加载图标位置 | 居中 |
| 删除按钮 | 显示（右上角） |

### Re-Upload 重新上传（status=reupload）

上传完成但需要重新上传，显示蒙层、刷新图标和文字。

| Property | Value |
|---|---|
| 蒙层背景 | `translucent-medium` |
| 蒙层圆角 | `radius-xl` |
| 图标 | `ic_refresh_line` 刷新 |
| 图标形状 | 使用 iconfont `ic_refresh_line` 原图标，不自行调整图标内部形状 |
| 图标尺寸 | 20×20px |
| 图标颜色 | `text-inverse` |
| 图标位置 | 垂直居中偏上（top 24.39%） |
| 文字 | "重新上传" |
| 文字字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 文字颜色 | `text-inverse` |
| 文字位置 | 图标下方，水平居中 |
| 文字宽度 | 62px |
| 文字对齐 | center |
| 删除按钮 | 显示（右上角） |

### Error 上传失败（status=error）

上传失败，显示蒙层、错误图标和文字。

| Property | Value |
|---|---|
| 蒙层背景 | `translucent-medium` |
| 蒙层圆角 | `radius-xl` |
| 图标 | `ic_clear_circle_line` 错误圆圈 |
| 图标尺寸 | 20×20px |
| 图标颜色 | `text-inverse` |
| 图标位置 | 垂直居中偏上（top 24.39%） |
| 文字 | "上传失败" |
| 文字字体 | `Body/12-regular` 12px, weight 400, line-height 18px |
| 文字颜色 | `text-inverse` |
| 文字位置 | 图标下方，水平居中 |
| 文字宽度 | 62px |
| 文字对齐 | center |
| 删除按钮 | 显示（右上角） |

## Icon Reference

状态蒙层中使用的图标统一从 iconfont 引用，图标容器尺寸为 20×20px。不得为了还原轮廓自行绘制内联 SVG。

### ic_refresh_line（重新上传）

使用 iconfont 中的 `ic_refresh_line`。它表现为单段顺时针圆弧刷新图标，不要替换成双箭头刷新图标。

### ic_clear_circle_line（上传失败）

圆圈内叉号。

### ic_loading_line（加载中）

圆弧加载指示器，需配合旋转动画使用。

## Color Tokens

| Token | Use |
|---|---|
| `Color/neutral/surface-primary-bg-color-container` | 容器背景 |
| `Color/neutral/surface-page-bg-color-page` | 上传按钮背景 |
| `Color/neutral/translucent-bg-color` `translucent` | 删除按钮背景 |
| `Color/icon&text/text-primary-text-icon-color-default` | 标题文字颜色 |
| `Color/icon&text/text-placeholder-text-icon-color-placeholder` | 副标题、说明入口颜色 |
| `Color/error/error-1` | 必填标记 `*` 颜色 |
| 蒙层色 | `translucent-medium` | 上传中/重新上传/失败蒙层 |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|
| `Title/16-semibold` | 16px | 600 | 24px | 独立模块标题 |
| `Body/14-regular` | 14px | 400 | 22px | 表单内标题 |
| `Body/12-regular` | 12px | 400 | 18px | 副标题、说明入口文字、重新上传/上传失败文字 |

## Do Not Infer

- 不要改变一行最多 4 张的限制。
- 不要改变图片项的正方形比例，宽高始终相等。
- 不要改变图片间距 8px。
- 不要改变删除按钮的圆角规则：左下 `radius-md`，右上 `radius-xl`，其余 0。
- 不要省略蒙层效果，上传中/重新上传/失败状态必须有 `translucent-medium` 蒙层。
- 不要改变上传按钮的图标尺寸 32×32px。
- 不要改变状态图标尺寸 20×20px（加载/刷新/错误）。
- 不要在单选上传模式下同时显示已上传图片和上传按钮。
- 不要改变照片宽度的动态计算公式：`(容器宽度 - 两侧间距 12×2 - 照片间距 8×3) / 4`。
- 不要改变标题与副标题的间距 4px。
- 不要改变标题区与图片网格的间距 8px。
- 不要混用两种场景的标题样式：独立模块用 16px Semibold，表单内用 14px Regular。
- 不要省略必填标记 `*` 的红色 `Error-1`。
- 不要将 `ic_refresh_line` 替换成双箭头刷新图标，按 Icon Reference 使用 iconfont 原图标。
