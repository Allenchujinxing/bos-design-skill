# Taroify Interaction Reference For Interactive H5 Generation

Use this file as the baseline mobile component semantics and interaction reference when generating interactive H5 prototypes. Do not copy Taroify's default theme directly. When Figma-derived component styles exist in `references/component-styles/`, use those files for component visuals and this file for behavior.

Source family: Taroify, a Taro mobile UI component library inspired by Vant.

## How To Apply

1. Identify the page type from `references/BOS-page-style/index.md` and the selected BOS page-style file.
2. Pick the relevant component families below.
3. Build HTML/CSS/JS that uses the selected component's expected mobile structure, state behavior, and key interactions.
4. If matching component style files exist in `references/component-styles/`, use them for visual styling.
5. If `design.md` exists and the component style source is missing a visual detail, bind that missing detail to `design.md` tokens.
6. Include visible states in the prototype when useful: default, active, selected, disabled, loading, empty, error, and success.

## Visual Boundary

This file does not define component visuals. Use it only for interaction behavior and mobile component semantics.

- If a matching component file exists in `references/component-styles/`, that file controls dimensions, spacing, typography, color, radius, borders, dividers, shadows, icon slots, and visual states.
- If a selected visual component has no Taroify equivalent, do not force a mapping. Use the component style file and product/page context directly.
- If a visual detail is missing from the component style file, use `references/design.md` as the fallback token source.
- Component icon slots are replaceable only when the relevant style file or design token rules define the slot, icon source, size, stroke, color, and alignment.

## Page Shell

Use these shapes for app-level structure.

- NavBar: top app bar with title, back affordance, and optional right action.
- Tabbar: persistent bottom navigation for top-level app sections.
- Tabs: horizontal content switching within one page or section.
- Sticky: fixed header, filter bar, or action area when the page scrolls.
- Safe area: reserve room for device top/bottom safe areas when drawing full-screen mobile pages.

HTML guidance:

- Use a fixed-width mobile frame only when the user asks for a framed mockup; otherwise make the page responsive.
- Keep primary navigation predictable and close to native mobile patterns.
- Do not overload the top bar with more than one primary right-side action.

## Buttons And Actions

Use Button-like shapes for explicit commands.

- Primary button: main page action.
- Secondary button: lower-emphasis command.
- Text button: low-friction inline command.
- Icon button: compact tool or navigation action.
- Floating action: only when the page has one obvious create/add action.

HTML guidance:

- Make the main mobile action full-width or sticky bottom when the task depends on completion.
- Use disabled and loading states for async submission.
- Avoid multiple equally strong primary actions in the same viewport.

## Cells, Lists, And Grouping

Use Cell-like rows and Cell.Group-like sections for scannable mobile information.

- Cell row: label/value, title/subtitle, icon/title, or title/action.
- Inset group: grouped settings, forms, account options, and detail metadata.
- Divided list: dense browsing, search results, and repeated records.
- Swipe/action row: destructive or contextual actions, only when discoverability is acceptable.

HTML guidance:

- Use rows for operational or settings-like content.
- Use cards only when content needs stronger grouping, media, or preview behavior.
- Keep repeated rows visually stable; dynamic content should not shift row height unexpectedly.

## Forms

Taroify's Form patterns are the strongest reference for mobile input pages.

Core shapes:

- Form: page or section-level form container.
- Form.Item: field wrapper with label, validation, dependency, and custom render support.
- Field: simplified row-based input component.
- Cell.Group inset: grouped form sections.
- Input: text, password, numeric, and readonly display input.
- Textarea: long-form input.
- Switch, Checkbox, Radio, Stepper, Rate, Slider: specialized input controls.
- Uploader: file/image upload.
- Form.List: repeated or dynamic fields.

HTML guidance:

- Use row-based fields for normal mobile forms: label on the left or top, input/control aligned predictably.
- Group related fields into inset sections.
- Put helper text and validation close to the affected field.
- Use inline validation for fixable field errors; use toast/banner only for page-level failures.
- Use a sticky or full-width bottom submit action for long forms and completion-critical flows.
- For low-friction forms, delay validation until submit or blur. Use on-change validation only when immediate correction is valuable.

## Pickers, Date, And Selection

Use bottom-sheet selection patterns for mobile pickers.

- Picker: single or multi-column option selection.
- Popup bottom sheet: container for picker actions.
- DatetimePicker: date/time selection in a bottom sheet.
- Calendar: date or date-range selection, usually poppable.
- Cascader: hierarchical selection.
- Area: region/address selection.

HTML guidance:

- Represent picker fields as readonly Field rows with a chevron.
- Open selection controls in a bottom sheet with confirm/cancel actions.
- Keep the selected value visible in the field after selection.
- Use full-screen or tall sheets for complex hierarchical choices.

## Feedback

Use feedback components for transient and blocking system states.

- Toast: short status feedback.
- Notify: top notification for global status.
- Dialog: blocking decision or confirmation.
- ActionSheet: contextual command list.
- Loading: blocking or inline progress.
- Progress: determinate progress.
- Skeleton: loading placeholder for content layouts.
- Empty: no data, no results, or first-use state.

HTML guidance:

- Use toast for brief success/failure, not for complex instructions.
- Use dialog for destructive confirmation and irreversible decisions.
- Use skeletons that match the final content shape.
- Give empty states a clear next action when the user can recover.

## Popups And Overlays

Use overlays for temporary focused tasks.

- Popup: bottom, center, or full-screen overlay.
- ActionSheet: list of actions from the bottom.
- ShareSheet: share destination sheet.
- DropdownMenu: compact filter/sort menu when page space allows.

HTML guidance:

- Prefer bottom sheets for mobile contextual actions.
- Use center dialogs sparingly.
- Keep bottom sheet headers compact: title, close, optional confirm.
- Avoid nesting multiple overlays in interactive prototypes unless the flow specifically requires it.

## Navigation And Discovery

Use navigation components for browsing and information architecture.

- Sidebar: category navigation in dense browse pages.
- IndexBar: alphabetical or section index.
- Pagination: uncommon on mobile; prefer infinite scroll or load more unless the product requires pages.
- Steps: process status, onboarding progress, checkout, approval flow.

HTML guidance:

- Use Tabs for peer content categories.
- Use Sidebar for two-pane category browsing only when categories are stable and important.
- Use Steps when sequence status matters more than browsing.

## Content Display

Use display components for compact product information.

- Image: thumbnails, avatars, previews, and media blocks.
- Tag: status, category, or metadata.
- Badge: unread count or alert marker.
- Divider: section separation.
- Collapse: expandable detail content.
- NoticeBar: time-sensitive announcement.
- CountDown: deadline or timed promotion.

HTML guidance:

- Tags should support quick scanning, not decorate every item.
- Badges need a clear anchor and purpose.
- Collapse is useful for secondary information, not primary task content.

## Commerce And Transactional

Use commerce shapes when the mobile product includes purchase, ordering, or paid flows.

- Card: product or order preview.
- SubmitBar: sticky bottom payment/submit area.
- Coupon: coupon selection and applied discount.
- GoodsAction: product detail bottom action group.
- AddressEdit and AddressList: shipping/address flows.

HTML guidance:

- Keep price, discount, and final payable amount visually distinct.
- Use sticky bottom submit bars for checkout and order confirmation.
- Place trust, refund, or policy cues near payment decisions.

## Mapping For Common Pages

- Edit profile: NavBar, Form, Field, Uploader, Switch, Popup Picker, Button.
- Settings: NavBar, Cell.Group, Cell rows, Switch, Dialog, ActionSheet.
- Search results: Search field, Tabs/filters, List rows or Cards, Empty, Skeleton.
- Detail page: NavBar, Image/media, Tags, Cell groups, Sticky bottom action.
- Checkout: NavBar, Address cell, Cell groups, Coupon, SubmitBar, Dialog.
- Notifications: NavBar, Tabs, List rows, Badge, Empty.
- Create/publish: NavBar, Form, Field, Uploader, Picker sheets, sticky submit.

## Avoid

- Do not use Taroify as a visual theme replacement for Figma-derived component styles or product-specific design judgment.
- Do not expose component API names in visible UI copy.
- Do not design pages as a pile of isolated component demos.
- Do not use desktop form layouts in mobile prototypes.
- Do not add complex components unless the page task needs them.
