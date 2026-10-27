# Matteo Battiston - Portfolio

Personal portfolio of a Unity developer (PC, VR, 3D). Static site, no build step, hosted on GitHub Pages:
https://pcmatteo01.github.io

## Structure

```
index.html              Home, About, Projects (platform filter), 3D Models
project-*.html          One page per project (facts card, sections, galleries)
privacy.html            Privacy notice (no cookies, no analytics)
css/style.css           Design system ("blueprint" look) and shared components
css/theme-*.css         Per-project themes (scoped to body.theme-<name>)
css/fonts.css           Self-hosted fonts (latin subset, SIL OFL)
js/i18n.js              English/Italian localization (dictionary + EN|IT switch)
js/main.js              Filters, galleries, before/after sliders, lazy video, Sketchfab viewer, lightbox
assets/                 Images, videos, posters, fonts, 3D model thumbnails
```

## Run locally

```bash
python -m http.server 8080
```

then open http://localhost:8080.

## Notes

- **Videos** have a poster (`assets/posters/`) and `preload="none"`; they load and play only when they scroll into view,
  and stay on the poster with "reduce motion" on. Add `data-full="..."` to open a higher-quality file in the zoom view
  and `data-audio` to mark a video that has sound.
- **3D models** are Sketchfab embeds loaded only on click; thumbnails are stored locally in `assets/models/`
  (refresh them from the Sketchfab API when a model changes).
- **Images** are WebP, except the two Open Graph images, which stay PNG.
- **No third-party requests** happen when a page opens; see `privacy.html`.
- **Localization**: English is the source text in the HTML; Italian comes from the dictionary in `js/i18n.js`, matched by the
  English `innerHTML`. Language order: `?lang=it|en`, saved choice (localStorage), browser language. When you edit an English
  text, update its key in the dictionary (otherwise that text stays English in Italian); strings created by JS go through `t()`.
