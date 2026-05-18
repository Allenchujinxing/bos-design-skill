# bos-design

An Agent Skill for designing BOS-style mobile product pages with scenario-aware UX structure, Figma-derived component visuals, design tokens, Taroify interaction behavior, and component-specific icon rules.

Use it when you want an AI agent to produce mobile product screens that feel like a real BOS operations product instead of a generic app mockup.

## What This Does

`bos-design` helps Claude Code, Kiro, or any Agent Skills-compatible assistant design mobile H5 product pages for BOS operation scenarios.

It gives the agent a full design playbook:

- how to understand the user role, scenario, trigger, goal, constraints, and completion criteria
- how to choose page-level patterns before jumping into components
- how to use recorded Figma component style files as strict visual specifications
- how to combine those visuals with Taroify-style mobile interaction behavior
- how to handle empty, loading, permission, offline, error, destructive, and partial-data states
- how to avoid generic AI-looking mobile screens

The default output mode is an interactive H5 prototype using standalone HTML/CSS/JS. It can also guide Taro/React-style Taroify implementation when the request is closer to developer handoff.

## Key Features

- **Scenario-first UX workflow**: starts from role, task, location, constraints, and product goal before UI styling.
- **Figma component fidelity**: uses `references/component-styles/` as the primary source for dimensions, spacing, typography, color, radius, borders, shadows, icons, and states.
- **Design token fallback**: uses `references/design.md` only when component-level specs do not define a detail.
- **Taroify interaction semantics**: borrows mobile behavior patterns for pickers, popups, dialogs, toast, forms, checkbox, radio, switch, tabs, loading, disabled, and selection.
- **Interactive H5 prototypes**: expects JavaScript-backed interactions instead of static screenshots.
- **BOS correctness checks**: reviews outdoor readability, one-handed operation, camera/location dependency, manager scanning efficiency, exception visibility, recovery, and primary-action reachability.
- **Anti-generic guardrails**: blocks vague dashboards, fake cards, decorative gradients, template-like mobile SaaS pages, and ungrounded visual decoration.

## Installation

### Claude Code

Install globally:

```bash
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill install claude
```

Install into the current project:

```bash
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill install claude-project
```

Then use it by asking Claude Code for `bos-design`, for example:

```text
Use bos-design to design a mobile operations personnel entry page.
```

### Kiro

Install globally:

```bash
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill install kiro
```

Install into the current project:

```bash
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill install kiro-project
```

Kiro can also import the skill directly from GitHub:

```text
https://github.com/Allenchujinxing/bos-design-skill/tree/main/bos-design
```

In Kiro:

1. Open Agent Steering & Skills.
2. Click `+`.
3. Select `Import a skill`.
4. Choose GitHub.
5. Paste the URL above.

## Update

Users can pull the latest pushed version with:

```bash
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill update claude
npx --yes --package https://codeload.github.com/Allenchujinxing/bos-design-skill/tar.gz/refs/heads/main -- bos-design-skill update kiro
```

The installer copies the current `main` branch tarball into the target skills directory, so updates are controlled by this GitHub repository.

The command intentionally uses an HTTPS tarball URL. That works for users who have not configured GitHub SSH keys. If you already use GitHub SSH, this shorter form may also work:

```bash
npx github:Allenchujinxing/bos-design-skill install claude
npx github:Allenchujinxing/bos-design-skill update claude
```

## Usage Examples

Create an interactive H5 prototype:

```text
Use bos-design to generate an interactive H5 page for adding a maintenance operator.
```

Design a flow with states:

```text
Use bos-design to design a mobile battery-swap exception handling flow, including empty, offline, permission, and confirmation states.
```

Prepare developer handoff:

```text
Use bos-design to turn this page idea into a Taroify-style component implementation plan.
```

Review an existing page:

```text
Use bos-design to critique this mobile BOS page against component specs, interaction states, and scenario correctness.
```

## How It Works

The skill uses progressive disclosure: `SKILL.md` gives the agent the core workflow and tells it which reference files to read only when needed.

| File or folder | Purpose |
| --- | --- |
| `bos-design/SKILL.md` | Main workflow, trigger rules, output modes, priority order, and review expectations |
| `bos-design/agents/openai.yaml` | UI-facing metadata for Agent Skills-compatible tools |
| `bos-design/references/request-analysis.md` | Lightweight scenario analysis before page design |
| `bos-design/references/page-style-library.md` | Page-level patterns and composition guidance |
| `bos-design/references/component-styles/` | Figma-derived component visual specifications |
| `bos-design/references/component-index.md` | Bridge between visual component files and behavior families |
| `bos-design/references/component-library/taroify.md` | Taroify interaction and mobile component behavior reference |
| `bos-design/references/design.md` | Visual tokens and fallback system rules |
| `bos-design/references/design-correctness.md` | BOS-specific scenario correctness checks |
| `bos-design/references/visual-quality.md` | Page-level polish and hierarchy rules |
| `bos-design/references/anti-generic-ai.md` | Final guardrail against generic AI UI patterns |
| `bos-design/references/review-checklist.md` | Final self-review checklist |

## Repository Layout

```text
bos-design-skill/
├── bos-design/
│   ├── SKILL.md
│   ├── agents/
│   │   └── openai.yaml
│   └── references/
├── bin/
│   └── bos-design-skill.js
├── package.json
├── README.md
└── LICENSE
```

## Maintaining This Skill

Update the skill source under `bos-design/`, then commit and push:

```bash
git add bos-design
git commit -m "Update bos-design skill"
git push
```

If you change installation behavior or documentation, include those files too:

```bash
git add bos-design bin package.json README.md
git commit -m "Update bos-design skill package"
git push
```

After pushing, users can run the update command again to receive the latest version.

## Requirements

- Node.js for the `npx` installer
- Claude Code, Kiro, or another Agent Skills-compatible tool

## License

MIT
