# WRHSE Product Photo Styler

A Codex skill that turns a merchant's product photo into a clean image in the
WRHSE catalog style, while keeping the real product accurate. The merchant
reviews the result and uploads the version they approve to their WRHSE listing.

There is no WRHSE image service behind this. The merchant's own Codex does the
image work, using the instructions and reference cards in this repo.

## What a merchant needs

- [Codex](https://developers.openai.com/codex) with image generation turned on,
  so it can edit a photo using reference images. This skill is built for Codex
  and is not supported in other agents.
- A photo of the product: well lit, in focus, one product, taken by them or
  with the right to use it.

## Install

The repository root is the skill folder. It goes in Codex's skills directory
under the name `wrhse-product-photo-styler`.

**npm**

```bash
npx wrhse-product-photo-styler
```

Add `--force` to replace an existing install. It installs under `$CODEX_HOME`
when that is set.

**git**

- Windows: `%USERPROFILE%\.codex\skills\wrhse-product-photo-styler`
- macOS / Linux: `~/.codex/skills/wrhse-product-photo-styler`

```bash
git clone https://github.com/SteveTambo/wrhseimageskill ~/.codex/skills/wrhse-product-photo-styler
```

Then start a new Codex session. Update later with `git pull` inside that folder.
Release notes are in [CHANGELOG.md](CHANGELOG.md).

## Use

1. Attach the product photo and ask: *"Use the WRHSE product photo styler on this
   photo."* In Codex you can invoke it as `$wrhse-product-photo-styler`.
2. Say if you only want a cleanup (clean background, same photo) instead of the
   illustrated style.
3. Review the preview carefully against your real product: shape, color, count,
   printed text. If anything is wrong, say what, and ask for a retry.
4. Save the result you approve and upload it in your WRHSE store editor. The
   skill never changes a listing by itself.

## What the skill produces

- A **2:3 portrait** image (1200 x 1800 px when the tool allows) with one
  centered product on a quiet pastel gradient and a soft shadow.
- The product stays inside the central 75% of the width, because WRHSE product
  cards crop images to a tall frame.
- It will not add, remove, or redesign parts of the product, invent text or
  logos, or hide damage. When it cannot keep a detail accurate it says so and
  falls back to a cleaned photo.

## What is in this repo

| Path | Purpose |
| --- | --- |
| `SKILL.md` | The instructions the agent follows |
| `references/cards/` | Eleven approved WRHSE product-card images used as style references |
| `references/INDEX.md` | Which reference suits which product shape |
| `references/style-guide.md` | Measurable style rules, for tools that cannot take reference images |
| `agents/openai.yaml` | Display name and default prompt for Codex |
| `TESTING.md` | Manual test cases to run before each release |
| `CHANGELOG.md` | Version history |

## Reference artwork

The cards in `references/cards/` are rendered from WRHSE's original demo-store
illustrations, drawn from scratch for WRHSE (see `scripts/generate-demo-art.mjs`
in the WRHSE web app). They are style references only. Their placeholder labels
are not product claims and must never be copied into a merchant's image.

## Licence

- The instructions, documentation and other text in this repository are
  [MIT licensed](LICENSE).
- The reference cards in `references/cards/` are WRHSE artwork and are **not**
  MIT licensed. You may use them, unmodified, with this skill; you may not
  reuse, modify or redistribute them separately. See
  [references/ARTWORK-LICENSE.md](references/ARTWORK-LICENSE.md).

## Improving the skill

- Change one thing at a time and run the cases in [TESTING.md](TESTING.md).
- Text contributions are welcome under the MIT licence. Reference cards are
  added only by WRHSE. A card is an 800 x 1200 PNG (2:3), one product, no
  readable brand text, following `references/style-guide.md`, with a row in
  `references/INDEX.md`. Keep the set small; more references make results less
  consistent, not more.
- Bump the version in `CHANGELOG.md` for every change a merchant could notice.
