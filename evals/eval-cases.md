# Eval Cases

---

## E1 · 信息录入页

**Prompt:**
```
使用 bos-design 生成一个运维人员信息录入页，包含姓名、手机号、岗位选择（单选）、负责城市/街道/网格三级联动选择，底部有提交按钮。要求可交互。
```

**覆盖场景:** 表单录入、Picker 交互、级联选择、表单校验

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 输出包含问题定义段落（用户、场景、目标） |
| MUST | 使用了 data-entry page style 的结构思路 |
| MUST | Field/Input 组件视觉匹配 `component-styles/input/input.md` |
| MUST | 岗位选择使用 Picker 或 Radio，不是自由文本 |
| MUST | 三级联动使用 Cascader 或多级 Picker，不是三个独立下拉 |
| MUST | 提交按钮匹配 `component-styles/basic/button.md` |
| MUST | 有表单校验错误状态 |
| SHOULD | 有 Status Bar 和 Home Indicator |
| SHOULD | 图标使用 iconfont，不是 SVG/emoji |
| SHOULD | Picker 打开时有底部弹出动画和遮罩 |

---

## E2 · 异常流程多状态

**Prompt:**
```
使用 bos-design 设计一个换电柜异常上报流程，需要包含：扫码定位换电柜、异常类型选择、拍照上传、提交确认。考虑离线、定位失败、相机权限被拒的异常状态。
```

**覆盖场景:** 多步骤流程、异常状态处理、权限引导、图片上传

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 输出包含问题定义（谁在什么场景下做什么） |
| MUST | 流程有明确步骤划分，不是一个超长单页 |
| MUST | 离线状态有对应的 empty/error 处理，匹配 `display/empty.md` |
| MUST | 定位失败有引导恢复操作 |
| MUST | 相机权限被拒有引导去设置的提示 |
| MUST | 图片上传匹配 `input/image-upload.md` 规范 |
| SHOULD | 提交前有确认 Dialog，匹配 `feedback/dialog.md` |
| SHOULD | 提交成功有 Toast 反馈 |
| SHOULD | 异常状态不是简单文字，有图标和操作按钮 |

---

## E3 · 对象搜索列表

**Prompt:**
```
使用 bos-design 做一个车辆搜索页面，支持按车辆编号搜索、按状态筛选（正常/故障/离线），列表展示车辆编号、电量、最后定位时间和当前状态，点击进入详情。
```

**覆盖场景:** 搜索、筛选、列表、卡片、状态标签

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 使用了 object-search page style 的结构思路 |
| MUST | 搜索栏匹配 `input/search.md` 规范 |
| MUST | 筛选使用 filter-bar 或 dropdown-panel，不是自由输入 |
| MUST | 列表项有清晰的信息层级（主信息/辅助信息/状态） |
| MUST | 状态使用 Tag 组件，匹配 `display/tag.md` |
| MUST | 空搜索结果有 empty 状态 |
| SHOULD | 列表卡片结构参考了 `card-patterns.md` |
| SHOULD | 有下拉刷新或上拉加载提示 |
| SHOULD | 点击列表项有视觉反馈 |

---

## E4 · 经营数据看板

**Prompt:**
```
使用 bos-design 设计一个城市运营经理的每日经营看板，展示今日订单量、活跃车辆数、故障率、调度完成率，支持切换日期查看历史数据。
```

**覆盖场景:** 数据展示、看板布局、日期切换、信息密度

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 使用了 operation-overview page style 的结构思路 |
| MUST | 输出包含问题定义（城市运营经理的决策需求） |
| MUST | 核心指标有明确的视觉优先级，不是平铺 |
| MUST | 日期切换有交互实现 |
| MUST | 没有装饰性渐变、发光、阴影等泛 AI 视觉习惯 |
| SHOULD | 数据区分趋势方向（涨/跌/持平） |
| SHOULD | 有 loading/skeleton 状态 |
| SHOULD | 布局适合单手操作和快速扫视 |

---

## E5 · 内容详情页

**Prompt:**
```
使用 bos-design 生成一个工单详情页，展示工单编号、创建时间、当前状态、任务描述、关联车辆信息、处理记录时间线，底部有"开始处理"和"转派"两个操作按钮。
```

**覆盖场景:** 详情展示、时间线、多操作、信息分组

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 使用了 content-detail page style 的结构思路 |
| MUST | 信息有分组，不是一个平铺列表 |
| MUST | 处理记录使用 Timeline 组件，匹配 `display/timeline.md` |
| MUST | 底部操作栏匹配 `navigation/tool-bar.md` |
| MUST | 工单状态使用 Tag，匹配 `display/tag.md` |
| SHOULD | 有 NavBar 返回按钮 |
| SHOULD | 关联车辆信息可点击跳转 |
| SHOULD | 按钮区分主次（开始处理 = primary，转派 = secondary） |

---

## E6 · 极简 Prompt 兜底

**Prompt:**
```
用 bos-design 做一个巡检页面
```

**覆盖场景:** 模糊需求下 skill 是否仍能输出合理方案而非模板

**评判标准:**

| 类型 | 检查项 |
|------|--------|
| MUST | 没有直接套模板，而是先做了问题定义或追问 |
| MUST | 如果直接生成，方案有明确的用户角色和场景假设 |
| MUST | 页面结构有业务逻辑，不是通用 dashboard |
| MUST | 没有泛 AI 装饰（渐变卡片、浮动图形、空洞文案） |
| SHOULD | 考虑了巡检场景的特殊性（户外、移动中、逐项确认） |
| SHOULD | 有状态流转（待巡检 → 巡检中 → 已完成） |

---

## 跑完后记录模板

| Eval | 日期 | 模型 | MUST 命中 | SHOULD 命中 | 备注 |
|------|------|------|-----------|-------------|------|
| E1 | | | /7 | /3 | |
| E2 | | | /6 | /3 | |
| E3 | | | /6 | /3 | |
| E4 | | | /5 | /3 | |
| E5 | | | /5 | /3 | |
| E6 | | | /4 | /2 | |
