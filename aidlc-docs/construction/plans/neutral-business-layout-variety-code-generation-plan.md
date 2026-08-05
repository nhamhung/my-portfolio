# Code Generation Plan - Neutral and Business Layout Variety

> **Status: Neutral portrait and cross-platform setup Step 19 implemented and verified on 2026-08-02; awaiting code-generation approval.** Student-friendly template refresh Step 18 was implemented and verified on 2026-08-01; previous layout, content, journal, test, accessibility, lint, TypeScript, and production-build verification remains the baseline.

## Unit Context

- **Unit**: Neutral and Business Presentation Enhancement.
- **Workspace root**: `/Users/nhamhhung/my-portfolio`.
- **Project type**: Brownfield React 19, TypeScript, Chakra UI, and Vite application.
- **Stories**: NBV-US-01 through NBV-US-05.
- **Owned behavior**: Delivered template presentations, project-owned local media, student-friendly Neutral and Business framing, App-owned runtime selection, browser persistence, and focused UI tests.
- **Dependencies**: Existing registry, shared project data, source default, App route/layout ownership, shared shell contract, Chakra UI, React Icons, CSS variables, and Vite local asset handling.
- **Preserved interfaces**: `PortfolioTemplate`, `SectionId`, hashes, journal routes, layout modes, color mode, content actions, App state ownership, and static deployment; `ProjectEntry` expands compatibly with presentation media.
- **Database and services**: None.
- **New runtime dependencies**: None.

## Planned File Scope

### Modify In Place

- `src/App.tsx`
- `src/templates/types.ts`
- `src/templates/index.ts`
- `src/templates/templateRegistry.test.ts`
- `src/templates/engineering/EngineeringShell.tsx`
- `src/components/Navbar.tsx`
- `src/templates/neutral/NeutralShell.tsx`
- `src/templates/neutral/NeutralHero.tsx`
- `src/templates/neutral/NeutralAbout.tsx`
- `src/templates/neutral/NeutralProjects.tsx`
- `src/templates/business/BusinessShell.tsx`
- `src/templates/business/BusinessHero.tsx`
- `src/templates/business/BusinessAbout.tsx`
- `src/templates/business/BusinessProjects.tsx`
- `src/App.css`
- `src/App.test.tsx`
- `README.md`
- Current reverse-engineering artifacts under `aidlc-docs/inception/reverse-engineering/`
- Active requirements, stories, plans, state, index, code summary, and Build/Test artifacts under `aidlc-docs/`

### Create

- `src/components/shared/PortfolioStyleSelector.tsx`
- `src/utils/templateSelection.ts`
- `src/utils/templateSelection.test.ts`
- `aidlc-docs/construction/neutral-business-layout-variety/code/code-generation-summary.md`

No copied, suffixed, or parallel application components will be created.

### Step 18 Amendment Scope

#### Modify In Place

- `src/types/portfolio.ts`
- `src/data/projects.ts`
- `src/test/data/portfolio.test.ts`
- `src/components/shared/PortfolioStyleSelector.tsx`
- `src/templates/neutral/index.ts`
- `src/templates/neutral/NeutralShell.tsx`
- `src/templates/neutral/NeutralHero.tsx`
- `src/templates/neutral/NeutralAbout.tsx`
- `src/templates/neutral/NeutralProjects.tsx`
- `src/templates/business/index.ts`
- `src/templates/business/BusinessShell.tsx`
- `src/templates/business/BusinessHero.tsx`
- `src/templates/business/BusinessAbout.tsx`
- `src/templates/business/BusinessProjects.tsx`
- `src/App.css`
- `src/App.test.tsx`
- `README.md`
- Active requirements, stories, plans, state, audit, code summary, and Build/Test artifacts under `aidlc-docs/`

#### Create

- `src/assets/projects/coursework-certificates.webp`
- `src/assets/projects/program-analyzer.webp`
- `src/assets/projects/java-resume-application.webp`

### Step 19 Amendment Scope

#### Modify In Place

- `src/templates/neutral/NeutralHero.tsx`
- `src/App.test.tsx` only if a focused structural assertion adds durable regression value
- `README.md`
- Active requirements, stories, plans, state, audit, code summary, and Build/Test artifacts under `aidlc-docs/`

#### Create

- None. No duplicate component, data, test, or documentation variant will be added.

## Generation Steps

### Step 1: Establish the Baseline and Protect Contracts

**Stories**: NBV-US-03, NBV-US-04

- [x] Confirm the current focused App and registry tests pass before presentation edits.
- [x] Record the existing Engineering structure and template-registry behavior as immutable regression boundaries.
- [x] Confirm the affected files exist and no duplicate Neutral or Business component variants are present.

### Step 2: Replace the Neutral Shell with a Magazine Masthead

**Stories**: NBV-US-01, NBV-US-03

- [x] Replace the fixed desktop side rail with a full-width magazine masthead.
- [x] Provide stable desktop navigation, active-section state, theme control, and layout control.
- [x] Keep a compact mobile header and accessible drawer using stable `data-testid` values.
- [x] Remove the desktop main-content offset and provide a full-width constrained editorial canvas.

### Step 3: Reshape Neutral into Magazine Modules

**Stories**: NBV-US-01

- [x] Recompose Hero as a featured opening story with identity, media, statement, actions, and issue metadata.
- [x] Recompose About as a modular multi-column editorial spread with readable line lengths.
- [x] Recompose Projects into varied repeatable magazine modules while preserving project links and shared data.
- [x] Use scoped styling to make the shared Gallery read as a compact visual archive without creating a new Gallery component.

### Step 4: Replace the Business Shell with a Consulting Report

**Stories**: NBV-US-02, NBV-US-03

- [x] Replace the current two-tier top navigation with a concise report header and sticky desktop contents rail.
- [x] Include stable numbered navigation, active-section context, contact, theme, and layout controls.
- [x] Collapse the contents rail into an accessible compact mobile header and drawer.
- [x] Ensure the sticky rail cannot obscure content and the main document retains normal vertical flow.

### Step 5: Reshape Business into Evidence Chapters

**Stories**: NBV-US-02

- [x] Recompose Hero as a report cover and executive brief rather than an outcome dashboard.
- [x] Recompose About around executive summary, capabilities, evidence, and supported outcomes.
- [x] Recompose Projects as recommendation-style cases with context, contribution, evidence, and actions.
- [x] Derive all labels and evidence from existing data without introducing required metrics.

### Step 6: Replace Scoped Layout Styles

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04

- [x] Remove obsolete Neutral side-rail and Business executive-dashboard selectors.
- [x] Add isolated magazine and report layout rules with stable grid constraints and readable content widths.
- [x] Add responsive reflow for mobile, tablet, laptop, and wide desktop without unintended horizontal overflow.
- [x] Preserve visible focus, reduced-motion behavior, image dimensions, and Engineering CSS.
- [x] Scan the resulting palettes and hierarchy to avoid one-note styling and template leakage.

### Step 7: Update Tests and Student Guidance

**Stories**: NBV-US-03, NBV-US-04

- [x] Update App tests for the new Neutral masthead and Business contents-rail navigation test IDs.
- [x] Add structural assertions that distinguish the new shells from their previous layouts.
- [x] Retain coverage for all three templates, both layout modes, section hashes, journal routes, controls, fallback, and Engineering regression.
- [x] Update README template descriptions if required by the new structures.
- [x] Run focused App and registry tests after the test updates.

### Step 8: Verify Scope and Record Generation Evidence

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04

- [x] Run the complete automated test suite, ESLint, TypeScript checks, and production build.
- [x] Inspect Neutral and Business at representative desktop and mobile viewport sizes. Current headless Chrome checks pass for all three selectors at 1440 by 1000 and 390 by 844.
- [x] Check controls, wrapping, sticky behavior, image framing, and page overflow in both layout modes through source inspection and automated component coverage.
- [x] Confirm Engineering remains unchanged and no Artistic runtime or duplicate generated files were added.
- [x] Run `git diff --check` and review the scoped diff.
- [x] Create the concise code-generation summary and mark all story coverage complete.

### Step 9: Harden Spacing and Contrast

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03

- [x] Audit Neutral and Business foreground/background pairs against WCAG contrast thresholds.
- [x] Audit section, panel, navigation, image-caption, and control edge clearance at responsive breakpoints.
- [x] Apply focused token or layout fixes without changing the template structures or Engineering presentation.
- [x] Add deterministic regression checks for critical contrast pairs and spacing safeguards.
- [x] Rerun the focused and complete verification suites and update generation evidence.

### Step 10: Synchronize Internship Experience from Resume

**Stories**: NBV-US-04

- [x] Extract the Sea Limited/Shopee Finance and PSA International internship details from the bundled resume.
- [x] Add both internships to the shared chronological experience data and align the existing Sea full-time period with the resume.
- [x] Add deterministic data assertions for internship titles, employers, periods, and populated descriptions.
- [x] Rerun focused and complete verification and update generation evidence.

### Step 11: Add School Awards and Achievements

**Stories**: NBV-US-04

- [x] Add the 2017 Saint Andrew's Model Student Award and 2015 Zhonghua Singapore Youth Festival Choir Silver Award to shared data.
- [x] Support an accessible text mark when an award has no accurate local logo asset.
- [x] Add deterministic assertions for both awards and their display metadata.
- [x] Rerun focused and complete verification and update generation evidence.

### Step 12: Add the Zhonghua Crest Asset

**Stories**: NBV-US-04

- [x] Store the supplied official Zhonghua crest as an optimized local application asset.
- [x] Replace the Zhonghua text mark with the crest while preserving accessible alternative text and generic fallback support.
- [x] Update deterministic asset assertions and run focused rendering checks.
- [x] Rerun complete verification and update generation evidence.

### Step 13: Centralize Section Descriptions and Relocate Data Tests

**Stories**: NBV-US-03, NBV-US-04

- [x] Add one typed student-facing data source for every non-home section's eyebrow, title, and description.
- [x] Wire shared Engineering sections and Neutral/Business custom sections to the centralized copy with visible descriptions below headings.
- [x] Relocate all test scripts out of `src/data` into `src/test/data` while preserving coverage.
- [x] Update student guidance and deterministic assertions for complete, non-empty section copy.
- [x] Run focused and complete verification, confirm `src/data` contains no tests, and update generation evidence.

### Step 14: Preserve Full Local Journal Images

**Stories**: NBV-US-04

- [x] Render local journal images without cropping in both the Journal listing and local post page.
- [x] Preserve stable media dimensions and retain the existing treatment for external WordPress thumbnails.
- [x] Add deterministic rendering assertions for the local image-fit behavior.
- [x] Run focused and complete verification and update generation evidence.

### Step 15: Render Local Journal Markdown Correctly

**Stories**: NBV-US-04

- [x] Replace the partial local Markdown parser with a maintained CommonMark renderer.
- [x] Style semantic journal elements consistently with all three templates and preserve safe link behavior.
- [x] Add deterministic rendering assertions for bold text and representative Markdown structures.
- [x] Update student guidance, run focused and complete verification, and update generation evidence.

### Step 16: Align Local Journal Overview Thumbnails

**Stories**: NBV-US-04

- [x] Use the shared compact cropped thumbnail treatment for local and external cards on the Journal overview.
- [x] Preserve complete, non-cropping image rendering inside the opened local journal post.
- [x] Update deterministic assertions, run complete verification, and update generation evidence.

### Step 17: Add Runtime Portfolio Style Selection

**Stories**: NBV-US-03, NBV-US-04, NBV-US-05

- [x] Confirm the current 52-test baseline and inspect Chakra Menu patterns before editing shared contracts.
- [x] Add typed template-ID validation, guarded local-storage read/write helpers, and deterministic fallback tests.
- [x] Move active template ownership into `PortfolioApp` while preserving route, journal, layout, active-section, and color-mode state.
- [x] Expand `PortfolioShellProps` with active template state and a typed selection callback.
- [x] Create one accessible `PortfolioStyleSelector` using the registry, Chakra Menu, React Icons, stable test IDs, and current-item semantics.
- [x] Integrate the selector into Engineering, Neutral, and Business header controls at desktop and mobile widths without changing section layouts.
- [x] Add App and registry coverage for all three choices, immediate switching, persistence, source default, invalid fallback, route preservation, journal preservation, layout preservation, and all-three-shell availability.
- [x] Update README with source-default, visitor-choice, persistence, reset, and terminology guidance.
- [x] Synchronize the AI-DLC index plus active and current reverse-engineering, requirement, story, design, execution, code-summary, state, and Build/Test artifacts; preserve audit history and superseded artifacts.
- [x] Run focused tests, the complete suite, ESLint, TypeScript production build, diff validation, duplicate-file scan, and responsive selector inspection.

### Step 18: Refresh Neutral and Business for Students

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04, NBV-US-05

#### 18.1 Establish Baseline and Asset Direction

- [x] Reconfirm the current complete-test, lint, TypeScript, and production-build baseline before application edits.
- [x] Record the current Engineering render and runtime-selector behavior as regression boundaries.
- [x] Define one cohesive 4:3 editorial-illustration system with a warm, light student tone, no embedded text, no logos, no watermarks, and sufficient edge detail for both Neutral and Business crops.

#### 18.2 Generate and Prepare Project Covers

- [x] Use the built-in image-generation tool once per distinct project to create accurate covers for Coursework and Certificates, Program Analyzer, and Java Resume Application.
- [x] Inspect every generated cover for subject accuracy, clean composition, absent text artifacts, and visual consistency.
- [x] Move the selected outputs into `src/assets/projects/`, convert or optimize them as WebP, and verify reasonable dimensions and file sizes.
- [x] Document concise, meaningful alternative text in the shared project records rather than deriving it from filenames.

#### 18.3 Add Project-Owned Media

- [x] Extend `ProjectEntry` with required `image` and `imageAlt` fields using the existing typed data pattern.
- [x] Import and assign one local cover and alternative text to each project in `src/data/projects.ts`.
- [x] Add deterministic data assertions for complete image references, meaningful alternative text, and all three expected project records.

#### 18.4 Simplify Portfolio Style Selection

- [x] Remove the visible check-icon import and indicator from `PortfolioStyleSelector`.
- [x] Preserve `Menu.RadioItem`, selected-row styling, `aria-checked`, keyboard operation, visible focus, and stable test IDs.
- [x] Add or update deterministic assertions that the active style remains semantically selected without a visible check indicator.

#### 18.5 Reframe Neutral as a Learning Journal

- [x] Update Neutral registry and chapter wording to describe a relaxed student learning journal while keeping the `neutral` ID and `Neutral` selector name.
- [x] Replace formal publication wording in Neutral Shell, Hero, About, and Projects with approachable student-oriented labels and actions.
- [x] Keep the accurate profile portrait and replace the unrelated Hero supporting gallery image with project-relevant media.
- [x] Make Neutral Projects render each project's own cover and alternative text instead of indexing into `gallery`.
- [x] Preserve the existing masthead, editorial spread, varied project modules, gallery section, routes, and actions.

#### 18.6 Reframe Business as a Student Showcase

- [x] Update Business registry and chapter wording to describe an organized student project showcase while keeping the `business` ID and `Business` selector name.
- [x] Replace executive, consulting, professional-record, reviewed-evidence, and next-review language in Business Shell, Hero, About, and Projects.
- [x] Make Business Projects render each project's own cover and alternative text instead of indexing into `gallery`.
- [x] Add at least 16px inline viewport clearance to the project `CASE` label on small screens and balanced spacing in the desktop case grid.
- [x] Preserve the existing numbered showcase structure, sticky contents rail, project actions, routes, and responsive reading order.

#### 18.7 Refine Scoped Styling

- [x] Apply restrained warm and light theme refinements to Neutral and Business without high-saturation multi-color decoration.
- [x] Add consistent project-cover framing with stable aspect ratios, deliberate overview cropping, and no layout shift.
- [x] Verify readable text and control contrast in light and dark modes, visible focus, responsive wrapping, and no unintended horizontal overflow.
- [x] Confirm no new selectors or variables alter Engineering.

#### 18.8 Update Guidance and Automated Coverage

- [x] Update README descriptions and student editing guidance for the learning-journal and student-showcase identities plus project-owned media.
- [x] Update App tests for student-friendly labels, accurate project media, selector semantics without a visible indicator, Business case-label hooks, and explicit Engineering regression.
- [x] Preserve runtime selection, persistence, routes, journals, layout modes, actions, accessibility, and all-three-template coverage.

#### 18.9 Verify and Record Evidence

- [x] Run focused data, selector, and App tests, then the complete test suite, ESLint, TypeScript checks, and production build.
- [x] Inspect Neutral and Business in light and dark modes at representative desktop and mobile viewport sizes, including cover framing and Business case clearance.
- [x] Check contrast, focus, control fit, image loading, overflow, generated asset dimensions and sizes, scoped CSS, and Engineering regression.
- [x] Run `git diff --check`, review the scoped diff, confirm no duplicate application files, update story acceptance checkboxes, and refresh code-generation evidence.

### Step 19: Resize Neutral Portrait and Expand Cross-Platform Setup

**Stories**: NBV-US-01, NBV-US-04

#### 19.1 Reconfirm Baseline and Boundaries

- [x] Run the focused App tests and record the current complete-test, lint, TypeScript, and production-build baseline before edits.
- [x] Reconfirm Engineering's compact portrait, Business's medium portrait, and Neutral's current full-spread portrait geometry.
- [x] Confirm `NeutralHero.tsx`, `README.md`, and any focused test target exist and no duplicate variants are present.
- [x] Preserve the existing portrait asset, caption, Hero copy, actions, routes, template IDs, shared data, color modes, and Engineering and Business presentation.

#### 19.2 Constrain the Neutral Portrait

- [x] Replace Neutral's forced 420px to 760px full-spread media height with a centered wrapper constrained to approximately 420px wide on desktop and the available content width on smaller screens.
- [x] Give the portrait a stable responsive aspect ratio and use `object-fit: cover` so it neither stretches nor causes layout shift.
- [x] Keep the caption attached to the portrait frame and preserve readable wrapping without overlapping the image or adjacent Hero copy.
- [x] Maintain the existing single-column mobile reading order and editorial desktop composition without changing Engineering or Business styles.
- [x] Add or retain a stable class or test hook only where it supports deterministic rendering and responsive inspection.

#### 19.3 Build a Beginner-First Cross-Platform README Journey

- [x] Review current authoritative Git, Node.js, Microsoft, Apple/Homebrew, Ubuntu/Debian, Fedora, Arch, WSL, and ChromeOS Linux guidance before documenting commands or links.
- [x] Reorganize the existing Prerequisites and Quick Start sections into a clear numbered setup journey while preserving accurate customization, template, journal, asset, verification, and deployment guidance.
- [x] Add dedicated prerequisite instructions for Windows 10/11, current macOS, Ubuntu/Debian, Fedora, and Arch-based Linux, plus concise WSL and ChromeOS Linux notes.
- [x] Lead with official graphical Git and Node.js 20-or-newer installers and present package-manager commands as clearly labeled optional alternatives.
- [x] Explain how to verify `git`, `node`, and `npm`, including what successful version output generally looks like and what to do when a command is not found.
- [x] Provide complete Git clone and ZIP download paths, explain `<owner>` and `<repository>`, and show how to enter the extracted project directory before `npm install`.
- [x] Explain dependency installation; starting, stopping, and restarting Vite; opening the printed local URL; editing student data; and recognizing live reload.
- [x] Explain `npm run test`, `npm run lint`, `npm run build`, and `npm run preview`, including when to use each command and how to stop preview mode.
- [x] Add safe update instructions and operating-system-aware troubleshooting without recommending global npm installs, disabling security controls, or broad permission changes.
- [x] Remove or consolidate contradictory and duplicated setup text while keeping the README scannable through short sections, tables, and shell-specific code fences.

#### 19.4 Add Focused Coverage and Validate Documentation

- [x] Add or update a focused Neutral rendering assertion if needed to protect the portrait wrapper, image alternative, and preserved Hero actions without coupling tests to incidental Chakra output.
- [x] Validate README headings, internal links, code fences, placeholders, shell labels, command names, package scripts, and referenced local paths.
- [x] Check all newly introduced external installation links and clearly distinguish official installers from optional community package managers.
- [x] Confirm the onboarding sequence can be followed from a clean Windows, macOS, or Linux mental model without assuming prior Git, npm, shell, or repository knowledge.

#### 19.5 Verify and Record Evidence

- [x] Run focused tests, the complete test suite, ESLint, TypeScript/Vite production build, and `git diff --check`.
- [x] Inspect Neutral at representative desktop and mobile viewports in light and dark modes; verify portrait width, aspect ratio, caption fit, first-viewport balance, image loading, and absence of overflow.
- [x] Confirm Engineering and Business portrait presentation and all existing runtime selector, route, journal, layout-mode, and action behavior remain unchanged.
- [x] Review the final README end to end for beginner flow, cross-platform accuracy, readable density, and absence of contradictory instructions.
- [x] Mark the new story acceptance criteria complete only after implementation and verification, then update the code summary, Build/Test evidence, active plan checkboxes, state, and audit log.

## Story Traceability

| Story | Generation steps |
|---|---|
| NBV-US-01 Neutral Learning-Journal Expression | 2, 3, 6, 8, 9, 18, 19 |
| NBV-US-02 Business Student-Showcase Expression | 4, 5, 6, 8, 9, 18 |
| NBV-US-03 Predictable Visitor Navigation | 1, 2, 4, 6, 7, 8, 9, 17, 18 |
| NBV-US-04 Shared Content and Regression Stability | 1, 6, 7, 8, 9, 17, 18, 19 |
| NBV-US-05 Runtime Portfolio Presentation Selection | 17, 18 |

## Generation Constraints

- Modify existing application files in place.
- Preserve user changes outside the approved scope.
- Keep `src/data/template.ts` as the initial default while adding the approved browser-persisted visitor override.
- Keep generated illustrations honest and text-free; do not present them as screenshots of the actual applications.
- Store every project-referenced generated asset in the workspace, not only in the image-generation output directory.
- Keep all interactive controls semantic and automation-friendly.
- Use existing Chakra and React Icons components; add no hand-drawn interface icons.
- Add no custom scrolling behavior, fourth template, selector-specific runtime dependency, backend, URL selection model, or infrastructure.
- Update each checkbox immediately when its work is completed.

## Verification Gates

- Focused tests after component and test updates.
- Full test, lint, TypeScript, and production-build checks before generation completion.
- Desktop and mobile inspection of selector fit and interaction in all three templates.
- Light and dark desktop/mobile inspection of project covers, Neutral student framing, Business case spacing, and contrast.
- Generated asset subject, dimensions, file-size, and loading validation.
- Explicit Engineering regression and scoped-diff review.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, checkboxes, tables, and paths |
| Application/document boundary | Application code remains outside `aidlc-docs/` |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
