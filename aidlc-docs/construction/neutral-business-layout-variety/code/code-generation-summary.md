# Code Generation Summary - Neutral and Business Layout Variety

## Outcome

The existing Neutral and Business templates now present the shared portfolio content through student-friendly learning-journal and project-showcase identities while preserving Engineering and all shared routes, actions, runtime selection, and layout modes.

- Neutral uses a full-width learning-journal masthead, accurate portrait, project-relevant supporting media, editorial About spread, visual project stories, and compact personal gallery.
- Neutral's profile image now uses a centered responsive portrait panel capped at 420px instead of a forced 620px to 760px full-spread image.
- Business uses an organized student-showcase header, sticky numbered contents rail, approachable profile and skills language, and structured project cases.
- Three project-specific local covers replace unrelated personal gallery photos in Neutral and Business.
- The shared `Portfolio style` menu retains radio semantics and selected-row styling without displaying a check icon.
- Business `CASE` labels have explicit responsive inline clearance, including 16px on mobile.
- The root README now provides a beginner-first setup journey for Windows, macOS, major Linux families, WSL, and ChromeOS, including clone and ZIP paths, local development, verification, updates, and safe troubleshooting.
- No fourth Artistic template, copied component variants, selector-specific runtime dependency, backend, URL selection model, or infrastructure was added.

## Application Changes

| Area | Files | Result |
|---|---|---|
| Project media | `src/assets/projects/`, `src/types/portfolio.ts`, `src/data/projects.ts` | Three optimized WebP covers with required project-owned image and alternative-text fields |
| Neutral shell and sections | `src/templates/neutral/NeutralShell.tsx`, `NeutralHero.tsx`, `NeutralAbout.tsx`, `NeutralProjects.tsx`, `index.ts` | Learning-journal navigation, copy, project media, and editorial composition |
| Business shell and sections | `src/templates/business/BusinessShell.tsx`, `BusinessHero.tsx`, `BusinessAbout.tsx`, `BusinessProjects.tsx`, `index.ts` | Student-showcase navigation, copy, project media, and responsive case composition |
| Presentation styles | `src/index.css`, `src/App.css` | Isolated responsive layouts, accessible action tokens, distinct palettes, focus treatment, and reduced-motion behavior |
| Shared actions | `src/components/shared/ExternalAction.tsx`, `src/components/Hero.tsx`, `src/components/Contact.tsx` | Theme-aware accessible primary colors and safer compact-action spacing |
| Resume-backed experience | `src/data/experience.ts` | Separate Sea/Shopee Finance and PSA internships plus resume-aligned Sea full-time dates |
| School achievements | `src/data/awards.ts`, `src/components/Awards.tsx`, `src/types/portfolio.ts`, `src/assets/zhonghua.jpg` | Two school awards, the Zhonghua crest, and an accessible fallback for awards without local logos |
| Section introductions | `src/data/sectionContent.ts`, shared section components, Neutral/Business About and Projects | One typed student-facing source for every non-home section eyebrow, heading, and description |
| Local journal images | `src/components/Journal.tsx`, `src/components/JournalPostPage.tsx` | Matching compact cropped overview thumbnails with complete non-cropping images inside opened local posts |
| Local journal Markdown | `src/components/JournalPostPage.tsx`, `react-markdown` | Maintained CommonMark rendering with template-aware semantic element styling and safe default URL handling |
| Runtime style ownership | `src/App.tsx`, `src/templates/types.ts`, `src/utils/templateSelection.ts` | App-owned active template state, source default, guarded persistence, typed shell callback, and Engineering fallback |
| Shared style selector | `src/components/shared/PortfolioStyleSelector.tsx`, all three shells, `src/components/Navbar.tsx` | Accessible registry-driven Chakra Menu in every desktop/mobile header with semantic selection and no check indicator |
| Test organization | `src/test/data/navigation.test.ts`, `src/test/data/portfolio.test.ts` | Data tests relocated out of student-editable content folders without losing coverage |
| Regression coverage | `src/App.test.tsx`, `src/utils/templateSelection.test.ts`, registry, data, layout, and accessibility tests | Stable structures, style switching, persistence/fallback, route/layout preservation, section copy, contrast, and edge-clearance safeguards |
| Neutral portrait | `src/templates/neutral/NeutralHero.tsx`, `src/App.test.tsx` | Centered 420px maximum portrait track, stable 4:4.5 framing, attached caption, and focused rendering assertion |
| Student guidance | `README.md` | Cross-platform installation and setup, clone and ZIP paths, local workflow, verification, safe updates and troubleshooting, three structures, project media, and template selection |

The current `engineering` value in `src/data/template.ts` remains the first-visit default. A valid visitor choice saved under `portfolio-template-id` takes priority in that browser.

## Runtime Portfolio Style Selection

- `PortfolioApp` initializes from a valid saved choice or the typed source default and derives the active registry entry.
- Invalid stored or requested IDs resolve to Engineering.
- Storage read/write failures are contained so the page continues with in-memory state.
- `PortfolioStyleSelector` uses semantic menu radio items, active checked state, descriptive labels, Lucide icons, and stable automation IDs.
- Engineering, Neutral, and Business place the same compact trigger in their persistent header controls at every responsive width.
- Switching keeps hash routes, local journal posts, single/multi-page layout, active section ownership, and provider-owned color mode intact.
- Active rows remain exposed through `aria-checked`, keyboard operation, visible focus, and selected-row background without a separate tick icon.

## Student-Friendly Project Covers

- `src/assets/projects/coursework-certificates.webp` is a 1200 by 900 editorial study-desk illustration representing coursework, notebooks, code, and certificates.
- `src/assets/projects/program-analyzer.webp` is a 1200 by 900 editorial code-analysis illustration representing connected modules and relationship inspection.
- `src/assets/projects/java-resume-application.webp` is a 1200 by 900 editorial application-workspace illustration representing reusable resume sections and document preview.
- The built-in image-generation tool created each distinct cover from a shared warm off-white, coral, muted-blue, charcoal, and green visual brief with no readable text, logo, watermark, or person.
- Final WebP files range from 76 KB through 122 KB in the workspace; project records provide meaningful alternative text.

## Formatting Hardening

- Added dedicated primary and hover tokens for all three templates instead of relying on accent colors that did not always support white text.
- Verified muted text, accent text, primary buttons, and primary hover states at or above the WCAG AA `4.5:1` normal-text threshold in all six light/dark template scopes.
- Increased bordered external actions and icon targets to a 40px minimum size.
- Increased compact image-caption padding and magazine-navigation vertical clearance.
- Replaced hardcoded shared action colors with each template's inherited control and border tokens.

## Resume Content Synchronization

- Added Data Analyst Intern at Sea Limited (Shopee Finance), November 2021 through May 2022.
- Added Data Analytics and Machine Learning Intern at PSA International, May 2021 through November 2021.
- Aligned the existing Sea Limited Data Engineer entry to July 2022 through July 2023 and refreshed its responsibilities from the bundled resume.
- Kept all experience in the shared data source consumed by Engineering, Neutral, and Business.

## School Achievement Synchronization

- Added the 2017 Model Student Award from Saint Andrew's Junior College for exemplary character.
- Added the 2015 Singapore Youth Festival Choir Silver Award from Zhonghua Secondary School.
- Reused the correct Saint Andrew's crest and added the supplied current Zhonghua crest as a lightweight local asset.
- Added data completeness and rendered logo accessibility assertions for both entries while retaining generic text-mark fallback support.

## Student-Editable Section Copy

- Added `src/data/sectionContent.ts` as the single editing point for About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, and Contact introductions.
- Kept the Home introduction in `src/data/profile.ts`, where the rest of the Hero copy already lives.
- Made descriptions mandatory for shared `SectionShell` usage and connected custom Neutral/Business sections to the same data.
- Moved all tests from `src/data` to `src/test/data` and documented both locations in the student README.

## Local Journal Image Framing

- Local and external Journal overview cards use matching 190px `cover` thumbnail frames for a uniform grid.
- Opened local journal posts use a stable 16:9 `contain` frame so the complete source image remains visible.
- The compact overview crop and full article image are intentionally different presentation contexts.
- Rendering assertions protect both frame heights, overview crop behavior, and the direct post's non-cropping treatment.

## Local Journal Markdown

- Replaced the block-only hand-written parser, which emitted inline Markdown as plain text, with `react-markdown` 10.1.0.
- Supports semantic headings, bold and emphasized text, links, ordered and unordered lists, block quotes, code, images, and separators.
- External HTTP links open separately with `noreferrer`; raw HTML remains disabled by default.
- Updated the student README and added direct-route assertions for semantic heading and bold rendering.

## Neutral Portrait and Cross-Platform Setup

- Replaced Neutral's forced 420px to 760px media height with a centered `minmax(280px, 420px)` portrait track and a stable 4:4.5 image ratio.
- Kept the existing accurate image, alternative text, attached caption, Hero copy, actions, and responsive reading order.
- Added a stable `neutral-profile-portrait` hook and focused assertion without coupling tests to generated Chakra style output.
- Reorganized the README into eight numbered onboarding steps covering prerequisites, version checks, repository acquisition, dependency installation, local development, first edits, verification, and safe updates.
- Added dedicated Windows, macOS, Ubuntu/Debian, Fedora, Arch, WSL, and ChromeOS guidance based on current official Git, Node.js, npm, Microsoft, Homebrew, Vite, and Google documentation.
- Documented Vite's Node compatibility boundary, official installers, optional package managers, Git clone and ZIP workflows, terminal restart behavior, local URLs, and safe troubleshooting without global npm, `sudo npm install`, unrestricted script policies, or broad permission changes.

## Verification Evidence

| Check | Result |
|---|---|
| Focused student-refresh tests | Passed, 53 tests across App, portfolio data, and template-selection files |
| Complete automated suite | Passed, 74 tests across 7 files |
| Focused portrait regression | Passed, 35 App tests including the Neutral portrait hook, image alternative, and preserved primary action |
| ESLint | Passed |
| TypeScript and production build | Passed through `npm run build`; Vite retained its existing non-blocking bundle-size warning |
| Whitespace validation | `git diff --check` passed |
| Runtime template inventory | Exactly Engineering, Neutral, and Business |
| Shared behavior | Tests cover template fallback, routes, section hashes, journal pages, controls, and both layout modes |
| Responsive visual inspection | Neutral and Business home and Projects passed in light/dark modes at 1440 by 1000 and 390 by 844 |
| Generated assets | All three 1200 by 900 WebP covers loaded; final files are approximately 76 KB, 83 KB, and 122 KB |
| Contrast | Key text and button pairs measured from 5.31:1 through 16.48:1 across both updated templates and color modes |
| Business case clearance | All three mobile case labels measured 16px from both viewport edges |
| Selector indicator | Active items retained `aria-checked="true"`; indicator-element count was zero in all eight browser states |
| Neutral portrait geometry | 420 by 473px at 1440 by 1000; 358 by 403px at 390 by 844; caption remained inside and Hero copy did not overlap |
| Theme and template regression | Neutral, Engineering, and Business passed in light/dark modes at both target viewports with loaded profile images and no positive horizontal overflow |
| README validation | Prettier passed, 38 Markdown fences were balanced, required commands and local paths resolved, and all 12 newly referenced external pages returned HTTP 200 |

Headless Chrome interaction, DOM measurements, and screenshot checks confirmed loaded images, stable framing, no visible control overlap, no positive horizontal overflow, readable mobile and desktop composition, scoped styling, and correct selector state across sixteen home/project combinations.

## Story Coverage

| Story | Delivered evidence |
|---|---|
| NBV-US-01 Neutral Learning-Journal Expression | Friendly journal labels, accurate medium responsive portrait, attached caption, project-relevant supporting media, project-owned covers, and restrained editorial styling |
| NBV-US-02 Business Student-Showcase Expression | Student-showcase labels, numbered contents, project-owned covers, approachable case wording, and verified case clearance |
| NBV-US-03 Predictable Visitor Navigation | Stable numbered navigation, active context, mobile drawers, semantic controls, and route regression tests |
| NBV-US-04 Shared Content and Regression Stability | Complete cross-platform student onboarding, typed project media, local optimized assets, shared data reuse, three-template registry, preserved runtime selection, and full Engineering regression suite |
| NBV-US-05 Runtime Portfolio Presentation Selection | Shared all-shell selector without a visible tick, semantic selected state, guarded persistence, invalid fallback, and route/journal/layout preservation tests |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security-sensitive service or data flow was introduced. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; focused deterministic UI tests cover the changed contracts. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown compatibility | Valid headings, tables, paths, and plain-text dimensions |
| Application/document boundary | Application files remain outside `aidlc-docs/` |
