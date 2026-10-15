Multi-line text field (16px text, 1.5 line height, resizes vertically). Use for messages, event descriptions, notes.
```jsx
<Textarea label="Summary" hint="One line. Shows on the events list." value={v} onChange={e=>setV(e.target.value)} count={140} rows={2}/>
```
- `hint` sits above the box so it's read before typing; `error` and the `count` meter sit below.
- `count` is a soft limit: typing past it is allowed, the counter turns red, and the form should block save.
