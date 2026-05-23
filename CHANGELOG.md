# 更新记录

## 2026-05-23（第二次更新）

- SKILL.md 从 180 行瘦身到 75 行：删掉重复的 Reference Map（移到 `references/README.md`），合并三个 Output 段为一个，去掉和其他段说同一件事的条目。
- 修了一个文件名引用错误：`text-inverse-generic-ai.md` 改成实际存在的 `anti-generic-ai.md`。
- 加了组件优先链一句话总结：`component-styles/ > design.md > Taroify 行为语义`。
- H5 硬规则集中到一处：390×844 基准、状态栏、Home Indicator、安全区、iconfont、轻量 JS。
- Execution Principle 从"必须一次对齐"改成"尽量确认再生成，缺什么标出来"。
- design.md 从 570 行压到 281 行：
  - 第1章大段叙述砍成几行关键场景词。
  - 修了 Gutter 矛盾（第6章写 8px，第7章写 16px，统一为 8px）。
  - Layout 和 Grid 合并为一章。
  - Shadow 去掉重复表格。
  - Do & Don't 从 120 行压成 30 行速查。
  - 删掉 motion 规则（只有一句话，对原型没实质约束）。
- 新建 `references/README.md` 作为文件索引，SKILL.md 不再重复列文件清单。


## 2026-05-23

- 组件样式全面 token 化：颜色使用纯语义 token 名（不带色值），圆角改为语义命名（`radius-xs` 到 `radius-full`），遮罩和投影使用 `translucent-*` / `shadow-*` token。
- 新增页面级间距 token（`space-page-margin` 等），组件内部间距保持 px（属于 component anatomy）。
- 组件体系现在是通用的：更换 `design.md` 即可适配不同视觉系统，组件结构和行为不变。
- 统一所有 Token 表为 `Token | Use` 两列格式。
- 新增 `evals/` 目录，6 个 eval 用例用于验证 skill 输出稳定性。
- 简化 README「工作方式」章节。
- 更新 `map.md` 定位蓝点规范，新增 Figma 导出的 `location-dot.svg` 资产。
- 将颜色 token 名从颜色描述改为语义角色命名：`white1` → `surface-primary`、`gray1-8` → `text-primary/secondary/placeholder/disabled` + `surface-page/component` + `border-divider/default`、`anti` → `text-inverse`。组件文件全量同步。


## 2026-05-22

- 将 `bos-design` 的核心工作流重写为「定义问题 -> 拆解问题 -> 收敛体验 -> 规范落地」，强调页面样式、组件规范和 token 服务于 UX 判断。
- 将 `request-analysis` 覆盖为轻量 UX 问题定义与体验拆解工作表，补充业务目标、真实问题、P0 信息、用户决策、流程中断点和交互承载判断。
- 将 `design-correctness` 与 review checklist 对齐到问题定义、结构收敛和视觉表达校验，避免从现成组件直接拼页面。
- 完善信息录入策略：常规表单减少默认指引和 helper，预填但可编辑字段保持输入流一致，复杂多层选择按承载量考虑独立选择流程。
- 明确 page style 是 BOS 页面级设计策略参考，不是固定模板；补充 page style 入口阅读方式和 `card-patterns` 的使用边界。
- 将对象搜索、区域选择和经营看板中的强结论改为带适用边界的设计判断，降低 Agent 机械套用页面模式的风险。
- 精简并校准 README 的适用对象、能力说明和工作方式表述，避免把内部工作流写成对外介绍。
- 瘦身 `SKILL.md` 主入口，保留问题收敛流程、BOS 来源优先级、交互原型要求和硬约束，合并重复执行细则。

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
