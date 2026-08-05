# Code Generation Plan - Youthful Themes and Artistic Student Template

> **Status: Approved on 2026-08-05; implementation in progress.** This is the single source of truth for one cohesive brownfield UI unit.

## Unit Context

- **Workspace root**: `/Users/nhamhhung/my-portfolio`
- **Application code**: Existing `src/` tree at the workspace root.
- **Documentation**: Existing root README plus Markdown evidence under `aidlc-docs/`.
- **Stories**: YAT-US-01 through YAT-US-06.
- **Dependencies**: Existing React, Chakra UI, React Icons, Vite, Vitest, Testing Library, next-themes, and shared portfolio data.
- **External units or services**: None.
- **Database entities or migrations**: None.
- **Deployment boundary**: Existing static GitHub Pages workflow; no change planned.

## Part 1 Planning Checklist

- [x] Read the approved requirements, stories, execution plan, application design, and affected source contracts.
- [x] Confirm one cohesive unit and the existing brownfield source locations.
- [x] Identify exact created and modified files, dependencies, testing seams, and rollback boundaries.
- [x] Map every implementation step to YAT-US-01 through YAT-US-06.
- [x] Confirm no runtime dependency, backend, CMS, infrastructure, or fabricated content is required.
- [x] Create this numbered executable plan and log its approval gate.

## Planned File Scope

### Create

- `src/data/artistic.ts`
- `src/templates/artistic/ArtisticAbout.tsx`
- `src/templates/artistic/ArtisticActivities.tsx`
- `src/templates/artistic/ArtisticHero.tsx`
- `src/templates/artistic/ArtisticProjects.tsx`
- `src/templates/artistic/ArtisticShell.tsx`
- `src/templates/artistic/index.ts`
- `aidlc-docs/construction/youthful-artistic-template/code/code-generation-summary.md`

### Modify

- `src/types/portfolio.ts`
- `src/data/portfolio.ts`
- `src/templates/types.ts`
- `src/templates/index.ts`
- `src/utils/templateSelection.ts`
- `src/utils/templateSelection.test.ts`
- `src/utils/scroll.ts`
- `src/hooks/usePortfolioLayout.ts`
- `src/hooks/usePortfolioLayout.test.ts`
- `src/components/shared/PortfolioStyleSelector.tsx`
- `src/App.tsx`
- `src/App.css`
- `src/App.test.tsx`
- `src/templates/templateRegistry.test.ts`
- `src/test/data/portfolio.test.ts` if Artistic data validation belongs with the existing aggregate data checks
- `README.md`
- Active AI-DLC plans, stories, state, index, audit, and Build and Test evidence

No duplicate `_new`, `_updated`, `_modified`, or alternate component copies may be created.

## Step 1: Establish and Preserve the Baseline

**Stories**: YAT-US-06

- [x] Inspect `git status` and relevant diffs so all existing user changes are preserved.
- [x] Confirm every planned source and test path exists or is intentionally new.
- [x] Run focused template, selection, layout, and App tests before editing.
- [x] Run the complete test suite, ESLint, and production build before editing.
- [x] Record existing warnings separately from new failures.
- [x] Capture representative Engineering, Neutral, and Business desktop/mobile light/dark screenshots or measurable geometry for regression comparison.

## Step 2: Extend Typed Data and Template Contracts

**Stories**: YAT-US-03, YAT-US-04, YAT-US-05

- [x] Add `ArtisticActivity` and `ArtisticContent` types in the shared portfolio type module.
- [x] Create `src/data/artistic.ts` with concise editable introduction, interests, current learning, hobbies, real student activities, and personal goals.
- [x] Export Artistic data through the established data aggregation boundary without merging it into unrelated shared records.
- [x] Extend `PortfolioTemplateId` with `artistic`.
- [x] Add optional `isSectionVisible(sectionId)` to `PortfolioTemplate` while keeping all existing definitions valid.
- [x] Add or update data tests to reject malformed links or media where relevant and confirm representative Artistic arrays use the typed shape.
- [x] Run formatting and focused type/test checks for the new contracts.

## Step 3: Implement Template-Aware Navigation and Safe Fallback

**Stories**: YAT-US-04, YAT-US-05, YAT-US-06

- [x] Extend the existing enabled-navigation helper with an optional visibility predicate rather than adding a parallel navigation utility.
- [x] Derive the active template before memoizing navigation in App, then pass one filtered item and ID list to Shell, scroll tracking, layout state, and section rendering.
- [x] Keep Home visible as the final safe fallback.
- [x] Add layout reconciliation when visible IDs change: retain a valid active section, otherwise resolve to the first visible section.
- [x] Replace an invalid multi-page section hash without adding history; never rewrite a local journal hash.
- [x] Add focused utility and hook tests for visible filtering, preserved valid sections, hidden formal sections, multi-page fallback, and unchanged single-page behavior.
- [x] Run focused layout, navigation, route, and journal tests before continuing.

## Step 4: Register Artistic and Expand Runtime Selection

**Stories**: YAT-US-05, YAT-US-06

- [x] Create the Artistic template definition with complete chapter labels and a complete section map.
- [x] Define Artistic Experience visibility from shared experience or Artistic activities and Awards visibility from real awards only.
- [x] Register Artistic after Business while preserving Engineering fallback and source default.
- [x] Extend template-ID validation and persistence tests for Artistic, existing saved values, invalid values, and blocked storage.
- [x] Add a Lucide Artistic icon mapping and student-oriented selector description without a tick or check icon.
- [x] Update registry tests for exactly four IDs, complete sections, shared journal detail, and fallback behavior.
- [x] Verify selector keyboard and semantic selected-state behavior through focused App tests.

## Step 5: Build the Artistic Creative Notebook Presentation

**Stories**: YAT-US-03, YAT-US-04, YAT-US-06

- [x] Build `ArtisticShell` with a compact top bar, desktop navigation, mobile drawer, skip link, and existing style/layout/color controls.
- [x] Build `ArtisticHero` with concise student copy, existing actions, and a stable responsive collage of real profile, project, and gallery media.
- [x] Build `ArtisticAbout` with independently omitted empty groups for interests, current learning, hobbies, and goals.
- [x] Build `ArtisticActivities` to present shared experience and student activities honestly under age-appropriate labels.
- [x] Build `ArtisticProjects` with varied but repeatable notebook compositions using each project's image, alternative text, technologies, and actions.
- [x] Reuse Education, Awards, Gallery, Journal, Skills, Contact, and JournalPostPage while applying only Artistic-scoped composition rules.
- [x] Add stable `data-testid` hooks only for meaningful shell, collage, data-group, project, and sparse-content verification seams.
- [x] Use existing stagger classes and CSS transitions for gentle motion; add no scroll listener, wheel handler, animation library, or custom scrolling.
- [x] Add focused rendering tests for Artistic identity, controls, actions, real media, alternative text, optional groups, activities, and no fabricated formal claims.

## Step 6: Implement Scoped Youthful Color Systems

**Stories**: YAT-US-01, YAT-US-02, YAT-US-03, YAT-US-06

- [x] Refresh Neutral light and dark tokens with sky-blue primary and coral supporting accents while preserving calm reading surfaces and existing structure.
- [x] Refresh Business light and dark tokens with teal primary and sunflower supporting accents while preserving calm reading surfaces and existing structure.
- [x] Add Artistic light and dark variables using balanced sky, coral, sunflower, mint, ink, and neutral-paper roles.
- [x] Add Artistic responsive layout selectors for stable collage frames, alternating bands, notebook rules, project compositions, and compact controls.
- [x] Keep cards at 8px radius or less, avoid nested cards, and use color swatches or icon controls where appropriate.
- [x] Ensure long text never sits on saturated accent surfaces and verify 4.5:1 normal-text and 3:1 large-text or essential-boundary contrast targets with computed tokens.
- [x] Extend reduced-motion CSS to Artistic and confirm transforms cannot alter layout dimensions.
- [x] Scan scoped CSS selectors and computed styles to verify no palette or layout leakage into Engineering or another template.

## Step 7: Complete Integration and Regression Coverage

**Stories**: YAT-US-01 through YAT-US-06

- [x] Test switching among all four styles in single-page and multi-page modes without reload.
- [x] Test valid current-section and local-journal preservation across all four styles.
- [x] Test Artistic sparse Experience and Awards behavior and fallback from a newly hidden multi-page route.
- [x] Test resume, project, journal, certificate, social, contact, layout, color-mode, and style controls where existing coverage does not already protect them.
- [x] Assert Engineering retains its existing shell, Hero, section structure, controls, and root styling apart from the fourth selector row.
- [x] Confirm no visible selector tick or check icon appears and Artistic has clear semantic selected state.
- [x] Run focused tests after each integration group and resolve regressions before documentation work.

## Step 8: Update Student Documentation

**Stories**: YAT-US-04, YAT-US-05, YAT-US-06

- [x] Update README terminology from three to four portfolio styles without disturbing the approved cross-platform setup journey.
- [x] Explain Engineering, Neutral, Business, and Artistic in student-friendly language.
- [x] Explain how `src/data/template.ts` accepts `artistic` while Engineering remains the supplied default.
- [x] Document every editable field in `src/data/artistic.ts`, including how empty arrays affect Artistic content.
- [x] Explain that students should not invent work experience or awards and that empty formal sections can disappear in Artistic.
- [x] Verify all commands, paths, headings, links, and code fences remain valid and non-contradictory.

## Step 9: Verify Visual, Accessibility, and Build Quality

**Stories**: YAT-US-01 through YAT-US-06

- [x] Run focused template, selection, layout, sparse-content, route, and App tests.
- [x] Run the complete test suite, ESLint, TypeScript/Vite production build, Prettier checks, and `git diff --check`.
- [x] Start or reuse a local Vite server and inspect all four templates at representative mobile and desktop viewports in light and dark modes.
- [x] Verify actual image loading, stable collage framing, heading hierarchy, caption fit, control dimensions, and no positive horizontal overflow.
- [x] Verify keyboard navigation, focus visibility, semantic selector state, image alternatives, logical order, and reduced-motion behavior.
- [x] Compute or inspect critical text, control, focus, and selected-state contrast pairs against the approved thresholds.
- [x] Compare Engineering plus Neutral and Business structure against the recorded baseline and distinguish accepted palette changes from regressions.
- [x] Record existing non-blocking warnings separately and leave no required verification session running.

## Step 10: Complete Traceability and Evidence

**Stories**: YAT-US-01 through YAT-US-06

- [x] Create `aidlc-docs/construction/youthful-artistic-template/code/code-generation-summary.md` with created, modified, tested, and preserved behavior.
- [x] Update Build and Test instructions and evidence for four templates, sparse content, contrast, and responsive inspection.
- [x] Mark each code-plan checkbox immediately after its task is completed.
- [x] Mark YAT story acceptance criteria complete only after matching implementation and verification evidence exists.
- [x] Update active execution-plan, state, index, and audit records without reopening superseded Artistic Exhibition artifacts.
- [x] Confirm no duplicate source files, unintended dependency changes, generated build artifacts, or unrelated reversions were introduced.
- [x] Present the standardized Code Generation review gate before Build and Test approval.

## Story Traceability

| Story     | Primary implementation steps |
| --------- | ---------------------------- |
| YAT-US-01 | Steps 6, 7, 9, 10            |
| YAT-US-02 | Steps 6, 7, 9, 10            |
| YAT-US-03 | Steps 2, 4, 5, 6, 7, 9, 10   |
| YAT-US-04 | Steps 2, 3, 5, 7, 8, 9, 10   |
| YAT-US-05 | Steps 2, 3, 4, 7, 8, 9, 10   |
| YAT-US-06 | Steps 1 through 10           |

## Completion Criteria

- All implementation checkboxes are `[x]`.
- YAT-US-01 through YAT-US-06 acceptance criteria have matching verified evidence.
- Engineering remains stable; Neutral and Business change only within approved palette scope.
- Artistic is complete, student-editable, honest with sparse formal content, accessible, responsive, and selectable.
- Focused and complete quality checks pass and the existing static deployment remains unchanged.
- Code summary and Build and Test evidence are current.

## Extension Compliance

| Extension              | Status   | Rationale                                 |
| ---------------------- | -------- | ----------------------------------------- |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis. |
