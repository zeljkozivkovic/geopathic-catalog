# Geopathic catalog (Astro)

Static catalog rebuilt from content scraped from geopathic-stress-solutions.com.

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

## Where things live
- `src/data/catalog.json`  categories + products (edit or replace this to add content)
- `src/lib/catalog.js`     helpers, plus the list of static pages (About, Shipping, ...)
- `src/pages/`             index, shop (search/filter/sort), categories/[slug], products/[slug], [page]
- `src/styles/global.css`  design tokens at the top (:root)

## Known gaps
- Only 2 of 11 categories have products (15 products total).
- Product descriptions are the truncated snippets from the category pages.
- Images are the original BigCommerce CDN thumbnails, requested at a larger size with the thumbnail as fallback. Download and host your own before the old store goes away.
- About, Shipping, Testimonials, Contact, Energy testing and Gift certificates are placeholders.
- No cart or checkout: "Buy" buttons link to the existing store. Newsletter form is not connected.
- Set `site` in astro.config.mjs to your real domain.
