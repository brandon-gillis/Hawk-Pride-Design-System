Modal that turns into a bottom sheet on phones; use for date pickers, guest counts, trail details, waivers.
```jsx
<Dialog open={o} title="Guests" onClose={close} footer={<Button onClick={close}>Done</Button>}>…</Dialog>
```