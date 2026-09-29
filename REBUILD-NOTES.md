# Portfolio website rebuild notes (29 Sep 2026)

Rebuild of the portfolio site at ~/workspace/website/ around three flagship case studies.
This supersedes the previous site version (dated 26 Sep 2026). No rebuild was found in
progress, so this starts from the old structure, not an unfinished one.

## What changed

- index.html: new hero with the positioning line "I build AI systems, automations and
  internal tools that remove expensive manual work." Three flagship cards
  (OpsPilot, VerityDocs, EvalForge), "By the numbers" updated to flagship figures
  (3 flagships, 122 tests across flagships, 1 live demo, 100 labelled eval cases),
  capability strip reframed (workflow automation, document intelligence, evaluation
  engineering, internal tools, backend engineering, API integrations), lab teaser,
  studio-framed CTA band.
- New case-studies/ directory with three case-study pages, each in problem -> solution
  -> measured outcome shape, reusing the existing visual design (project-hero,
  hero-metrics, split, check-list, pipeline, demo-panels, code-block):
  - case-studies/opspilot.html (60 backend tests, 100 labelled synthetic eval cases,
    Gmail OAuth verified end to end; approval-gate code example).
  - case-studies/veritydocs.html (49 backend tests, live Railway demo, FIN-001 panels
    showing the £8,000 + £1,600 = £9,600 PASS and the £9,900 FAIL).
  - case-studies/evalforge.html (13/13 tests, byte-identical determinism, seeded
    versioned eval sets, lint/diff gates; explicitly marked "Built - not yet public"
    with no GitHub link, per instructions).
- work.html: rewritten as the case-study index (three flagship cards + lab teaser).
  The old six-project grid with filters is gone; filter/sort JS still exists in
  main.js but only activates when the matching elements are present, so nothing breaks.
- lab.html: rewritten as the compact "Labs / other builds" section: EvalGate,
  AgentCheck, Axiom AP Agent, MiniCluster, TrainLab, KOML Host, PipeKit, DocuAnswer,
  EvalGate Playground. Brief entries, no per-build pages. Honesty kept: TrainLab is
  described as in-progress checkpointed training (no claim it is live right now);
  PipeKit notes the live HTTP adapter is still a stub.
- about.html: studio framing (positioning line up front); age/school stated honestly
  (17, Year 13, Maths/Physics/German, London) but no longer the lead; timeline
  updated to the three flagships plus EvalGate open source.
- contact.html: studio-framed copy; form structure and mailto behaviour untouched.
- projects/veritydocs.html: corrected the stale "51 backend tests" to 49 for
  consistency with the verified facts. Legacy projects/ pages otherwise untouched
  (still linked from lab.html).
- Design, CSS, and JS untouched (visual rebrand was out of scope).

No em dashes anywhere in the new or edited copy (verified by grep).

## What still needs doing

- Screenshots: each flagship page has no imagery yet. Needs real UI shots
  (OpsPilot dashboard, VerityDocs demo output, EvalForge CLI run).
- Demo videos: per the proof-package plan, 30-90s videos per flagship; none exist yet.
- Per-flagship proof assets: one-page PDFs, architecture diagrams, case-study pages
  are text-only right now. The "How it works" sections use illustrative examples;
  swap in real screenshots once available.
- Copy check on live demo URL: the VerityDocs demo link
  (https://api-production-eb9c2.up.railway.app) is carried over from the old site;
  confirm it still responds before launch.

## Needs Henry (not done, not attempted)

- Visual QA in a real browser: no browser-based visual QA was performed (this agent
  cannot do live-browser checks). The pages parse cleanly and all internal links
  resolve, but layout/rendering needs Henry's eyes.
- Deployment: nothing was deployed anywhere; this is a local rebuild only.
- FormSubmit discrepancy: memory describes contact.html with a FormSubmit AJAX relay
  and a prefilled Gmail compose CTA, but the site on disk uses a plain mailto form
  wired in assets/js/main.js. The mailto flow was kept intact and not replaced,
  because adding FormSubmit needs Henry's one-time activation click and end-to-end
  verification. If the FormSubmit version existed in a deployed copy, it should be
  re-added by whoever manages that flow.

## Honesty notes for future edits

- No clients, testimonials, or revenue figures are claimed anywhere; outcomes are
  stated as verified build facts only (test counts, demo results).
- EvalForge must stay link-free until it is published publicly (no invented URL).
- TrainLab status: do not claim the run is live; a past run ended with an
  unverifiable cause.
- PipeKit: do not pitch as a live "connect your tools" integration until the live
  HTTP adapter exists.

## Second pass: 29 Sep 2026 (overhaul for studio strategy + latest work)

### Fixed stale/incorrect content
- EvalForge "Built - not yet public" pills on index.html and work.html changed to
  "Open source" (published 29 Sep 2026 as github.com/ANKOHR/evalforge-suite).
- Stale "not yet published publicly" note removed from case-studies/evalforge.html;
  added a GitHub button linking to the evalforge-suite repo.
- VerityDocs "View live demo" buttons (case studies and projects pages) now point to
  the /demo endpoint (returns HTTP 200) instead of the API root (returns HTTP 404).
- EvalGate test count corrected 68 -> 96 per the repo README, in lab.html and
  projects/evalgate.html.
- index.html "By the numbers" band rebuilt on verified figures: 48 published builds,
  880+ tests green (summed from *-published.txt files), 3 flagships, 1 live demo.

### New: service landing pages (pages/services/)
- index.html (services overview), workflow-automation.html,
  document-invoice-automation.html, api-integrations.html, ai-evaluation.html.
- Each carries problem, typical engagement, deliverables, timeframe, example proof,
  and starting price, consistent with the offer documents in
  ~/workspace/your_files/offers/.
- "Services" added to nav and footer on all pages (relative prefixes handled per
  directory depth).

### New: technical writeups (case-studies/)
- opspilot-technical.html, veritydocs-technical.html, evalforge-technical.html.
- Each follows problem -> constraints -> design -> architecture -> implementation ->
  failure modes -> testing -> result -> commercial applicability. No invented
  customers, benchmarks, or outcomes; every claim traces to verified build facts.
- Each buyer-facing case study now links to its technical writeup.

### Labs section rebuilt (lab.html)
- Old entries (AgentCheck, Axiom AP Agent, MiniCluster, TrainLab, KOML Host,
  PipeKit, DocuAnswer, EvalGate Playground) replaced by 12 published builds from
  the 28-29 Sep overnight wave plus EvalGate (kept, now links to GitHub).
- Chosen for commercial relevance and honest README quality: Sentinel (8 tests),
  OpsOS (70), API Observatory (20), BrowserWorker (10), CallOps (12),
  Agent Flight Recorder (22), Agent Chaos Lab (35), Adaptive Router (19),
  Agent Marketplace Sandbox (18), Process X-Ray (11), DataLens (16),
  Personal Command Centre (24). Every card links to its real GitHub repo.
- Each repo README was read via browser.open before writing its one-liner; no
  capabilities invented.

### Conversion/CTA
- index.html: added "How I work" strip (bounded scope -> working system ->
  handover) matching the offer pages.
- contact.html: availability line set to "Term time: 10-14 hrs/week for scoped
  remote technical work." Mailto form kept; FormSubmit noted in an HTML comment
  (not activated, needs Henry's one-time activation click).
- writing.html: three honest "Draft - Coming soon" stubs added for the OpsPilot,
  VerityDocs, and EvalForge technical articles.

### Verification
- Static link check: 23 pages, 0 broken internal links, 0 broken anchors.
- Em-dash scan: none in any HTML, CSS, or JS.
- Responsive: viewport meta present on all pages; main.css has max-width media
  queries at 1020px and 640px. Real mobile rendering still needs a browser check
  (this agent cannot do live-browser QA).
- Not deployed. Site remains local at ~/workspace/website/.

### Honesty notes update
- EvalForge is now public (github.com/ANKOHR/evalforge-suite, remote main
  857f3c4368cb37c06d04ed3dc37e0481ed7ac986); the old "stay link-free" rule above
  is superseded.
- The 48-build / 880+ test figures come from ~/workspace/builds/*-published.txt
  (44 files with counts plus DataLens at 16/16); repos without a test count in
  their publish file were not counted.
- All lab one-liners describe what the repo's README says it does; synthetic
  fixtures are labelled where the README labels them.
