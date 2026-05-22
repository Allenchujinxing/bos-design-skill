# BOS Page Style

本目录收录 BOS 系统的页面级设计策略参考，作为 BOS 设计 skill 的一部分。

## 用途

当 AI 已完成问题定义、信息与决策拆解后，参考此目录下的 page style 文件校准 BOS 场景中的页面结构、信息组织和交互承载方式。Page style 用来学习设计思路和适用边界，不是可直接套用的固定模板。

## 目录结构

```
BOS-page-style/
├── README.md        # 本文件，维护说明
├── index.md         # 结构化索引，供 AI 检索
├── page-style-library.md # 后续新增 page style 时使用的分析框架约束
└── ...              # 各 page style 文件
```

## 如何新增 Page Style

1. 在本目录下新建 `.md` 文件，命名建议：`<页面类型>.md`（如 `list-page.md`、`detail-page.md`）
2. 在 `index.md` 中添加对应条目
3. 参考 `page-style-library.md` 分析设计稿并编写文件，重点沉淀适用场景、首屏优先级、框架设计、信息组织、交互状态和 Do / Don't
