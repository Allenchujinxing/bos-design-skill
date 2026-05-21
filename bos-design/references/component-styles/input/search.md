# Search 搜索框

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `7006:5343`
- Sub-components: `search bar`, `search input`
- Directory category: `输入 / Search 搜索框`

## Purpose

Use Search for keyword input and search triggering. Supports two scene modes (non-navigation / navigation bar), three states (default / activated / text input), two themes (white / custom background color), two shapes (rectangle / capsule), and customizable placeholder, background color, and input slot. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。


## Anatomy

The Search Bar consists of:

1. **Container** — Full-width bar with background color
2. **Left arrow** (optional) — Back navigation icon, only in navigation bar scene
3. **Search input** — The input field with search icon and placeholder
4. **Right area** (optional) — Action text ("搜索" or "取消")

## Container (search bar)

| Property | Value |
|---|---|
| Width | 390px (full screen) |
| Height | 44px |
| Padding | 3px 12px (vertical 3px, horizontal 12px) |
| Layout | Flex column, items center, justify center |
| Inner layout | Flex row, 8px gap, items center |

## Search Input (search input)

The input field area.

| Property | Value |
|---|---|
| Height | 36px |
| Flex | 1 (fills remaining space) |
| Border radius | 8px (rectangle) / 48px (capsule) |
| Overflow | Clip |
| Padding left | 12px (for icon + placeholder) |

### Theme Backgrounds

| Theme | Container background | Input background |
|---|---|---|
| White | `white1` | `gray7` |
| Custom color | `Branding-1` (or any custom) | `white1` |

### Search Icon

| Property | Value |
|---|---|
| Icon | iconfont `ic_search_line`, 16×16px |
| Color | `gray3` `gray3` |
| Position | Left side of input, 12px from left edge, vertically centered |

### Placeholder Text

| Property | Value |
|---|---|
| Font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Color | `gray3` `gray3` |
| Position | 4px gap after search icon |
| Text | "请输入关键词" (default) |

### Clear Icon (text input state)

| Property | Value |
|---|---|
| Icon | iconfont `ic_clear_fill`, 16×16px |
| Color (gray input bg) | `gray3` `gray3` |
| Color (white input bg) | `gray4` `gray4` |
| Position | Right side of input, 12px from right edge, vertically centered |
| Visibility | Only shown when input has text content |

### Input Text (text input state)

| Property | Value |
|---|---|
| Font | `Body/14-regular` 14px, weight 400, line-height 22px |
| Color | `gray1` `gray1` |
| Cursor indicator | `Branding-1` `Branding-1` |

## Left Arrow (navigation bar scene)

| Property | Value |
|---|---|
| Icon | iconfont `ic_left_line`, 24×24px |
| Color | `gray1` `gray1` |
| Position | Left of search input |
| Visibility | Only in navigation bar scene (`leftarrow=on`) |

## Right Area

| Property | Value |
|---|---|
| Font | `Body/16-regular` 16px, weight 400, line-height 24px |
| Color | `gray1` `gray1` |
| Position | Right of search input |
| Visibility | Only when `rightarea=on` |

### Right Area Text by State

| State | Text |
|---|---|
| Default (non-navigation) | Not shown |
| Default (navigation) | "搜索" |
| Activated | "搜索" |
| Text input | "取消" |

## Scenes

### Non-navigation Scene (非导航场景)

Simple search bar without back arrow or right action text. Just the input field.

| Property | Value |
|---|---|
| Left arrow | Hidden |
| Right area | Hidden |
| Input | Full width |

### Navigation Bar Scene (导航栏场景)

Search bar with back arrow on left and action text on right.

| Property | Value |
|---|---|
| Left arrow | 24×24px back icon |
| Right area | "搜索" (default) / "取消" (text input) |
| Input | Flex 1 between arrow and text |

## States

| State | Placeholder | Input text | Clear icon | Right text |
|---|---|---|---|---|
| Default | Visible | Hidden | Hidden | "搜索" (nav) / hidden |
| Activated | Visible | Cursor shown | Hidden | "搜索" |
| Text input | Hidden | Visible | Visible (16×16px) | "取消" |

## Themes

| Theme | Container bg | Input bg | Input border radius |
|---|---|---|---|
| White | `white1` | `gray7` `gray7` | 8px (rect) / 48px (capsule) |
| Custom color | `Branding-1` `Branding-1` | `white1` | 8px (rect) / 48px (capsule) |

## Shapes

| Shape | Input border radius |
|---|---|
| Rectangle (矩形) | 8px |
| Capsule (胶囊) | 48px |

## Customization Options

1. **Placeholder text** — Can be customized to any text
2. **Background color** — Container background can be any color (white, brand blue, etc.)
3. **Input slot** — The input area can embed custom content

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `Color/brand/branding-1` | `#0076ff` | Custom theme container bg, cursor color |
| `Color/icon&text/gray1-text-icon-color-default` | `#111111` | Input text, right area text, back arrow |
| `Color/icon&text/gray3-text-icon-color-placeholder` | `#879099` | Placeholder text, search icon, clear icon |
| `Color/neutral/gray7-bg-color-component` | `#f0f3f5` | White theme input bg |
| `Color/neutral/white1-bg-color-container` | `#ffffff` | White theme container bg, custom theme input bg |

## Typography Summary

| Style Name | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `Body/14-regular` | 14px | 400 | 22px | Placeholder text, input text |
| `Body/16-regular` | 16px | 400 | 24px | Right area text ("搜索"/"取消") |

## Do Not Infer

- Do not change the search input height from 36px.
- Do not change the container height from 44px.
- Do not change the search icon size from 16×16px.
- Do not change the clear icon size from 16×16px.
- Do not change the back arrow icon size from 24×24px.
- Do not use rectangle border radius (8px) for capsule shape or vice versa.
- Do not show the clear icon when the input is empty.
- Do not show the back arrow in non-navigation scene.
- Do not change the 8px gap between left arrow, input, and right area.
- Do not change the 4px gap between search icon and placeholder text inside the input.
