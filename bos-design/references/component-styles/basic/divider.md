# Divider

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `11755:16371`
- Directory category: `基础 / Divider 分割线`

## Purpose

Use Divider to separate page sections, content blocks, rows, paragraphs, inline text links, or table-like operation actions. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use page structure and Taroify semantics to decide whether a divider should be horizontal, vertical, solid, or dashed.

## When To Use

- Separate text paragraphs in different sections.
- Separate inline text or links, such as action links in a table/list row.
- Separate content blocks with a clear visual boundary while keeping the interface lightweight.

Do not use Divider as decorative decoration. It should clarify grouping, hierarchy, or action separation.

## Types

| Type | Use case | Direction |
|---|---|
| Horizontal Divider | Section, paragraph, row, or module separation | Horizontal line |
| Vertical Divider | Inline text/link/action separation | Vertical line |

## Color

| Token | Use |
|---|---|
| `Color/neutral/gray6-component-stroke` `gray6` | Divider stroke color |

This matches the `gray6` divider token in `design.md`.

## Stroke

| Style | Rule |
|---|---|
| Solid | Default divider style. |
| Dashed | Use only when the visual distinction is meaningful, such as secondary separation or temporary/optional grouping. |
| 0.5px | Preferred for lightweight content separation. |
| 1px | Use when the divider must be more visible or when platform rendering makes 0.5px too faint. |

## Horizontal Divider

- Width follows the parent container or row content area.
- Default color is `gray6`.
- Use 0.5px as the default visual weight.
- In list rows, align the divider indentation with the row content/text when the row has leading content.
- In module separation, full-width within the module is allowed.

## Vertical Divider

- Use between inline text links, row actions, or compact action groups.
- Height follows adjacent text size:
  - With 16px text, observed divider height is about 16px.
  - With 14px text, observed divider height is about 14px.
- Default color is `gray6`.
- Keep enough horizontal spacing so the divider separates actions without feeling like punctuation.

## Typography Context

The Figma page shows Divider used with:

- `Body/16-regular`: 16px, line-height 24px.
- `Body/14-regular`: 14px, line-height 22px.
- Link text uses `Color/brand/Branding-1` `Branding-1`.

Divider styling should support the surrounding text hierarchy and should not compete with text color or action affordance.

## Layout Rules

- Use Divider to support grouping, not to compensate for weak spacing or unclear hierarchy.
- Prefer whitespace for major page section separation when a visible stroke is not needed.
- Avoid stacking multiple dividers too close together unless the component pattern explicitly needs dense row separation.
- Do not use heavy borders where a 0.5px divider is sufficient.

## Do Not Infer

- Do not invent additional divider colors.
- Do not use brand color for Divider unless a future Figma component variant explicitly defines it.
- Do not use Divider as a decorative rule under headings without a structural reason.
- Do not replace row dividers with card borders unless the page pattern calls for card grouping.
