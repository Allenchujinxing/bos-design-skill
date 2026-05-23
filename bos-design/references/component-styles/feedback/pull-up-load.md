# Pull Up Load 上拉加载

## Purpose

列表滚动到底部时自动加载更多数据，也称"无限滚动"。用于分页数据的渐进式加载，减少用户等待感。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## 交互状态

| 状态 | 说明 | 视觉表现 |
|---|---|---|
| 加载中（loading） | 滚动到底部触发加载 | loading 图标旋转 + 文字"加载中..." |
| 加载完成 | 新数据已追加到列表 | 指示器消失，列表内容增加 |
| 没有更多 | 所有数据已加载完毕 | 文字"没有更多了"或分割线+文字 |
| 加载失败 | 网络异常等 | 文字"加载失败，点击重试" |

---

## 底部指示器

| Property | Value |
|---|---|
| 高度 | 48px |
| 背景 | 透明（跟随页面背景） |
| 布局 | flex 水平居中，items-center，gap 8px |
| 位置 | 列表内容最底部 |

### 加载中

| Property | Value |
|---|---|
| 图标 | iconfont `ic_loading_line`（同 `feedback/loading.md`），16px，持续旋转 |
| 颜色 | gray3 |
| 文字 | 12px / regular 400 / gray3 / "加载中..." |

### 没有更多

| Property | Value |
|---|---|
| 文字 | 12px / regular 400 / gray3 / "没有更多了" |
| 分割线（可选） | 左右各一条 40px 线，0.5px gray6，与文字间距 8px |

### 加载失败

| Property | Value |
|---|---|
| 文字 | 12px / regular 400 / gray3 / "加载失败，点击重试" |
| 交互 | 点击后重新触发加载 |

---

## 触发规则

| Property | Value |
|---|---|
| 触发时机 | 列表滚动到距底部 100px 时自动触发 |
| 防重复 | 加载中状态下不重复触发 |
| 首屏 | 如果首屏数据不满一屏，自动触发加载下一页 |

---

## Do Not Infer

- 不要在加载中状态重复触发请求。
- 不要在"没有更多"状态继续触发加载。
- 不要省略加载失败的重试入口。
- 不要让底部指示器遮挡列表内容 — 它是列表的一部分，跟随滚动。
