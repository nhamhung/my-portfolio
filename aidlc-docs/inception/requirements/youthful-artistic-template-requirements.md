# Requirements - Youthful Themes and Artistic Student Template

> **Status: Approved on 2026-08-05; content-module removal and README simplification amendment approved and implemented on 2026-08-24.** Generated from the validated A/A/A/A/A/B/C requirement decisions and the later request to remove the redundant Artistic data module without changing website content.

## Amendment - Remove the Artistic Data Module Without Content Changes

### Intent Analysis

- **User request**: Remove `src/data/artistic.ts` because the other templates do not require a template-specific data file, while preserving the website's content.
- **Request type**: Brownfield refactoring and simplification.
- **Scope**: Remove one data module and update its consumers, aggregate exports, types where appropriate, tests, and student documentation.
- **Complexity**: Simple. The module has a small, known consumer set, but rendered copy, section visibility, and all four templates require regression protection.
- **Requirements depth**: Minimal. The requested outcome and non-regression boundary are explicit, so no clarification questions are required.

### Amendment Requirements

| ID         | Requirement                                                                                                                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| YAT-REM-01 | Delete `src/data/artistic.ts` and remove every import, export, type dependency, test dependency, and documentation instruction that assumes the file exists.                                                                                                    |
| YAT-REM-02 | Preserve the currently rendered Artistic introduction, interests, learning, hobbies, activities, and goals content unless an existing shared source already provides the same content.                                                                          |
| YAT-REM-03 | Rehome any still-required content in an existing appropriate module; do not create a renamed replacement file whose sole purpose is to hold Artistic-only content.                                                                                              |
| YAT-REM-04 | Preserve Artistic section visibility behavior: Activities remains visible when shared experience or the preserved activity content exists, and Awards remains conditional on shared awards.                                                                     |
| YAT-REM-05 | Preserve Engineering, Neutral, Business, and Artistic rendering, navigation, routing, layout switching, template persistence, and static deployment behavior.                                                                                                   |
| YAT-REM-06 | Update tests to assert the preserved user-visible Artistic content and behavior without importing from the deleted module.                                                                                                                                      |
| YAT-REM-07 | Update the README so customization guidance points only to sources that continue to exist and does not advertise a separate Artistic data file.                                                                                                                 |
| YAT-REM-08 | Simplify the README for non-technical portfolio owners: lead with the common tasks, use plain language, keep commands copyable, retain essential cross-platform setup and publishing guidance, and move or remove implementation detail that users do not need. |

### Superseded Requirements

- YAT-12 is replaced by YAT-REM-01 through YAT-REM-03. A separate `src/data/artistic.ts` file is no longer required or permitted.
- YAT-NFR-08 is replaced by the maintainability boundary in YAT-REM-03 and YAT-REM-06.
- Original acceptance criteria 8 and 15 are replaced by the amendment acceptance criteria below.

### Amendment Acceptance Criteria

1. `src/data/artistic.ts` no longer exists and repository search finds no source, test, or README reference to it.
2. Artistic renders the same introduction, interest, learning, hobby, activity, and goal text that was visible immediately before the refactor.
3. Artistic Activities and Awards retain their current conditional visibility behavior.
4. Tests validate user-visible Artistic output through shared or component-facing behavior rather than importing a deleted template-specific data module.
5. The README accurately explains how to edit the sources that remain.
6. A non-technical reader can follow a concise path to preview, customize, verify, and publish the portfolio without first understanding the framework architecture.
7. The complete automated test suite, ESLint, TypeScript/Vite build, and formatting checks pass with no regression across any template.

### Amendment Stage Assessment

- **User Stories**: Skipped because this is an internal refactor with an explicit zero-content-change boundary and no new user journey.
- **Application Design**: Expected to be skipped because no new component, service, route, or business rule is required.
- **Units Generation**: Expected to be skipped because the change is one cohesive UI/data cleanup unit.
- **Security Baseline**: Disabled by the existing project decision; no new security boundary is introduced.
- **Property-Based Testing**: Disabled by the existing project decision; focused regression tests are proportionate.

### Amendment Content Validation

| Check                                  | Result                                         |
| -------------------------------------- | ---------------------------------------------- |
| Mermaid diagrams                       | Not used                                       |
| ASCII diagrams                         | Not used                                       |
| Markdown tables                        | Valid simple pipe tables                       |
| Code identifiers                       | Formatted as inline code                       |
| Application and documentation boundary | Application code remains outside `aidlc-docs/` |

## Intent Analysis

- **User request**: Refresh Neutral and Business with more youthful and energetic color systems, and add an Artistic portfolio option for secondary and high school students who may have limited formal experience.
- **Request type**: Brownfield presentation enhancement and new user-facing template.
- **Scope**: Template registry and selector, scoped Neutral and Business palettes, a new Artistic shell and selected section compositions, optional student-life data, template-aware empty-section handling, tests, and student documentation.
- **Complexity**: Moderate because a fourth layout must integrate with shared routing, persistence, color mode, content, and responsive behavior without changing Engineering.
- **Requirements depth**: Standard.

## Product Goal

Students can choose among four genuinely different ways to express the same portfolio foundation. Neutral and Business feel lively without becoming distracting, while Artistic gives younger students a credible portfolio built around learning, interests, activities, personal work, and growth instead of requiring extensive employment history.

## Approved Direction

| Area                             | Decision                                                                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Neutral palette                  | Calm light and dark surfaces with sky-blue and coral accents                                                                                             |
| Business palette                 | Calm light and dark surfaces with teal and sunflower accents                                                                                             |
| Artistic structure               | Creative Notebook with compact top navigation, an image-led collage introduction, alternating content bands, and scrapbook-inspired project compositions |
| Student content                  | One easy-to-edit data file for interests, current learning, hobbies, clubs, and personal goals                                                           |
| Sparse formal content            | Prioritize student-life content and hide empty formal sections without leaving empty navigation or panels                                                |
| Motion                           | Gentle entrance and hover motion using existing utilities and reduced-motion support                                                                     |
| Initial default                  | Engineering remains the default; `artistic` becomes a valid source and persisted choice                                                                  |
| Security extension               | Disabled for this static presentation-only change                                                                                                        |
| Property-based testing extension | Disabled; focused component, utility, accessibility, and responsive tests remain appropriate                                                             |

## Functional Requirements

| ID     | Requirement                                                                                                                                                                                                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| YAT-01 | The typed template registry and Portfolio style selector must expose exactly four choices: `engineering`, `neutral`, `business`, and `artistic`.                                                                                                                                                             |
| YAT-02 | Engineering must remain visually and behaviorally unchanged apart from automatically listing Artistic in the shared selector.                                                                                                                                                                                |
| YAT-03 | `src/data/template.ts` must continue to define the initial source default, remain set to Engineering, and accept Artistic as a valid typed choice.                                                                                                                                                           |
| YAT-04 | Existing valid Engineering, Neutral, and Business browser preferences must remain valid; Artistic selections must persist through the same local-storage mechanism, while invalid values continue to fall back safely.                                                                                       |
| YAT-05 | Neutral must use a youthful sky-blue and coral accent system on calm surfaces in both color modes without changing its approved learning-journal structure.                                                                                                                                                  |
| YAT-06 | Business must use a youthful teal and sunflower accent system on calm surfaces in both color modes without changing its approved student-showcase structure.                                                                                                                                                 |
| YAT-07 | Neutral and Business color changes must remain scoped to their templates and use accent color selectively for navigation state, actions, dividers, labels, and small supporting surfaces rather than saturating entire pages.                                                                                |
| YAT-08 | Artistic must provide its own Shell, Hero, About, Projects, and student-oriented section presentation where needed, while reusing the established template contract and shared App ownership.                                                                                                                |
| YAT-09 | Artistic must use a compact responsive top navigation rather than the Engineering terminal navigation, Neutral magazine navigation, or Business contents rail.                                                                                                                                               |
| YAT-10 | Artistic's first viewport must identify the student clearly through an image-led collage using real profile, gallery, or project media; include concise student-oriented copy and preserve existing primary actions.                                                                                         |
| YAT-11 | Artistic must use alternating unframed content bands and simple scrapbook-inspired compositions with stable dimensions; decoration must not obscure content or depend on custom scrolling.                                                                                                                   |
| YAT-12 | A new `src/data/artistic.ts` file must provide clearly typed, optional, student-editable content for interests, current learning, hobbies, clubs or activities, and personal goals.                                                                                                                          |
| YAT-13 | Artistic must prioritize the student-oriented data while continuing to reuse shared profile, education, projects, gallery, journal, skills, certificates, and contact content where present.                                                                                                                 |
| YAT-14 | Existing Experience and Awards content must remain available in Artistic when populated, using age-appropriate labels; when a formal source and its relevant student-oriented substitute are both empty, Artistic must omit the corresponding navigation item and section rather than render an empty panel. |
| YAT-15 | Artistic must not fabricate employment, awards, metrics, testimonials, or achievements for students with sparse formal content.                                                                                                                                                                              |
| YAT-16 | Artistic Projects must present schoolwork, experiments, creative work, and personal projects as valid portfolio evidence, using existing project images, alternative text, technologies, and actions.                                                                                                        |
| YAT-17 | Existing single-page and multi-page modes, section hashes, local journal routes, color-mode controls, resume downloads, project actions, contact actions, and external links must remain functional across all four templates.                                                                               |
| YAT-18 | Switching among all four templates must preserve the current valid section or local journal route and the current layout mode without a full-page reload.                                                                                                                                                    |
| YAT-19 | The Portfolio style selector must show an Artistic icon, label, and concise student-oriented description, preserve keyboard behavior and semantic selected state, and continue to display no tick or check icon.                                                                                             |
| YAT-20 | The README must explain all four template choices, how to set Artistic as the source default, and where students edit Artistic-specific interests and activities.                                                                                                                                            |

## Presentation Requirements

### Neutral: Bright Learning Journal

- Preserve the full-width masthead, editorial Hero, modular About composition, project dispatches, and compact visual archive.
- Use sky blue as the primary orienting accent and coral as a supporting energetic accent.
- Keep primary text on calm high-contrast surfaces; avoid full-section blue or coral fills behind long-form text.
- Retain the approved medium portrait and friendly student-journal wording.

### Business: Student Project Showcase

- Preserve the structured header, sticky desktop contents rail, numbered chapters, student story, and project-case organization.
- Use teal as the primary orienting accent and sunflower yellow for small highlights, numbering, and selected supporting details.
- Keep the layout organized but approachable; avoid corporate, executive, consulting, and review-board presentation cues.
- Maintain sufficient clearance around `CASE` labels and readable project evidence.

### Artistic: Creative Notebook

- Use a compact top bar with a distinct wordmark, section navigation, style selector, layout control, and color-mode control.
- Build the Hero around a coherent collage of real student media with fixed responsive frames and no decorative card enclosing the entire experience.
- Use alternating full-width bands, varied but repeatable alignment, modest paper or notebook cues, and a multi-color palette balanced by neutral reading surfaces.
- Present interests, current learning, hobbies, clubs, activities, and goals as meaningful evidence of curiosity and growth.
- Let education, projects, gallery work, journals, skills, and contact remain useful even when formal employment and awards are absent.
- Use gentle reveal and hover motion only where it supports hierarchy; preserve full usability when reduced motion is enabled.

## Non-Functional Requirements

| ID         | Requirement                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| YAT-NFR-01 | Normal text must meet at least 4.5:1 contrast and large text and essential UI boundaries must meet at least 3:1 in both light and dark modes.                                                                      |
| YAT-NFR-02 | Keyboard navigation, semantic headings, meaningful image alternatives, visible focus, selected-state semantics, and logical DOM order must remain available.                                                       |
| YAT-NFR-03 | Motion must use existing utilities, avoid scroll hijacking, and become static or substantially reduced under `prefers-reduced-motion`.                                                                             |
| YAT-NFR-04 | Mobile, tablet, laptop, and wide-desktop layouts must avoid clipped text, incoherent overlap, unintended horizontal overflow, and controls that resize when labels or states change.                               |
| YAT-NFR-05 | Template color variables and selectors must remain scoped so no Neutral, Business, or Artistic rule alters another template or Engineering.                                                                        |
| YAT-NFR-06 | The change must add no runtime dependency, backend, database, authentication flow, CMS, custom scrolling engine, or new deployment infrastructure.                                                                 |
| YAT-NFR-07 | Artistic media must use local optimized assets already owned by shared data where practical and must not introduce large atmospheric images that hide the student's actual work.                                   |
| YAT-NFR-08 | Student-editable Artistic data must use a small documented TypeScript shape with representative examples and no component-level content duplication.                                                               |
| YAT-NFR-09 | Focused tests must cover the four-ID registry, selector and persistence behavior, fallback handling, Artistic rendering, template-aware empty sections, route and layout preservation, and Engineering regression. |
| YAT-NFR-10 | The complete test suite, ESLint, TypeScript/Vite production build, formatting checks, and responsive browser inspection must pass before completion.                                                               |
| YAT-NFR-11 | The site must remain a static Vite application deployable through the existing GitHub Pages workflow.                                                                                                              |

## Out of Scope

- Revival of the superseded Artistic Exhibition architecture, horizontal content rails, parallax, scroll-linked animation, full-screen visual indexes, or custom wheel behavior.
- A drag-and-drop editor, browser-based content authoring, CMS, account system, or student data collection service.
- Fabricated sample employment, awards, clients, testimonials, or performance metrics.
- Reworking Engineering or replacing the established Neutral and Business layout structures.
- Reordering the shared application into a separate routing framework.
- Adding a fifth template or shareable template-selection URLs.

## Acceptance Criteria

1. The registry, source configuration, runtime selector, validator, persistence utility, and tests recognize exactly four template IDs.
2. Engineering remains visually and behaviorally unchanged except for the Artistic selector option.
3. Neutral visibly uses restrained sky-blue and coral accents in light and dark modes while preserving its approved structure.
4. Business visibly uses restrained teal and sunflower accents in light and dark modes while preserving its approved structure.
5. Long-form text remains on calm surfaces and meets the approved contrast thresholds; accent color does not dominate entire pages.
6. Artistic has a distinct compact top navigation, collage Hero, alternating content bands, and scrapbook-inspired project presentation.
7. Artistic uses real portfolio media with meaningful alternative text and stable responsive framing.
8. Students can edit interests, current learning, hobbies, clubs or activities, and personal goals in one documented data file.
9. Artistic remains coherent when Experience or Awards is empty and leaves no empty formal panel or dead navigation item.
10. Populated formal content remains available with age-appropriate labels, and no formal achievements are fabricated.
11. Switching among all four templates preserves route, current section, layout mode, actions, and local journal behavior without a reload.
12. The selector identifies Artistic accessibly, persists it, restores it on reload, and shows no visible tick icon.
13. Gentle Artistic motion respects reduced-motion preferences and does not control scrolling.
14. All four templates have no unintended overflow or overlapping text and controls at representative mobile and desktop widths in light and dark modes.
15. The README documents the fourth choice, source configuration, and student-oriented data file accurately.
16. Focused and complete automated checks, production build, and browser inspection pass without an Engineering regression.

## Extension Configuration

| Extension              | Status   | Rationale                                                                                                                            |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | The user selected B; the static UI change introduces no authentication, server, secret, or new data boundary.                        |
| Property-Based Testing | Disabled | The user selected C; focused deterministic tests are proportionate to the registry, visibility, persistence, and rendering behavior. |

## Content Validation

| Check                                  | Result                                         |
| -------------------------------------- | ---------------------------------------------- |
| Mermaid diagrams                       | Not used                                       |
| ASCII diagrams                         | Not used                                       |
| Markdown tables                        | Valid simple pipe tables                       |
| Code identifiers                       | Formatted as inline code                       |
| Application and documentation boundary | Application code remains outside `aidlc-docs/` |
