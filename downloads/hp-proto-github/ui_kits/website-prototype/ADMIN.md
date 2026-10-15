# Staff admin + events calendar (prototype)

UI mock only. No database, no real auth, nothing is written to Google.

## Routes (hash routes in the prototype; real paths in production)
- `/admin`: staff login. Prototype login `staff` / `hawkpride`, kept in sessionStorage.
- `/admin/events`: Manage Events (the only tab for now). Filter upcoming/past/all, search, edit, delete with confirm + undo.
- `/admin/events/new`, `/admin/events/:id`: event editor. Website preview + the exact Google Calendar entry that will be written. Unsaved-changes guard.
- `/events`: public list now has a List / Calendar toggle, plus "Add our calendar to Google Calendar". Event pages get "Add to Google Calendar".

## Google Calendar
- Calendar: `6c825c2589cd402a5397799cc699d81fd2dfb6d175afe939890a7adebd2b9952@group.calendar.google.com`, timezone `America/Chicago`.
- Create/edit/delete in the admin should create/update/delete the matching Google Calendar event (Calendar API, service account with write access). Store the Google event id on the event record (`gcalId`).
- Events are all-day; Google's end date is exclusive (end + 1 day). Mapping lives in `HP_EVENTS.toGcal()` in `events-store.js`.
- Website-only fields (status label, photo, facts, schedule, Jeep flag) live in the site's own store; Google gets title, dates, location and summary + description + event link.

## Event fields
title*, type, start*, end (blank = one day), status (normal/featured/few/soldout), hook* (≤140), desc, photo, facts (≤4 label/value), schedule (rows), jeep (bool).

## Event rates
Four modes per event (`rates.mode`): `standard` (park rates, rates = null), `daily` (rider day 1–2, day 3+, kids-free age, spectator / day, extra fees), `fixed` (one fee per rider for the whole event, kids-free age, spectator / person, extra fees), `free` (no-charge group ride; admission $0, waivers still required). Booking admission uses the event mode when trip dates overlap the event (`HP.tripRates`). Spectator price and extra fees are display-only on the event page (paid at the gate) until checkout handles them.

## Files
`events-store.js` (data + Google mapping), `Admin.jsx`, `EventCalendar.jsx`, `admin.css`.
