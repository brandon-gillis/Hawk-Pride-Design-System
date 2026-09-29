Hawk Pride line icon (Lucide geometry, re-cut with square caps and mitered joins) rendered as a CSS mask so it inherits `currentColor`. Use for every UI glyph.
```jsx
<Icon name="map-pin" size={18}/>
```
- `name`: one of the 126 names in `components/core/icons.js` (see the Iconography card). Groups: terrain, wayfinding, rigs & gear, stay & amenities, booking, events, safety, interface, contact & social.
- Names outside the set fall back to stock (rounded) Lucide with a console warning. Add new glyphs to the set instead.
- 2px stroke, never filled. 16 inline, 20 default, 24 feature lists.
- Trail difficulty uses shapes (DifficultyBadge), not icons. Hawk and mountain marks come from the brandmark files.
