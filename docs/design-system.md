# my magma website design system

The rules the website is built and judged against. Decided 2026-09-29 by the founder:
brand guidelines (`brand-guidelines.md`) win over the Claude Design artifact, because
they are closer to Superpower; Superpower's layout and type feel (`superpower-DESIGN.md`)
applies wherever the brand guidelines are silent or marked [PENDING].

## Colour
| Token | Value | Use |
|---|---|---|
| `--crimson` | #C02035 | The only UI accent: primary button, active quiz option, active index number, links on hover. At most one crimson element per screen besides the logo. |
| `--ink` | #1A1212 | All headlines and body text. Never #000. |
| `--ink-2` | #4A3838 | Secondary text, supporting lines. |
| `--ink-3` | #8A7070 | Captions, source citations, fine print. |
| `--canvas` | #FFFFFF | Page background. White dominates. |
| `--blush` | #FDF5F5 | Quiet surfaces (quiz card, footer). Never dominant. |
| `--line` | #F0E0E0 | Hairline dividers and outlines, 1px. |
| Magma gradient | #6B0018 → #C02035 → #D84A10 → #C84870 | Only inside the magma visual. Never on buttons, text or UI. |
- No blue, green, brown, black or dark backgrounds anywhere.

## Type
- One family: Satoshi (400, 500, 700). IBM Plex Mono 400/500 only for numbers that are measurements or stats.
- Headlines follow Superpower: weight 400, tight tracking, line-height compressing with size.
| Token | Size (desktop / mobile) | Used for |
|---|---|---|
| `--t-display` | 44 / 32px, weight 400, line-height 1.1, tracking -0.02em | Hero line, section headlines |
| `--t-sub` | 26 / 22px, weight 400, line-height 1.2 | Quiz questions, stat numbers (Plex Mono), thank-you lines |
| `--t-body` | 16px, weight 400, line-height 1.55 | Body copy, pills, inputs, buttons, story index |
| `--t-small` | 13px | Labels (uppercase 500, tracked 0.1em), captions, sources, fine print, nav |
- Four sizes in total. Per screen: at most three of display, sub and body, plus the small utility size (Superpower works the same way with its 11px utility text).
- Stat numbers sit at `--t-sub`, about 60% of the headline, so the headline stays the single focal point.
- Headlines at most 2 lines. Body copy 60–75 characters per line.
- Sentence case everywhere except labels.

## Shape and space
- Base unit 4px. Section vertical padding 96–140px desktop, 64–96px mobile.
- Page max width 1200px, 24px side gutters (16px on phones).
- Buttons and quiz options: pills (9999px radius). Cards: 16px radius. No drop shadows beyond `0 2px 2px rgba(26,18,18,.05)`.
- Navigation: a floating pill capsule, not a flat top bar. Superpower's is dark; ours is white/translucent with ink text, because the brand has no dark surfaces.

## Imagery
- Hero and section flow: the magma visual (brand guidelines 4.3 and 8.2) on pristine white, organic edges, no box.
- Story sections: full-bleed warm, bright, golden-hour photography with empty space on one side where text sits directly on the image. No scrims, no dark photos.
- Photos melt into white: no visible rectangle edge where a photo meets the page.
- No faces, ever. Show hands, forearms, or people from behind or cropped below the face.
- Like Superpower, the product is the hero and people are secondary: for now the product is the my magma app on a phone. The mymagma device is never shown before launch.
- App screens are composited onto a plain black phone screen so UI text stays sharp.
- Scenes: ordinary life at home and out (breakfast, a trip, dinner with friends). Never fitness: no running, gyms, sportswear, sweat, steps or performance. The feeling is living life with a safety net.
- App screens are calm: reassurance first ("All steady"), trends inside a personal range, no scores or big performance numbers.
- Each image matches the copy beside it.

## Voice (on-page)
- Name is always "my magma", lowercase. The device is "mymagma".
- Calm, factual, quietly encouraging. Explain every term the first time. Never diagnose; never use critical, abnormal, warning, danger, deficiency detected.
- Every number shows its source and year in the same view. No em dashes in on-page copy.

## Motion
- Slow and one-directional. Fades and rises of 600–900ms; nothing under 400ms except button hover (150ms).
- Respect `prefers-reduced-motion`: no scroll animation, everything visible.
