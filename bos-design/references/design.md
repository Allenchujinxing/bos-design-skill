# DESIGN.md — Hello-CN

> 哈啰出行国内业务移动端设计系统 Token 规范。纯视觉样式，不包含组件定义。

## Token 绑定规则

1. 组件所有视觉属性必须从本文件 Token 取值。
2. 禁止硬编码视觉值——引用 Token 名称而非色值/px。
3. 当组件库默认样式与本文件冲突时，以本文件为准。

---

## 1. Design Context

### BOS 运维移动端

- **兼职运维：** 地图找车、扫码作业、任务履约、工单记录。户外强光场景，高对比度，大热区（≥44×44pt），单手操作。
- **全职管理：** 数据概览、资产管理、人员出勤、任务下发追踪。信息聚合优先，多维筛选，管理操作二次确认。

### 共性原则

- 4px 基础栅格，所有间距为 4 的倍数
- 蓝色品牌基调，功能优先、克制清晰

---

## 2. Color Palette & Roles

### 品牌色

| 名称 | 色值 | 角色 |
|------|------|------|
| Branding-0 | `#0061D1` | Active/按下态 |
| Branding-1 | `#0076FF` | 主操作、链接 |
| Branding-2 | `#C2DEFF` | 禁用态、轻量背景 |
| Branding-3 | `#EAF4FF` | 选中背景、提示底色 |

### 中性色

| 名称 | 色值 | 角色 |
|------|------|------|
| surface-page | `#F5F7FA` | 页面底色 |
| surface-primary | `#FFFFFF` | 主要容器背景 |
| surface-component | `#F0F3F5` | 组件背景 |
| border-divider | `#E1E6EB` | 分割线 |
| border-default | `#D3DAE0` | 默认边框 |
| translucent | `rgba(0,0,0,0.7)` | 弹窗遮罩 |
| translucent-heavy | `rgba(0,0,0,0.8)` | Toast/Tooltips 背景 |
| translucent-medium | `rgba(0,0,0,0.6)` | 图片蒙层 |
| translucent-light | `rgba(0,0,0,0.4)` | 轻量遮罩 |
| black | `#000000` | 媒体预览背景 |

### 文字与图标

| 名称 | 色值 | 角色 |
|------|------|------|
| text-primary | `#111111` | 主要文字 |
| text-secondary | `#5A6066` | 次要文字 |
| text-placeholder | `#879099` | 占位符 |
| text-disabled | `#BCC4CC` | 禁用态 |
| text-inverse | `#FFFFFF` | 反色（深色背景） |
| brand | `#0076FF` | 品牌色文字/图标 |
| link | `#0076FF` | 链接 |
| active | `#0061D1` | 链接点击态 |
| brand-disable | `#C2DEFF` | 品牌色禁用态 |

### 语义色

| 语义 | Level-0（深） | Level-1（标准） | Level-2（浅） | Level-3（极浅） |
|------|-------------|---------------|-------------|---------------|
| Error | `#CB1F1F` | `#F72626` | `#FDCBCB` | `#FEEEEE` |
| Success | `#069E4F` | `#07C160` | `#C3F0D9` | `#EBFAF2` |
| Warning | `#CE7D0C` | `#FB990F` | `#FEE7C5` | `#FFF7EC` |
| Discount | `#D1461F` | `#FF5526` | `#FFD6CB` | `#FFF1EE` |

---

## 3. Typography

### 字体族

- 中文：PingFang SC
- 数字：Roboto
- Fallback：`-apple-system, BlinkMacSystemFont, "PingFang SC", Roboto, "Helvetica Neue", Arial, sans-serif`

### 字号层级

| Token | 字号/行高 | 字重 | 用途 |
|-------|----------|------|------|
| Headline/32 | 32/40 | 600 | 页面主标题 |
| Headline/28 | 28/36 | 600 | 页面主标题 |
| Headline/24 | 24/32 | 600 | 页面主标题 |
| Headline/20 | 20/28 | 600 | 页面主标题 |
| Title/18 | 18/26 | 600 | 导航名称、弹窗标题 |
| Title/16 | 16/24 | 600 | 列表内容、Tab 标签 |
| Title/14 | 14/22 | 600 | 列表标题 |
| Body/16 | 16/24 | 400 | 正文 |
| Body/14 | 14/22 | 400 | 正文、按钮文字 |
| Body/12 | 12/18 | 400 | 辅助信息 |
| Body/10 | 10/14 | 400 | 飘带徽标、气泡数字 |
| Mark/16 | 16/24 | 600 | 强调文字 |
| Mark/14 | 14/22 | 600 | 强调文字 |
| Mark/12 | 12/18 | 600 | 标签强调 |
| Link/14 | 14/22 | 400 | 跳转文本 |
| Link/12 | 12/18 | 400 | 跳转文本 |

### 数字字号

| Token | 字号/行高 | 字重 | 用途 |
|-------|----------|------|------|
| Number/24 | 24/32 | 600 | 大数字展示 |
| Number/20 | 20/28 | 600 | 中等数字 |
| Number/16 | 16/24 | 600 | 常规数字 |
| Number/14 | 14/22 | 400 | 正文数字 |
| Number/12 | 12/18 | 400 | 辅助数字 |

### 规则

- 标题 600，正文 400
- 10px 仅用于飘带徽标
- 15/13/11 为特殊场景字号，慎用

---

## 4. Radius

| Token | 值 | 用途 |
|-------|-----|------|
| radius-xs | 2px | 极小元素（高度 < 28px） |
| radius-sm | 3px | 徽标、标签 |
| radius-md | 4px | 28px 按钮、输入框 |
| radius-lg | 6px | 32px 按钮 |
| radius-xl | 8px | 卡片容器、40px 按钮 |
| radius-2xl | 10px | 48px 按钮 |
| radius-3xl | 12px | 弹窗、浮层、选择器 |
| radius-full | 9999px | 胶囊按钮、头像 |

### 梯度原则

页面级 12px → 模块级 8px → 模块内 4px → 极小标签 2px

### 按钮圆角绑定

28px → radius-md, 32px → radius-lg, 40px → radius-xl, 48px → radius-2xl

---

## 5. Shadow

| Token | box-shadow | 用途 |
|-------|------------|------|
| shadow-1 | `0 2px 8px 0 rgba(17,17,17,0.04)` | hover、轻浮起、导航栏 |
| shadow-2 | `0 4px 8px 0 rgba(17,17,17,0.08)` | 下拉面板、卡片、FAB |
| shadow-nav | `0 3px 4px rgba(0,0,0,0.12)` | Tab 选中项投影 |
| shadow-thumb | `0 2px 8px rgba(17,17,17,0.1), 0 0 1px rgba(17,17,17,0.06)` | 滑块 thumb |

### 方向

- 向下：导航栏(shadow-1)、卡片(shadow-2)
- 向上：底部栏 `0 -2px 8px 0 rgba(17,17,17,0.04)` / `0 -4px 8px 0 rgba(17,17,17,0.08)`

---

## 6. Layout & Grid

### 基础

| 属性 | 值 |
|------|-----|
| 设计稿 | 390 × 844px @1x |
| 栅格 | 6 列，宽度自适应 |
| 外边距（Margin） | 12px |
| 水渠（Gutter） | 8px |
| 基础间距单位 | 4px |

### 页面级间距 Token

| Token | 值 | 用途 |
|-------|-----|------|
| space-page-margin | 12px | 页面左右外边距 |
| space-module-gap | 12px | 模块纵向间距 |
| space-card-padding | 16px | 卡片内边距 |
| space-section-gap | 24px | 大区块间距 |
| space-gutter | 8px | 列间距 |

### 间距序列

2 / 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 / 56 / 64 / 80 px

### 安全区

| 区域 | 值 |
|------|-----|
| 状态栏 | 44px |
| 导航栏内容区 | 44px |
| 导航栏总高度 | 88px |
| 底部安全区（iPhone X+） | 34px |
| 底部操作栏 | 内容区 48px + 安全区 34px ≈ 总高 98px |

### 关键尺寸

| 元素 | 尺寸 |
|------|------|
| 返回按钮热区 | 36×36px |
| 导航栏图标 | 24×24px |
| 图标距边缘 | 12px |
| 公告栏高度 | 36px |
| 内容区与导航栏/底部栏间距 | 12px |
| 模块间纵向间距 | 8px |

---

## 7. Icon

### 来源

BOS iconfont Symbol 图标库，详见 `references/component-styles/basic/icon.md`。

### 尺寸与线粗

| 尺寸 | 线粗 | 用途 |
|------|------|------|
| 24px | 2px | 导航栏、主操作、列表箭头 |
| 20px | 1.67px | 列表项、Tab、次要操作 |
| 16px | 1.33px | 辅助信息、标签内、输入框前缀 |
| 12px | 1px | 极小场景 |

### 色彩

图标色彩与文字色 Token 共用：text-primary / text-secondary / text-placeholder / text-disabled / text-inverse / brand / link

### 图标与文字搭配

| 文字字号 | 图标尺寸 | 间距 |
|----------|----------|------|
| 16px | 20px | 4–8px |
| 14px | 16px | 4–8px |
| 12px | 14px | 4px |

---

## 8. 分割线与边框

| 类型 | 粗细 | 颜色 | 用途 |
|------|------|------|------|
| 分割线 | 0.5px | border-divider `#E1E6EB` | 列表分隔、模块分隔 |
| 边框 | 1px | border-default `#D3DAE0` | 输入框、卡片描边 |

列表分割线左侧留缩进与文字对齐；模块分割线通栏。

---

## 9. Do & Don't（速查）

### 色彩
- ✅ 主操作用 Branding-1，按下用 Branding-0，禁用用 Branding-2
- ❌ 用近似蓝色替代品牌色；禁用态用灰色；遮罩透明度 < 0.5

### 字体
- ✅ 中文 PingFang SC + 数字 Roboto；标题 600 正文 400
- ❌ 混用字体族；使用 15/13/11 等非标准字号；10px 用于正文

### 圆角
- ✅ 按钮圆角绑定高度；梯度递减（外层 > 内层）
- ❌ 所有按钮统一圆角；内层圆角大于外层

### 投影
- ✅ 灰底用 shadow-1，白底用 shadow-2；底部栏向上投影
- ❌ 灰底用 shadow-2；投影色用纯黑 rgba(0,0,0,x)

### 布局
- ✅ 间距 4 的倍数；外边距 12px；预留安全区
- ❌ 使用 5/7/10px 等非标间距；内容被安全区遮挡

### 图标
- ✅ 用 BOS iconfont；尺寸与文字搭配；色彩引用 text Token
- ❌ 自绘图标；emoji；图标与文字尺寸不匹配

### 交互
- ✅ 热区 ≥ 44×44pt；过渡 200–300ms；危险操作二次确认
- ❌ 热区过小；无过渡动效；危险操作一键执行
