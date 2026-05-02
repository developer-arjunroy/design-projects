# learning-platform-ui

A responsive Tailwind CSS static demo of a learning platform dashboard (hero banner, categories, continue watching, lessons, and mentor/stats sidebar).

This update fixes horizontal overflow issues across breakpoints by:
- enforcing box-sizing and making images responsive (max-width: 100%).
- adding overflow-x-hidden to the body to block accidental page-level horizontal scrolling.
- constraining card widths with max-w-xs and using flex-shrink-0 for horizontally scrollable lists so they don't expand the page.
- ensuring sidebar and side panels use overflow-y-auto instead of growing beyond viewport height.

Responsive behavior
- Mobile: top header with hamburger; sidebar is off-canvas; stats & mentors are shown below main content.
- Tablet: left sidebar visible; right stats are shown below main content.
- Laptop/Desktop: 3-column layout with left navigation, main content, and right stats shown as a sidebar.

How to run:
1. Open `index.html` in a browser (internet required for Tailwind CDN).
2. Or serve locally (e.g. `npx serve` or `python -m http.server`).

Notes:
- Images use external Unsplash URLs — replace with your own assets if desired.
- Can be converted to React/Vue components for dynamic data.
