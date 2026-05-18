# Card

## Source

- 参考: [Arco Design Card](https://arco.design/react/components/card)（Web 端，移动端适配）
- 无 Figma 设计稿，基于 Arco Card 组件能力移动端化
- Directory category: `展示 / Card 卡片`
- Demo: `component-demo/card-demo.html`

## Purpose

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。移动端卡片是最常用的内容容器，可承载文字、列表、图片、段落。

This file records the component style spec for mobile.

## 组件结构

```
┌─────────────────────────────────────────┐
│  [封面图 cover]                          │  ← 可选
├─────────────────────────────────────────┤
│  [标题 title]              [操作区 extra] │  ← Header，可选
├─────────────────────────────────────────┤
│                                         │
│  [内容区 body]                           │  ← 必须
│                                         │
├─────────────────────────────────────────┤
│  [底部操作组 actions]                     │  ← 可选
└─────────────────────────────────────────┘
```

## 卡片类型

| 类型 | 说明 | 适用场景 |
|---|---|---|
| 基础卡片 | 标题 + 内容 | 信息模块、功能入口 |
| 简洁卡片 | 仅内容区，无标题 | 轻量信息展示 |
| 封面卡片 | 封面图 + Meta 信息 | 商品、文章、活动 |
| 操作卡片 | 内容 + 底部操作组 | 需要交互的信息卡 |

## 尺寸

| Property | Value |
|---|---|
| 宽度 | 撑满容器（通常 366px = 390 - 12×2 边距） |
| 内边距 (body) | 12px |
| Header 内边距 | 12px |
| 圆角 | 遵循 DESIGN-HelloCN 圆角体系（见下方） |
| 封面图圆角 | 顶部跟随卡片圆角，底部 0 |

## 圆角规则

卡片圆角不是固定值，需遵循 `DESIGN-HelloCN.md` 的圆角梯度体系：

| 梯度 | 圆角 | 卡片场景 |
|---|---|---|
| 第一梯度 | 12px | 页面级容器 — 底部浮层内的卡片、弹窗面板 |
| 第二梯度 | 8px | 模块级容器 — **常规卡片（默认值）** |
| 第三梯度 | 4px | 模块内子元素 — 卡片内嵌的子卡片、小区块 |

**选择原则：**
- 页面内的独立内容卡片 → **8px**（最常用）
- 弹窗/浮层内的卡片 → **12px**（跟随面板圆角）
- 卡片内部的子区块 → **4px**（内层圆角 < 外层圆角）
- 贴角标签的对应角 → 与所在卡片圆角保持一致

## 样式

### 有边框 (bordered)

| Property | Value |
|---|---|
| Background | `anti` |
| Border | 0.5px solid `gray6` |
| Border-radius | 8px（默认，遵循圆角体系） |
| Shadow | none |

### 无边框 (borderless)

| Property | Value |
|---|---|
| Background | `anti` |
| Border | none |
| Border-radius | 8px（默认，遵循圆角体系） |
| Shadow | none |
| 使用场景 | 页面背景为 `gray8` 时，卡片自然浮起，无需边框 |

边框是可选的，根据场景选择：
- **灰色背景页面** → 无边框，白色卡片靠背景色差自然浮起
- **白色背景页面** → 有边框，用 `gray6` 区分卡片边界

### 按压态 (pressed)

移动端无 hover，使用按压态替代：

| Property | Value |
|---|---|
| Background | `gray8` |
| 过渡 | background 0.15s ease |
| 触发 | `:active` 伪类 |

## Header 区域

| Property | Value |
|---|---|
| 高度 | 自适应，最小 44px |
| Padding | 12px |
| 标题字体 | 16px / semibold 600 / gray1 / line-height 24px |
| Extra 字体 | 14px / regular 400 / Branding-1 / line-height 22px |
| 分割线 | 底部 0.5px solid Gray6（可选） |
| 布局 | flex，标题左对齐，extra 右对齐 |

## Body 区域

| Property | Value |
|---|---|
| Padding | 12px |
| 字体 | 14px / regular 400 / gray2 / line-height 22px |

## Cover 封面

| Property | Value |
|---|---|
| 宽度 | 100% |
| 高度 | 按图片比例或固定值 |
| Object-fit | cover |
| 圆角 | 顶部跟随卡片圆角 12px |
| 位置 | 卡片最顶部，Header 和 Body 之上 |

## Meta 信息

用于封面卡片下方的结构化信息展示：

| Property | Value |
|---|---|
| Avatar | 24×24px 圆形 |
| Title | 16px / semibold 600 / `gray1` / line-height 24px |
| Description | 14px / regular 400 / `gray3` / line-height 22px |
| Gap (avatar → text) | 8px |
| Gap (title → description) | 4px |

## Actions 底部操作组

| Property | Value |
|---|---|
| 高度 | 44px |
| 分割线 | 顶部 0.5px solid `gray6` |
| 布局 | flex，等分排列 |
| 操作项字体 | 14px / regular 400 / `gray2` |
| 操作项按压色 | `gray8` |
| 操作项间分割 | 0.5px solid `gray6` 竖线 |
| 图标尺寸 | 20×20px（可选，在文字上方或左侧） |

## 预加载（骨架屏）

卡片支持 loading 状态，内容区替换为骨架屏占位块：

- 封面区 → 矩形骨架块
- 标题 → 短矩形骨架块
- 描述 → 长矩形骨架块
- Avatar → 圆形骨架块

骨架屏样式参考 `skeleton.md`。

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `white1` | `#ffffff` | 卡片背景 |
| `Gray6` | `#e1e6eb` | 边框、分割线 |
| `Gray7` | `#f5f7fa` | 按压态背景 |
| `gray1` | `#111` | 标题文字 |
| `gray2` | `#5d666e` | 正文文字 |
| `gray3` | `#879099` | 描述文字 |
| `Branding-1` | `#0076ff` | Extra 链接色 |

## 移动端适配说明

与 Web 端 Arco Card 的差异：

| Web 端 | 移动端 |
|---|---|
| `hoverable` 鼠标悬浮阴影 | 改为 `:active` 按压态背景变色 |
| `Card.Grid` 网格卡片 | 移动端不使用，改用列表或双列布局 |
| 固定宽度 360px | 撑满容器，响应式 |
| 内部嵌套卡片 | 移动端避免嵌套，保持扁平 |
| Tabs 内嵌 | 移动端可用，但建议 Tab 放在卡片外部 |

## 自定义能力

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `bordered` | boolean | true | 是否有边框 |
| `pressable` | boolean | false | 是否有按压态（可点击的卡片） |
| `loading` | boolean | false | 是否显示骨架屏 |
| `cover` | node | — | 封面图 |
| `title` | string/node | — | 标题 |
| `extra` | string/node | — | 右上角操作区 |
| `actions` | node[] | — | 底部操作组 |
| `bodyPadding` | number | 16 | 内容区内边距 |
| `borderRadius` | number | 8 | 卡片圆角，遵循圆角梯度体系（8/12/4） |

## Do Not Infer

- 不要使用 hover 效果 — 移动端无鼠标，用 `:active` 按压态替代。
- 不要嵌套卡片 — 移动端保持扁平结构，避免视觉层级混乱。
- 不要使用 Grid 网格卡片 — 移动端空间有限，用列表或双列替代。
- 不要给卡片加 box-shadow — 设计规范中卡片通过背景色差异浮起，不用阴影。
- 不要让卡片宽度固定 — 应撑满容器，响应式适配。
- 不要随意指定圆角 — 遵循 DESIGN-HelloCN 圆角梯度体系（页面级 12px / 模块级 8px / 模块内 4px），内层圆角不得大于外层。
