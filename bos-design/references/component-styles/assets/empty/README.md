# Empty 切图资产

本目录存放 Empty 空状态组件使用的插画切图（pre-rendered cutout images），来源于 Figma 设计稿 `Hello-TaroUI-Kit-2026` · 节点 `5503:1709`。

插画由设计团队提供，前端不自绘矢量图，只按约定的尺寸引用对应 PNG。

## 文件

| 文件 | 尺寸 | 用途 |
|---|---|---|
| `empty-page-180.png` | 180×180 | 页面级（Page-level）空状态插画 |
| `empty-local-120.png` | 120×120 | 局部级（Local/Module）空状态插画 |

## 引用方式

```html
<img src="./assets/empty/empty-page-180.png" class="empty-illust page" alt="">
<img src="./assets/empty/empty-local-120.png" class="empty-illust local" alt="">
```

## 替换

实际业务中，不同空状态场景（无订单、无消息、无收藏、搜索无结果、无网络、加载失败…）会用不同的插画切图。命名约定：`empty-<scene>-<size>.png`，例如 `empty-order-180.png`、`empty-search-120.png`。
