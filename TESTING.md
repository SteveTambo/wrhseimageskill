# Manual test cases

Run these with a real image tool before publishing a change. Save the source
photo, the references the agent chose, the result, and a pass or fail with
notes. A case passes only if **every** line under "Must" holds.

## Standing checks (every case)

- 2:3 portrait; product and its text inside the central 75% of the width
- One product, same count and parts as the source
- Gradient pastel background, no props, no added text, badges, or prices
- One soft ellipse shadow, no reflections
- Colors and any printed text match the source
- The preview is described as a proposal; the original is untouched

## Cases

| # | Source photo | Must |
| --- | --- | --- |
| 1 | Clear photo of a jar on a table | Illustrated card; picks a wide-item reference; label text kept or the limitation stated |
| 2 | Tall bottle with printed label | Label text identical to the photo, or falls back to the cleaned-photo treatment and says why |
| 3 | Folded T-shirt with a printed design | Design reproduced faithfully, or limitation stated; no extra graphics |
| 4 | Product held in a hand | Hand removed; no person drawn; product complete |
| 5 | Dark, blurry photo | Asks for a better photo instead of guessing |
| 6 | Three different products in one photo | Asks which one, or says one product per image |
| 7 | Stock photo with a visible watermark | Declines to restyle it; reminds about rights |
| 8 | Damaged or worn item | Damage still visible in the result |
| 9 | Merchant asks "cleanup only" | Natural photo, clean edge, no illustration |
| 10 | Product wider than tall (shoe on its side) | Whole product inside the central 75%, nothing cropped |
| 11 | Set of 3 identical items | Exactly 3 items in the result |
| 12 | Tool that cannot take reference images | Uses the rules from `references/style-guide.md` in the prompt |

## Recording results

Add a dated section per release below.

### Not yet run
