# Website UI kit
Responsive, mobile-first recreation of the Hawk Pride Offroad public site with a hotel-style booking flow.

- `index.html` — click-through: Home → Trails (filter + trail detail dialog) → Events (list/grid + detail) → Stay (filters) → Lodging detail (guests sheet, save toast, sticky mobile BookingBar) → Checkout (validation) → Confirmation; Pricing (pass select + rider stepper).
- `mobile.html` — the same site in a 390px frame.
- Files: `Shell.jsx` (status strip, header, mobile menu, footer, Section), `Home.jsx`, `Trails.jsx`, `Events.jsx`, `Stay.jsx`, `Booking.jsx` (Lodging, Checkout, Confirmation), `Pricing.jsx`, `App.jsx` (router, persisted in localStorage), `data.js`.

Real facts used: pass prices ($20/$30/$40/$50, under-10 free), 8 cabins, 13 RV pads with water + 50 amp, 1,000+ acres, 120+ rock trails, hours, address, phone, event names. **Sample data (replace):** trail names/numbers, cabin names and nightly rates, event dates/years, confirmation code. All photos are placeholders.