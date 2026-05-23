# Map 地图

## Purpose

地图基础能力组件，提供真实地图底图和通用地图控件（缩放、定位、刷新）。

本文件仅定义地图容器和基础控件的视觉规范。地图上的业务图层（运营区、站点、车辆等）和页面布局范式（导航栏、筛选、底部操作区的组合方式）在 page-styles 中定义。

This file records the Figma visual style only.

## 视觉 Token 声明

本文件中的颜色、圆角、间距等视觉属性引用自搭配的 Design 规范文件（如 `references/design.md`）。当切换到其他视觉系统时（如 HelloRide、HelloSaaS），对应 token 的色值会变化，组件结构和行为不变。

---

## 地图容器

| Property | Value |
|---|---|
| 底图 | 高德地图 JS API 2.0 标准图层 |
| 地图样式 | `amap://styles/light` |
| 默认缩放级别 | 15（街道级） |
| 背景色（加载中） | `gray8` |

### 容器模式

| 模式 | 圆角 | 说明 |
|---|---|---|
| 全屏 | 0px | 地图占满整个页面，控件浮在上方 |
| 卡片内嵌 | 8px | 地图作为卡片内的一个区域，固定高度 |

---

## 基础控件

### 控件通用样式

| Property | Value |
|---|---|
| 容器宽度 | 36px |
| 容器背景 | `white1` |
| 容器圆角 | 8px |
| 容器投影 | `shadow-2` |
| 图标尺寸 | 24×24px |
| 图标颜色 | `gray1` |
| 图标线粗 | 1.5px |
| 单个按钮高度 | 36×36px（点击热区） |
| 组内分割线 | 0.5px `gray6`，左右各留 6px |

### 控件分组

基础控件分为两组，组间间距 12px，垂直排列：

**第一组：缩放**

| 按钮 | 图标 | 功能 |
|---|---|---|
| + | `ic_add_line` | 放大一级 |
| - | `ic_remove_line` | 缩小一级 |

**第二组：刷新 + 定位**

| 按钮 | 图标 | 功能 |
|---|---|---|
| 刷新 | `ic_refresh_line` | 刷新地图数据 |
| 定位 | `ic_position_line` | 回到当前位置 |

### 控件位置

| Property | Value |
|---|---|
| 水平位置 | 左侧，距左边缘 12px |
| 垂直位置 | 距页面底部 140px（固定值） |
| 位置规则 | 同一产品内位置和样式必须固定，不随页面变化 |

---

## 用户定位蓝点

**SVG 资产：** `assets/map/location-dot.svg`（44×48px，含蓝点、白色描边环、方向三角和阴影）

> 注：此 SVG 为 Figma 固定导出资产，内部色值 `#0076FF` 不随 design.md token 动态替换。如需换主题色，需重新从 Figma 导出或改用 `currentColor` 方案。

| Property | Value |
|---|---|
| SVG 尺寸 | 44×48px |
| 蓝点 | 圆形，半径 7.8px，`Branding-1` 填充 |
| 白色描边环 | 3.12px 白色描边 |
| 方向三角 | 右上方，`Branding-1` 填充，跟随陀螺仪旋转 |
| 阴影 | `shadow-1`（来自固定 SVG 资产，不随 design token 替换） |

### 精度圈（代码动态渲染）

| Property | Value |
|---|---|
| 尺寸 | 56×56px（可根据定位精度动态调整） |
| 填充 | radial-gradient：`Branding-1` 12% 中心 → 6% 中段 → 2% 边缘 |
| 边框 | 无 |
| 动画 | pulse 脉冲扩散，2s ease-out 循环 |
| 位置 | 以蓝点为中心 |

### 方向指示（陀螺仪）

定位蓝点的方向三角支持跟随用户手机朝向旋转（通过 `DeviceOrientationEvent`），旋转中心为蓝点圆心（21.8px, 21.8px）。

- **iOS Safari** — 需要 HTTPS 环境才能请求陀螺仪权限，HTTP 下静默失败
- **App 内 WebView** — 不受此限制，可正常工作
- **桌面浏览器** — 无陀螺仪硬件，方向固定朝上

---

## Demo 开发指引

### 地图接入

```html
<script src="https://webapi.amap.com/maps?v=2.0&key=9fb87daa0ec80b71ab58900ef14ff747&plugin=AMap.Geolocation,AMap.PlaceSearch"></script>
```

### 真实定位

通过高德 `AMap.Geolocation` 获取用户真实位置：

```javascript
var geolocation = new AMap.Geolocation({
  enableHighAccuracy: true,
  timeout: 10000
});

geolocation.getCurrentPosition(function(status, result) {
  if (status === 'complete') {
    var center = [result.position.lng, result.position.lat];
    map.setCenter(center);
  }
});
```

- 定位成功：地图移到真实位置，显示蓝点
- 定位失败：fallback 到默认坐标（杭州 120.1551, 30.2741）

### 模拟数据策略

以定位点为中心，通过坐标偏移生成周围模拟元素：
- 偏移范围：经度 ±0.008，纬度 ±0.006（约 1km）
- 车辆散点：`Math.random() * 0.016` 随机分布 10–15 个
- 站点：固定偏移量 5–8 个点

### 运行环境

浏览器定位 API 要求 HTTP/HTTPS 环境，`file://` 协议下不可用。

```bash
cd component-demo && ./start.sh
# 访问 http://localhost:8080/map-demo.html
```

### 定位精度与环境限制

| 环境 | 定位精度 | 说明 |
|---|---|---|
| App 内 WebView | 5–10 米 | 原生 GPS + 基站 + WiFi 混合定位 |
| HTTPS 浏览器 | 10–50 米 | 浏览器可调用 GPS 硬件 |
| HTTP 浏览器 | 100–500 米 | 仅 WiFi + IP 定位，精度较差 |
| file:// 协议 | 不可用 | 定位 API 被浏览器拦截 |

Demo 在本地 HTTP 服务下定位偏差属于正常现象，不影响组件展示。

---

## Do Not Infer

- 不要使用非高德底图 — 保持产品一致性。
- 不要改变基础控件的位置 — 左侧距底 140px 是固定规则。
- 不要让控件图标大于 24px 或小于 24px。
- 不要在 file:// 协议下使用定位功能。
- 不要省略定位失败的 fallback 处理。
- 不要把业务图层定义写在本文件 — 业务图层属于 page-styles。
