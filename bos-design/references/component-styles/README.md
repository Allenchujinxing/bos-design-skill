# Component Styles

Store Figma-derived component visual style files here. These files are the primary component visual source for H5 generation.

## Demo 预览

组件 demo 文件在 `component-demo/` 目录下。部分 demo（如地图）需要 HTTP 环境：

```bash
cd component-demo && ./start.sh
# 访问 http://localhost:8080
```

---

## 文件规范

Current structure:

```text
component-styles/
  README.md
  index.md
  assets/
  basic/
    system.md
    icon.md
    nav-bar.md
    tab-bar.md
    button.md
    divider.md
  navigation/
    tab.md
    index.md
    steps.md
    tool-bar.md
  input/
    input.md
    textarea.md
    search.md
    picker.md
    calendar.md
    cascader.md
    checkbox.md
    radio.md
    switch.md
    stepper.md
    range-slider.md
    image-upload.md
    filter-bar.md
    dropdown-panel.md
  display/
    map.md
    list.md
    card.md
    tag.md
    tag-group.md
    badge.md
    empty.md
    timeline.md
    collapse.md
    image-viewer.md
    progress.md
    skeleton.md
    swiper.md
  feedback/
    popup.md
    action-sheet.md
    dialog.md
    toast.md
    notice-bar.md
    message.md
    loading.md
    tooltips.md
    pull-down-refresh.md
    pull-up-load.md
    fab.md
```

Each component file is a strict implementation specification for the generated H5/component output, not an inspiration reference. When a matching component style file exists, the output must match that file exactly for:

- Figma source: file URL, component name, node id if available.
- Anatomy: slots and layout.
- Dimensions: height, width, padding, gap, icon slot size.
- Typography: token or exact value.
- Colors: token or exact value.
- Radius, border, divider, and shadow.
- States: default, active, selected, disabled, error, loading, success when available.
- Icon slots: allowed iconfont icons, size, color, alignment.
- Component-level motion and interaction shape when documented.
- Notes: anything that should not be inferred from Taroify.

Use a binary fidelity standard: `matches spec` or `does not match spec`. Do not accept "close enough" component approximations.

Do not approximate component internals with hand-written substitutes. If a component file defines iconfont icons, roller picker behavior, fade masks, selection indicators, divider placement, title bars, or safe-area behavior, implement those details directly.

All component icon slots must use the iconfont source in `basic/icon.md`. Do not use external icon libraries, custom SVG assets, inline SVG paths, hand-drawn CSS icons, emoji, or text glyphs as component icons. If iconfont has no exact match, use the closest semantic iconfont placeholder and document the substitution. The `basic/system.md` status bar asset is the only documented system-control exception.

Do not put generic Taroify interaction behavior here. Use `component-library/taroify.md` for common mobile control behavior.

Product-specific or scene-specific components can live here even when Taroify has no equivalent. For example, `display/map.md` is valid as a visual and scene component source; use Taroify only for adjacent controls such as search, filters, popups, toasts, dialogs, and loading states.
