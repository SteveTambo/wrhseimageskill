---
name: wrhse-product-photo-styler
description: Restyle merchant product photos into clean WRHSE catalog artwork while preserving the real product. Use when a merchant asks to clean up, cut out, illustrate, or visually match a product image to WRHSE's product-card style.
---

# WRHSE Product Photo Styler

Prepare a merchant's existing product photo for a WRHSE product card. Improve the image's presentation while keeping the item accurate and recognizable. Treat the source photo as the authority for product identity; style the presentation around it.

## Workflow

1. Identify the product and the parts that must remain true from the source: silhouette, count, proportions, colors, materials, packaging, labels, logos, and distinctive details. Use merchant-supplied title/category/variant details only to resolve ambiguity, not to invent visual details.
2. Choose the lightest useful treatment:
   - For a good product photo with a distracting background, clean the lighting/crop and isolate the item, then place it on a WRHSE-style backdrop.
   - For a low-quality but readable photo, improve clarity, exposure, and color balance before styling.
   - Use the illustrated treatment when the product remains accurately representable as a simple, polished illustration. If illustration would obscure important texture, text, condition, or authenticity, keep a cleaned photo treatment instead.
3. Edit the supplied image using the available image-editing tool, including the source photo as the identity reference. Create one strong preview by default. Make another variation only if the merchant requests alternatives or the first result misses the requested direction.
4. Inspect the result against the source. Check the product count, silhouette, proportions, defining colors, packaging, labels/logos, and any distinctive features. Also check that the crop leaves the item fully visible and that the background does not compete with it.
5. If a key product feature has changed, do not present the image as an accurate listing image. Retry with a narrower edit instruction if the issue is fixable; otherwise explain that the source needs a cleaner photo or keep a conservative cleanup/cutout result.
6. Return the preview for merchant review. Treat it as a proposed edit: do not imply the merchant has approved it, and do not overwrite or replace the original asset unless the merchant explicitly asks to apply the result. If the surrounding app supports asset storage, save the result as a separate version and preserve the original.

## WRHSE visual direction

Use the provided WRHSE product-card references when available. The target is a simple, polished catalog illustration: one centered product, clear readable silhouette, confident clean outlines or smooth vector-like forms, a restrained pastel or softly colored solid background, and a subtle grounding shadow. Keep the backdrop quiet and use color that complements the item. Match the reference's friendly, playful retail feel without copying unrelated objects from it. Avoid busy scenes, dramatic lighting, photographic clutter, excessive gradients, decorative text, badges, prices, or invented branding.

For cleanup/cutout-only requests, favor a natural-looking product with a clean edge, balanced light, neutral or requested background, and subtle shadow. Do not force illustration when the merchant asks only for cleanup.

## Product accuracy constraints

- Preserve the exact item and visible identifying features. Do not change its design, colorway, material, size relationships, quantity, condition, packaging, or brand marks to make the image more attractive.
- Do not add or remove product components, accessories, food toppings, jewelry, clothing details, or other saleable contents. Do not turn one item into a set or a set into one item.
- Do not invent, rewrite, or approximate legible product text, labels, logos, certification marks, or model numbers. Preserve them from the source when possible. If the edit cannot keep them accurate, choose a conservative photo cleanup or call out the limitation.
- Do not hide damage or wear in a way that misrepresents condition. Aesthetic cleanup may remove background clutter, dust, or lighting artifacts, but it must not conceal a product defect.
- Do not claim automated verification guarantees accuracy. Visual inspection reduces risk but cannot prove that every detail is unchanged.

## Prompt scaffold

Adapt this to the item and requested treatment; do not include irrelevant fields:

> Edit the supplied product photo for a WRHSE catalog card. Use the source as the exact reference for the item. Preserve its silhouette, proportions, item count, colors, materials, packaging, all visible labels/logos, and distinctive features. [Clean exposure and color / remove the distracting background and isolate the item / render as a polished, simple catalog illustration.] Center the complete item with comfortable margins on a quiet, softly colored WRHSE-style background and add only a subtle grounding shadow. Keep the product clear and faithful. Do not add, remove, redesign, or decorate the item. No extra objects, text, badges, or branding. If an identifying detail cannot be preserved, leave that detail and treatment unchanged rather than guessing.

When a reference image for WRHSE's style is supplied, use it only for visual treatment and composition; use the merchant photo as the authority for the product itself.

## Response

Show the resulting preview and briefly state what changed (for example: background removed, lighting balanced, illustration treatment applied). Mention any important source detail that could not be preserved confidently. Make clear that it is ready for the merchant to review; do not describe it as verified or already applied to the listing.
