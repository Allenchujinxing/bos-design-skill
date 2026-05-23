# NavBar

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `6989:4008`
- Component set: `APP_Title Bar`
- Directory category: `基础 / NavBar 导航栏`

## Purpose

Use NavBar for page-level navigation at the top of the screen. It sits below the system status bar and above the page content area. NavBar provides a back action, a page title, and optional right-side actions. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for back navigation behavior, route transitions, and scroll-triggered style changes.

## Variant Axes

| Axis | Values |
|---|---|
| `theme` | `white`, `color`, `dark` |
| `leftarrow` | `true`, `false` |
| `rightArea` | `empty`, `icon`, `icon+text`, `text` |
| `icon` | `true`, `false` (second icon slot when rightArea is `icon`) |
| `iconText` | `true`, `false` (second icon+text slot when rightArea is `icon+text`) |
| `stroke` | `true`, `false` |

## Anatomy

- Root container (full width, fixed height).
- Left area: optional back arrow icon.
- Center area: title text, horizontally centered with fixed max width. Can be replaced by a Tabs switcher.
- Right area: optional action slot (icon, icon pair, text button, or icon+text pair).
- Optional bottom stroke divider.

## Dimensions

| Property | Value |
|---|---|
| Height | 44px |
| Width | Full parent width (390px in 390pt design) |
| Left padding (back arrow) | 12px from left edge |
| Right padding (action area) | 12px from right edge |
| Back arrow icon size | 24×24px |
| Back arrow top offset | 10px |
| Title max width | 210px (centered) |
| Title vertical alignment | Centered in 44px height |
| Right action icon size | 24×24px |
| Right action icon top offset | 10px |
| Icon gap (two icons) | 12px (354 − 318 − 24 = 12px observed) |

## Typography

### Title

- Token: `Title/18-semibold`
- Font: PingFang SC, 18px, weight 600, line-height 26px.
- Text overflow: ellipsis, single line, no wrap.
- Alignment: center.

### Right text button (rightArea=text)

- Token: `Body/16-regular`
- Font: PingFang SC, 16px, weight 400, line-height 24px.
- Alignment: right.

### Right icon+text label (rightArea=icon+text)

- Token: `Body/10-regular`
- Font: PingFang SC, 10px, weight 400, line-height 14px.
- Alignment: center under icon.
- Icon-to-label gap: 2px.

## Theme Tokens

| Theme | Background | Title color | Icon color |
|---|---|---|---|
| `white` | `white1` | `gray1` `gray1` | `gray1` `gray1` |
| `color` | `Branding-1` `Branding-1` | `anti` | `anti` |
| `dark` | Dark background | `anti` | `anti` |

### Token mapping

| Token | Value | Use |
|---|---|---|
| `Color/neutral/white1-bg-color-container` | `anti` | White theme background |
| `Color/brand/branding-1` | `Branding-1` | Color theme background |
| `Color/icon&text/gray1-text-icon-color-default` | `gray1` | White theme title and icons |
| `Color/icon&text/text-icon-color-anti` | `anti` | Color/dark theme title and icons |

## Stroke (Bottom Divider)

- Visible when `stroke=true`.
- Position: absolute bottom of the NavBar container.
- Width: full NavBar width.
- Height: 0.5px visual weight (rendered as a line asset).
- Color: follows the `gray6` `gray6` divider token.
- Use case: white NavBar on white background when content scrolls behind it, to provide visual separation.

## Right Area Variants

| rightArea | Description | Layout |
|---|---|---|
| `empty` | No right action | Title centered, no right content |
| `icon` | Single icon (e.g. share) | 24×24 icon at right-12px, top-10px |
| `icon` + `icon=true` | Two icons (e.g. search + share) | Second icon at left-318px, first at left-354px, 12px gap |
| `text` | Text button (e.g. "按键文字") | Right-aligned text at right-12px, top-10px |
| `icon+text` | Icon with label below (e.g. share + "分享") | 24×24 icon + 10px label, 2px gap, stacked vertically, top-2px |
| `icon+text` + `iconText=true` | Two icon+text pairs | Second pair at left-318px |

## Center Area: Tabs Variant

The center area can replace the text title with a capsule-style tab switcher (`Tabs 选项卡-应用`). Used when a page has multiple top-level content sections sharing the same NavBar.

- Figma instance reference: `15083:28489`

### Tabs Container

| Property | Value |
|---|---|
| Width | 210px (same as title max width) |
| Height | 36px |
| Background | `gray7` `gray7` |
| Border-radius | `radius-xl` |
| Horizontal padding | 2px |
| Vertical alignment | Centered in 44px NavBar height |
| Layout | Flex row, items stretch equally (`flex: 1 0 0`) |

### Tab Item

| Property | Selected | Unselected |
|---|---|---|
| Background | `white1` | Transparent |
| Border-radius | `radius-lg` | `radius-lg` |
| Shadow | `0px 3px 4px rgba(0,0,0,0.12)` | None |
| Horizontal padding | 12px | 12px |
| Vertical padding | 5px | 5px |
| Font token | `Mark/14-semibold` | `Body/14-regular` |
| Font | PingFang SC, 14px, weight 600, line-height 22px | PingFang SC, 14px, weight 400, line-height 22px |
| Text color | `gray1` `gray1` | `gray2` `gray2` |
| Text alignment | Center | Center |

### Tabs Layout Rules

- All tab items share equal width within the 210px container.
- Only one tab is selected at a time; the selected tab has a white pill background with a subtle drop shadow.
- The tabs container replaces the title text; it occupies the same centered position.
- The NavBar still supports `leftarrow`, `stroke`, and `theme` axes alongside the tabs variant.
- Observed with `theme=white` and `stroke=true` (bottom divider visible).

## States

| State | Visual rule |
|---|---|
| Default | Use the selected `theme` background and matching text/icon colors. |
| Scroll with stroke | When content scrolls behind a white NavBar, show bottom stroke divider. |
| No back arrow | Hide left arrow; title position remains unchanged. |

The Figma spec notes: 白色导航栏在内容溢出滑动时，底部有分割线 (White NavBar shows bottom divider when content overflows and scrolls).

## Layout Usage

- NavBar sits directly below the system status bar (44px height on iOS).
- Page content should account for the combined height of status bar + NavBar.
- The NavBar is the topmost app-level element.
- Use `stroke=true` for white-themed NavBars on white page backgrounds to maintain visual separation during scroll.
- Keep the title concise; it will truncate with ellipsis at 210px width.

## Do Not Infer

- Do not override this component with default Taroify NavBar visual styles.
- Do not invent additional NavBar heights or padding values.
- Do not use brand blue as the NavBar background unless the page design explicitly calls for `theme=color`.
- Do not add shadows to the NavBar; use the stroke divider when separation is needed.
- Do not place interactive content in the title area; it is display-only text.
