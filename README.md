# Jay Mascarenas — jaymascarenas.com

Personal site: developer (15+ years), Director of Engineering, former coding bootcamp instructor,
founder of [Black Rim Solutions](https://blackrimsolutions.com).
Hosted on Cloudflare as an assets-only Worker (same setup as blackrimsolutions.com). No build step.

## Layout

- `public/`: everything that gets served. Plain HTML, one stylesheet, no JavaScript.
  - `index.html`: the whole site (About, Experience, Now, Off the Clock, Connect)
  - `404.html`, `_headers` (security and cache headers), `robots.txt`, `sitemap.xml`
  - `css/styles.css`: theme tokens at the top
  - `img/`: headshot, adventure photos, OG image
- `wrangler.jsonc`: Worker config and custom domains

## Develop

```sh
npm install
npm run dev        # http://localhost:8787
```

## Deploy

```sh
npx wrangler login # once
npm run deploy
```

The domain's DNS must be on Cloudflare. Deploy attaches `jaymascarenas.com` and `www.jaymascarenas.com`.
Remove any existing A/CNAME records for those hostnames first (for example, from the old host).
Redirect www → apex with a dashboard Redirect Rule (Rules → Redirect Rules → "Redirect from WWW to root").

## Updating

- **Accent color:** change `--accent` at the top of `public/css/styles.css`. Also update the
  `fill` in `public/favicon.svg` if you want it to match.
- **Photos:** put files in `public/img/` and update the `src`, `alt`, `width`/`height` and caption in `index.html`:
  - Headshot: square, 800×800 (`.headshot`)
  - Adventure photos: landscape 4:3, 1600×1200 (`.photos`)
  - Convert to WebP and strip metadata (removes phone GPS location), e.g.
    `cwebp -q 80 -metadata none photo.png -o public/img/photo.webp`.
    Note: iPhone photos can be stored sideways with a rotation flag, so check the result.
- **Details:** search `index.html` for `TODO` to find spots for companies, years, favorite bands and shows.
- Bump `?v=` on the stylesheet link when you change CSS, and update the year in the footers.

## Screenshot

![Screenshot](https://jaymascarenas.com/img/og.jpg)
