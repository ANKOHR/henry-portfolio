# Sparrow brand update

Implementation commit: `71a181c4df68a2cd46f0cfb4c473d76dfcfa5bd7`

Commit message: Sparrow page: new brand system (four-stroke mark, Inter Tight, dark mode)

Files changed:

- `sparrow.html`: inline four-stroke SVG mark, spaced SPARROW lockup and requested tagline, Google Fonts, theme initialization and accessible toggle.
- `index.html`: matching SVG mark, lockup, fonts and charcoal Sparrow band.
- `assets/css/sparrow.css`: scoped monochrome brand styling, Inter Tight primary type, Space Grotesk labels and buttons, responsive layout, light and dark variants.
- `assets/js/sparrow-theme.js`: theme applied before stylesheets, dark fallback, system preference support and updates, localStorage persistence with storage failure handling.
- `RESULT.md`: this verification record, committed separately so it can reference the implementation commit.

Both supplied brand sheets were inspected before implementation. The mark uses four rounded SVG strokes and currentColor for light and dark variants. Palette: Charcoal #0B0B0B, Slate #1A1A1A, Graphite #2E2E2E, Silver #E8E8E8 and White #FFFFFF.

Verification:

- Served locally at http://localhost:8765 and checked using headless Chromium.
- Sparrow desktop dark and mobile light rendering inspected, plus the homepage Sparrow band.
- Dark background #0B0B0B and light background #FFFFFF confirmed; Inter Tight computed font confirmed.
- Theme toggle, persistence after reload, system light preference and system preference changes passed.
- Mobile navigation passed; no horizontal overflow at 390px on changed pages or other main pages tested.
- No browser JavaScript errors on index, Sparrow, about, work, lab, writing or contact. A project detail page also loaded successfully.
- All 710 local href/src references across HTML files resolve. Projects are individual files under `projects/`; there is no root `projects.html` in this repository.
- Original text and link destinations in index and Sparrow were compared against the prior commit and preserved, except replacement of the obsolete logo image source. Both standing lines remain intact.
- Shared `assets/css/main.css` and `assets/js/main.js`, contact form handling and email CTAs were unchanged.
- JavaScript syntax check and git diff whitespace check passed. No U+2013 or U+2014 characters in changed files.

Committed on main. Nothing pushed. Existing untracked brand references and task launcher files were left untouched and excluded from commits.
