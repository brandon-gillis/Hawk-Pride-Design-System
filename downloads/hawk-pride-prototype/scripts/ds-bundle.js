/* @ds-bundle: {"format":4,"namespace":"HawkPrideDesignSystem_97eec1","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CardBody","sourcePath":"components/content/Card.jsx"},{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"LodgingCard","sourcePath":"components/content/LodgingCard.jsx"},{"name":"Photo","sourcePath":"components/content/Photo.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"TrailRow","sourcePath":"components/content/TrailRow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DifficultyBadge","sourcePath":"components/core/DifficultyBadge.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ICON_GROUPS","sourcePath":"components/core/icons.js"},{"name":"ICONS","sourcePath":"components/core/icons.js"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BookingBar","sourcePath":"components/navigation/BookingBar.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Card.jsx":"e6c07c262206","components/content/EventCard.jsx":"6b8beb36b2cb","components/content/LodgingCard.jsx":"cf0d1499eafa","components/content/Photo.jsx":"02c639000583","components/content/PriceCard.jsx":"94ccc5bc67cf","components/content/TrailRow.jsx":"0912067e58f7","components/core/Badge.jsx":"e7e0d1f4490d","components/core/Button.jsx":"83db1db898eb","components/core/DifficultyBadge.jsx":"b45bac6ae949","components/core/Icon.jsx":"6bdd99f91bf4","components/core/IconButton.jsx":"1e950d1bb490","components/core/icons.js":"502c68fec88e","components/feedback/Alert.jsx":"7ebab512451c","components/feedback/Dialog.jsx":"a431566484d2","components/feedback/Toast.jsx":"e794e60237b0","components/feedback/Tooltip.jsx":"93ba6e9ef341","components/forms/Checkbox.jsx":"901c69c4cc06","components/forms/Input.jsx":"e25f55e94212","components/forms/QuantityStepper.jsx":"116f85ccd027","components/forms/Radio.jsx":"3b5bf140c403","components/forms/Select.jsx":"a978ad415357","components/forms/Switch.jsx":"eb42e2394eef","components/navigation/BookingBar.jsx":"3df92699b1f4","components/navigation/SiteHeader.jsx":"740bfa6543fa","components/navigation/Tabs.jsx":"d52bab0cc778","downloads/hawk-pride-prototype/scripts/book-parts.js":"4f93f4f478cd","downloads/hawk-pride-prototype/scripts/book.js":"41d1fa9ec923","downloads/hawk-pride-prototype/scripts/checkout.js":"9954d32e5c06","downloads/hawk-pride-prototype/scripts/data.js":"b2b4edb9e49f","downloads/hawk-pride-prototype/scripts/explore.js":"9150de2b72ce","downloads/hawk-pride-prototype/scripts/gate.js":"94fcac96d6d0","downloads/hawk-pride-prototype/scripts/pages.js":"087035a107a5","downloads/hawk-pride-prototype/scripts/proto-app.js":"e145491fcefe","downloads/hawk-pride-prototype/scripts/proto-home.js":"a090bad7f9e0","downloads/hawk-pride-prototype/scripts/proto-shell.js":"f16da7ca6351","ui_kits/website-prototype/Book.jsx":"41d1fa9ec923","ui_kits/website-prototype/BookParts.jsx":"4f93f4f478cd","ui_kits/website-prototype/Checkout.jsx":"f42615425e28","ui_kits/website-prototype/Explore.jsx":"02eb2c92216f","ui_kits/website-prototype/Gate.jsx":"f593e50e6f7e","ui_kits/website-prototype/Pages.jsx":"ba016766afdf","ui_kits/website-prototype/ProtoApp.jsx":"834298c42cad","ui_kits/website-prototype/ProtoHome.jsx":"d902e8d107a1","ui_kits/website-prototype/ProtoShell.jsx":"56a2fdebc4ae","ui_kits/website-prototype/Secondary.jsx":"fb21f3c9b124","ui_kits/website-prototype/data.js":"d0ffbea8305c","ui_kits/website/App.jsx":"8a849c32fca2","ui_kits/website/Booking.jsx":"dd66602aecaa","ui_kits/website/Events.jsx":"946413d3d1a2","ui_kits/website/Home.jsx":"841c38babf7a","ui_kits/website/Pricing.jsx":"0831a9e23adc","ui_kits/website/Shell.jsx":"83e1c838edc9","ui_kits/website/Stay.jsx":"3f2147acefd4","ui_kits/website/Trails.jsx":"be8b610e7c46","ui_kits/website/data.js":"dc22471ed84a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HawkPrideDesignSystem_97eec1 = window.HawkPrideDesignSystem_97eec1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  interactive,
  children,
  className,
  onClick,
  ...rest
}) {
  const a = interactive && onClick ? {
    role: 'button',
    tabIndex: 0,
    onClick,
    onKeyDown: e => {
      if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick(e);
      }
    }
  } : {
    onClick
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, a, {
    className: ['hp-card', variant !== 'default' && 'hp-card--' + variant, interactive && 'hp-card--interactive', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardBody({
  children,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-card__body', className].filter(Boolean).join(' ')
  }, children);
}
Object.assign(__ds_scope, { Card, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/DifficultyBadge.jsx
try { (() => {
const L = {
  easy: 'Easy',
  moderate: 'Moderate',
  difficult: 'Difficult',
  extreme: 'Extreme'
};
function DifficultyBadge({
  level = 'easy',
  showLabel = true,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['hp-diff', className].filter(Boolean).join(' '),
    title: L[level],
    role: showLabel ? undefined : 'img',
    "aria-label": showLabel ? undefined : L[level] + ' trail'
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: 'hp-diff__mark hp-diff__mark--' + level
  }), showLabel && L[level]);
}
Object.assign(__ds_scope, { DifficultyBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DifficultyBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/icons.js
try { (() => {
// Generated. Hawk Pride icon set: Lucide 0.460.0 geometry (ISC), square caps + mitered joins.
const ICON_GROUPS = {
  "Terrain & park": ["mountain", "mountain-snow", "trees", "tree-pine", "tree-deciduous", "tent-tree", "waves", "droplets", "sun", "sunrise", "sunset", "moon", "cloud-rain", "cloud-lightning", "snowflake", "thermometer", "wind"],
  "Wayfinding": ["map", "map-pin", "map-pinned", "route", "signpost", "milestone", "split", "compass", "navigation", "locate-fixed", "flag", "flag-triangle-right", "square-parking", "footprints", "binoculars"],
  "Rigs & gear": ["car-front", "truck", "caravan", "tractor", "fuel", "wrench", "gauge", "cog", "battery-charging"],
  "Stay & amenities": ["house", "tent", "bed-double", "plug-zap", "shower-head", "bath", "flame", "flame-kindling", "dog", "wifi-off", "trash-2", "key-round", "utensils", "cooking-pot", "store"],
  "Booking & passes": ["calendar-days", "calendar-check", "calendar-x", "calendar-range", "ticket", "credit-card", "receipt", "wallet", "tag", "users", "user", "baby", "shopping-bag", "clock", "timer", "badge-check"],
  "Events": ["trophy", "medal", "megaphone", "music", "camera", "video"],
  "Safety & status": ["shield-check", "triangle-alert", "octagon-alert", "info", "circle-help", "heart-pulse", "siren", "ban", "lock", "file-text", "life-buoy", "hospital", "construction"],
  "Interface": ["menu", "x", "search", "chevron-down", "chevron-up", "chevron-left", "chevron-right", "arrow-left", "arrow-right", "arrow-up-right", "plus", "minus", "check", "sliders-horizontal", "list-filter", "heart", "share-2", "download", "external-link", "image", "maximize-2", "ellipsis", "eye", "refresh-cw", "log-in", "grid-2x2", "list", "layers"],
  "Contact & social": ["phone", "mail", "message-circle", "globe", "facebook", "instagram", "youtube"]
};
const ICONS = {
  "mountain": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m8%203%204%208%205-5%205%2015H2L8%203z%22%2F%3E%20%3C%2Fsvg%3E",
  "mountain-snow": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m8%203%204%208%205-5%205%2015H2L8%203z%22%2F%3E%20%3Cpath%20d%3D%22M4.14%2015.08c2.62-1.57%205.24-1.43%207.86.42%202.74%201.94%205.49%202%208.23.19%22%2F%3E%20%3C%2Fsvg%3E",
  "trees": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M10%2010v.2A3%203%200%200%201%208.9%2016H5a3%203%200%200%201-1-5.8V10a3%203%200%200%201%206%200Z%22%2F%3E%20%3Cpath%20d%3D%22M7%2016v6%22%2F%3E%20%3Cpath%20d%3D%22M13%2019v3%22%2F%3E%20%3Cpath%20d%3D%22M12%2019h8.3a1%201%200%200%200%20.7-1.7L18%2014h.3a1%201%200%200%200%20.7-1.7L16%209h.2a1%201%200%200%200%20.8-1.7L13%203l-1.4%201.5%22%2F%3E%20%3C%2Fsvg%3E",
  "tree-pine": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m17%2014%203%203.3a1%201%200%200%201-.7%201.7H4.7a1%201%200%200%201-.7-1.7L7%2014h-.3a1%201%200%200%201-.7-1.7L9%209h-.2A1%201%200%200%201%208%207.3L12%203l4%204.3a1%201%200%200%201-.8%201.7H15l3%203.3a1%201%200%200%201-.7%201.7H17Z%22%2F%3E%20%3Cpath%20d%3D%22M12%2022v-3%22%2F%3E%20%3C%2Fsvg%3E",
  "tree-deciduous": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M8%2019a4%204%200%200%201-2.24-7.32A3.5%203.5%200%200%201%209%206.03V6a3%203%200%201%201%206%200v.04a3.5%203.5%200%200%201%203.24%205.65A4%204%200%200%201%2016%2019Z%22%2F%3E%20%3Cpath%20d%3D%22M12%2019v3%22%2F%3E%20%3C%2Fsvg%3E",
  "tent-tree": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%222%22%2F%3E%20%3Cpath%20d%3D%22m14%205%203-3%203%203%22%2F%3E%20%3Cpath%20d%3D%22m14%2010%203-3%203%203%22%2F%3E%20%3Cpath%20d%3D%22M17%2014V2%22%2F%3E%20%3Cpath%20d%3D%22M17%2014H7l-5%208h20Z%22%2F%3E%20%3Cpath%20d%3D%22M8%2014v8%22%2F%3E%20%3Cpath%20d%3D%22m9%2014%205%208%22%2F%3E%20%3C%2Fsvg%3E",
  "waves": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2%206c.6.5%201.2%201%202.5%201C7%207%207%205%209.5%205c2.6%200%202.4%202%205%202%202.5%200%202.5-2%205-2%201.3%200%201.9.5%202.5%201%22%2F%3E%20%3Cpath%20d%3D%22M2%2012c.6.5%201.2%201%202.5%201%202.5%200%202.5-2%205-2%202.6%200%202.4%202%205%202%202.5%200%202.5-2%205-2%201.3%200%201.9.5%202.5%201%22%2F%3E%20%3Cpath%20d%3D%22M2%2018c.6.5%201.2%201%202.5%201%202.5%200%202.5-2%205-2%202.6%200%202.4%202%205%202%202.5%200%202.5-2%205-2%201.3%200%201.9.5%202.5%201%22%2F%3E%20%3C%2Fsvg%3E",
  "droplets": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7%2016.3c2.2%200%204-1.83%204-4.05%200-1.16-.57-2.26-1.71-3.19S7.29%206.75%207%205.3c-.29%201.45-1.14%202.84-2.29%203.76S3%2011.1%203%2012.25c0%202.22%201.8%204.05%204%204.05z%22%2F%3E%20%3Cpath%20d%3D%22M12.56%206.6A10.97%2010.97%200%200%200%2014%203.02c.5%202.5%202%204.9%204%206.5s3%203.5%203%205.5a6.98%206.98%200%200%201-11.91%204.97%22%2F%3E%20%3C%2Fsvg%3E",
  "sun": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%224%22%2F%3E%20%3Cpath%20d%3D%22M12%202v2%22%2F%3E%20%3Cpath%20d%3D%22M12%2020v2%22%2F%3E%20%3Cpath%20d%3D%22m4.93%204.93%201.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22m17.66%2017.66%201.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22M2%2012h2%22%2F%3E%20%3Cpath%20d%3D%22M20%2012h2%22%2F%3E%20%3Cpath%20d%3D%22m6.34%2017.66-1.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22m19.07%204.93-1.41%201.41%22%2F%3E%20%3C%2Fsvg%3E",
  "sunrise": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%202v8%22%2F%3E%20%3Cpath%20d%3D%22m4.93%2010.93%201.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22M2%2018h2%22%2F%3E%20%3Cpath%20d%3D%22M20%2018h2%22%2F%3E%20%3Cpath%20d%3D%22m19.07%2010.93-1.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22M22%2022H2%22%2F%3E%20%3Cpath%20d%3D%22m8%206%204-4%204%204%22%2F%3E%20%3Cpath%20d%3D%22M16%2018a4%204%200%200%200-8%200%22%2F%3E%20%3C%2Fsvg%3E",
  "sunset": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2010V2%22%2F%3E%20%3Cpath%20d%3D%22m4.93%2010.93%201.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22M2%2018h2%22%2F%3E%20%3Cpath%20d%3D%22M20%2018h2%22%2F%3E%20%3Cpath%20d%3D%22m19.07%2010.93-1.41%201.41%22%2F%3E%20%3Cpath%20d%3D%22M22%2022H2%22%2F%3E%20%3Cpath%20d%3D%22m16%206-4%204-4-4%22%2F%3E%20%3Cpath%20d%3D%22M16%2018a4%204%200%200%200-8%200%22%2F%3E%20%3C%2Fsvg%3E",
  "moon": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%203a6%206%200%200%200%209%209%209%209%200%201%201-9-9Z%22%2F%3E%20%3C%2Fsvg%3E",
  "cloud-rain": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M4%2014.899A7%207%200%201%201%2015.71%208h1.79a4.5%204.5%200%200%201%202.5%208.242%22%2F%3E%20%3Cpath%20d%3D%22M16%2014v6%22%2F%3E%20%3Cpath%20d%3D%22M8%2014v6%22%2F%3E%20%3Cpath%20d%3D%22M12%2016v6%22%2F%3E%20%3C%2Fsvg%3E",
  "cloud-lightning": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M6%2016.326A7%207%200%201%201%2015.71%208h1.79a4.5%204.5%200%200%201%20.5%208.973%22%2F%3E%20%3Cpath%20d%3D%22m13%2012-3%205h4l-3%205%22%2F%3E%20%3C%2Fsvg%3E",
  "snowflake": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%20%3Cpath%20d%3D%22m20%2016-4-4%204-4%22%2F%3E%20%3Cpath%20d%3D%22m4%208%204%204-4%204%22%2F%3E%20%3Cpath%20d%3D%22m16%204-4%204-4-4%22%2F%3E%20%3Cpath%20d%3D%22m8%2020%204-4%204%204%22%2F%3E%20%3C%2Fsvg%3E",
  "thermometer": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M14%204v10.54a4%204%200%201%201-4%200V4a2%202%200%200%201%204%200Z%22%2F%3E%20%3C%2Fsvg%3E",
  "wind": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12.8%2019.6A2%202%200%201%200%2014%2016H2%22%2F%3E%20%3Cpath%20d%3D%22M17.5%208a2.5%202.5%200%201%201%202%204H2%22%2F%3E%20%3Cpath%20d%3D%22M9.8%204.4A2%202%200%201%201%2011%208H2%22%2F%3E%20%3C%2Fsvg%3E",
  "map": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M14.106%205.553a2%202%200%200%200%201.788%200l3.659-1.83A1%201%200%200%201%2021%204.619v12.764a1%201%200%200%201-.553.894l-4.553%202.277a2%202%200%200%201-1.788%200l-4.212-2.106a2%202%200%200%200-1.788%200l-3.659%201.83A1%201%200%200%201%203%2019.381V6.618a1%201%200%200%201%20.553-.894l4.553-2.277a2%202%200%200%201%201.788%200z%22%2F%3E%20%3Cpath%20d%3D%22M15%205.764v15%22%2F%3E%20%3Cpath%20d%3D%22M9%203.236v15%22%2F%3E%20%3C%2Fsvg%3E",
  "map-pin": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M20%2010c0%204.993-5.539%2010.193-7.399%2011.799a1%201%200%200%201-1.202%200C9.539%2020.193%204%2014.993%204%2010a8%208%200%200%201%2016%200%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2210%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "map-pinned": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M18%208c0%203.613-3.869%207.429-5.393%208.795a1%201%200%200%201-1.214%200C9.87%2015.429%206%2011.613%206%208a6%206%200%200%201%2012%200%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M8.714%2014h-3.71a1%201%200%200%200-.948.683l-2.004%206A1%201%200%200%200%203%2022h18a1%201%200%200%200%20.948-1.316l-2-6a1%201%200%200%200-.949-.684h-3.712%22%2F%3E%20%3C%2Fsvg%3E",
  "route": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%226%22%20cy%3D%2219%22%20r%3D%223%22%2F%3E%20%3Cpath%20d%3D%22M9%2019h8.5a3.5%203.5%200%200%200%200-7h-11a3.5%203.5%200%200%201%200-7H15%22%2F%3E%20%3Ccircle%20cx%3D%2218%22%20cy%3D%225%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "signpost": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2013v8%22%2F%3E%20%3Cpath%20d%3D%22M12%203v3%22%2F%3E%20%3Cpath%20d%3D%22M18%206a2%202%200%200%201%201.387.56l2.307%202.22a1%201%200%200%201%200%201.44l-2.307%202.22A2%202%200%200%201%2018%2013H6a2%202%200%200%201-1.387-.56l-2.306-2.22a1%201%200%200%201%200-1.44l2.306-2.22A2%202%200%200%201%206%206z%22%2F%3E%20%3C%2Fsvg%3E",
  "milestone": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2013v8%22%2F%3E%20%3Cpath%20d%3D%22M12%203v3%22%2F%3E%20%3Cpath%20d%3D%22M4%206a1%201%200%200%200-1%201v5a1%201%200%200%200%201%201h13a2%202%200%200%200%201.152-.365l3.424-2.317a1%201%200%200%200%200-1.635l-3.424-2.318A2%202%200%200%200%2017%206z%22%2F%3E%20%3C%2Fsvg%3E",
  "split": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M16%203h5v5%22%2F%3E%20%3Cpath%20d%3D%22M8%203H3v5%22%2F%3E%20%3Cpath%20d%3D%22M12%2022v-8.3a4%204%200%200%200-1.172-2.872L3%203%22%2F%3E%20%3Cpath%20d%3D%22m15%209%206-6%22%2F%3E%20%3C%2Fsvg%3E",
  "compass": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m16.24%207.76-1.804%205.411a2%202%200%200%201-1.265%201.265L7.76%2016.24l1.804-5.411a2%202%200%200%201%201.265-1.265z%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3C%2Fsvg%3E",
  "navigation": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpolygon%20points%3D%223%2011%2022%202%2013%2021%2011%2013%203%2011%22%2F%3E%20%3C%2Fsvg%3E",
  "locate-fixed": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%222%22%20x2%3D%225%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%2219%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%225%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2219%22%20y2%3D%2222%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%227%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "flag": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M4%2015s1-1%204-1%205%202%208%202%204-1%204-1V3s-1%201-4%201-5-2-8-2-4%201-4%201z%22%2F%3E%20%3Cline%20x1%3D%224%22%20x2%3D%224%22%20y1%3D%2222%22%20y2%3D%2215%22%2F%3E%20%3C%2Fsvg%3E",
  "flag-triangle-right": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7%2022V2l10%205-10%205%22%2F%3E%20%3C%2Fsvg%3E",
  "square-parking": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M9%2017V7h4a3%203%200%200%201%200%206H9%22%2F%3E%20%3C%2Fsvg%3E",
  "footprints": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M4%2016v-2.38C4%2011.5%202.97%2010.5%203%208c.03-2.72%201.49-6%204.5-6C9.37%202%2010%203.8%2010%205.5c0%203.11-2%205.66-2%208.68V16a2%202%200%201%201-4%200Z%22%2F%3E%20%3Cpath%20d%3D%22M20%2020v-2.38c0-2.12%201.03-3.12%201-5.62-.03-2.72-1.49-6-4.5-6C14.63%206%2014%207.8%2014%209.5c0%203.11%202%205.66%202%208.68V20a2%202%200%201%200%204%200Z%22%2F%3E%20%3Cpath%20d%3D%22M16%2017h4%22%2F%3E%20%3Cpath%20d%3D%22M4%2013h4%22%2F%3E%20%3C%2Fsvg%3E",
  "binoculars": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M10%2010h4%22%2F%3E%20%3Cpath%20d%3D%22M19%207V4a1%201%200%200%200-1-1h-2a1%201%200%200%200-1%201v3%22%2F%3E%20%3Cpath%20d%3D%22M20%2021a2%202%200%200%200%202-2v-3.851c0-1.39-2-2.962-2-4.829V8a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v11a2%202%200%200%200%202%202z%22%2F%3E%20%3Cpath%20d%3D%22M%2022%2016%20L%202%2016%22%2F%3E%20%3Cpath%20d%3D%22M4%2021a2%202%200%200%201-2-2v-3.851c0-1.39%202-2.962%202-4.829V8a1%201%200%200%201%201-1h4a1%201%200%200%201%201%201v11a2%202%200%200%201-2%202z%22%2F%3E%20%3Cpath%20d%3D%22M9%207V4a1%201%200%200%200-1-1H6a1%201%200%200%200-1%201v3%22%2F%3E%20%3C%2Fsvg%3E",
  "car-front": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m21%208-2%202-1.5-3.7A2%202%200%200%200%2015.646%205H8.4a2%202%200%200%200-1.903%201.257L5%2010%203%208%22%2F%3E%20%3Cpath%20d%3D%22M7%2014h.01%22%2F%3E%20%3Cpath%20d%3D%22M17%2014h.01%22%2F%3E%20%3Crect%20width%3D%2218%22%20height%3D%228%22%20x%3D%223%22%20y%3D%2210%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M5%2018v2%22%2F%3E%20%3Cpath%20d%3D%22M19%2018v2%22%2F%3E%20%3C%2Fsvg%3E",
  "truck": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M14%2018V6a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v11a1%201%200%200%200%201%201h2%22%2F%3E%20%3Cpath%20d%3D%22M15%2018H9%22%2F%3E%20%3Cpath%20d%3D%22M19%2018h2a1%201%200%200%200%201-1v-3.65a1%201%200%200%200-.22-.624l-3.48-4.35A1%201%200%200%200%2017.52%208H14%22%2F%3E%20%3Ccircle%20cx%3D%2217%22%20cy%3D%2218%22%20r%3D%222%22%2F%3E%20%3Ccircle%20cx%3D%227%22%20cy%3D%2218%22%20r%3D%222%22%2F%3E%20%3C%2Fsvg%3E",
  "caravan": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M18%2019V9a4%204%200%200%200-4-4H6a4%204%200%200%200-4%204v8a2%202%200%200%200%202%202h2%22%2F%3E%20%3Cpath%20d%3D%22M2%209h3a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H2%22%2F%3E%20%3Cpath%20d%3D%22M22%2017v1a1%201%200%200%201-1%201H10v-9a1%201%200%200%201%201-1h2a1%201%200%200%201%201%201v9%22%2F%3E%20%3Ccircle%20cx%3D%228%22%20cy%3D%2219%22%20r%3D%222%22%2F%3E%20%3C%2Fsvg%3E",
  "tractor": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m10%2011%2011%20.9a1%201%200%200%201%20.8%201.1l-.665%204.158a1%201%200%200%201-.988.842H20%22%2F%3E%20%3Cpath%20d%3D%22M16%2018h-5%22%2F%3E%20%3Cpath%20d%3D%22M18%205a1%201%200%200%200-1%201v5.573%22%2F%3E%20%3Cpath%20d%3D%22M3%204h8.129a1%201%200%200%201%20.99.863L13%2011.246%22%2F%3E%20%3Cpath%20d%3D%22M4%2011V4%22%2F%3E%20%3Cpath%20d%3D%22M7%2015h.01%22%2F%3E%20%3Cpath%20d%3D%22M8%2010.1V4%22%2F%3E%20%3Ccircle%20cx%3D%2218%22%20cy%3D%2218%22%20r%3D%222%22%2F%3E%20%3Ccircle%20cx%3D%227%22%20cy%3D%2215%22%20r%3D%225%22%2F%3E%20%3C%2Fsvg%3E",
  "fuel": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%223%22%20x2%3D%2215%22%20y1%3D%2222%22%20y2%3D%2222%22%2F%3E%20%3Cline%20x1%3D%224%22%20x2%3D%2214%22%20y1%3D%229%22%20y2%3D%229%22%2F%3E%20%3Cpath%20d%3D%22M14%2022V4a2%202%200%200%200-2-2H6a2%202%200%200%200-2%202v18%22%2F%3E%20%3Cpath%20d%3D%22M14%2013h2a2%202%200%200%201%202%202v2a2%202%200%200%200%202%202a2%202%200%200%200%202-2V9.83a2%202%200%200%200-.59-1.42L18%205%22%2F%3E%20%3C%2Fsvg%3E",
  "wrench": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M14.7%206.3a1%201%200%200%200%200%201.4l1.6%201.6a1%201%200%200%200%201.4%200l3.77-3.77a6%206%200%200%201-7.94%207.94l-6.91%206.91a2.12%202.12%200%200%201-3-3l6.91-6.91a6%206%200%200%201%207.94-7.94l-3.76%203.76z%22%2F%3E%20%3C%2Fsvg%3E",
  "gauge": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m12%2014%204-4%22%2F%3E%20%3Cpath%20d%3D%22M3.34%2019a10%2010%200%201%201%2017.32%200%22%2F%3E%20%3C%2Fsvg%3E",
  "cog": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2020a8%208%200%201%200%200-16%208%208%200%200%200%200%2016Z%22%2F%3E%20%3Cpath%20d%3D%22M12%2014a2%202%200%201%200%200-4%202%202%200%200%200%200%204Z%22%2F%3E%20%3Cpath%20d%3D%22M12%202v2%22%2F%3E%20%3Cpath%20d%3D%22M12%2022v-2%22%2F%3E%20%3Cpath%20d%3D%22m17%2020.66-1-1.73%22%2F%3E%20%3Cpath%20d%3D%22M11%2010.27%207%203.34%22%2F%3E%20%3Cpath%20d%3D%22m20.66%2017-1.73-1%22%2F%3E%20%3Cpath%20d%3D%22m3.34%207%201.73%201%22%2F%3E%20%3Cpath%20d%3D%22M14%2012h8%22%2F%3E%20%3Cpath%20d%3D%22M2%2012h2%22%2F%3E%20%3Cpath%20d%3D%22m20.66%207-1.73%201%22%2F%3E%20%3Cpath%20d%3D%22m3.34%2017%201.73-1%22%2F%3E%20%3Cpath%20d%3D%22m17%203.34-1%201.73%22%2F%3E%20%3Cpath%20d%3D%22m11%2013.73-4%206.93%22%2F%3E%20%3C%2Fsvg%3E",
  "battery-charging": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M15%207h1a2%202%200%200%201%202%202v6a2%202%200%200%201-2%202h-2%22%2F%3E%20%3Cpath%20d%3D%22M6%207H4a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h1%22%2F%3E%20%3Cpath%20d%3D%22m11%207-3%205h4l-3%205%22%2F%3E%20%3Cline%20x1%3D%2222%22%20x2%3D%2222%22%20y1%3D%2211%22%20y2%3D%2213%22%2F%3E%20%3C%2Fsvg%3E",
  "house": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M15%2021v-8a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v8%22%2F%3E%20%3Cpath%20d%3D%22M3%2010a2%202%200%200%201%20.709-1.528l7-5.999a2%202%200%200%201%202.582%200l7%205.999A2%202%200%200%201%2021%2010v9a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2z%22%2F%3E%20%3C%2Fsvg%3E",
  "tent": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3.5%2021%2014%203%22%2F%3E%20%3Cpath%20d%3D%22M20.5%2021%2010%203%22%2F%3E%20%3Cpath%20d%3D%22M15.5%2021%2012%2015l-3.5%206%22%2F%3E%20%3Cpath%20d%3D%22M2%2021h20%22%2F%3E%20%3C%2Fsvg%3E",
  "bed-double": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2%2020v-8a2%202%200%200%201%202-2h16a2%202%200%200%201%202%202v8%22%2F%3E%20%3Cpath%20d%3D%22M4%2010V6a2%202%200%200%201%202-2h12a2%202%200%200%201%202%202v4%22%2F%3E%20%3Cpath%20d%3D%22M12%204v6%22%2F%3E%20%3Cpath%20d%3D%22M2%2018h20%22%2F%3E%20%3C%2Fsvg%3E",
  "plug-zap": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M6.3%2020.3a2.4%202.4%200%200%200%203.4%200L12%2018l-6-6-2.3%202.3a2.4%202.4%200%200%200%200%203.4Z%22%2F%3E%20%3Cpath%20d%3D%22m2%2022%203-3%22%2F%3E%20%3Cpath%20d%3D%22M7.5%2013.5%2010%2011%22%2F%3E%20%3Cpath%20d%3D%22M10.5%2016.5%2013%2014%22%2F%3E%20%3Cpath%20d%3D%22m18%203-4%204h6l-4%204%22%2F%3E%20%3C%2Fsvg%3E",
  "shower-head": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m4%204%202.5%202.5%22%2F%3E%20%3Cpath%20d%3D%22M13.5%206.5a4.95%204.95%200%200%200-7%207%22%2F%3E%20%3Cpath%20d%3D%22M15%205%205%2015%22%2F%3E%20%3Cpath%20d%3D%22M14%2017v.01%22%2F%3E%20%3Cpath%20d%3D%22M10%2016v.01%22%2F%3E%20%3Cpath%20d%3D%22M13%2013v.01%22%2F%3E%20%3Cpath%20d%3D%22M16%2010v.01%22%2F%3E%20%3Cpath%20d%3D%22M11%2020v.01%22%2F%3E%20%3Cpath%20d%3D%22M17%2014v.01%22%2F%3E%20%3Cpath%20d%3D%22M20%2011v.01%22%2F%3E%20%3C%2Fsvg%3E",
  "bath": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M10%204%208%206%22%2F%3E%20%3Cpath%20d%3D%22M17%2019v2%22%2F%3E%20%3Cpath%20d%3D%22M2%2012h20%22%2F%3E%20%3Cpath%20d%3D%22M7%2019v2%22%2F%3E%20%3Cpath%20d%3D%22M9%205%207.621%203.621A2.121%202.121%200%200%200%204%205v12a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-5%22%2F%3E%20%3C%2Fsvg%3E",
  "flame": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M8.5%2014.5A2.5%202.5%200%200%200%2011%2012c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054%202-6%20.5%202.5%202%204.9%204%206.5%202%201.6%203%203.5%203%205.5a7%207%200%201%201-14%200c0-1.153.433-2.294%201-3a2.5%202.5%200%200%200%202.5%202.5z%22%2F%3E%20%3C%2Fsvg%3E",
  "flame-kindling": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%202c1%203%202.5%203.5%203.5%204.5A5%205%200%200%201%2017%2010a5%205%200%201%201-10%200c0-.3%200-.6.1-.9a2%202%200%201%200%203.3-2C8%204.5%2011%202%2012%202Z%22%2F%3E%20%3Cpath%20d%3D%22m5%2022%2014-4%22%2F%3E%20%3Cpath%20d%3D%22m5%2018%2014%204%22%2F%3E%20%3C%2Fsvg%3E",
  "dog": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M11.25%2016.25h1.5L12%2017z%22%2F%3E%20%3Cpath%20d%3D%22M16%2014v.5%22%2F%3E%20%3Cpath%20d%3D%22M4.42%2011.247A13.152%2013.152%200%200%200%204%2014.556C4%2018.728%207.582%2021%2012%2021s8-2.272%208-6.444a11.702%2011.702%200%200%200-.493-3.309%22%2F%3E%20%3Cpath%20d%3D%22M8%2014v.5%22%2F%3E%20%3Cpath%20d%3D%22M8.5%208.5c-.384%201.05-1.083%202.028-2.344%202.5-1.931.722-3.576-.297-3.656-1-.113-.994%201.177-6.53%204-7%201.923-.321%203.651.845%203.651%202.235A7.497%207.497%200%200%201%2014%205.277c0-1.39%201.844-2.598%203.767-2.277%202.823.47%204.113%206.006%204%207-.08.703-1.725%201.722-3.656%201-1.261-.472-1.855-1.45-2.239-2.5%22%2F%3E%20%3C%2Fsvg%3E",
  "wifi-off": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2020h.01%22%2F%3E%20%3Cpath%20d%3D%22M8.5%2016.429a5%205%200%200%201%207%200%22%2F%3E%20%3Cpath%20d%3D%22M5%2012.859a10%2010%200%200%201%205.17-2.69%22%2F%3E%20%3Cpath%20d%3D%22M19%2012.859a10%2010%200%200%200-2.007-1.523%22%2F%3E%20%3Cpath%20d%3D%22M2%208.82a15%2015%200%200%201%204.177-2.643%22%2F%3E%20%3Cpath%20d%3D%22M22%208.82a15%2015%200%200%200-11.288-3.764%22%2F%3E%20%3Cpath%20d%3D%22m2%202%2020%2020%22%2F%3E%20%3C%2Fsvg%3E",
  "trash-2": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3%206h18%22%2F%3E%20%3Cpath%20d%3D%22M19%206v14c0%201-1%202-2%202H7c-1%200-2-1-2-2V6%22%2F%3E%20%3Cpath%20d%3D%22M8%206V4c0-1%201-2%202-2h4c1%200%202%201%202%202v2%22%2F%3E%20%3Cline%20x1%3D%2210%22%20x2%3D%2210%22%20y1%3D%2211%22%20y2%3D%2217%22%2F%3E%20%3Cline%20x1%3D%2214%22%20x2%3D%2214%22%20y1%3D%2211%22%20y2%3D%2217%22%2F%3E%20%3C%2Fsvg%3E",
  "key-round": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2.586%2017.414A2%202%200%200%200%202%2018.828V21a1%201%200%200%200%201%201h3a1%201%200%200%200%201-1v-1a1%201%200%200%201%201-1h1a1%201%200%200%200%201-1v-1a1%201%200%200%201%201-1h.172a2%202%200%200%200%201.414-.586l.814-.814a6.5%206.5%200%201%200-4-4z%22%2F%3E%20%3Ccircle%20cx%3D%2216.5%22%20cy%3D%227.5%22%20r%3D%22.5%22%20fill%3D%22currentColor%22%2F%3E%20%3C%2Fsvg%3E",
  "utensils": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3%202v7c0%201.1.9%202%202%202h4a2%202%200%200%200%202-2V2%22%2F%3E%20%3Cpath%20d%3D%22M7%202v20%22%2F%3E%20%3Cpath%20d%3D%22M21%2015V2a5%205%200%200%200-5%205v6c0%201.1.9%202%202%202h3Zm0%200v7%22%2F%3E%20%3C%2Fsvg%3E",
  "cooking-pot": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2%2012h20%22%2F%3E%20%3Cpath%20d%3D%22M20%2012v8a2%202%200%200%201-2%202H6a2%202%200%200%201-2-2v-8%22%2F%3E%20%3Cpath%20d%3D%22m4%208%2016-4%22%2F%3E%20%3Cpath%20d%3D%22m8.86%206.78-.45-1.81a2%202%200%200%201%201.45-2.43l1.94-.48a2%202%200%200%201%202.43%201.46l.45%201.8%22%2F%3E%20%3C%2Fsvg%3E",
  "store": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m2%207%204.41-4.41A2%202%200%200%201%207.83%202h8.34a2%202%200%200%201%201.42.59L22%207%22%2F%3E%20%3Cpath%20d%3D%22M4%2012v8a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-8%22%2F%3E%20%3Cpath%20d%3D%22M15%2022v-4a2%202%200%200%200-2-2h-2a2%202%200%200%200-2%202v4%22%2F%3E%20%3Cpath%20d%3D%22M2%207h20%22%2F%3E%20%3Cpath%20d%3D%22M22%207v3a2%202%200%200%201-2%202a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%2016%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%2012%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%208%2012a2.7%202.7%200%200%201-1.59-.63.7.7%200%200%200-.82%200A2.7%202.7%200%200%201%204%2012a2%202%200%200%201-2-2V7%22%2F%3E%20%3C%2Fsvg%3E",
  "calendar-days": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M8%202v4%22%2F%3E%20%3Cpath%20d%3D%22M16%202v4%22%2F%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%224%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M3%2010h18%22%2F%3E%20%3Cpath%20d%3D%22M8%2014h.01%22%2F%3E%20%3Cpath%20d%3D%22M12%2014h.01%22%2F%3E%20%3Cpath%20d%3D%22M16%2014h.01%22%2F%3E%20%3Cpath%20d%3D%22M8%2018h.01%22%2F%3E%20%3Cpath%20d%3D%22M12%2018h.01%22%2F%3E%20%3Cpath%20d%3D%22M16%2018h.01%22%2F%3E%20%3C%2Fsvg%3E",
  "calendar-check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M8%202v4%22%2F%3E%20%3Cpath%20d%3D%22M16%202v4%22%2F%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%224%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M3%2010h18%22%2F%3E%20%3Cpath%20d%3D%22m9%2016%202%202%204-4%22%2F%3E%20%3C%2Fsvg%3E",
  "calendar-x": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M8%202v4%22%2F%3E%20%3Cpath%20d%3D%22M16%202v4%22%2F%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%224%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M3%2010h18%22%2F%3E%20%3Cpath%20d%3D%22m14%2014-4%204%22%2F%3E%20%3Cpath%20d%3D%22m10%2014%204%204%22%2F%3E%20%3C%2Fsvg%3E",
  "calendar-range": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%224%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M16%202v4%22%2F%3E%20%3Cpath%20d%3D%22M3%2010h18%22%2F%3E%20%3Cpath%20d%3D%22M8%202v4%22%2F%3E%20%3Cpath%20d%3D%22M17%2014h-6%22%2F%3E%20%3Cpath%20d%3D%22M13%2018H7%22%2F%3E%20%3Cpath%20d%3D%22M7%2014h.01%22%2F%3E%20%3Cpath%20d%3D%22M17%2018h.01%22%2F%3E%20%3C%2Fsvg%3E",
  "ticket": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2%209a3%203%200%200%201%200%206v2a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2v-2a3%203%200%200%201%200-6V7a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202Z%22%2F%3E%20%3Cpath%20d%3D%22M13%205v2%22%2F%3E%20%3Cpath%20d%3D%22M13%2017v2%22%2F%3E%20%3Cpath%20d%3D%22M13%2011v2%22%2F%3E%20%3C%2Fsvg%3E",
  "credit-card": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2220%22%20height%3D%2214%22%20x%3D%222%22%20y%3D%225%22%20rx%3D%222%22%2F%3E%20%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%2210%22%20y2%3D%2210%22%2F%3E%20%3C%2Fsvg%3E",
  "receipt": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M4%202v20l2-1%202%201%202-1%202%201%202-1%202%201%202-1%202%201V2l-2%201-2-1-2%201-2-1-2%201-2-1-2%201Z%22%2F%3E%20%3Cpath%20d%3D%22M16%208h-6a2%202%200%201%200%200%204h4a2%202%200%201%201%200%204H8%22%2F%3E%20%3Cpath%20d%3D%22M12%2017.5v-11%22%2F%3E%20%3C%2Fsvg%3E",
  "wallet": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M19%207V4a1%201%200%200%200-1-1H5a2%202%200%200%200%200%204h15a1%201%200%200%201%201%201v4h-3a2%202%200%200%200%200%204h3a1%201%200%200%200%201-1v-2a1%201%200%200%200-1-1%22%2F%3E%20%3Cpath%20d%3D%22M3%205v14a2%202%200%200%200%202%202h15a1%201%200%200%200%201-1v-4%22%2F%3E%20%3C%2Fsvg%3E",
  "tag": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12.586%202.586A2%202%200%200%200%2011.172%202H4a2%202%200%200%200-2%202v7.172a2%202%200%200%200%20.586%201.414l8.704%208.704a2.426%202.426%200%200%200%203.42%200l6.58-6.58a2.426%202.426%200%200%200%200-3.42z%22%2F%3E%20%3Ccircle%20cx%3D%227.5%22%20cy%3D%227.5%22%20r%3D%22.5%22%20fill%3D%22currentColor%22%2F%3E%20%3C%2Fsvg%3E",
  "users": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M16%2021v-2a4%204%200%200%200-4-4H6a4%204%200%200%200-4%204v2%22%2F%3E%20%3Ccircle%20cx%3D%229%22%20cy%3D%227%22%20r%3D%224%22%2F%3E%20%3Cpath%20d%3D%22M22%2021v-2a4%204%200%200%200-3-3.87%22%2F%3E%20%3Cpath%20d%3D%22M16%203.13a4%204%200%200%201%200%207.75%22%2F%3E%20%3C%2Fsvg%3E",
  "user": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M19%2021v-2a4%204%200%200%200-4-4H9a4%204%200%200%200-4%204v2%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22%2F%3E%20%3C%2Fsvg%3E",
  "baby": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M9%2012h.01%22%2F%3E%20%3Cpath%20d%3D%22M15%2012h.01%22%2F%3E%20%3Cpath%20d%3D%22M10%2016c.5.3%201.2.5%202%20.5s1.5-.2%202-.5%22%2F%3E%20%3Cpath%20d%3D%22M19%206.3a9%209%200%200%201%201.8%203.9%202%202%200%200%201%200%203.6%209%209%200%200%201-17.6%200%202%202%200%200%201%200-3.6A9%209%200%200%201%2012%203c2%200%203.5%201.1%203.5%202.5s-.9%202.5-2%202.5c-.8%200-1.5-.4-1.5-1%22%2F%3E%20%3C%2Fsvg%3E",
  "shopping-bag": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M6%202%203%206v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V6l-3-4Z%22%2F%3E%20%3Cpath%20d%3D%22M3%206h18%22%2F%3E%20%3Cpath%20d%3D%22M16%2010a4%204%200%200%201-8%200%22%2F%3E%20%3C%2Fsvg%3E",
  "clock": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpolyline%20points%3D%2212%206%2012%2012%2016%2014%22%2F%3E%20%3C%2Fsvg%3E",
  "timer": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%2210%22%20x2%3D%2214%22%20y1%3D%222%22%20y2%3D%222%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2215%22%20y1%3D%2214%22%20y2%3D%2211%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2214%22%20r%3D%228%22%2F%3E%20%3C%2Fsvg%3E",
  "badge-check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3.85%208.62a4%204%200%200%201%204.78-4.77%204%204%200%200%201%206.74%200%204%204%200%200%201%204.78%204.78%204%204%200%200%201%200%206.74%204%204%200%200%201-4.77%204.78%204%204%200%200%201-6.75%200%204%204%200%200%201-4.78-4.77%204%204%200%200%201%200-6.76Z%22%2F%3E%20%3Cpath%20d%3D%22m9%2012%202%202%204-4%22%2F%3E%20%3C%2Fsvg%3E",
  "trophy": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M6%209H4.5a2.5%202.5%200%200%201%200-5H6%22%2F%3E%20%3Cpath%20d%3D%22M18%209h1.5a2.5%202.5%200%200%200%200-5H18%22%2F%3E%20%3Cpath%20d%3D%22M4%2022h16%22%2F%3E%20%3Cpath%20d%3D%22M10%2014.66V17c0%20.55-.47.98-.97%201.21C7.85%2018.75%207%2020.24%207%2022%22%2F%3E%20%3Cpath%20d%3D%22M14%2014.66V17c0%20.55.47.98.97%201.21C16.15%2018.75%2017%2020.24%2017%2022%22%2F%3E%20%3Cpath%20d%3D%22M18%202H6v7a6%206%200%200%200%2012%200V2Z%22%2F%3E%20%3C%2Fsvg%3E",
  "medal": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7.21%2015%202.66%207.14a2%202%200%200%201%20.13-2.2L4.4%202.8A2%202%200%200%201%206%202h12a2%202%200%200%201%201.6.8l1.6%202.14a2%202%200%200%201%20.14%202.2L16.79%2015%22%2F%3E%20%3Cpath%20d%3D%22M11%2012%205.12%202.2%22%2F%3E%20%3Cpath%20d%3D%22m13%2012%205.88-9.8%22%2F%3E%20%3Cpath%20d%3D%22M8%207h8%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2217%22%20r%3D%225%22%2F%3E%20%3Cpath%20d%3D%22M12%2018v-2h-.5%22%2F%3E%20%3C%2Fsvg%3E",
  "megaphone": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m3%2011%2018-5v12L3%2014v-3z%22%2F%3E%20%3Cpath%20d%3D%22M11.6%2016.8a3%203%200%201%201-5.8-1.6%22%2F%3E%20%3C%2Fsvg%3E",
  "music": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M9%2018V5l12-2v13%22%2F%3E%20%3Ccircle%20cx%3D%226%22%20cy%3D%2218%22%20r%3D%223%22%2F%3E%20%3Ccircle%20cx%3D%2218%22%20cy%3D%2216%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "camera": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M14.5%204h-5L7%207H4a2%202%200%200%200-2%202v9a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2V9a2%202%200%200%200-2-2h-3l-2.5-3z%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "video": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m16%2013%205.223%203.482a.5.5%200%200%200%20.777-.416V7.87a.5.5%200%200%200-.752-.432L16%2010.5%22%2F%3E%20%3Crect%20x%3D%222%22%20y%3D%226%22%20width%3D%2214%22%20height%3D%2212%22%20rx%3D%222%22%2F%3E%20%3C%2Fsvg%3E",
  "shield-check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z%22%2F%3E%20%3Cpath%20d%3D%22m9%2012%202%202%204-4%22%2F%3E%20%3C%2Fsvg%3E",
  "triangle-alert": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m21.73%2018-8-14a2%202%200%200%200-3.48%200l-8%2014A2%202%200%200%200%204%2021h16a2%202%200%200%200%201.73-3%22%2F%3E%20%3Cpath%20d%3D%22M12%209v4%22%2F%3E%20%3Cpath%20d%3D%22M12%2017h.01%22%2F%3E%20%3C%2Fsvg%3E",
  "octagon-alert": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%2016h.01%22%2F%3E%20%3Cpath%20d%3D%22M12%208v4%22%2F%3E%20%3Cpath%20d%3D%22M15.312%202a2%202%200%200%201%201.414.586l4.688%204.688A2%202%200%200%201%2022%208.688v6.624a2%202%200%200%201-.586%201.414l-4.688%204.688a2%202%200%200%201-1.414.586H8.688a2%202%200%200%201-1.414-.586l-4.688-4.688A2%202%200%200%201%202%2015.312V8.688a2%202%200%200%201%20.586-1.414l4.688-4.688A2%202%200%200%201%208.688%202z%22%2F%3E%20%3C%2Fsvg%3E",
  "info": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpath%20d%3D%22M12%2016v-4%22%2F%3E%20%3Cpath%20d%3D%22M12%208h.01%22%2F%3E%20%3C%2Fsvg%3E",
  "circle-help": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpath%20d%3D%22M9.09%209a3%203%200%200%201%205.83%201c0%202-3%203-3%203%22%2F%3E%20%3Cpath%20d%3D%22M12%2017h.01%22%2F%3E%20%3C%2Fsvg%3E",
  "heart-pulse": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M19%2014c1.49-1.46%203-3.21%203-5.5A5.5%205.5%200%200%200%2016.5%203c-1.76%200-3%20.5-4.5%202-1.5-1.5-2.74-2-4.5-2A5.5%205.5%200%200%200%202%208.5c0%202.3%201.5%204.05%203%205.5l7%207Z%22%2F%3E%20%3Cpath%20d%3D%22M3.22%2012H9.5l.5-1%202%204.5%202-7%201.5%203.5h5.27%22%2F%3E%20%3C%2Fsvg%3E",
  "siren": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7%2018v-6a5%205%200%201%201%2010%200v6%22%2F%3E%20%3Cpath%20d%3D%22M5%2021a1%201%200%200%200%201%201h12a1%201%200%200%200%201-1v-1a2%202%200%200%200-2-2H7a2%202%200%200%200-2%202z%22%2F%3E%20%3Cpath%20d%3D%22M21%2012h1%22%2F%3E%20%3Cpath%20d%3D%22M18.5%204.5%2018%205%22%2F%3E%20%3Cpath%20d%3D%22M2%2012h1%22%2F%3E%20%3Cpath%20d%3D%22M12%202v1%22%2F%3E%20%3Cpath%20d%3D%22m4.929%204.929.707.707%22%2F%3E%20%3Cpath%20d%3D%22M12%2012v6%22%2F%3E%20%3C%2Fsvg%3E",
  "ban": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpath%20d%3D%22m4.9%204.9%2014.2%2014.2%22%2F%3E%20%3C%2Fsvg%3E",
  "lock": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2211%22%20x%3D%223%22%20y%3D%2211%22%20rx%3D%222%22%20ry%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M7%2011V7a5%205%200%200%201%2010%200v4%22%2F%3E%20%3C%2Fsvg%3E",
  "file-text": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M15%202H6a2%202%200%200%200-2%202v16a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V7Z%22%2F%3E%20%3Cpath%20d%3D%22M14%202v4a2%202%200%200%200%202%202h4%22%2F%3E%20%3Cpath%20d%3D%22M10%209H8%22%2F%3E%20%3Cpath%20d%3D%22M16%2013H8%22%2F%3E%20%3Cpath%20d%3D%22M16%2017H8%22%2F%3E%20%3C%2Fsvg%3E",
  "life-buoy": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpath%20d%3D%22m4.93%204.93%204.24%204.24%22%2F%3E%20%3Cpath%20d%3D%22m14.83%209.17%204.24-4.24%22%2F%3E%20%3Cpath%20d%3D%22m14.83%2014.83%204.24%204.24%22%2F%3E%20%3Cpath%20d%3D%22m9.17%2014.83-4.24%204.24%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%224%22%2F%3E%20%3C%2Fsvg%3E",
  "hospital": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M12%206v4%22%2F%3E%20%3Cpath%20d%3D%22M14%2014h-4%22%2F%3E%20%3Cpath%20d%3D%22M14%2018h-4%22%2F%3E%20%3Cpath%20d%3D%22M14%208h-4%22%2F%3E%20%3Cpath%20d%3D%22M18%2012h2a2%202%200%200%201%202%202v6a2%202%200%200%201-2%202H4a2%202%200%200%201-2-2v-9a2%202%200%200%201%202-2h2%22%2F%3E%20%3Cpath%20d%3D%22M18%2022V4a2%202%200%200%200-2-2H8a2%202%200%200%200-2%202v18%22%2F%3E%20%3C%2Fsvg%3E",
  "construction": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20x%3D%222%22%20y%3D%226%22%20width%3D%2220%22%20height%3D%228%22%20rx%3D%221%22%2F%3E%20%3Cpath%20d%3D%22M17%2014v7%22%2F%3E%20%3Cpath%20d%3D%22M7%2014v7%22%2F%3E%20%3Cpath%20d%3D%22M17%203v3%22%2F%3E%20%3Cpath%20d%3D%22M7%203v3%22%2F%3E%20%3Cpath%20d%3D%22M10%2014%202.3%206.3%22%2F%3E%20%3Cpath%20d%3D%22m14%206%207.7%207.7%22%2F%3E%20%3Cpath%20d%3D%22m8%206%208%208%22%2F%3E%20%3C%2Fsvg%3E",
  "menu": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%226%22%20y2%3D%226%22%2F%3E%20%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2218%22%20y2%3D%2218%22%2F%3E%20%3C%2Fsvg%3E",
  "x": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M18%206%206%2018%22%2F%3E%20%3Cpath%20d%3D%22m6%206%2012%2012%22%2F%3E%20%3C%2Fsvg%3E",
  "search": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%2F%3E%20%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%2F%3E%20%3C%2Fsvg%3E",
  "chevron-down": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%20%3C%2Fsvg%3E",
  "chevron-up": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m18%2015-6-6-6%206%22%2F%3E%20%3C%2Fsvg%3E",
  "chevron-left": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%20%3C%2Fsvg%3E",
  "chevron-right": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%20%3C%2Fsvg%3E",
  "arrow-left": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m12%2019-7-7%207-7%22%2F%3E%20%3Cpath%20d%3D%22M19%2012H5%22%2F%3E%20%3C%2Fsvg%3E",
  "arrow-right": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%20%3Cpath%20d%3D%22m12%205%207%207-7%207%22%2F%3E%20%3C%2Fsvg%3E",
  "arrow-up-right": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7%207h10v10%22%2F%3E%20%3Cpath%20d%3D%22M7%2017%2017%207%22%2F%3E%20%3C%2Fsvg%3E",
  "plus": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%20%3Cpath%20d%3D%22M12%205v14%22%2F%3E%20%3C%2Fsvg%3E",
  "minus": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%20%3C%2Fsvg%3E",
  "check": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M20%206%209%2017l-5-5%22%2F%3E%20%3C%2Fsvg%3E",
  "sliders-horizontal": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cline%20x1%3D%2221%22%20x2%3D%2214%22%20y1%3D%224%22%20y2%3D%224%22%2F%3E%20%3Cline%20x1%3D%2210%22%20x2%3D%223%22%20y1%3D%224%22%20y2%3D%224%22%2F%3E%20%3Cline%20x1%3D%2221%22%20x2%3D%2212%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%228%22%20x2%3D%223%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3Cline%20x1%3D%2221%22%20x2%3D%2216%22%20y1%3D%2220%22%20y2%3D%2220%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%223%22%20y1%3D%2220%22%20y2%3D%2220%22%2F%3E%20%3Cline%20x1%3D%2214%22%20x2%3D%2214%22%20y1%3D%222%22%20y2%3D%226%22%2F%3E%20%3Cline%20x1%3D%228%22%20x2%3D%228%22%20y1%3D%2210%22%20y2%3D%2214%22%2F%3E%20%3Cline%20x1%3D%2216%22%20x2%3D%2216%22%20y1%3D%2218%22%20y2%3D%2222%22%2F%3E%20%3C%2Fsvg%3E",
  "list-filter": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3%206h18%22%2F%3E%20%3Cpath%20d%3D%22M7%2012h10%22%2F%3E%20%3Cpath%20d%3D%22M10%2018h4%22%2F%3E%20%3C%2Fsvg%3E",
  "heart": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M19%2014c1.49-1.46%203-3.21%203-5.5A5.5%205.5%200%200%200%2016.5%203c-1.76%200-3%20.5-4.5%202-1.5-1.5-2.74-2-4.5-2A5.5%205.5%200%200%200%202%208.5c0%202.3%201.5%204.05%203%205.5l7%207Z%22%2F%3E%20%3C%2Fsvg%3E",
  "share-2": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2218%22%20cy%3D%225%22%20r%3D%223%22%2F%3E%20%3Ccircle%20cx%3D%226%22%20cy%3D%2212%22%20r%3D%223%22%2F%3E%20%3Ccircle%20cx%3D%2218%22%20cy%3D%2219%22%20r%3D%223%22%2F%3E%20%3Cline%20x1%3D%228.59%22%20x2%3D%2215.42%22%20y1%3D%2213.51%22%20y2%3D%2217.49%22%2F%3E%20%3Cline%20x1%3D%2215.41%22%20x2%3D%228.59%22%20y1%3D%226.51%22%20y2%3D%2210.49%22%2F%3E%20%3C%2Fsvg%3E",
  "download": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M21%2015v4a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2v-4%22%2F%3E%20%3Cpolyline%20points%3D%227%2010%2012%2015%2017%2010%22%2F%3E%20%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2215%22%20y2%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "external-link": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M15%203h6v6%22%2F%3E%20%3Cpath%20d%3D%22M10%2014%2021%203%22%2F%3E%20%3Cpath%20d%3D%22M18%2013v6a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V8a2%202%200%200%201%202-2h6%22%2F%3E%20%3C%2Fsvg%3E",
  "image": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%222%22%20ry%3D%222%22%2F%3E%20%3Ccircle%20cx%3D%229%22%20cy%3D%229%22%20r%3D%222%22%2F%3E%20%3Cpath%20d%3D%22m21%2015-3.086-3.086a2%202%200%200%200-2.828%200L6%2021%22%2F%3E%20%3C%2Fsvg%3E",
  "maximize-2": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpolyline%20points%3D%2215%203%2021%203%2021%209%22%2F%3E%20%3Cpolyline%20points%3D%229%2021%203%2021%203%2015%22%2F%3E%20%3Cline%20x1%3D%2221%22%20x2%3D%2214%22%20y1%3D%223%22%20y2%3D%2210%22%2F%3E%20%3Cline%20x1%3D%223%22%20x2%3D%2210%22%20y1%3D%2221%22%20y2%3D%2214%22%2F%3E%20%3C%2Fsvg%3E",
  "ellipsis": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%2F%3E%20%3Ccircle%20cx%3D%2219%22%20cy%3D%2212%22%20r%3D%221%22%2F%3E%20%3Ccircle%20cx%3D%225%22%20cy%3D%2212%22%20r%3D%221%22%2F%3E%20%3C%2Fsvg%3E",
  "eye": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2.062%2012.348a1%201%200%200%201%200-.696%2010.75%2010.75%200%200%201%2019.876%200%201%201%200%200%201%200%20.696%2010.75%2010.75%200%200%201-19.876%200%22%2F%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%223%22%2F%3E%20%3C%2Fsvg%3E",
  "refresh-cw": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3%2012a9%209%200%200%201%209-9%209.75%209.75%200%200%201%206.74%202.74L21%208%22%2F%3E%20%3Cpath%20d%3D%22M21%203v5h-5%22%2F%3E%20%3Cpath%20d%3D%22M21%2012a9%209%200%200%201-9%209%209.75%209.75%200%200%201-6.74-2.74L3%2016%22%2F%3E%20%3Cpath%20d%3D%22M8%2016H3v5%22%2F%3E%20%3C%2Fsvg%3E",
  "log-in": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M15%203h4a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202h-4%22%2F%3E%20%3Cpolyline%20points%3D%2210%2017%2015%2012%2010%207%22%2F%3E%20%3Cline%20x1%3D%2215%22%20x2%3D%223%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%20%3C%2Fsvg%3E",
  "grid-2x2": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22M3%2012h18%22%2F%3E%20%3Cpath%20d%3D%22M12%203v18%22%2F%3E%20%3C%2Fsvg%3E",
  "list": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M3%2012h.01%22%2F%3E%20%3Cpath%20d%3D%22M3%2018h.01%22%2F%3E%20%3Cpath%20d%3D%22M3%206h.01%22%2F%3E%20%3Cpath%20d%3D%22M8%2012h13%22%2F%3E%20%3Cpath%20d%3D%22M8%2018h13%22%2F%3E%20%3Cpath%20d%3D%22M8%206h13%22%2F%3E%20%3C%2Fsvg%3E",
  "layers": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22m12.83%202.18a2%202%200%200%200-1.66%200L2.6%206.08a1%201%200%200%200%200%201.83l8.58%203.91a2%202%200%200%200%201.66%200l8.58-3.9a1%201%200%200%200%200-1.83Z%22%2F%3E%20%3Cpath%20d%3D%22m22%2017.65-9.17%204.16a2%202%200%200%201-1.66%200L2%2017.65%22%2F%3E%20%3Cpath%20d%3D%22m22%2012.65-9.17%204.16a2%202%200%200%201-1.66%200L2%2012.65%22%2F%3E%20%3C%2Fsvg%3E",
  "phone": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M22%2016.92v3a2%202%200%200%201-2.18%202%2019.79%2019.79%200%200%201-8.63-3.07%2019.5%2019.5%200%200%201-6-6%2019.79%2019.79%200%200%201-3.07-8.67A2%202%200%200%201%204.11%202h3a2%202%200%200%201%202%201.72%2012.84%2012.84%200%200%200%20.7%202.81%202%202%200%200%201-.45%202.11L8.09%209.91a16%2016%200%200%200%206%206l1.27-1.27a2%202%200%200%201%202.11-.45%2012.84%2012.84%200%200%200%202.81.7A2%202%200%200%201%2022%2016.92z%22%2F%3E%20%3C%2Fsvg%3E",
  "mail": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2220%22%20height%3D%2216%22%20x%3D%222%22%20y%3D%224%22%20rx%3D%222%22%2F%3E%20%3Cpath%20d%3D%22m22%207-8.97%205.7a1.94%201.94%200%200%201-2.06%200L2%207%22%2F%3E%20%3C%2Fsvg%3E",
  "message-circle": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M7.9%2020A9%209%200%201%200%204%2016.1L2%2022Z%22%2F%3E%20%3C%2Fsvg%3E",
  "globe": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%20%3Cpath%20d%3D%22M12%202a14.5%2014.5%200%200%200%200%2020%2014.5%2014.5%200%200%200%200-20%22%2F%3E%20%3Cpath%20d%3D%22M2%2012h20%22%2F%3E%20%3C%2Fsvg%3E",
  "facebook": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M18%202h-3a5%205%200%200%200-5%205v3H7v4h3v8h4v-8h3l1-4h-4V7a1%201%200%200%201%201-1h3z%22%2F%3E%20%3C%2Fsvg%3E",
  "instagram": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Crect%20width%3D%2220%22%20height%3D%2220%22%20x%3D%222%22%20y%3D%222%22%20rx%3D%225%22%20ry%3D%225%22%2F%3E%20%3Cpath%20d%3D%22M16%2011.37A4%204%200%201%201%2012.63%208%204%204%200%200%201%2016%2011.37z%22%2F%3E%20%3Cline%20x1%3D%2217.5%22%20x2%3D%2217.51%22%20y1%3D%226.5%22%20y2%3D%226.5%22%2F%3E%20%3C%2Fsvg%3E",
  "youtube": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%224%22%3E%20%3Cpath%20d%3D%22M2.5%2017a24.12%2024.12%200%200%201%200-10%202%202%200%200%201%201.4-1.4%2049.56%2049.56%200%200%201%2016.2%200A2%202%200%200%201%2021.5%207a24.12%2024.12%200%200%201%200%2010%202%202%200%200%201-1.4%201.4%2049.55%2049.55%200%200%201-16.2%200A2%202%200%200%201%202.5%2017%22%2F%3E%20%3Cpath%20d%3D%22m10%2015%205-3-5-3z%22%2F%3E%20%3C%2Fsvg%3E"
};
Object.assign(__ds_scope, { ICON_GROUPS, ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icons.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const FALLBACK = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  className,
  style,
  label
}) {
  const src = __ds_scope.ICONS[name];
  if (!src && typeof console !== 'undefined') console.warn(`Icon "${name}" is not in the Hawk Pride set; falling back to stock Lucide.`);
  return /*#__PURE__*/React.createElement("span", {
    className: ['hp-icon', className].filter(Boolean).join(' '),
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      width: size,
      height: size,
      '--hp-icon': `url("${src || FALLBACK + name + '.svg'}")`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Photo.jsx
try { (() => {
function Photo({
  src,
  alt = '',
  ratio = '4/3',
  scrim,
  caption,
  position,
  topLeft,
  topRight,
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-photo', className].filter(Boolean).join(' '),
    style: {
      '--hp-ratio': ratio,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: position ? {
      objectPosition: position
    } : undefined
  }) : /*#__PURE__*/React.createElement("div", {
    className: "hp-photo__ph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 22
  }), caption || 'Park photo'), scrim && /*#__PURE__*/React.createElement("div", {
    className: "hp-photo__scrim"
  }), topLeft && /*#__PURE__*/React.createElement("div", {
    className: "hp-photo__tl"
  }, topLeft), topRight && /*#__PURE__*/React.createElement("div", {
    className: "hp-photo__tr"
  }, topRight), children);
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Photo.jsx", error: String((e && e.message) || e) }); }

// components/content/TrailRow.jsx
try { (() => {
function TrailRow({
  number,
  name,
  level,
  vehicles,
  length,
  status,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hp-trail",
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyDown: e => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick(e);
      }
    },
    "aria-label": `Trail ${number}, ${name}, ${level}${status === 'closed' ? ', closed' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "hp-trail__num"
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-trail__name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "hp-trail__meta"
  }, /*#__PURE__*/React.createElement(__ds_scope.DifficultyBadge, {
    level: level
  }), vehicles && /*#__PURE__*/React.createElement("span", null, vehicles), length && /*#__PURE__*/React.createElement("span", null, length))), /*#__PURE__*/React.createElement("div", {
    className: "hp-trail__end"
  }, status === 'closed' ? /*#__PURE__*/React.createElement("span", {
    className: "hp-badge hp-badge--danger"
  }, "Closed") : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })));
}
Object.assign(__ds_scope, { TrailRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrailRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  icon,
  children,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['hp-badge', 'hp-badge--' + tone, className].filter(Boolean).join(' ')
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/EventCard.jsx
try { (() => {
function EventCard({
  title,
  month,
  day,
  dates,
  type,
  price,
  status,
  image,
  onClick,
  layout = 'stack'
}) {
  const st = status === 'soldout' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "danger"
  }, "Sold out") : status === 'few' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "warning"
  }, "Few spots left") : status === 'featured' ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, "Featured") : null;
  if (layout === 'row') return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    onClick: onClick,
    "aria-label": title + (dates ? ', ' + dates : ''),
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-date"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-date__m"
  }, month), /*#__PURE__*/React.createElement("div", {
    className: "hp-date__d"
  }, day)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hp-card__title",
    style: {
      fontSize: 20
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-days",
    size: 14
  }), dates), type && /*#__PURE__*/React.createElement("span", null, type))), st || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    style: {
      color: 'var(--text-muted)'
    }
  }));
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    onClick: onClick,
    "aria-label": title + (dates ? ', ' + dates : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    ratio: "16/10",
    caption: "Event photo",
    topLeft: st
  }), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__body",
    style: {
      flexDirection: 'row',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-date"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-date__m"
  }, month), /*#__PURE__*/React.createElement("div", {
    className: "hp-date__d"
  }, day)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, type && /*#__PURE__*/React.createElement("div", {
    className: "hp-eyebrow",
    style: {
      color: 'var(--gold-700)'
    }
  }, type), /*#__PURE__*/React.createElement("h3", {
    className: "hp-card__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-days",
    size: 14
  }), dates), price && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ticket",
    size: 14
  }), price)))));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function PriceCard({
  title,
  price,
  unit,
  description,
  features = [],
  highlight,
  badge,
  action,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-card hp-pricecard', highlight && 'hp-card--dark', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hp-card__title",
    style: {
      fontSize: 22
    }
  }, title), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: highlight ? 'gold' : 'dark'
  }, badge)), /*#__PURE__*/React.createElement("div", {
    className: "hp-price"
  }, "$", price, unit && /*#__PURE__*/React.createElement("small", null, unit)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: highlight ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, description), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "hp-pricecard__list"
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }), f))), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 4
    },
    className: highlight ? 'hp-on-dark' : ''
  }, action));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  block,
  icon,
  iconRight,
  href,
  children,
  className,
  ...rest
}) {
  const c = cx('hp-btn', 'hp-btn--' + variant, size !== 'md' && 'hp-btn--' + size, block && 'hp-btn--block', className);
  const s = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s
  }), children != null && children !== false && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s
  }));
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: c
  }, rest), inner) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: c
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  icon,
  label,
  variant = 'default',
  size = 'md',
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: cx('hp-iconbtn', variant !== 'default' && 'hp-iconbtn--' + variant, size === 'sm' && 'hp-iconbtn--sm', className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/LodgingCard.jsx
try { (() => {
function LodgingCard({
  name,
  kind,
  image,
  sleeps,
  features = [],
  price,
  unit = 'night',
  available = true,
  onClick
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    onClick: onClick,
    "aria-label": name + ', $' + price + ' per ' + unit + (available ? '' : ', booked')
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    caption: kind + ' photo',
    topLeft: !available && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: "dark"
    }, "Booked"),
    topRight: /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "heart",
      label: "Save",
      variant: "dark",
      size: "sm",
      onClick: e => e.stopPropagation(),
      onKeyDown: e => e.stopPropagation()
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, kind), /*#__PURE__*/React.createElement("h3", {
    className: "hp-card__title"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__meta"
  }, sleeps && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "users",
    size: 14
  }), "Sleeps ", sleeps), features.map(f => /*#__PURE__*/React.createElement("span", {
    key: f
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "hp-card__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-price"
  }, "$", price, /*#__PURE__*/React.createElement("small", null, "/ ", unit)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20
  }))));
}
Object.assign(__ds_scope, { LodgingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LodgingCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const IC = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'octagon-alert'
};
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  className
}) {
  if (tone === 'status' || tone === 'closed') return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: ['hp-alert hp-alert--status', tone === 'closed' && 'hp-alert--closed', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "hp-alert__dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, title), children && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", children)));
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'danger' ? 'alert' : 'status',
    className: ['hp-alert', 'hp-alert--' + tone, className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: IC[tone],
    size: 20,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "hp-alert__title"
  }, title), children), onClose && /*#__PURE__*/React.createElement("button", {
    className: "hp-alert__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  sheet = true,
  inline
}) {
  const ref = React.useRef(null);
  const tid = React.useId();
  React.useEffect(() => {
    if (!open || inline) return;
    const prev = document.activeElement;
    const el = ref.current;
    el && el.focus();
    const k = e => {
      if (e.key === 'Escape') {
        onClose && onClose();
      } else if (e.key === 'Tab' && el) {
        const f = el.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const a = f[0],
          z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('keydown', k);
      prev && prev.focus && prev.focus();
    };
  }, [open, inline]);
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    className: "hp-dialog",
    ref: ref,
    tabIndex: -1,
    role: "dialog",
    "aria-modal": inline ? undefined : true,
    "aria-labelledby": tid,
    style: {
      outline: 'none'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-dialog__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hp-dialog__title",
    id: tid
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "hp-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "hp-dialog__foot"
  }, footer));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-dialog__scrim', sheet && 'hp-dialog__scrim--sheet'].filter(Boolean).join(' '),
    onClick: onClose
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'default',
  actionLabel,
  onAction,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-toast', tone === 'error' && 'hp-toast--error'].filter(Boolean).join(' '),
    role: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || (tone === 'error' ? 'circle-alert' : 'circle-check'),
    size: 20,
    className: "hp-toast__icon"
  }), /*#__PURE__*/React.createElement("span", null, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    className: "hp-toast__action",
    onClick: onAction
  }, actionLabel));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  open
}) {
  const id = React.useId();
  const kid = React.isValidElement(children) ? React.cloneElement(children, {
    'aria-describedby': id
  }) : children;
  return /*#__PURE__*/React.createElement("span", {
    className: ['hp-tip', open && 'hp-tip--open'].filter(Boolean).join(' ')
  }, kid, /*#__PURE__*/React.createElement("span", {
    className: "hp-tip__bubble",
    role: "tooltip",
    id: id
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  disabled,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hp-check', disabled && 'hp-check--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hp-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "hp-check__sub"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  id,
  className,
  ...rest
}) {
  const fid = id || 'in-' + (label || '').replace(/\W+/g, '-').toLowerCase();
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-field', icon && 'hp-field--icon', error && 'hp-field--error', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "hp-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "hp-field__control"
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    className: "hp-field__lead"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || hint ? fid + '-hint' : undefined
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("div", {
    className: "hp-field__hint",
    id: fid + '-hint'
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  label,
  description,
  value = 0,
  min = 0,
  max = 99,
  onChange = () => {},
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-stepper', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hp-stepper__label"
  }, label), description && /*#__PURE__*/React.createElement("div", {
    className: "hp-stepper__sub"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "hp-stepper__ctl"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    label: 'Fewer ' + label,
    disabled: value <= min,
    onClick: () => onChange(Math.max(min, value - 1))
  }), /*#__PURE__*/React.createElement("span", {
    className: "hp-stepper__val",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    label: 'More ' + label,
    disabled: value >= max,
    onClick: () => onChange(Math.min(max, value + 1))
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  disabled,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hp-check', disabled && 'hp-check--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hp-check__box hp-check__box--radio"
  }), /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "hp-check__sub"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  className,
  ...rest
}) {
  const fid = id || 'sel-' + (label || '').replace(/\W+/g, '-').toLowerCase();
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-field', error && 'hp-field--error', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "hp-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "hp-field__control"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || hint ? fid + '-hint' : undefined
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    className: "hp-field__chev"
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    className: "hp-field__hint",
    id: fid + '-hint'
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  disabled,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['hp-check', disabled && 'hp-check--disabled', className].filter(Boolean).join(' '),
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "hp-switch__track"
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BookingBar.jsx
try { (() => {
function BookingBar({
  price,
  unit = 'night',
  summary,
  onSummary,
  ctaLabel = 'Reserve',
  onAction,
  sticky = true,
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['hp-bookbar', sticky && 'hp-bookbar--sticky'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-bookbar__sum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hp-bookbar__price"
  }, "$", price, /*#__PURE__*/React.createElement("small", null, " / ", unit)), summary && (onSummary ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hp-bookbar__sub",
    onClick: onSummary,
    style: {
      cursor: 'pointer'
    }
  }, summary) : /*#__PURE__*/React.createElement("div", {
    className: "hp-bookbar__sub",
    style: {
      textDecoration: 'none'
    }
  }, summary))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: onAction,
    disabled: disabled
  }, ctaLabel));
}
Object.assign(__ds_scope, { BookingBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BookingBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  logoSrc,
  links = [],
  current,
  onNavigate = () => {},
  onMenu,
  onBook,
  overlay,
  ctaLabel = 'Book now',
  showName = true
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: ['hp-header', overlay && 'hp-header--overlay'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    className: "hp-header__brand",
    "aria-label": "Hawk Pride Offroad, home"
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    className: "hp-header__logo"
  }), (showName || !logoSrc) && /*#__PURE__*/React.createElement("span", {
    className: "hp-header__name"
  }, /*#__PURE__*/React.createElement("span", null, "Hawk Pride"), /*#__PURE__*/React.createElement("span", null, "Offroad"))), /*#__PURE__*/React.createElement("nav", {
    className: "hp-header__nav",
    "aria-label": "Main"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: "hp-header__link",
    "aria-current": current === l.id ? 'page' : undefined,
    onClick: () => onNavigate(l.id)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "hp-header__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onBook
  }, ctaLabel), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Menu",
    variant: "dark",
    className: "hp-header__menu",
    onClick: onMenu
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange = () => {},
  variant = 'line',
  className,
  label
}) {
  const key = e => {
    const i = items.findIndex(t => t.id === value);
    let n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % items.length;else if (e.key === 'ArrowLeft') n = (i - 1 + items.length) % items.length;else if (e.key === 'Home') n = 0;else if (e.key === 'End') n = items.length - 1;
    if (n == null) return;
    e.preventDefault();
    onChange(items[n].id);
    const b = e.currentTarget.querySelectorAll('[role=tab]')[n];
    b && b.focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": label,
    onKeyDown: key,
    className: ['hp-tabs', variant === 'pill' && 'hp-tabs--pill', className].filter(Boolean).join(' ')
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    className: "hp-tab",
    "aria-selected": value === it.id,
    tabIndex: value === it.id ? 0 : -1,
    onClick: () => onChange(it.id)
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16
  }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "hp-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/book-parts.js
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge
  } = window.DS;
  const LABEL = {
    dates: 'Dates',
    stay: 'Stay',
    site: 'Site',
    party: 'Riders',
    admission: 'Admission',
    review: 'Review'
  };
  const needsSite = t => {
    const c = HP.cat(t.stay);
    return !!c && c.model === 'unit';
  };
  const stepsFor = t => ['dates', 'stay', ...(needsSite(t) ? ['site'] : []), 'party', 'admission', 'review'];
  const maxDays = t => Math.max(HP.openDays(t), t.arrive ? 1 : 0);
  function valid(s, t) {
    const av = HP.availability(t),
      n = HP.nights(t);
    switch (s) {
      case 'dates':
        return !!(t.arrive && t.depart && t.depart >= t.arrive);
      case 'stay':
        return !!t.stay && (t.stay === 'none' || n > 0 && av[t.stay] && av[t.stay].count > 0);
      case 'site':
        return !needsSite(t) || !!t.unit && (av[t.stay].free || []).includes(t.unit);
      case 'party':
        {
          if ((t.adults || 0) < 1) return false;
          if (HP.participants(t).some(p => !p.name || !p.name.trim())) return false;
          const u = HP.unit(t.unit);
          return !(u && HP.people(t) > u.sleeps);
        }
      case 'admission':
        return t.stay !== 'none' || (t.days || 0) > 0;
      default:
        return true;
    }
  }
  function Frame({
    step,
    children,
    aside,
    done
  }) {
    const {
      go,
      trip
    } = useApp();
    const S = stepsFor(trip);
    const idx = done ? S.length : S.indexOf(step);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--bg-page)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("header", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderBottom: '3px solid var(--gold-400)',
        position: 'sticky',
        top: 0,
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '10px var(--container-pad)',
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      "aria-label": "Hawk Pride Offroad, home",
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: HP_LOGO,
      alt: "",
      style: {
        height: 44
      }
    })), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Booking steps",
      style: {
        display: 'flex',
        gap: 2,
        flex: 1,
        overflowX: 'auto'
      }
    }, S.map((s, i) => {
      const past = i < idx,
        cur = i === idx;
      return /*#__PURE__*/React.createElement("button", {
        key: s,
        disabled: !past || !!done,
        onClick: () => go('book/' + s),
        "aria-current": cur ? 'step' : undefined,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'none',
          border: 0,
          color: cur ? 'var(--gold-400)' : past ? 'var(--stone-50)' : 'var(--text-inverse-muted)',
          font: 'inherit',
          fontSize: 14,
          fontWeight: 700,
          padding: '8px 10px',
          cursor: past && !done ? 'pointer' : 'default',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          fontSize: 12,
          background: cur ? 'var(--gold-400)' : past ? 'var(--stone-50)' : 'transparent',
          color: cur || past ? 'var(--black-950)' : 'inherit',
          border: cur || past ? 0 : '1.5px solid var(--text-inverse-muted)'
        }
      }, past ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14
      }) : i + 1), LABEL[s]);
    }), done && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--gold-400)',
        fontSize: 14,
        fontWeight: 700,
        padding: '8px 10px',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    }), done)), /*#__PURE__*/React.createElement("button", {
      onClick: () => go('home'),
      style: {
        background: 'none',
        border: 0,
        color: 'var(--stone-200)',
        font: 'inherit',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }), "Exit"))), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '40px var(--container-pad) 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bk-layout"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, children), /*#__PURE__*/React.createElement("aside", {
      className: "bk-aside",
      style: {
        position: 'sticky',
        top: 96
      }
    }, aside === undefined ? /*#__PURE__*/React.createElement(Summary, null) : aside))));
  }
  function StepHead({
    eyebrow,
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 28
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        margin: '6px 0 0',
        textWrap: 'balance'
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 17,
        color: 'var(--text-muted)',
        maxWidth: 600,
        textWrap: 'pretty'
      }
    }, sub));
  }
  function StepNav({
    back,
    next,
    label = 'Continue',
    ok = true,
    hint
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 36,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, back ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "arrow-left",
      onClick: back
    }, "Back") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, !ok && hint && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, hint), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      disabled: !ok,
      onClick: next
    }, label)));
  }
  function Summary({
    editable = true
  }) {
    const {
      trip: t,
      go
    } = useApp();
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      n = HP.nights(t),
      ev = HP.eventFor(t.arrive, t.depart),
      adm = HP.wantsAdmission(t) ? HP.admission(t) : 0,
      lod = HP.lodging(t);
    const Line = ({
      icon,
      label,
      value,
      to
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '12px 0',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20,
      style: {
        flex: 'none',
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, value || /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)',
        fontWeight: 400
      }
    }, "Not chosen yet"))), editable && value && to && /*#__PURE__*/React.createElement("a", {
      href: '#/book/' + to,
      onClick: e => {
        e.preventDefault();
        go('book/' + to);
      },
      style: {
        fontSize: 14,
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, "Edit"));
    const party = t.adults ? [t.adults + ' adult rider' + (t.adults > 1 ? 's' : ''), t.kids ? t.kids + ' child rider' + (t.kids > 1 ? 's' : '') : null, t.guests ? t.guests + ' guest' + (t.guests > 1 ? 's' : '') : null].filter(Boolean).join(', ') : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 22,
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Your Hawk Pride trip"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 30,
        margin: '4px 0 12px'
      }
    }, t.arrive && t.depart ? HP.range(t.arrive, t.depart) : 'Pick your dates'), ev && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "calendar-days"
    }, ev.title)), /*#__PURE__*/React.createElement(Line, {
      icon: "calendar-days",
      label: "Dates",
      value: t.arrive && t.depart ? n ? n + ' night' + (n > 1 ? 's' : '') : 'Day trip' : null,
      to: "dates"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: c ? c.icon : 'tent',
      label: "Stay",
      value: t.stay === 'none' ? 'No overnight stay' : c ? c.name + (u ? ' · ' + u.name : '') : null,
      to: "stay"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: "users",
      label: "Party",
      value: party,
      to: "party"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: "ticket",
      label: "Riding admission",
      value: t.stay && t.days ? HP.wantsAdmission(t) ? t.adults + ' × ' + t.days + ' day' + (t.days > 1 ? 's' : '') : 'Pay at the gate' : null,
      to: "admission"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '2px solid var(--black-950)',
        paddingTop: 14,
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, lod > 0 && /*#__PURE__*/React.createElement(Row, {
      l: c.name + ' · ' + n + ' night' + (n > 1 ? 's' : ''),
      v: HP.money(lod)
    }), adm > 0 && /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: HP.money(adm)
    }), t.kids > 0 && HP.wantsAdmission(t) && /*#__PURE__*/React.createElement(Row, {
      muted: true,
      l: "Child riders",
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: HP.money(HP.total(t))
    })));
  }
  function Calendar({
    arrive,
    depart,
    onPick
  }) {
    const s = HP.p(arrive || HP.today);
    const [m, setM] = React.useState(new Date(s.getFullYear(), s.getMonth(), 1));
    const [hover, setHover] = React.useState(null);
    const end = depart || (arrive && hover && hover > arrive ? hover : null);
    const pick = d => {
      if (!arrive || depart || d < arrive) onPick(d, null);else onPick(arrive, d);
    };
    const month = off => {
      const f = new Date(m.getFullYear(), m.getMonth() + off, 1),
        days = new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate(),
        cells = [];
      for (let i = 0; i < f.getDay(); i++) cells.push(null);
      for (let d = 1; d <= days; d++) cells.push(HP.iso(new Date(f.getFullYear(), f.getMonth(), d)));
      return /*#__PURE__*/React.createElement("div", {
        key: off,
        style: {
          flex: '1 1 280px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "hp-display",
        style: {
          fontSize: 22,
          textAlign: 'center',
          marginBottom: 10
        }
      }, HP.M[f.getMonth()], " ", f.getFullYear()), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(7,1fr)',
          gap: '2px 0',
          textAlign: 'center'
        }
      }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--text-muted)',
          padding: '4px 0'
        }
      }, d)), cells.map((d, i) => {
        if (!d) return /*#__PURE__*/React.createElement("span", {
          key: i
        });
        const past = d < HP.today,
          closed = !HP.open(d),
          isEnd = d === arrive || d === end,
          inR = arrive && end && d > arrive && d < end;
        return /*#__PURE__*/React.createElement("button", {
          key: d,
          className: "cal-day",
          disabled: past,
          "data-end": isEnd ? 1 : 0,
          "data-in": inR ? 1 : 0,
          "data-ev": HP.eventOn(d) ? 1 : 0,
          onMouseEnter: () => setHover(d),
          onClick: () => pick(d),
          title: HP.eventOn(d) ? HP.eventOn(d).title : closed ? 'Park closed for riding' : '',
          style: closed && !past && !isEnd ? {
            color: 'var(--text-subtle)'
          } : null
        }, HP.p(d).getDate());
      })));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: -34,
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'none'
      }
    }, [-1, 1].map(d => /*#__PURE__*/React.createElement("button", {
      key: d,
      "aria-label": d < 0 ? 'Previous month' : 'Next month',
      onClick: () => setM(new Date(m.getFullYear(), m.getMonth() + d, 1)),
      style: {
        pointerEvents: 'auto',
        width: 36,
        height: 36,
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        borderRadius: 4,
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: d < 0 ? 'chevron-left' : 'chevron-right',
      size: 18
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap'
      },
      onMouseLeave: () => setHover(null)
    }, month(0), month(1)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        marginTop: 14,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--gold-600)'
      }
    }), "Event weekend"), /*#__PURE__*/React.createElement("span", null, "Grey dates: park closed for riding (camping only)")));
  }
  Object.assign(window, {
    BK: {
      LABEL,
      needsSite,
      stepsFor,
      valid,
      maxDays
    },
    BkFrame: Frame,
    StepHead,
    StepNav,
    TripSummary: Summary,
    Calendar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/book-parts.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/book.js
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    QuantityStepper,
    Input,
    Photo,
    IconButton
  } = window.DS;
  function Dates() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const ev = HP.eventFor(t.arrive, t.depart),
      n = HP.nights(t);
    const W = HP.weekends(HP.today, 4);
    const set = (a, d) => {
      const nt = {
        ...t,
        arrive: a,
        depart: d
      };
      update({
        arrive: a,
        depart: d,
        days: d ? Math.max(HP.openDays(nt), 1) : 0,
        unit: null
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 1",
      title: "When are you coming?",
      sub: "Pick your arrival and departure. Tap one day twice for a day trip."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        alignSelf: 'center',
        marginRight: 4
      }
    }, "Quick pick:"), W.map(w => /*#__PURE__*/React.createElement("button", {
      key: w.arrive,
      className: "hp-chip",
      "aria-pressed": t.arrive === w.arrive && t.depart === w.depart,
      onClick: () => set(w.arrive, w.depart),
      style: {
        font: 'inherit',
        fontSize: 14,
        padding: '8px 14px',
        borderRadius: 999,
        border: '1.5px solid ' + (t.arrive === w.arrive && t.depart === w.depart ? 'var(--black-950)' : 'var(--border-default)'),
        background: t.arrive === w.arrive && t.depart === w.depart ? 'var(--black-950)' : 'var(--surface-card)',
        color: t.arrive === w.arrive && t.depart === w.depart ? 'var(--gold-400)' : 'inherit',
        cursor: 'pointer',
        fontWeight: 600
      }
    }, HP.range(w.arrive, w.depart), HP.eventFor(w.arrive, w.depart) ? ' · Event' : ''))), /*#__PURE__*/React.createElement(Calendar, {
      arrive: t.arrive,
      depart: t.depart,
      onPick: set
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 16
      }
    }, t.arrive && !t.depart && /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: 'Arriving ' + HP.fmtLong(t.arrive)
    }, "Now pick your departure day."), ev && /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: 'Your dates include ' + ev.title
    }, "It\u2019s an event weekend, so cabins and RV sites go fast. ", /*#__PURE__*/React.createElement(TextLink, {
      to: 'events/' + ev.id
    }, "See the event")), t.arrive && t.depart && HP.openDays(t) === 0 && /*#__PURE__*/React.createElement(Alert, {
      tone: "closed",
      title: "The park is closed for riding on these dates"
    }, "You can still camp. Riding is open Friday to Sunday and on event days.")), /*#__PURE__*/React.createElement(StepNav, {
      next: () => go('book/stay'),
      ok: BK.valid('dates', t),
      hint: "Pick arrival and departure"
    }));
  }
  function Stay() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const av = HP.availability(t),
      n = HP.nights(t);
    const C = window.HP_DATA.categories;
    const pick = id => update({
      stay: id,
      unit: t.stay === id ? t.unit : null,
      addAdmission: true
    });
    const price = c => HP.priceLabel(c.id);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 2",
      title: "Where are you staying?",
      sub: n ? n + ' night' + (n > 1 ? 's' : '') + ', ' + HP.range(t.arrive, t.depart) + '.' : 'Day trip on ' + HP.fmtLong(t.arrive) + '.'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, C.map(c => {
      const a = av[c.id],
        sold = a.count === 0,
        dis = sold || n === 0,
        sel = t.stay === c.id;
      return /*#__PURE__*/React.createElement("button", {
        key: c.id,
        className: "opt",
        "aria-pressed": sel,
        disabled: dis,
        onClick: () => pick(c.id)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          background: sel ? 'var(--black-950)' : 'var(--bg-sunken)',
          color: sel ? 'var(--gold-400)' : 'inherit',
          display: 'grid',
          placeItems: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: c.icon,
        size: 24
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 19
        }
      }, c.name), sold ? /*#__PURE__*/React.createElement(Badge, {
        tone: "danger"
      }, "Sold out") : c.model === 'unit' ? /*#__PURE__*/React.createElement(Badge, {
        tone: a.count <= 2 ? 'warning' : 'success'
      }, a.count, " available") : /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Open")), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: 15,
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, c.desc)), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'right',
          fontWeight: 700,
          whiteSpace: 'nowrap'
        }
      }, price(c)));
    }), /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": t.stay === 'none',
      onClick: () => update({
        stay: 'none',
        unit: null,
        addAdmission: true
      })
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: t.stay === 'none' ? 'var(--black-950)' : 'var(--bg-sunken)',
        color: t.stay === 'none' ? 'var(--gold-400)' : 'inherit',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 19
      }
    }, "No overnight stay"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Just riding admission.")))), n === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "Overnight options need at least one night. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "book/dates"
    }, "Change dates"))), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/dates'),
      next: () => go(BK.needsSite(t) ? 'book/site' : 'book/party'),
      ok: BK.valid('stay', t),
      hint: "Choose a stay"
    }));
  }
  function Site() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const c = HP.cat(t.stay);
    const av = HP.availability(t)[t.stay];
    const U = window.HP_DATA.units.filter(u => u.cat === t.stay);
    const [hl, setHl] = React.useState(null);
    const [view, setView] = React.useState(null);
    const n = HP.nights(t);
    const free = id => av.free.includes(id);
    const sorted = [...U].sort((a, b) => free(b.id) - free(a.id));
    const state = u => !free(u.id) ? 'taken' : t.unit === u.id ? 'sel' : hl === u.id ? 'hl' : 'free';
    const select = id => {
      update({
        unit: id
      });
      setView(null);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 3",
      title: 'Pick your ' + (t.stay === 'cabin' ? 'cabin' : 'site') + '.',
      sub: av.count + ' of ' + U.length + ' ' + c.plural.toLowerCase() + ' open for ' + HP.range(t.arrive, t.depart) + '. Hover a card to find it on the map.'
    }), /*#__PURE__*/React.createElement("div", {
      className: "bk-site"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxHeight: 640,
        overflowY: 'auto',
        paddingRight: 4
      }
    }, sorted.map(u => {
      const f = free(u.id);
      return /*#__PURE__*/React.createElement("div", {
        key: u.id,
        className: "unit",
        "data-hl": hl === u.id ? 1 : 0,
        "data-sel": t.unit === u.id ? 1 : 0,
        onMouseEnter: () => setHl(u.id),
        onMouseLeave: () => setHl(null),
        style: {
          opacity: f ? 1 : .55
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          minHeight: 90
        }
      }, /*#__PURE__*/React.createElement(Photo, {
        caption: u.name,
        ratio: "auto",
        style: {
          position: 'absolute',
          inset: 0,
          aspectRatio: 'auto',
          borderRadius: 0
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 17
        }
      }, u.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700
        }
      }, HP.money(u.price), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 400,
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, " / night"))), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: 'var(--text-muted)'
        }
      }, "Sleeps ", u.sleeps, u.beds ? ' · ' + u.beds : ''), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginTop: 'auto',
          paddingTop: 6,
          alignItems: 'center'
        }
      }, f ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: t.unit === u.id ? 'primary' : 'secondary',
        icon: t.unit === u.id ? 'check' : undefined,
        onClick: () => select(u.id)
      }, t.unit === u.id ? 'Selected' : 'Select'), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        onClick: () => setView(u)
      }, "View details")) : /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "Booked"))));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bk-map",
      style: {
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        position: 'relative',
        aspectRatio: '4/3.3',
        background: 'var(--stone-100)'
      }
    }, window.HP_DATA.landmarks.map(([l, x, y]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        position: 'absolute',
        left: x + '%',
        top: y + '%',
        transform: 'translate(-50%,-50%)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        background: 'rgba(255,255,255,.8)',
        padding: '2px 6px',
        borderRadius: 3,
        whiteSpace: 'nowrap'
      }
    }, l)), U.map(u => /*#__PURE__*/React.createElement("button", {
      key: u.id,
      className: "map-pin",
      "data-state": state(u),
      disabled: !free(u.id),
      style: {
        left: u.x + '%',
        top: u.y + '%'
      },
      onMouseEnter: () => setHl(u.id),
      onMouseLeave: () => setHl(null),
      onClick: () => setView(u),
      "aria-label": u.name + (free(u.id) ? '' : ' (booked)')
    }, u.name.replace(/\D+/g, '')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        padding: '10px 14px',
        fontSize: 13,
        color: 'var(--text-muted)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--gold-400)',
        border: '1.5px solid var(--black-950)'
      }
    }), "Available"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--stone-200)'
      }
    }), "Booked"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--black-950)'
      }
    }), "Your pick"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, "Sample map"))))), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/stay'),
      next: () => go('book/party'),
      ok: BK.valid('site', t),
      hint: "Select a site"
    }), view && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "drawer-scrim",
      onClick: () => setView(null)
    }), /*#__PURE__*/React.createElement("div", {
      className: "drawer",
      role: "dialog",
      "aria-label": view.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, view.name), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      onClick: () => setView(null)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: view.name + ' · photo',
      ratio: "16/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Interior",
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement(Photo, {
      caption: "Parking",
      ratio: "4/3"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17
      }
    }, view.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: "Sleeps",
      v: view.sleeps
    }), view.beds && /*#__PURE__*/React.createElement(Row, {
      l: "Beds",
      v: view.beds
    }), /*#__PURE__*/React.createElement(Row, {
      l: t.stay === 'cabin' ? 'Climate' : 'Hookups',
      v: t.stay === 'cabin' ? 'A/C and heat' : t.stay === 'powered' ? '50A electric, water' : 'None · generators OK'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Parking",
      v: "Truck and trailer"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Check-in / out",
      v: "2 PM / noon"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, HP.money(view.price * n)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, HP.money(view.price), " \xD7 ", n, " night", n > 1 ? 's' : '')), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => select(view.id)
    }, "Select ", view.name)))));
  }
  function Party() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const u = HP.unit(t.unit);
    const over = u && HP.people(t) > u.sleeps;
    const setN = (k, key, v) => update(s => {
      const names = {
        ...s.names
      };
      const arr = [...(names[key] || [])];
      while (arr.length < v) arr.push('');
      names[key] = arr;
      return {
        [k]: v,
        names
      };
    });
    const setName = (key, i, v) => update(s => {
      const names = {
        ...s.names
      };
      const arr = [...(names[key] || [])];
      arr[i] = v;
      names[key] = arr;
      return {
        names
      };
    });
    const group = (key, count, label) => Array.from({
      length: count
    }, (_, i) => /*#__PURE__*/React.createElement(Input, {
      key: key + i,
      label: label + ' ' + (i + 1),
      placeholder: "First and last name",
      value: (t.names[key] || [])[i] || '',
      onChange: e => setName(key, i, e.target.value)
    }));
    const back = BK.needsSite(t) ? 'book/site' : 'book/stay';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: 'Step ' + (BK.stepsFor(t).indexOf('party') + 1),
      title: "Who\u2019s coming?",
      sub: "We need a name for everyone so the gate can check you in and waivers go to the right people."
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: '4px 20px'
      }
    }, [['adults', 'a', 'Adult riders', 'Ages 13 and up', 1], ['kids', 'k', 'Child riders', '12 and under · ride free', 0], ['guests', 'g', 'Non-riding guests', 'Staying, not riding', 0]].map(([k, key, l, d, min], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        padding: '14px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 0
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: l,
      description: d,
      value: t[k],
      min: min,
      max: 12,
      onChange: v => setN(k, key, v)
    })))), over && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: u.name + ' sleeps ' + u.sleeps
    }, "You have ", HP.people(t), " people. Pick a bigger cabin or add a campsite in a second booking.")), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "Names"), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 14
      }
    }, group('a', t.adults, 'Adult rider'), group('k', t.kids, 'Child rider'), group('g', t.guests, 'Guest')), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go(back),
      next: () => go('book/admission'),
      ok: BK.valid('party', t),
      hint: over ? 'Too many people for this cabin' : 'Add a name for everyone'
    }));
  }
  function Admission() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const max = BK.maxDays(t);
    const none = t.stay === 'none';
    React.useEffect(() => {
      if (!t.days || t.days > max) update({
        days: max
      });
    }, []);
    const days = Math.min(t.days || max, max),
      want = none || t.addAdmission !== false;
    const P = window.HP_DATA.pricing;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: 'Step ' + (BK.stepsFor(t).indexOf('admission') + 1),
      title: none ? 'Riding admission.' : 'Add riding admission?',
      sub: none ? 'Pay now and go straight through the gate.' : 'Your stay doesn’t include riding. Add it now and skip the line at the gate.'
    }), !none && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": want,
      onClick: () => update({
        addAdmission: true
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, "Yes, add riding admission"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "For every adult rider in your party.")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, HP.money(t.adults * HP.admissionPer(days)))), /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": !want,
      onClick: () => update({
        addAdmission: false
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, "No, we\u2019ll pay at the gate"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "Or we\u2019re not riding this trip.")))), want && /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Riding days",
      description: max + ' open riding day' + (max > 1 ? 's' : '') + ' on your dates',
      value: days,
      min: 1,
      max: max,
      onChange: v => update({
        days: v
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + Math.min(days, 2) + ' day' + (Math.min(days, 2) > 1 ? 's' : '') + ' × ' + HP.money(P.day),
      v: HP.money(t.adults * P.day * Math.min(days, 2))
    }), days > 2 && /*#__PURE__*/React.createElement(Row, {
      l: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + (days - 2) + ' more day' + (days > 3 ? 's' : '') + ' × ' + HP.money(P.dayLater),
      v: HP.money(t.adults * P.dayLater * (days - 2))
    }), t.kids > 0 && /*#__PURE__*/React.createElement(Row, {
      muted: true,
      l: t.kids + ' child rider' + (t.kids > 1 ? 's' : '') + ' (12 and under)',
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Admission total",
      v: HP.money(HP.admission({
        ...t,
        days
      }))
    })), days > 2 && /*#__PURE__*/React.createElement(Callout, null, "Multi-day savings applied: ", HP.money(P.dayLater), " a day from day 3.")), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/party'),
      next: () => go('book/review'),
      ok: BK.valid('admission', t)
    }));
  }
  function Review() {
    const {
      trip: t,
      go
    } = useApp();
    const P = HP.participants(t);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Last step",
      title: "Your Hawk Pride trip.",
      sub: "Check everything over. You can edit any part before you pay."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(TripSummary, null), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, "Everyone on this trip"), /*#__PURE__*/React.createElement(TextLink, {
      to: "book/party"
    }, "Edit")), P.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, p.type, p.waiver ? ' · waiver needed' : '')))), /*#__PURE__*/React.createElement(Callout, null, "After you pay, each rider signs a waiver online. It takes about a minute per person.")), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/admission'),
      next: () => go('checkout'),
      label: "Checkout"
    }));
  }
  function Booking({
    step
  }) {
    const {
      trip: t,
      go
    } = useApp();
    const S = BK.stepsFor(t);
    const first = S.find((s, i) => i < S.indexOf(step) && !BK.valid(s, t));
    React.useEffect(() => {
      if (!S.includes(step)) go('book/' + (first || 'dates'));else if (first) go('book/' + first);
    }, [step, first]);
    const cur = S.includes(step) ? first || step : 'dates';
    const V = {
      dates: Dates,
      stay: Stay,
      site: Site,
      party: Party,
      admission: Admission,
      review: Review
    }[cur] || Dates;
    return /*#__PURE__*/React.createElement(BkFrame, {
      step: cur,
      aside: cur === 'review' ? /*#__PURE__*/React.createElement(NextSteps, {
        at: "review"
      }) : undefined
    }, /*#__PURE__*/React.createElement(V, null));
  }
  window.Booking = Booking;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/book.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/checkout.js
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    Input,
    Checkbox,
    Dialog
  } = window.DS;
  function NextSteps({
    at
  }) {
    const S = [['review', 'Review your trip'], ['pay', 'Pay securely'], ['waivers', 'Sign waivers'], ['pass', 'Get your gate pass']];
    const i = S.findIndex(s => s[0] === at);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 14,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "How it works"), S.map(([k, l], j) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontWeight: j === i ? 700 : 400,
        color: j < i ? 'var(--text-muted)' : 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        fontSize: 13,
        fontWeight: 700,
        background: j === i ? 'var(--black-950)' : j < i ? 'var(--stone-200)' : 'var(--surface-card)',
        color: j === i ? 'var(--gold-400)' : 'inherit',
        border: j > i ? '1.5px solid var(--border-default)' : 0
      }
    }, j < i ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : j + 1), l)));
  }
  function Checkout() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const c = t.contact || {};
    const [pm, setPm] = React.useState('card');
    const [card, setCard] = React.useState({
      n: '4242 4242 4242 4242',
      e: '08 / 28',
      v: '123',
      z: '35674'
    });
    const [agree, setAgree] = React.useState(false);
    const [busy, setBusy] = React.useState(false);
    const [tried, setTried] = React.useState(false);
    React.useEffect(() => {
      if (!t.arrive || !t.stay) go('book/dates');else if (t.paid) go('confirmation');
    }, []);
    const setC = (k, v) => update(s => ({
      contact: {
        ...s.contact,
        [k]: v
      }
    }));
    const err = {
      first: !c.first && 'Required',
      last: !c.last && 'Required',
      email: !/^\S+@\S+\.\S+$/.test(c.email || '') && 'Enter a valid email',
      phone: (c.phone || '').replace(/\D/g, '').length < 10 && 'Enter a 10-digit phone number'
    };
    const ok = !Object.values(err).some(Boolean) && agree;
    const pay = () => {
      setTried(true);
      if (!ok) return;
      setBusy(true);
      setTimeout(() => {
        const code = 'HP-' + String(Math.floor(10000 + Math.random() * 90000));
        update({
          paid: true,
          code,
          paidAt: Date.now()
        });
        go('waivers');
      }, 1400);
    };
    const e = k => tried ? err[k] || undefined : undefined;
    return /*#__PURE__*/React.createElement(BkFrame, {
      done: "Checkout",
      aside: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(TripSummary, {
        editable: false
      }), /*#__PURE__*/React.createElement(NextSteps, {
        at: "pay"
      }))
    }, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Checkout",
      title: "Almost there.",
      sub: "We\u2019ll send your confirmation and waiver links to this email and phone."
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        fontSize: 22,
        margin: '0 0 12px'
      }
    }, "Contact"), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      value: c.first || '',
      error: e('first'),
      onChange: x => setC('first', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      value: c.last || '',
      error: e('last'),
      onChange: x => setC('last', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      icon: "mail",
      placeholder: "you@example.com",
      value: c.email || '',
      error: e('email'),
      onChange: x => setC('email', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Mobile phone",
      type: "tel",
      icon: "phone",
      placeholder: "(256) 555-0100",
      value: c.phone || '',
      error: e('phone'),
      hint: "For your gate pass by text",
      onChange: x => setC('phone', x.target.value)
    })), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        fontSize: 22,
        margin: '32px 0 12px'
      }
    }, "Payment"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 14
      }
    }, [['card', 'Card', 'credit-card'], ['apple', 'Apple Pay', 'phone'], ['google', 'Google Pay', 'phone']].map(([id, l, i]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "opt",
      "aria-pressed": pm === id,
      onClick: () => setPm(id),
      style: {
        width: 'auto',
        flex: '1 1 150px',
        padding: '14px 16px',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, l)))), pm === 'card' ? /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      icon: "credit-card",
      value: card.n,
      onChange: x => setCard({
        ...card,
        n: x.target.value
      })
    }), /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Expiry",
      value: card.e,
      onChange: x => setCard({
        ...card,
        e: x.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "CVC",
      value: card.v,
      onChange: x => setCard({
        ...card,
        v: x.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ZIP",
      value: card.z,
      onChange: x => setCard({
        ...card,
        z: x.target.value
      })
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "You\u2019ll confirm with ", pm === 'apple' ? 'Apple Pay' : 'Google Pay', " when you tap Pay.")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '20px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", null, "I\u2019ve read the ", /*#__PURE__*/React.createElement(TextLink, {
        to: "rules"
      }, "park rules"), " and the refund policy."),
      checked: agree,
      onChange: x => setAgree(x.target.checked)
    }), tried && !agree && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--danger-600, #b42318)',
        fontSize: 14
      }
    }, "Please agree to the park rules to continue."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 14
    }), "Demo only. No card is charged and nothing is sent.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 32,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "arrow-left",
      onClick: () => go('book/review')
    }, "Back to review"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: busy ? undefined : 'lock',
      disabled: busy,
      onClick: pay
    }, busy ? 'Processing…' : 'Pay ' + HP.money(HP.total(t)))));
  }
  function WaiverDialog({
    name,
    minor,
    onClose,
    onSigned
  }) {
    const [sig, setSig] = React.useState(minor ? '' : name || '');
    const [g, setG] = React.useState('');
    const [a, setA] = React.useState(false);
    const [b, setB] = React.useState(false);
    const ok = sig.trim().length > 2 && a && b && (!minor || g.trim().length > 2);
    return /*#__PURE__*/React.createElement(Dialog, {
      open: true,
      title: name ? 'Waiver · ' + name : 'Release of liability',
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        disabled: !ok,
        icon: "file-text",
        onClick: () => {
          onSigned(sig);
          onClose();
        }
      }, "Sign waiver"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: 180,
        overflowY: 'auto',
        padding: 14,
        background: 'var(--bg-sunken)',
        borderRadius: 4,
        fontSize: 14,
        lineHeight: 1.55
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Sample waiver text."), " Off-road riding carries real risk, including serious injury. I agree to follow the park rules, wear required safety gear, ride within my ability and stay on marked trails. I release Hawk Pride Offroad Adventure Park from liability for injury or damage, except where the law does not allow it. The owner\u2019s legal waiver text goes here."), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I understand off-road riding is dangerous.",
      checked: a,
      onChange: e => setA(e.target.checked)
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to the park rules and this release.",
      checked: b,
      onChange: e => setB(e.target.checked)
    }), minor && /*#__PURE__*/React.createElement(Input, {
      label: "Parent or guardian name",
      hint: "Required for riders under 18",
      value: g,
      onChange: e => setG(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: minor ? 'Guardian signature (type full name)' : 'Signature (type full name)',
      icon: "file-text",
      value: sig,
      onChange: e => setSig(e.target.value)
    })));
  }
  function Waivers() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const [open, setOpen] = React.useState(null);
    const P = HP.participants(t).filter(p => p.waiver);
    const done = P.filter(p => t.waivers[p.key]).length;
    React.useEffect(() => {
      if (!t.paid) go('checkout');
    }, []);
    return /*#__PURE__*/React.createElement(BkFrame, {
      done: "Paid",
      aside: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(TripSummary, {
        editable: false
      }), /*#__PURE__*/React.createElement(NextSteps, {
        at: "waivers"
      }))
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: 'Payment received · ' + (t.code || '')
    }, "Your trip is booked. One more step."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Waivers",
      title: "Almost ready to ride.",
      sub: "Every rider needs a signed waiver. Parents sign for kids. Do it now and you\u2019ll go straight through the gate."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, P.map(p => {
      const s = t.waivers[p.key];
      return /*#__PURE__*/React.createElement("div", {
        key: p.key,
        className: "hp-card",
        style: {
          padding: '14px 18px',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: s ? 'badge-check' : 'file-text',
        size: 24,
        style: {
          color: s ? 'var(--success-600, #2f7d32)' : 'inherit'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          fontSize: 17
        }
      }, p.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: 'var(--text-muted)'
        }
      }, p.type, p.minor ? ' · guardian signs' : '')), s ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        icon: "check"
      }, "Complete") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Required"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => setOpen(p)
      }, "Complete waiver")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, done, " of ", P.length, " signed. Non-riding guests don\u2019t need a waiver."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 32,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('confirmation')
    }, "I\u2019ll sign later"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      disabled: done < P.length,
      onClick: () => go('confirmation')
    }, "Get my gate pass")), open && /*#__PURE__*/React.createElement(WaiverDialog, {
      name: open.name,
      minor: open.minor,
      onClose: () => setOpen(null),
      onSigned: () => update(s => ({
        waivers: {
          ...s.waivers,
          [open.key]: true
        }
      }))
    }));
  }
  function QR({
    code
  }) {
    const N = 25;
    let h = 0;
    for (const ch of code) h = h * 31 + ch.charCodeAt(0) >>> 0;
    const rnd = () => {
      h ^= h << 13;
      h >>>= 0;
      h ^= h >> 17;
      h ^= h << 5;
      h >>>= 0;
      return h / 4294967296;
    };
    const finder = (r, c) => {
      for (const [R, C] of [[0, 0], [0, N - 7], [N - 7, 0]]) {
        const y = r - R,
          x = c - C;
        if (y >= 0 && y < 7 && x >= 0 && x < 7) return y === 0 || y === 6 || x === 0 || x === 6 || y >= 2 && y <= 4 && x >= 2 && x <= 4 ? 1 : 0;
        if (y >= -1 && y <= 7 && x >= -1 && x <= 7) return 0;
      }
      return null;
    };
    const cells = [];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const f = finder(r, c);
      cells.push(/*#__PURE__*/React.createElement("i", {
        key: r * N + c,
        "data-on": f === null ? rnd() > .52 ? 1 : 0 : f
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "qr",
      role: "img",
      "aria-label": 'Gate pass code ' + code
    }, cells);
  }
  function Confirmation() {
    const {
      trip: t,
      go,
      book
    } = useApp();
    const P = window.HP_DATA.park;
    const [look, setLook] = React.useState('');
    if (!t.paid) return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Find my trip",
      title: "Look up a booking.",
      intro: "Enter the confirmation code from your email. (Demo: book a trip first to see a confirmation.)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end',
        maxWidth: 520,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Confirmation code",
      placeholder: "HP-28437",
      value: look,
      onChange: e => setLook(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: () => book()
    }, "Book a trip")));
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      ev = HP.eventFor(t.arrive, t.depart),
      W = HP.participants(t).filter(p => p.waiver),
      signed = W.filter(p => t.waivers[p.key]).length;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 280px',
        gap: 48,
        alignItems: 'center'
      },
      className: "proto-conf"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "check"
    }, "Booked"), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '14px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "You\u2019re going to Hawk Pride."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        color: 'var(--stone-200)',
        margin: '14px 0 0',
        maxWidth: 560
      }
    }, HP.fmtLong(t.arrive), t.depart !== t.arrive ? ' to ' + HP.fmtLong(t.depart) : '', ". We sent the details to ", t.contact.email, "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "calendar-check"
    }, "Add to calendar"), /*#__PURE__*/React.createElement("a", {
      className: "hp-btn hp-btn--outline",
      style: {
        textDecoration: 'none'
      },
      href: 'https://maps.google.com/?q=' + encodeURIComponent(P.address),
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 18
    }), "Directions"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--stone-50)',
        color: 'var(--black-950)',
        borderRadius: 'var(--radius-md)',
        padding: 18,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(QR, {
      code: t.code
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        marginTop: 10,
        color: 'var(--text-muted)'
      }
    }, "Gate pass"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 28
      }
    }, t.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Show this at the gate")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, signed < W.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: W.length - signed + ' waiver' + (W.length - signed > 1 ? 's' : '') + ' still to sign'
    }, "Everyone who rides needs one before the gate. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "waivers"
    }, "Sign now")) : /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "All waivers signed"
    }, "You\u2019re set for express check-in."), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Reservation ", t.code), /*#__PURE__*/React.createElement(Row, {
      l: "Dates",
      v: HP.range(t.arrive, t.depart)
    }), ev && /*#__PURE__*/React.createElement(Row, {
      l: "Event",
      v: ev.title
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Stay",
      v: c ? c.name + (u ? ' · ' + u.name : '') : 'No overnight stay'
    }), HP.wantsAdmission(t) && t.days > 0 && /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + t.days + ' day' + (t.days > 1 ? 's' : '')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, "Payment"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Paid"), /*#__PURE__*/React.createElement("strong", null, HP.money(HP.total(t)))))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)',
        marginBottom: 6
      }
    }, "Who\u2019s coming"), HP.participants(t).map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto auto',
        gap: 12,
        alignItems: 'center',
        padding: '10px 0',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, p.type)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, p.type === 'Adult rider' ? HP.wantsAdmission(t) ? 'Admission ✓' : 'Pay at gate' : p.type === 'Child rider' ? 'Rides free' : 'Not riding'), p.waiver ? t.waivers[p.key] ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Waiver") : /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Waiver required") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "No waiver needed"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h2)',
        margin: 0
      }
    }, "Before you come"), [['clock', 'Check-in from ' + P.checkin, 'Gates open at 8 AM for riders. Cabins and sites are ready from ' + P.checkin + '.'], ['map-pin', P.address, 'Follow the signs from Hester Porter Road.'], ['shield-check', 'Bring your gear', 'Helmets for ATVs and open side-by-sides. Flags on event weekends.'], ['phone', 'Questions? ' + P.phone, 'We pick up during park hours.']].map(([i, tl, d]) => /*#__PURE__*/React.createElement("div", {
      key: tl,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, tl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('rules')
    }, "Park rules"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('trails')
    }, "Trail map"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "camera",
      onClick: () => go('gate')
    }, "See the gate view"))))));
  }
  Object.assign(window, {
    Checkout,
    Waivers,
    WaiverDialog,
    Confirmation,
    NextSteps
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/checkout.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/data.js
try { (() => {
// Prototype data. One source of truth: every page reads prices, inventory and dates from here.
// SAMPLE = placeholder values to confirm with the owner (see README).
window.HP_DATA = {
  park: {
    name: 'Hawk Pride Offroad Adventure Park',
    address: '589 Hester Porter Road, Tuscumbia, AL 35674',
    phone: '(256) 349-4150',
    tel: '+12563494150',
    email: 'info@hawkpridemountainoffroad.com',
    hours: [['Fri – Sat', '8 AM – 10 PM'], ['Sun', '8 AM – 6 PM'], ['Mon – Thu', 'Closed']],
    checkin: '2 PM',
    checkout: 'Noon',
    social: [['Facebook', 'facebook'], ['Instagram', 'instagram'], ['YouTube', 'youtube']]
  },
  pricing: {
    day: 20,
    dayLater: 15,
    freeAge: 12,
    spectator: null
  },
  notices: [{
    scope: 'site',
    tone: 'status',
    title: 'Open this weekend',
    text: 'Gates 8 AM · Riding until 10 PM Fri & Sat'
  }, {
    scope: 'trails',
    tone: 'warning',
    title: 'Trail #42 closed this weekend',
    text: 'Washout on the upper ledge. Everything else is open.'
  }],
  categories: [{
    id: 'cabin',
    name: 'Cabin',
    plural: 'Cabins',
    model: 'unit',
    unit: 'night',
    desc: 'Beds, A/C and heat, a porch and parking for the trailer.',
    icon: 'house'
  }, {
    id: 'powered',
    name: 'Powered RV',
    plural: 'Powered RV sites',
    model: 'unit',
    price: 40,
    unit: 'night',
    desc: 'Designated level site with 50A electric and water.',
    icon: 'plug-zap'
  }, {
    id: 'dry',
    name: 'Dry RV',
    plural: 'Dry RV sites',
    model: 'unit',
    price: 25,
    unit: 'night',
    desc: 'Designated level site. Generators allowed.',
    icon: 'caravan'
  }, {
    id: 'primitive',
    name: 'Primitive campsite',
    plural: 'Primitive campsites',
    model: 'capacity',
    price: 20,
    unit: 'night',
    desc: 'Designated tent site with a fire ring.',
    icon: 'tent'
  }, {
    id: 'anywhere',
    name: 'Camp anywhere',
    plural: 'Camp anywhere',
    model: 'capacity',
    price: 5,
    unit: 'night per person',
    perPerson: true,
    desc: 'Set up in any open camping area. No site to pick.',
    icon: 'trees'
  }],
  units: [...[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => ({
    id: 'c' + n,
    cat: 'cabin',
    name: 'Cabin ' + n,
    price: n <= 2 ? 125 : 150,
    sleeps: n <= 2 ? 4 : 6,
    beds: n <= 2 ? '1 queen, 1 bunk' : '1 queen, 2 bunks',
    desc: n <= 2 ? 'Smaller cabin, a short walk to the bathhouse.' : 'Larger cabin with a covered porch and room for the crew.',
    x: 12 + i * 4.2,
    y: i % 2 ? 30 : 20
  })), ...Array.from({
    length: 9
  }, (_, i) => ({
    id: 'r' + (i + 1),
    cat: 'powered',
    name: 'RV Site ' + (i + 1),
    sleeps: 6,
    desc: 'Level pad with 50A electric and water. Pull-through.',
    x: 12 + i * 8.4,
    y: 78
  })), ...Array.from({
    length: 4
  }, (_, i) => ({
    id: 'd' + (i + 1),
    cat: 'dry',
    name: 'Dry RV Site D' + (i + 1),
    sleeps: 6,
    desc: 'Level pad on the east field. Bring the generator.',
    x: 88,
    y: 26 + i * 13
  }))],
  landmarks: [['Gate & registration', 48, 93], ['Bathhouse', 30, 50], ['Pavilion', 56, 52], ['Trailheads', 62, 12], ['Camping area', 74, 40]],
  booked: ['c1', 'c2', 'c4', 'c5', 'c6', 'c8', 'r1', 'r3', 'r5'],
  bookedEvent: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'd1', 'd2', 'd3'],
  events: [{
    id: 'ratp',
    title: 'Ride at the Pride',
    start: '2027-04-23',
    end: '2027-04-25',
    type: 'Park ride',
    status: 'featured',
    image: './assets/photos/event-crawl-crowd.jpg',
    hook: 'Our spring kickoff. Every trail open, vendors on the hill and a full campground.',
    desc: 'Three days of riding across the whole mountain, from the wooded loops to the rock. Bring the family, bring the club, bring the rig.',
    facts: [['Dates', 'Fri – Sun'], ['Gates', '8 AM daily'], ['Vehicles', 'All welcome'], ['Spectators', 'Welcome']],
    schedule: [['Friday', 'Gates 8 AM · Open riding · Campground fills'], ['Saturday', 'Open riding · Vendor row · Night ride'], ['Sunday', 'Open riding until 6 PM']],
    jeep: true
  }, {
    id: 'dsz',
    title: "Down South Zukin'",
    start: '2027-05-14',
    end: '2027-05-15',
    type: 'Club ride',
    image: './assets/photos/hillside-traffic.jpg',
    hook: 'Suzuki club weekend. Small rigs, big lines.',
    desc: 'A club-hosted ride for Suzuki owners and friends. Open to the public on standard admission.',
    facts: [['Dates', 'Fri – Sat'], ['Hosted by', 'Club organizers'], ['Vehicles', 'All welcome']],
    schedule: [['Friday', 'Check-in and trail rides'], ['Saturday', 'Group rides and cookout']]
  }, {
    id: 'mem',
    title: 'Memorial Day Weekend',
    start: '2027-05-28',
    end: '2027-05-31',
    type: 'Holiday ride',
    status: 'few',
    image: './assets/photos/pavilion-jeeps.jpg',
    hook: 'Four days open. The busiest campground of the year.',
    desc: 'The park stays open through Monday. Cabins and RV sites go first, so book early.',
    facts: [['Dates', 'Fri – Mon'], ['Gates', '8 AM daily'], ['Vehicles', 'All welcome']],
    schedule: [['Fri – Mon', 'Open riding every day']]
  }, {
    id: 'jul',
    title: '4th of July Weekend',
    start: '2027-07-02',
    end: '2027-07-05',
    type: 'Holiday ride',
    image: null,
    hook: 'Ride all day. Watch the sky light up at night.',
    desc: 'Holiday weekend with extra open days.',
    facts: [['Dates', 'Fri – Mon'], ['Vehicles', 'All welcome']],
    schedule: [['Fri – Mon', 'Open riding every day']]
  }, {
    id: 'srrs',
    title: 'SRRS Hillclimb',
    start: '2027-08-13',
    end: '2027-08-14',
    type: 'Hillclimb',
    image: './assets/photos/buggy-airborne.jpg',
    hook: 'Steep, loose and loud. Bring a chair.',
    desc: 'Sanctioned hillclimb racing on the big hill. Spectators welcome all weekend.',
    facts: [['Dates', 'Fri – Sat'], ['Racers', 'Register with the series'], ['Spectators', 'Welcome']],
    schedule: [['Friday', 'Practice runs'], ['Saturday', 'Racing and awards']]
  }, {
    id: 'mk',
    title: 'Mardi Krawl',
    start: '2027-08-26',
    end: '2027-08-29',
    type: 'Rock crawl',
    status: 'soldout',
    image: './assets/photos/rock-ledge-buggies.jpg',
    hook: 'Four days on the hardest rock we have.',
    desc: 'Club-run rock crawl. Registration is through the club and is full for this year.',
    facts: [['Dates', 'Thu – Sun'], ['Vehicles', 'Built rigs'], ['Registration', 'Full']],
    schedule: [['Thu – Sun', 'Guided crawls and open riding']],
    jeep: true
  }],
  trails: [{
    number: '#07',
    name: 'Cane Creek Loop',
    level: 'easy',
    vehicles: 'All vehicles',
    length: '3.2 mi'
  }, {
    number: '#12',
    name: 'Pine Ridge Run',
    level: 'easy',
    vehicles: 'ATV · SxS',
    length: '2.1 mi'
  }, {
    number: '#23',
    name: 'Bluff Line',
    level: 'moderate',
    vehicles: 'SxS · 4x4',
    length: '1.4 mi'
  }, {
    number: '#31',
    name: 'Hollow Crossing',
    level: 'moderate',
    vehicles: '4x4 · Jeep',
    length: '0.9 mi'
  }, {
    number: 'UBW',
    name: 'Uphill Both Ways',
    level: 'difficult',
    vehicles: 'Jeep · 4x4',
    length: 'Signature trail',
    signature: true
  }, {
    number: '#38',
    name: 'Staircase',
    level: 'difficult',
    vehicles: 'Built 4x4 · Buggy',
    length: '0.6 mi'
  }, {
    number: '#42',
    name: 'Widowmaker',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.4 mi',
    status: 'closed'
  }, {
    number: '#61',
    name: 'Rock Garden',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.3 mi'
  }]
};
window.HP = (() => {
  const D = window.HP_DATA;
  D.units.forEach(u => {
    if (u.price == null) u.price = D.categories.find(c => c.id === u.cat).price;
  });
  const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    W = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const p = s => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const add = (s, n) => {
    const d = p(s);
    d.setDate(d.getDate() + n);
    return iso(d);
  };
  const diff = (a, b) => Math.round((p(b) - p(a)) / 864e5);
  const fmt = s => {
    const d = p(s);
    return M[d.getMonth()] + ' ' + d.getDate();
  };
  const fmtLong = s => {
    const d = p(s);
    return W[d.getDay()] + ', ' + M[d.getMonth()] + ' ' + d.getDate();
  };
  const range = (a, b) => {
    if (!a) return '';
    if (!b || a === b) return fmt(a);
    const A = p(a),
      B = p(b);
    return A.getMonth() === B.getMonth() ? fmt(a) + '–' + B.getDate() : fmt(a) + ' – ' + fmt(b);
  };
  const today = iso(new Date());
  const eventOn = s => D.events.find(e => s >= e.start && s <= e.end);
  const open = s => {
    const w = p(s).getDay();
    return w === 5 || w === 6 || w === 0 || !!eventOn(s);
  };
  const eventFor = (a, b) => a && D.events.find(e => a <= e.end && (b || a) >= e.start);
  const nights = t => t.arrive && t.depart ? diff(t.arrive, t.depart) : 0;
  const openDays = t => {
    if (!t.arrive) return 0;
    const n = Math.max(nights(t), 0);
    let c = 0;
    for (let i = 0; i <= n; i++) if (open(add(t.arrive, i))) c++;
    return c;
  };
  const cat = id => D.categories.find(c => c.id === id);
  const unit = id => D.units.find(u => u.id === id);
  const availability = t => {
    const ev = eventFor(t.arrive, t.depart),
      b = ev ? D.bookedEvent : D.booked,
      out = {};
    D.categories.forEach(c => {
      if (c.model === 'unit') {
        const u = D.units.filter(u => u.cat === c.id);
        const free = u.filter(x => !b.includes(x.id));
        out[c.id] = {
          count: free.length,
          free: free.map(x => x.id)
        };
      } else out[c.id] = {
        count: ev && c.id === 'primitive' ? 0 : 99
      };
    });
    return out;
  };
  const riders = t => t.adults || 0;
  const admissionPer = days => days <= 2 ? D.pricing.day * days : D.pricing.day * 2 + D.pricing.dayLater * (days - 2);
  const admission = t => riders(t) * admissionPer(t.days || 0);
  const people = t => (t.adults || 0) + (t.kids || 0) + (t.guests || 0);
  const lodging = t => {
    if (!t.stay || t.stay === 'none') return 0;
    const c = cat(t.stay),
      n = nights(t);
    if (c.model === 'unit') {
      const u = unit(t.unit);
      return u ? u.price * n : 0;
    }
    return c.perPerson ? c.price * n * people(t) : c.price * n;
  };
  const wantsAdmission = t => t.stay === 'none' || t.addAdmission !== false;
  const total = t => lodging(t) + (wantsAdmission(t) ? admission(t) : 0);
  const participants = t => [...(t.names.a || []).slice(0, t.adults).map((n, i) => ({
    key: 'a' + i,
    name: n,
    type: 'Adult rider',
    waiver: true
  })), ...(t.names.k || []).slice(0, t.kids).map((n, i) => ({
    key: 'k' + i,
    name: n,
    type: 'Child rider',
    minor: true,
    waiver: true
  })), ...(t.names.g || []).slice(0, t.guests).map((n, i) => ({
    key: 'g' + i,
    name: n,
    type: 'Non-riding guest',
    waiver: false
  }))];
  const weekends = (from, count) => {
    let d = p(from);
    while (d.getDay() !== 5) d.setDate(d.getDate() + 1);
    const o = [];
    for (let i = 0; i < count; i++) {
      const a = iso(d);
      o.push({
        arrive: a,
        depart: add(a, 2)
      });
      d.setDate(d.getDate() + 7);
    }
    return o;
  };
  const money = n => '$' + n.toLocaleString();
  const rate = id => {
    const c = cat(id);
    return c.price != null ? c.price : Math.min(...D.units.filter(u => u.cat === id).map(u => u.price));
  };
  const priceLabel = id => {
    const c = cat(id);
    return (c.price == null ? 'From ' : '') + money(rate(id)) + ' / ' + (c.perPerson ? 'person / night' : 'night');
  };
  const cabinClasses = () => {
    const g = [];
    D.units.filter(u => u.cat === 'cabin').forEach(u => {
      let x = g.find(k => k.price === u.price);
      if (!x) {
        x = {
          price: u.price,
          sleeps: u.sleeps,
          beds: u.beds,
          desc: u.desc,
          nums: []
        };
        g.push(x);
      }
      x.nums.push(+u.name.replace(/\D/g, ''));
    });
    g.forEach(x => x.label = 'Cabins ' + x.nums[0] + '–' + x.nums[x.nums.length - 1]);
    return g;
  };
  const notices = scope => (D.notices || []).filter(n => n.scope === scope);
  const count = id => D.units.filter(u => u.cat === id).length;
  return {
    p,
    iso,
    add,
    diff,
    fmt,
    fmtLong,
    range,
    today,
    open,
    eventOn,
    eventFor,
    nights,
    openDays,
    cat,
    unit,
    availability,
    admissionPer,
    admission,
    people,
    lodging,
    wantsAdmission,
    total,
    participants,
    weekends,
    money,
    M,
    W,
    rate,
    priceLabel,
    cabinClasses,
    notices,
    count
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/data.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/explore.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    Alert,
    Tabs,
    TrailRow,
    Dialog,
    DifficultyBadge
  } = window.DS;
  const IMG = './assets/photos/';
  function EventsIndex() {
    const {
      go,
      book
    } = useApp();
    const E = window.HP_DATA.events;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Events",
      title: "Big weekends on the mountain.",
      intro: "Rock crawls, hillclimbs, club rides and holiday weekends. Every event page has dates, what\u2019s included and a way to book.",
      image: IMG + 'event-crawl-crowd.jpg',
      imageAlt: "Crowd at a rock crawl"
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, E.map(e => /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: "hp-card",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,300px) minmax(0,1fr)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 190
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event photo',
      alt: e.title,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px',
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        minWidth: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, HP.M[HP.p(e.start).getMonth()]), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 48,
        lineHeight: 1
      }
    }, HP.p(e.start).getDate())), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 280px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, e.type, " \xB7 ", HP.range(e.start, e.end), ", ", HP.p(e.start).getFullYear()), e.status === 'few' && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Few sites left"), e.status === 'soldout' && /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Registration full"), e.status === 'featured' && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Featured")), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h2)',
        margin: '6px 0'
      }
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, e.hook)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('events/' + e.id)
    }, "View Event"), e.status !== 'soldout' && /*#__PURE__*/React.createElement(Button, {
      onClick: () => book({
        event: e.id
      })
    }, "Register")))))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 24,
        color: 'var(--text-muted)'
      }
    }, "Regular open weekends aren\u2019t listed here. The park is open every Friday to Sunday. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "fees"
    }, "See fees"), ".")));
  }
  function EventPage({
    id
  }) {
    const {
      book,
      go
    } = useApp();
    const e = window.HP_DATA.events.find(x => x.id === id) || window.HP_DATA.events[0];
    const closed = e.status === 'soldout';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(70vh,600px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event hero photo',
      alt: e.title,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.25) 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 44px',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('events'),
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10,
        color: 'var(--stone-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All events"), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)',
        marginTop: 10
      }
    }, e.type, " \xB7 ", HP.fmtLong(e.start), " \u2013 ", HP.fmtLong(e.end), ", ", HP.p(e.start).getFullYear()), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '10px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        maxWidth: 560,
        color: 'var(--stone-200)',
        margin: '14px 0 24px'
      }
    }, e.hook), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, closed ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Registration full") : /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book({
        event: e.id
      })
    }, "Register & Book"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => {
        const el = document.getElementById('schedule');
        el && window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, "Schedule")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split split--wide",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.5,
        margin: 0,
        textWrap: 'pretty'
      }
    }, e.desc), /*#__PURE__*/React.createElement("div", {
      className: "g4",
      style: {
        marginTop: 28,
        gap: 0,
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, e.facts.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: '14px 16px',
        background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17,
        marginTop: 4
      }
    }, v)))), e.jeep && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trophy",
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "Bringing a Jeep? Run ", /*#__PURE__*/React.createElement(TextLink, {
      to: "trails/uphill-both-ways"
    }, "Uphill Both Ways"), ", our Jeep Badge of Honor trail."))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 24,
        gap: 14,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Pricing"), /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: '$' + window.HP_DATA.pricing.day + ' / day'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Day 3 and beyond",
      v: '$' + window.HP_DATA.pricing.dayLater + ' / day'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Kids 12 and under",
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Spectators",
      v: "To be confirmed"
    }), /*#__PURE__*/React.createElement(Callout, null, "Cabins and RV sites go fast on event weekends."), closed ? /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "Registration is full"
    }, "Watch this page for next year.") : /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => book({
        event: e.id
      })
    }, "Register & Book")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      id: "schedule",
      eyebrow: "Schedule",
      title: "How the weekend runs."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, e.schedule.map(([d, t]) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: 'grid',
        gridTemplateColumns: '160px minmax(0,1fr)',
        gap: 20,
        padding: '16px 0',
        borderTop: '1px solid var(--border-default)',
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 24
      }
    }, d), /*#__PURE__*/React.createElement("div", null, t))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Stay for the weekend",
      title: "Where to stay."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['Cabins', HP.priceLabel('cabin'), 'cabin'], ['RV sites', HP.money(HP.rate('powered')) + ' powered · ' + HP.money(HP.rate('dry')) + ' dry', 'powered'], ['Camping', 'From ' + HP.priceLabel('anywhere'), 'primitive']].map(([t, p, s]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, p), !closed && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => book({
        event: e.id
      })
    }, "Book with this event")))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Before you come",
      title: "Rules & FAQ."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '24px 40px'
      }
    }, [['Do I need a waiver?', 'Yes, every rider. You’ll sign online right after you book.'], ['Can I come just to watch?', 'Yes, spectators are welcome. Spectator pricing is still being set.'], ['Are park rules different?', 'Standard park rules apply. Flags on whips are required.'], ['Can I pay at the gate?', 'Yes, but booking ahead gets you through the gate faster.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
      key: q
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, q), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        paddingTop: 20,
        borderTop: '1px solid var(--border-default)',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, "Event sponsors"), [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 120,
        height: 44,
        border: '1px dashed var(--border-default)',
        borderRadius: 4,
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        color: 'var(--text-subtle)'
      }
    }, "Sponsor logo")))));
  }
  function Trails() {
    const {
      go,
      book
    } = useApp();
    const [f, setF] = React.useState('all');
    const [t, setT] = React.useState(null);
    const D = window.HP_DATA.trails;
    const list = f === 'all' ? D : D.filter(x => x.level === f);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Trails",
      title: "From wooded trails to serious rock.",
      intro: "Over 1,000 acres and 120+ rock trails. Every trail is marked by difficulty so you can pick the ride that fits you and your rig.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "d",
        size: "lg",
        icon: "download"
      }, "Download trail map")],
      image: IMG + 'rock-ledge-buggies.jpg',
      imageAlt: "Buggies on a rock ledge"
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, HP.notices('trails').map(n => /*#__PURE__*/React.createElement(Alert, {
      key: n.title,
      tone: n.tone,
      title: n.title
    }, n.text)), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: f,
      onChange: setF,
      items: [{
        id: 'all',
        label: 'All'
      }, {
        id: 'easy',
        label: 'Easy'
      }, {
        id: 'moderate',
        label: 'Moderate'
      }, {
        id: 'difficult',
        label: 'Difficult'
      }, {
        id: 'extreme',
        label: 'Extreme'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 6,
        padding: '0 12px'
      }
    }, list.map(x => /*#__PURE__*/React.createElement(TrailRow, _extends({
      key: x.number
    }, x, {
      onClick: () => x.signature ? go('trails/uphill-both-ways') : setT(x)
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Park trail map",
      ratio: "4/3.6"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, ['easy', 'moderate', 'difficult', 'extreme'].map(l => /*#__PURE__*/React.createElement(DifficultyBadge, {
      key: l,
      level: l
    }))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "download"
    }, "PDF \xB7 works offline")))))), /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)',
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Signature trail"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95
      }
    }, "Uphill Both Ways"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        color: 'var(--stone-200)',
        margin: '14px 0 24px',
        maxWidth: 480
      }
    }, "A Jeep Badge of Honor trail, right here at Hawk Pride. One of the toughest runs on the mountain."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => go('trails/uphill-both-ways')
    }, "About the trail")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 380,
        marginRight: 'calc(-1 * var(--container-pad))'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Jeep on Uphill Both Ways",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Ride smart",
      title: "Terrain, vehicles and safety."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '28px 36px'
      }
    }, [['mountain', 'Terrain', 'Rock ledges, loose climbs, creek crossings, mud and wooded two-track.'], ['car-front', 'Vehicles', 'ATVs, side-by-sides, Jeeps, trucks and buggies. Check each trail’s rating.'], ['signpost', 'Navigation', 'Trails are numbered at every junction. Grab a paper map at the gate.'], ['shield-check', 'Safety', 'Helmets on ATVs and open SxS. Ride difficult trails with a buddy.'], ['users', 'Families', 'Start on the easy loops. Kids 12 and under ride free.'], ['file-text', 'Rules', 'Read the park rules before you ride.', 'rules']].map(([i, t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 26,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, t) : t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, d)))))), /*#__PURE__*/React.createElement(Dialog, {
      open: !!t,
      title: t ? t.number + ' · ' + t.name : '',
      onClose: () => setT(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setT(null)
      }, "Close")
    }, t && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Trail photo",
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: t.level
    }), t.status === 'closed' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Closed") : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Open")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Vehicles"), t.vehicles), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Length"), t.length)))));
  }
  function UphillBothWays() {
    const {
      go,
      book
    } = useApp();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(78vh,660px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Hero \xB7 Jeep climbing Uphill Both Ways",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.2) 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 48px',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('trails'),
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10,
        color: 'var(--stone-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "Trails"), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)',
        marginTop: 10
      }
    }, "Signature trail \xB7 Jeep Badge of Honor"), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '10px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "Uphill Both Ways"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        maxWidth: 560,
        color: 'var(--stone-200)',
        margin: '14px 0 24px'
      }
    }, "Hawk Pride\u2019s Badge of Honor trail. Bring a capable rig, a spotter and some patience."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book()
    }, "Plan your run"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "download"
    }, "Trail map")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split split--wide",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h1)',
        margin: '0 0 14px'
      }
    }, "Part of the Badge of Honor program."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        margin: 0
      }
    }, "Uphill Both Ways is a Jeep Badge of Honor trail, and it\u2019s here at Hawk Pride. It\u2019s built for capable rigs and patient drivers. The rest of the mountain is open to every kind of rig."), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "What to expect"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("li", null, "Rock steps and off-camber climbs with a few committing lines."), /*#__PURE__*/React.createElement("li", null, "Tight trees in places. Mind your mirrors."), /*#__PURE__*/React.createElement("li", null, "Give yourself time. Groups move slowly on the hard sections.")), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "Before you drop in"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("li", null, "Air down and bring recovery gear."), /*#__PURE__*/React.createElement("li", null, "Ride with at least one other vehicle."), /*#__PURE__*/React.createElement("li", null, "Trailhead is signed from the main loop. See the trail map."))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 24,
        gap: 14,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Trail facts"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: "difficult"
    })), /*#__PURE__*/React.createElement(Row, {
      l: "Best for",
      v: "Jeeps and built 4x4s"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Driver",
      v: "Some off-road experience"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Location",
      v: "Off the main loop"
    }), /*#__PURE__*/React.createElement(Button, {
      block: true,
      onClick: () => book()
    }, "Book your trip")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "The community",
      title: "Made it to the top."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, ['Trailhead sign', 'Group at the top', 'Completion photo'].map(c => /*#__PURE__*/React.createElement(Photo, {
      key: c,
      caption: c,
      ratio: "4/3"
    })))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Keep going",
      title: "More to ride nearby."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, window.HP_DATA.trails.filter(t => !t.signature && t.level !== 'easy').slice(0, 3).map(t => /*#__PURE__*/React.createElement("div", {
      key: t.number,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: t.level
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t.number, " \xB7 ", t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, t.vehicles, " \xB7 ", t.length))))));
  }
  Object.assign(window, {
    EventsIndex,
    EventPage,
    Trails,
    UphillBothWays
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/explore.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/gate.js
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    Input
  } = window.DS;
  const wk = HP.weekends(HP.today, 1)[0];
  const SAMPLES = [{
    code: 'HP-28437',
    contact: 'Brandon Hale',
    phone: '(256) 555-0142',
    email: 'brandon@example.com',
    arrive: wk.arrive,
    depart: wk.depart,
    stay: 'Cabin · Cabin 3',
    event: null,
    total: 460,
    people: [{
      key: 'a0',
      name: 'Brandon Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a1',
      name: 'Vann Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a2',
      name: 'Lyle Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'required'
    }]
  }, {
    code: 'HP-31022',
    contact: 'Kayla Moore',
    phone: '(615) 555-0199',
    email: 'kayla@example.com',
    arrive: wk.arrive,
    depart: wk.depart,
    stay: 'Powered RV · RV Site 6',
    event: null,
    total: 160,
    people: [{
      key: 'a0',
      name: 'Kayla Moore',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a1',
      name: 'Dre Moore',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'k0',
      name: 'Jo Moore',
      type: 'Child rider',
      admission: 'Free',
      waiver: 'done'
    }, {
      key: 'g0',
      name: 'Pat Moore',
      type: 'Non-riding guest',
      admission: '—',
      waiver: 'n/a'
    }]
  }];
  function fromTrip(t) {
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      ev = HP.eventFor(t.arrive, t.depart);
    return {
      code: t.code,
      contact: [t.contact.first, t.contact.last].filter(Boolean).join(' '),
      phone: t.contact.phone,
      email: t.contact.email,
      arrive: t.arrive,
      depart: t.depart,
      stay: c ? c.name + (u ? ' · ' + u.name : '') : 'No overnight stay',
      event: ev ? ev.title : null,
      total: HP.total(t),
      live: true,
      checkedIn: t.checkedIn,
      people: HP.participants(t).map(p => ({
        key: p.key,
        name: p.name,
        type: p.type,
        admission: p.type === 'Adult rider' ? HP.wantsAdmission(t) ? 'Paid' : 'Due at gate' : p.type === 'Child rider' ? 'Free' : '—',
        waiver: p.waiver ? t.waivers[p.key] ? 'done' : 'required' : 'n/a'
      }))
    };
  }
  function Gate() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const [local, setLocal] = React.useState({});
    const [q, setQ] = React.useState('');
    const [open, setOpen] = React.useState(null);
    const [scanning, setScanning] = React.useState(false);
    const [note, setNote] = React.useState(null);
    const all = [...(t.paid ? [fromTrip(t)] : []), ...SAMPLES.map(s => ({
      ...s,
      ...(local[s.code] || {}),
      people: s.people.map(p => ({
        ...p,
        ...(((local[s.code] || {}).w || {})[p.key] ? {
          waiver: 'done'
        } : {})
      }))
    }))];
    const res = all.find(r => r.code === open);
    const digits = x => (x || '').replace(/\D/g, '');
    const ql = q.trim().toLowerCase();
    const hits = ql.length < 2 ? [] : all.filter(r => r.code.toLowerCase().includes(ql) || r.contact.toLowerCase().includes(ql) || (r.email || '').toLowerCase().includes(ql) || digits(ql).length > 2 && digits(r.phone).includes(digits(ql)) || r.people.some(p => p.name.toLowerCase().includes(ql)));
    const scan = () => {
      setScanning(true);
      setNote(null);
      setTimeout(() => {
        setScanning(false);
        setOpen(all[0].code);
      }, 900);
    };
    const signAtGate = (r, key) => {
      if (r.live) update(s => ({
        waivers: {
          ...s.waivers,
          [key]: true
        }
      }));else setLocal(l => ({
        ...l,
        [r.code]: {
          ...(l[r.code] || {}),
          w: {
            ...((l[r.code] || {}).w || {}),
            [key]: true
          }
        }
      }));
    };
    const checkIn = r => {
      const at = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      });
      if (r.live) update({
        checkedIn: at
      });else setLocal(l => ({
        ...l,
        [r.code]: {
          ...(l[r.code] || {}),
          checkedIn: at
        }
      }));
      setNote(r.contact + '’s party checked in at ' + at + '.');
    };
    const missing = res ? res.people.filter(p => p.waiver === 'required') : [];
    const dueGate = res ? res.people.filter(p => p.admission === 'Due at gate') : [];
    const Tick = ({
      ok,
      label,
      warn
    }) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700,
        fontSize: 15,
        color: ok ? 'var(--success-700, #1f6b2a)' : warn ? 'var(--danger-700, #a3231a)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ok ? 'badge-check' : warn ? 'triangle-alert' : 'minus',
      size: 18
    }), label);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--stone-100)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("header", {
      className: "hp-on-dark",
      style: {
        color: 'var(--stone-50)',
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderBottom: '3px solid var(--gold-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: HP_LOGO,
      alt: "",
      style: {
        height: 40
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 22,
        lineHeight: 1
      }
    }, "Gate check-in"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-muted)'
      }
    }, "Staff view \xB7 demo")), /*#__PURE__*/React.createElement("button", {
      onClick: () => go(t.paid ? 'confirmation' : 'home'),
      style: {
        marginLeft: 'auto',
        background: 'none',
        border: '1px solid var(--border-inverse)',
        color: 'var(--stone-50)',
        borderRadius: 4,
        padding: '8px 12px',
        font: 'inherit',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }), "Exit staff view"))), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '28px 24px 64px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,380px) minmax(0,1fr)',
        gap: 24,
        alignItems: 'start'
      },
      className: "gate-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: scan,
      disabled: scanning,
      style: {
        height: 132,
        borderRadius: 'var(--radius-md)',
        border: 0,
        background: 'var(--gold-400)',
        color: 'var(--black-950)',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, scanning ? 'Scanning…' : 'Scan reservation code')), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 18,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, "Or look it up"), /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Reservation #, name, phone or email",
      value: q,
      onChange: e => setQ(e.target.value)
    }), ql.length >= 2 && (hits.length ? hits.map(r => /*#__PURE__*/React.createElement("button", {
      key: r.code,
      onClick: () => {
        setOpen(r.code);
        setNote(null);
      },
      style: {
        textAlign: 'left',
        font: 'inherit',
        background: open === r.code ? 'var(--bg-sunken)' : 'none',
        border: '1px solid var(--border-subtle)',
        borderRadius: 4,
        padding: '10px 12px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, r.contact), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, r.code, " \xB7 ", r.stay)), r.people.some(p => p.waiver === 'required') && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Waiver"))) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "No reservations match.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Try \u201CLyle\u201D, \u201CHP-31022\u201D or \u201C555-0199\u201D.", t.paid ? ' Your demo booking is ' + t.code + '.' : ''))), /*#__PURE__*/React.createElement("div", null, !res ? /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 40,
        alignItems: 'center',
        textAlign: 'center',
        gap: 10,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 48
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, "Scan a code or search to load a reservation.")) : /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 0,
        gap: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, "Reservation"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 40,
        lineHeight: 1
      }
    }, res.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        marginTop: 8,
        fontWeight: 600
      }
    }, res.stay), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, HP.range(res.arrive, res.depart), " \xB7 ", res.contact, " \xB7 ", res.phone), res.event && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "calendar-days"
    }, res.event))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Paid"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        marginTop: 6
      }
    }, HP.money(res.total)))), res.people.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 150px 190px',
        gap: 12,
        alignItems: 'center',
        padding: '14px 24px',
        borderBottom: '1px solid var(--border-subtle)',
        background: p.waiver === 'required' ? 'var(--warning-50, #fff8e6)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, p.type)), /*#__PURE__*/React.createElement(Tick, {
      ok: p.admission === 'Paid' || p.admission === 'Free',
      warn: p.admission === 'Due at gate',
      label: p.admission === '—' ? 'Not riding' : 'Admission ' + (p.admission === 'Paid' ? '✓' : p.admission === 'Free' ? '· free' : 'due')
    }), p.waiver === 'required' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Tick, {
      warn: true,
      label: "WAIVER REQUIRED"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => signAtGate(res, p.key),
      style: {
        font: 'inherit',
        fontSize: 13,
        fontWeight: 700,
        background: 'none',
        border: 0,
        padding: 0,
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    }, "Signed on gate tablet")) : /*#__PURE__*/React.createElement(Tick, {
      ok: p.waiver === 'done',
      label: p.waiver === 'done' ? 'Waiver ✓' : 'No waiver needed'
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, res.checkedIn ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: 'Checked in at ' + res.checkedIn
    }, "This party is already through the gate.") : missing.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: missing.length + ' waiver' + (missing.length > 1 ? 's' : '') + ' missing'
    }, missing.map(p => p.name).join(', '), " must sign before riding. Hand them the gate tablet or text the link.") : dueGate.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Admission due"
    }, "Collect riding admission for ", dueGate.length, " rider", dueGate.length > 1 ? 's' : '', " at the gate.") : null, note && !res.checkedIn && /*#__PURE__*/React.createElement(Alert, {
      tone: "success"
    }, note), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("button", {
      disabled: !!res.checkedIn || missing.length > 0,
      onClick: () => checkIn(res),
      className: "hp-btn hp-btn--lg hp-btn--primary",
      style: {
        flex: '1 1 260px',
        height: 64,
        fontSize: 20,
        opacity: res.checkedIn || missing.length ? .45 : 1,
        cursor: res.checkedIn || missing.length ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22
    }), res.checkedIn ? 'Checked in' : 'Check in party'), missing.length > 0 && /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "message-circle",
      onClick: () => setNote('Waiver link texted to ' + res.phone + '.')
    }, "Text waiver link")))))), /*#__PURE__*/React.createElement("style", null, `@media(max-width:860px){.gate-grid{grid-template-columns:1fr!important}}`));
  }
  window.Gate = Gate;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/gate.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/pages.js
try { (() => {
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    Alert
  } = window.DS;
  const IMG = './assets/photos/';
  const D = () => window.HP_DATA;
  function PriceTable({
    rows
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)'
      }
    }, rows.map(([l, v, note, to], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        borderTop: i ? '1px solid var(--border-subtle)' : 0
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, l) : l), note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, note)), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 28,
        whiteSpace: 'nowrap'
      }
    }, v))));
  }
  function Fees() {
    const {
      book,
      go
    } = useApp();
    const P = D().pricing;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Fees",
      title: "What it costs to ride.",
      intro: "Pay per rider, per day. Kids ride free. Book ahead and skip the line at the gate.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'none'
        })
      }, "Buy Admission"), /*#__PURE__*/React.createElement(Button, {
        key: "b",
        size: "lg",
        variant: "outline",
        onClick: () => book()
      }, "Book a trip")],
      image: IMG + 'buggy-airborne.jpg',
      imageAlt: "Buggy on the hill",
      position: "50% 45%"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Riding admission",
      title: "Per rider, per day."
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(PriceTable, {
      rows: [['Days 1 and 2', HP.money(P.day), 'Per rider, per day'], ['Day 3 and beyond', HP.money(P.dayLater), 'Per rider, per day'], ['Kids ' + P.freeAge + ' and under', 'Free', 'With a paying adult']]
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 24,
        gap: 12,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Example"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        lineHeight: 1.55
      }
    }, "Two adults and a 9-year-old riding Friday to Sunday:"), /*#__PURE__*/React.createElement(Row, {
      l: "2 adults \xD7 3 days",
      v: HP.money(2 * HP.admissionPer(3))
    }), /*#__PURE__*/React.createElement(Row, {
      l: "1 child rider",
      v: "Free",
      muted: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-default)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: HP.money(2 * HP.admissionPer(3))
    })), /*#__PURE__*/React.createElement(Callout, null, "We add it up for you when you book, multi-day savings included.")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Overnight",
      title: "Staying the night."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(PriceTable, {
      rows: HP.cabinClasses().map(c => [c.label, HP.money(c.price), 'Per night · sleeps ' + c.sleeps, 'cabins'])
    }), /*#__PURE__*/React.createElement(PriceTable, {
      rows: D().categories.filter(c => c.id !== 'cabin').map(c => [c.name, HP.money(HP.rate(c.id)), c.perPerson ? 'Per person, per night' : 'Per night', 'camping'])
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        color: 'var(--text-muted)'
      }
    }, "Overnight stays don\u2019t include riding. Add admission for your riders in the same booking.")), /*#__PURE__*/React.createElement(Section, {
      title: "Event weekends",
      eyebrow: "Events"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        maxWidth: 620
      }
    }, "Some events have their own pricing or packages. Check the event page for details."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: "arrow-right",
      onClick: () => go('events')
    }, "Upcoming events"))));
  }
  function Cabins() {
    const {
      book
    } = useApp();
    const [cls, setCls] = React.useState(null);
    const C = HP.cabinClasses().map(c => ({
      t: c.label,
      p: c.price,
      sleeps: c.sleeps,
      beds: c.beds,
      d: c.desc
    }));
    const am = [['thermometer', 'A/C and heat'], ['bed-double', 'Beds and bunks, bring linens'], ['shower-head', 'Bathhouse nearby'], ['flame', 'Fire ring and grill'], ['square-parking', 'Parking for truck and trailer'], ['utensils', 'Kitchen and bathroom details: to confirm']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Cabins",
      title: "Sleep close to the trails.",
      intro: "Eight cabins, two sizes. Every one is steps from the trailheads with room to park the trailer.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'cabin'
        })
      }, "Check Availability")],
      image: null,
      imageAlt: "Cabin exterior at dusk"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Choose your size",
      title: "Two kinds of cabin."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, C.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.t,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: c.t + ' · exterior',
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 26
      }
    }, c.t), /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, HP.money(c.p), /*#__PURE__*/React.createElement("small", null, "/ night"))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__meta",
      style: {
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), "Sleeps ", c.sleeps), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "bed-double",
      size: 16
    }), c.beds)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, c.d), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => book({
        stay: 'cabin'
      })
    }, "Check Availability"))))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Every cabin",
      title: "What\u2019s included."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '18px 28px'
      }
    }, am.map(([i, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24
    }), t)))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Good to know",
      title: "Cabin policies."
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: "Check-in",
      v: 'From ' + D().park.checkin
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Check-out",
      v: 'By ' + D().park.checkout.toLowerCase()
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Pets",
      v: "Welcome, leashed"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Riding",
      v: "Admission sold separately"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        aspectRatio: '16/9',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-card)',
        padding: '6px 12px',
        borderRadius: 4,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map",
      size: 16
    }), " Cabins sit on the ridge above the pavilion"))))));
  }
  function Camping() {
    const {
      book
    } = useApp();
    const wkAv = HP.availability(HP.weekends(HP.today, 1)[0]);
    const S = [{
      id: 'powered',
      pts: ['Designated level site', '50A electric and water', 'Pull-through pads'],
      img: IMG + 'pavilion-jeeps.jpg'
    }, {
      id: 'dry',
      pts: ['Designated level site', 'Generators allowed until quiet hours', 'East field, room to spread out']
    }, {
      id: 'primitive',
      pts: ['Designated tent site', 'Fire ring', 'Bathhouse access']
    }, {
      id: 'anywhere',
      pts: ['Set up in any open camping area', 'No site assignment', 'Not on trails, roads or pads']
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Camping",
      title: "Pull in. Plug in. Ride out.",
      intro: "Powered and dry RV sites, designated tent sites, or pitch anywhere in the open camping areas.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'powered'
        })
      }, "Check Availability")],
      image: null,
      imageAlt: "RVs and tents at the campground"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Pick your setup",
      title: "Four ways to camp."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, S.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        gap: 12,
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 26
      }
    }, HP.cat(s.id).name), /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, HP.money(HP.rate(s.id)), /*#__PURE__*/React.createElement("small", null, HP.cat(s.id).perPerson ? '/ person / night' : '/ night'))), /*#__PURE__*/React.createElement("div", null, HP.cat(s.id).model === 'unit' ? /*#__PURE__*/React.createElement(Badge, {
      tone: wkAv[s.id].count ? 'success' : 'danger'
    }, wkAv[s.id].count ? wkAv[s.id].count + ' of ' + HP.count(s.id) + ' available this weekend' : 'Sold out this weekend') : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Open this weekend")), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, s.pts.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }), p))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: s.id === 'powered' ? 'primary' : 'secondary',
      onClick: () => book({
        stay: s.id
      })
    }, "Check Availability"))))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Campground rules",
      title: "Before you set up."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '24px 32px'
      }
    }, [['plug-zap', 'Generators', 'Off during quiet hours.'], ['flame', 'Fires', 'In rings only. Put it out before bed.'], ['moon', 'Quiet hours', '10 PM to 7 AM. Event weekends may differ.'], ['shower-head', 'Bathhouse', 'Showers and restrooms near the pavilion.'], ['clock', 'Check-in / out', 'Check in from 2 PM. Out by noon.'], ['dog', 'Pets', 'Welcome on a leash. Clean up after them.']].map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d)))))));
  }
  function Groups() {
    const {
      book
    } = useApp();
    const P = D().park;
    const W = HP.weekends(HP.add(HP.today, 1), 8).map(w => ({
      ...w,
      ev: HP.eventFor(w.arrive, w.depart)
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Groups",
      title: "Bring the club.",
      intro: "Hawk Pride welcomes organized group rides. Pick a weekend, give us a call, and we\u2019ll help you plan it.",
      actions: [/*#__PURE__*/React.createElement("a", {
        key: "c",
        href: 'tel:' + P.tel,
        className: "hp-btn hp-btn--lg hp-btn--primary",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      }), "Call to Plan a Group Ride")],
      image: IMG + 'hillside-traffic.jpg',
      imageAlt: "A club riding together"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Who comes",
      title: "Built for a crowd."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Off-road clubs', 'Monthly rides and club weekends.'], ['Jeep groups', 'Including runs on Uphill Both Ways.'], ['Side-by-side groups', 'Miles of trails wide enough for a convoy.'], ['Family & friends', 'Reunions, birthdays and big crews.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        borderTop: '3px solid var(--gold-400)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, d))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Open weekends",
      title: "Weekends open for groups.",
      intro: "Regular weekends are the easiest to coordinate. Event weekends are busy, so call first."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4",
      style: {
        gap: 10
      }
    }, W.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.arrive,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 24
      }
    }, HP.range(w.arrive, w.depart)), w.ev ? /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, w.ev.title) : /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Open for groups"))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Where your group stays",
      title: "Room for everyone."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['Cabins', HP.count('cabin') + ' cabins, ' + HP.priceLabel('cabin').toLowerCase() + '.', 'cabins'], ['RV sites', HP.count('powered') + ' powered and ' + HP.count('dry') + ' dry pads.', 'camping'], ['Camping', 'Primitive sites and open camping areas.', 'camping']].map(([t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, t)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Plan your group ride"), /*#__PURE__*/React.createElement("a", {
      href: 'tel:' + P.tel,
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-display-l)',
        color: 'var(--stone-50)',
        textDecoration: 'none',
        lineHeight: 1
      }
    }, P.phone), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-inverse-muted)',
        marginTop: 6
      }
    }, "Tell us your dates, how many are coming and how you\u2019re staying.")), /*#__PURE__*/React.createElement("a", {
      href: 'tel:' + P.tel,
      className: "hp-btn hp-btn--lg hp-btn--primary",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 20
    }), "Call now"))));
  }
  const RULES = [['Riders & vehicles', ['Every rider pays admission and signs a waiver.', 'Vehicles must have working brakes and a spill-free fuel system.', 'Flags on whips are required on event weekends.']], ['Safety', ['Helmets required on ATVs, dirt bikes and open side-by-sides.', 'Seat belts on whenever the vehicle is moving.', 'Ride with a buddy on difficult and extreme trails.']], ['Kids & minors', ['Riders under 16 must be supervised by an adult.', 'A parent or guardian signs the waiver for anyone under 18.', 'Kids 12 and under ride free.']], ['Speed & conduct', ['15 mph in the campground and near the pavilion.', 'Stay on marked trails. Closed means closed.', 'Uphill traffic has the right of way.']], ['Alcohol', ['No drinking and driving, on or off the trail.', 'Keep it at camp.']], ['Camping & fires', ['Fires in rings only.', 'Quiet hours 10 PM to 7 AM.', 'Pack out what you pack in.']], ['Pets', ['Leashed in the campground.', 'Clean up after them.']], ['Not allowed', ['Riding after gates close.', 'Glass on the trails.', 'Fireworks outside of approved holiday times.']]];
  function Rules({
    waiver
  }) {
    const [open, setOpen] = React.useState(waiver);
    const {
      go
    } = useApp();
    React.useEffect(() => setOpen(waiver), [waiver]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Rules",
      title: "Know before you go.",
      intro: "The short version: wear a helmet, stay on the trail, look out for each other. The details are below.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "w",
        size: "lg",
        icon: "file-text",
        onClick: () => setOpen(true)
      }, "Sign Waiver")]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '36px 48px'
      }
    }, RULES.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h3)',
        margin: '0 0 12px',
        borderBottom: '3px solid var(--gold-400)',
        paddingBottom: 8,
        display: 'inline-block'
      }
    }, t), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, items.map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, x)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Waiver required for every rider"
    }, "Sign online before you arrive and you\u2019ll go straight through the gate. Booking online? We\u2019ll send you to your waivers right after checkout."))), open && /*#__PURE__*/React.createElement(window.WaiverDialog, {
      name: "",
      onClose: () => {
        setOpen(false);
        if (waiver) go('rules');
      },
      onSigned: () => {}
    }));
  }
  function Contact() {
    const P = D().park;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Contact",
      title: "Get in touch.",
      intro: "The fastest answer is a phone call. We pick up during park hours.",
      actions: [/*#__PURE__*/React.createElement("a", {
        key: "c",
        href: 'tel:' + P.tel,
        className: "hp-btn hp-btn--lg hp-btn--primary",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      }), P.phone), /*#__PURE__*/React.createElement("a", {
        key: "e",
        href: 'mailto:' + P.email,
        className: "hp-btn hp-btn--lg hp-btn--outline",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 20
      }), "Email")]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Address"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 6
      }
    }, P.address), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "hp-btn hp-btn--secondary",
      style: {
        textDecoration: 'none'
      },
      href: 'https://maps.google.com/?q=' + encodeURIComponent(P.address),
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 18
    }), "Directions"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Park hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 8,
        maxWidth: 320,
        fontSize: 17
      }
    }, P.hours.map(([d, h]) => /*#__PURE__*/React.createElement(Row, {
      key: d,
      l: d,
      v: h
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Follow along"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 8
      }
    }, P.social.map(([l, i]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 22
    }), l)))), /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "Emergency on the trail?"
    }, "Call 911 first, then the park office. Tell them your trail number from the nearest sign.")), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        aspectRatio: '4/3.4',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-card)',
        padding: '8px 14px',
        borderRadius: 4,
        fontSize: 14,
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }), "Map \xB7 Tuscumbia, AL"))))));
  }
  Object.assign(window, {
    Fees,
    Cabins,
    Camping,
    Groups,
    Rules,
    Contact
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/pages.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/proto-app.js
try { (() => {
(() => {
  const KEY = 'hp-proto-trip';
  const fresh = () => ({
    arrive: null,
    depart: null,
    stay: null,
    unit: null,
    adults: 2,
    kids: 0,
    guests: 0,
    names: {
      a: ['Brandon', 'Vann'],
      k: [],
      g: []
    },
    addAdmission: true,
    days: 0,
    eventId: null,
    contact: {
      first: 'Brandon',
      last: '',
      email: '',
      phone: ''
    },
    paid: false,
    code: null,
    waivers: {}
  });
  function useHash() {
    const [h, setH] = React.useState(location.hash);
    React.useEffect(() => {
      const f = () => {
        setH(location.hash);
        window.scrollTo(0, 0);
      };
      addEventListener('hashchange', f);
      return () => removeEventListener('hashchange', f);
    }, []);
    return h;
  }
  function App() {
    const hash = useHash();
    const [trip, setTrip] = React.useState(() => {
      try {
        return {
          ...fresh(),
          ...(JSON.parse(localStorage.getItem(KEY)) || {})
        };
      } catch (e) {
        return fresh();
      }
    });
    const update = React.useCallback(p => setTrip(t => {
      const n = {
        ...t,
        ...(typeof p === 'function' ? p(t) : p)
      };
      localStorage.setItem(KEY, JSON.stringify(n));
      return n;
    }), []);
    const go = React.useCallback(to => {
      location.hash = '#/' + (to === 'home' ? '' : to);
    }, []);
    const reset = () => {
      localStorage.removeItem(KEY);
      setTrip(fresh());
      go('home');
    };
    const book = (o = {}) => {
      const base = trip.paid ? {
        ...fresh(),
        names: trip.names,
        contact: trip.contact
      } : {};
      if (o.event) {
        const ev = window.HP_DATA.events.find(e => e.id === o.event);
        const t = {
          ...trip,
          ...base,
          arrive: ev.start,
          depart: ev.end
        };
        update({
          ...base,
          arrive: ev.start,
          depart: ev.end,
          eventId: ev.id,
          stay: null,
          unit: null,
          days: window.HP.openDays(t)
        });
        go('book/stay');
        return;
      }
      if (o.stay) {
        update({
          ...base,
          stay: o.stay,
          unit: null,
          addAdmission: true
        });
        go('book/dates');
        return;
      }
      update(base);
      go('book/dates');
    };
    const [path] = hash.replace(/^#\/?/, '').split('?');
    const seg = path.split('/').filter(Boolean);
    const page = seg[0] || 'home';
    const ctx = {
      trip,
      update,
      go,
      book,
      reset,
      seg
    };
    let body,
      booking = false;
    switch (page) {
      case 'events':
        body = seg[1] ? /*#__PURE__*/React.createElement(EventPage, {
          id: seg[1]
        }) : /*#__PURE__*/React.createElement(EventsIndex, null);
        break;
      case 'trails':
        body = seg[1] ? /*#__PURE__*/React.createElement(UphillBothWays, null) : /*#__PURE__*/React.createElement(Trails, null);
        break;
      case 'fees':
        body = /*#__PURE__*/React.createElement(Fees, null);
        break;
      case 'cabins':
        body = /*#__PURE__*/React.createElement(Cabins, null);
        break;
      case 'camping':
        body = /*#__PURE__*/React.createElement(Camping, null);
        break;
      case 'groups':
        body = /*#__PURE__*/React.createElement(Groups, null);
        break;
      case 'rules':
        body = /*#__PURE__*/React.createElement(Rules, {
          waiver: seg[1] === 'waiver'
        });
        break;
      case 'contact':
        body = /*#__PURE__*/React.createElement(Contact, null);
        break;
      case 'book':
        booking = true;
        body = /*#__PURE__*/React.createElement(Booking, {
          step: seg[1] || 'dates'
        });
        break;
      case 'checkout':
        booking = true;
        body = /*#__PURE__*/React.createElement(Checkout, null);
        break;
      case 'waivers':
        booking = true;
        body = /*#__PURE__*/React.createElement(Waivers, null);
        break;
      case 'confirmation':
        body = /*#__PURE__*/React.createElement(Confirmation, null);
        break;
      case 'gate':
        booking = true;
        body = /*#__PURE__*/React.createElement(Gate, null);
        break;
      default:
        body = /*#__PURE__*/React.createElement(Home, null);
    }
    return /*#__PURE__*/React.createElement(AppCtx.Provider, {
      value: ctx
    }, booking ? body : /*#__PURE__*/React.createElement(Shell, {
      page: page
    }, body));
  }
  const need = ['Shell', 'Home', 'Fees', 'Cabins', 'Camping', 'Groups', 'Rules', 'Contact', 'EventsIndex', 'EventPage', 'Trails', 'UphillBothWays', 'Booking', 'Checkout', 'Waivers', 'Confirmation', 'Gate', 'BkFrame'];
  const start = () => {
    if (need.some(n => !window[n])) return setTimeout(start, 30);
    if (window.__hpRoot) return;
    window.__hpRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__hpRoot.render(/*#__PURE__*/React.createElement(App, null));
  };
  start();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/proto-app.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/proto-home.js
try { (() => {
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    DifficultyBadge
  } = window.DS;
  const IMG = './assets/photos/';
  function Hero() {
    const {
      book,
      go
    } = useApp();
    const ev = window.HP_DATA.events[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(80vh,700px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: IMG + 'hillside-traffic.jpg',
      alt: "A line of side-by-sides and buggies climbing a dirt hill through the trees",
      position: "50% 35%",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94) 0%, rgba(13,13,11,.6) 50%, rgba(13,13,11,.2) 100%), linear-gradient(to right, rgba(13,13,11,.6) 0%, rgba(13,13,11,0) 65%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 32,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 780
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Tuscumbia, Alabama \xB7 Open Fri \u2013 Sun"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        width: 48,
        margin: '10px 0 14px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: 0,
        color: 'var(--stone-50)',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "Go conquer something."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--stone-200)',
        fontSize: 19,
        maxWidth: 520,
        margin: '16px 0 26px',
        lineHeight: 1.5
      }
    }, "Easy trails. Hard climbs. Long weekends. Over 1,000 acres of real off-road on one mountain in Northwest Alabama."), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book()
    }, "Book Now"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => go('trails')
    }, "See the trails"))), /*#__PURE__*/React.createElement("button", {
      onClick: () => go('events/' + ev.id),
      className: "hp-on-dark",
      style: {
        background: 'rgba(13,13,11,.72)',
        border: '1px solid var(--border-inverse)',
        borderLeft: '3px solid var(--gold-400)',
        color: 'var(--stone-50)',
        padding: '14px 18px',
        textAlign: 'left',
        font: 'inherit',
        cursor: 'pointer',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Next big weekend"), /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26,
        lineHeight: 1
      }
    }, ev.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--stone-200)'
      }
    }, HP.range(ev.start, ev.end), " \xB7 View event \u2192"))));
  }
  function Pathways() {
    const {
      go
    } = useApp();
    const P = [['Trail riding', 'From wooded loops to serious rock.', 'trails', IMG + 'pavilion-jeeps.jpg', 'Jeeps on an easy trail by the pavilion'], ['Events', 'Race weekends, club rides and holiday crowds.', 'events', IMG + 'event-crawl-crowd.jpg', 'Crowd watching a rock crawl'], ['Cabins & camping', 'Ride all day. Stay all weekend.', 'cabins', null, 'Cabin porch at dusk'], ['Group rides', 'Bring the club. We’ll save you a weekend.', 'groups', IMG + 'hillside-traffic.jpg', 'A group of rigs climbing together']];
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Find your weekend",
      title: "There\u2019s a Hawk Pride for the way you ride."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, P.map(([t, d, to, img, alt], i) => /*#__PURE__*/React.createElement("a", {
      key: t,
      href: '#/' + to,
      onClick: e => {
        e.preventDefault();
        go(to);
      },
      style: {
        position: 'relative',
        display: 'block',
        color: 'var(--stone-50)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        aspectRatio: i % 2 ? '3/4.2' : '3/4',
        marginTop: i % 2 ? 32 : 0,
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: img || undefined,
      caption: img ? undefined : alt,
      alt: alt,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.92) 0%, rgba(13,13,11,.1) 60%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 18
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 30,
        lineHeight: 1,
        color: 'var(--stone-50)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: 15,
        color: 'var(--stone-200)'
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 10,
        color: 'var(--gold-400)',
        fontWeight: 700,
        fontSize: 14
      }
    }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))))));
  }
  function Proof() {
    const {
      go
    } = useApp();
    const pts = [['Easy to extreme', 'Wooded loops for the family, ledges for the buggy.'], ['Signature rock', 'Technical crawling and named obstacles.'], ['Uphill Both Ways', 'A Jeep Badge of Honor trail.', 'trails/uphill-both-ways'], [HP.count('cabin') + ' cabins · ' + (HP.count('powered') + HP.count('dry')) + ' RV pads', 'Plus primitive sites and open camping.'], ['Big event weekends', 'Hillclimbs, rock crawls and club rides.'], ['Groups welcome', 'Clubs, families and friends.', 'groups']];
    return /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)',
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 460,
        marginLeft: 'calc(-1 * var(--container-pad))'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: IMG + 'rock-ledge-buggies.jpg',
      alt: "Buggies working up a rock ledge",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "The mountain"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95
      }
    }, "One mountain. Every kind of ride."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.55,
        color: 'var(--stone-200)',
        margin: '16px 0 28px',
        maxWidth: 520
      }
    }, "Over 1,000 acres and 120+ rock trails, with creeks, climbs, mud and woods in between. Pick your line and bring whatever you drive."), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '18px 28px'
      }
    }, pts.map(([t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        borderTop: '1px solid var(--border-inverse)',
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to,
      dark: true
    }, t) : t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--text-inverse-muted)',
        marginTop: 4
      }
    }, d)))))));
  }
  function Upcoming() {
    const {
      go
    } = useApp();
    const E = window.HP_DATA.events.slice(0, 3);
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Coming up",
      title: "Something\u2019s always happening.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        iconRight: "arrow-right",
        onClick: () => go('events')
      }, "All events")
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, E.map(e => /*#__PURE__*/React.createElement("a", {
      key: e.id,
      href: '#/events/' + e.id,
      onClick: ev => {
        ev.preventDefault();
        go('events/' + e.id);
      },
      className: "hp-card hp-card--interactive",
      style: {
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event photo',
      alt: e.title,
      ratio: "16/10",
      topLeft: /*#__PURE__*/React.createElement("div", {
        className: "hp-on-dark",
        style: {
          background: 'var(--black-950)',
          color: 'var(--stone-50)',
          padding: '6px 10px',
          textAlign: 'center',
          lineHeight: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "hp-eyebrow",
        style: {
          color: 'var(--gold-400)',
          fontSize: 11
        }
      }, HP.M[HP.p(e.start).getMonth()]), /*#__PURE__*/React.createElement("div", {
        className: "hp-display",
        style: {
          fontSize: 28
        }
      }, HP.p(e.start).getDate()))
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, e.type, " \xB7 ", HP.range(e.start, e.end)), e.status === 'few' && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Few sites left")), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, e.hook), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700,
        fontSize: 14,
        marginTop: 4
      }
    }, "View event ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))))));
  }
  function Stay() {
    const {
      go,
      book
    } = useApp();
    const C = window.HP_DATA.categories;
    const S = [['Cabins', HP.priceLabel('cabin'), 'Beds, A/C and a porch.', 'cabins', 'cabin'], ['RV sites', HP.money(HP.rate('powered')) + ' powered · ' + HP.money(HP.rate('dry')) + ' dry', 'Level pads close to the trails.', 'camping', 'powered'], ['Camping', 'From ' + HP.priceLabel('anywhere'), 'Primitive sites or camp anywhere.', 'camping', 'primitive']];
    return /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Stay the weekend",
      title: "Ride all day. Stay all weekend."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, S.map(([t, p, d, to, stay]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: t,
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, p), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => book({
        stay
      })
    }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => go(to)
    }, "Details")))))));
  }
  function Life() {
    const T = [[IMG + 'buggy-airborne.jpg', 'Buggy catching air on the hill', '2/1'], [null, 'Family at the overlook', '1/1'], [IMG + 'pavilion-jeeps.jpg', 'Rigs lined up at the pavilion', '1/1'], [null, 'Campfire at the RV pads', '1/1'], [IMG + 'event-crawl-crowd.jpg', 'Event crowd at the rock pit', '1/1'], [null, 'View across the property', '2/1']];
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Life at Hawk Pride",
      title: "Real dirt. Real people."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gridAutoRows: 'minmax(160px,22vw)',
        gap: 10,
        maxHeight: 720
      },
      className: "proto-life"
    }, T.map(([s, a, r], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        gridColumn: r === '2/1' ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: s || undefined,
      caption: s ? undefined : a,
      alt: a,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })))));
  }
  function Final() {
    const {
      book
    } = useApp();
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gold-400)',
        color: 'var(--black-950)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        color: 'var(--black-950)'
      }
    }, "Pick your dates. We\u2019ll handle the rest."), /*#__PURE__*/React.createElement("button", {
      onClick: () => book(),
      className: "hp-btn hp-btn--lg",
      style: {
        background: 'var(--black-950)',
        color: 'var(--gold-400)',
        borderColor: 'var(--black-950)'
      }
    }, "Book Now ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))));
  }
  function Home() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Pathways, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Upcoming, null), /*#__PURE__*/React.createElement(Stay, null), /*#__PURE__*/React.createElement(Life, null), /*#__PURE__*/React.createElement(Final, null));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/proto-home.js", error: String((e && e.message) || e) }); }

// downloads/hawk-pride-prototype/scripts/proto-shell.js
try { (() => {
(() => {
  const {
    SiteHeader,
    Alert,
    Icon,
    Button,
    IconButton
  } = window.DS;
  const LINKS = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'trails',
    label: 'Trails'
  }, {
    id: 'fees',
    label: 'Fees'
  }, {
    id: 'cabins',
    label: 'Cabins'
  }, {
    id: 'camping',
    label: 'Camping'
  }, {
    id: 'groups',
    label: 'Groups'
  }, {
    id: 'rules',
    label: 'Rules'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const Ctx = React.createContext(null);
  const useApp = () => React.useContext(Ctx);
  const LOGO = './assets/logo/brandmark-gold.svg';
  function MobileMenu({
    open,
    onClose
  }) {
    const {
      go,
      book
    } = useApp();
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px var(--container-pad)',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-header__brand"
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "",
      style: {
        height: 42
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "hp-header__name",
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("span", null, "Hawk Pride"), /*#__PURE__*/React.createElement("span", null, "Offroad"))), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      variant: "dark",
      onClick: onClose
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 16
      }
    }, LINKS.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => {
        go(l.id);
        onClose();
      },
      className: "hp-display",
      style: {
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--border-inverse)',
        color: 'var(--stone-50)',
        fontSize: 34,
        textAlign: 'left',
        padding: '10px 0',
        cursor: 'pointer'
      }
    }, l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => {
        book();
        onClose();
      }
    }, "Book Now")));
  }
  function Shell({
    page,
    children
  }) {
    const {
      go,
      book
    } = useApp();
    const [m, setM] = React.useState(false);
    const P = window.HP_DATA.park;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--bg-page)',
        minHeight: '100vh'
      }
    }, HP.notices('site').map(n => /*#__PURE__*/React.createElement(Alert, {
      key: n.title,
      tone: n.tone,
      title: n.title
    }, n.text)), /*#__PURE__*/React.createElement("div", {
      className: "proto-header"
    }, /*#__PURE__*/React.createElement(SiteHeader, {
      logoSrc: LOGO,
      links: LINKS,
      current: page,
      onNavigate: go,
      onBook: () => book(),
      ctaLabel: "Book Now",
      onMenu: () => setM(true)
    })), /*#__PURE__*/React.createElement(MobileMenu, {
      open: m,
      onClose: () => setM(false)
    }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, null));
  }
  function Footer() {
    const {
      go,
      reset
    } = useApp();
    const P = window.HP_DATA.park;
    const col = (t, items) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, t), items);
    const a = (l, id) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: '#/' + id,
      onClick: e => {
        e.preventDefault();
        go(id);
      },
      className: "proto-footlink"
    }, l);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderTop: '3px solid var(--gold-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '48px var(--container-pad) 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "Hawk Pride Offroad",
      style: {
        width: 150
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        color: 'var(--gold-400)',
        fontSize: 22
      }
    }, "Go conquer something.")), col('Visit', [/*#__PURE__*/React.createElement("span", {
      key: "a",
      className: "proto-foottext"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }), P.address), /*#__PURE__*/React.createElement("a", {
      key: "p",
      href: 'tel:' + P.tel,
      className: "proto-footlink"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }), P.phone), /*#__PURE__*/React.createElement("a", {
      key: "e",
      href: 'mailto:' + P.email,
      className: "proto-footlink"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    }), "Email us")]), col('Park', [a('Events', 'events'), a('Trails', 'trails'), a('Fees', 'fees'), a('Cabins', 'cabins'), a('Camping', 'camping'), a('Groups', 'groups')]), col('Before you come', [a('Rules', 'rules'), a('Sign a waiver', 'rules/waiver'), a('Find my trip', 'confirmation'), a('Contact', 'contact')]), col('Hours', P.hours.map(([d, h]) => /*#__PURE__*/React.createElement("span", {
      key: d,
      className: "proto-foottext",
      style: {
        justifyContent: 'space-between',
        maxWidth: 200
      }
    }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", null, h))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '16px var(--container-pad) 28px',
        borderTop: '1px solid var(--border-inverse)',
        fontSize: 13,
        color: 'var(--text-inverse-muted)',
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 Hawk Pride Offroad Adventure Park \xB7 Tuscumbia, Alabama"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 16
      }
    }, ['Partners', 'Host an event', 'Refund policy', 'Privacy', 'Terms'].map(x => /*#__PURE__*/React.createElement("span", {
      key: x
    }, x))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 10,
        marginLeft: 'auto'
      }
    }, P.social.map(([l, i]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      "aria-label": l
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    })))), /*#__PURE__*/React.createElement("a", {
      href: "#/gate",
      onClick: e => {
        e.preventDefault();
        go('gate');
      },
      className: "proto-footlink",
      style: {
        fontSize: 12,
        minHeight: 0
      }
    }, "Gate check-in (staff demo)"), /*#__PURE__*/React.createElement("button", {
      onClick: reset,
      style: {
        background: 'none',
        border: '1px solid var(--border-inverse)',
        color: 'var(--text-inverse-muted)',
        borderRadius: 4,
        padding: '4px 10px',
        font: 'inherit',
        fontSize: 12,
        cursor: 'pointer'
      }
    }, "Reset demo")));
  }
  function Section({
    eyebrow,
    title,
    action,
    intro,
    children,
    dark,
    sunken,
    style,
    id
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      className: dark ? 'hp-on-dark' : '',
      style: {
        background: dark ? 'var(--black-950)' : sunken ? 'var(--bg-sunken)' : 'transparent',
        color: dark ? 'var(--stone-50)' : 'inherit',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '64px var(--container-pad)'
      }
    }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 16,
        marginBottom: 28,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: dark ? 'var(--gold-400)' : 'var(--gold-700)'
      }
    }, eyebrow), eyebrow && /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-h1)',
        lineHeight: 1,
        color: dark ? 'var(--stone-50)' : 'var(--text-strong)',
        textWrap: 'balance'
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        fontSize: 17,
        lineHeight: 1.55,
        color: dark ? 'var(--stone-200)' : 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, intro)), action), children));
  }
  function PageHead({
    eyebrow,
    title,
    intro,
    actions,
    image,
    imageAlt,
    position
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "proto-pagehead",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '56px 0 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '10px 0 14px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        textWrap: 'balance'
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '16px 0 0',
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--stone-200)',
        maxWidth: 560,
        textWrap: 'pretty'
      }
    }, intro), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 24
      }
    }, actions)), image !== undefined && /*#__PURE__*/React.createElement("div", {
      className: "proto-pagehead__img"
    }, /*#__PURE__*/React.createElement(window.DS.Photo, {
      src: image || undefined,
      caption: image ? undefined : imageAlt,
      alt: imageAlt,
      position: position,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }))));
  }
  function Row({
    l,
    v,
    b,
    muted
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: b ? 17 : 15,
        fontWeight: b ? 700 : 400,
        color: b ? 'var(--text-strong)' : muted ? 'var(--text-muted)' : 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right'
      }
    }, v));
  }
  function TextLink({
    to,
    children,
    onClick,
    dark
  }) {
    const {
      go
    } = useApp();
    return /*#__PURE__*/React.createElement("a", {
      href: to ? '#/' + to : '#',
      onClick: e => {
        e.preventDefault();
        onClick ? onClick() : go(to);
      },
      style: {
        color: dark ? 'var(--gold-400)' : 'var(--text-strong)',
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: 3,
        textDecorationColor: 'var(--gold-400)',
        textDecorationThickness: 2,
        cursor: 'pointer'
      }
    }, children);
  }
  function Callout({
    children,
    dark
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 15,
        color: dark ? 'var(--stone-200)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 18,
      style: {
        flex: 'none',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, children));
  }
  Object.assign(window, {
    Shell,
    Section,
    PageHead,
    Row,
    TextLink,
    Callout,
    AppCtx: Ctx,
    useApp,
    HP_LINKS: LINKS,
    HP_LOGO: LOGO
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "downloads/hawk-pride-prototype/scripts/proto-shell.js", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Book.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    QuantityStepper,
    Input,
    Photo,
    IconButton
  } = window.DS;
  function Dates() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const ev = HP.eventFor(t.arrive, t.depart),
      n = HP.nights(t);
    const W = HP.weekends(HP.today, 4);
    const set = (a, d) => {
      const nt = {
        ...t,
        arrive: a,
        depart: d
      };
      update({
        arrive: a,
        depart: d,
        days: d ? Math.max(HP.openDays(nt), 1) : 0,
        unit: null
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 1",
      title: "When are you coming?",
      sub: "Pick your arrival and departure. Tap one day twice for a day trip."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        alignSelf: 'center',
        marginRight: 4
      }
    }, "Quick pick:"), W.map(w => /*#__PURE__*/React.createElement("button", {
      key: w.arrive,
      className: "hp-chip",
      "aria-pressed": t.arrive === w.arrive && t.depart === w.depart,
      onClick: () => set(w.arrive, w.depart),
      style: {
        font: 'inherit',
        fontSize: 14,
        padding: '8px 14px',
        borderRadius: 999,
        border: '1.5px solid ' + (t.arrive === w.arrive && t.depart === w.depart ? 'var(--black-950)' : 'var(--border-default)'),
        background: t.arrive === w.arrive && t.depart === w.depart ? 'var(--black-950)' : 'var(--surface-card)',
        color: t.arrive === w.arrive && t.depart === w.depart ? 'var(--gold-400)' : 'inherit',
        cursor: 'pointer',
        fontWeight: 600
      }
    }, HP.range(w.arrive, w.depart), HP.eventFor(w.arrive, w.depart) ? ' · Event' : ''))), /*#__PURE__*/React.createElement(Calendar, {
      arrive: t.arrive,
      depart: t.depart,
      onPick: set
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        marginTop: 16
      }
    }, t.arrive && !t.depart && /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: 'Arriving ' + HP.fmtLong(t.arrive)
    }, "Now pick your departure day."), ev && /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: 'Your dates include ' + ev.title
    }, "It\u2019s an event weekend, so cabins and RV sites go fast. ", /*#__PURE__*/React.createElement(TextLink, {
      to: 'events/' + ev.id
    }, "See the event")), t.arrive && t.depart && HP.openDays(t) === 0 && /*#__PURE__*/React.createElement(Alert, {
      tone: "closed",
      title: "The park is closed for riding on these dates"
    }, "You can still camp. Riding is open Friday to Sunday and on event days.")), /*#__PURE__*/React.createElement(StepNav, {
      next: () => go('book/stay'),
      ok: BK.valid('dates', t),
      hint: "Pick arrival and departure"
    }));
  }
  function Stay() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const av = HP.availability(t),
      n = HP.nights(t);
    const C = window.HP_DATA.categories;
    const pick = id => update({
      stay: id,
      unit: t.stay === id ? t.unit : null,
      addAdmission: true
    });
    const price = c => HP.priceLabel(c.id);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 2",
      title: "Where are you staying?",
      sub: n ? n + ' night' + (n > 1 ? 's' : '') + ', ' + HP.range(t.arrive, t.depart) + '.' : 'Day trip on ' + HP.fmtLong(t.arrive) + '.'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, C.map(c => {
      const a = av[c.id],
        sold = a.count === 0,
        dis = sold || n === 0,
        sel = t.stay === c.id;
      return /*#__PURE__*/React.createElement("button", {
        key: c.id,
        className: "opt",
        "aria-pressed": sel,
        disabled: dis,
        onClick: () => pick(c.id)
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          background: sel ? 'var(--black-950)' : 'var(--bg-sunken)',
          color: sel ? 'var(--gold-400)' : 'inherit',
          display: 'grid',
          placeItems: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: c.icon,
        size: 24
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 19
        }
      }, c.name), sold ? /*#__PURE__*/React.createElement(Badge, {
        tone: "danger"
      }, "Sold out") : c.model === 'unit' ? /*#__PURE__*/React.createElement(Badge, {
        tone: a.count <= 2 ? 'warning' : 'success'
      }, a.count, " available") : /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Open")), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: 15,
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, c.desc)), /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'right',
          fontWeight: 700,
          whiteSpace: 'nowrap'
        }
      }, price(c)));
    }), /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": t.stay === 'none',
      onClick: () => update({
        stay: 'none',
        unit: null,
        addAdmission: true
      })
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: t.stay === 'none' ? 'var(--black-950)' : 'var(--bg-sunken)',
        color: t.stay === 'none' ? 'var(--gold-400)' : 'inherit',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 19
      }
    }, "No overnight stay"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, "Just riding admission.")))), n === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "Overnight options need at least one night. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "book/dates"
    }, "Change dates"))), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/dates'),
      next: () => go(BK.needsSite(t) ? 'book/site' : 'book/party'),
      ok: BK.valid('stay', t),
      hint: "Choose a stay"
    }));
  }
  function Site() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const c = HP.cat(t.stay);
    const av = HP.availability(t)[t.stay];
    const U = window.HP_DATA.units.filter(u => u.cat === t.stay);
    const [hl, setHl] = React.useState(null);
    const [view, setView] = React.useState(null);
    const n = HP.nights(t);
    const free = id => av.free.includes(id);
    const sorted = [...U].sort((a, b) => free(b.id) - free(a.id));
    const state = u => !free(u.id) ? 'taken' : t.unit === u.id ? 'sel' : hl === u.id ? 'hl' : 'free';
    const select = id => {
      update({
        unit: id
      });
      setView(null);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Step 3",
      title: 'Pick your ' + (t.stay === 'cabin' ? 'cabin' : 'site') + '.',
      sub: av.count + ' of ' + U.length + ' ' + c.plural.toLowerCase() + ' open for ' + HP.range(t.arrive, t.depart) + '. Hover a card to find it on the map.'
    }), /*#__PURE__*/React.createElement("div", {
      className: "bk-site"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxHeight: 640,
        overflowY: 'auto',
        paddingRight: 4
      }
    }, sorted.map(u => {
      const f = free(u.id);
      return /*#__PURE__*/React.createElement("div", {
        key: u.id,
        className: "unit",
        "data-hl": hl === u.id ? 1 : 0,
        "data-sel": t.unit === u.id ? 1 : 0,
        onMouseEnter: () => setHl(u.id),
        onMouseLeave: () => setHl(null),
        style: {
          opacity: f ? 1 : .55
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          minHeight: 90
        }
      }, /*#__PURE__*/React.createElement(Photo, {
        caption: u.name,
        ratio: "auto",
        style: {
          position: 'absolute',
          inset: 0,
          aspectRatio: 'auto',
          borderRadius: 0
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 17
        }
      }, u.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700
        }
      }, HP.money(u.price), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 400,
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, " / night"))), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: 'var(--text-muted)'
        }
      }, "Sleeps ", u.sleeps, u.beds ? ' · ' + u.beds : ''), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginTop: 'auto',
          paddingTop: 6,
          alignItems: 'center'
        }
      }, f ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: t.unit === u.id ? 'primary' : 'secondary',
        icon: t.unit === u.id ? 'check' : undefined,
        onClick: () => select(u.id)
      }, t.unit === u.id ? 'Selected' : 'Select'), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        onClick: () => setView(u)
      }, "View details")) : /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "Booked"))));
    })), /*#__PURE__*/React.createElement("div", {
      className: "bk-map",
      style: {
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        position: 'relative',
        aspectRatio: '4/3.3',
        background: 'var(--stone-100)'
      }
    }, window.HP_DATA.landmarks.map(([l, x, y]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        position: 'absolute',
        left: x + '%',
        top: y + '%',
        transform: 'translate(-50%,-50%)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        background: 'rgba(255,255,255,.8)',
        padding: '2px 6px',
        borderRadius: 3,
        whiteSpace: 'nowrap'
      }
    }, l)), U.map(u => /*#__PURE__*/React.createElement("button", {
      key: u.id,
      className: "map-pin",
      "data-state": state(u),
      disabled: !free(u.id),
      style: {
        left: u.x + '%',
        top: u.y + '%'
      },
      onMouseEnter: () => setHl(u.id),
      onMouseLeave: () => setHl(null),
      onClick: () => setView(u),
      "aria-label": u.name + (free(u.id) ? '' : ' (booked)')
    }, u.name.replace(/\D+/g, '')))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        padding: '10px 14px',
        fontSize: 13,
        color: 'var(--text-muted)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--gold-400)',
        border: '1.5px solid var(--black-950)'
      }
    }), "Available"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--stone-200)'
      }
    }), "Booked"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--black-950)'
      }
    }), "Your pick"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, "Sample map"))))), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/stay'),
      next: () => go('book/party'),
      ok: BK.valid('site', t),
      hint: "Select a site"
    }), view && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "drawer-scrim",
      onClick: () => setView(null)
    }), /*#__PURE__*/React.createElement("div", {
      className: "drawer",
      role: "dialog",
      "aria-label": view.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, view.name), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      onClick: () => setView(null)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: view.name + ' · photo',
      ratio: "16/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Interior",
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement(Photo, {
      caption: "Parking",
      ratio: "4/3"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17
      }
    }, view.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: "Sleeps",
      v: view.sleeps
    }), view.beds && /*#__PURE__*/React.createElement(Row, {
      l: "Beds",
      v: view.beds
    }), /*#__PURE__*/React.createElement(Row, {
      l: t.stay === 'cabin' ? 'Climate' : 'Hookups',
      v: t.stay === 'cabin' ? 'A/C and heat' : t.stay === 'powered' ? '50A electric, water' : 'None · generators OK'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Parking",
      v: "Truck and trailer"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Check-in / out",
      v: "2 PM / noon"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, HP.money(view.price * n)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, HP.money(view.price), " \xD7 ", n, " night", n > 1 ? 's' : '')), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => select(view.id)
    }, "Select ", view.name)))));
  }
  function Party() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const u = HP.unit(t.unit);
    const over = u && HP.people(t) > u.sleeps;
    const setN = (k, key, v) => update(s => {
      const names = {
        ...s.names
      };
      const arr = [...(names[key] || [])];
      while (arr.length < v) arr.push('');
      names[key] = arr;
      return {
        [k]: v,
        names
      };
    });
    const setName = (key, i, v) => update(s => {
      const names = {
        ...s.names
      };
      const arr = [...(names[key] || [])];
      arr[i] = v;
      names[key] = arr;
      return {
        names
      };
    });
    const group = (key, count, label) => Array.from({
      length: count
    }, (_, i) => /*#__PURE__*/React.createElement(Input, {
      key: key + i,
      label: label + ' ' + (i + 1),
      placeholder: "First and last name",
      value: (t.names[key] || [])[i] || '',
      onChange: e => setName(key, i, e.target.value)
    }));
    const back = BK.needsSite(t) ? 'book/site' : 'book/stay';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: 'Step ' + (BK.stepsFor(t).indexOf('party') + 1),
      title: "Who\u2019s coming?",
      sub: "We need a name for everyone so the gate can check you in and waivers go to the right people."
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: '4px 20px'
      }
    }, [['adults', 'a', 'Adult riders', 'Ages 13 and up', 1], ['kids', 'k', 'Child riders', '12 and under · ride free', 0], ['guests', 'g', 'Non-riding guests', 'Staying, not riding', 0]].map(([k, key, l, d, min], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        padding: '14px 0',
        borderTop: i ? '1px solid var(--border-subtle)' : 0
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: l,
      description: d,
      value: t[k],
      min: min,
      max: 12,
      onChange: v => setN(k, key, v)
    })))), over && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: u.name + ' sleeps ' + u.sleeps
    }, "You have ", HP.people(t), " people. Pick a bigger cabin or add a campsite in a second booking.")), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "Names"), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 14
      }
    }, group('a', t.adults, 'Adult rider'), group('k', t.kids, 'Child rider'), group('g', t.guests, 'Guest')), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go(back),
      next: () => go('book/admission'),
      ok: BK.valid('party', t),
      hint: over ? 'Too many people for this cabin' : 'Add a name for everyone'
    }));
  }
  function Admission() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const max = BK.maxDays(t);
    const none = t.stay === 'none';
    React.useEffect(() => {
      if (!t.days || t.days > max) update({
        days: max
      });
    }, []);
    const days = Math.min(t.days || max, max),
      want = none || t.addAdmission !== false;
    const P = window.HP_DATA.pricing;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: 'Step ' + (BK.stepsFor(t).indexOf('admission') + 1),
      title: none ? 'Riding admission.' : 'Add riding admission?',
      sub: none ? 'Pay now and go straight through the gate.' : 'Your stay doesn’t include riding. Add it now and skip the line at the gate.'
    }), !none && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": want,
      onClick: () => update({
        addAdmission: true
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, "Yes, add riding admission"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "For every adult rider in your party.")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, HP.money(t.adults * HP.admissionPer(days)))), /*#__PURE__*/React.createElement("button", {
      className: "opt",
      "aria-pressed": !want,
      onClick: () => update({
        addAdmission: false
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, "No, we\u2019ll pay at the gate"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "Or we\u2019re not riding this trip.")))), want && /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Riding days",
      description: max + ' open riding day' + (max > 1 ? 's' : '') + ' on your dates',
      value: days,
      min: 1,
      max: max,
      onChange: v => update({
        days: v
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + Math.min(days, 2) + ' day' + (Math.min(days, 2) > 1 ? 's' : '') + ' × ' + HP.money(P.day),
      v: HP.money(t.adults * P.day * Math.min(days, 2))
    }), days > 2 && /*#__PURE__*/React.createElement(Row, {
      l: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + (days - 2) + ' more day' + (days > 3 ? 's' : '') + ' × ' + HP.money(P.dayLater),
      v: HP.money(t.adults * P.dayLater * (days - 2))
    }), t.kids > 0 && /*#__PURE__*/React.createElement(Row, {
      muted: true,
      l: t.kids + ' child rider' + (t.kids > 1 ? 's' : '') + ' (12 and under)',
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Admission total",
      v: HP.money(HP.admission({
        ...t,
        days
      }))
    })), days > 2 && /*#__PURE__*/React.createElement(Callout, null, "Multi-day savings applied: ", HP.money(P.dayLater), " a day from day 3.")), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/party'),
      next: () => go('book/review'),
      ok: BK.valid('admission', t)
    }));
  }
  function Review() {
    const {
      trip: t,
      go
    } = useApp();
    const P = HP.participants(t);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Last step",
      title: "Your Hawk Pride trip.",
      sub: "Check everything over. You can edit any part before you pay."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(TripSummary, null), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, "Everyone on this trip"), /*#__PURE__*/React.createElement(TextLink, {
      to: "book/party"
    }, "Edit")), P.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, p.type, p.waiver ? ' · waiver needed' : '')))), /*#__PURE__*/React.createElement(Callout, null, "After you pay, each rider signs a waiver online. It takes about a minute per person.")), /*#__PURE__*/React.createElement(StepNav, {
      back: () => go('book/admission'),
      next: () => go('checkout'),
      label: "Checkout"
    }));
  }
  function Booking({
    step
  }) {
    const {
      trip: t,
      go
    } = useApp();
    const S = BK.stepsFor(t);
    const first = S.find((s, i) => i < S.indexOf(step) && !BK.valid(s, t));
    React.useEffect(() => {
      if (!S.includes(step)) go('book/' + (first || 'dates'));else if (first) go('book/' + first);
    }, [step, first]);
    const cur = S.includes(step) ? first || step : 'dates';
    const V = {
      dates: Dates,
      stay: Stay,
      site: Site,
      party: Party,
      admission: Admission,
      review: Review
    }[cur] || Dates;
    return /*#__PURE__*/React.createElement(BkFrame, {
      step: cur,
      aside: cur === 'review' ? /*#__PURE__*/React.createElement(NextSteps, {
        at: "review"
      }) : undefined
    }, /*#__PURE__*/React.createElement(V, null));
  }
  window.Booking = Booking;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Book.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/BookParts.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge
  } = window.DS;
  const LABEL = {
    dates: 'Dates',
    stay: 'Stay',
    site: 'Site',
    party: 'Riders',
    admission: 'Admission',
    review: 'Review'
  };
  const needsSite = t => {
    const c = HP.cat(t.stay);
    return !!c && c.model === 'unit';
  };
  const stepsFor = t => ['dates', 'stay', ...(needsSite(t) ? ['site'] : []), 'party', 'admission', 'review'];
  const maxDays = t => Math.max(HP.openDays(t), t.arrive ? 1 : 0);
  function valid(s, t) {
    const av = HP.availability(t),
      n = HP.nights(t);
    switch (s) {
      case 'dates':
        return !!(t.arrive && t.depart && t.depart >= t.arrive);
      case 'stay':
        return !!t.stay && (t.stay === 'none' || n > 0 && av[t.stay] && av[t.stay].count > 0);
      case 'site':
        return !needsSite(t) || !!t.unit && (av[t.stay].free || []).includes(t.unit);
      case 'party':
        {
          if ((t.adults || 0) < 1) return false;
          if (HP.participants(t).some(p => !p.name || !p.name.trim())) return false;
          const u = HP.unit(t.unit);
          return !(u && HP.people(t) > u.sleeps);
        }
      case 'admission':
        return t.stay !== 'none' || (t.days || 0) > 0;
      default:
        return true;
    }
  }
  function Frame({
    step,
    children,
    aside,
    done
  }) {
    const {
      go,
      trip
    } = useApp();
    const S = stepsFor(trip);
    const idx = done ? S.length : S.indexOf(step);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--bg-page)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("header", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderBottom: '3px solid var(--gold-400)',
        position: 'sticky',
        top: 0,
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '10px var(--container-pad)',
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/",
      onClick: e => {
        e.preventDefault();
        go('home');
      },
      "aria-label": "Hawk Pride Offroad, home",
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: HP_LOGO,
      alt: "",
      style: {
        height: 44
      }
    })), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "Booking steps",
      style: {
        display: 'flex',
        gap: 2,
        flex: 1,
        overflowX: 'auto'
      }
    }, S.map((s, i) => {
      const past = i < idx,
        cur = i === idx;
      return /*#__PURE__*/React.createElement("button", {
        key: s,
        disabled: !past || !!done,
        onClick: () => go('book/' + s),
        "aria-current": cur ? 'step' : undefined,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'none',
          border: 0,
          color: cur ? 'var(--gold-400)' : past ? 'var(--stone-50)' : 'var(--text-inverse-muted)',
          font: 'inherit',
          fontSize: 14,
          fontWeight: 700,
          padding: '8px 10px',
          cursor: past && !done ? 'pointer' : 'default',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          fontSize: 12,
          background: cur ? 'var(--gold-400)' : past ? 'var(--stone-50)' : 'transparent',
          color: cur || past ? 'var(--black-950)' : 'inherit',
          border: cur || past ? 0 : '1.5px solid var(--text-inverse-muted)'
        }
      }, past ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14
      }) : i + 1), LABEL[s]);
    }), done && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--gold-400)',
        fontSize: 14,
        fontWeight: 700,
        padding: '8px 10px',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    }), done)), /*#__PURE__*/React.createElement("button", {
      onClick: () => go('home'),
      style: {
        background: 'none',
        border: 0,
        color: 'var(--stone-200)',
        font: 'inherit',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }), "Exit"))), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '40px var(--container-pad) 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bk-layout"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, children), /*#__PURE__*/React.createElement("aside", {
      className: "bk-aside",
      style: {
        position: 'sticky',
        top: 96
      }
    }, aside === undefined ? /*#__PURE__*/React.createElement(Summary, null) : aside))));
  }
  function StepHead({
    eyebrow,
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 28
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        margin: '6px 0 0',
        textWrap: 'balance'
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: 17,
        color: 'var(--text-muted)',
        maxWidth: 600,
        textWrap: 'pretty'
      }
    }, sub));
  }
  function StepNav({
    back,
    next,
    label = 'Continue',
    ok = true,
    hint
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 36,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, back ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "arrow-left",
      onClick: back
    }, "Back") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, !ok && hint && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 14
      }
    }, hint), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      disabled: !ok,
      onClick: next
    }, label)));
  }
  function Summary({
    editable = true
  }) {
    const {
      trip: t,
      go
    } = useApp();
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      n = HP.nights(t),
      ev = HP.eventFor(t.arrive, t.depart),
      adm = HP.wantsAdmission(t) ? HP.admission(t) : 0,
      lod = HP.lodging(t);
    const Line = ({
      icon,
      label,
      value,
      to
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '12px 0',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20,
      style: {
        flex: 'none',
        marginTop: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, value || /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)',
        fontWeight: 400
      }
    }, "Not chosen yet"))), editable && value && to && /*#__PURE__*/React.createElement("a", {
      href: '#/book/' + to,
      onClick: e => {
        e.preventDefault();
        go('book/' + to);
      },
      style: {
        fontSize: 14,
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, "Edit"));
    const party = t.adults ? [t.adults + ' adult rider' + (t.adults > 1 ? 's' : ''), t.kids ? t.kids + ' child rider' + (t.kids > 1 ? 's' : '') : null, t.guests ? t.guests + ' guest' + (t.guests > 1 ? 's' : '') : null].filter(Boolean).join(', ') : null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 22,
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Your Hawk Pride trip"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 30,
        margin: '4px 0 12px'
      }
    }, t.arrive && t.depart ? HP.range(t.arrive, t.depart) : 'Pick your dates'), ev && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "calendar-days"
    }, ev.title)), /*#__PURE__*/React.createElement(Line, {
      icon: "calendar-days",
      label: "Dates",
      value: t.arrive && t.depart ? n ? n + ' night' + (n > 1 ? 's' : '') : 'Day trip' : null,
      to: "dates"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: c ? c.icon : 'tent',
      label: "Stay",
      value: t.stay === 'none' ? 'No overnight stay' : c ? c.name + (u ? ' · ' + u.name : '') : null,
      to: "stay"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: "users",
      label: "Party",
      value: party,
      to: "party"
    }), /*#__PURE__*/React.createElement(Line, {
      icon: "ticket",
      label: "Riding admission",
      value: t.stay && t.days ? HP.wantsAdmission(t) ? t.adults + ' × ' + t.days + ' day' + (t.days > 1 ? 's' : '') : 'Pay at the gate' : null,
      to: "admission"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '2px solid var(--black-950)',
        paddingTop: 14,
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, lod > 0 && /*#__PURE__*/React.createElement(Row, {
      l: c.name + ' · ' + n + ' night' + (n > 1 ? 's' : ''),
      v: HP.money(lod)
    }), adm > 0 && /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: HP.money(adm)
    }), t.kids > 0 && HP.wantsAdmission(t) && /*#__PURE__*/React.createElement(Row, {
      muted: true,
      l: "Child riders",
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: HP.money(HP.total(t))
    })));
  }
  function Calendar({
    arrive,
    depart,
    onPick
  }) {
    const s = HP.p(arrive || HP.today);
    const [m, setM] = React.useState(new Date(s.getFullYear(), s.getMonth(), 1));
    const [hover, setHover] = React.useState(null);
    const end = depart || (arrive && hover && hover > arrive ? hover : null);
    const pick = d => {
      if (!arrive || depart || d < arrive) onPick(d, null);else onPick(arrive, d);
    };
    const month = off => {
      const f = new Date(m.getFullYear(), m.getMonth() + off, 1),
        days = new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate(),
        cells = [];
      for (let i = 0; i < f.getDay(); i++) cells.push(null);
      for (let d = 1; d <= days; d++) cells.push(HP.iso(new Date(f.getFullYear(), f.getMonth(), d)));
      return /*#__PURE__*/React.createElement("div", {
        key: off,
        style: {
          flex: '1 1 280px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "hp-display",
        style: {
          fontSize: 22,
          textAlign: 'center',
          marginBottom: 10
        }
      }, HP.M[f.getMonth()], " ", f.getFullYear()), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(7,1fr)',
          gap: '2px 0',
          textAlign: 'center'
        }
      }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--text-muted)',
          padding: '4px 0'
        }
      }, d)), cells.map((d, i) => {
        if (!d) return /*#__PURE__*/React.createElement("span", {
          key: i
        });
        const past = d < HP.today,
          closed = !HP.open(d),
          isEnd = d === arrive || d === end,
          inR = arrive && end && d > arrive && d < end;
        return /*#__PURE__*/React.createElement("button", {
          key: d,
          className: "cal-day",
          disabled: past,
          "data-end": isEnd ? 1 : 0,
          "data-in": inR ? 1 : 0,
          "data-ev": HP.eventOn(d) ? 1 : 0,
          onMouseEnter: () => setHover(d),
          onClick: () => pick(d),
          title: HP.eventOn(d) ? HP.eventOn(d).title : closed ? 'Park closed for riding' : '',
          style: closed && !past && !isEnd ? {
            color: 'var(--text-subtle)'
          } : null
        }, HP.p(d).getDate());
      })));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: -34,
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'none'
      }
    }, [-1, 1].map(d => /*#__PURE__*/React.createElement("button", {
      key: d,
      "aria-label": d < 0 ? 'Previous month' : 'Next month',
      onClick: () => setM(new Date(m.getFullYear(), m.getMonth() + d, 1)),
      style: {
        pointerEvents: 'auto',
        width: 36,
        height: 36,
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        borderRadius: 4,
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: d < 0 ? 'chevron-left' : 'chevron-right',
      size: 18
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap'
      },
      onMouseLeave: () => setHover(null)
    }, month(0), month(1)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        marginTop: 14,
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--gold-600)'
      }
    }), "Event weekend"), /*#__PURE__*/React.createElement("span", null, "Grey dates: park closed for riding (camping only)")));
  }
  Object.assign(window, {
    BK: {
      LABEL,
      needsSite,
      stepsFor,
      valid,
      maxDays
    },
    BkFrame: Frame,
    StepHead,
    StepNav,
    TripSummary: Summary,
    Calendar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/BookParts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Checkout.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    Input,
    Checkbox,
    Dialog
  } = window.DS;
  function NextSteps({
    at
  }) {
    const S = [['review', 'Review your trip'], ['pay', 'Pay securely'], ['waivers', 'Sign waivers'], ['pass', 'Get your gate pass']];
    const i = S.findIndex(s => s[0] === at);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 14,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "How it works"), S.map(([k, l], j) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontWeight: j === i ? 700 : 400,
        color: j < i ? 'var(--text-muted)' : 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        fontSize: 13,
        fontWeight: 700,
        background: j === i ? 'var(--black-950)' : j < i ? 'var(--stone-200)' : 'var(--surface-card)',
        color: j === i ? 'var(--gold-400)' : 'inherit',
        border: j > i ? '1.5px solid var(--border-default)' : 0
      }
    }, j < i ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : j + 1), l)));
  }
  function Checkout() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const c = t.contact || {};
    const [pm, setPm] = React.useState('card');
    const [card, setCard] = React.useState({
      n: '4242 4242 4242 4242',
      e: '08 / 28',
      v: '123',
      z: '35674'
    });
    const [agree, setAgree] = React.useState(false);
    const [busy, setBusy] = React.useState(false);
    const [tried, setTried] = React.useState(false);
    const [decline, setDecline] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => {
      if (!t.arrive || !t.stay) go('book/dates');else if (t.paid) go('confirmation');
    }, []);
    const setC = (k, v) => update(s => ({
      contact: {
        ...s.contact,
        [k]: v
      }
    }));
    const err = {
      first: !c.first && 'Required',
      last: !c.last && 'Required',
      email: !/^\S+@\S+\.\S+$/.test(c.email || '') && 'Enter a valid email',
      phone: (c.phone || '').replace(/\D/g, '').length < 10 && 'Enter a 10-digit phone number'
    };
    const ok = !Object.values(err).some(Boolean) && agree;
    const pay = () => {
      setTried(true);
      if (!ok) return;
      setBusy(true);
      setFailed(false);
      if (decline) {
        setTimeout(() => {
          setBusy(false);
          setFailed(true);
          setDecline(false);
        }, 1200);
        return;
      }
      setTimeout(() => {
        const code = 'HP-' + String(Math.floor(10000 + Math.random() * 90000));
        update({
          paid: true,
          code,
          paidAt: Date.now()
        });
        go('waivers');
      }, 1400);
    };
    const e = k => tried ? err[k] || undefined : undefined;
    return /*#__PURE__*/React.createElement(BkFrame, {
      done: "Checkout",
      aside: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(TripSummary, {
        editable: false
      }), /*#__PURE__*/React.createElement(NextSteps, {
        at: "pay"
      }))
    }, /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Checkout",
      title: "Almost there.",
      sub: "We\u2019ll send your confirmation and waiver links to this email and phone."
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        fontSize: 22,
        margin: '0 0 12px'
      }
    }, "Contact"), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      value: c.first || '',
      error: e('first'),
      onChange: x => setC('first', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      value: c.last || '',
      error: e('last'),
      onChange: x => setC('last', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      icon: "mail",
      placeholder: "you@example.com",
      value: c.email || '',
      error: e('email'),
      onChange: x => setC('email', x.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Mobile phone",
      type: "tel",
      icon: "phone",
      placeholder: "(256) 555-0100",
      value: c.phone || '',
      error: e('phone'),
      hint: "For your gate pass by text",
      onChange: x => setC('phone', x.target.value)
    })), /*#__PURE__*/React.createElement("h2", {
      className: "hp-card__title",
      style: {
        fontSize: 22,
        margin: '32px 0 12px'
      }
    }, "Payment"), failed && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "Payment didn\u2019t go through"
    }, "Your card was declined and nothing was charged. Your trip, site and riders are still saved. Try again or use another payment method.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 14
      }
    }, [['card', 'Card', 'credit-card'], ['apple', 'Apple Pay', 'phone'], ['google', 'Google Pay', 'phone']].map(([id, l, i]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "opt",
      "aria-pressed": pm === id,
      onClick: () => setPm(id),
      style: {
        width: 'auto',
        flex: '1 1 150px',
        padding: '14px 16px',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700
      }
    }, l)))), pm === 'card' ? /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      icon: "credit-card",
      value: card.n,
      onChange: x => setCard({
        ...card,
        n: x.target.value
      })
    }), /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Expiry",
      value: card.e,
      onChange: x => setCard({
        ...card,
        e: x.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "CVC",
      value: card.v,
      onChange: x => setCard({
        ...card,
        v: x.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ZIP",
      value: card.z,
      onChange: x => setCard({
        ...card,
        z: x.target.value
      })
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 20,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "You\u2019ll confirm with ", pm === 'apple' ? 'Apple Pay' : 'Google Pay', " when you tap Pay.")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '20px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: /*#__PURE__*/React.createElement("span", null, "I\u2019ve read the ", /*#__PURE__*/React.createElement(TextLink, {
        to: "rules"
      }, "park rules"), " and the refund policy."),
      checked: agree,
      onChange: x => setAgree(x.target.checked)
    }), tried && !agree && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--danger-600, #b42318)',
        fontSize: 14
      }
    }, "Please agree to the park rules to continue."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 14
    }), "Demo only. No card is charged and nothing is sent."), /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        fontSize: 13,
        color: 'var(--text-muted)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: decline,
      onChange: x => setDecline(x.target.checked)
    }), "Demo: decline the next payment")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 32,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "arrow-left",
      onClick: () => go('book/review')
    }, "Back to review"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: busy ? undefined : 'lock',
      disabled: busy,
      onClick: pay
    }, busy ? 'Processing…' : 'Pay ' + HP.money(HP.total(t)))));
  }
  function WaiverDialog({
    name,
    minor,
    onClose,
    onSigned
  }) {
    const [sig, setSig] = React.useState(minor ? '' : name || '');
    const [g, setG] = React.useState('');
    const [a, setA] = React.useState(false);
    const [b, setB] = React.useState(false);
    const ok = sig.trim().length > 2 && a && b && (!minor || g.trim().length > 2);
    return /*#__PURE__*/React.createElement(Dialog, {
      open: true,
      title: name ? 'Waiver · ' + name : 'Release of liability',
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        disabled: !ok,
        icon: "file-text",
        onClick: () => {
          onSigned(sig);
          onClose();
        }
      }, "Sign waiver"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: 180,
        overflowY: 'auto',
        padding: 14,
        background: 'var(--bg-sunken)',
        borderRadius: 4,
        fontSize: 14,
        lineHeight: 1.55
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Sample waiver text."), " Off-road riding carries real risk, including serious injury. I agree to follow the park rules, wear required safety gear, ride within my ability and stay on marked trails. I release Hawk Pride from liability for injury or damage, except where the law does not allow it. The owner\u2019s legal waiver text goes here."), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I understand off-road riding is dangerous.",
      checked: a,
      onChange: e => setA(e.target.checked)
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to the park rules and this release.",
      checked: b,
      onChange: e => setB(e.target.checked)
    }), minor && /*#__PURE__*/React.createElement(Input, {
      label: "Parent or guardian name",
      hint: "Required for riders under 18",
      value: g,
      onChange: e => setG(e.target.value)
    }), /*#__PURE__*/React.createElement(Input, {
      label: minor ? 'Guardian signature (type full name)' : 'Signature (type full name)',
      icon: "file-text",
      value: sig,
      onChange: e => setSig(e.target.value)
    })));
  }
  function Waivers() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const [open, setOpen] = React.useState(null);
    const P = HP.participants(t).filter(p => p.waiver);
    const done = P.filter(p => t.waivers[p.key]).length;
    React.useEffect(() => {
      if (!t.paid) go('checkout');
    }, []);
    return /*#__PURE__*/React.createElement(BkFrame, {
      done: "Paid",
      aside: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(TripSummary, {
        editable: false
      }), /*#__PURE__*/React.createElement(NextSteps, {
        at: "waivers"
      }))
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: 'Payment received · ' + (t.code || '')
    }, "Your trip is booked. One more step."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement(StepHead, {
      eyebrow: "Waivers",
      title: "Almost ready to ride.",
      sub: "Every rider needs a signed waiver. Parents sign for kids. Do it now and you\u2019ll go straight through the gate."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, P.map(p => {
      const s = t.waivers[p.key];
      return /*#__PURE__*/React.createElement("div", {
        key: p.key,
        className: "hp-card",
        style: {
          padding: '14px 18px',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: s ? 'badge-check' : 'file-text',
        size: 24,
        style: {
          color: s ? 'var(--success-600, #2f7d32)' : 'inherit'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          fontSize: 17
        }
      }, p.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          color: 'var(--text-muted)'
        }
      }, p.type, p.minor ? ' · guardian signs' : '')), s ? /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        icon: "check"
      }, "Complete") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
        tone: "warning"
      }, "Required"), /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        onClick: () => setOpen(p)
      }, "Complete waiver")));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, done, " of ", P.length, " signed. Non-riding guests don\u2019t need a waiver."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 32,
        paddingTop: 24,
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('confirmation')
    }, "I\u2019ll sign later"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      disabled: done < P.length,
      onClick: () => go('confirmation')
    }, "Get my gate pass")), open && /*#__PURE__*/React.createElement(WaiverDialog, {
      name: open.name,
      minor: open.minor,
      onClose: () => setOpen(null),
      onSigned: () => update(s => ({
        waivers: {
          ...s.waivers,
          [open.key]: true
        }
      }))
    }));
  }
  function QR({
    code
  }) {
    const N = 25;
    let h = 0;
    for (const ch of code) h = h * 31 + ch.charCodeAt(0) >>> 0;
    const rnd = () => {
      h ^= h << 13;
      h >>>= 0;
      h ^= h >> 17;
      h ^= h << 5;
      h >>>= 0;
      return h / 4294967296;
    };
    const finder = (r, c) => {
      for (const [R, C] of [[0, 0], [0, N - 7], [N - 7, 0]]) {
        const y = r - R,
          x = c - C;
        if (y >= 0 && y < 7 && x >= 0 && x < 7) return y === 0 || y === 6 || x === 0 || x === 6 || y >= 2 && y <= 4 && x >= 2 && x <= 4 ? 1 : 0;
        if (y >= -1 && y <= 7 && x >= -1 && x <= 7) return 0;
      }
      return null;
    };
    const cells = [];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const f = finder(r, c);
      cells.push(/*#__PURE__*/React.createElement("i", {
        key: r * N + c,
        "data-on": f === null ? rnd() > .52 ? 1 : 0 : f
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "qr",
      role: "img",
      "aria-label": 'Gate pass code ' + code
    }, cells);
  }
  function Confirmation() {
    const {
      trip: t,
      go,
      book
    } = useApp();
    const P = window.HP_DATA.park;
    const [look, setLook] = React.useState('');
    if (!t.paid) return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Find my trip",
      title: "Look up a booking.",
      intro: "Enter the confirmation code from your email. (Demo: book a trip first to see a confirmation.)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end',
        maxWidth: 520,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Confirmation code",
      placeholder: "HP-28437",
      value: look,
      onChange: e => setLook(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: () => book()
    }, "Book a trip")));
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      ev = HP.eventFor(t.arrive, t.depart),
      W = HP.participants(t).filter(p => p.waiver),
      signed = W.filter(p => t.waivers[p.key]).length;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 280px',
        gap: 48,
        alignItems: 'center'
      },
      className: "proto-conf"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "check"
    }, "Booked"), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '14px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "You\u2019re going to Hawk Pride."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        color: 'var(--stone-200)',
        margin: '14px 0 0',
        maxWidth: 560
      }
    }, HP.fmtLong(t.arrive), t.depart !== t.arrive ? ' to ' + HP.fmtLong(t.depart) : '', ". We sent the details to ", t.contact.email, "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "calendar-check"
    }, "Add to calendar"), /*#__PURE__*/React.createElement("a", {
      className: "hp-btn hp-btn--outline",
      style: {
        textDecoration: 'none'
      },
      href: 'https://maps.google.com/?q=' + encodeURIComponent(P.address),
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 18
    }), "Directions"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--stone-50)',
        color: 'var(--black-950)',
        borderRadius: 'var(--radius-md)',
        padding: 18,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(QR, {
      code: t.code
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        marginTop: 10,
        color: 'var(--text-muted)'
      }
    }, "Gate pass"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 28
      }
    }, t.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Show this at the gate")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, signed < W.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: W.length - signed + ' waiver' + (W.length - signed > 1 ? 's' : '') + ' still to sign'
    }, "Everyone who rides needs one before the gate. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "waivers"
    }, "Sign now")) : /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "All waivers signed"
    }, "You\u2019re set for express check-in."), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Reservation ", t.code), /*#__PURE__*/React.createElement(Row, {
      l: "Dates",
      v: HP.range(t.arrive, t.depart)
    }), ev && /*#__PURE__*/React.createElement(Row, {
      l: "Event",
      v: ev.title
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Stay",
      v: c ? c.name + (u ? ' · ' + u.name : '') : 'No overnight stay'
    }), HP.wantsAdmission(t) && t.days > 0 && /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: t.adults + ' adult' + (t.adults > 1 ? 's' : '') + ' × ' + t.days + ' day' + (t.days > 1 ? 's' : '')
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, "Payment"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Paid"), /*#__PURE__*/React.createElement("strong", null, HP.money(HP.total(t)))))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 22,
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)',
        marginBottom: 6
      }
    }, "Who\u2019s coming"), HP.participants(t).map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto auto',
        gap: 12,
        alignItems: 'center',
        padding: '10px 0',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, p.type)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, p.type === 'Adult rider' ? HP.wantsAdmission(t) ? 'Admission ✓' : 'Pay at gate' : p.type === 'Child rider' ? 'Rides free' : 'Not riding'), p.waiver ? t.waivers[p.key] ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Waiver") : /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Waiver required") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "No waiver needed"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h2)',
        margin: 0
      }
    }, "Before you come"), [['clock', 'Check-in from ' + P.checkin, 'Gates open at 8 AM for riders. Cabins and sites are ready from ' + P.checkin + '.'], ['map-pin', P.address, 'Follow the signs from Hester Porter Road.'], ['shield-check', 'Bring your gear', 'Helmets for ATVs and open side-by-sides. Flags on event weekends.'], ['phone', 'Questions? ' + P.phone, 'We pick up during park hours.']].map(([i, tl, d]) => /*#__PURE__*/React.createElement("div", {
      key: tl,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, tl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('rules')
    }, "Park rules"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('trails')
    }, "Trail map"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "camera",
      onClick: () => go('gate')
    }, "See the gate view"))))));
  }
  Object.assign(window, {
    Checkout,
    Waivers,
    WaiverDialog,
    Confirmation,
    NextSteps
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Explore.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    Alert,
    Tabs,
    TrailRow,
    Dialog,
    DifficultyBadge
  } = window.DS;
  const IMG = '../../assets/photos/';
  function EventsIndex() {
    const {
      go,
      book
    } = useApp();
    const E = window.HP_DATA.events;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Events",
      title: "Big weekends on the mountain.",
      intro: "Rock crawls, hillclimbs, club rides and holiday weekends. Every event page has dates, what\u2019s included and a way to book.",
      image: hpAsset('event-crawl-crowd.jpg'),
      imageAlt: "Crowd at a rock crawl"
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, E.map(e => /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: "hp-card",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,300px) minmax(0,1fr)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 190
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event photo',
      alt: e.title,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 24px',
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        minWidth: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, HP.M[HP.p(e.start).getMonth()]), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 48,
        lineHeight: 1
      }
    }, HP.p(e.start).getDate())), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 280px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, e.type, " \xB7 ", HP.range(e.start, e.end), ", ", HP.p(e.start).getFullYear()), e.status === 'few' && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Few sites left"), e.status === 'soldout' && /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Registration full"), e.status === 'featured' && /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Featured")), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h2)',
        margin: '6px 0'
      }
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, e.hook)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('events/' + e.id)
    }, "View Event"), e.status !== 'soldout' && /*#__PURE__*/React.createElement(Button, {
      onClick: () => book({
        event: e.id
      })
    }, "Register")))))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 24,
        color: 'var(--text-muted)'
      }
    }, "Regular open weekends aren\u2019t listed here. The park is open every Friday to Sunday. ", /*#__PURE__*/React.createElement(TextLink, {
      to: "rates"
    }, "See rates"), ".")));
  }
  function EventPage({
    id
  }) {
    const {
      book,
      go
    } = useApp();
    const e = window.HP_DATA.events.find(x => x.id === id) || window.HP_DATA.events[0];
    const closed = e.status === 'soldout';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(70vh,600px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event hero photo',
      alt: e.title,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.25) 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 44px',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('events'),
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10,
        color: 'var(--stone-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All events"), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)',
        marginTop: 10
      }
    }, e.type, " \xB7 ", HP.fmtLong(e.start), " \u2013 ", HP.fmtLong(e.end), ", ", HP.p(e.start).getFullYear()), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '10px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        maxWidth: 560,
        color: 'var(--stone-200)',
        margin: '14px 0 24px'
      }
    }, e.hook), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, closed ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Registration full") : /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book({
        event: e.id
      })
    }, "Register & Book"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => {
        const el = document.getElementById('schedule');
        el && window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, "Schedule")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split split--wide",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.5,
        margin: 0,
        textWrap: 'pretty'
      }
    }, e.desc), /*#__PURE__*/React.createElement("div", {
      className: "g4",
      style: {
        marginTop: 28,
        gap: 0,
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, e.facts.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: '14px 16px',
        background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17,
        marginTop: 4
      }
    }, v)))), e.jeep && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trophy",
      size: 22
    }), /*#__PURE__*/React.createElement("span", null, "Bringing a Jeep? Run ", /*#__PURE__*/React.createElement(TextLink, {
      to: "trails/uphill-both-ways"
    }, "Uphill Both Ways"), ", our Jeep Badge of Honor trail."))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 24,
        gap: 14,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Pricing"), /*#__PURE__*/React.createElement(Row, {
      l: "Riding admission",
      v: '$' + window.HP_DATA.pricing.day + ' / day'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Day 3 and beyond",
      v: '$' + window.HP_DATA.pricing.dayLater + ' / day'
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Kids 12 and under",
      v: "Free"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Spectators",
      v: "To be confirmed"
    }), /*#__PURE__*/React.createElement(Callout, null, "Cabins and RV sites go fast on event weekends."), closed ? /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "Registration is full"
    }, "Watch this page for next year.") : /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => book({
        event: e.id
      })
    }, "Register & Book")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      id: "schedule",
      eyebrow: "Schedule",
      title: "How the weekend runs."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, e.schedule.map(([d, t]) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: 'grid',
        gridTemplateColumns: '160px minmax(0,1fr)',
        gap: 20,
        padding: '16px 0',
        borderTop: '1px solid var(--border-default)',
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 24
      }
    }, d), /*#__PURE__*/React.createElement("div", null, t))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Stay for the weekend",
      title: "Where to stay."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['Cabins', HP.priceLabel('cabin'), 'cabin'], ['RV sites', HP.money(HP.rate('powered')) + ' powered · ' + HP.money(HP.rate('dry')) + ' dry', 'powered'], ['Camping', 'From ' + HP.priceLabel('anywhere'), 'primitive']].map(([t, p, s]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, p), !closed && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => book({
        event: e.id
      })
    }, "Book with this event")))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Before you come",
      title: "Rules & FAQ."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '24px 40px'
      }
    }, [['Do I need a waiver?', 'Yes, every rider. You’ll sign online right after you book.'], ['Can I come just to watch?', 'Yes, spectators are welcome. Spectator pricing is still being set.'], ['Are park rules different?', 'Standard park rules apply. Flags on whips are required.'], ['Can I pay at the gate?', 'Yes, but booking ahead gets you through the gate faster.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
      key: q
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, q), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        paddingTop: 20,
        borderTop: '1px solid var(--border-default)',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, "Event sponsors"), [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 120,
        height: 44,
        border: '1px dashed var(--border-default)',
        borderRadius: 4,
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        color: 'var(--text-subtle)'
      }
    }, "Sponsor logo")))));
  }
  function Trails() {
    const {
      go,
      book
    } = useApp();
    const [f, setF] = React.useState('all');
    const [t, setT] = React.useState(null);
    const D = window.HP_DATA.trails;
    const list = f === 'all' ? D : D.filter(x => x.level === f);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Trails",
      title: "From wooded trails to serious rock.",
      intro: "Over 1,000 acres and 120+ rock trails. Every trail is marked by difficulty so you can pick the ride that fits you and your rig.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "d",
        size: "lg",
        icon: "download"
      }, "Download trail map")],
      image: hpAsset('rock-ledge-buggies.jpg'),
      imageAlt: "Buggies on a rock ledge"
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, HP.notices('trails').map(n => /*#__PURE__*/React.createElement(Alert, {
      key: n.title,
      tone: n.tone,
      title: n.title
    }, n.text)), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: f,
      onChange: setF,
      items: [{
        id: 'all',
        label: 'All'
      }, {
        id: 'easy',
        label: 'Easy'
      }, {
        id: 'moderate',
        label: 'Moderate'
      }, {
        id: 'difficult',
        label: 'Difficult'
      }, {
        id: 'extreme',
        label: 'Extreme'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 6,
        padding: '0 12px'
      }
    }, list.map(x => /*#__PURE__*/React.createElement(TrailRow, _extends({
      key: x.number
    }, x, {
      onClick: () => x.signature ? go('trails/uphill-both-ways') : setT(x)
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Park trail map",
      ratio: "4/3.6"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, ['easy', 'moderate', 'difficult', 'extreme'].map(l => /*#__PURE__*/React.createElement(DifficultyBadge, {
      key: l,
      level: l
    }))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "download"
    }, "PDF \xB7 works offline")))))), /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)',
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Signature trail"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95
      }
    }, "Uphill Both Ways"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        color: 'var(--stone-200)',
        margin: '14px 0 24px',
        maxWidth: 480
      }
    }, "A Jeep Badge of Honor trail, right here at Hawk Pride. One of the toughest runs on the mountain."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconRight: "arrow-right",
      onClick: () => go('trails/uphill-both-ways')
    }, "About the trail")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 380,
        marginRight: 'calc(-1 * var(--container-pad))'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Jeep on Uphill Both Ways",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Ride smart",
      title: "Terrain, vehicles and safety."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '28px 36px'
      }
    }, [['mountain', 'Terrain', 'Rock ledges, loose climbs, creek crossings, mud and wooded two-track.'], ['car-front', 'Vehicles', 'ATVs, side-by-sides, Jeeps, trucks and buggies. Check each trail’s rating.'], ['signpost', 'Navigation', 'Trails are numbered at every junction. Grab a paper map at the gate.'], ['shield-check', 'Safety', 'Helmets on ATVs and open SxS. Ride difficult trails with a buddy.'], ['users', 'Families', 'Start on the easy loops. Kids 12 and under ride free.'], ['file-text', 'Rules', 'Read the park rules before you ride.', 'rules']].map(([i, t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 26,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, t) : t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, d)))))), /*#__PURE__*/React.createElement(Dialog, {
      open: !!t,
      title: t ? t.number + ' · ' + t.name : '',
      onClose: () => setT(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setT(null)
      }, "Close")
    }, t && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Trail photo",
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: t.level
    }), t.status === 'closed' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Closed") : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Open")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Vehicles"), t.vehicles), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Length"), t.length)))));
  }
  function UphillBothWays() {
    const {
      go,
      book
    } = useApp();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(78vh,660px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Hero \xB7 Jeep climbing Uphill Both Ways",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94), rgba(13,13,11,.2) 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 48px',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('trails'),
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10,
        color: 'var(--stone-200)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "Trails"), /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)',
        marginTop: 10
      }
    }, "Signature trail \xB7 Jeep Badge of Honor"), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: '10px 0 0',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "Uphill Both Ways"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 19,
        maxWidth: 560,
        color: 'var(--stone-200)',
        margin: '14px 0 24px'
      }
    }, "Hawk Pride\u2019s Badge of Honor trail. Bring a capable rig, a spotter and some patience."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book()
    }, "Plan your run"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "download"
    }, "Trail map")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split split--wide",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h1)',
        margin: '0 0 14px'
      }
    }, "Part of the Badge of Honor program."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        margin: 0
      }
    }, "Uphill Both Ways is a Jeep Badge of Honor trail, and it\u2019s here at Hawk Pride. It\u2019s built for capable rigs and patient drivers. The rest of the mountain is open to every kind of rig."), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "What to expect"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("li", null, "Rock steps and off-camber climbs with a few committing lines."), /*#__PURE__*/React.createElement("li", null, "Tight trees in places. Mind your mirrors."), /*#__PURE__*/React.createElement("li", null, "Give yourself time. Groups move slowly on the hard sections.")), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        margin: '32px 0 12px',
        fontSize: 22
      }
    }, "Before you drop in"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("li", null, "Air down and bring recovery gear."), /*#__PURE__*/React.createElement("li", null, "Ride with at least one other vehicle."), /*#__PURE__*/React.createElement("li", null, "Trailhead is signed from the main loop. See the trail map."))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 24,
        gap: 14,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Trail facts"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: "difficult"
    })), /*#__PURE__*/React.createElement(Row, {
      l: "Best for",
      v: "Jeeps and built 4x4s"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Driver",
      v: "Some off-road experience"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Location",
      v: "Off the main loop"
    }), /*#__PURE__*/React.createElement(Button, {
      block: true,
      onClick: () => book()
    }, "Book your trip")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "The community",
      title: "Made it to the top."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, ['Trailhead sign', 'Group at the top', 'Completion photo'].map(c => /*#__PURE__*/React.createElement(Photo, {
      key: c,
      caption: c,
      ratio: "4/3"
    })))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Keep going",
      title: "More to ride nearby."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, window.HP_DATA.trails.filter(t => !t.signature && t.level !== 'easy').slice(0, 3).map(t => /*#__PURE__*/React.createElement("div", {
      key: t.number,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: t.level
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t.number, " \xB7 ", t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, t.vehicles, " \xB7 ", t.length))))));
  }
  Object.assign(window, {
    EventsIndex,
    EventPage,
    Trails,
    UphillBothWays
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Explore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Gate.jsx
try { (() => {
(() => {
  const {
    Button,
    Icon,
    Badge,
    Alert,
    Input
  } = window.DS;
  const wk = HP.weekends(HP.today, 1)[0];
  const SAMPLES = [{
    code: 'HP-28437',
    contact: 'Brandon Hale',
    phone: '(256) 555-0142',
    email: 'brandon@example.com',
    arrive: wk.arrive,
    depart: wk.depart,
    stay: 'Cabin · Cabin 3',
    event: null,
    total: 460,
    people: [{
      key: 'a0',
      name: 'Brandon Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a1',
      name: 'Vann Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a2',
      name: 'Lyle Hale',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'required'
    }]
  }, {
    code: 'HP-31022',
    contact: 'Kayla Moore',
    phone: '(615) 555-0199',
    email: 'kayla@example.com',
    arrive: wk.arrive,
    depart: wk.depart,
    stay: 'Powered RV · RV Site 6',
    event: null,
    total: 160,
    people: [{
      key: 'a0',
      name: 'Kayla Moore',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'a1',
      name: 'Dre Moore',
      type: 'Adult rider',
      admission: 'Paid',
      waiver: 'done'
    }, {
      key: 'k0',
      name: 'Jo Moore',
      type: 'Child rider',
      admission: 'Free',
      waiver: 'done'
    }, {
      key: 'g0',
      name: 'Pat Moore',
      type: 'Non-riding guest',
      admission: '—',
      waiver: 'n/a'
    }]
  }];
  function fromTrip(t) {
    const c = HP.cat(t.stay),
      u = HP.unit(t.unit),
      ev = HP.eventFor(t.arrive, t.depart);
    return {
      code: t.code,
      contact: [t.contact.first, t.contact.last].filter(Boolean).join(' '),
      phone: t.contact.phone,
      email: t.contact.email,
      arrive: t.arrive,
      depart: t.depart,
      stay: c ? c.name + (u ? ' · ' + u.name : '') : 'No overnight stay',
      event: ev ? ev.title : null,
      total: HP.total(t),
      live: true,
      checkedIn: t.checkedIn,
      people: HP.participants(t).map(p => ({
        key: p.key,
        name: p.name,
        type: p.type,
        admission: p.type === 'Adult rider' ? HP.wantsAdmission(t) ? 'Paid' : 'Due at gate' : p.type === 'Child rider' ? 'Free' : '—',
        waiver: p.waiver ? t.waivers[p.key] ? 'done' : 'required' : 'n/a'
      }))
    };
  }
  function Gate() {
    const {
      trip: t,
      update,
      go
    } = useApp();
    const [local, setLocal] = React.useState({});
    const [q, setQ] = React.useState('');
    const [open, setOpen] = React.useState(null);
    const [scanning, setScanning] = React.useState(false);
    const [note, setNote] = React.useState(null);
    const all = [...(t.paid ? [fromTrip(t)] : []), ...SAMPLES.map(s => ({
      ...s,
      ...(local[s.code] || {}),
      people: s.people.map(p => ({
        ...p,
        ...(((local[s.code] || {}).w || {})[p.key] ? {
          waiver: 'done'
        } : {})
      }))
    }))];
    const res = all.find(r => r.code === open);
    const digits = x => (x || '').replace(/\D/g, '');
    const ql = q.trim().toLowerCase();
    const hits = ql.length < 2 ? [] : all.filter(r => r.code.toLowerCase().includes(ql) || r.contact.toLowerCase().includes(ql) || (r.email || '').toLowerCase().includes(ql) || digits(ql).length > 2 && digits(r.phone).includes(digits(ql)) || r.people.some(p => p.name.toLowerCase().includes(ql)));
    const scan = () => {
      setScanning(true);
      setNote(null);
      setTimeout(() => {
        setScanning(false);
        setOpen(all[0].code);
      }, 900);
    };
    const signAtGate = (r, key) => {
      if (r.live) update(s => ({
        waivers: {
          ...s.waivers,
          [key]: true
        }
      }));else setLocal(l => ({
        ...l,
        [r.code]: {
          ...(l[r.code] || {}),
          w: {
            ...((l[r.code] || {}).w || {}),
            [key]: true
          }
        }
      }));
    };
    const checkIn = r => {
      const at = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      });
      if (r.live) update({
        checkedIn: at
      });else setLocal(l => ({
        ...l,
        [r.code]: {
          ...(l[r.code] || {}),
          checkedIn: at
        }
      }));
      setNote(r.contact + '’s party checked in at ' + at + '.');
    };
    const roster = () => {
      const rows = [['Reservation', 'Contact', 'Phone', 'Dates', 'Stay', 'Event', 'Participant', 'Type', 'Admission', 'Waiver', 'Checked in']];
      all.forEach(r => r.people.forEach(p => rows.push([r.code, r.contact, r.phone, HP.range(r.arrive, r.depart), r.stay, r.event || '', p.name, p.type, p.admission, p.waiver, r.checkedIn || ''])));
      const csv = rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([csv], {
        type: 'text/csv'
      }));
      a.download = 'hawk-pride-roster.csv';
      a.click();
    };
    const missing = res ? res.people.filter(p => p.waiver === 'required') : [];
    const dueGate = res ? res.people.filter(p => p.admission === 'Due at gate') : [];
    const Tick = ({
      ok,
      label,
      warn
    }) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700,
        fontSize: 15,
        color: ok ? 'var(--success-700, #1f6b2a)' : warn ? 'var(--danger-700, #a3231a)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ok ? 'badge-check' : warn ? 'triangle-alert' : 'minus',
      size: 18
    }), label);
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--stone-100)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement("header", {
      className: "hp-on-dark",
      style: {
        color: 'var(--stone-50)',
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderBottom: '3px solid var(--gold-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: HP_LOGO,
      alt: "",
      style: {
        height: 40
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 22,
        lineHeight: 1
      }
    }, "Gate check-in"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-inverse-muted)'
      }
    }, "Staff view \xB7 demo")), /*#__PURE__*/React.createElement("button", {
      onClick: () => go(t.paid ? 'confirmation' : 'home'),
      style: {
        marginLeft: 'auto',
        background: 'none',
        border: '1px solid var(--border-inverse)',
        color: 'var(--stone-50)',
        borderRadius: 4,
        padding: '8px 12px',
        font: 'inherit',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }), "Exit staff view"))), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '28px 24px 64px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,380px) minmax(0,1fr)',
        gap: 24,
        alignItems: 'start'
      },
      className: "gate-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: scan,
      disabled: scanning,
      style: {
        height: 132,
        borderRadius: 'var(--radius-md)',
        border: 0,
        background: 'var(--gold-400)',
        color: 'var(--black-950)',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26
      }
    }, scanning ? 'Scanning…' : 'Scan reservation code')), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 18,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, "Or look it up"), /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Reservation #, name, phone or email",
      value: q,
      onChange: e => setQ(e.target.value)
    }), ql.length >= 2 && (hits.length ? hits.map(r => /*#__PURE__*/React.createElement("button", {
      key: r.code,
      onClick: () => {
        setOpen(r.code);
        setNote(null);
      },
      style: {
        textAlign: 'left',
        font: 'inherit',
        background: open === r.code ? 'var(--bg-sunken)' : 'none',
        border: '1px solid var(--border-subtle)',
        borderRadius: 4,
        padding: '10px 12px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, r.contact), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, r.code, " \xB7 ", r.stay)), r.people.some(p => p.waiver === 'required') && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Waiver"))) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "No reservations match.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Try \u201CLyle\u201D, \u201CHP-31022\u201D or \u201C555-0199\u201D.", t.paid ? ' Your demo booking is ' + t.code + '.' : '')), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 18,
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, "Connection down?"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, "Download today\u2019s roster before a big event. It lists every party, rider, admission and waiver status."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "download",
      onClick: roster
    }, "Download roster (CSV)"))), /*#__PURE__*/React.createElement("div", null, !res ? /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 40,
        alignItems: 'center',
        textAlign: 'center',
        gap: 10,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 48
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18
      }
    }, "Scan a code or search to load a reservation.")) : /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 0,
        gap: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, "Reservation"), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 40,
        lineHeight: 1
      }
    }, res.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        marginTop: 8,
        fontWeight: 600
      }
    }, res.stay), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, HP.range(res.arrive, res.depart), " \xB7 ", res.contact, " \xB7 ", res.phone), res.event && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      icon: "calendar-days"
    }, res.event))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Paid"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        marginTop: 6
      }
    }, HP.money(res.total)))), res.people.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 150px 190px',
        gap: 12,
        alignItems: 'center',
        padding: '14px 24px',
        borderBottom: '1px solid var(--border-subtle)',
        background: p.waiver === 'required' ? 'var(--warning-50, #fff8e6)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, p.type)), /*#__PURE__*/React.createElement(Tick, {
      ok: p.admission === 'Paid' || p.admission === 'Free',
      warn: p.admission === 'Due at gate',
      label: p.admission === '—' ? 'Not riding' : 'Admission ' + (p.admission === 'Paid' ? '✓' : p.admission === 'Free' ? '· free' : 'due')
    }), p.waiver === 'required' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Tick, {
      warn: true,
      label: "WAIVER REQUIRED"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => signAtGate(res, p.key),
      style: {
        font: 'inherit',
        fontSize: 13,
        fontWeight: 700,
        background: 'none',
        border: 0,
        padding: 0,
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    }, "Signed on gate tablet")) : /*#__PURE__*/React.createElement(Tick, {
      ok: p.waiver === 'done',
      label: p.waiver === 'done' ? 'Waiver ✓' : 'No waiver needed'
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, res.checkedIn ? /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: 'Checked in at ' + res.checkedIn
    }, "This party is already through the gate.") : missing.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: missing.length + ' waiver' + (missing.length > 1 ? 's' : '') + ' missing'
    }, missing.map(p => p.name).join(', '), " must sign before riding. Hand them the gate tablet or text the link.") : dueGate.length ? /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Admission due"
    }, "Collect riding admission for ", dueGate.length, " rider", dueGate.length > 1 ? 's' : '', " at the gate.") : null, note && !res.checkedIn && /*#__PURE__*/React.createElement(Alert, {
      tone: "success"
    }, note), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("button", {
      disabled: !!res.checkedIn || missing.length > 0,
      onClick: () => checkIn(res),
      className: "hp-btn hp-btn--lg hp-btn--primary",
      style: {
        flex: '1 1 260px',
        height: 64,
        fontSize: 20,
        opacity: res.checkedIn || missing.length ? .45 : 1,
        cursor: res.checkedIn || missing.length ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22
    }), res.checkedIn ? 'Checked in' : 'Check in party'), missing.length > 0 && /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "message-circle",
      onClick: () => setNote('Waiver link texted to ' + res.phone + '.')
    }, "Text waiver link")))))), /*#__PURE__*/React.createElement("style", null, `@media(max-width:860px){.gate-grid{grid-template-columns:1fr!important}}`));
  }
  window.Gate = Gate;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Gate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Pages.jsx
try { (() => {
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    Alert
  } = window.DS;
  const IMG = '../../assets/photos/';
  const D = () => window.HP_DATA;
  function PriceTable({
    rows
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)'
      }
    }, rows.map(([l, v, note, to], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        borderTop: i ? '1px solid var(--border-subtle)' : 0
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, l) : l), note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)'
      }
    }, note)), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 28,
        whiteSpace: 'nowrap'
      }
    }, v))));
  }
  function Rates() {
    const {
      book,
      go
    } = useApp();
    const P = D().pricing;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Rates",
      title: "What it costs to come.",
      intro: "Pay per rider, per day. Kids ride free. Book ahead and skip the line at the gate.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'none'
        })
      }, "Buy Admission"), /*#__PURE__*/React.createElement(Button, {
        key: "b",
        size: "lg",
        variant: "outline",
        onClick: () => book()
      }, "Book Now")],
      image: hpAsset('buggy-airborne.jpg'),
      imageAlt: "Buggy on the hill",
      position: "50% 45%"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Riding admission",
      title: "Per rider, per day."
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(PriceTable, {
      rows: [['Days 1 and 2', HP.money(P.day), 'Per rider, per day'], ['Day 3 and beyond', HP.money(P.dayLater), 'Per rider, per day'], ['Kids ' + P.freeAge + ' and under', 'Free', 'With a paying adult']]
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        padding: 24,
        gap: 12,
        background: 'var(--bg-sunken)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Example"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        lineHeight: 1.55
      }
    }, "Two adults and a 9-year-old riding Friday to Sunday:"), /*#__PURE__*/React.createElement(Row, {
      l: "2 adults \xD7 3 days",
      v: HP.money(2 * HP.admissionPer(3))
    }), /*#__PURE__*/React.createElement(Row, {
      l: "1 child rider",
      v: "Free",
      muted: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-default)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: HP.money(2 * HP.admissionPer(3))
    })), /*#__PURE__*/React.createElement(Callout, null, "We add it up for you when you book, multi-day savings included.")))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Overnight",
      title: "Staying the night."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(PriceTable, {
      rows: HP.cabinClasses().map(c => [c.label, HP.money(c.price), 'Per night · sleeps ' + c.sleeps, 'cabins'])
    }), /*#__PURE__*/React.createElement(PriceTable, {
      rows: D().categories.filter(c => c.id !== 'cabin').map(c => [c.name, HP.money(HP.rate(c.id)), c.perPerson ? 'Per person, per night' : 'Per night', 'camping'])
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '20px 0 0',
        color: 'var(--text-muted)'
      }
    }, "Overnight stays don\u2019t include riding. Add admission for your riders in the same booking.")), /*#__PURE__*/React.createElement(Section, {
      title: "Event weekends",
      eyebrow: "Events"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        maxWidth: 620
      }
    }, "Event pricing may vary. Check the event page for details."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: "arrow-right",
      onClick: () => go('events')
    }, "Upcoming events"))));
  }
  function Cabins() {
    const {
      book
    } = useApp();
    const [cls, setCls] = React.useState(null);
    const C = HP.cabinClasses().map(c => ({
      t: c.label,
      p: c.price,
      sleeps: c.sleeps,
      beds: c.beds,
      d: c.desc
    }));
    const am = [['thermometer', 'A/C and heat'], ['bed-double', 'Beds and bunks, bring linens'], ['shower-head', 'Bathhouse nearby'], ['flame', 'Fire ring and grill'], ['square-parking', 'Parking for truck and trailer'], ['utensils', 'Kitchen and bathroom details: to confirm']];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Cabins",
      title: "Sleep close to the trails.",
      intro: "Eight cabins, two sizes. Every one is steps from the trailheads with room to park the trailer.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'cabin'
        })
      }, "Check Availability")],
      image: null,
      imageAlt: "Cabin exterior at dusk"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Choose your size",
      title: "Two kinds of cabin."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, C.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.t,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: c.t + ' · exterior',
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 26
      }
    }, c.t), /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, HP.money(c.p), /*#__PURE__*/React.createElement("small", null, "/ night"))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__meta",
      style: {
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), "Sleeps ", c.sleeps), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "bed-double",
      size: 16
    }), c.beds)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)'
      }
    }, c.d), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => book({
        stay: 'cabin'
      })
    }, "Check Availability"))))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Every cabin",
      title: "What\u2019s included."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '18px 28px'
      }
    }, am.map(([i, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24
    }), t)))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Good to know",
      title: "Cabin policies."
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        fontSize: 17
      }
    }, /*#__PURE__*/React.createElement(Row, {
      l: "Check-in",
      v: 'From ' + D().park.checkin
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Check-out",
      v: 'By ' + D().park.checkout.toLowerCase()
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Pets",
      v: "Welcome, leashed"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Riding",
      v: "Admission sold separately"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        aspectRatio: '16/9',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-card)',
        padding: '6px 12px',
        borderRadius: 4,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map",
      size: 16
    }), " Cabins sit on the ridge above the pavilion"))))));
  }
  function Camping() {
    const {
      book
    } = useApp();
    const wkAv = HP.availability(HP.weekends(HP.today, 1)[0]);
    const S = [{
      id: 'powered',
      pts: ['Designated level site', '50A electric and water', 'Pull-through pads'],
      img: hpAsset('pavilion-jeeps.jpg')
    }, {
      id: 'dry',
      pts: ['Designated level site', 'Generators allowed until quiet hours', 'East field, room to spread out']
    }, {
      id: 'primitive',
      pts: ['Designated tent site', 'Fire ring', 'Bathhouse access']
    }, {
      id: 'anywhere',
      pts: ['Set up in any open camping area', 'No site assignment', 'Not on trails, roads or pads']
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Camping",
      title: "Pull in. Plug in. Ride out.",
      intro: "Powered and dry RV sites, designated tent sites, or pitch anywhere in the open camping areas.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "a",
        size: "lg",
        onClick: () => book({
          stay: 'powered'
        })
      }, "Check Availability")],
      image: null,
      imageAlt: "RVs and tents at the campground"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Pick your setup",
      title: "Four ways to camp."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g2"
    }, S.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        gap: 12,
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 26
      }
    }, HP.cat(s.id).name), /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, HP.money(HP.rate(s.id)), /*#__PURE__*/React.createElement("small", null, HP.cat(s.id).perPerson ? '/ person / night' : '/ night'))), /*#__PURE__*/React.createElement("div", null, HP.cat(s.id).model === 'unit' ? /*#__PURE__*/React.createElement(Badge, {
      tone: wkAv[s.id].count ? 'success' : 'danger'
    }, wkAv[s.id].count ? wkAv[s.id].count + ' of ' + HP.count(s.id) + ' available this weekend' : 'Sold out this weekend') : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Open this weekend")), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, s.pts.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 18
    }), p))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: s.id === 'powered' ? 'primary' : 'secondary',
      onClick: () => book({
        stay: s.id
      })
    }, "Check Availability"))))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Campground rules",
      title: "Before you set up."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3",
      style: {
        gap: '24px 32px'
      }
    }, [['plug-zap', 'Generators', 'Off during quiet hours.'], ['flame', 'Fires', 'In rings only. Put it out before bed.'], ['moon', 'Quiet hours', '10 PM to 7 AM. Event weekends may differ.'], ['shower-head', 'Bathhouse', 'Showers and restrooms near the pavilion.'], ['clock', 'Check-in / out', 'Check in from 2 PM. Out by noon.'], ['dog', 'Pets', 'Welcome on a leash. Clean up after them.']].map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 24,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d)))))));
  }
  function Groups() {
    const {
      book
    } = useApp();
    const P = D().park;
    const W = HP.weekends(HP.add(HP.today, 1), 8).map(w => ({
      ...w,
      ev: HP.eventFor(w.arrive, w.depart)
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Groups",
      title: "Bring the club.",
      intro: "Hawk Pride welcomes organized group rides. Pick a weekend, give us a call, and we\u2019ll help you plan it.",
      actions: [/*#__PURE__*/React.createElement("a", {
        key: "c",
        href: 'tel:' + P.tel,
        className: "hp-btn hp-btn--lg hp-btn--primary",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      }), "Call to Plan a Group Ride")],
      image: hpAsset('hillside-traffic.jpg'),
      imageAlt: "A club riding together"
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Who comes",
      title: "Built for a crowd."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, [['Off-road clubs', 'Monthly rides and club weekends.'], ['Jeep groups', 'Including runs on Uphill Both Ways.'], ['Side-by-side groups', 'Miles of trails wide enough for a convoy.'], ['Family & friends', 'Reunions, birthdays and big crews.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        borderTop: '3px solid var(--gold-400)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, d))))), /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Open weekends",
      title: "Weekends open for groups.",
      intro: "Regular weekends are the easiest to coordinate. Event weekends are busy, so call first."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4",
      style: {
        gap: 10
      }
    }, W.map(w => /*#__PURE__*/React.createElement("div", {
      key: w.arrive,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 24
      }
    }, HP.range(w.arrive, w.depart)), w.ev ? /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, w.ev.title) : /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "check"
    }, "Open for groups"))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Where your group stays",
      title: "Room for everyone."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, [['Cabins', HP.count('cabin') + ' cabins, ' + HP.priceLabel('cabin').toLowerCase() + '.', 'cabins'], ['RV sites', HP.count('powered') + ' powered and ' + HP.count('dry') + ' dry pads.', 'camping'], ['Camping', 'Primitive sites and open camping areas.', 'camping']].map(([t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card",
      style: {
        padding: 20,
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 18
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      to: to
    }, t)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Plan your group ride"), /*#__PURE__*/React.createElement("a", {
      href: 'tel:' + P.tel,
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-display-l)',
        color: 'var(--stone-50)',
        textDecoration: 'none',
        lineHeight: 1
      }
    }, P.phone), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-inverse-muted)',
        marginTop: 6
      }
    }, "Tell us your dates, how many are coming and how you\u2019re staying.")), /*#__PURE__*/React.createElement("a", {
      href: 'tel:' + P.tel,
      className: "hp-btn hp-btn--lg hp-btn--primary",
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 20
    }), "Call now"))));
  }
  const RULES = [['Riders & vehicles', ['Every rider pays admission and signs a waiver.', 'Vehicles must have working brakes and a spill-free fuel system.', 'Flags on whips are required on event weekends.']], ['Safety', ['Helmets required on ATVs, dirt bikes and open side-by-sides.', 'Seat belts on whenever the vehicle is moving.', 'Ride with a buddy on difficult and extreme trails.']], ['Kids & minors', ['Riders under 16 must be supervised by an adult.', 'A parent or guardian signs the waiver for anyone under 18.', 'Kids 12 and under ride free.']], ['Speed & conduct', ['15 mph in the campground and near the pavilion.', 'Stay on marked trails. Closed means closed.', 'Uphill traffic has the right of way.']], ['Alcohol', ['No drinking and driving, on or off the trail.', 'Keep it at camp.']], ['Camping & fires', ['Fires in rings only.', 'Quiet hours 10 PM to 7 AM.', 'Pack out what you pack in.']], ['Pets', ['Leashed in the campground.', 'Clean up after them.']], ['Not allowed', ['Riding after gates close.', 'Glass on the trails.', 'Fireworks outside of approved holiday times.']]];
  function Rules({
    waiver
  }) {
    const [open, setOpen] = React.useState(waiver);
    const {
      go
    } = useApp();
    React.useEffect(() => setOpen(waiver), [waiver]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Rules",
      title: "Know before you go.",
      intro: "The short version: wear a helmet, stay on the trail, look out for each other. The details are below.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "w",
        size: "lg",
        icon: "file-text",
        onClick: () => setOpen(true)
      }, "Sign Waiver")]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '36px 48px'
      }
    }, RULES.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h3)',
        margin: '0 0 12px',
        borderBottom: '3px solid var(--gold-400)',
        paddingBottom: 8,
        display: 'inline-block'
      }
    }, t), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 17,
        lineHeight: 1.5
      }
    }, items.map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, x)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "Waiver required for every rider"
    }, "Sign online before you arrive and you\u2019ll go straight through the gate. Booking online? We\u2019ll send you to your waivers right after checkout."))), open && /*#__PURE__*/React.createElement(window.WaiverDialog, {
      name: "",
      onClose: () => {
        setOpen(false);
        if (waiver) go('rules');
      },
      onSigned: () => {}
    }));
  }
  function Contact() {
    const P = D().park;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Contact",
      title: "Get in touch.",
      intro: "The fastest answer is a phone call. We pick up during park hours.",
      actions: [/*#__PURE__*/React.createElement("a", {
        key: "c",
        href: 'tel:' + P.tel,
        className: "hp-btn hp-btn--lg hp-btn--primary",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      }), P.phone), /*#__PURE__*/React.createElement("a", {
        key: "e",
        href: 'mailto:' + P.email,
        className: "hp-btn hp-btn--lg hp-btn--outline",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 20
      }), "Email")]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Address"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 6
      }
    }, P.address), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "hp-btn hp-btn--secondary",
      style: {
        textDecoration: 'none'
      },
      href: 'https://maps.google.com/?q=' + encodeURIComponent(P.address),
      target: "_blank",
      rel: "noreferrer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 18
    }), "Directions"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Park hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 8,
        maxWidth: 320,
        fontSize: 17
      }
    }, P.hours.map(([d, h]) => /*#__PURE__*/React.createElement(Row, {
      key: d,
      l: d,
      v: h
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Follow along"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 8
      }
    }, P.social.map(([l, i]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 22
    }), l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "Common questions about hours, rates and waivers are answered in the ", /*#__PURE__*/React.createElement(TextLink, {
      to: "faq"
    }, "FAQ"), "."), /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "Emergency on the trail?"
    }, "Call 911 first, then the park office. Tell them your trail number from the nearest sign.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-topo",
      style: {
        aspectRatio: '16/9',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--surface-card)',
        padding: '8px 14px',
        borderRadius: 4,
        fontSize: 14,
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }), "Map \xB7 Tuscumbia, AL")), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        fontSize: 15,
        color: 'var(--text-muted)'
      }
    }, "GPS tip: search the street address, then follow the park signs from Hester Porter Road. Entrance guidance to confirm with the owner.")), /*#__PURE__*/React.createElement(window.ContactForm, null)))));
  }
  Object.assign(window, {
    Rates,
    Cabins,
    Camping,
    Groups,
    Rules,
    Contact
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/ProtoApp.jsx
try { (() => {
(() => {
  const KEY = 'hp-proto-trip';
  const fresh = () => ({
    arrive: null,
    depart: null,
    stay: null,
    unit: null,
    adults: 2,
    kids: 0,
    guests: 0,
    names: {
      a: ['Brandon', 'Vann'],
      k: [],
      g: []
    },
    addAdmission: true,
    days: 0,
    eventId: null,
    contact: {
      first: 'Brandon',
      last: '',
      email: '',
      phone: ''
    },
    paid: false,
    code: null,
    waivers: {}
  });
  function useHash() {
    const [h, setH] = React.useState(location.hash);
    React.useEffect(() => {
      const f = () => {
        setH(location.hash);
        window.scrollTo(0, 0);
      };
      addEventListener('hashchange', f);
      return () => removeEventListener('hashchange', f);
    }, []);
    return h;
  }
  function App() {
    const hash = useHash();
    const [trip, setTrip] = React.useState(() => {
      try {
        return {
          ...fresh(),
          ...(JSON.parse(localStorage.getItem(KEY)) || {})
        };
      } catch (e) {
        return fresh();
      }
    });
    const update = React.useCallback(p => setTrip(t => {
      const n = {
        ...t,
        ...(typeof p === 'function' ? p(t) : p)
      };
      localStorage.setItem(KEY, JSON.stringify(n));
      return n;
    }), []);
    const go = React.useCallback(to => {
      location.hash = '#/' + (to === 'home' ? '' : to);
    }, []);
    const reset = () => {
      localStorage.removeItem(KEY);
      setTrip(fresh());
      go('home');
    };
    const book = (o = {}) => {
      const base = trip.paid ? {
        ...fresh(),
        names: trip.names,
        contact: trip.contact
      } : {};
      if (o.event) {
        const ev = window.HP_DATA.events.find(e => e.id === o.event);
        const t = {
          ...trip,
          ...base,
          arrive: ev.start,
          depart: ev.end
        };
        update({
          ...base,
          arrive: ev.start,
          depart: ev.end,
          eventId: ev.id,
          stay: null,
          unit: null,
          days: window.HP.openDays(t)
        });
        go('book/stay');
        return;
      }
      if (o.stay) {
        update({
          ...base,
          stay: o.stay,
          unit: null,
          addAdmission: true
        });
        go('book/dates');
        return;
      }
      update(base);
      go('book/dates');
    };
    const [path] = hash.replace(/^#\/?/, '').split('?');
    const seg = path.split('/').filter(Boolean);
    const page = seg[0] || 'home';
    const ctx = {
      trip,
      update,
      go,
      book,
      reset,
      seg
    };
    let body,
      booking = false;
    switch (page) {
      case 'events':
        body = seg[1] ? /*#__PURE__*/React.createElement(EventPage, {
          id: seg[1]
        }) : /*#__PURE__*/React.createElement(EventsIndex, null);
        break;
      case 'trails':
        body = seg[1] ? /*#__PURE__*/React.createElement(UphillBothWays, null) : /*#__PURE__*/React.createElement(Trails, null);
        break;
      case 'rates':
      case 'fees':
        body = /*#__PURE__*/React.createElement(Rates, null);
        break;
      case 'faq':
        body = /*#__PURE__*/React.createElement(Faq, null);
        break;
      case 'gallery':
        body = /*#__PURE__*/React.createElement(Gallery, null);
        break;
      case 'cabins':
        body = /*#__PURE__*/React.createElement(Cabins, null);
        break;
      case 'camping':
        body = /*#__PURE__*/React.createElement(Camping, null);
        break;
      case 'groups':
        body = /*#__PURE__*/React.createElement(Groups, null);
        break;
      case 'rules':
        body = /*#__PURE__*/React.createElement(Rules, {
          waiver: seg[1] === 'waiver'
        });
        break;
      case 'contact':
        body = /*#__PURE__*/React.createElement(Contact, null);
        break;
      case 'book':
        booking = true;
        body = /*#__PURE__*/React.createElement(Booking, {
          step: seg[1] || 'dates'
        });
        break;
      case 'checkout':
        booking = true;
        body = /*#__PURE__*/React.createElement(Checkout, null);
        break;
      case 'waivers':
        booking = true;
        body = /*#__PURE__*/React.createElement(Waivers, null);
        break;
      case 'confirmation':
        body = /*#__PURE__*/React.createElement(Confirmation, null);
        break;
      case 'gate':
        booking = true;
        body = /*#__PURE__*/React.createElement(Gate, null);
        break;
      case 'home':
        body = /*#__PURE__*/React.createElement(Home, null);
        break;
      default:
        body = /*#__PURE__*/React.createElement(NotFound, null);
    }
    return /*#__PURE__*/React.createElement(AppCtx.Provider, {
      value: ctx
    }, booking ? body : /*#__PURE__*/React.createElement(Shell, {
      page: page
    }, body));
  }
  const need = ['Shell', 'Home', 'Rates', 'Faq', 'Gallery', 'NotFound', 'ContactForm', 'Cabins', 'Camping', 'Groups', 'Rules', 'Contact', 'EventsIndex', 'EventPage', 'Trails', 'UphillBothWays', 'Booking', 'Checkout', 'Waivers', 'Confirmation', 'Gate', 'BkFrame'];
  const start = () => {
    if (need.some(n => !window[n])) return setTimeout(start, 30);
    if (window.__hpRoot) return;
    window.__hpRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__hpRoot.render(/*#__PURE__*/React.createElement(App, null));
  };
  start();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/ProtoApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/ProtoHome.jsx
try { (() => {
(() => {
  const {
    Photo,
    Button,
    Icon,
    Badge,
    DifficultyBadge
  } = window.DS;
  const IMG = '../../assets/photos/';
  function Hero() {
    const {
      book,
      go
    } = useApp();
    const ev = window.HP_DATA.events[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(80vh,700px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: hpAsset('hillside-traffic.jpg'),
      alt: "A line of side-by-sides and buggies climbing a dirt hill through the trees",
      position: "50% 35%",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.94) 0%, rgba(13,13,11,.6) 50%, rgba(13,13,11,.2) 100%), linear-gradient(to right, rgba(13,13,11,.6) 0%, rgba(13,13,11,0) 65%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '120px var(--container-pad) 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 32,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 780
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Tuscumbia, Alabama \xB7 Open Fri \u2013 Sun"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        width: 48,
        margin: '10px 0 14px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: 0,
        color: 'var(--stone-50)',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92
      }
    }, "Go conquer something."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--stone-200)',
        fontSize: 19,
        maxWidth: 520,
        margin: '16px 0 26px',
        lineHeight: 1.5
      }
    }, "Easy trails. Hard climbs. Long weekends. Over 1,000 acres of real off-road on one mountain in Northwest Alabama."), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => book()
    }, "Book Now"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => go('trails')
    }, "See the trails"))), /*#__PURE__*/React.createElement("button", {
      onClick: () => go('events/' + ev.id),
      className: "hp-on-dark",
      style: {
        background: 'rgba(13,13,11,.72)',
        border: '1px solid var(--border-inverse)',
        borderLeft: '3px solid var(--gold-400)',
        color: 'var(--stone-50)',
        padding: '14px 18px',
        textAlign: 'left',
        font: 'inherit',
        cursor: 'pointer',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Next big weekend"), /*#__PURE__*/React.createElement("span", {
      className: "hp-display",
      style: {
        fontSize: 26,
        lineHeight: 1
      }
    }, ev.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--stone-200)'
      }
    }, HP.range(ev.start, ev.end), " \xB7 View event \u2192"))));
  }
  function Pathways() {
    const {
      go
    } = useApp();
    const P = [['Trail riding', 'From wooded loops to serious rock.', 'trails', hpAsset('pavilion-jeeps.jpg'), 'Jeeps on an easy trail by the pavilion'], ['Events', 'Race weekends, club rides and holiday crowds.', 'events', hpAsset('event-crawl-crowd.jpg'), 'Crowd watching a rock crawl'], ['Cabins & camping', 'Ride all day. Stay all weekend.', 'cabins', null, 'Cabin porch at dusk'], ['Group rides', 'Bring the club. We’ll save you a weekend.', 'groups', hpAsset('hillside-traffic.jpg'), 'A group of rigs climbing together']];
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Find your weekend",
      title: "There\u2019s a Hawk Pride for the way you ride."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g4"
    }, P.map(([t, d, to, img, alt], i) => /*#__PURE__*/React.createElement("a", {
      key: t,
      href: '#/' + to,
      onClick: e => {
        e.preventDefault();
        go(to);
      },
      style: {
        position: 'relative',
        display: 'block',
        color: 'var(--stone-50)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        aspectRatio: i % 2 ? '3/4.2' : '3/4',
        marginTop: i % 2 ? 32 : 0,
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: img || undefined,
      caption: img ? undefined : alt,
      alt: alt,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.92) 0%, rgba(13,13,11,.1) 60%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 18
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 30,
        lineHeight: 1,
        color: 'var(--stone-50)'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: 15,
        color: 'var(--stone-200)'
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 10,
        color: 'var(--gold-400)',
        fontWeight: 700,
        fontSize: 14
      }
    }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))))));
  }
  function Proof() {
    const {
      go
    } = useApp();
    const pts = [['Easy to extreme', 'Wooded loops for the family, ledges for the buggy.'], ['Signature rock', 'Technical crawling and named obstacles.'], ['Uphill Both Ways', 'A Jeep Badge of Honor trail.', 'trails/uphill-both-ways'], [HP.count('cabin') + ' cabins · ' + (HP.count('powered') + HP.count('dry')) + ' RV pads', 'Plus primitive sites and open camping.'], ['Big event weekends', 'Hillclimbs, rock crawls and club rides.'], ['Groups welcome', 'Clubs, families and friends.', 'groups']];
    return /*#__PURE__*/React.createElement("section", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "split",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)',
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 460,
        marginLeft: 'calc(-1 * var(--container-pad))'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: hpAsset('rock-ledge-buggies.jpg'),
      alt: "Buggies working up a rock ledge",
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '64px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "The mountain"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95
      }
    }, "One mountain. Every kind of ride."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.55,
        color: 'var(--stone-200)',
        margin: '16px 0 28px',
        maxWidth: 520
      }
    }, "Over 1,000 acres and 120+ rock trails, with creeks, climbs, mud and woods in between. Pick your line and bring whatever you drive."), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: '18px 28px'
      }
    }, pts.map(([t, d, to]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        borderTop: '1px solid var(--border-inverse)',
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 17
      }
    }, to ? /*#__PURE__*/React.createElement(TextLink, {
      to: to,
      dark: true
    }, t) : t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--text-inverse-muted)',
        marginTop: 4
      }
    }, d)))))));
  }
  function Upcoming() {
    const {
      go
    } = useApp();
    const E = window.HP_DATA.events.slice(0, 3);
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Coming up",
      title: "Something\u2019s always happening.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        iconRight: "arrow-right",
        onClick: () => go('events')
      }, "All events")
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, E.map(e => /*#__PURE__*/React.createElement("a", {
      key: e.id,
      href: '#/events/' + e.id,
      onClick: ev => {
        ev.preventDefault();
        go('events/' + e.id);
      },
      className: "hp-card hp-card--interactive",
      style: {
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: e.image || undefined,
      caption: e.image ? undefined : 'Event photo',
      alt: e.title,
      ratio: "16/10",
      topLeft: /*#__PURE__*/React.createElement("div", {
        className: "hp-on-dark",
        style: {
          background: 'var(--black-950)',
          color: 'var(--stone-50)',
          padding: '6px 10px',
          textAlign: 'center',
          lineHeight: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "hp-eyebrow",
        style: {
          color: 'var(--gold-400)',
          fontSize: 11
        }
      }, HP.M[HP.p(e.start).getMonth()]), /*#__PURE__*/React.createElement("div", {
        className: "hp-display",
        style: {
          fontSize: 28
        }
      }, HP.p(e.start).getDate()))
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, e.type, " \xB7 ", HP.range(e.start, e.end)), e.status === 'few' && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Few sites left")), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, e.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, e.hook), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700,
        fontSize: 14,
        marginTop: 4
      }
    }, "View event ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })))))));
  }
  function Stay() {
    const {
      go,
      book
    } = useApp();
    const C = window.HP_DATA.categories;
    const S = [['Cabins', HP.priceLabel('cabin'), 'Beds, A/C and a porch.', 'cabins', 'cabin'], ['RV sites', HP.money(HP.rate('powered')) + ' powered · ' + HP.money(HP.rate('dry')) + ' dry', 'Level pads close to the trails.', 'camping', 'powered'], ['Camping', 'From ' + HP.priceLabel('anywhere'), 'Primitive sites or camp anywhere.', 'camping', 'primitive']];
    return /*#__PURE__*/React.createElement(Section, {
      sunken: true,
      eyebrow: "Stay the weekend",
      title: "Ride all day. Stay all weekend."
    }, /*#__PURE__*/React.createElement("div", {
      className: "g3"
    }, S.map(([t, p, d, to, stay]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: t,
      ratio: "4/3"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, p), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => book({
        stay
      })
    }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => go(to)
    }, "Details")))))));
  }
  function Life() {
    const {
      go
    } = useApp();
    const T = [[hpAsset('buggy-airborne.jpg'), 'Buggy catching air on the hill', '2/1'], [null, 'Family at the overlook', '1/1'], [hpAsset('pavilion-jeeps.jpg'), 'Rigs lined up at the pavilion', '1/1'], [null, 'Campfire at the RV pads', '1/1'], [hpAsset('event-crawl-crowd.jpg'), 'Event crowd at the rock pit', '1/1'], [null, 'View across the property', '2/1']];
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Life at Hawk Pride",
      title: "Real dirt. Real people.",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        iconRight: "arrow-right",
        onClick: () => go('gallery')
      }, "Gallery")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gridAutoRows: 'minmax(160px,22vw)',
        gap: 10,
        maxHeight: 720
      },
      className: "proto-life"
    }, T.map(([s, a, r], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        gridColumn: r === '2/1' ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: s || undefined,
      caption: s ? undefined : a,
      alt: a,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })))));
  }
  function Final() {
    const {
      book
    } = useApp();
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gold-400)',
        color: 'var(--black-950)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        color: 'var(--black-950)'
      }
    }, "Pick your dates. We\u2019ll handle the rest."), /*#__PURE__*/React.createElement("button", {
      onClick: () => book(),
      className: "hp-btn hp-btn--lg",
      style: {
        background: 'var(--black-950)',
        color: 'var(--gold-400)',
        borderColor: 'var(--black-950)'
      }
    }, "Book Now ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))));
  }
  function Home() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Pathways, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Upcoming, null), /*#__PURE__*/React.createElement(Stay, null), /*#__PURE__*/React.createElement(Life, null), /*#__PURE__*/React.createElement(Final, null));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/ProtoHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/ProtoShell.jsx
try { (() => {
(() => {
  const {
    SiteHeader,
    Alert,
    Icon,
    Button,
    IconButton
  } = window.DS;
  const LINKS = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'trails',
    label: 'Trails'
  }, {
    id: 'rates',
    label: 'Rates'
  }, {
    id: 'cabins',
    label: 'Cabins'
  }, {
    id: 'camping',
    label: 'Camping'
  }, {
    id: 'groups',
    label: 'Groups'
  }, {
    id: 'rules',
    label: 'Rules'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const Ctx = React.createContext(null);
  const useApp = () => React.useContext(Ctx);
  const LOGO = hpAsset('logo');
  function MobileMenu({
    open,
    onClose
  }) {
    const {
      go,
      book
    } = useApp();
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px var(--container-pad)',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-header__brand"
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "",
      style: {
        height: 42
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "hp-header__name",
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("span", null, "Hawk Pride"), /*#__PURE__*/React.createElement("span", null, "Offroad"))), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      variant: "dark",
      onClick: onClose
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 16
      }
    }, LINKS.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => {
        go(l.id);
        onClose();
      },
      className: "hp-display",
      style: {
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--border-inverse)',
        color: 'var(--stone-50)',
        fontSize: 34,
        textAlign: 'left',
        padding: '10px 0',
        cursor: 'pointer'
      }
    }, l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => {
        book();
        onClose();
      }
    }, "Book Now")));
  }
  function Shell({
    page,
    children
  }) {
    const {
      go,
      book
    } = useApp();
    const [m, setM] = React.useState(false);
    const P = window.HP_DATA.park;
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-root",
      style: {
        background: 'var(--bg-page)',
        minHeight: '100vh'
      }
    }, HP.notices('site').map(n => /*#__PURE__*/React.createElement(Alert, {
      key: n.title,
      tone: n.tone,
      title: n.title
    }, n.text)), /*#__PURE__*/React.createElement("div", {
      className: "proto-header"
    }, /*#__PURE__*/React.createElement(SiteHeader, {
      logoSrc: LOGO,
      links: LINKS,
      current: page,
      onNavigate: go,
      onBook: () => book(),
      ctaLabel: "Book Now",
      onMenu: () => setM(true)
    })), /*#__PURE__*/React.createElement(MobileMenu, {
      open: m,
      onClose: () => setM(false)
    }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, null));
  }
  function Footer() {
    const {
      go,
      reset
    } = useApp();
    const P = window.HP_DATA.park;
    const col = (t, items) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, t), items);
    const a = (l, id) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: '#/' + id,
      onClick: e => {
        e.preventDefault();
        go(id);
      },
      className: "proto-footlink"
    }, l);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderTop: '3px solid var(--gold-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '48px var(--container-pad) 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "Hawk Pride",
      style: {
        width: 150
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        color: 'var(--gold-400)',
        fontSize: 22
      }
    }, "Go conquer something.")), col('Visit', [/*#__PURE__*/React.createElement("span", {
      key: "a",
      className: "proto-foottext"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }), P.address), /*#__PURE__*/React.createElement("a", {
      key: "p",
      href: 'tel:' + P.tel,
      className: "proto-footlink"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }), P.phone), /*#__PURE__*/React.createElement("a", {
      key: "e",
      href: 'mailto:' + P.email,
      className: "proto-footlink"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 18
    }), "Email us")]), col('Park', [a('Events', 'events'), a('Trails', 'trails'), a('Rates', 'rates'), a('Cabins', 'cabins'), a('Camping', 'camping'), a('Groups', 'groups')]), col('Before you come', [a('Rules', 'rules'), a('Sign a waiver', 'rules/waiver'), a('Find my trip', 'confirmation'), a('FAQ', 'faq'), a('Gallery', 'gallery'), a('Contact', 'contact')]), col('Hours', P.hours.map(([d, h]) => /*#__PURE__*/React.createElement("span", {
      key: d,
      className: "proto-foottext",
      style: {
        justifyContent: 'space-between',
        maxWidth: 200
      }
    }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", null, h))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '16px var(--container-pad) 28px',
        borderTop: '1px solid var(--border-inverse)',
        fontSize: 13,
        color: 'var(--text-inverse-muted)',
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", P.name, " \xB7 Tuscumbia, Alabama"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 16
      },
      title: "Pages not yet approved: shown as labels only"
    }, ['Partners', 'Host an event', 'Refund policy', 'Terms'].map(x => /*#__PURE__*/React.createElement("span", {
      key: x
    }, x))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 10,
        marginLeft: 'auto'
      }
    }, P.social.map(([l, i]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      "aria-label": l
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    })))), /*#__PURE__*/React.createElement("a", {
      href: "#/gate",
      onClick: e => {
        e.preventDefault();
        go('gate');
      },
      className: "proto-footlink",
      style: {
        fontSize: 12,
        minHeight: 0
      }
    }, "Gate check-in (staff demo)"), /*#__PURE__*/React.createElement("button", {
      onClick: reset,
      style: {
        background: 'none',
        border: '1px solid var(--border-inverse)',
        color: 'var(--text-inverse-muted)',
        borderRadius: 4,
        padding: '4px 10px',
        font: 'inherit',
        fontSize: 12,
        cursor: 'pointer'
      }
    }, "Reset demo")));
  }
  function Section({
    eyebrow,
    title,
    action,
    intro,
    children,
    dark,
    sunken,
    style,
    id
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      className: dark ? 'hp-on-dark' : '',
      style: {
        background: dark ? 'var(--black-950)' : sunken ? 'var(--bg-sunken)' : 'transparent',
        color: dark ? 'var(--stone-50)' : 'inherit',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '64px var(--container-pad)'
      }
    }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 16,
        marginBottom: 28,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: dark ? 'var(--gold-400)' : 'var(--gold-700)'
      }
    }, eyebrow), eyebrow && /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-h1)',
        lineHeight: 1,
        color: dark ? 'var(--stone-50)' : 'var(--text-strong)',
        textWrap: 'balance'
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '14px 0 0',
        fontSize: 17,
        lineHeight: 1.55,
        color: dark ? 'var(--stone-200)' : 'var(--text-muted)',
        textWrap: 'pretty'
      }
    }, intro)), action), children));
  }
  function PageHead({
    eyebrow,
    title,
    intro,
    actions,
    image,
    imageAlt,
    position
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "proto-pagehead",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '56px 0 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '10px 0 14px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-display-l)',
        lineHeight: .95,
        textWrap: 'balance'
      }
    }, title), intro && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '16px 0 0',
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--stone-200)',
        maxWidth: 560,
        textWrap: 'pretty'
      }
    }, intro), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 24
      }
    }, actions)), image !== undefined && /*#__PURE__*/React.createElement("div", {
      className: "proto-pagehead__img"
    }, /*#__PURE__*/React.createElement(window.DS.Photo, {
      src: image || undefined,
      caption: image ? undefined : imageAlt,
      alt: imageAlt,
      position: position,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    }))));
  }
  function Row({
    l,
    v,
    b,
    muted
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: b ? 17 : 15,
        fontWeight: b ? 700 : 400,
        color: b ? 'var(--text-strong)' : muted ? 'var(--text-muted)' : 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right'
      }
    }, v));
  }
  function TextLink({
    to,
    children,
    onClick,
    dark
  }) {
    const {
      go
    } = useApp();
    return /*#__PURE__*/React.createElement("a", {
      href: to ? '#/' + to : '#',
      onClick: e => {
        e.preventDefault();
        onClick ? onClick() : go(to);
      },
      style: {
        color: dark ? 'var(--gold-400)' : 'var(--text-strong)',
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: 3,
        textDecorationColor: 'var(--gold-400)',
        textDecorationThickness: 2,
        cursor: 'pointer'
      }
    }, children);
  }
  function Callout({
    children,
    dark
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 15,
        color: dark ? 'var(--stone-200)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 18,
      style: {
        flex: 'none',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, children));
  }
  Object.assign(window, {
    Shell,
    Section,
    PageHead,
    Row,
    TextLink,
    Callout,
    AppCtx: Ctx,
    useApp,
    HP_LINKS: LINKS,
    HP_LOGO: LOGO
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/ProtoShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/Secondary.jsx
try { (() => {
(() => {
  const {
    Photo,
    Button,
    Icon,
    Input,
    Select,
    Alert
  } = window.DS;
  const FAQ = [['Planning a visit', [['Do I need a reservation to ride?', 'No. You can buy admission online before you come or pay at the gate. Booking ahead gets you through the gate faster.', 'Buy admission', 'book:none'], ['When is the park open?', null, 'Contact & hours', 'contact'], ['What does a normal visit cost?', null, 'See rates', 'rates']]], ['Riding', [['Is Hawk Pride only for hard rock crawling?', 'No. Trails run from easy wooded loops to extreme rock, and every trail is marked by difficulty.', 'See the trails', 'trails'], ['What vehicles can ride?', 'ATVs, side-by-sides, Jeeps, trucks and buggies. Some trails are limited to certain vehicles.', 'See the trails', 'trails'], ['Can kids ride?', null, 'Read the rules', 'rules']]], ['Staying overnight', [['What are my overnight options?', 'Cabins, powered RV sites, dry RV sites, primitive campsites and camp anywhere.', 'Cabins', 'cabins'], ['Does an overnight stay include riding?', 'No. Add riding admission for your riders in the same booking.', 'Book Now', 'book']]], ['Waivers & check-in', [['Who needs a waiver?', 'Every rider. A parent or guardian signs for riders under 18.', 'Sign Waiver', 'rules/waiver'], ['I booked online. What do I bring to the gate?', 'Your gate pass code from the confirmation. Staff scan it and see your whole party.', 'Find my trip', 'confirmation']]]];
  function Faq() {
    const {
      go,
      book
    } = useApp();
    const P = window.HP_DATA;
    const [open, setOpen] = React.useState('0-0');
    const auto = q => q === 'When is the park open?' ? P.park.hours.map(([d, h]) => d + ': ' + h).join(' · ') + '.' : q === 'What does a normal visit cost?' ? HP.money(P.pricing.day) + ' per rider per day, ' + HP.money(P.pricing.dayLater) + ' from day 3. Kids ' + P.pricing.freeAge + ' and under ride free.' : q === 'Can kids ride?' ? 'Yes. Kids ' + P.pricing.freeAge + ' and under ride free with a paying adult. Riders under 16 must be supervised.' : '';
    const act = to => to === 'book:none' ? book({
      stay: 'none'
    }) : to === 'book' ? book() : go(to);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "FAQ",
      title: "Quick answers.",
      intro: "The questions we get most. Still stuck? Call us during park hours.",
      actions: [/*#__PURE__*/React.createElement("a", {
        key: "c",
        href: 'tel:' + P.park.tel,
        className: "hp-btn hp-btn--lg hp-btn--outline",
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "phone",
        size: 20
      }), P.park.phone)]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        maxWidth: 880
      }
    }, FAQ.map(([g, qs], gi) => /*#__PURE__*/React.createElement("div", {
      key: g
    }, /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h3)',
        margin: '0 0 8px',
        borderBottom: '3px solid var(--gold-400)',
        paddingBottom: 8,
        display: 'inline-block'
      }
    }, g), qs.map(([q, a, cta, to], qi) => {
      const id = gi + '-' + qi,
        o = open === id;
      return /*#__PURE__*/React.createElement("div", {
        key: q,
        style: {
          borderBottom: '1px solid var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("button", {
        "aria-expanded": o,
        onClick: () => setOpen(o ? null : id),
        style: {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          background: 'none',
          border: 0,
          padding: '18px 0',
          font: 'inherit',
          fontSize: 18,
          fontWeight: 700,
          textAlign: 'left',
          cursor: 'pointer',
          color: 'var(--text-strong)',
          minHeight: 44
        }
      }, q, /*#__PURE__*/React.createElement(Icon, {
        name: o ? 'minus' : 'plus',
        size: 20,
        style: {
          flex: 'none'
        }
      })), o && /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '0 0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'flex-start'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 17,
          lineHeight: 1.55,
          color: 'var(--text-muted)',
          maxWidth: 680
        }
      }, a || auto(q)), /*#__PURE__*/React.createElement(TextLink, {
        onClick: () => act(to)
      }, cta)));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "Sample questions. Final FAQ wording comes from the owner and must match the rates, rules and hours data."))));
  }
  const SHOTS = [['Riding', hpAsset('hillside-traffic.jpg'), 'Rigs climbing the hill', '2/1'], ['Riding', hpAsset('buggy-airborne.jpg'), 'Buggy catching air', '1/1'], ['Trails', hpAsset('rock-ledge-buggies.jpg'), 'Buggies on a rock ledge', '1/1'], ['Trails', null, 'Wooded trail, easy loop', '1/1'], ['Events', hpAsset('event-crawl-crowd.jpg'), 'Event crowd at the rock pit', '2/1'], ['Camping', null, 'Campfire at the RV pads', '1/1'], ['Camping', hpAsset('pavilion-jeeps.jpg'), 'Rigs lined up at the pavilion', '1/1'], ['Families', null, 'Family at the overlook', '1/1'], ['Views', null, 'View across the property', '2/1'], ['Groups', null, 'Club lined up at the trailhead', '1/1']];
  function Gallery() {
    const {
      book
    } = useApp();
    const [f, setF] = React.useState('All');
    const cats = ['All', ...new Set(SHOTS.map(s => s[0]))];
    const list = f === 'All' ? SHOTS : SHOTS.filter(s => s[0] === f);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
      eyebrow: "Gallery",
      title: "See it before you ride it.",
      intro: "Real photos from the park. Riding, trails, events, camping and the people who come back every weekend.",
      actions: [/*#__PURE__*/React.createElement(Button, {
        key: "b",
        size: "lg",
        onClick: () => book()
      }, "Book Now")]
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 24
      }
    }, cats.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      role: "tab",
      "aria-selected": f === c,
      onClick: () => setF(c),
      className: "hp-btn hp-btn--sm",
      style: {
        background: f === c ? 'var(--black-950)' : 'transparent',
        color: f === c ? 'var(--gold-400)' : 'var(--text-strong)',
        borderColor: f === c ? 'var(--black-950)' : 'var(--border-default)',
        minHeight: 44
      }
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
        gridAutoRows: 'minmax(160px,20vw)',
        gap: 10
      },
      className: "proto-life"
    }, list.map(([c, s, a, r]) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        gridColumn: r === '2/1' && f === 'All' ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: s || undefined,
      caption: s ? undefined : a,
      alt: a,
      ratio: "auto",
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto',
        borderRadius: 0
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Callout, null, "Striped tiles are shots we still need from the owner."))));
  }
  function NotFound() {
    const {
      go,
      book
    } = useApp();
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "404",
      title: "Wrong turn.",
      intro: "That page isn\u2019t here. It may have moved when the site was rebuilt."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => book()
    }, "Book Now"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => go('home')
    }, "Home"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('events')
    }, "Events"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('rates')
    }, "Rates"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('contact')
    }, "Contact")));
  }
  function ContactForm() {
    const [v, setV] = React.useState({
      name: '',
      email: '',
      topic: 'General question',
      msg: ''
    });
    const [sent, setSent] = React.useState(false);
    const [tried, setTried] = React.useState(false);
    const err = {
      name: !v.name.trim() && 'Required',
      email: !/^\S+@\S+\.\S+$/.test(v.email) && 'Enter a valid email',
      msg: v.msg.trim().length < 5 && 'Tell us a little more'
    };
    const e = k => tried ? err[k] || undefined : undefined;
    if (sent) return /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Message sent"
    }, "Thanks, ", v.name.split(' ')[0], ". We\u2019ll reply to ", v.email, ". For anything urgent, call us.");
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: x => {
        x.preventDefault();
        setTried(true);
        if (!Object.values(err).some(Boolean)) setSent(true);
      },
      className: "hp-card",
      style: {
        padding: 24,
        gap: 14
      },
      noValidate: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, "Send us a message"), /*#__PURE__*/React.createElement("div", {
      className: "g2",
      style: {
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      value: v.name,
      error: e('name'),
      onChange: x => setV({
        ...v,
        name: x.target.value
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      icon: "mail",
      value: v.email,
      error: e('email'),
      onChange: x => setV({
        ...v,
        email: x.target.value
      })
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Topic",
      value: v.topic,
      onChange: x => setV({
        ...v,
        topic: x.target.value
      }),
      options: ['General question', 'Booking or my trip', 'Events', 'Group rides', 'Partners and sponsors']
    }), /*#__PURE__*/React.createElement("div", {
      className: 'hp-field' + (e('msg') ? ' hp-field--error' : '')
    }, /*#__PURE__*/React.createElement("label", {
      className: "hp-field__label",
      htmlFor: "ct-msg"
    }, "Message"), /*#__PURE__*/React.createElement("div", {
      className: "hp-field__control"
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "ct-msg",
      rows: 5,
      value: v.msg,
      "aria-invalid": e('msg') ? true : undefined,
      onChange: x => setV({
        ...v,
        msg: x.target.value
      }),
      style: {
        width: '100%',
        font: 'inherit',
        fontSize: 16,
        padding: '12px 14px',
        border: '1.5px solid var(--border-default)',
        borderRadius: 'var(--radius-sm,4px)',
        background: 'var(--surface-card)',
        color: 'inherit',
        resize: 'vertical'
      }
    })), e('msg') && /*#__PURE__*/React.createElement("div", {
      className: "hp-field__hint"
    }, e('msg'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Demo only. Nothing is sent."), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      icon: "send"
    }, "Send message")));
  }
  Object.assign(window, {
    Faq,
    Gallery,
    NotFound,
    ContactForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/Secondary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-prototype/data.js
try { (() => {
// Prototype data. One source of truth: every page reads prices, inventory and dates from here.
// SAMPLE = placeholder values to confirm with the owner (see README).
window.HP_DATA = {
  // name: public business name is an OPEN decision (pack AUTHORITY-AND-DECISIONS). Neutral "Hawk Pride" until approved.
  park: {
    name: 'Hawk Pride',
    address: '589 Hester Porter Road, Tuscumbia, AL 35674',
    phone: '(256) 349-4150',
    tel: '+12563494150',
    email: 'info@hawkpridemountainoffroad.com',
    hours: [['Fri – Sat', '8 AM – 10 PM'], ['Sun', '8 AM – 6 PM'], ['Mon – Thu', 'Closed']],
    checkin: '2 PM',
    checkout: 'Noon',
    social: [['Facebook', 'facebook'], ['Instagram', 'instagram'], ['YouTube', 'youtube']]
  },
  pricing: {
    day: 20,
    dayLater: 15,
    freeAge: 12,
    spectator: null
  },
  notices: [{
    scope: 'site',
    tone: 'status',
    title: 'Open this weekend',
    text: 'Gates 8 AM · Riding until 10 PM Fri & Sat'
  }, {
    scope: 'trails',
    tone: 'warning',
    title: 'Trail #42 closed this weekend',
    text: 'Washout on the upper ledge. Everything else is open.'
  }],
  categories: [{
    id: 'cabin',
    name: 'Cabin',
    plural: 'Cabins',
    model: 'unit',
    unit: 'night',
    desc: 'Beds, A/C and heat, a porch and parking for the trailer.',
    icon: 'house'
  }, {
    id: 'powered',
    name: 'Powered RV',
    plural: 'Powered RV sites',
    model: 'unit',
    price: 40,
    unit: 'night',
    desc: 'Designated level site with 50A electric and water.',
    icon: 'plug-zap'
  }, {
    id: 'dry',
    name: 'Dry RV',
    plural: 'Dry RV sites',
    model: 'unit',
    price: 25,
    unit: 'night',
    desc: 'Designated level site. Generators allowed.',
    icon: 'caravan'
  }, {
    id: 'primitive',
    name: 'Primitive campsite',
    plural: 'Primitive campsites',
    model: 'capacity',
    price: 20,
    unit: 'night',
    desc: 'Designated tent site with a fire ring.',
    icon: 'tent'
  }, {
    id: 'anywhere',
    name: 'Camp anywhere',
    plural: 'Camp anywhere',
    model: 'capacity',
    price: 5,
    unit: 'night per person',
    perPerson: true,
    desc: 'Set up in any open camping area. No site to pick.',
    icon: 'trees'
  }],
  units: [...[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => ({
    id: 'c' + n,
    cat: 'cabin',
    name: 'Cabin ' + n,
    price: n <= 2 ? 125 : 150,
    sleeps: n <= 2 ? 4 : 6,
    beds: n <= 2 ? '1 queen, 1 bunk' : '1 queen, 2 bunks',
    desc: n <= 2 ? 'Smaller cabin, a short walk to the bathhouse.' : 'Larger cabin with a covered porch and room for the crew.',
    x: 12 + i * 4.2,
    y: i % 2 ? 30 : 20
  })), ...Array.from({
    length: 9
  }, (_, i) => ({
    id: 'r' + (i + 1),
    cat: 'powered',
    name: 'RV Site ' + (i + 1),
    sleeps: 6,
    desc: 'Level pad with 50A electric and water. Pull-through.',
    x: 12 + i * 8.4,
    y: 78
  })), ...Array.from({
    length: 4
  }, (_, i) => ({
    id: 'd' + (i + 1),
    cat: 'dry',
    name: 'Dry RV Site D' + (i + 1),
    sleeps: 6,
    desc: 'Level pad on the east field. Bring the generator.',
    x: 88,
    y: 26 + i * 13
  }))],
  landmarks: [['Gate & registration', 48, 93], ['Bathhouse', 30, 50], ['Pavilion', 56, 52], ['Trailheads', 62, 12], ['Camping area', 74, 40]],
  booked: ['c1', 'c2', 'c4', 'c5', 'c6', 'c8', 'r1', 'r3', 'r5'],
  bookedEvent: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'd1', 'd2', 'd3'],
  events: [{
    id: 'ratp',
    title: 'Ride at the Pride',
    start: '2027-04-23',
    end: '2027-04-25',
    type: 'Park ride',
    status: 'featured',
    image: hpAsset('event-crawl-crowd.jpg'),
    hook: 'Our spring kickoff. Every trail open, vendors on the hill and a full campground.',
    desc: 'Three days of riding across the whole mountain, from the wooded loops to the rock. Bring the family, bring the club, bring the rig.',
    facts: [['Dates', 'Fri – Sun'], ['Gates', '8 AM daily'], ['Vehicles', 'All welcome'], ['Spectators', 'Welcome']],
    schedule: [['Friday', 'Gates 8 AM · Open riding · Campground fills'], ['Saturday', 'Open riding · Vendor row · Night ride'], ['Sunday', 'Open riding until 6 PM']],
    jeep: true
  }, {
    id: 'dsz',
    title: "Down South Zukin'",
    start: '2027-05-14',
    end: '2027-05-15',
    type: 'Club ride',
    image: hpAsset('hillside-traffic.jpg'),
    hook: 'Suzuki club weekend. Small rigs, big lines.',
    desc: 'A club-hosted ride for Suzuki owners and friends. Open to the public on standard admission.',
    facts: [['Dates', 'Fri – Sat'], ['Hosted by', 'Club organizers'], ['Vehicles', 'All welcome']],
    schedule: [['Friday', 'Check-in and trail rides'], ['Saturday', 'Group rides and cookout']]
  }, {
    id: 'mem',
    title: 'Memorial Day Weekend',
    start: '2027-05-28',
    end: '2027-05-31',
    type: 'Holiday ride',
    status: 'few',
    image: hpAsset('pavilion-jeeps.jpg'),
    hook: 'Four days open. The busiest campground of the year.',
    desc: 'The park stays open through Monday. Cabins and RV sites go first, so book early.',
    facts: [['Dates', 'Fri – Mon'], ['Gates', '8 AM daily'], ['Vehicles', 'All welcome']],
    schedule: [['Fri – Mon', 'Open riding every day']]
  }, {
    id: 'jul',
    title: '4th of July Weekend',
    start: '2027-07-02',
    end: '2027-07-05',
    type: 'Holiday ride',
    image: null,
    hook: 'Ride all day. Watch the sky light up at night.',
    desc: 'Holiday weekend with extra open days.',
    facts: [['Dates', 'Fri – Mon'], ['Vehicles', 'All welcome']],
    schedule: [['Fri – Mon', 'Open riding every day']]
  }, {
    id: 'srrs',
    title: 'SRRS Hillclimb',
    start: '2027-08-13',
    end: '2027-08-14',
    type: 'Hillclimb',
    image: hpAsset('buggy-airborne.jpg'),
    hook: 'Steep, loose and loud. Bring a chair.',
    desc: 'Sanctioned hillclimb racing on the big hill. Spectators welcome all weekend.',
    facts: [['Dates', 'Fri – Sat'], ['Racers', 'Register with the series'], ['Spectators', 'Welcome']],
    schedule: [['Friday', 'Practice runs'], ['Saturday', 'Racing and awards']]
  }, {
    id: 'mk',
    title: 'Mardi Krawl',
    start: '2027-08-26',
    end: '2027-08-29',
    type: 'Rock crawl',
    status: 'soldout',
    image: hpAsset('rock-ledge-buggies.jpg'),
    hook: 'Four days on the hardest rock we have.',
    desc: 'Club-run rock crawl. Registration is through the club and is full for this year.',
    facts: [['Dates', 'Thu – Sun'], ['Vehicles', 'Built rigs'], ['Registration', 'Full']],
    schedule: [['Thu – Sun', 'Guided crawls and open riding']],
    jeep: true
  }],
  trails: [{
    number: '#07',
    name: 'Cane Creek Loop',
    level: 'easy',
    vehicles: 'All vehicles',
    length: '3.2 mi'
  }, {
    number: '#12',
    name: 'Pine Ridge Run',
    level: 'easy',
    vehicles: 'ATV · SxS',
    length: '2.1 mi'
  }, {
    number: '#23',
    name: 'Bluff Line',
    level: 'moderate',
    vehicles: 'SxS · 4x4',
    length: '1.4 mi'
  }, {
    number: '#31',
    name: 'Hollow Crossing',
    level: 'moderate',
    vehicles: '4x4 · Jeep',
    length: '0.9 mi'
  }, {
    number: 'UBW',
    name: 'Uphill Both Ways',
    level: 'difficult',
    vehicles: 'Jeep · 4x4',
    length: 'Signature trail',
    signature: true
  }, {
    number: '#38',
    name: 'Staircase',
    level: 'difficult',
    vehicles: 'Built 4x4 · Buggy',
    length: '0.6 mi'
  }, {
    number: '#42',
    name: 'Widowmaker',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.4 mi',
    status: 'closed'
  }, {
    number: '#61',
    name: 'Rock Garden',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.3 mi'
  }]
};
window.HP = (() => {
  const D = window.HP_DATA;
  D.units.forEach(u => {
    if (u.price == null) u.price = D.categories.find(c => c.id === u.cat).price;
  });
  const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    W = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const p = s => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const add = (s, n) => {
    const d = p(s);
    d.setDate(d.getDate() + n);
    return iso(d);
  };
  const diff = (a, b) => Math.round((p(b) - p(a)) / 864e5);
  const fmt = s => {
    const d = p(s);
    return M[d.getMonth()] + ' ' + d.getDate();
  };
  const fmtLong = s => {
    const d = p(s);
    return W[d.getDay()] + ', ' + M[d.getMonth()] + ' ' + d.getDate();
  };
  const range = (a, b) => {
    if (!a) return '';
    if (!b || a === b) return fmt(a);
    const A = p(a),
      B = p(b);
    return A.getMonth() === B.getMonth() ? fmt(a) + '–' + B.getDate() : fmt(a) + ' – ' + fmt(b);
  };
  const today = iso(new Date());
  const eventOn = s => D.events.find(e => s >= e.start && s <= e.end);
  const open = s => {
    const w = p(s).getDay();
    return w === 5 || w === 6 || w === 0 || !!eventOn(s);
  };
  const eventFor = (a, b) => a && D.events.find(e => a <= e.end && (b || a) >= e.start);
  const nights = t => t.arrive && t.depart ? diff(t.arrive, t.depart) : 0;
  const openDays = t => {
    if (!t.arrive) return 0;
    const n = Math.max(nights(t), 0);
    let c = 0;
    for (let i = 0; i <= n; i++) if (open(add(t.arrive, i))) c++;
    return c;
  };
  const cat = id => D.categories.find(c => c.id === id);
  const unit = id => D.units.find(u => u.id === id);
  const availability = t => {
    const ev = eventFor(t.arrive, t.depart),
      b = ev ? D.bookedEvent : D.booked,
      out = {};
    D.categories.forEach(c => {
      if (c.model === 'unit') {
        const u = D.units.filter(u => u.cat === c.id);
        const free = u.filter(x => !b.includes(x.id));
        out[c.id] = {
          count: free.length,
          free: free.map(x => x.id)
        };
      } else out[c.id] = {
        count: ev && c.id === 'primitive' ? 0 : 99
      };
    });
    return out;
  };
  const riders = t => t.adults || 0;
  const admissionPer = days => days <= 2 ? D.pricing.day * days : D.pricing.day * 2 + D.pricing.dayLater * (days - 2);
  const admission = t => riders(t) * admissionPer(t.days || 0);
  const people = t => (t.adults || 0) + (t.kids || 0) + (t.guests || 0);
  const lodging = t => {
    if (!t.stay || t.stay === 'none') return 0;
    const c = cat(t.stay),
      n = nights(t);
    if (c.model === 'unit') {
      const u = unit(t.unit);
      return u ? u.price * n : 0;
    }
    return c.perPerson ? c.price * n * people(t) : c.price * n;
  };
  const wantsAdmission = t => t.stay === 'none' || t.addAdmission !== false;
  const total = t => lodging(t) + (wantsAdmission(t) ? admission(t) : 0);
  const participants = t => [...(t.names.a || []).slice(0, t.adults).map((n, i) => ({
    key: 'a' + i,
    name: n,
    type: 'Adult rider',
    waiver: true
  })), ...(t.names.k || []).slice(0, t.kids).map((n, i) => ({
    key: 'k' + i,
    name: n,
    type: 'Child rider',
    minor: true,
    waiver: true
  })), ...(t.names.g || []).slice(0, t.guests).map((n, i) => ({
    key: 'g' + i,
    name: n,
    type: 'Non-riding guest',
    waiver: false
  }))];
  const weekends = (from, count) => {
    let d = p(from);
    while (d.getDay() !== 5) d.setDate(d.getDate() + 1);
    const o = [];
    for (let i = 0; i < count; i++) {
      const a = iso(d);
      o.push({
        arrive: a,
        depart: add(a, 2)
      });
      d.setDate(d.getDate() + 7);
    }
    return o;
  };
  const money = n => '$' + n.toLocaleString();
  const rate = id => {
    const c = cat(id);
    return c.price != null ? c.price : Math.min(...D.units.filter(u => u.cat === id).map(u => u.price));
  };
  const priceLabel = id => {
    const c = cat(id);
    return (c.price == null ? 'From ' : '') + money(rate(id)) + ' / ' + (c.perPerson ? 'person / night' : 'night');
  };
  const cabinClasses = () => {
    const g = [];
    D.units.filter(u => u.cat === 'cabin').forEach(u => {
      let x = g.find(k => k.price === u.price);
      if (!x) {
        x = {
          price: u.price,
          sleeps: u.sleeps,
          beds: u.beds,
          desc: u.desc,
          nums: []
        };
        g.push(x);
      }
      x.nums.push(+u.name.replace(/\D/g, ''));
    });
    g.forEach(x => x.label = 'Cabins ' + x.nums[0] + '–' + x.nums[x.nums.length - 1]);
    return g;
  };
  const notices = scope => (D.notices || []).filter(n => n.scope === scope);
  const count = id => D.units.filter(u => u.cat === id).length;
  return {
    p,
    iso,
    add,
    diff,
    fmt,
    fmtLong,
    range,
    today,
    open,
    eventOn,
    eventFor,
    nights,
    openDays,
    cat,
    unit,
    availability,
    admissionPer,
    admission,
    people,
    lodging,
    wantsAdmission,
    total,
    participants,
    weekends,
    money,
    M,
    W,
    rate,
    priceLabel,
    cabinClasses,
    notices,
    count
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-prototype/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
(() => {
  const {
    BookingBar
  } = window.DS;
  function App() {
    const [s, setS] = React.useState(() => {
      try {
        return JSON.parse(localStorage.getItem('hp-kit')) || {
          page: 'home'
        };
      } catch (e) {
        return {
          page: 'home'
        };
      }
    });
    const set = n => {
      setS(n);
      localStorage.setItem('hp-kit', JSON.stringify(n));
      window.scrollTo(0, 0);
    };
    const go = page => set({
      page
    });
    const [ev, setEv] = React.useState(null);
    const openLodging = item => set({
      page: 'lodging',
      item
    });
    const mobile = window.innerWidth < 700;
    let body;
    switch (s.page) {
      case 'trails':
        body = /*#__PURE__*/React.createElement(Trails, null);
        break;
      case 'events':
        body = /*#__PURE__*/React.createElement(Events, {
          go: go
        });
        break;
      case 'stay':
        body = /*#__PURE__*/React.createElement(Stay, {
          openLodging: openLodging
        });
        break;
      case 'pricing':
        body = /*#__PURE__*/React.createElement(Pricing, null);
        break;
      case 'lodging':
        body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Lodging, {
          item: s.item,
          back: () => go('stay'),
          checkout: g => set({
            page: 'checkout',
            item: s.item,
            guests: g
          })
        }), mobile && /*#__PURE__*/React.createElement(BookingBar, {
          price: s.item.price,
          summary: "Apr 24 \u2013 26 \xB7 2 guests",
          onAction: () => set({
            page: 'checkout',
            item: s.item,
            guests: {
              a: 2,
              k: 0
            }
          })
        }));
        break;
      case 'checkout':
        body = /*#__PURE__*/React.createElement(Checkout, {
          item: s.item,
          guests: s.guests,
          back: () => openLodging(s.item),
          done: () => set({
            page: 'done',
            item: s.item
          })
        });
        break;
      case 'done':
        body = /*#__PURE__*/React.createElement(Confirmation, {
          item: s.item,
          go: go
        });
        break;
      default:
        body = /*#__PURE__*/React.createElement(Home, {
          go: go,
          openEvent: setEv,
          openLodging: openLodging
        });
    }
    return /*#__PURE__*/React.createElement(Shell, {
      page: ['lodging', 'checkout', 'done'].includes(s.page) ? 'stay' : s.page,
      go: go
    }, body, /*#__PURE__*/React.createElement(EventDialog, {
      ev: ev,
      onClose: () => setEv(null),
      go: go
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
(() => {
  const {
    Photo,
    Button,
    IconButton,
    BookingBar,
    Dialog,
    QuantityStepper,
    Input,
    Checkbox,
    Radio,
    Icon,
    Badge,
    Alert,
    Toast
  } = window.DS;
  const nights = 2;
  function Row({
    l,
    v,
    b
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        fontSize: 15,
        fontWeight: b ? 700 : 400,
        color: b ? 'var(--text-strong)' : 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, v));
  }
  function Lodging({
    item,
    back,
    checkout
  }) {
    const [g, setG] = React.useState(false);
    const [a, setA] = React.useState(2);
    const [k, setK] = React.useState(1);
    const [saved, setSaved] = React.useState(false);
    const am = [['plug-zap', '50 amp electric'], ['droplets', 'Water hookup'], ['shower-head', 'Bathhouse nearby'], ['flame', 'Fire ring'], ['wifi-off', 'No Wi-Fi — you are here to ride'], ['dog', 'Pets welcome']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px var(--container-pad) 0'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: back,
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "All lodging"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: 8,
        marginTop: 10,
        borderRadius: 6,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: item.kind + ' · exterior',
      ratio: "16/10",
      topRight: /*#__PURE__*/React.createElement(IconButton, {
        icon: "heart",
        label: "Save",
        variant: "dark",
        onClick: () => setSaved(true)
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Interior",
      ratio: "auto",
      style: {
        aspectRatio: 'auto'
      }
    }), /*#__PURE__*/React.createElement(Photo, {
      caption: "View",
      ratio: "auto",
      style: {
        aspectRatio: 'auto'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: 32,
        padding: '24px 0 48px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-700)'
      }
    }, item.kind), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h1)',
        margin: '6px 0 8px',
        lineHeight: 1
      }
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__meta",
      style: {
        fontSize: 15
      }
    }, item.sleeps && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), "Sleeps ", item.sleeps), item.features.map(f => /*#__PURE__*/React.createElement("span", {
      key: f
    }, f))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.55,
        margin: '18px 0'
      }
    }, "A short walk from the registration area and trailheads. Check-in from 2 PM Friday, check-out by noon Sunday."), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        margin: '24px 0 12px'
      }
    }, "What's here"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
        gap: 12
      }
    }, am.map(([i, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    }), t)))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: 20,
        gap: 14,
        position: 'sticky',
        top: 84
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, "$", item.price, /*#__PURE__*/React.createElement("small", null, "/ night")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        border: '1.5px solid var(--border-default)',
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        borderRight: '1.5px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, "ARRIVE"), "Fri, Apr 24"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, "DEPART"), "Sun, Apr 26"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setG(true),
      style: {
        gridColumn: '1/-1',
        borderTop: '1.5px solid var(--border-default)',
        background: 'none',
        border: 0,
        borderTopStyle: 'solid',
        padding: '8px 12px',
        textAlign: 'left',
        font: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, "GUESTS"), a, " adults", k ? ', ' + k + ' kid' : ''), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18
    }))), /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => checkout({
        a,
        k
      })
    }, "Reserve"), /*#__PURE__*/React.createElement(Row, {
      l: '$' + item.price + ' × ' + nights + ' nights',
      v: '$' + item.price * nights
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Taxes & fees",
      v: '$' + Math.round(item.price * nights * .1)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: '$' + Math.round(item.price * nights * 1.1)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, "Riding passes are purchased separately at the gate or online."))), /*#__PURE__*/React.createElement(Dialog, {
      open: g,
      title: "Guests",
      onClose: () => setG(false),
      footer: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setG(false)
      }, "Done")
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Adults",
      description: "Ages 10 and up",
      value: a,
      min: 1,
      max: item.sleeps || 8,
      onChange: setA
    }), /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Kids",
      description: "Under 10",
      value: k,
      onChange: setK
    })), saved && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 90,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40
      },
      onClick: () => setSaved(false)
    }, /*#__PURE__*/React.createElement(Toast, {
      message: item.name + ' saved to your trip',
      actionLabel: "Undo",
      onAction: () => setSaved(false)
    })));
  }
  function Checkout({
    item,
    guests,
    back,
    done
  }) {
    const [agree, setAgree] = React.useState(false);
    const [err, setErr] = React.useState(false);
    const tot = Math.round(item.price * nights * 1.1);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 980,
        margin: '0 auto',
        padding: '20px var(--container-pad) 56px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: back,
      className: "hp-btn hp-btn--ghost hp-btn--sm",
      style: {
        marginLeft: -10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }), "Back"), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h1)',
        margin: '8px 0 20px'
      }
    }, "Confirm your stay"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 20
      }
    }, "Your details"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      defaultValue: "Jess"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      defaultValue: "Carter"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "jess@example.com",
      hint: "We'll send your confirmation here"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      defaultValue: "(256) 555-0142"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 20,
        marginTop: 10
      }
    }, "Add-ons"), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Firewood bundle",
      description: "$10 \xB7 delivered to your site"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Bag of ice",
      description: "$4 \xB7 pick up at registration"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title",
      style: {
        fontSize: 20,
        marginTop: 10
      }
    }, "Payment"), /*#__PURE__*/React.createElement(Radio, {
      name: "pay",
      label: "Pay in full now",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "pay",
      label: "Pay 50% deposit",
      description: "Balance due at check-in"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Card number",
      icon: "credit-card",
      placeholder: "1234 1234 1234 1234"
    }), err && /*#__PURE__*/React.createElement(Alert, {
      tone: "danger",
      title: "One more thing"
    }, "Please agree to the park rules and waiver."), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I agree to the park rules and liability waiver",
      checked: agree,
      onChange: e => {
        setAgree(e.target.checked);
        setErr(false);
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      block: true,
      onClick: () => agree ? done() : setErr(true)
    }, "Pay $", tot)), /*#__PURE__*/React.createElement("div", {
      className: "hp-card",
      style: {
        position: 'sticky',
        top: 84
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: item.kind,
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--text-muted)'
      }
    }, item.kind), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, item.name), /*#__PURE__*/React.createElement(Row, {
      l: "Dates",
      v: "Apr 24 \u2013 26"
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Guests",
      v: guests.a + ' adults' + (guests.k ? ', ' + guests.k + ' kid' : '')
    }), /*#__PURE__*/React.createElement(Row, {
      l: nights + ' nights',
      v: '$' + item.price * nights
    }), /*#__PURE__*/React.createElement(Row, {
      l: "Taxes & fees",
      v: '$' + Math.round(item.price * nights * .1)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 10
      }
    }, /*#__PURE__*/React.createElement(Row, {
      b: true,
      l: "Total",
      v: '$' + tot
    }))))));
  }
  function Confirmation({
    item,
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        margin: '0 auto',
        padding: '56px var(--container-pad)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--gold-400)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 32
    })), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        fontSize: 'var(--fs-h1)',
        margin: 0
      }
    }, "You're booked"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17
      }
    }, item.name, " \xB7 Fri, Apr 24 \u2013 Sun, Apr 26"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 20,
        padding: '10px 16px',
        background: 'var(--bg-sunken)',
        borderRadius: 4
      }
    }, "HP-7K2Q9"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        maxWidth: 440
      }
    }, "Check in at the registration building when you arrive. Buy riding passes online now to skip the line at the gate."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('pricing')
    }, "Buy riding passes"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "map-pin"
    }, "Directions")));
  }
  Object.assign(window, {
    Lodging,
    Checkout,
    Confirmation,
    BookingBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    EventCard,
    Tabs,
    Dialog,
    Button,
    Photo,
    Badge,
    Icon
  } = window.DS;
  function EventDialog({
    ev,
    onClose,
    go
  }) {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: !!ev,
      title: ev ? ev.title : '',
      onClose: onClose,
      footer: ev && ev.status !== 'soldout' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        onClick: onClose
      }, "Close"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => {
          onClose();
          go('stay');
        }
      }, "Book a stay")) : /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        onClick: onClose
      }, "Close")
    }, ev && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: ev.image,
      caption: "Event photo",
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 16
    }), ev.dates), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 16
    }), ev.price)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Gates open at 8 AM. Cabins and RV pads book fast on event weekends \u2014 reserve early.")));
  }
  function Events({
    go
  }) {
    const [v, setV] = React.useState('list');
    const [ev, setEv] = React.useState(null);
    const D = window.HP_DATA.events;
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Calendar",
      title: "Events & open weekends",
      action: /*#__PURE__*/React.createElement(Tabs, {
        value: v,
        onChange: setV,
        items: [{
          id: 'list',
          label: 'List',
          icon: 'list'
        }, {
          id: 'grid',
          label: 'Grid',
          icon: 'grid-2x2'
        }]
      })
    }, v === 'list' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        maxWidth: 760
      }
    }, D.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.id,
      layout: "row"
    }, e, {
      onClick: () => setEv(e)
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        gap: 16
      }
    }, D.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.id
    }, e, {
      onClick: () => setEv(e)
    })))), /*#__PURE__*/React.createElement(EventDialog, {
      ev: ev,
      onClose: () => setEv(null),
      go: go
    }));
  }
  Object.assign(window, {
    Events,
    EventDialog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Photo,
    Button,
    EventCard,
    LodgingCard,
    PriceCard,
    Input,
    Select,
    Icon,
    DifficultyBadge
  } = window.DS;
  function Hero({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 'min(78vh,680px)',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--black-900)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: "../../assets/photos/hillside-traffic.jpg",
      alt: "A line of side-by-sides and buggies climbing a dirt hill through the trees",
      position: "50% 35%",
      ratio: "auto",
      scrim: true,
      style: {
        position: 'absolute',
        inset: 0,
        aspectRatio: 'auto'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(13,13,11,.92) 0%, rgba(13,13,11,.62) 55%, rgba(13,13,11,.28) 100%), linear-gradient(to right, rgba(13,13,11,.55) 0%, rgba(13,13,11,0) 70%)',
        pointerEvents: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '96px var(--container-pad) 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, "Tuscumbia, Alabama \xB7 Open Fri\u2013Sun"), /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        width: 48,
        margin: '10px 0 14px'
      }
    }), /*#__PURE__*/React.createElement("h1", {
      className: "hp-display",
      style: {
        margin: 0,
        color: 'var(--stone-50)',
        fontSize: 'var(--fs-display-xl)',
        lineHeight: .92,
        maxWidth: 760
      }
    }, "Go conquer something."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--stone-200)',
        fontSize: 18,
        maxWidth: 540,
        margin: '16px 0 24px',
        lineHeight: 1.55
      }
    }, "A whole mountain of real off-road adventure, your way. Rock, climbs, woods, creeks and mud, packed onto one mountain in Northwest Alabama."), /*#__PURE__*/React.createElement("div", {
      className: "hp-on-dark",
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go('stay')
    }, "Book a stay"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: () => go('pricing')
    }, "Day passes"))));
  }
  function PlanBar({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '-28px auto 0',
        padding: '0 var(--container-pad)',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-3)',
        padding: 18,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
        gap: 14,
        alignItems: 'end'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Stay",
      options: ['Cabin', 'RV site', 'Primitive camping']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Arrive",
      icon: "calendar-days",
      defaultValue: "Fri, Apr 24"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Depart",
      icon: "calendar-days",
      defaultValue: "Sun, Apr 26"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "search",
      onClick: () => go('stay')
    }, "Check availability")));
  }
  function Stats() {
    const s = [['120+', 'Rock crawling trails'], ['8', 'Cabins'], ['13', 'RV pads'], ['1', 'Mountain']];
    return /*#__PURE__*/React.createElement("div", {
      className: "kit-stats",
      style: {
        gap: 1,
        background: 'var(--border-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 6,
        overflow: 'hidden'
      }
    }, s.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: 'var(--surface-card)',
        padding: '20px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        fontSize: 44,
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, l))));
  }
  function Home({
    go,
    openEvent,
    openLodging
  }) {
    const D = window.HP_DATA;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
      go: go
    }), /*#__PURE__*/React.createElement(PlanBar, {
      go: go
    }), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "The mountain",
      title: "Mild. Wild. And a whole lot in between."
    }, /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
      className: "kit-g3",
      style: {
        marginTop: 20
      }
    }, [['Rock crawling', 'Natural rock ledges, climbs and drops. Bring the buggy, or bring the stock Jeep and pick your line.', 'difficult', 'rock-ledge-buggies.jpg'], ['Trail riding', 'Wooded trails, creek crossings and overlooks. Good for SxS groups, stock rigs and the kids.', 'easy', 'pavilion-jeeps.jpg'], ['Hill climbs', 'Steep, loose and a lot of fun to watch. Park your chair and pick a favorite.', 'extreme', 'buggy-airborne.jpg']].map(([t, d, l, img]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "hp-card hp-card--interactive",
      role: "link",
      tabIndex: 0,
      "aria-label": t + ' trails',
      onClick: () => go('trails'),
      onKeyDown: e => {
        if (e.key === 'Enter') go('trails');
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: '../../assets/photos/' + img,
      alt: t,
      position: img === 'buggy-airborne.jpg' ? '50% 45%' : undefined,
      ratio: "16/10"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body"
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: l
    }), /*#__PURE__*/React.createElement("h3", {
      className: "hp-card__title"
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--text-muted)',
        fontSize: 15
      }
    }, d)))))), /*#__PURE__*/React.createElement(Section, {
      dark: true,
      eyebrow: "Calendar",
      title: "Upcoming events",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        iconRight: "arrow-right",
        onClick: () => go('events')
      }, "All events")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        gap: 16
      }
    }, D.events.slice(0, 3).map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: e.id
    }, e, {
      onClick: () => openEvent(e)
    }))))), /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Stay the weekend",
      title: "Cabins, RV pads & camping",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        iconRight: "arrow-right",
        onClick: () => go('stay')
      }, "See all")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        gap: 16
      }
    }, D.lodging.slice(0, 3).map(l => /*#__PURE__*/React.createElement(LodgingCard, _extends({
      key: l.id
    }, l, {
      onClick: () => openLodging(l)
    }))))), /*#__PURE__*/React.createElement(Section, {
      style: {
        background: 'var(--bg-sunken)'
      },
      eyebrow: "Admission",
      title: "Day passes",
      action: /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-muted)'
        }
      }, "Children under 10 ride free")
    }, /*#__PURE__*/React.createElement("div", {
      className: "kit-g4 kit-g4--stack"
    }, D.passes.map(p => /*#__PURE__*/React.createElement(PriceCard, {
      key: p.id,
      title: p.title,
      price: p.price,
      unit: "/ rider",
      description: p.desc,
      features: p.features,
      highlight: p.highlight,
      badge: p.badge,
      action: /*#__PURE__*/React.createElement(Button, {
        block: true,
        variant: p.highlight ? 'primary' : 'secondary',
        onClick: () => go('pricing')
      }, "Buy passes")
    })))));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
(() => {
  const {
    PriceCard,
    Button,
    QuantityStepper,
    Alert,
    Toast
  } = window.DS;
  function Pricing() {
    const [sel, setSel] = React.useState(2);
    const [r, setR] = React.useState(2);
    const [k, setK] = React.useState(0);
    const [ok, setOk] = React.useState(false);
    const D = window.HP_DATA.passes;
    const p = D.find(x => x.id === sel);
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Admission",
      title: "Riding passes"
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "info",
      title: "We're a weekend park"
    }, "Open Friday through Sunday, plus holiday and event dates. Children under 10 ride free."), /*#__PURE__*/React.createElement("div", {
      className: "kit-g4 kit-g4--stack",
      style: {
        margin: '20px 0 28px'
      }
    }, D.map(x => /*#__PURE__*/React.createElement(PriceCard, {
      key: x.id,
      title: x.title,
      price: x.price,
      unit: "/ rider",
      description: x.desc,
      features: x.features,
      highlight: sel === x.id,
      badge: x.badge,
      action: /*#__PURE__*/React.createElement(Button, {
        block: true,
        variant: sel === x.id ? 'primary' : 'outline',
        onClick: () => setSel(x.id)
      }, sel === x.id ? 'Selected' : 'Select')
    }))), /*#__PURE__*/React.createElement("div", {
      className: "hp-card hp-card--raised",
      style: {
        padding: '8px 20px 20px',
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Riders",
      description: '$' + p.price + ' each · ages 10+',
      value: r,
      min: 1,
      onChange: setR
    }), /*#__PURE__*/React.createElement(QuantityStepper, {
      label: "Kids under 10",
      description: "Free",
      value: k,
      onChange: setK
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 14,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-price"
    }, "$", p.price * r), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => setOk(true)
    }, `Buy ${p.title.toLowerCase()}es`))), ok && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      message: r + ' × ' + p.title + ' added',
      actionLabel: "Dismiss",
      onAction: () => setOk(false)
    })));
  }
  window.Pricing = Pricing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
(() => {
  const {
    SiteHeader,
    Alert,
    Icon,
    Button
  } = window.DS;
  const LINKS = [{
    id: 'trails',
    label: 'Trails'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'stay',
    label: 'Stay'
  }, {
    id: 'pricing',
    label: 'Pricing'
  }];
  function MobileMenu({
    open,
    onClose,
    go
  }) {
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 48
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hp-header__brand"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/brandmark-gold.svg",
      alt: "",
      style: {
        height: 42
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "hp-header__name",
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("span", null, "Hawk Pride"), /*#__PURE__*/React.createElement("span", null, "Offroad"))), /*#__PURE__*/React.createElement(window.DS.IconButton, {
      icon: "x",
      label: "Close",
      variant: "dark",
      onClick: onClose
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 24
      }
    }, LINKS.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => {
        go(l.id);
        onClose();
      },
      className: "hp-display",
      style: {
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--border-inverse)',
        color: 'var(--stone-50)',
        fontSize: 40,
        textAlign: 'left',
        padding: '14px 0',
        cursor: 'pointer'
      }
    }, l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      onClick: () => {
        go('stay');
        onClose();
      }
    }, "Book a stay")));
  }
  function Shell({
    page,
    go,
    children
  }) {
    const [m, setM] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      className: 'hp-root' + (new URLSearchParams(location.search).get('case') === 'sentence' ? ' hp-case-sentence' : ''),
      style: {
        background: 'var(--bg-page)',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "status",
      title: "Open this weekend"
    }, "Gates 8 AM \xB7 Riding until 10 PM Fri & Sat"), /*#__PURE__*/React.createElement(SiteHeader, {
      logoSrc: "../../assets/logo/brandmark-gold.svg",
      links: LINKS,
      current: page,
      onNavigate: go,
      onBook: () => go('stay'),
      onMenu: () => setM(true)
    }), /*#__PURE__*/React.createElement(MobileMenu, {
      open: m,
      onClose: () => setM(false),
      go: go
    }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, {
      go: go
    }));
  }
  function Footer({
    go
  }) {
    const P = window.HP_DATA.park;
    const col = (t, items) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: 'var(--gold-400)'
      }
    }, t), items);
    const a = (l, id) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(id);
      },
      style: {
        color: 'var(--text-inverse-muted)',
        textDecoration: 'none',
        cursor: 'pointer',
        minHeight: 28,
        display: 'inline-flex',
        alignItems: 'center'
      }
    }, l);
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--black-950)',
        color: 'var(--stone-50)',
        borderTop: '3px solid var(--gold-400)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '48px var(--container-pad) 28px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/brandmark-gold.svg",
      alt: "Hawk Pride Offroad",
      style: {
        width: 160
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-display",
      style: {
        color: 'var(--gold-400)',
        fontSize: 22
      }
    }, "Go conquer something.")), col('Visit', [/*#__PURE__*/React.createElement("span", {
      key: "a",
      style: {
        color: 'var(--text-inverse-muted)',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    }), P.address), /*#__PURE__*/React.createElement("span", {
      key: "p",
      style: {
        color: 'var(--text-inverse-muted)',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }), P.phone)]), col('Park', [a('Trails', 'trails'), a('Events', 'events'), a('Stay', 'stay'), a('Pricing', 'pricing')]), col('Hours', [/*#__PURE__*/React.createElement("span", {
      key: "h",
      style: {
        color: 'var(--text-inverse-muted)'
      }
    }, "Fri\u2013Sat \xB7 8 AM\u201310 PM", /*#__PURE__*/React.createElement("br", null), "Sun \xB7 8 AM\u20136 PM", /*#__PURE__*/React.createElement("br", null), "Closed Mon\u2013Thu")])), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '16px var(--container-pad) 28px',
        borderTop: '1px solid var(--border-inverse)',
        fontSize: 13,
        color: 'var(--text-inverse-muted)'
      }
    }, "\xA9 Hawk Pride Offroad Adventure Park \xB7 Tuscumbia, Alabama"));
  }
  function Section({
    eyebrow,
    title,
    action,
    children,
    dark,
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: dark ? 'hp-on-dark' : '',
      style: {
        background: dark ? 'var(--black-950)' : 'transparent',
        color: dark ? 'var(--stone-50)' : 'inherit',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px var(--container-pad)'
      }
    }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 16,
        marginBottom: 24,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
      className: "hp-eyebrow",
      style: {
        color: dark ? 'var(--gold-400)' : 'var(--gold-700)'
      }
    }, eyebrow), eyebrow && /*#__PURE__*/React.createElement("span", {
      className: "hp-rule",
      style: {
        margin: '8px 0 12px'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      className: "hp-display",
      style: {
        margin: 0,
        fontSize: 'var(--fs-h1)',
        lineHeight: 1,
        color: dark ? 'var(--stone-50)' : 'var(--text-strong)'
      }
    }, title)), action), children));
  }
  Object.assign(window, {
    Shell,
    Section
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Stay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    LodgingCard,
    Tabs,
    Switch
  } = window.DS;
  function Stay({
    openLodging
  }) {
    const [f, setF] = React.useState('all');
    const [av, setAv] = React.useState(false);
    const D = window.HP_DATA.lodging;
    const list = D.filter(l => (f === 'all' || l.kind === f) && (!av || l.available));
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Stay the weekend",
      title: "Cabins, RV pads & camping"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: f,
      onChange: setF,
      items: [{
        id: 'all',
        label: 'All'
      }, {
        id: 'Cabin',
        label: 'Cabins'
      }, {
        id: 'RV site',
        label: 'RV sites'
      }, {
        id: 'Camping',
        label: 'Camping'
      }]
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Available Apr 24\u201326",
      checked: av,
      onChange: e => setAv(e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
        gap: 16
      }
    }, list.map(l => /*#__PURE__*/React.createElement(LodgingCard, _extends({
      key: l.id
    }, l, {
      onClick: () => openLodging(l)
    })))));
  }
  window.Stay = Stay;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Stay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Trails.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    Tabs,
    TrailRow,
    Photo,
    Alert,
    Dialog,
    DifficultyBadge,
    Button,
    Icon,
    Badge
  } = window.DS;
  function Trails() {
    const [f, setF] = React.useState('all');
    const [t, setT] = React.useState(null);
    const D = window.HP_DATA.trails;
    const list = f === 'all' ? D : D.filter(x => x.level === f);
    return /*#__PURE__*/React.createElement(Section, {
      eyebrow: "Trails & map",
      title: "Ride what you came for. Find what you didn't."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: 24,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "Trail #42 closed this weekend"
    }, "Washout on the upper ledge. Everything else is open."), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: f,
      onChange: setF,
      items: [{
        id: 'all',
        label: 'All'
      }, {
        id: 'easy',
        label: 'Easy'
      }, {
        id: 'moderate',
        label: 'Moderate'
      }, {
        id: 'difficult',
        label: 'Difficult'
      }, {
        id: 'extreme',
        label: 'Extreme'
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 6,
        padding: '0 12px'
      }
    }, list.map(x => /*#__PURE__*/React.createElement(TrailRow, _extends({
      key: x.number
    }, x, {
      onClick: () => setT(x)
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 84
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hp-card"
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Park trail map",
      ratio: "4/5"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hp-card__body",
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, ['easy', 'moderate', 'difficult', 'extreme'].map(l => /*#__PURE__*/React.createElement(DifficultyBadge, {
      key: l,
      level: l
    }))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      icon: "download"
    }, "PDF"))))), /*#__PURE__*/React.createElement(Dialog, {
      open: !!t,
      title: t ? t.number + ' · ' + t.name : '',
      onClose: () => setT(null),
      footer: /*#__PURE__*/React.createElement(Button, {
        onClick: () => setT(null)
      }, "Close")
    }, t && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      caption: "Trail photo",
      ratio: "16/9"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(DifficultyBadge, {
      level: t.level
    }), t.status === 'closed' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Closed") : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Open")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Vehicles"), t.vehicles), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 13
      }
    }, "Length"), t.length)))));
  }
  window.Trails = Trails;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Trails.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.HP_DATA = {
  park: {
    address: '589 Hester Porter Road, Tuscumbia, AL 35674',
    phone: '(256) 349-4150',
    email: 'info@hawkpridemountainoffroad.com'
  },
  passes: [{
    id: 1,
    title: '1-Day Pass',
    price: 20,
    desc: 'Any single open day.',
    features: ['Full trail access', 'Mud and ATV areas']
  }, {
    id: 2,
    title: '2-Day Pass',
    price: 30,
    desc: 'Two consecutive days.',
    features: ['Full trail access', 'Primitive camping included'],
    highlight: true,
    badge: 'Most popular'
  }, {
    id: 3,
    title: '3-Day Pass',
    price: 40,
    desc: 'Friday through Sunday.',
    features: ['Full trail access', 'Primitive camping included']
  }, {
    id: 4,
    title: '4-Day Pass',
    price: 50,
    desc: 'Holiday and event weekends.',
    features: ['Full trail access', 'Primitive camping included']
  }],
  events: [{
    id: 'ratp',
    title: 'Ride at the Pride',
    month: 'APR',
    day: '24',
    dates: 'Apr 24–26',
    type: 'Park ride',
    status: 'featured',
    price: 'Standard passes',
    image: '../../assets/photos/event-crawl-crowd.jpg'
  }, {
    id: 'dsz',
    title: "Down South Zukin'",
    month: 'MAY',
    day: '13',
    dates: 'May 13–14',
    type: 'Club ride',
    price: 'Standard passes',
    image: '../../assets/photos/hillside-traffic.jpg'
  }, {
    id: 'mem',
    title: 'Memorial Day Weekend',
    month: 'MAY',
    day: '27',
    dates: 'May 27–30',
    type: 'Holiday ride',
    status: 'few',
    price: '4-day pass $50',
    image: '../../assets/photos/pavilion-jeeps.jpg'
  }, {
    id: 'jul',
    title: '4th of July Weekend',
    month: 'JUL',
    day: '1',
    dates: 'Jul 1–4',
    type: 'Holiday ride',
    price: '4-day pass $50'
  }, {
    id: 'srrs',
    title: 'SRRS Hillclimb',
    month: 'AUG',
    day: '12',
    dates: 'Aug 12–13',
    type: 'Hillclimb',
    price: 'Spectator passes',
    image: '../../assets/photos/buggy-airborne.jpg'
  }, {
    id: 'mk',
    title: 'Mardi Krawl',
    month: 'AUG',
    day: '25',
    dates: 'Aug 25–28',
    type: 'Rock crawl',
    status: 'soldout',
    price: 'Register with club',
    image: '../../assets/photos/rock-ledge-buggies.jpg'
  }],
  lodging: [{
    id: 'c1',
    name: 'Ridge View Cabin',
    kind: 'Cabin',
    sleeps: 6,
    features: ['A/C', 'Porch'],
    price: 145,
    available: true
  }, {
    id: 'c2',
    name: 'Cane Creek Cabin',
    kind: 'Cabin',
    sleeps: 4,
    features: ['A/C', 'Grill'],
    price: 125,
    available: true
  }, {
    id: 'c3',
    name: 'Hawk Nest Cabin',
    kind: 'Cabin',
    sleeps: 8,
    features: ['A/C', 'Bunk room'],
    price: 175,
    available: false
  }, {
    id: 'r7',
    name: 'RV Pad 7',
    kind: 'RV site',
    sleeps: 6,
    features: ['50 amp', 'Water'],
    price: 55,
    unit: 'night',
    available: true
  }, {
    id: 'r2',
    name: 'RV Pad 2',
    kind: 'RV site',
    sleeps: 6,
    features: ['50 amp', 'Water'],
    price: 55,
    available: true
  }, {
    id: 'p1',
    name: 'Primitive camping',
    kind: 'Camping',
    features: ['Included with 2+ day pass'],
    price: 0,
    unit: 'night',
    available: true
  }],
  trails: [{
    number: '#07',
    name: 'Cane Creek Loop',
    level: 'easy',
    vehicles: 'All vehicles',
    length: '3.2 mi'
  }, {
    number: '#12',
    name: 'Pine Ridge Run',
    level: 'easy',
    vehicles: 'ATV · SxS',
    length: '2.1 mi'
  }, {
    number: '#23',
    name: 'Bluff Line',
    level: 'moderate',
    vehicles: 'SxS · 4x4',
    length: '1.4 mi'
  }, {
    number: '#31',
    name: 'Hollow Crossing',
    level: 'moderate',
    vehicles: '4x4 · Jeep',
    length: '0.9 mi'
  }, {
    number: '#38',
    name: 'Staircase',
    level: 'difficult',
    vehicles: 'Built 4x4 · Buggy',
    length: '0.6 mi'
  }, {
    number: '#42',
    name: 'Widowmaker',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.4 mi',
    status: 'closed'
  }, {
    number: '#57',
    name: 'Ledges',
    level: 'difficult',
    vehicles: 'Built 4x4 · Buggy',
    length: '0.5 mi'
  }, {
    number: '#61',
    name: 'Rock Garden',
    level: 'extreme',
    vehicles: 'Buggy only',
    length: '0.3 mi'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.LodgingCard = __ds_scope.LodgingCard;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.TrailRow = __ds_scope.TrailRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DifficultyBadge = __ds_scope.DifficultyBadge;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ICON_GROUPS = __ds_scope.ICON_GROUPS;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BookingBar = __ds_scope.BookingBar;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
