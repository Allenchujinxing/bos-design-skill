# Index

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11522:2175`
- Component set: `Indexes`
- Directory category: `导航 / Index 索引`

## Purpose

Use Index for long scrollable lists that need quick jump-to-section navigation via a sidebar index bar. Common use cases include contact lists (alphabetical), numbered category lists, and city selectors. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for scroll-to-section behavior, sticky headers, and touch-drag index interaction.

## Variant Axes

| Axis | Values |
|---|---|
| `propValue` (Index type) | `number`, `letter` |
| `propValue1` (State) | `默认` (Default), `滑动` (Sliding/Active) |

## Anatomy

- Full-page scrollable list container.
- Section groups, each with a sticky title header and list items below.
- Right-side index bar with vertically stacked index entries.
- Active index indicator (sliding state): a circular tooltip showing the current index.

## Section Title (indexes-title)

| Property | Value |
|---|---|
| Background | `gray8` `gray8` |
| Padding | 16px horizontal, 4px vertical |
| Font | `Mark/14-semibold` — PingFang SC, 14px, weight 600, line-height 22px |
| Color | `gray1` `gray1` |
| Width | Full parent width |
| Height | 30px (4 + 22 + 4) |

## List Item

| Property | Value |
|---|---|
| Background | `white1` |
| Padding | 12px horizontal (container), 16px vertical (item row) |
| Font | `Body/16-regular` — PingFang SC, 16px, weight 400, line-height 24px |
| Color | `gray1` `gray1` |
| Text overflow | Ellipsis, single line |
| Bottom border | 0.5px solid `gray6` `gray6` |
| Row height | 56px (16 + 24 + 16) |

## Index Bar (indexes-bar)

| Property | Value |
|---|---|
| Position | Absolute, right 12px, vertically centered |
| Width | 20px |
| Layout | Flex column, centered, 2px gap |
| Font (default) | `Body/12-regular` — PingFang SC, 12px, weight 400, line-height 18px |
| Color (default) | `gray1` `gray1` |
| Alignment | Center |

### Active Index Item

| Property | Value |
|---|---|
| Background | `Branding-1` `Branding-1` |
| Width | 20px |
| Border-radius | 40px (full round) |
| Padding | 1px vertical |
| Font | `Mark/12-semibold` — PingFang SC, 12px, weight 600, line-height 18px |
| Color | `white1` |

### Sliding Tooltip (onclick)

| Property | Value |
|---|---|
| Size | 48×48px |
| Background | `gray5` `gray5` |
| Border-radius | 40px (full round) |
| Position | Right 28px from the index bar (to the left of the active item) |
| Font | `Headline/20-semibold` — PingFang SC, 20px, weight 600, line-height 28px |
| Color | `anti` |
| Padding | 15px horizontal, 7px vertical |

The tooltip appears when the user touches and drags on the index bar, showing the current index value in a large circular indicator.

## Index Types

### Number Index

- Index entries are numeric: 1, 2, 3, 4, 5, 6, 7, 8...
- Section titles display the number.

### Letter Index

- Index entries are alphabetical: A, B, C, D, E...
- Section titles display the letter.
- Common for contact lists and city selectors.

## States

| State | Visual rule |
|---|---|
| Default | Index bar visible on the right, no tooltip. Active index item highlighted with blue pill. |
| Sliding | User is touching/dragging the index bar. Tooltip circle appears to the left of the active index item. |

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/neutral/gray8-bg-color-page` | `#f5f7fa` | Section title background |
| `Color/neutral/white1-bg-color-container` | `#ffffff` | List item background |
| `Color/neutral/gray6-component-stroke` | `#e1e6eb` | List item bottom border |
| `Color/icon&text/gray1-text-icon-color-default` | `#111111` | Section title, list item text, index bar text |
| `Color/brand/branding-1` | `#0076ff` | Active index item background |
| `Color/neutral/gray5-component-border` | `#d3dae0` | Sliding tooltip background |
| `Color/icon&text/text-icon-color-anti` | `#ffffff` | Active index text, tooltip text |

## Layout Usage

- Index occupies the full page height below the NavBar.
- The index bar floats on the right side, vertically centered in the visible area.
- Section titles act as sticky headers during scroll.
- List items fill the full width with 12px horizontal padding.
- The sliding tooltip should not overlap with the index bar entries.

## Do Not Infer

- Do not override section title or list item styles with default Taroify Index visual styles.
- Do not change the index bar position from right-aligned to left-aligned.
- Do not use colors other than `Branding-1` for the active index indicator.
- Do not resize the sliding tooltip from 48×48px.
- Do not mix number and letter indexes in the same list.
