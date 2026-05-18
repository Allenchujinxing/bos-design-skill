#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILL_NAME = "bos-design";
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(repoRoot, SKILL_NAME);

const targets = {
  claude: path.join(os.homedir(), ".claude", "skills"),
  "claude-project": path.join(process.cwd(), ".claude", "skills"),
  kiro: path.join(os.homedir(), ".kiro", "skills"),
  "kiro-project": path.join(process.cwd(), ".kiro", "skills")
};

function usage() {
  console.log(`bos-design-skill

Usage:
  bos-design-skill install <target>
  bos-design-skill update <target>
  bos-design-skill path <target>

Targets:
  claude          ~/.claude/skills/bos-design
  claude-project  ./.claude/skills/bos-design
  kiro            ~/.kiro/skills/bos-design
  kiro-project    ./.kiro/skills/bos-design

Examples:
  npx github:Allenchujinxing/bos-design-skill install claude
  npx github:Allenchujinxing/bos-design-skill update kiro
`);
}

function requireTarget(name) {
  const base = targets[name];
  if (!base) {
    console.error(`Unknown target: ${name || "(missing)"}`);
    usage();
    process.exit(1);
  }
  return path.join(base, SKILL_NAME);
}

function copySkill(destination) {
  if (!fs.existsSync(path.join(sourceDir, "SKILL.md"))) {
    console.error(`Missing skill source: ${sourceDir}`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.rmSync(destination, { recursive: true, force: true });
  fs.cpSync(sourceDir, destination, {
    recursive: true,
    filter: (item) => path.basename(item) !== ".DS_Store"
  });
}

const [command, targetName] = process.argv.slice(2);

if (!command || command === "help" || command === "--help" || command === "-h") {
  usage();
  process.exit(0);
}

if (command === "path") {
  console.log(requireTarget(targetName));
  process.exit(0);
}

if (command === "install" || command === "update") {
  const destination = requireTarget(targetName);
  copySkill(destination);
  console.log(`${command === "install" ? "Installed" : "Updated"} ${SKILL_NAME} at ${destination}`);
  process.exit(0);
}

console.error(`Unknown command: ${command}`);
usage();
process.exit(1);
