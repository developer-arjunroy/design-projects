# learning-platform-ui

A responsive Tailwind CSS static demo of a learning platform dashboard (hero banner, categories, continue watching, lessons, and mentor/stats sidebar).

This update improves the right-sidebar small bar chart to make learning activity easier to track:
- Replaced simple bars with a more precise activity chart that includes:
  - grid lines for reference,
  - per-bar activity counts and date labels,
  - hover/touch tooltips (desktop hover, mobile tap) showing date + activity count,
  - subtle gradients and hover states for better visuals.
- Kept the improved chart in both mobile and desktop statistic panels for consistency.

How to preview:
1. Open `learning-platform-ui/index.html` in your browser (Tailwind CDN required).
2. Hover over bars (desktop) or tap bars (mobile) to see tooltips with exact values.

Commit: fix: improve right-sidebar activity chart with tooltips and labels
