# 更新记录

## 2026-05-22

- 将 `bos-design` 的核心工作流重写为「定义问题 -> 拆解问题 -> 收敛体验 -> 规范落地」，强调页面样式、组件规范和 token 服务于 UX 判断。
- 将 `request-analysis` 覆盖为轻量 UX 问题定义与体验拆解工作表，补充业务目标、真实问题、P0 信息、用户决策、流程中断点和交互承载判断。
- 将 `design-correctness` 与 review checklist 对齐到问题定义、结构收敛和视觉表达校验，避免从现成组件直接拼页面。
- 完善信息录入策略：常规表单减少默认指引和 helper，预填但可编辑字段保持输入流一致，复杂多层选择按承载量考虑独立选择流程。
- 明确 page style 是 BOS 页面级设计策略参考，不是固定模板；补充 page style 入口阅读方式和 `card-patterns` 的使用边界。
- 将对象搜索、区域选择和经营看板中的强结论改为带适用边界的设计判断，降低 Agent 机械套用页面模式的风险。
- 精简并校准 README 的适用对象、能力说明和工作方式表述，避免把内部工作流写成对外介绍。

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
