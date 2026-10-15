# Cabins page audit — 8 Oct 2026

Scope: `#/cabins` (`Pages.jsx` → `Cabins`, `CabinMap`). Research first, then findings, then a proposed structure.

## 1. Research: patterns worth borrowing

**Windrock Park (stayatwindrockpark.com)**
- The reservation site opens on **Map View**. Search is three inputs only: check-in, check-out, type (Cabin / RV / Tent / Yurt), plus a **View Available / View All** toggle. The map is the chooser, not an illustration.
- Each unit has its own page with a fixed fact block in the same order every time: Type → Nightly → Weekly → Cleaning fee → Capacity / Sleeps / Minimum stay → Sleeping arrangements (per floor, with a total line) → Kitchen → Check-in/out → a bulleted amenity list that leads with the deal-breakers ("NOT pet-friendly", location).
- Their marketing lodging page is thin (two lines + phone + link out). The value is all in the booking map and the unit page. Lesson: don't split "browse" and "book" into two places.

**Campground booking platforms (Campspot, WebRezPro, Bonfire)**
- Bookable sites drawn as shapes on the park map; hover shows key facts, click opens photos and rates (Campspot, WebRezPro).
- After a date search the map switches to **available vs booked** (Campspot, WebRezPro).
- Map and list are linked: click a site on the map, the matching list row highlights (Bonfire). We already do this.

**General travel UX (Baymard)**
- Booking search should be the most visible thing on the page (position, style, size).
- Industry-specific filters matter; for us that's size, own bathroom, pets.
- Missing details cause abandonment; surprises (fees, linens, no bathroom) belong up front, not in policies.

**Map UX convention**
- Colour means category until dates are set; availability colours only appear once there's a date range. Avoid showing status the user hasn't asked for.

## 2. Findings

Severity: **H** blocks a good booking decision · **M** hurts flow · **L** polish.

**H1. Two choosers for one decision.** "Three kinds of cabin" (3 cards) and "Where the cabins are" (map + 8-row list) both ask the guest to pick a cabin, with overlapping price / sleeps / bathroom data. The guest compares twice and the page has no clear primary path.

**H2. Picks are thrown away.** Every class card and the map's "Book Cabin 3" button call `book({stay:'cabin'})`, which resets `unit` to null. The guest picks Cabin 3, then has to pick it again in the booking flow. `cls` state in `Cabins` is unused.

**H3. Deal-breakers are buried.** The facts most likely to change a booking sit at the bottom or in the wrong place:
- Cabins 1–2 have no bathroom: in a photo caption under Policies.
- Bring your own sheets, pillows, blankets: listed under "What's included" (it's the opposite).
- Riding admission is extra; cleaning fee and pet fee: last rows of Policies.

**H4. No dates on the page.** Five identical "Check Availability" buttons, none of which takes dates. The map can't show availability, so it answers "where" but not "can I have it".

**M1. Map has no landmarks.** For cabins the deciding question is "how far to the bathhouse / trailhead / parking". The map shows cabins only, and the intro paragraph describes locations in prose the map should show.

**M2. Repeated CTAs.** 5 primary buttons with the same label dilute the action. One persistent booking control is clearer.

**M3. Inconsistent fact order.** Class cards: sleeps → beds → bath. Map rows: sleeps → bath → price. Policies: different again. Windrock's fixed fact block is easier to scan and compare.

**M4. Interior photos unused.** We have cabin interiors (media pack, 8 Oct) but each cabin shows one exterior. No gallery per cabin.

**M5. Section rhythm.** Hero → white → white → sunken → white. The map, the most important section, has no visual weight; Policies reads as an afterthought.

**L1.** "Sleeps 6–8" vs "up to 6" vs "up to 8" — mixed formats.
**L2.** Amenity grid is 6 icons in a g3; fine on desktop, long single column on mobile.
**L3.** No minimum-stay line (Windrock shows it on every unit; confirm whether we have one).

## 3. Proposed structure

1. **Hero + date bar.** Short hero. Under it, an inline bar: Arrive · Depart · Guests · "Show cabins". Sets trip dates without leaving the page.
2. **Before you book.** One compact strip of 4 facts with icons: bring your own linens · Cabins 1–2 use the bathhouse · riding admission sold separately · cleaning fee $X. Visible before any choice is made.
3. **Choose your cabin (map + list, one section).** The primary chooser, Windrock-style.
   - Filter chips: All · Own bathroom · Sleeps 8.
   - Map: cabins plus landmarks (Check In, bathhouse, trailhead, parking). Category colour until dates are set; then available / booked.
   - List grouped by class (the three kinds become group headers with price, replacing the 3 cards).
   - Selecting a cabin opens a detail panel: photo gallery (exterior + interior), fixed fact block (nightly · sleeps · beds · bathroom · pets), "Book Cabin N" which passes the unit into the booking flow.
4. **Compare sizes (optional).** A 3-column table (price, sleeps, beds, bathroom) for guests who want the overview. Small, below the map.
5. **Included / Bring.** Two columns: what's in every cabin; what to bring.
6. **Policies.** Check-in/out, fees, pets, smoking, housekeeping. Rows only; bathhouse photo moves to the map panel.
7. **Closing CTA.** One button, repeats the date bar state.

## 4. Fixes independent of the restructure
- Pass `unit` (and class) through `book()`; don't reset it when set (H2).
- Move linens out of "What's included" (H3).
- Normalise sleeps labels (L1).

## 5. Information hierarchy audit — Cabins v2 (8 Oct)

A guest reads the page in the order they decide: **Can I stay here? → Which size? → Which cabin? → What do I bring / rules → Book.** v2 mostly follows that order, but heading weight and repetition don't.

**Heading weight is upside down**
- **H1.** "Before you book" holds the facts most likely to stop a booking, but it has only an eyebrow and no heading. It's the lightest section on the page.
- **H2.** The chooser has the only large H2. "Three kinds of cabin", "What's there" and "Cabin policies" use a smaller heading size. That makes four headings at three sizes, and some sections have an eyebrow while others don't.
- **H3.** In the group headers the key difference between sizes (bathroom or not) is small muted text. Price is the loudest thing in each header.

**Order**
- **O1.** "Compare sizes" comes after the cabin-by-cabin list. The overview should come before the detail. It also repeats the group headers (price, sleeps, bathroom) almost word for word.
- **O2.** The first price appears below the fold. Price is a first-glance fact and the hero doesn't have it.

**Repetition** (one home per fact, plus at most one summary)
- Bathhouse 30 ft appears 4×: facts strip, group header, compare table, detail.
- Riding is extra appears 3×: facts strip, policies, detail footnote.
- Cleaning fee appears 2×, and bedding appears 2× (facts strip and Bring list).

**Copy and labels**
- **C1.** "Eight cabins. Pick one on the map." reads as a booking action. The page is informational, so "Find your cabin" or "Where each cabin is" fits better.
- **C2.** Cabin names mix case: the list says "Cabin 3" and the detail says "CABIN 3".

**Visual bugs seen**
- "$125 / night" wraps onto two lines in the Cabins 1–2 group header.
- The thumbnail strip in the detail panel shows a native scrollbar.
- At some widths the left column under the map is empty while the list runs long.

**Proposed hierarchy**
1. **Hero:** H1, intro, one key-facts line (From $125 a night · 8 cabins · sleeps up to 8), CTA.
2. **Before you book:** H2 at section size, 4 facts. The summary home for bedding, bathroom, riding and fees.
3. **Find your cabin:** H2. Size groups act as the comparison: header leads with name + bathroom/sleeps, price secondary. Map + list + detail. Drop the separate Compare table.
4. **In every cabin / Bring with you:** H2, two lists. Bring list keeps bedding (reference home).
5. **Cabin policies:** H2, full reference (keeps fees and riding).
6. **Closing CTA.**

Heading system: one H2 size for every section, always eyebrow + title. H3 only inside sections (group names, detail title). Detail footnote about riding removed.

## 6. Applied to Cabins v2 (8 Oct) — dedupe, cut, brand principles
Mapped to brand principles: *Reveal what's already here* (map + real photos lead), *Take care of the basics* (bathroom, bedding and extra costs stated plainly once), *Give enough to choose well* (each fact has one home), voice *Direct* (when, where, how much, what to bring).
- Hero now carries price and location ("a short walk from Check In, from $125 a night").
- Cabin chooser moved directly under the hero. Size groups are the comparison; bathroom/sleeps lead, price secondary. Compare table cut.
- Cut: filter chips (8 cabins don't need filtering), standalone facts strip, Pets/Parking rows in detail (same for every cabin), riding footnote, "Minimum stay: None", "Bathhouse access" amenity, duplicate fee/riding rows in policies.
- Merged: Included / Bring / Costs extra into one "Before you book" section. Each fee appears once.
- Policies trimmed to rules only (check-in, check-out, pets, smoking, housekeeping). "Cabin rules" heading.
- One heading system: eyebrow + H2 at `--fs-h2` for every section; H3 for groups and detail. Sentence-case cabin names. Price no longer wraps; thumbnail scrollbar hidden.

## 7. Voice, tone and accuracy pass (8 Oct)
Checked against `04-brand-platform.md` (How Hawk Pride Speaks, Avoid), `brand-tone.html`, and the 7 Oct campground policy meeting transcript.

**Wrong facts fixed (from the 7 Oct transcript)**
- "Park the trailer by the door": there's no parking next to a cabin, only close by. Now "Park the rig close by".
- Cabins 1–2: "no running water" was missing. Added to the group header and detail.
- Grill: the owner can't promise one. The Bring list now says to call ahead.
- Pets: added leashed and crated when left alone.
- Added "Beds and bunks" and "Regular pest control" (owner confirmed; *Take care of the basics*).

**AI tells removed**
- Paired-phrase headings: "Three sizes, eight cabins." and "What's there, what to pack." They read like slogans (Avoid: "turning every piece of copy into a slogan"). Now "Pick the one that fits your crew." (uses *your crew*) and "What's in the cabin and what to bring."
- An icon on every list item, with icons repeated (receipt ×2, flame for both fire ring and grill). Now plain ruled lists.
- Hero "a short walk from Check In" was an unverified claim. Now "in the middle of the park".

**Kept (on voice)**: "Sleep close to the trails.", "Pick your weekend.", "Tap a cabin to see inside". Rules stay plain (serious stays serious).

**Capacity:** owner confirmed after the meeting. Keep up to 8 / up to 6 / up to 8 (data.js); the transcript numbers are superseded.

**Pass (8 Oct):** group header puts name and price on one line, with the sleeps/bathroom line full width below (it was wrapping beside the price). One price style in group headers and the detail panel. Check-out reads "By 5 PM" to match "From 10 AM".

- **Cabins section (14 Oct):** removed "Where the cabins are" (map). Cards renamed "Pick the one that fits your crew." Each size card has "View details" that expands in place (borrowed from Adventure Off Road Park's unit page): about line, 4 fact tiles, no-bathroom note (Cabins 1–2), photo gallery (all exteriors + interiors in the group), sleeping arrangements per cabin, and a side box (price, sleeps, cabin numbers, bathroom, Check availability). Amenities and What to bring stay in the page-level section (one home).

- **Group pages (14 Oct):** expand-in-place replaced by a page per size group (`#/cabins/1-2`, `#/cabins/3-6`, `#/cabins/7-8`). Each page: back link, H1, gallery, about + fact tiles + note, sleeping arrangements, In every cabin / Bring with you (repeated here since guests can land directly), sticky booking box (price, sleeps, cabin numbers, bathroom, extras), and links to the other two groups. Rules stay on the main page.
- **Details removed (14 Oct):** group pages dropped; that information lives in the checkout flow. Card buttons are "Check availability" (outline, so the hero keeps the one primary).
- **Shipped (14 Oct):** v2 merged into the official prototype (`Pages.jsx` → `Cabins`, styles `.cabins-*` in `index.html`). `CabinMap` removed. v2 review files deleted.

## Open questions
- Minimum stay for cabins (weekends / events)?
- Do we show weekly rates?
- Is the bathhouse distance from Cabins 1–2 something we can state (e.g. "60 ft")?
