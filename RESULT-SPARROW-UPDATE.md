# Sparrow visual refresh

The supplied glossy artwork is unchanged and integrated into a charcoal hero using a feathered CSS mask. Light mode retains a dark scene with a soft graphite-to-silver-to-white fade. Mobile places the artwork below the introduction. Inter Tight headlines and the currentColor SVG lockup remain, with Space Grotesk supporting section text.

All copy, claims, section order and links are unchanged, including "A clearer tomorrow." The homepage lockup already matches, so index.html needed no changes. Contact files, JavaScript and brand images were not edited.

## Files touched

- sparrow.html
- assets/css/sparrow.css
- preview-sparrow-dark.png (1440 x 1050)
- preview-sparrow-light.png (1440 x 1050)
- preview-sparrow-mobile.png (390 x 844, dark)
- preview-sparrow-mobile-light.png (390 x 844, light)
- RESULT-SPARROW-UPDATE.md

## Verification

Served locally with Python and checked using Playwright in headless Microsoft Edge. Personally inspected desktop and mobile screenshots in both themes, the full light page, homepage lockup and contact form. The hero artwork blends without a box, and light mode fades softly into white content.

- No browser JavaScript errors.
- All unique local page links returned HTTP 200. Existing WhatsApp URL preserved; external account interactions were not performed.
- Theme switches both directions and persists after reload.
- Mobile menu opens; no horizontal overflow at 390px.
- Contact form renders. Sample submission intercepted window.open and confirmed Gmail compose URL, encoded subject/body, _blank and noopener. No message sent.
- Gmail email CTAs retain _blank; no mailto links on contact.html.
- Page text compared with HEAD is unchanged. git diff --check passes.
- Changed source files and this report contain no U+2013 or U+2014 characters.

No commit, push or deployment performed.
