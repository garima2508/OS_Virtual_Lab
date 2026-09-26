# SRMIST Virtual OS Lab Design System

## 1. Color Palette
- **SRM Royal Blue**: `#0c4da2` — Primary brand color representing SRMIST's identity.
- **SRM Dark Blue**: `#08326b` — Headers, deep gradients, and active navigation states.
- **SRM Accent Gold**: `#f8a51d` / `#e69500` — Highlights, CTA buttons, badges, and progress indicators.
- **Dark Tech Background**: `#0a0d14` — Deep obsidian for immersive laboratory feel.
- **Dark Surface**: `#121826` — Card backgrounds and simulation controls.
- **Dark Border**: `#223048` — Subtle borders with cyan/blue accents.
- **Light Tech Background**: `#f8fafc` — Clean, modern daytime mode.

## 2. Universal SRMIST Watermark
- **Asset**: `/college-logo.webp` (SRMIST official university crest).
- **Placement**: Fixed background overlay spanning the central viewport (`pointer-events-none`).
- **Opacity**: 4% to 6% in dark mode, 5% to 7% in light mode.
- **Accessibility**: Never obstructs text readability or interactive controls; remains visible across all screens.

## 3. Typography
- **Headings & Body**: `Inter`, sans-serif (clean, readable, academic).
- **Code & Numbers**: `Fira Code`, `JetBrains Mono` (tabular numbers for metrics, Gantt times, and code editor).

## 4. Reusable Component Guidelines
- **Buttons**: Glow on hover, active depression, distinct primary (`bg-srm-blue`), secondary (`border-srm-blue`), and accent (`bg-srm-accent`) variants.
- **Cards**: Frosted glass / translucent surfaces (`backdrop-blur-md bg-slate-900/60 border border-slate-800`).
- **Metrics**: Bold tabular values with percentage changes, unit labels, and tooltips.
- **Tags & Badges**: Distinct colors per module and difficulty (Green = Beginner, Amber = Intermediate, Purple/Red = Advanced).
