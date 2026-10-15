Wrap rows in `.hp-kv-list`; put the total in `.hp-kv-sum` (hairline) or `.hp-kv-sum--strong` (2px black).
```jsx
<div className="hp-kv-list"><SummaryRow label="2 adults × 3 days" value="$140"/><SummaryRow muted label="1 child rider" value="Free"/></div>
<div className="hp-kv-sum"><SummaryRow total label="Total" value="$140"/></div>
```