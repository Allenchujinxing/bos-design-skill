# Icon 图标

## Purpose

项目统一图标库，基于 iconfont Symbol 方式接入。所有 demo 中的图标必须使用本库中的图标，不得使用外部图标库或自行绘制 SVG。

## 接入方式

在 HTML 的 `<head>` 中引入：

```html
<script src="https://at.alicdn.com/t/c/font_5036208_q8zonb2do6.js"></script>
```

### 通用样式

```css
.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  overflow: visible;
  vertical-align: middle;
}
```

### 使用方式

```html
<svg class="icon"><use xlink:href="#ic_position_line"></use></svg>
```

通过修改容器的 `color` 属性控制图标颜色，通过 `width`/`height` 控制尺寸。图标已去色处理，默认继承父元素颜色。

通过修改容器的 `color` 属性控制图标颜色，通过 `width`/`height` 控制尺寸。

---

## 图标尺寸规范

引用自 `Design/DESIGN-HelloCN.md` 第 8 章 Icon 图标规范：

| 尺寸 | 用途 |
|---|---|
| 24px | 导航栏图标、主操作图标、列表右侧箭头 |
| 20px | 列表项图标、Tab 图标、次要操作 |
| 16px | 辅助信息图标、标签内图标、输入框前缀 |
| 12px | 极小场景，标签内微型图标、气泡指示 |

---

## 图标清单

共 96 个图标，命名规则：`ic_{名称}_{样式}`，样式分为 `line`（线性）和 `fill`（填充）。

### 方向与操作

| 图标名 | 说明 |
|---|---|
| `ic_left_line` | 左箭头/返回 |
| `ic_right_line` | 右箭头 |
| `ic_up_line` | 上箭头 |
| `ic_down_line` | 下箭头 |
| `ic_caret_down_fill` | 下拉三角（实心） |
| `ic_expand_line` | 展开 |
| `ic_close_line` | 关闭 |
| `ic_add_line` | 加号 |
| `ic_remove_line` | 减号 |
| `ic_check_line` | 勾选 |
| `ic_rollback_line` | 撤销/回退 |
| `ic_refresh_line` | 刷新 |

### 通用功能

| 图标名 | 说明 |
|---|---|
| `ic_search_line` | 搜索 |
| `ic_filter_line` | 筛选（线性） |
| `ic_filter_fill` | 筛选（填充） |
| `ic_scan_line` | 扫码 |
| `ic_qrcode_line` | 二维码 |
| `ic_share1_line` | 分享1 |
| `ic_share2_line` | 分享2 |
| `ic_download_line` | 下载 |
| `ic_copy_line` | 复制 |
| `ic_edit_line` | 编辑 |
| `ic_delete_line` | 删除 |
| `ic_list_line` | 列表 |
| `ic_grid_line` | 网格 |
| `ic_ellipsis_fill` | 更多（省略号） |
| `ic_loading_line` | 加载中 |

### 表单与选择

| 图标名 | 说明 |
|---|---|
| `ic_checkbox_line` | 复选框（未选） |
| `ic_checkbox_fill` | 复选框（选中） |
| `ic_radio_line` | 单选框（未选） |
| `ic_radio_fill` | 单选框（选中） |
| `ic_radio_circle_line` | 单选圆圈 |
| `ic_clear_fill` | 清除（实心） |
| `ic_clear_circle_line` | 清除圆圈 |
| `ic_minus_fill` | 减号（实心） |
| `ic_add_circle_line` | 加号圆圈（线性） |
| `ic_add_circle_fill` | 加号圆圈（实心） |
| `ic_remove_circle_fill` | 减号圆圈（实心） |

### 提示与状态

| 图标名 | 说明 |
|---|---|
| `ic_info_circle_fill` | 信息（实心） |
| `ic_info_circle_line` | 信息（线性） |
| `ic_help_line` | 帮助 |
| `ic_help_circle_fill` | 帮助圆圈（实心） |
| `ic_help_circle_line` | 帮助圆圈（线性） |
| `ic_error_circle_fill` | 错误（实心） |
| `ic_error_circle_line` | 错误（线性） |
| `ic_verified_line` | 已认证 |
| `ic_verify_line` | 验证 |
| `ic_security_line` | 安全 |

### 数字序号

| 图标名 | 说明 |
|---|---|
| `ic_number1_circle_fill` | 数字1 |
| `ic_number2_circle_fill` | 数字2 |
| `ic_number3_circle_fill` | 数字3 |
| `ic_number4_circle_fill` | 数字4 |

### 地图与定位

| 图标名 | 说明 |
|---|---|
| `ic_position_line` | 定位 |
| `ic_navigation_line` | 导航 |
| `ic_location_line` | 位置 |
| `ic_location_add_line` | 位置添加 |
| `ic_location_reduce_line` | 位置减少 |
| `ic_location_parking_line` | 停车位置 |
| `ic_city_line` | 城市 |
| `ic_cities_line` | 多城市 |
| `ic_bigarea_line` | 大区 |

### 业务图标

| 图标名 | 说明 |
|---|---|
| `ic_ebike_line` | 助力车 |
| `ic_bike_line` | 单车 |
| `ic_store_line` | 门店 |
| `ic_bill_line` | 账单 |
| `ic_ticket_line` | 工单 |
| `ic_work_line` | 工作 |
| `ic_recycle_line` | 回收 |
| `ic_smartparts_line` | 智能配件 |
| `ic_screwdriver_line` | 维修工具 |
| `ic_college_line` | 高校 |
| `ic_institution_line` | 机构 |
| `ic_server_line` | 服务器 |
| `ic_battery_line` | 电池 |
| `ic_battery_low_line` | 低电量 |

### 通讯与社交

| 图标名 | 说明 |
|---|---|
| `ic_call_line` | 电话 |
| `ic_mail_line` | 邮件 |
| `ic_user_line` | 用户 |
| `ic_group_line` | 群组 |
| `ic_ring_line` | 响铃 |
| `ic_mobile_vibrate_line` | 手机震动 |

### 媒体与其他

| 图标名 | 说明 |
|---|---|
| `ic_camera_fill` | 相机（实心） |
| `ic_camear_line` | 相机（线性） |
| `ic_flashlighton_line` | 闪光灯开 |
| `ic_flashlightoff_line` | 闪光灯关 |
| `ic_heart_line` | 收藏/喜欢 |
| `ic_thumb_up_line` | 点赞 |
| `ic_thumb_down_line` | 踩 |
| `ic_calendar_line` | 日历 |
| `ic_chart1_line` | 图表1 |
| `ic_chart2_line` | 图表2 |
| `ic_dot_line` | 圆点（线性） |
| `ic_dot_fill` | 圆点（实心） |
| `ic_tree_squarel_line` | 树形结构（水平） |
| `ic_tree_square_vertical_line` | 树形结构（垂直） |

---

## Do Not Infer

- 不要使用 Lucide、FontAwesome 或其他外部图标库 — 统一使用本 iconfont 库。
- 不要自行绘制 SVG 内联图标 — 必须通过 `<use xlink:href="#图标名">` 引用。
- 不要修改图标的 viewBox 或 path — 图标样式由 iconfont 库统一管理。
- 不要在 demo 中遗漏 iconfont script 引入。
