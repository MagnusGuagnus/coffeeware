---
name: palette-and-live-vs-dead-code
description: Where the site's single color palette lives, and which component tree is actually rendered vs dead
metadata:
  type: project
---

The live app is React + Tailwind v4. Entry: `src/main.tsx` → `src/app/App.tsx` (router) → `components/pages/*` → which render only `components/landing/*` and `components/contact/*`.

**Single color palette** = `src/index.css` `@theme` block, six vars: `--color-cw-white`, `--color-cw-primary`, `--color-cw-secondary`, `--color-cw-black`, `--color-cw-cream`, `--color-cw-gray`. Every color in the live site derives from these (utilities `bg-cw-primary`, `text-cw-secondary`, opacity variants, plus `@layer base`). Change one value → whole site re-themes. Raw Tailwind `white`/`#fff` (card surfaces `bg-white/60`, button `text-white`) is deliberately NOT tied to the palette.

**Dead / not rendered** (an older version of the site): `src/assets/styles.css` (has its own `--cw-*` palette — NOT loaded anywhere), `src/app/App.css`, and the `components/home`, `components/about`, `components/services`, `components/layout` folders plus all their `.module.css`. These still use the old Tailwind tokens (`petrol`/`orange`/`cream`/`ink`/`muted`) that were removed from `@theme`, so their colors would be broken if ever revived.
