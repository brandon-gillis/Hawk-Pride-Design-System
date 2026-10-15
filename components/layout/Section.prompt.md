Standard page section. Handles container width, vertical rhythm (`--section-y`), and the eyebrow → gold rule → H1-size title → intro header.
```jsx
<Section eyebrow="Coming up" title="Something’s always happening." action={<Button variant="outline" iconRight="arrow-right">All events</Button>}>…</Section>
<Section sunken eyebrow="Stay the weekend" title="Ride all day. Stay all weekend." intro="Cabins, RV pads and open camping.">…</Section>
```
- Alternate plain and `sunken` sections; use `dark` for at most one band per page plus the footer.
- `SectionHeader` is the header on its own, for custom wrappers.