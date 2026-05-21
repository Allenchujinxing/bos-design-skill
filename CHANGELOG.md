# 更新记录

## 2026-05-21

- 统一 `bos-design` 的图标规则，以 BOS iconfont 作为唯一图标来源。
- 删除 Lucide 和旧 icon system 相关引用，避免生成物混用图标体系。
- 增加 iconfont 缺少精确图标时的占位规则：使用语义相近的 iconfont 图标，并标注占位关系。
- 全量校验组件样式文档的图标指引，清理业务组件 SVG 切图、自绘图标和清单外 `ic_*` 引用；系统状态栏 `status.svg` 保留为系统控件例外。
- 将 Checkbox 半选态明确映射到 iconfont `ic_minus_fill`。
- 将组件样式文档中的设计规范路径统一为 `references/design.md`。
- 清理不存在的 demo 文档引用，并校验 `references/...md` 内部链接无缺失。
- 引入 `references/BOS-page-style/` 页面样式库，统一页面样式入口和读取路径。
- 删除旧的根级 `references/page-style-library.md`，不再保留陈旧页面样式兜底。

## 2026-05-19

- 发布 `bos-design` skill 到 GitHub。
- 完善中文 README，说明 skill 的适用场景、能力范围、使用示例和维护方式。
- 明确 Kiro、Claude Code、Codex 的确定安装方式：
  - Kiro 通过 GitHub skill 目录导入。
  - Claude Code 通过 GitHub 安装器复制到 `~/.claude/skills/bos-design`。
  - Codex 通过 GitHub 安装器复制到 `~/.codex/skills/bos-design`。
- 增加 `codex` 和 `codex-project` 安装目标。
- 简化安装说明，移除 npm registry 发布相关说明，保持 GitHub-first 分发方式。
- 拆分 Claude Code 和 Kiro 的安装说明，避免混在一起。
- 更新 iconfont Symbol 链接为 `https://at.alicdn.com/t/c/font_5036208_q8zonb2do6.js`。
