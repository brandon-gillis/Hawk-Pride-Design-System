# Brand alignment audit — 27 Sep 2026

Scope: every token, component, guideline card, asset and the website kit, scored against the brand context pack (00–06) as a principal brand designer would. Score is alignment to the locked strategy, not craft.

## Overall: 78 / 100

The system expresses the *credibility* half of the brand (real off-roading, the mountain, plain talk) very well and the *center-of-gravity* half (recreational riders, families, discovery, friendly, fun) only partly. Documentation drift is the biggest practical failure for a "no questions asked" system.

## Scores by area

| Area | Score | Verdict |
|---|---|---|
| Verbal identity & voice | 92 | Architecture correct, each line in its job, no banned words in the kit |
| Color | 85 | Owner-locked black/gold; warm black + warm stone avoid "corporate"; gold discipline is right |
| Typography | 80 | Signage-plain, direct. Uppercase condensed on display, cards, badges, buttons, eyebrows and tabs adds up to a lot of shouting for "clear first, personality second" |
| Brandmark & rules | 80 | Space/misuse/small-size complete. Header shows the mark with no name during an active rename |
| Photography | 68 | Direction is right; the corpus is 100% buggies, hill climbs and event crowds, i.e. the credibility edge, not the customer |
| Graphic language | 74 | Ridge edge and topo carry mountain + discovery well. Grit, slashes and hazard band all pull toward motorsport/industrial; nothing pulls toward friendly/fun |
| Iconography | 82 | Square-cap re-cut matches signage intent; vehicle gap acknowledged |
| Website kit | 82 | Hero, section titles and copy on brand. Stat row leads with acreage (brand says frame as density) |
| Documentation coherence | 52 | `readme.md` contradicts locked decisions in three places |

## What is strongly aligned
- Verbal architecture is used exactly as the platform assigns it: tagline in hero/footer, promise as hero support, discovery line on Trails, range line on the home section, merch line kept out of the site.
- Copy passes the platform's avoid list (no "unforgettable", "resort", "extreme", "biggest", "something for everyone").
- Serious stays serious: hazard band scoped to closures, status copy plain, safety register defined on the tone card.
- Density framing in copy ("packed onto one mountain").
- Name discipline: "Hawk Pride Offroad Adventure Park" in the footer; no "Mountain Offroad" anywhere in the kit.
- Trail difficulty uses sign convention with shape + colour.
- Warm neutrals and no shadows at rest keep it "rugged but cared for", not resort.

## Gaps against the platform

1. **Hierarchy skew (strategic).** Platform hierarchy: Adventure → Exploration/Discovery → Mountain & fun → Challenge → Something still waiting. The visual expression weights Challenge and the event edge: all four photos, grit, slashes, hazard band, 800-weight uppercase everywhere. Failure mode #1 from 06-open-decisions ("so hardcore that newer or mixed-skill customers assume it isn't for them") is the live risk. Nothing in the system says friendly, fun or "kid had an accomplishment of their own."
2. **Readme drift (operational).** `readme.md` still says Barlow Condensed/Barlow, names `logo-official*.png` the primary logo, and says "no textures, patterns" while `brand-graphics.html` ships topo, grit, ridge and slashes. Anyone using SKILL.md gets the wrong system.
3. **Rename support.** Header carries the mark only. The park is moving off "Hawk Pride Mountain Offroad"; the new name should be visible at the top of every page until the rename has settled.
4. **Acreage stat.** Home stat row opens with "1,000+ Acres". 02-positioning: do not frame as acreage versus the giants; frame as density.
5. **Tone card traits.** Card lists Plain / Direct / Playful / Never reckless. Platform: direct, playful, confident, informal, slightly mischievous. "Never reckless" is a rule, not a trait; "informal" and "mischievous" are missing, and they are the traits that keep the brand from reading corporate.
6. **Photography corpus.** The four "needed" slots (people up close, stay, mild trails, discovery) are exactly the shots that carry hierarchy levels 2–3 and the center-of-gravity customer. Until they exist, every hero and card defaults to the hardcore edge.
7. **Unused warmth.** `--dirt-*` tokens exist and are never used. They are the only warm, non-gold colour in the system.

## Recommended adjustments (in order)

1. Fix `readme.md`: Archivo + `--fstretch-display`; brandmark is the logo, lockup parked; replace the "no patterns" line with the graphic-elements rule set and their scopes.
2. Add a "default vs. edge" rule to `brand-graphics.html`: ridge, topo and gold rule are the everyday-weekend motifs; slashes, grit and hazard band are events/merch/operations only. Same split on the photography card: ordinary-weekend surfaces lead with people, stock rigs and views once available; airborne/crawl shots go to events.
3. Add the wordmark next to the mark in `SiteHeader` (display face, "Hawk Pride Offroad"), and a mobile variant.
4. Reorder home stats to 120+ trails · 8 cabins · 13 RV pads · one mountain (or drop acreage entirely).
5. Realign the tone card traits to the platform's five, keep "serious stays serious" as a rule row.
6. Reduce uppercase load: keep display, buttons and eyebrows uppercase; consider sentence-case card titles and tabs. Test on the home page before committing.
7. Photography: brief the owner with the four needed shot types as the top priority for the next visit; they matter more to brand alignment than any remaining component work.
8. Verify `brand-icons-usage.html` in a browser; icons rendered as filled squares in the audit capture (likely a capture artifact of CSS masks, but confirm).

Items 1, 4, 5 are under an hour. Items 2, 3, 6 are half a day. Item 7 is the owner's.
