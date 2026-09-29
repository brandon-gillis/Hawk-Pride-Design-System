# Prototype audit vs Website Rebuild pack (00–08) — 27 Sep

## A. Fix: prototype contradicts the pack — ✅ all fixed 27 Sep
1. **Too many RV sites.** The pack says 13 RV pads in total. The prototype has 13 powered plus 6 dry. Split them to 9 powered and 4 dry (this matches the pack's "6 available / 4 available" example).
2. **Some prices are typed into the pages.** The Home stay block, the Camping cards, the Cabins cards and the event-page stay block all have prices written directly into the page. They should read from `data.js`, following the pack's "one source of truth" principle.
3. **Park status and trail closure are fixed text.** The "Open this weekend" banner and the Trail #42 alert should come from a notices entry in `data.js`.
4. **Spectator pricing contradicts itself.** Event pages say spectators pay standard admission, but booking treats non-riding guests as free. Change the event pages to "Spectator pricing: to be confirmed" until decision 7 is made.
5. **Confirmation is missing items.** Per flow step 9, it needs the event name (when there is one), each rider by name with admission and waiver status, and payment status shown as "Paid".
6. **Reservation code format.** Change it to the pack's `HP-28437` style.
7. **Waiver screen heading.** Use the pack's "Almost ready to ride", with a ✓ or "Required" per person.
8. **Uphill Both Ways page invents details** (how badge check-in works, tire and locker suggestions). The pack allows only the trail name, the factual Badge of Honor link and editorial copy. Soften the wording.
9. **Groups page invents a rule** ("call a few weeks ahead for 10 or more"). The pack says to add rules like this only once they're defined. Remove it.
10. **Camping page doesn't show availability.** The pack lists availability for each camping type. Show "X available this weekend" from the data.
11. **Cabins page is missing the bathroom and kitchen line** the pack lists. Remove the invented "No Wi-Fi" line.
12. **Header has no Home link.** The pack's menu starts with Home.

## B. Worth adding for the owner demo (optional)
13. ✅ **Gate check-in screen** (`#/gate`, linked from the confirmation page and the footer). A staff view that shows the whole reservation after a scan, with the "CHECK IN PARTY" button and missing waivers flagged. The pack treats this as core (flow + phase 3), and it's the clearest way to show the owner that everything ends up in one reservation.
14. **Event package step.** The event booking flow should include "choose event package / admission". The prototype currently uses standard admission. Needs decision 7.
15. **Failed payment state.** A demo toggle that shows the decline message and keeps the trip intact.

## C. Owner to confirm (sample data today)
Hours, the "1,000 acres / 120+ trails" claims, which events are real (the pack mentions "RBD", which the prototype doesn't have), cabin sizes and beds, pet/fire/speed rules, the refund policy, and which footer pages exist (About, Partners, Host an Event, Privacy, Terms are not linked).
