# Code Generation Plan - Sleek Three-Theme Redesign

> **Status: Approved on 2026-08-25; implementation in progress.** This is the single source of truth for one cohesive brownfield presentation-system unit.

## Unit Context

- **Workspace root**: `/Users/nhamhhung/nhamhung.github.io`
- **Application code**: Existing React/Vite code under `src/` at the workspace root.
- **User documentation**: Existing `README.md` at the workspace root.
- **AI-DLC evidence**: Markdown only under `aidlc-docs/construction/sleek-three-theme-redesign/code/`.
- **Stories**: STR-US-01 through STR-US-06.
- **Requirements**: STR-01 through STR-32 and STR-NFR-01 through STR-NFR-10.
- **Dependencies**: Existing React, Chakra UI, React Icons, React Markdown, next-themes, Vite, Vitest, Testing Library, and typed portfolio data.
- **External units or services**: None.
- **Database entities or migrations**: None.
- **Deployment boundary**: Existing static GitHub Pages workflow; no change planned.
- **Working baseline**: Preserve all current user changes, the completed `src/data/artistic.ts` deletion, the simplified README, and the repaired local dependency installation.

## Expected Interfaces and Boundaries

- `PortfolioTemplateId` accepts exactly `engineering`, `business`, and `artistic`.
- Invalid and obsolete `neutral` values resolve to Engineering through existing selection and registry fallback behavior.
- `PortfolioApp`, shell props, layout hooks, route parsing, color mode, actions, and persistence ownership remain stable.
- Business and Artistic each provide their own shell, ten section components, and local journal-post component.
- Business and Artistic consume shared data and low-level behavioral utilities without importing Engineering-visible presentation components.
- Business and Artistic CSS is rooted in its owning template class and stored in its template folder.
- Artistic contains shared portfolio content plus short interface labels only.
- `src/data/artistic.ts` remains deleted and no replacement theme-only personal-content source is created.

## Part 1 Planning Checklist

- [x] Read the approved requirements, stories, execution plan, application design, state, and affected source contracts.
- [x] Confirm one cohesive unit and the existing brownfield source locations.
- [x] Identify created, modified, deleted, and intentionally preserved paths.
- [x] Define dependencies, interfaces, test seams, automation hooks, and rollback boundaries.
- [x] Map every implementation step to STR-US-01 through STR-US-06.
- [x] Confirm no runtime dependency, backend, database, CMS, service layer, infrastructure, or fabricated content is required.
- [x] Create this numbered executable plan and log its approval gate.
- [x] Obtain explicit approval of the complete eleven-step plan.

## Planned File Scope

### Create

- `src/templates/business/BusinessAwards.tsx`
- `src/templates/business/BusinessContact.tsx`
- `src/templates/business/BusinessEducation.tsx`
- `src/templates/business/BusinessExperience.tsx`
- `src/templates/business/BusinessGallery.tsx`
- `src/templates/business/BusinessJournal.tsx`
- `src/templates/business/BusinessJournalPostPage.tsx`
- `src/templates/business/BusinessSkills.tsx`
- `src/templates/business/business.css`
- `src/templates/business/businessTemplate.test.tsx`
- `src/templates/artistic/ArtisticAwards.tsx`
- `src/templates/artistic/ArtisticContact.tsx`
- `src/templates/artistic/ArtisticEducation.tsx`
- `src/templates/artistic/ArtisticExperience.tsx`
- `src/templates/artistic/ArtisticGallery.tsx`
- `src/templates/artistic/ArtisticJournal.tsx`
- `src/templates/artistic/ArtisticJournalPostPage.tsx`
- `src/templates/artistic/ArtisticSkills.tsx`
- `src/templates/artistic/artistic.css`
- `src/templates/artistic/artisticTemplate.test.tsx`
- `aidlc-docs/construction/sleek-three-theme-redesign/code/code-generation-summary.md`

Small Business- or Artistic-local primitive files may be created only when they reduce repetition inside one theme and preserve section-specific composition. If used, their exact paths will be recorded in the implementation summary.

### Modify in Place

- `src/templates/types.ts`
- `src/templates/index.ts`
- `src/templates/options.ts`
- `src/templates/templateRegistry.test.ts`
- `src/data/template.ts`
- `src/utils/templateSelection.ts`
- `src/utils/templateSelection.test.ts`
- `src/components/shared/PortfolioStyleSelector.tsx`
- `src/templates/business/BusinessAbout.tsx`
- `src/templates/business/BusinessHero.tsx`
- `src/templates/business/BusinessProjects.tsx`
- `src/templates/business/BusinessShell.tsx`
- `src/templates/business/index.ts`
- `src/templates/artistic/ArtisticAbout.tsx`
- `src/templates/artistic/ArtisticHero.tsx`
- `src/templates/artistic/ArtisticProjects.tsx`
- `src/templates/artistic/ArtisticShell.tsx`
- `src/templates/artistic/index.ts`
- `src/App.css`
- `src/App.test.tsx`
- `README.md`
- Active AI-DLC plan, story, state, index, audit, summary, and Build and Test Markdown artifacts.

### Delete

- `src/templates/neutral/NeutralAbout.tsx`
- `src/templates/neutral/NeutralHero.tsx`
- `src/templates/neutral/NeutralProjects.tsx`
- `src/templates/neutral/NeutralShell.tsx`
- `src/templates/neutral/index.ts`
- `src/templates/artistic/ArtisticActivities.tsx`

### Keep Deleted

- `src/data/artistic.ts`

No `_new`, `_updated`, `_modified`, backup, or alternate component copies may be created in the repository.

## Step 1: Protect the Dirty-Worktree Baseline

**Stories**: STR-US-04, STR-US-06

- [x] Inspect `git status`, current diffs, and all planned targets so existing user and prior amendment changes are preserved.
- [x] Confirm planned source paths exist or are intentionally new and record any unexpected overlap before editing.
- [x] Run focused registry, selection, App, and data tests against the current baseline.
- [x] Run the complete Vitest suite, ESLint, and TypeScript/Vite production build before redesign edits.
- [x] Record existing warnings or baseline failures separately from redesign regressions.
- [x] Capture representative Engineering structure and Business/Artistic layout evidence for later regression and improvement comparison.
- [x] Mark Step 1 complete immediately after its evidence is recorded.

## Step 2: Add Three-Theme Contract Tests and Remove Neutral

**Stories**: STR-US-01, STR-US-05, STR-US-06

- [x] Update tests first for exactly three IDs, selector options, valid persistence, stored `neutral` fallback, unknown-value fallback, and Engineering stability.
- [x] Remove `neutral` from `PortfolioTemplateId`, registry entries, option metadata, source configuration choices, validator branches, selector icons, and active tests.
- [x] Delete the Neutral template folder and remove every active Neutral import.
- [x] Remove Neutral variables, layouts, media rules, responsive rules, and reduced-motion selectors from `src/App.css` without changing Engineering rules.
- [x] Preserve historical Neutral references only in AI-DLC records and explanatory obsolete-preference documentation where appropriate.
- [x] Run focused type, registry, selection, selector, and App tests.
- [x] Search active source, tests, and README for stale Neutral runtime references.
- [x] Mark Step 2 complete immediately after all focused checks pass.

## Step 3: Establish Theme-Owned Presentation Test Seams

**Stories**: STR-US-02, STR-US-03, STR-US-04, STR-US-06

- [x] Create focused Business and Artistic template tests using the existing test provider and stable canonical section IDs.
- [x] Assert every Business and Artistic section-map entry differs by component identity from Engineering and from prohibited shared Engineering-visible components.
- [x] Assert each final theme owns its local journal-post component.
- [x] Define stable `data-testid` names only for meaningful shell, navigation, background, section, article, media, and action seams using `{theme}-{section}-{role}`.
- [x] Add forbidden-copy assertions for the former Artistic slogan, notebook introduction, interests, learning, hobbies, goals, and co-located activities.
- [x] Add representative shared-content assertions so removals cannot blank or fabricate the redesigned themes.
- [x] Mark Step 3 complete immediately after the protective tests fail only for not-yet-implemented approved behavior.

## Step 4: Build the Complete Business Editorial Casebook

**Stories**: STR-US-02, STR-US-04, STR-US-06

- [x] Rework `BusinessShell` into a compact accessible casebook shell with theme-owned navigation, controls, skip link, and background layer hooks.
- [x] Rework `BusinessHero` as a typographic split cover using shared profile, hero evidence, and real actions.
- [x] Rework `BusinessAbout` as an editorial profile spread using shared biography and about facts.
- [x] Build dedicated Education, Experience, Awards, Gallery, Journal, Skills, and Contact components with distinct ledger, chapter, register, contact-sheet, index, matrix, and closing-brief compositions.
- [x] Rework `BusinessProjects` as alternating media-led case studies with real project media, alternative text, technologies, and actions.
- [x] Update `businessTemplate.sectionComponents` to contain only Business-owned components for all ten canonical sections.
- [x] Use shared data and low-level actions without `SectionShell`, `ContentCard`, Engineering visible components, terminal motifs, or unsupported executive/commercial claims.
- [x] Keep semantic headings, keyboard access, selected state, visible focus, image alternatives, and responsive ordering intact.
- [x] Run Business-focused tests and mark Step 4 complete after all Business section-map and content assertions pass.

## Step 5: Build the Complete Artistic Curated Gallery

**Stories**: STR-US-03, STR-US-04, STR-US-06

- [x] Rework `ArtisticShell` into a minimal accessible gallery shell with theme-owned navigation, controls, skip link, and luminous background layer hooks.
- [x] Rework `ArtisticHero` as a stable layered image-led composition using only shared profile, project, or gallery media and shared actions.
- [x] Rework `ArtisticAbout` as an asymmetric shared biography/catalogue profile with no notebook or theme-only personal content.
- [x] Delete `ArtisticActivities.tsx` and replace it with `ArtisticExperience` over shared professional experience.
- [x] Build dedicated Education, Awards, Gallery, Journal, Skills, and Contact components with distinct institution-study, recognition-wall, exhibition, reading-room, materials-index, and closing compositions.
- [x] Rework `ArtisticProjects` as curated catalogue works with real media, alternative text, technologies, and actions.
- [x] Remove the Artistic activity visibility predicate and update `artisticTemplate.sectionComponents` to contain only Artistic-owned components for all ten canonical sections.
- [x] Render only shared portfolio content plus short navigation, orientation, control, numbering, and style labels.
- [x] Keep semantic headings, keyboard access, selected state, visible focus, image alternatives, and responsive ordering intact.
- [x] Run Artistic-focused tests and mark Step 5 complete after all section-map, shared-content, and forbidden-copy assertions pass.

## Step 6: Build Theme-Owned Local Journal Views

**Stories**: STR-US-02, STR-US-03, STR-US-05, STR-US-06

- [x] Create `BusinessJournalPostPage` with an original publication article, not-found composition, post media, metadata, Markdown body, and Journal return link.
- [x] Create `ArtisticJournalPostPage` with an original exhibition-publication article, not-found composition, post media, metadata, Markdown body, and Journal return link.
- [x] Reuse only shared post data, route utilities, React Markdown behavior, and low-level UI primitives; do not render the Engineering `JournalPostPage` or its visible card hierarchy.
- [x] Preserve logical article headings, safe external links, image alternatives, horizontal code overflow, and local not-found behavior.
- [x] Register each theme-owned journal component and add focused valid-slug, missing-slug, media, metadata, Markdown, and back-navigation assertions.
- [x] Run journal route and theme-focused tests and mark Step 6 complete after both views pass.

## Step 7: Implement Isolated Architectural and Luminous Background Systems

**Stories**: STR-US-02, STR-US-03, STR-US-05, STR-US-06

- [x] Create `business.css` with Business-rooted light/dark tokens, warm-ivory/deep-ink foundations, perspective or drafting lines, soft spotlights, restrained translucent surfaces, and section-specific layouts.
- [x] Create `artistic.css` with Artistic-rooted light/dark tokens, luminous/deep gallery canvases, diffused washes, organic shapes, subtle grain, calm surfaces, and section-specific layouts.
- [x] Import each stylesheet only through its owning template and migrate current Business/Artistic rules out of `src/App.css`.
- [x] Keep decorative layers `aria-hidden`, pointer-inert, clipped safely, below content, and free of misleading control shapes.
- [x] Provide intentional mobile, tablet, laptop, and wide-desktop composition rules with stable media dimensions and no unintended horizontal overflow.
- [x] Keep long text on calm surfaces and verify 4.5:1 normal-text plus 3:1 large-text/essential-boundary contrast targets for representative tokens.
- [x] Use restrained existing CSS transitions and entrance effects, respect `prefers-reduced-motion`, and add no scroll listener, wheel handler, parallax, or scroll-linked animation.
- [x] Scan selectors and computed root classes for cross-theme leakage and Engineering changes.
- [x] Run focused render/style checks and mark Step 7 complete after isolation, motion, contrast, and responsive assertions pass.

## Step 8: Complete Route, Action, and Engineering Regression Coverage

**Stories**: STR-US-01 through STR-US-06

- [x] Test switching among all three themes in single-page and multi-page modes without reload.
- [x] Test valid current-section, local-journal route, layout mode, color mode, and persisted choice behavior across theme changes.
- [x] Test resume, project, certificate, contact, social, external, journal, layout, color-mode, and selector actions where existing coverage is insufficient.
- [x] Assert every enabled navigation entry renders the selected theme's custom section without an Engineering visible-component fallback.
- [x] Assert Engineering retains its shell, Hero, section structure, controls, root styling, and behavior apart from the three-row selector.
- [x] Verify selector keyboard behavior, stable focus, and semantic selected state without a visible tick/check icon.
- [x] Run focused registry, selection, App, Business, Artistic, route, action, and Engineering tests.
- [x] Mark Step 8 complete immediately after all integration groups pass.

## Step 9: Update the Beginner README and Active Documentation

**Stories**: STR-US-01, STR-US-04, STR-US-06

- [x] Update the README to describe exactly Engineering, Business, and Artistic in non-technical language.
- [x] Remove Neutral selection, customization, path, and screenshot references.
- [x] Explain that an obsolete saved Neutral preference safely opens Engineering where useful, without adding technical clutter.
- [x] Keep the approved beginner setup, local run, troubleshooting, content-editing, customization, verification, and GitHub Pages guidance accurate.
- [x] Confirm `src/data/artistic.ts` is not documented and shared data files remain the only personal-content editing path.
- [x] Verify every command, path, heading, internal link, code fence, and theme name against the final repository.
- [x] Mark Step 9 complete after README formatting and reference checks pass.

## Step 10: Run Complete Automated and Browser Verification

**Stories**: STR-US-01 through STR-US-06

- [x] Run focused Business, Artistic, registry, selection, App, route, action, content, and Engineering tests.
- [x] Run the complete Vitest suite, ESLint, TypeScript/Vite production build, changed-file Prettier, stale-reference searches, and `git diff --check`.
- [x] Start or reuse the local Vite server and inspect Engineering, Business, and Artistic at representative mobile, tablet, laptop, and wide-desktop viewports in light and dark modes.
- [x] Inspect single-page, multi-page, every canonical section, local journal post, missing journal post, selector menus, navigation, focus, actions, images, and reduced-motion behavior.
- [x] Confirm Business and Artistic are consistently polished across every section and visibly distinct from Engineering and each other.
- [x] Confirm backgrounds are beautiful and identifiable without reducing readability, interaction clarity, responsive stability, or startup performance.
- [x] Record pre-existing versus new warnings and correct every in-scope regression before continuing.
- [x] Mark Step 10 complete only when all automated and representative browser checks pass or an evidenced external limitation is documented.

## Step 11: Complete Traceability and Implementation Evidence

**Stories**: STR-US-01 through STR-US-06

- [ ] Update STR user-story acceptance checkboxes only for outcomes backed by implementation and verification evidence.
- [ ] Update this plan checkbox immediately after every completed sub-step and step.
- [x] Create `aidlc-docs/construction/sleek-three-theme-redesign/code/code-generation-summary.md` listing modified, created, deleted, and preserved files.
- [x] Record test, lint, build, formatting, stale-reference, contrast, responsive, accessibility, browser, and performance evidence.
- [x] Map implemented outcomes to STR-01 through STR-32, STR-NFR-01 through STR-NFR-10, and STR-US-01 through STR-US-06.
- [x] Confirm no duplicate files, runtime dependencies, infrastructure changes, theme-only personal data, or unapproved scope were introduced.
- [x] Update state, index, audit, and the execution plan in the same interaction.
- [x] Present the standardized Code Generation completion gate for explicit approval before Build and Test.
- [ ] Mark Step 11 complete after the summary and approval prompt are recorded.

## Step 12: Apply Business Readability Refinements

**Requirements**: STR-33 through STR-38  
**Stories**: STR-US-02, STR-US-05, STR-US-06

- [x] Reopen the Code Generation review gate, log the complete change request, and add this refinement to active requirements and state.
- [x] Add focused Business presentation assertions for structured Education and Experience details, uniform gallery cards, aligned journal video cards, reduced section headings, and compact direct-contact typography hooks.
- [x] Add a Business-local labeled-detail renderer that separates an optional leading label from its value while preserving the exact shared source string for accessible naming and testing.
- [x] Apply the structured detail treatment to Education and Professional Experience with semantic bullet lists, spacing, and theme-token label emphasis.
- [x] Reduce Business section heading sizes responsively without changing Home, Engineering, or Artistic typography.
- [x] Equalize Learning Journey card and image dimensions across all gallery entries.
- [x] Equalize Journal video-card media, body, description, and action alignment across each row.
- [x] Reduce Direct Contact label, email, location, and social-link typography responsively and prevent overflow.
- [x] Run focused tests first, then complete Vitest, ESLint, TypeScript/Vite build, Prettier, stale-reference, and diff checks.
- [x] Inspect representative Business desktop and mobile renders, update traceability evidence, and return to the standardized Code Generation review gate.

## Step 13: Extend Numbered Detail Formatting to Journal and Credentials

**Requirements**: STR-39 and STR-40  
**Stories**: STR-US-02 and STR-US-05

- [x] Reopen the Code Generation review gate and record the complete follow-up request in requirements, state, plan, and audit artifacts.
- [x] Add focused failing assertions for numbered Journal and Credential Register detail rows.
- [x] Extend the existing Business detail-list test identifier contract without weakening its theme-local boundary.
- [x] Format Journal video descriptions and writing publication details as numbered rows with highlighted labels.
- [x] Format Credential Register issuer, credential type, and description as numbered rows with highlighted labels.
- [x] Refine Journal and Credential Register layout styles so the new detail rows remain aligned and responsive.
- [x] Run focused tests first, then complete Vitest, ESLint, TypeScript/Vite build, Prettier, stale-reference, and diff checks.
- [x] Inspect representative Business Journal and Credential Register renders, update traceability evidence, and return to the standardized Code Generation review gate.

## Step 14: Simplify Journal and Credential Detail Formatting

**Requirements**: STR-39 and STR-40  
**Stories**: STR-US-02 and STR-US-05

- [x] Reopen the Code Generation review gate and record the complete formatting correction in requirements, state, plan, and audit artifacts.
- [x] Add focused failing assertions for compact highlighted text and the absence of Journal/Credential numbered detail rows.
- [x] Replace Journal numbered detail lists with compact label/value typography while preserving every shared value.
- [x] Replace Credential Register numbered detail lists with compact label/value typography while preserving every shared value.
- [x] Remove Journal and Credential test-prefix support from the numbered Business detail-list contract so it remains Education/Experience-only.
- [x] Refine scoped CSS for readable inline labels, balanced spacing, aligned cards, and responsive wrapping.
- [x] Run focused and complete automated verification plus formatting, stale-reference, and diff checks.
- [x] Inspect the revised Journal and Credential Register, update traceability evidence, and return to the standardized Code Generation review gate.

## Step 15: Align Cross-Theme Names and Add Business Certificate Previews

**Requirements**: STR-41 and STR-42  
**Stories**: STR-US-01, STR-US-02, STR-US-03, and STR-US-06

- [x] Reopen the Code Generation review gate and record the complete naming and certificate-preview request in requirements, state, plan, and audit artifacts.
- [x] Add focused failing assertions for canonical section eyebrows/titles, shared Journal and Certificate Gallery subsection names, removed Credential Register wording, and Business PDF previews.
- [x] Centralize Engineering Journal, Certificate Gallery, and contact-channel subsection labels in shared portfolio content and keep Engineering visually unchanged.
- [x] Replace Business theme-specific section kickers and subsection names with the shared Engineering wording.
- [x] Add the shared Engineering section/subsection names to Artistic where its composition previously omitted or replaced them.
- [x] Recompose Business certificates as responsive preview cards with embedded first-page PDFs, compact details, fallback copy, and accessible open-PDF links.
- [x] Update scoped Business and Artistic styles without making their section layouts resemble Engineering.
- [x] Run focused and complete Vitest, ESLint, TypeScript/Vite build, Prettier, stale-wording, and diff checks.
- [x] Inspect representative Business Certificate Gallery and cross-theme section/subsection labels, update traceability evidence, and return to the standardized Code Generation review gate.

## Step 16: Temporarily Hide Artistic from the Style Selector

**Requirements**: STR-43  
**Stories**: STR-US-01 and STR-US-06

- [x] Reopen the Code Generation review gate and record the complete UI-only availability request in requirements, state, plan, and audit artifacts.
- [x] Add a focused failing assertion that the runtime registry retains Artistic while the selector option list exposes only Engineering and Business.
- [x] Add a dedicated reversible selectable-template ID list while preserving all Artistic metadata and the three-template registry.
- [x] Update selector integration assertions for two visible options without weakening direct Artistic rendering, route, layout, journal, naming, or persistence coverage.
- [x] Update the beginner README to describe two currently visible choices and the preserved hidden Artistic implementation.
- [x] Run focused and complete Vitest, ESLint, TypeScript/Vite build, Prettier, hidden-option, preserved-source, and diff checks.
- [x] Inspect the selector in Engineering and Business, update traceability evidence, and return to the standardized Code Generation review gate.

## Story Traceability

| Story     | Primary implementation steps            |
| --------- | --------------------------------------- |
| STR-US-01 | Steps 2, 8, 9, 10, 11, 15, 16           |
| STR-US-02 | Steps 3, 4, 6, 7, 8, 10, 11, 13, 14, 15 |
| STR-US-03 | Steps 3, 5, 6, 7, 8, 10, 11, 15         |
| STR-US-04 | Steps 1, 3, 4, 5, 9, 10, 11             |
| STR-US-05 | Steps 2, 6, 7, 8, 10, 11, 13, 14        |
| STR-US-06 | Steps 1 through 16                      |

## Quality Gates

- **Behavior**: Exact three-theme registry, two-option selector availability, obsolete-Neutral fallback, persistence, routes, layouts, actions, and local journal behavior.
- **Originality**: Complete theme-owned component identities and browser-reviewed visible composition for every Business and Artistic section.
- **Content integrity**: Shared data only, no unsupported Business claims, no Artistic-only personal prose, and no restored Artistic data module.
- **Accessibility**: Semantic headings, keyboard use, visible focus, selected states, focus transfer, meaningful image alternatives, contrast, and reduced motion.
- **Responsive quality**: No clipped text, overlap, unstable media or controls, inaccessible navigation, or unintended horizontal overflow.
- **Isolation and performance**: Root-scoped CSS, efficient decorative layers, no cross-theme leakage, no large decorative download, and no material startup regression.
- **Engineering regression**: Engineering changes only through the reduced selector choice.
- **Static quality**: Focused and complete Vitest, ESLint, TypeScript/Vite build, changed-file Prettier, stale-reference checks, and `git diff --check`.
- **Deployment**: Static GitHub Pages-compatible Vite output with no infrastructure change.

## Rollback Boundaries

1. Three-theme contract and Neutral removal.
2. Business component map and theme stylesheet.
3. Artistic component map and theme stylesheet.
4. Theme-owned journal views.
5. Integration tests and README.
6. AI-DLC evidence only.

These boundaries are logical patches within the current dirty worktree. No reset, checkout, destructive cleanup, or overwrite of unrelated user changes is authorized.

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to Code Generation planning.       |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |

## Content Validation

| Check                      | Result                                                                     |
| -------------------------- | -------------------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                                                   |
| Markdown structure         | Valid headings, tables, lists, checkboxes, and inline code                 |
| Plan sequence              | Sixteen numbered executable steps with explicit completion tracking        |
| Traceability               | STR-US-01 through STR-US-06 mapped to implementation and quality gates     |
| File boundary              | Application paths at workspace root; Markdown evidence under `aidlc-docs/` |
