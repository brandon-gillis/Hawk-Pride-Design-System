Horizontal tabs (scrolls on mobile); `line` for page sections, `pill` for filters like difficulty or lodging type.
```jsx
<Tabs variant="pill" value={f} onChange={setF} items={[{id:'all',label:'All'},{id:'cabin',label:'Cabins'}]}/>
```