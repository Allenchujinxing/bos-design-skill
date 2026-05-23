# Component Styles Index

Use this index to find recorded Figma-derived component visual styles. Update the status whenever a component style file is added or materially revised.

## 全局规则

以下规则适用于所有引用本组件库的 skill 和 demo：

1. **系统适配必须包含** — 所有 demo 页面必须适配手机状态栏（44px）和底部安全区（34px），具体规范见 `basic/system.md`。
2. **图标必须使用 iconfont 库** — 所有图标通过 `<svg class="icon"><use xlink:href="#图标名"></use></svg>` 引用，不得使用外部图标库或内联 SVG path。接入方式和图标清单见 `basic/icon.md`。
3. **设计稿基准** — 390×844px @1x，以 iOS 为基准。
4. **视觉 Token 引用** — 组件的颜色、圆角等视觉属性必须从 `references/design.md` 中取值，禁止硬编码色值或圆角 px。页面级间距（外边距、模块间距、卡片内边距）使用 `space-*` token。
5. **组件内部间距** — 组件内部尺寸、padding、gap 属于 component anatomy，默认保持固定 px；除非当前项目提供 component-level spacing token，否则不要用页面级 `space-*` token 替代组件内部间距。
6. **Demo 运行环境** — 涉及定位、搜索等能力的 demo 需通过 HTTP 服务访问。

---

Status values:

- `recorded`: visual style has been captured from Figma.
- `partial`: some visual style has been captured, but important variants or states are missing.
- `pending`: not captured yet.

## Basic

| Component | Chinese | File | Status |
|---|---|---|---|
| System | 系统控件 | `basic/system.md` | recorded |
| Button | 按钮 | `basic/button.md` | recorded |
| Divider | 分割线 | `basic/divider.md` | recorded |
| Icon | 图标库 | `basic/icon.md` | recorded |
| NavBar | 导航栏 | `basic/nav-bar.md` | recorded |
| TabBar | 底部标签栏 | `basic/tab-bar.md` | recorded |

## Navigation

| Component | Chinese | File | Status |
|---|---|---|---|
| ToolBar | 底部工具栏 | `navigation/tool-bar.md` | recorded |
| Tab | 选项卡 | `navigation/tab.md` | recorded |
| Index | 索引 | `navigation/index.md` | recorded |
| Drawer | 抽屉 | `navigation/drawer.md` | pending |
| Steps | 步骤条 | `navigation/steps.md` | recorded |

## Input

| Component | Chinese | File | Status |
|---|---|---|---|
| Calendar | 日历 | `input/calendar.md` | recorded |
| Cascader | 级联选择器 | `input/cascader.md` | recorded |
| Range Slider | 范围滑块 | `input/range-slider.md` | recorded |
| Checkbox | 多选框 | `input/checkbox.md` | recorded |
| Input | 输入框 | `input/input.md` | recorded |
| Picker | 选择器 | `input/picker.md` | recorded |
| Radio | 单选框 | `input/radio.md` | recorded |
| Search | 搜索框 | `input/search.md` | recorded |
| Stepper | 步进器 | `input/stepper.md` | recorded |
| Textarea | 多行文本框 | `input/textarea.md` | recorded |
| Switch | 开关 | `input/switch.md` | recorded |
| Image Upload | 图片上传 | `input/image-upload.md` | recorded |
| Filter Bar | 筛选栏 | `input/filter-bar.md` | recorded |
| Dropdown Panel | 下拉面板 | `input/dropdown-panel.md` | recorded |

## Display

| Component | Chinese | File | Status |
|---|---|---|---|
| Map | 地图 | `display/map.md` | recorded |
| Timeline | 时间轴 | `display/timeline.md` | recorded |
| Tag | 标签 | `display/tag.md` | recorded |
| TagGroup | 标签组 | `display/tag-group.md` | recorded |
| Badge | 徽标 | `display/badge.md` | recorded |
| List | 列表 | `display/list.md` | recorded |
| Empty | 空状态 | `display/empty.md` | recorded |
| ImageViewer | 图片预览 | `display/image-viewer.md` | recorded |
| Progress | 进度条 | `display/progress.md` | recorded |
| Skeleton | 骨架屏 | `display/skeleton.md` | recorded |
| Swiper | 轮播图 | `display/swiper.md` | recorded |
| Card | 卡片 | `display/card.md` | recorded |
| Collapse | 折叠面板 | `display/collapse.md` | recorded |

## Feedback

| Component | Chinese | File | Status |
|---|---|---|---|
| Action Sheet | 动作面板 | `feedback/action-sheet.md` | recorded |
| Dialog | 对话框 | `feedback/dialog.md` | recorded |
| Popup | 弹出层 | `feedback/popup.md` | recorded |
| Toast | 轻提示 | `feedback/toast.md` | recorded |
| Tooltips | 气泡提示 | `feedback/tooltips.md` | recorded |
| NoticeBar | 公告栏 | `feedback/notice-bar.md` | recorded |
| Message | 消息通知 | `feedback/message.md` | recorded |
| Loading | 加载 | `feedback/loading.md` | recorded |
| Pull Down Refresh | 下拉刷新 | `feedback/pull-down-refresh.md` | recorded |
| Pull Up Load | 上拉加载 | `feedback/pull-up-load.md` | recorded |
| Fab | 浮动按钮 | `feedback/fab.md` | recorded |
