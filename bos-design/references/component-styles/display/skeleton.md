# Skeleton

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `7153:5481`
- Component set: `Skeleton Screen 骨骼/占位加载`
- Directory category: `展示 / Skeleton 骨架屏`
- Demo: `component-demo/skeleton-demo.html`

## Purpose

占位加载对模块内部内容有提前预示功能，本质上是界面加载过程中的过渡效果。

占位加载适用于布局排版较为固定的内容区域，应尽可能还原内容布局，使页面加载过程更加流畅，减少用户的等待焦虑及页面跳动感。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时，对应 token 的色值会变化，组件行为不变。

## 用法

- 适用于布局排版较为固定的内容区域
- 应尽可能还原内容布局
- 如果占位和布局差距较大，反而容易给用户造成心理落差

## 组成

灰色占位图与线框图效果类似，用矩形/圆形色块代替实际内容元素。

## 占位块样式

| Property | Value |
|---|---|
| 背景色 | `gray7` |
| 圆角 | 与实际内容元素保持一致（文字行用 2–4px，图片/头像用对应圆角） |
| 高度 | 与待加载元素视觉高度保持一致，优先根据栅格定义，或选取 4 的倍数 |
| 位置 | 与待加载元素保持上下居中对齐 |

## 占位块类型

| 类型 | 形状 | 适用场景 |
|---|---|---|
| 文字行 | 圆角矩形 (radius 2–4px) | 标题、正文、标签 |
| 图片/卡片 | 圆角矩形 (radius 与实际一致) | 图片、Banner、卡片 |
| 头像 | 圆形 | 用户头像 |
| 按钮 | 圆角矩形 (与按钮圆角一致) | 操作按钮 |

## 动画效果 — 循环闪烁（呼吸动画）

| Property | Value |
|---|---|
| 动画类型 | opacity 呼吸闪烁 |
| 不透明度范围 | 100% ↔ 30% |
| 单次时长 | 800ms（从 100% → 30% 为 800ms，从 30% → 100% 为 800ms） |
| 一轮总时长 | 1600ms |
| 循环 | 无限循环，直到加载完成 |
| 缓动函数 | ease-in-out |

## 加载完成过渡

| Property | Value |
|---|---|
| 占位图消失 | 直接消失（不需要渐隐） |
| 内容出现 | 渐现 (fade-in)，时长 200ms |

## 布局原则

- 占位块的数量、位置、大小应尽可能还原真实内容的布局
- 不需要精确到每个文字，用色块代表文字行即可
- 间距与真实布局保持一致
- 页面级骨架屏应覆盖整个内容区域（不含状态栏和导航栏）

## Color Tokens

| Token | Value | Use |
|---|---|---|
| 占位块背景 | `gray7` | 所有骨架占位块 |
| 页面背景 | `white1` 或页面实际背景色 | 骨架屏容器背景 |

## CSS 动画参考

```css
@keyframes skeleton-breath {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.skeleton-block {
  background: var(--color-bg-component); /* gray7 */
  animation: skeleton-breath 1.6s ease-in-out infinite;
}
```

## Do Not Infer

- 不要使用 shimmer/光泽滑动动画 — 设计规范定义的是 opacity 呼吸闪烁。
- 不要使用纯灰色 `#ccc` 或 `#eee` — 使用 design 规范中的 `gray7` token。
- 不要让占位块布局与实际内容差距过大 — 应尽可能还原。
- 不要给占位块加边框或阴影。
- 不要在加载完成时让骨架屏渐隐 — 直接消失，内容渐现 200ms。
- 不要在骨架屏上放真实文字或图标。

## 设计原则

**遇到加载场景时，优先使用骨架屏加载模式。** 相比 loading spinner 或空白等待，骨架屏能更好地预示内容结构、减少用户焦虑、降低页面跳动感。

适用优先级：
1. **骨架屏** — 布局固定、可预知内容结构的场景（列表、卡片、详情页、面板）→ 首选
2. **进度条** — 有明确进度百分比的场景（文件上传、下载）
3. **Loading Spinner** — 无法预知内容结构、或加载时间极短（< 300ms）的场景 → 兜底
