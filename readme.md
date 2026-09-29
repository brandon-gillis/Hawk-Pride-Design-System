# Hawk Pride Offroad — Design System

Hawk Pride Offroad Adventure Park is a privately owned off-road park in Tuscumbia, Northwest Alabama (Colbert County): 1,000+ acres, 120+ rock-crawling trails on natural rock, mud riding areas, and miles of ATV/SxS trail. It's a weekend park (Fri–Sun, plus holiday/event dates) that hosts hillclimbs, rock-crawl club events and holiday rides, and rents 8 cabins, 13 RV pads (water + 50 amp) and primitive camping.

This system serves one surface: the **public website** (mobile-first), covering trails and maps, events, lodging, pricing/passes and a simple hotel-style booking flow.

## Sources
- Style influence (given by the user): https://www.adventureoffroadpark.com/ (full-bleed photography, clear booking CTAs, simple cards).
- Brand facts / copy: https://www.hawkpridemountainoffroad.com/ and /faq (via search snippets), onX Offroad park page, SFWDA park page, public listings.
- Logos (supplied by the owner): `uploads/official-logo.png` (official lockup, parked), `uploads/Brandmark-gold.png`, `uploads/Brandmark-white-1b872663.png` (hawk + mountain mark; replaces the earlier `Brandmark-white.png`). Cropped/keyed into `assets/logo/`. An earlier `unofficial-logo.png` badge is superseded and no longer used.
- Direction from the user: palette is **black and gold**; core brand elements are the **Hawk and the Mountain**.
- Brand strategy pack (Google Drive): https://drive.google.com/drive/folders/1mzVGNNngDokl2mp5CIds3wR4zr9Kf7Lk — 00-context, 01-competitive-landscape, 02-competitive-positioning, 03-customer-center-of-gravity, 04-brand-platform, 05-research-and-evidence, 06-open-decisions-and-next-work. Summarized in `guidelines/brand-platform.md`. It locks strategy and voice; visual identity is explicitly *not yet established*, so tokens here are a working proposal.
- Photography: 5 early park photos supplied by the owner (`uploads/`), resized into `assets/photos/` — `hillside-traffic.jpg` (cropped to remove a watermark), `rock-ledge-buggies.jpg` (low-res, 592px), `pavilion-jeeps.jpg`, `buggy-airborne.jpg`, `event-crawl-crowd.jpg`.
- No codebase, Figma or fonts were provided.

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `components/components.css` — all component classes (`hp-*`)
- `components/core|forms|content|navigation|feedback/` — React primitives + one card per folder
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) + `brand-platform.md` (strategy summary)
- `ui_kits/website/` — click-through site + booking flow (`index.html`, `mobile.html`)
- `assets/photos/` — owner-supplied park photography
- `assets/logo/` — `brandmark-gold.svg` (vector master, primary), `brandmark-white.svg`, `brandmark-black.svg`, `mark-avatar.svg`, `mark-favicon.svg` + PNG exports, legacy PNGs, `logo-official.png` (+ `-600`, `-300`, parked)
- `assets/patterns/` — `ridge-edge.svg`, `topo-on-light|dark.svg`, `grit.svg`
- `ROADMAP.md` — v1 progress, locked decisions, open questions; `guidelines/brand-audit-2026-09-27.md` — alignment audit
- `thumbnail.html`, `SKILL.md`

## Components
- **core:** Button, IconButton, Icon, Badge, DifficultyBadge
- **forms:** Input, Select, Checkbox, Radio, Switch, QuantityStepper
- **content:** Card, CardBody, Photo, EventCard, LodgingCard, PriceCard, TrailRow
- **navigation:** SiteHeader, Tabs, BookingBar
- **feedback:** Alert, Dialog, Toast, Tooltip

No source defined a component inventory, so this is an authored standard set. Intentional additions beyond the standard list: **Icon** (Lucide wrapper), **Photo** (aspect-locked frame + placeholder, since no photography exists yet), **DifficultyBadge**, **QuantityStepper**, **EventCard / LodgingCard / PriceCard / TrailRow / BookingBar / SiteHeader** (the park's core content types and booking pattern).

## UI kits
- `ui_kits/website/` — Home, Trails, Events, Stay, Lodging detail, Checkout, Confirmation, Pricing.

---

## CONTENT FUNDAMENTALS
Source of truth: the brand platform (see `guidelines/brand-platform.md`). The verbal identity there is **locked**.

**Voice:** off-roaders talking to off-roaders. Direct, playful, confident, informal, slightly mischievous (`guidelines/brand-tone.html`). Comfortable with a little dirt, trouble and unpredictability, without performing "off-road culture." We (the park) talk to you (the rider and your group).

**Rules, from the platform:**
- **Say it plainly.** Short sentences, concrete words. Name the trail, hill, creek, cabin, rig or problem.
- **Sound like you've been there.** Picking lines, getting stuck, spotting a friend, finding a part of the mountain you didn't plan on.
- **Have a little fun.** A knowing grin, never a dare to be reckless.
- **Let the mountain talk.** Climbs, drops, rock, woods, creeks, overlooks, alternate lines. Not generic "beautiful scenery."
- **Give people something to do.** Go ride, pick a trail, try a route, bring the rig, come back.
- **Keep serious information serious.** Safety, closures, rules, waivers, weather, payments: calm, clear, no jokes.

**Website = clear first, personality second.** Personality lives in headlines, section titles and empty/success states. Forms, prices, errors and status stay plain.

**Verbal architecture (each line has one job):**
- "Go conquer something." — master tagline; hero, footer, sign-offs.
- "A whole mountain of real off-road adventure, your way." — core promise; hero support, about.
- "Ride what you came for. Find what you didn't." — trails, maps, routes, return visits.
- "Mild. Wild. And a whole lot in between." — range; reassuring stock rigs and families.
- "A whole mountain of bad ideas." — merch/social only. Never in booking, safety or operations.

**Avoid:** tourism filler ("unforgettable experiences await"), resort polish, forced slang, macho proving-yourself language, anything that celebrates unsafe riding or breaking gear, explaining the joke, turning every line into a slogan, claiming biggest/cheapest/most extreme, and "something for everyone." Don't imply the planned trail-navigation system, curated adventures or completion rewards already exist.

**Casing:** Display headlines, buttons, tabs, badges and eyebrows are UPPERCASE via CSS (write sentence case in source). Body is sentence case. Trail numbers `#42`. Times `8 AM`. Ranges use en dash: `Apr 24–26`, `Fri–Sun`. No emoji.

**Numbers:** real numbers over adjectives: "120+ rock crawling trails", "$30 per rider", "Children under 10 ride free". Frame size as density (a lot packed onto one mountain), not acreage versus the giants: stat rows lead with trails, never with acres.

**Examples**
- Hero: "Go conquer something." / "A whole mountain of real off-road adventure, your way."
- Section: "Ride what you came for. Find what you didn't."
- Card: "Natural rock ledges, climbs and drops. Bring the buggy, or bring the stock Jeep and pick your line."
- Status: "Open this weekend · Gates 8 AM · Riding until 10 PM Fri & Sat"
- Closure: "Trail #42 closed this weekend. Washout on the upper ledge. Everything else is open."
- CTA labels: "Book a stay", "Buy passes", "Check availability", "Reserve", "Trail map"

**Audience to write for:** regional recreational riders (TN/AL/MS mostly), median age early 40s, often with kids and passengers, planning on a phone Thursday or Friday. Answer: What can we ride? Can my rig handle it? Is there something for everyone in the group? Where do we stay? What does it cost?

## VISUAL FOUNDATIONS
**Color.** Black and gold, taken from the official brandmark. `--gold-400 #FCD000` is the accent and the single primary-action color; `--black-950 #0D0D0B` (warm rock-black) carries headers, footers, date blocks, dark sections and text. Warm stone neutrals (`--stone-50` page) keep light pages from feeling stark. Gold fills always take black text; gold *text* is only used on black. On light grounds use `--gold-700` for gold-tinted text. Status colors are muted and only for status. Trail difficulty uses sign convention (green ●, blue ■, black ◆, red ◆) — shape carries meaning too.

**Ratio.** Mostly stone/white + black type, black bands for rhythm (header, event section, footer), gold in small, deliberate doses: CTAs, the 3px header/footer rule, eyebrow underline bars, selected states, prices on dark.

**Type.** One family, Archivo (variable width + weight). Display = Archivo at width 62 (`--font-display` + `font-stretch:var(--fstretch-display)`, always together), 800 uppercase, .92 line-height — signage-like, sturdy, not sporty-italic. Body/UI = Archivo at normal width, 400–700, 16px minimum on inputs. IBM Plex Mono for trail numbers and confirmation codes only. Scale, tracking and responsive sizes: `guidelines/type-scale.html`.

**Hawk + Mountain.** The brand's core elements, carried by the brandmark (hawk soaring over jagged layered peaks). Rules: `guidelines/brand-mark-space|backgrounds|misuse|small.html`.

**Graphic elements** (`guidelines/brand-graphics.html`, classes in `components.css`, files in `assets/patterns/`). Two tiers:
- *Everyday* (website, email, ordinary weekends, family-facing): **ridge edge** (`.hp-ridge`, the mark's peak profile as a section edge), **topo lines** (`.hp-topo`, maps/passes/backgrounds, never behind body text), **gold rule** (`.hp-rule`, 44×3px between eyebrow and headline).
- *Edge* (events, merch, operations only): **slashes** (`.hp-slash`, headline lead-in, max once per layout), **grit** (`.hp-grit`, print/merch/social texture, never on UI or small text), **hazard band** (`.hp-hazard`, closures and warnings, never decoration).
No camo, mud splatter or tire tracks. Missing-photo placeholder is the neutral diagonal stripe.

**Backgrounds & imagery.** Real park photography does the emotional work: full-bleed hero, 16:10/4:3 card images (see `assets/photos/`). The supplied photos set the direction: tan dirt and grey limestone ledges, bare winter hardwoods or full summer green, flat overcast or bright daylight, lots of machines and people in frame. Show the mountain's density (many rigs on one hillside), the range of rigs (stock Jeeps and ATVs to tube buggies), and the crowd and community at events. Unfiltered and sharp; no grain, duotones or heavy grading. Avoid shots that glorify breakage or reckless riding; airborne/climb shots belong to events context. Text on photos always sits on the bottom protection scrim (`--scrim-bottom`) or a flat 60% black overlay, never on a capsule. Full guide: `guidelines/photography-subjects.html`, `photography-text.html`. Ordinary-weekend surfaces (home hero, stay, pricing) should lead with people, stock rigs and views once those photos exist; airborne and crawl shots go to Events.

**Layout.** 1200px max container, fluid padding `clamp(16–32px)`. Sticky black header (64px) with gold 3px bottom rule; black status strip above it. Mobile: sticky bottom `BookingBar` on lodging pages; dialogs become bottom sheets under 560px. Grids use `auto-fit minmax(260px,1fr)`.

**Corners.** Tight and sign-like: 2px badges, 4px buttons/inputs, 6px cards, 10px dialogs, pill only for filter chips.

**Cards.** White, 1px `--border-subtle` hairline, 6px radius, no shadow at rest; photo on top edge-to-edge; body padding 16/18. Interactive cards gain `--shadow-3` on hover and the photo scales 1.03. Dark variant (black) for highlighted pricing. No colored left-border cards.

**Shadows.** Soft warm-black, used sparingly: `shadow-2` raised panels (booking widget), `shadow-3` hover/dialogs/toasts, `shadow-bar` for the bottom booking bar.

**Borders.** 1px hairlines for structure, 1.5px on inputs, 2px black on outline buttons.

**Motion.** Quick and functional: 120ms color changes, 200ms toggles, 320ms rise-in for dialogs/toasts with `cubic-bezier(.2,.7,.2,1)`. No bounces, no parallax, no auto-playing carousels.

**Hover / press.** Gold buttons lighten to gold-300 on hover and deepen to gold-500 on press; black buttons lift to black-800; outline buttons fill black. Press nudges 1px down. Links: gold-700 underline → black. Focus: 3px gold-500 ring, 2px offset.

**Transparency & blur.** Only for controls over photos (`IconButton variant="dark"`: 55% black + backdrop blur) and the modal overlay (66% black). Never on text surfaces.

## ICONOGRAPHY
- **Set:** 126 icons on Lucide 0.460.0 geometry (ISC), re-cut for the brand: **square caps and mitered joins** so they read like trail signage and match the angular brandmark peaks and tight corners. 24px grid, 2px stroke, never filled. 16 inline, 20 default, 24 feature lists.
- Self-hosted: `components/core/icons.js` (data URIs used by `Icon`, grouped in `ICON_GROUPS`) and `assets/icons/<name>.svg` for other uses. Names outside the set fall back to stock Lucide with a console warning; add to the set instead.
- Groups: terrain & park, wayfinding, rigs & gear, stay & amenities, booking & passes, events, safety & status, interface, contact & social. See `guidelines/brand-icons.html`.
- Usage (sizes, colour, labels, sign badges, park vocabulary): `guidelines/brand-icons-usage.html`.
- Gap: no off-road vehicle glyphs (ATV, SxS, Jeep, rock buggy), winch point, rock crawl, air-down. `car-front`/`truck` stand in. These need custom drawing in the same construction.
- No icon set was supplied by the park; this is a working proposal.
- Trail difficulty uses CSS shapes (circle/square/diamond), not icons.
- No emoji. No unicode glyphs as icons (except `·` as a separator and `–` in ranges).
- **Logo = brandmark** `assets/logo/brandmark-gold.svg` (vector master; `-white`, `-black` single-color). Hawk soaring over layered peaks. Header, footer, signs, social, print. Clear space ¼ mark height; minimum 96px / 1in. Gold on black or light stone; black on gold; white for one-color dark. On photos: gold over a 60% black overlay.
- **Small marks** `mark-avatar.svg` (48px+: social avatars, app icons) and `mark-favicon.svg` (16–32px, gold hawk on black), with PNGs.
- **Wordmark**: "Hawk Pride Offroad" in the display face next to the mark in `SiteHeader` (`showName`, on by default) while the park moves off the old "Mountain Offroad" name.
- **Official lockup** `logo-official*.png` is parked: available, not in active use. Logo rebuild (`guidelines/logo-exploration.html`) on hold.
- Never redraw, recolor, stretch, rotate, add effects, fade, or place the gold mark on gold or on a busy photo without an overlay.
- **Name in lockups:** "Hawk Pride Offroad" (short, default) or "Hawk Pride Offroad Adventure Park" (full, for legal lines, titles and first mention). Never "Hawk Pride Mountain Offroad".
- **Current decision:** the brandmark (`brandmark-gold.svg`) is the working logo everywhere, including site header and footer. The logo rebuild (`guidelines/logo-exploration.html`) is on hold; the official lockup PNG stays available but is not in active use.
- All brandmark versions are vector. Gold is #FCD000 (`--gold-400`).

## Fonts
Archivo and IBM Plex Mono are free (OFL) Google Fonts, loaded via `@import` in `tokens/fonts.css`. Self-hosted files ship with the asset pack (roadmap item 15). Decision record: `guidelines/font-exploration.html`.
