#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILL_NAME = "wrhse-product-photo-styler";
const SKILL_ITEMS = ["SKILL.md", "README.md", "TESTING.md", "CHANGELOG.md", "LICENSE", "agents", "references"];
// Codex keeps skills under $CODEX_HOME (default ~/.codex).
const SKILLS_DIR = path.join(
  process.env.CODEX_HOME || path.join(os.homedir(), ".codex"),
  "skills",
);

const args = process.argv.slice(2);

if (args.includes("-h") || args.includes("--help")) {
  console.log(`Usage: npx ${SKILL_NAME} [--force]

Installs the WRHSE product photo styler skill for Codex, into
${SKILLS_DIR}/${SKILL_NAME}.

  --force    replace an existing install`);
  process.exit(0);
}

const force = args.includes("--force");
const source = path.join(__dirname, "..");

let failed = false;
const dest = path.join(SKILLS_DIR, SKILL_NAME);
if (fs.existsSync(dest) && !force) {
  console.log(`Already installed at ${dest} (use --force to replace)`);
} else {
  try {
    fs.rmSync(dest, { recursive: true, force: true });
    fs.mkdirSync(dest, { recursive: true });
    for (const item of SKILL_ITEMS) {
      fs.cpSync(path.join(source, item), path.join(dest, item), { recursive: true });
    }
    console.log(`Installed to ${dest}`);
    console.log("Start a new Codex session to pick the skill up.");
  } catch (err) {
    failed = true;
    console.error(`Install failed (${err.message})`);
  }
}
process.exit(failed ? 1 : 0);
