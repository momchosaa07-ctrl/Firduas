# Кетъринг Фирдаус — website

Static marketing site for Catering Firdaus: full menu, weekly lunch menu,
prices and phone ordering, plus a parties & events section with an enquiry
form — in four languages (BG / EN / TR / AR, with RTL support for Arabic).

No build step, no dependencies, no framework — plain HTML, CSS and vanilla JS.
Whatever is in this folder is exactly what gets served.

## Structure

```
index.html            Single page — all sections
404.html              Not-found page (served automatically by Cloudflare Pages)
_headers              Cloudflare Pages security + cache headers
robots.txt            Crawler rules
sitemap.xml           Sitemap
assets/
  css/styles.css      All styling
  js/i18n.js          Translations + ALL menu data (dishes, weights, prices)
  js/main.js          Rendering, language switching, nav, scroll reveal
  img/                Logo and photography (see assets/img/README.md)
```

## Editing the menu

**All dish names, weights and prices live in one place:
`assets/js/i18n.js`.** Nothing is hard-coded into the HTML.

- `window.MENU_DATA` — the main menu (Аламинути / Скара / Салати / Гарнитури)
- `window.WEEKLY_MENU` — the weekday lunch menu (Понеделник–Петък)
- `window.SITE_DATA.phones` — the three order phone numbers

Prices are plain numbers (`2.70`) and get formatted to `2,70 €` at render time.
Each dish carries a name in all four languages; the weight and price are shared.

To change a price, edit the number in that one place — it updates everywhere
it appears, in every language.

## The events enquiry form

`Партита и събития` (`#events`) pitches the service; `#event-inquiry` holds the
form. The site has no backend and no mailbox, so **the form does not post
anywhere**. It validates the fields, composes the enquiry as text, and hands it
to the channels the business already runs on — a call, a prefilled SMS, or the
clipboard. Nothing is silently dropped.

To have enquiries arrive by email instead, point the `<form>` at a form-handling
endpoint (Formspree, Web3Forms, a Cloudflare Pages Function) and replace the
success panel's hand-off with the POST result. All the copy for it is already
translated under `events.form` in `assets/js/i18n.js`.

## Local preview

Any static file server works, e.g.:

```bash
python -m http.server 8080
```

Then open http://localhost:8080

## Deploying to Cloudflare Pages

Connect the GitHub repo in the Cloudflare dashboard and use:

| Setting | Value |
|---|---|
| Framework preset | **None** |
| Build command | *(leave empty)* |
| Build output directory | `/` |

There is no build step — Pages serves the repository root as-is.

### After the domain is final

Four files hard-code `https://cateringfirdaus.bg`. If the live domain ends up
different, update it in:

- `index.html` — `<link rel="canonical">`, `og:url`, `og:image`
- `robots.txt` — the `Sitemap:` line
- `sitemap.xml` — the `<loc>` element

## Known follow-up

The food photography is currently licensed stock standing in for the real
dishes — see `assets/img/README.md` for the details and the replacement plan.
