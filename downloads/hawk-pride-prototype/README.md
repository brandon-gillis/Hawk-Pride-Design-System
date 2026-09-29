# Website prototype (owner demo)
Click-through prototype of the rebuilt Hawk Pride site, built from the Drive "Website Rebuild Project" pack. Design only: no backend, no real payments, waivers or messages. Trip state lives in this browser (`hp-proto-trip`); footer **Reset demo** clears it.

Open `index.html`. Routes: `#/` home · `#/events` · `#/events/<id>` · `#/trails` · `#/trails/uphill-both-ways` · `#/fees` · `#/cabins` · `#/camping` · `#/groups` · `#/rules` (`/waiver`) · `#/contact` · `#/book/<dates|stay|site|party|admission|review>` · `#/checkout` · `#/waivers` · `#/confirmation` · `#/gate` (staff check-in demo).

Files: `data.js` (all prices, inventory, events, trails + calc helpers), `ProtoShell.jsx`, `ProtoHome.jsx`, `Pages.jsx` (Fees, Cabins, Camping, Groups, Rules, Contact), `Explore.jsx` (Events, Trails, Uphill Both Ways), `BookParts.jsx` + `Book.jsx` (Book Now flow), `Checkout.jsx` (checkout, waivers, confirmation + gate pass), `Gate.jsx` (staff scan / lookup / check-in), `ProtoApp.jsx` (router).

## Demo script (~3 min)
1. Home → hero, pathways, next event.
2. Book Now → pick an open weekend → Cabin → select a cabin on the map → riders + names → add admission (see the multi-day math) → Review → Checkout → Pay.
3. Sign waivers (or skip one) → gate pass with QR → "See the gate view" → scan → check in the party.
4. Events → Ride at the Pride → Register & Book (dates prefilled, cabins sold out on event weekend).
5. Groups → call-to-plan and open weekends.

## Sample content (confirm with owner)
Cabin sizes/beds, site counts per category beyond 8 cabins / 13 RV, map positions, which units are booked, event dates/packages/schedules, trail names and lengths, hours, rules wording, waiver text, social links.


## Running this folder
Open `index.html` in Chrome, Edge or Safari. It needs an internet connection the first time for fonts and React; for fully offline use, open `Hawk Pride Website Prototype (offline).html` instead.
