# Website update report

**Date:** 29 September 2026

## Added to the Lab

- Added 20 new project cards using the existing Lab card design. Agent Flight Recorder was already listed, so its description was updated instead of adding a duplicate. The page now lists 33 projects.
- Read the README for each of the 21 repositories in the request and kept each new description within that repository's documented behavior. The descriptions call out synthetic-only or simulated boundaries where the README does.
- Used the supplied test counts when provided. No README published a numeric suite total. For the three entries without a supplied count, the checked-in pytest declarations gave ShadowOps 7 cases, Agent Flight Recorder 22 cases, and ModelRouter 24 cases. The parameterized scenario and CLI cases were counted separately. No test suites were run.
- Added GitHub links for all 21 listed repositories.

## Added to Writing

- Added 12 standalone technical essays under writing/, covering SOP to Agent Compiler, AgentGym, ResearchReplicator, Agent Control Tower, ProcessMiner AI, MemoryLab, PromptCI, BrowserBench Local, Agent Permission Kernel, Autonomous QA Engineer, Repo Surgeon, and ExperimentOS.
- Each essay describes the problem, repository design, engineering choices, test coverage, and evidence limits. Every essay is linked from writing.html and links back to its repository.
- Added inline SVG article symbols to all 18 Writing cards, including the existing stubs and technical writeups.

## Preserved

- The existing dark design system, Inter typography, shared navigation, header, footer, and card styles remain in use.
- Contact remains mailto-based. There is no active FormSubmit request or handler.
- The About page still identifies Henry as a Year 13 student.
- The backup directory was not modified.
- No em dash characters were added to the site files.

## Audit and visual review

- Static audit covered 35 HTML pages and found zero broken local links or anchors.
- Confirmed 33 Lab cards, 18 Writing cards with icons, and 12 new essay pages. All 21 requested project repositories appear in the Lab.
- Chrome blocked file URLs, so it could not open the local pages for visual review. The updated live pages could not be visually checked because deployment did not complete.

## Deployment

- The working copy has no .git directory or remote, .vercel/project.json, vercel.json, installed Vercel CLI, or Vercel environment credentials.
- The existing Vercel connector identified the henry-williams-portfolio project, but a request to list its deployments returned HTTP 403 for the team scope and said the connector must be reauthenticated for that scope. I did not submit a deployment without project access.
- No deployment was made. The live site has not been updated. The domain returned HTTP 200 before this work.
- The website-update-done.txt marker was not written because deployment and live verification remain outstanding.