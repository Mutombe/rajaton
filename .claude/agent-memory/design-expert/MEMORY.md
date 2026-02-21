# Design Expert Memory - Rajaton Website

## Project Overview
- React + Vite + Tailwind CSS v4 website
- Source: `website/src/`
- Main CSS: `website/src/index.css`
- Pages: `website/src/pages/HomePage.jsx` etc.

## Design System
- **Primary brand color:** #DC2626 (red), dark variant #991B1B, glow #EF4444
- **Surface colors:** #0A0A0A (darkest), #111111, #1A1A1A, #222222
- **Fonts:** Display: Syne, Heading: Outfit, Body: Plus Jakarta Sans
- **Glass patterns:** `.glass`, `.glass-strong`, `.glass-dark`, `.glass-red`, `.glass-card`
- **Background meshes:** `.mesh-hero`, `.mesh-dark`, `.mesh-red`, `.mesh-section`
- **Tailwind v4** with `@theme` directive for custom tokens

## Key CSS Patterns
- `overflow-x: clip` is safe for single-axis clipping without triggering dual-axis auto
- `overflow-x: hidden` on a parent implicitly forces `overflow-y: auto` per CSS spec -- use `clip` instead
- `lg:contents` pattern used to make wrapper divs layout-transparent on desktop
- Body has `overflow-x: hidden` globally
- `noise::after` pseudo adds grain texture to sections

## Architecture Notes
- Hero section on mobile uses a wrapper div for x-clip while allowing y-overflow for glow bleed
- Glow bridge pattern: zero-height relative div with absolute child, placed between sections
- Marquee bg is transparent on mobile via `.marquee-bg` class to allow glow pass-through
- Desktop mosaic uses `HeroMosaic` component with slot-based animated layout
- Mobile mosaic uses infinite scroll (`animate-pills` = marquee 18s animation)

## Mobile Responsiveness Patterns (established Feb 2026)
- Hero title clamp minimums: 2.2rem across all pages (was 3rem+)
- Section padding: `py-12 md:py-24` or `py-16 md:py-32` pattern throughout
- Hero paddings: `py-20 md:py-40` for non-home pages
- CTA glass cards: `p-7 md:p-16` and `rounded-[2rem] md:rounded-[2.5rem]`
- CTA headings: `text-3xl md:text-5xl` or `text-3xl md:text-6xl`
- HomePage hero: `min-h-0 lg:min-h-screen`, reduced mobile pill sizes (65x110px)
- Footer grid: `grid-cols-2` on mobile for compact layout

## Stats Section Design (Feb 2026)
- Hero stat card: bg image on mobile with left-heavy gradient overlay
- 3 smaller stat cards: each has bg image visible mobile only (md:hidden)
- Overlay: `from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/25` (heavy left, transparent right)
- Desktop: glass-card backgrounds via absolute div with md:block
- Images: /11.jpg (hero stat), /26.jpg, /19.jpg, /14.jpg (small stats)
