# 更新记录

## 2026-05-23

- 组件样式全面 token 化，颜色/圆角/投影/间距统一为语义 Token 命名。
- SKILL.md 瘦身（180→75 行），design.md 瘦身（570→281 行），去重复、合并章节、修数据冲突。
- 新建 `references/README.md` 作为文件索引，标注 Required/Conditional/Fallback 权重。
- 修复文件名引用错误和 Gutter 值矛盾（统一 8px）。
- 新增 `evals/` 目录，6 个 eval 用例。
- 更新 `map.md` 定位蓝点规范，新增 `location-dot.svg`。

## 2026-05-22

- 核心工作流重写为「定义问题 → 拆解 → 收敛体验 → 规范落地」。
- `request-analysis` 改为轻量 UX 问题定义工作表。
- 明确 page style 是策略参考不是固定模板，降低 Agent 机械套用风险。
- 完善信息录入策略和复杂选择流程判断。

## 2026-05-21

- 统一图标规则，BOS iconfont 为唯一来源，删除 Lucide 和旧引用。
- 引入 `references/BOS-page-style/` 页面样式库。
- 全量校验组件样式文档的图标指引和内部链接。

## 2026-05-19

- 发布 `bos-design` skill 到 GitHub。
- 支持 Kiro、Claude Code、Codex 三种安装方式。
