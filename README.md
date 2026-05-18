# bos-design skill

`bos-design` is an Agent Skill for designing BOS mobile product pages with layered Figma component visuals, design tokens, Taroify interaction behavior, component-defined icon language, and page style references.

It is packaged as a portable Agent Skill and can be used in Kiro and Claude Code.

## Install with npx

Install globally for Claude Code:

```bash
npx github:Allenchujinxing/bos-design-skill install claude
```

Install globally for Kiro:

```bash
npx github:Allenchujinxing/bos-design-skill install kiro
```

Install into the current project only:

```bash
npx github:Allenchujinxing/bos-design-skill install claude-project
npx github:Allenchujinxing/bos-design-skill install kiro-project
```

## Update

Run the same package from GitHub and use `update`:

```bash
npx github:Allenchujinxing/bos-design-skill update claude
npx github:Allenchujinxing/bos-design-skill update kiro
```

Because `npx github:...` resolves the current GitHub repository contents, users get your latest pushed version when they update.

## Kiro GitHub Import

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

Kiro copies imported skills into its skills directory. To update later, re-run the import or use the `npx` update command.

## Claude Code Manual Install

Claude Code discovers personal skills from:

```text
~/.claude/skills/bos-design/SKILL.md
```

Project skills can live at:

```text
.claude/skills/bos-design/SKILL.md
```

The `npx` installer copies the `bos-design/` folder into the correct location.

## Repository Layout

```text
bos-design-skill/
├── bos-design/
│   ├── SKILL.md
│   ├── agents/
│   └── references/
├── bin/
│   └── bos-design-skill.js
├── package.json
└── README.md
```

## Maintaining the Skill

Update files under `bos-design/`, then commit and push:

```bash
git add bos-design package.json README.md
git commit -m "Update bos-design skill"
git push
```

Users can update with:

```bash
npx github:Allenchujinxing/bos-design-skill update claude
npx github:Allenchujinxing/bos-design-skill update kiro
```

## License

MIT
