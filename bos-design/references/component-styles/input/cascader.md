# Cascader

## Source

- Figma file: `Hello-TaroUI-Kit-2026`
- Component page: `15087:48734`
- Sub-components: `Cascader tab group`, `Cascader tab`, `Cascader tab list`
- Directory category: `输入 / Cascader 级联选择器`

## Purpose

Use Cascader for multi-level hierarchical selection, such as province/city/district address pickers, category trees, or organizational structures. Users drill down level by level, with each selection revealing the next level's options. Supports single-select and multi-select modes. This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。
 Use `references/component-library/taroify.md` for data loading, lazy-load, and selection logic.

## Anatomy

The Cascader consists of two parts stacked vertically:

1. **Tab Group** (top) — Shows the breadcrumb path of selected levels
2. **Option List** (below) — Shows the selectable options for the current active level

## Tab Group (Cascader tab group)

The breadcrumb bar showing the hierarchy path.

| Property | Value |
|---|---|
| Height | 44px |
| Background | `white1` |
| Padding | 12px horizontal, 10px vertical |
| Layout | Flex row, items centered |
| Tab gap | 8px |

### Tab Item (Cascader tab)

| Property | Active (current level) | Inactive (parent level) |
|---|---|
| Font | `Title/16-semibold` | `Body/16-regular` |
| Size | 16px, weight 600, line-height 24px | 16px, weight 400, line-height 24px |
| Color | `Branding-1` | `gray3` |

### Level Separator

- Icon: right arrow (`ic_right_line`), 16×16px
- Color: inherits gray
- Placed between each tab item

### Tab Count Variants

| Variant | Description |
|---|---|
| `标题数量=1` | Single level, no separator |
| `标题数量=2` | Two levels, one separator |
| `标题数量=3` | Three levels, two separators |
| `标题数量=4` | Four levels, three separators |
| `标题数量=5` | Five levels, four separators |

## Option List (Cascader tab list)

The scrollable list of options for the current level.

### List Item

| Property | Value |
|---|---|
| Height | 56px |
| Background | `white1` |
| Padding | 12px horizontal (container), 16px vertical (inner row) |
| Bottom border | 0.5px solid `gray6` |
| Layout | Flex row, items centered, space-between |

### Selection Types

#### Single Select (单选)

| State | Text font | Text color | Right icon |
|---|---|---|
| Unselected | `Body/16-regular` 16px, weight 400 | `gray1` | None |
| Selected | `Body/16-regular` 16px, weight 400 | `Branding-1` | Checkmark icon (`ic_check_line`), 20×20px, `Branding-1` |

In single-select mode, tapping an option selects it and automatically advances to the next level. The selected option's text turns blue with a checkmark on the right.

#### Multi Select (多选)

| State | Left icon | Text font | Text color | Right action |
|---|---|---|---|
| Unselected | Radio circle outline, 20×20px, gray | `Body/16-regular` 16px | `gray1` | "下级" link with tree icon, `Branding-1` |
| Selected | Radio filled circle with check, 20×20px, `Branding-1` | `Body/16-regular` 16px | `gray1` | "下级" link **disabled** (grayed out, not clickable) |

In multi-select mode:
- Every level (not just leaf) has a radio icon on the left + option text (4px gap)
- Non-leaf levels show "下级" text link with tree icon on the right to drill into sub-levels
- **Selection and "下级" are mutually exclusive**: when an option is checked, its "下级" button becomes disabled (grayed out, pointer-events none). This is because checking a parent means selecting the entire node — drilling into children is unnecessary.
- When unchecking a parent, "下级" becomes active again
- **Checking a parent clears its children**: if a user has individually selected some children, then checks the parent, all child selections are removed (replaced by the parent selection)
- When returning to a parent level, options that have selected children show the count in the format `选项名 (已选数/总数)` — the count text uses `Branding-1` color, same font weight as the option text (not bold)

### "下级" (Sub-level) Action

| Property | Value |
|---|---|
| Layout | Flex row, 4px gap, items centered |
| Icon | Tree icon (`ic_tree_square_vertical_line`), 20×20px |
| Text | "下级", 16px regular, `Branding-1` |
| Position | Right-aligned in the list item |

## Color Tokens

| Token | Use |
|---|---|
| `Color/brand/branding-1` | | Active tab text, selected option text, checkmark, "下级" link |
| `Color/icon&text/gray1-text-icon-color-default` | | Unselected option text |
| `Color/icon&text/gray3-text-icon-color-placeholder` | | Inactive tab text |
| `Color/neutral/white1-bg-color-container` | | Background |
| `Color/neutral/gray6-component-stroke` | | List item bottom border |

## Interaction Flow

### Single Select Flow

1. User sees level 1 options. Tab group shows one active tab: "请选择".
2. User taps an option → option turns blue with checkmark → level 2 options appear → tab group shows: `选项A > 请选择`.
3. User taps level 2 option → level 3 appears → tab group: `选项A > 选项B > 请选择`.
4. User taps final level option → selection complete, Cascader closes or confirms.
5. User can tap any parent tab to go back and re-select that level.

### Multi Select Flow

1. User sees level 1 options. Every option has a radio icon on the left and "下级" on the right.
2. Tapping the radio selects/deselects the option. When selected, "下级" becomes disabled (grayed out) — selection and drill-down are mutually exclusive.
3. Tapping "下级" (when not selected) navigates into child options without selecting the parent.
4. At the leaf level (deepest level), options only have radio icons, no "下级".
5. When returning to a parent level, options with selected children show count: `选项名 (2/4)`.
6. Checking a parent automatically clears all its individually selected children.
7. User confirms selection via the bottom ToolBar button.

## Usage Context

Cascader is typically used inside a bottom sheet popup or as an inline page component. The popup structure follows the same pattern as Calendar:

| Element | Height |
|---|---|
| Title bar | 50px (with close icon) |
| Cascader content | Tab group (44px) + scrollable option list |
| Bottom action | Optional ToolBar with confirm button (72px, for multi-select) |
| Home indicator | 34px |

It can also be triggered from a form input field (standard input, 56px height).

## Implementation Notes

### Multi Select Mutual Exclusion
- When a non-leaf option is checked, set its "下级" button to disabled state: `opacity: 0.35`, `pointer-events: none`, gray color.
- When checking a parent, iterate through all checked paths and remove any that start with the parent's path + "/" (clear children).
- The child count display `(2/4)` should use the same font-weight as the option text (regular, not bold), only the color changes to `Branding-1`.

### Click Target Separation
- In multi-select mode, the radio icon and option text are one click target (toggle selection).
- The "下级" link is a separate click target (navigate to children). Use `e.stopPropagation()` to prevent bubbling.
- In single-select mode, the entire row is one click target.

### Tab Breadcrumb
- Tabs do NOT show selection counts or badges. They only show the selected value text at each level.
- The active (current) tab is blue semibold; parent tabs are gray regular.
- Clicking a parent tab navigates back and truncates selections from that level onward.

## Do Not Infer

- Do not override tab or list item styles with default Taroify Cascader visual styles.
- Do not change the 56px list item height or 44px tab group height.
- Do not use custom separator icons; use the standard right arrow (`ic_right_line`).
- Do not mix single-select and multi-select modes in the same Cascader instance.
- Do not show "下级" action in single-select mode; it is only for multi-select.
- Do not add horizontal scrolling to the tab group; if tabs overflow, they should wrap or truncate.
