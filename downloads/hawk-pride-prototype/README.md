# Website prototype (owner demo)
Click-through prototype of the rebuilt Hawk Pride site, built from the Drive "Website Handoff" pack (30 Sep, Replit-ready version). Design only: no backend, no real payments, waivers or messages. Trip state lives in this browser (`hp-proto-trip`); footer **Reset demo** clears it.

Open `index.html`. Routes: `#/` home · `#/events` · `#/events/<id>` · `#/trails` · `#/trails/uphill-both-ways` · `#/rates` (`#/fees` aliases here) · `#/cabins` · `#/camping` · `#/groups` · `#/rules` (`/waiver`) · `#/contact` · `#/faq` · `#/gallery` · `#/book/<dates|stay|site|party|admission|review>` · `#/checkout` · `#/waivers` · `#/confirmation` · `#/gate` (staff check-in demo) · anything else = 404.

Files: `data.js` (all prices, inventory, events, trails + calc helpers), `ProtoShell.jsx`, `ProtoHome.jsx`, `Pages.jsx` (Rates, Cabins, Camping, Groups, Rules, Contact), `Explore.jsx` (Events, Trails, Uphill Both Ways), `Secondary.jsx` (FAQ, Gallery, 404, contact form), `BookParts.jsx` + `Book.jsx` (Book Now flow), `Checkout.jsx` (checkout incl. declined-payment demo, waivers, confirmation + gate pass), `Gate.jsx` (staff scan / lookup / check-in / roster download), `ProtoApp.jsx` (router).

## 30 Sep pass (handoff pack)
- Fees → **Rates** (nav, route, footer, links). FAQ and Gallery added as secondary pages (footer + contextual links, not primary nav). Contact form on Contact. 404 page.
- Public name neutralised to "Hawk Pride" in copy (open decision). Privacy removed from footer (not assumed). About not created (open).
- Checkout: declined-payment state keeps the trip. Gate: downloadable roster for outages.

## Demo script (~3 min)
1. Home → hero, pathways, next event.
2. Book Now → pick an open weekend → Cabin → select a cabin on the map → riders + names → add admission (see the multi-day math) → Review → Checkout → Pay.
3. Sign waivers (or skip one) → gate pass with QR → "See the gate view" → scan → check in the party.
4. Events → Ride at the Pride → Register & Book (dates prefilled, cabins sold out on event weekend).
5. Groups → call-to-plan and open weekends.

## Sample content (confirm with owner)
Cabin sizes/beds, site counts per category beyond 8 cabins / 13 RV, map positions, which units are booked, event dates/packages/schedules, trail names and lengths, hours, rules wording, waiver text, social links.


## Publishing on GitHub Pages
Push this whole folder (including the hidden `.nojekyll` file) to a repo, then Settings → Pages → Deploy from branch → `main` / root. The site opens at `https://<user>.github.io/<repo>/`.

`.nojekyll` matters: without it GitHub skips files starting with an underscore. Everything else is relative, so the folder also works in a subfolder of an existing Pages repo.

Needs internet for fonts and React (loaded from CDNs). For a no-internet copy use `Hawk Pride Website Prototype (offline).html`.
