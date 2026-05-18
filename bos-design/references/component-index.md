# Component Behavior Bridge

Use this file to bridge the recorded visual components in `component-styles/` with behavior references in `component-library/taroify.md`.

The two libraries do not need one-to-one coverage:

- `component-styles/` is the component visual source and may include product-specific or scene-specific components.
- `component-library/taroify.md` is the interaction behavior source for common mobile controls.
- If a visual component has a matching or similar Taroify family, use Taroify for behavior only after preserving the component style file's anatomy, visual rules, states, and documented component-level interaction shape.
- If a visual component has no Taroify family, use the component style file and page context directly.

Always read `component-styles/index.md` first, then use this bridge only to decide whether Taroify behavior should be loaded.

## Behavior Families

- Page shell: NavBar, Tabbar, Tabs, Sticky, safe area.
- Buttons and actions: Button, icon buttons, loading and disabled actions, floating action.
- Cells, lists, and grouping: Cell, Cell.Group, rows, inset groups, divided lists.
- Forms: Form, Form.Item, Field, Input, Textarea, Switch, Checkbox, Radio, Stepper, Rate, Slider, Uploader, Form.List.
- Pickers, date, and selection: Picker, Popup, DatetimePicker, Calendar, Cascader, Area.
- Feedback: Toast, Notify, Dialog, ActionSheet, Loading, Progress, Skeleton, Empty.
- Popups and overlays: Popup, ActionSheet, ShareSheet, DropdownMenu.
- Navigation and discovery: Sidebar, IndexBar, Pagination, Steps.
- Content display: Image, Tag, Badge, Divider, Collapse, NoticeBar, CountDown.
- Commerce and transactional: Card, SubmitBar, Coupon, GoodsAction, AddressEdit, AddressList.

## Style-Only Or Product Components

Use these directly from `component-styles/` even when Taroify has no equivalent behavior family.

| Component style | File | How to use |
|---|---|---|
| Map | `display/map.md` | Use the documented map layout, markers, floating controls, runtime notes, and scene behavior. Borrow only generic overlay, search, filter, loading, and feedback behavior from Taroify when the page also uses those controls. |

## Selection Guidance

- Form-heavy pages: use Forms, Pickers, Buttons, Feedback, Page shell.
- Settings pages: use Cells, Forms, Dialog, ActionSheet, Page shell.
- Search and browse pages: use Page shell, Cells/lists, Tabs, Feedback, Content display.
- Detail pages: use Page shell, Content display, Cells, Buttons, Sticky, Popups.
- Map or location task pages: use `component-styles/display/map.md` as the primary source; use Taroify only for adjacent controls such as search, filter, popup sheet, toast, dialog, loading, and empty/error recovery.
- Checkout or payment pages: use Commerce, Cells, Forms, Dialog, Feedback.
- Empty or loading pages: use Feedback, Skeleton, Empty, Buttons.
