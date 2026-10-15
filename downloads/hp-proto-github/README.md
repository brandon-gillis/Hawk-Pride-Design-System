# Hawk Pride website prototype

Click-through prototype of the Hawk Pride Offroad site: public pages, Book Now flow, checkout, waivers, gate check-in and the staff admin (#/admin). Design only: no backend, no real payments.

## Publish on GitHub Pages
1. Upload everything in this folder to the repo root, including the hidden `.nojekyll` file (without it Pages skips `_ds_bundle.js`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<user>.github.io/<repo>/`. The root page forwards to `ui_kits/website-prototype/`.

Keep the folder structure as is; the prototype loads the design system and photos by relative path.

## What's here
- `ui_kits/website-prototype/`: the prototype (`index.html`, JSX screens, `data.js`, `site.css`, `admin.css`) plus its README, ADMIN.md and the latest audit.
- `ui_kits/website-prototype/Hawk Pride Website Prototype (offline).html`: single-file copy that works with no internet (23 MB).
- `_ds_bundle.js`, `styles.css`, `tokens/`, `components/*.css`: the Hawk Pride design system the prototype is built on.
- `assets/`: only the photos, maps, badges and patterns the prototype uses.

Needs internet for fonts and React (CDN). JSX is compiled in the browser; precompile before using as a production site.
