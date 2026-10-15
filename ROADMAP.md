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
- [x] Tokens (160), 39 components, 27 cards, website UI kit
- [x] Brandmark SVG in gold, white, black
- [x] Owner photos wired into website kit
- [x] Owner media pack (8 Oct): 50 photos added to `assets/photos/` (cabins 1–8 + interiors, RV 1–3/5–9/A/B/C + overview, property, on-trail, signage) + `assets/maps/downtown-map.jpg`; card `guidelines/photo-library.html`; wired into prototype (cabins, camping, booking site cards + drawer, home, gallery, trails, UBW, contact). Still missing: RV 4, D1–D7, per-trail, people, views, UBW hero
- [x] Downtown map made interactive (8 Oct): `ui_kits/website-prototype/SiteMap.jsx` on `assets/maps/downtown-map-site.jpg` (cropped CartoTracks map). Cabin/RV hotspots aligned to the drawn buildings and pads; used on booking site step (zoom + whole park), Review, Checkout ("You're booking"), Confirmation ("Find your spot", check-in first) and a new Cabins page "Where the cabins are" section. CartoTracks permission granted (14 Oct)

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
- [x] 11d. Uphill Both Ways page rebuilt from owner schema (`uploads/jeep-badge-of-honor-page-schema.md`, 6 Oct): `ui_kits/website-prototype/UphillBothWays.jsx`, route `#/trails/jeep-badge-of-honor/uphill-both-ways`; 10 sections; focused map drawn from first-party GPX (`assets/maps/track-*.gpx`); owner-dependent fields shown as dashed "Pending" placeholders
- [x] 11c. Prototype pass vs Drive "Website Handoff" pack (30 Sep): Fees→Rates, FAQ + Gallery secondary pages, contact form, 404, declined payment, gate roster download, neutral public name in copy. **Open (pack):** public business name vs DS "Hawk Pride Offroad" (DS has no authority to rename; header wordmark still shows it), About page, privacy page

- [x] 11e. Cabins page redesign: audit + research in `ui_kits/website-prototype/CABINS-AUDIT.md`; shipped to the official prototype 14 Oct (size cards → Before you book → Cabin rules → closing CTA; map section removed)
- [x] 11g. Production audit (14 Oct, `ui_kits/website-prototype/AUDIT-2026-10-14.md`): inline styles 613 → 5 (map geometry only); page CSS to `site.css`; DS `components/patterns.css`; 11 new DS components (Section, PageHero, CtaBand, SiteFooter, Accordion, Feature, PriceList, SummaryRow, Chip, TextLink, Callout) + Layout card; body line-height fixed; mobile booking (sticky Continue, collapsible total, compact step bar); mobile reflow on every page. Offline bundle regenerated (23 MB) after web-optimised photos: `assets/photos/web/` (1400px, JPEG q70, 31 MB → 16 MB; UBW hero PNG 4.1 MB → JPG); prototype loads these, originals stay as masters. Photo now lazy-loads. UBW badge tier confirmed Core. Waivers → WaiverForever link; Refund/Terms removed; FAQ rebuilt (5 groups, 22 Qs); name locked "Hawk Pride Offroad". **Open:** precompile JSX for production; UBW onX link + trailhead cell service
- [x] 11i. Pre-launch audit pass 2 (14 Oct, same AUDIT file): all CSS font sizes tokenised (+`--fs-body-s`, `--fs-button(-lg)`, `--container-max-wide`); admin scales via token overrides on `.adm` (no component overrides, no `!important`); new DS `Textarea` (admin + contact); 390px probe of 17 routes, tap-target/line-height fixes; public calendar CSS moved to site.css; UBW v1/v2 archived. Offline bundle still to regenerate
- [~] 11h. Events calendar + staff admin (14 Oct, `ui_kits/website-prototype/ADMIN.md`): `#/admin` login (staff / hawkpride, mock), tabbed admin with Manage Events (list, create, edit, delete + undo) with per-event rates (standard or custom admission, spectators, extra fees; wired into booking admission), editor with website preview and Google Calendar entry preview; public Events page List/Calendar toggle + Google Calendar subscribe/add links. Admin look: hazard band, mono labels, 17px base. Edits persist in localStorage; nothing written to Google. Offline bundle not regenerated yet

## Phase 4 — Templates (`templates/<slug>/`)
- [ ] 12. Social post (feed + story)
- [ ] 12. Event flier
- [x] 11f. Trails page rebuilt as editorial overview (14 Oct): hero + stats, four terrain categories, named trails (UBW focal, Merlin, Vertical Limit, Blue Polaris), stockers→rockers, map callout, trip CTA. Directory/filters removed. Need owner photos for Merlin, Vertical Limit, Blue Polaris; onX/offline map TBD. Rules page trimmed to Oct 7 meeting; Primitive hidden site-wide (search `PRIMITIVE`)
- [ ] 12. Trail map / rules sheet (official 2026 map now in `assets/maps/`; badges in `assets/badges/`, card `guidelines/brand-badges.html`)
- [ ] 12. Email newsletter
- [ ] 12. Pass / wristband
- [ ] 12. Gate sign
- [ ] 12. Convert `ui_kits/website/mobile.html` to a template; drop legacy `@startingPoint` tags

## Phase 5 — Consultancy deliverables
- [~] 13. Brand guide: built as a scrolling web guide (`brand-guide/Brand Guide.html`, 30 Sep): strategy, principles + standards, customer, voice, brandmark, color, applications (web hero, trail sign, closure, sticker/tag, social). Type/photo/graphics left out by choice (live in guidelines cards). Pending: CMYK/Pantone, merch blanks, owner review
- [ ] 14. Application mockups: signage, merch (tee, hat, sticker), vehicle decal, web hero
- [ ] 15. Asset pack: logo SVG/PNG/PDF (gold, white, black), favicons, font info, color specs (hex, RGB, CMYK, Pantone)
- [ ] 16. Developer handoff: tokens, components, usage docs

## Phase 6 — Sign-off
- [ ] 17. Owner review, one revision round, lock v1.0

## Open questions for the owner
- [x] Font decision: Archivo
- [ ] Pantone / CMYK specs from printer, if any
- [~] Additional photos: lodging + RV received 8 Oct; still need people, events, views, per-trail
- [ ] Priority order for templates
- [ ] Guidelines PDF: yes / no

## Parked
- Logo rebuild (`guidelines/logo-exploration.html`, directions 1a/1b/1c)
- Official lockup PNG (`assets/logo/logo-official*.png`): kept, not in active use
