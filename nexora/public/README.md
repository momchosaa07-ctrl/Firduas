# public/

Static assets served from the site root.

Drop the real logo here (`logo.svg` or `logo.png`), then set `logo.type` to
`"image"` and point `logo.src` at it in `src/config/brand.ts` — the navbar and
footer pick it up without any component change.

Portfolio images go here too; reference them from the `image` field of a
project in `src/config/portfolio.ts`.

The favicon, Apple touch icon and Open Graph card are generated from the brand
config at build time (`src/app/icon.svg`, `src/app/apple-icon.tsx`,
`src/app/opengraph-image.tsx`) — nothing is needed here for those.
