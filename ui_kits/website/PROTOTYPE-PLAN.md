# Website prototype — build plan (v2, from the Website Rebuild context pack)

Goal: a click-through demo of the Hawk Pride Offroad site for the owner, shown on a laptop. Design only: no database, no real payments, no FareHarbor/Square/WaiverForever calls. All data is in `data.js`; state lives in the browser.

Source: Drive "Website Rebuild Project" 00–08 (read 27 Sep). Core rule from the pack: *keep information navigation literal and obvious; keep purchasing unified.*

## Decisions (27 Sep): 1 → B (full nav) · 2 → pack prices · 3 → run through waivers and confirmation

## Conflicts with the current kit (resolved)
1. **Pages.** The pack's nav is Home · Events · Trails · Fees · Cabins · Camping · Groups · Rules · Contact · **Book Now**. It explicitly avoids "Stay" as a label. The kit has Trails, Events, Stay, Pricing. You said no new pages. Options:
   - A. Keep the current four pages and only rename them (Pricing → Fees; split Stay into Cabins and Camping sections).
   - B. Follow the pack's full nav. Groups, Rules and Contact are short info pages, and Events gets a page per event plus a signature page for Uphill Both Ways. **Recommended**: the owner will judge the demo against this pack.
2. **Prices.** The kit's data is out of date. The pack sets $20/day per person, $15/day from day 3, and kids 12 and under ride free. Powered RV is $40/night, dry RV $25, primitive campsite $20, camp anywhere $5 per person per night. Cabins 1–2 are $125/night and cabins 3–8 $150. I'll replace the 1/2/3/4-day passes and the under-10 rule.
3. **Booking.** The kit's flow is Stay → Lodging page → Checkout. The pack wants one Book Now flow: Dates → Stay → Site (with map) → Riders → Admission → Review → Checkout. You said "up to checkout"; the pack continues with Pay → Waivers → Confirmation + QR code. Should the demo stop at a checkout screen with a fake Pay button, or run through to waivers and confirmation?

## Locked
- Laptop demo, but the layout stays responsive (the pack is mobile-first).
- Uppercase headings stay; drop the `?case=sentence` toggle.
- Current photos and placeholders.
- Build in `ui_kits/website-prototype/`; the design-system kit stays untouched.
- No accounts. No sponsor placements in booking.

## Steps
1. **Setup.** Copy the kit to `ui_kits/website-prototype/`. Use hash routes (`#/cabins`, `#/book?stay=cabin`, `#/events/ride-at-the-pride`) so back/forward and deep links work. Add a reset-demo shortcut.
2. **Data.** Move all facts into `data.js`: pricing rules, stay categories (cabin, powered RV, dry RV, primitive, camp anywhere) with availability counts, units with map positions (8 cabins, 13 RV pads), events with dates and packages, trails, park status. Pages read from this data; no price is typed into the markup.
3. **Header and footer.** Use the literal nav with Book Now styled as the distinct button, plus the park-status strip (open this weekend or closed, gate hours). The footer gets Rules, Contact, a waiver link, refund policy and social links.
4. **Home (7 sections from the pack).** Hero with Book Now. Four pathways: trail riding, events, cabins & camping, group rides. Park proof covering easy to extreme riding and Uphill Both Ways. Next 3 events. Stay block. Life at Hawk Pride photo grid. Final Book Now. No stats band, carousel or testimonials.
5. **Book Now flow** (one screen per step, trip summary always visible, one primary action per step):
   1. *When are you coming?* Arrival and departure dates. Flag an event when the dates overlap one, and flag closed days.
   2. *Where are you staying?* Categories with counts ("Cabin — 2 available"). Sold-out categories stay visible but disabled. "No overnight stay" is an option.
   3. *Pick your site.* Cards next to a simple park map, highlighted in both directions. The View Details drawer has photos, sleeps, amenities, hookups, parking and a Select button. Camp Anywhere skips this step.
   4. *Who's coming?* Adult riders, child riders (12 and under) and non-riders, with names.
   5. *Add riding admission?* Calculated automatically, e.g. "2 adults × 2 days = $80".
   6. *Your Hawk Pride trip.* Review with Edit links on each section, then the Checkout button.
   7. *Checkout.* Contact details, Card / Apple Pay / Google Pay (visual only), and Pay, which ends in a fake success. Final end point depends on decision 3.
   - Pre-filled entry points: Cabins → cabin, Camping → the chosen type, Fees → admission only, Event page → event dates set.
6. **Interior pages** (if option B): Fees, Cabins, Camping, Groups (open weekends plus a large tap-to-call number), Rules (grouped by topic, with Sign Waiver), Contact (phone, email, address, map placeholder, hours), Events index, an event detail template, Trails with the map and difficulty legend, and Uphill Both Ways. The Jeep page uses only the trail name and editorial copy; no Jeep marks.
7. **Copy.** Short and specific, following the pack's tone. Anything not confirmed (cabin details, site numbers, event packages, schedules) is marked sample in the README.
8. **Laptop polish.** Check at 1280, 1440 and 1920 wide. Light and dark sections alternate; focus and error states work.
9. **Demo kit.** A 3-minute click path (first-time rider → cabin booking → event → group) and an offline single-file copy.
10. **Review and log.** One revision round, then update ROADMAP.md.

## Out of scope (per the pack's phasing)
Gate check-in and staff lookup, admin, real availability and payments, email/SMS, SEO work, sponsor system.
