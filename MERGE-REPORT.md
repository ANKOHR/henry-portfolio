# Website merge report

**Date:** 29 September 2026

## Merged

- Applied the preferred backup design to 23 HTML pages: the main pages, three flagship case studies, three technical writeups, four service detail pages and the service index, and six legacy project pages.
- Added the three flagship studies with problem, solution, and measured outcome sections.
- Added the three technical writeups and linked them from the case studies and Writing page.
- Added all 13 Lab builds with a short description, recorded test count, and GitHub repository link.
- Added four service pages with the problem, engagement, deliverables, timeframe, proof, and price range, plus the service overview and paid diagnostic.
- Kept the 48 published builds, 880+ green tests, three flagships, one live demo, the three-step working process, and the term-time availability line.
- Kept the three technical article stubs on the Writing page.
- Set every page to the same six-item navigation: Work, Lab, Services, Writing, About, and Contact.

## Old design elements kept

- The backup main.css design system, dark palette, Inter typography, spacing, cards, panels, buttons, and responsive rules.
- The old glass-panel hero, shared header and footer layout, navigation behavior, project cards, status labels, and section components.
- The backup JavaScript interactions, with the FormSubmit submit handler removed.

## Dropped

- The overhaul's page styling, hero and navigation markup, and page-level Google Fonts includes.
- The inactive contact form controls. The contact page now states that the form is not enabled and provides direct mailto links. No FormSubmit request is sent.

## Link fixes

- EvalForge repository links use https://github.com/ANKOHR/evalforge-suite.
- VerityDocs demo buttons use https://api-production-eb9c2.up.railway.app/demo.
- A static audit of all 23 pages found no broken local links or page anchors. No unresolved links were identified.

## Content recovery note

During the merge, an editing script removed the original page bodies before they were reattached. I rebuilt the requested content from the merge brief, REBUILD-NOTES.md, and the published GitHub repository descriptions. The required facts and page topics listed in the brief are present, but some wording and unlisted detail may differ from the overwritten working-copy text. Please review the rebuilt copy in the browser.

The backup directory was not modified. No tests were run.
