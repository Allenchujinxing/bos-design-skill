# bos-design

**为复杂移动运维流程而生的 BOS 专属设计 Skill。**

*A BOS-native design skill for complex mobile operations workflows.*

![BOS mobile operations design skill banner](assets/readme/bos-design-hero.png)

`bos-design` 是一个为哈啰骑行运维终端产品「BOS 移动端」打造的专属 B 端产品设计 Agent Skill。它不是一套泛化的移动端 UI 模板，而是围绕骑行运维场景中高频任务、复杂流程、多状态信息和强执行效率构建的设计能力：帮助 Agent 从需求出发，理解业务目标、用户角色与现场操作路径，基于 HelloDesign TaroUI 3.0 的设计语言生成更符合 BOS 产品方向的交互方案与原型。通过内置 BOS 的设计原则、页面样式、组件规范和视觉规范，`bos-design` 让每一次设计输出都更接近真实运维产品需要的样子：清晰、可靠、高效，并且能落到业务里。

它让 Claude Code、Kiro 或其他兼容 Agent Skills 的 AI 助手，在生成移动端 H5 页面、产品方案、交互原型或设计评审时，能够遵循 BOS 的业务场景、组件视觉规范、设计 token、Taroify 交互语义和页面级设计方法，而不是产出一套泛泛的移动端模板。

## 它适合谁

这个 skill 适合这些场景：

- 你在做 BOS、运维、换电、巡检、调度、人员管理等移动端业务页面
- 你希望 AI 先理解角色、场景、任务和状态，再开始画界面
- 你已经有一套 Figma 组件视觉记录，希望 AI 按组件规范生成页面
- 你希望快速生成可交互的 H5 原型，而不是只有静态截图
- 你想让 AI 帮你检查页面是否符合 BOS 场景、组件规范和移动端使用条件
- 你想把页面方案整理成方便产品、设计、业务、研发一起讨论的结构

## 它能做什么

`bos-design` 给 AI 提供了一套完整的移动端页面设计工作流：

- 从用户角色、业务场景、触发条件、约束和完成标准开始分析
- 先确定页面类型、信息层级、操作路径和状态模型，再选择组件
- 把 `references/component-styles/` 里的 Figma 组件记录当作严格视觉规范
- 用 `references/design.md` 作为缺失细节时的 token 和视觉系统补充
- 用 Taroify 作为移动端交互语义参考，例如 Picker、Popup、Dialog、Toast、Field、Checkbox、Radio、Switch、Tabs、Loading 等
- 为 H5 原型补充真实交互，例如弹层打开关闭、选项更新、表单校验、Toast、Dialog、Loading 到内容的转换
- 覆盖空状态、错误状态、权限状态、离线状态、加载状态、危险操作确认和部分数据状态
- 做 BOS 场景校验，例如户外可读性、单手操作、扫码/定位/相机依赖、异常可见性、恢复路径和主操作可达性
- 避免泛 AI 风格，例如无意义渐变、假仪表盘、卡片堆叠、空泛文案和模板化移动端 SaaS 页面

默认输出模式是**独立 HTML/CSS/JS 的交互式 H5 原型**。如果用户明确需要研发交付，也可以指导生成 Taro/React 风格的 Taroify 组件实现方案。

## 安装

这个仓库的核心安装对象是 `bos-design/` 目录。

```text
https://github.com/Allenchujinxing/bos-design-skill/tree/main/bos-design
```

| 工具 | 确定安装方式 |
| --- | --- |
| Kiro | 在 `Agent Steering & Skills` 中从 GitHub 导入上面的 skill 目录链接 |
| Claude Code | 运行 `npx github:Allenchujinxing/bos-design-skill install claude` |
| Codex | 运行 `npx github:Allenchujinxing/bos-design-skill install codex` |

### Kiro

在 Kiro 中：

1. 打开 `Agent Steering & Skills`
2. 点击 `+`
3. 选择 `Import a skill`
4. 选择 GitHub
5. 粘贴上面的 skill 目录链接

### Claude Code / Codex

命令行安装会把 `bos-design/` 文件夹复制到对应的 skills 目录：

```text
Claude Code: ~/.claude/skills/bos-design
Codex:       ~/.codex/skills/bos-design
```

如果要安装到当前项目：

```bash
npx github:Allenchujinxing/bos-design-skill install claude-project
npx github:Allenchujinxing/bos-design-skill install codex-project
```

### Trae、Cursor 和其他 IDE

如果工具不支持 Agent Skill 目录导入，但支持 rules、agents、memories 或 prompt library，可以把 `bos-design/SKILL.md` 作为主说明，把 `bos-design/references/` 作为规则参考目录迁移进去。

## 更新

更新 GitHub 仓库后，Kiro 重新导入 GitHub skill；Claude Code / Codex 重新运行对应安装命令即可。

历史变更见 [CHANGELOG.md](CHANGELOG.md)。

## 使用示例

生成交互式 H5 原型：

```text
使用 bos-design 生成一个运维人员信息录入页，要求可交互，包含岗位选择、城市/街道/网格联动和提交校验。
```

设计包含多种状态的流程：

```text
使用 bos-design 设计一个换电异常处理流程，需要包含空状态、离线状态、定位权限状态、确认弹窗和处理成功反馈。
```

准备研发交付：

```text
使用 bos-design 把这个页面方案整理成 Taroify 风格的组件实现方案。
```

评审已有页面：

```text
使用 bos-design 评审这个移动端 BOS 页面，检查它是否符合组件规范、交互状态和真实业务场景。
```

## 工作方式

这个 skill 使用 progressive disclosure 的结构：`SKILL.md` 只放核心流程和调度规则，具体组件、视觉、场景、评审标准放在 `references/` 里，由 AI 在需要时读取。

| 文件或目录 | 作用 |
| --- | --- |
| `bos-design/SKILL.md` | 主工作流、触发规则、输出模式、优先级和评审要求 |
| `bos-design/agents/openai.yaml` | Agent Skills 工具可读取的展示信息 |
| `bos-design/references/request-analysis.md` | 页面生成前的场景分析 |
| `bos-design/references/BOS-page-style/index.md` | 页面级结构、样式路由和组合方式 |
| `bos-design/references/component-styles/` | Figma 组件视觉规范记录 |
| `bos-design/references/component-index.md` | 组件视觉文件和交互行为类型之间的索引 |
| `bos-design/references/component-library/taroify.md` | Taroify 交互和移动端组件语义参考 |
| `bos-design/references/design.md` | 设计 token 和视觉系统兜底规则 |
| `bos-design/references/design-correctness.md` | BOS 场景正确性检查 |
| `bos-design/references/visual-quality.md` | 页面视觉质量、层级和节奏规则 |
| `bos-design/references/anti-generic-ai.md` | 避免泛 AI 页面风格的最终检查 |
| `bos-design/references/review-checklist.md` | 结果输出前的自检清单 |

## 仓库结构

```text
bos-design-skill/
├── bos-design/
│   ├── SKILL.md
│   ├── agents/
│   │   └── openai.yaml
│   └── references/
├── README.md
└── LICENSE
```

真正被安装到 Claude Code 或 Kiro 的是 `bos-design/` 这个目录。

## 维护方式

更新 skill 内容时，修改 `bos-design/` 下的文件，然后提交并推送：

```bash
git add bos-design
git commit -m "Update bos-design skill"
git push
```

如果修改了 README，也一起提交：

```bash
git add README.md
git commit -m "Update README"
git push
```

推送后，用户重新导入 GitHub skill，或重新复制 `bos-design/` 文件夹即可拿到最新版本。

## 要求

- Claude Code、Kiro，或其他兼容 Agent Skills 的工具

## License

MIT
