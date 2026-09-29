Condensed uppercase action button; gold `primary` for the one main action (Book, Buy passes), black `secondary` for supporting actions.
```jsx
<Button variant="primary" size="lg" iconRight="arrow-right">Book a stay</Button>
<Button variant="outline" icon="map">Trail map</Button>
```
- Variants: primary, secondary, outline, ghost. Inside a `.hp-on-dark` wrapper, outline/ghost flip to light.
- Sizes: sm 36px, md 44px, lg 52px. Use `block` for full-width mobile CTAs.