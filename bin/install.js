#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "wrhse-product-photo-styler";
const SKILL_ITEMS = ["SKILL.md", "README.md", "CHANGELOG.md", "LICENSE", "agents", "references"];
const TARGETS = {
  claude: path.join(os.homedir(), ".claude", "skills"),
  codex: path.join(os.homedir(), ".codex", "skills"),
};

const args = process.argv.slice(2);

if (args.includes("-h") || args.includes("--help")) {
  console.log(`Usage: npx ${SKILL_NAME} [--claude] [--codex] [--force]

Installs the WRHSE product photo styler skill into the agent's skills folder.
With no agent flag it installs for both Claude Code and Codex.

  --claude   install to ~/.claude/skills/${SKILL_NAME}
  --codex    install to ~/.codex/skills/${SKILL_NAME}
  --force    replace an existing install`);
  process.exit(0);
}

const force = args.includes("--force");
const picked = Object.keys(TARGETS).filter((t) => args.includes(`--${t}`));
const targets = picked.length ? picked : Object.keys(TARGETS);
const source = path.join(__dirname, "..");

let failed = false;
for (const target of targets) {
  const dest = path.join(TARGETS[target], SKILL_NAME);
  if (fs.existsSync(dest) && !force) {
    console.log(`${target}: already installed at ${dest} (use --force to replace)`);
    continue;
  }
  try {
    fs.rmSync(dest, { recursive: true, force: true });
    fs.mkdirSync(dest, { recursive: true });
    for (const item of SKILL_ITEMS) {
      fs.cpSync(path.join(source, item), path.join(dest, item), { recursive: true });
    }
    console.log(`${target}: installed to ${dest}`);
  } catch (err) {
    failed = true;
    console.error(`${target}: failed (${err.message})`);
  }
}

if (!failed) console.log("Start a new agent session to pick the skill up.");
process.exit(failed ? 1 : 0);
