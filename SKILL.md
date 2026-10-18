---
name: wrhse-product-photo-styler
description: Restyle a merchant's product photo into a clean WRHSE catalog card image while keeping the real product accurate. Use when a merchant asks to clean up, cut out, illustrate, or match a product image to WRHSE's product-card style.
---

# WRHSE Product Photo Styler

Prepare a merchant's existing product photo for a WRHSE product card. Improve the presentation while keeping the item accurate and recognizable. The merchant's photo is the authority for what the product is; the bundled reference cards are the authority for how it should look.

This skill needs an image generation or editing tool that can take one or more input images. If the agent has none, say so and stop; do not describe an image instead of making one.

## Files in this skill

- `references/cards/*.png`: approved WRHSE product-card artwork, the style references.
- `references/INDEX.md`: which reference suits which product shape. Read it first.
- `references/style-guide.md`: the measurable style rules (framing, background, shadow). Use it when the tool cannot take reference images, and to check results.

## Workflow

1. **Understand the source.** Identify the product and what must stay true: silhouette, count, proportions, colors, materials, packaging, labels, logos, and distinctive details. Use the merchant's title, category, or variant only to resolve ambiguity, never to invent visual details.
2. **Check the photo is usable.** If it is too dark or blurred to read the product, shows several different products, is mostly a person, or carries another brand's watermark, say what is wrong and ask for a better photo. Do not guess. Remind the merchant they must have the right to use the photo.
3. **Choose the treatment** (the lightest one that works):
   - *Catalog illustration* (default for a card): a polished, simple, flat illustration in the WRHSE style.
   - *Cleaned photo*: when the merchant asks only for cleanup, or when illustration would hide texture, printed text, condition, or authenticity that buyers need to see. Natural-looking product, clean edge, balanced light, quiet background, subtle shadow.
4. **Pick references.** Choose two or three cards from `references/INDEX.md` that match the product's shape, and whose background hue sits near, but not identical to, the product's color. Never use more than three.
5. **Generate one preview.** Edit the supplied photo with the image tool. Pass the merchant's photo as the identity reference and the chosen cards as style references, and label them so the tool knows which is which (see the prompt scaffold). Make another variation only if the merchant asks for alternatives or the first result misses the brief.
6. **Inspect against the source** and the checklist at the end of `references/style-guide.md`: item count, silhouette, proportions, defining colors, packaging, legible text and logos, framing, background, and shadow. Inspect the result at full size, not only a thumbnail.
7. **If a key feature changed**, do not present the image as accurate. Retry once with a narrower instruction (name the feature that drifted). If it still drifts, offer the cleaned-photo treatment, or ask for a cleaner source photo.
8. **Return the preview** for review. It is a proposal: do not say the merchant approved it, and do not overwrite the original. If the app stores assets, save the result as a separate version and keep the original.

## Output requirements

- **Portrait 2:3**, delivered at 1200 x 1800 px if the tool allows, otherwise 800 x 1200. PNG, JPEG, or WebP.
- WRHSE cards crop images to a tall frame, so **keep the whole product and any text on it inside the central 75% of the width**, with the base and shadow about three quarters of the way down. An image that ignores this loses its edges on the card.
- One product, centered. Nothing else in the frame.

## WRHSE visual direction

The target is a simple, polished catalog illustration with a friendly, playful retail feel: flat vector-like forms, confident clean edges with a thin darker outline, a quiet pastel gradient background that complements the item, and one soft ellipse shadow. Use the references for background, outline weight, shading, shadow, and framing only. Do not copy their objects, text, brand names, or characters.

Avoid busy scenes, props, dramatic or photographic lighting, textures, heavy gradients on the product, decorative text, badges, prices, stickers, or invented branding.

## Product accuracy constraints

- Preserve the exact item and its visible identifying features. Do not change design, colorway, material, size relationships, quantity, condition, packaging, or brand marks to make the image more attractive.
- Do not add or remove components, accessories, toppings, jewelry, clothing details, or any other saleable contents. Do not turn one item into a set or a set into one item.
- Do not invent, rewrite, or approximate legible product text, labels, logos, certification marks, or model numbers. Preserve them from the source when possible. If the edit cannot keep them accurate, use the cleaned-photo treatment or state the limitation.
- Do not hide damage or wear. Cleanup may remove background clutter, dust, and lighting artifacts, but must not conceal a defect that affects what the buyer receives.
- Do not draw people or faces in the illustration treatment. If the product is worn, show the product alone.
- Do not claim that automated checking guarantees accuracy. Visual inspection reduces risk; it cannot prove every detail is unchanged.

## Prompt scaffold

Adapt to the item and treatment, and drop irrelevant lines. Label the inputs so the tool knows their roles.

> Image 1 is the merchant's product photo: the exact reference for the item. Images 2 and 3 are WRHSE catalog cards: use them only for the visual style (background gradient, outline weight, flat shading, soft ellipse shadow, framing), never for their objects or text.
>
> Create a WRHSE catalog card image of the product in image 1. Preserve its silhouette, proportions, item count, colors, materials, packaging, all visible labels and logos, and distinctive features. [Render it as a polished, simple catalog illustration. / Clean the exposure and color and remove the distracting background, keeping the photo natural.] Portrait 2:3. Center the complete item, keeping it and any text within the central 75% of the width, resting about three quarters of the way down. Quiet pastel vertical-gradient background in a hue that complements the item, and one soft grounding shadow. No extra objects, text, badges, or branding. If an identifying detail cannot be preserved, leave that detail as in the photo rather than guessing.

If the tool cannot take reference images, paste the relevant rules from `references/style-guide.md` into the prompt instead.

## Response

Show the preview and briefly say what changed (for example: background replaced, lighting balanced, illustration treatment applied, framed for the card). Name any source detail that could not be preserved confidently. Say clearly that it is ready for the merchant to review, not verified and not applied to the listing, and remind them that they choose whether to upload it.
