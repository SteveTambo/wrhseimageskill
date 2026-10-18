# Changelog

## 0.3.0

- Codex only. The skill needs Codex's image generation, so the installer no
  longer targets Claude Code and the `--claude` and `--codex` flags are gone:
  `npx wrhse-product-photo-styler` installs for Codex (`$CODEX_HOME`, default
  `~/.codex`). The README documents Codex only.

## 0.2.1

- Include `TESTING.md` in the npm package and installed skill so the README's
  testing link works for npm users.

## 0.2.0

- Licence: MIT for the instructions and docs; the reference artwork stays WRHSE's,
  usable unmodified with the skill (references/ARTWORK-LICENSE.md).
- Added eleven WRHSE product-card reference images and an index of which suits
  which product shape.
- Added a measurable style guide for tools that cannot take reference images.
- SKILL.md: references and role-labelled prompt scaffold, 2:3 output with the
  central-75% safe area, pre-checks for unusable photos, no drawn people,
  wording that works for any agent with an image tool.
- README: install for Codex and Claude Code, merchant steps, rights note.
- Added TESTING.md with twelve manual cases.

## 0.1.0

- First version: text-only style description and accuracy rules.
