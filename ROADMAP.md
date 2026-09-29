# Hawk Pride Offroad — Design System v1 Roadmap

Goal: a polished, consultancy-grade brand system anyone (web dev, printer, social manager) can use to produce on-brand work without asking questions.

Status key: `[x]` done · `[~]` in progress · `[ ]` not started

## Locked decisions
- Logo: the brandmark is the logo (`assets/logo/brandmark-gold.svg`). Logo rebuild on hold.
- Gold: `#FCD000` (`--gold-400`).
- Name: "Hawk Pride Offroad" (default) or "Hawk Pride Offroad Adventure Park" (full: titles, legal, first mention). Never "Hawk Pride Mountain Offroad".
- Palette: black and gold. Core elements: the hawk and the mountain.
- Type: Archivo (one variable family). Always pair `--font-display` with `font-stretch:var(--fstretch-display)`.
- Voice: five core lines from the strategy pack; plain, direct, playful but never reckless.

## Current state
- [x] Tokens (144), 27 components, 26 cards, website UI kit
- [x] Brandmark SVG in gold, white, black
- [x] Owner photos wired into website kit

## Phase 1 — Foundations
- [x] 1. Fonts: Archivo chosen (option C in `guidelines/font-exploration.html`). Display = Archivo wdth 62 via `--font-display` + `--fstretch-display`; body = Archivo wdth 100; mono = IBM Plex Mono. Google Fonts for now; self-host files with the asset pack (item 15)
- [x] 2. Color: AA fixes (stone-500 #716C5B, gold-700 #836800, warning-500 #946100, success-500 #2B7541); live contrast matrix `guidelines/colors-contrast.html`; approved pairings `guidelines/colors-pairings.html`
- [x] 3. Brandmark rules: clear space X = ¼ mark height; min 96px / 1in; backgrounds + misuse cards (`guidelines/brand-mark-space|backgrounds|misuse.html`)
- [x] 4. Small-size mark: `mark-avatar.svg` (hawk + peak on black, 48px+) and `mark-favicon.svg` (hawk crop, gold on black, 16–32px) + PNGs (favicon 16/32, apple-touch 180, app 512, social 1080); card `guidelines/brand-mark-small.html`
- [x] 5. Type scale: final ladder in `guidelines/type-scale.html`; H3/H4 now fluid; tracking tokens `--ls-heading` .02em, `--ls-body` 0, `--ls-caption` .01em; display tracking 0 (Archivo condensed)

## Phase 2 — Brand expression
- [x] 6. Voice card: `guidelines/brand-tone.html` (traits, tone by context, use/avoid words, before/after); core lines stay in `brand-voice.html`. Owner to review word lists
- [x] 7. Photography guide: `guidelines/photography-subjects.html` (subjects, 4 missing shot types, grading) + `photography-text.html` (crops, text-over-photo). Needs owner photos: people, stay, mild trails, views
- [x] 8. Graphic elements: ridge edge, topo (generated contours), grit, slashes, hazard band, gold rule; assets in `assets/patterns/`, classes `.hp-ridge/.hp-topo/.hp-grit/.hp-slash/.hp-hazard/.hp-rule`; card `guidelines/brand-graphics.html`
- [x] 9. Iconography: set confirmed (126 Lucide, 2px, square caps); usage + park vocabulary card `guidelines/brand-icons-usage.html`. Gaps needing custom icons: winch point, rock crawl, side-by-side, air-down/tire

## Brand alignment audit (27 Sep) — `guidelines/brand-audit-2026-09-27.md`
- Score 78/100. Do before Phase 3 QA: readme drift fix, everyday-vs-edge motif rule, wordmark in header, stats reorder (density not acreage), tone-card traits realign
- [x] Audit fixes 1–5 applied (readme rewritten to Archivo/brandmark/graphic tiers; everyday-vs-edge split on graphics + photography cards; `SiteHeader` wordmark via `showName`; stats lead with trails; tone traits = platform five + "serious stays serious" rule). Deferred: 6 uppercase reduction (test on home in item 11), 7 owner photos, 8 icon capture check (masks render fine in browser)

## Phase 3 — Components and product
- [x] 10. Component QA: focus ring now black on light / gold on dark (gold-500 failed 3:1); focus-visible on every interactive; 44px hit areas (sm buttons, pill tabs, stepper, header links, checks); keyboard for Card/TrailRow/Tabs (arrows)/Dialog (trap, Esc, return focus); field aria-describedby/invalid; tooltip describedby; reduced motion; BookingBar summary is a button; hardcoded colours tokenised. Card `guidelines/components-states.html`. Known: interactive LodgingCard contains a nested Save button (acceptable; revisit if a11y audit flags)
- [x] 11. Website kit polish: fixed Button text-node gap bug ("PASS ES"); 4-up pass/stat grids no longer orphan (2×2 tablet, stacked mobile); pill tabs wrap; hardcoded #fff → tokens; gold bars → `.hp-rule`; mobile menu + footer links get wordmark/href. Audit item 6: opt-in `.hp-case-sentence` (card titles, trail names, tabs, dialog titles) — preview with `index.html?case=sentence`; **decision: keep uppercase** (27 Sep)
- [x] 11b. Website demo prototype (built in `ui_kits/website-prototype/`, option B pages, flow through waivers + confirmation): plan in `ui_kits/website/PROTOTYPE-PLAN.md`. Existing pages only, full flow to checkout, laptop demo, current photos. Rewritten from Drive "Website Rebuild Project" pack (v2). Pending: page scope (A/B), booking end point

## Phase 4 — Templates (`templates/<slug>/`)
- [ ] 12. Social post (feed + story)
- [ ] 12. Event flier
- [ ] 12. Trail map / rules sheet
- [ ] 12. Email newsletter
- [ ] 12. Pass / wristband
- [ ] 12. Gate sign
- [ ] 12. Convert `ui_kits/website/mobile.html` to a template; drop legacy `@startingPoint` tags

## Phase 5 — Consultancy deliverables
- [ ] 13. Brand guidelines book (paginated PDF): strategy, positioning, voice, logo, color, type, photo, applications, do/don't
- [ ] 14. Application mockups: signage, merch (tee, hat, sticker), vehicle decal, web hero
- [ ] 15. Asset pack: logo SVG/PNG/PDF (gold, white, black), favicons, font info, color specs (hex, RGB, CMYK, Pantone)
- [ ] 16. Developer handoff: tokens, components, usage docs

## Phase 6 — Sign-off
- [ ] 17. Owner review, one revision round, lock v1.0

## Open questions for the owner
- [x] Font decision: Archivo
- [ ] Pantone / CMYK specs from printer, if any
- [ ] Additional photos: people, events, lodging
- [ ] Priority order for templates
- [ ] Guidelines PDF: yes / no

## Parked
- Logo rebuild (`guidelines/logo-exploration.html`, directions 1a/1b/1c)
- Official lockup PNG (`assets/logo/logo-official*.png`): kept, not in active use
