# User Stories - Sleek Three-Theme Redesign

> **Status: Approved on 2026-08-25.** Acceptance checkboxes describe implementation outcomes and remain open until verified during Construction.

## STR-US-01: Three-Theme Choice and Safe Neutral Recovery

**As a** portfolio visitor,

**I want** to choose among Engineering, Business, and Artistic and recover safely from an obsolete Neutral preference,

**so that** I always receive a complete presentation without a broken page or confusing fourth option.

**Personas**: Portfolio Visitor, Template Maintainer  
**Requirements**: STR-01 through STR-04, STR-31, STR-NFR-08

### Acceptance Criteria

- [ ] The typed template ID, runtime registry, selector, source configuration, validation utility, README, and active tests expose exactly Engineering, Business, and Artistic.
- [ ] Neutral is absent from runtime registration, selector metadata, source configuration options, component source, active theme CSS, active tests, and the root README.
- [ ] A browser preference containing `neutral` is invalid and resolves to Engineering without an error, blank page, or broken route.
- [ ] Engineering remains visually and behaviorally unchanged except that its selector offers three choices.
- [ ] Historical AI-DLC records may retain Neutral references without making Neutral active again.
- [ ] The README explains the final theme set and obsolete-Neutral fallback in beginner-friendly language where useful.

## STR-US-02: Complete Business Editorial Casebook

**As a** portfolio visitor,

**I want** Business to present every part of the portfolio as an original editorial casebook with architectural depth,

**so that** I can scan credible evidence in a polished experience that does not resemble Engineering.

**Personas**: Portfolio Visitor, Portfolio Author, Template Maintainer  
**Requirements**: STR-06 through STR-18, STR-29, STR-30, STR-NFR-01 through STR-NFR-07

### Acceptance Criteria

- [ ] Business provides its own Home, About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, Contact, and local journal-post compositions with no visible fallback to an Engineering section.
- [ ] Its compact header and contents system, visible hierarchy, spatial rhythm, framing, surfaces, and patterns are recognizably original rather than Engineering navigation, shells, cards, or terminal motifs.
- [ ] Home uses a typographic split introduction with concise evidence and shared profile actions.
- [ ] About, Education, Experience, Awards, Skills, and Contact use appropriate editorial chapters, ledgers, evidence bands, or summary compositions instead of repeating one card system.
- [ ] Projects use alternating media-led case studies with the real title, description, technologies, alternative text, and supported actions for each project.
- [ ] Gallery, Journal, and local journal posts use publication-style compositions while retaining complete media, navigation, and reading behavior.
- [ ] Labels and framing do not fabricate executive, client, review-board, commercial, performance, or other unsupported claims.
- [ ] Light mode uses a readable warm-ivory architectural foundation with restrained perspective or drafting lines and soft light.
- [ ] Dark mode uses a readable deep-ink architectural foundation with controlled spotlights, restrained translucent depth, and clear content surfaces.
- [ ] Background effects are fixed or naturally page-flowing, do not use scroll-linked behavior, and remain smooth on representative mobile and desktop devices.
- [ ] Normal text, large text, UI boundaries, focus, media, and headings retain required contrast and clarity over every background layer.
- [ ] Business remains polished across every section in both color modes without clipping, overlap, unintended overflow, or cross-theme CSS leakage.

## STR-US-03: Complete Artistic Curated Gallery

**As a** portfolio visitor,

**I want** Artistic to present shared portfolio content as an original curated gallery with a luminous canvas,

**so that** I can appreciate the author's real work without Engineering-derived sections or invented personal narration.

**Personas**: Portfolio Visitor, Portfolio Author, Template Maintainer  
**Requirements**: STR-06 through STR-09, STR-19 through STR-30, STR-NFR-01 through STR-NFR-07

### Acceptance Criteria

- [ ] Artistic provides its own Home, About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, Contact, and local journal-post compositions with no visible fallback to an Engineering section.
- [ ] Its minimal navigation, visible hierarchy, asymmetric composition, spatial rhythm, framing, surfaces, and catalogue patterns are recognizably original rather than Engineering navigation, shells, cards, or terminal motifs.
- [ ] Home is a stable layered image-led composition using real shared profile, project, or gallery media with meaningful alternatives.
- [ ] About, Education, Experience, Awards, Skills, and Contact use varied asymmetric editorial or gallery-catalogue compositions with generous space instead of repeating one card system.
- [ ] Projects present project-owned media as curated catalogue works with real titles, descriptions, technologies, alternative text, and supported actions.
- [ ] Gallery, Journal, and local journal posts use original exhibition or publication compositions while retaining complete media, navigation, and reading behavior.
- [ ] Artistic renders only content available from shared profile, hero, section, education, experience, award, project, gallery, writing, skill, certificate, and contact sources.
- [ ] The former slogan `Learning in public, making things with care.`, notebook introduction, interests, learning lists, hobbies, goals, and co-located activity copy do not render unless the same values exist in shared content.
- [ ] Artistic adds no personal slogan, descriptive biography, narrative claim, or achievement; only short navigation, orientation, control, numbering, and style labels may be theme-specific.
- [ ] Light mode uses readable soft color washes, organic shapes, subtle grain, and calm neutral reading surfaces.
- [ ] Dark mode uses readable deep surfaces and controlled diffused color while keeping artwork and content dominant.
- [ ] Background decoration does not obscure media or headings, resemble an interactive control, cause overflow, reduce focus visibility, or leak into other themes.
- [ ] Artistic remains polished across every section in both color modes and uses restrained, reduced-motion-safe effects without scroll hijacking.

## STR-US-04: One Truthful Shared Content Source

**As a** portfolio author,

**I want** all three themes to present one shared set of accurate portfolio information,

**so that** I can update my site without maintaining theme-specific personal stories or risking fabricated content.

**Personas**: Portfolio Author, Template Maintainer  
**Requirements**: STR-07, STR-08, STR-15, STR-23 through STR-25, STR-31, STR-32

### Acceptance Criteria

- [ ] Engineering, Business, and Artistic consume the same shared profile, education, experience, award, project, gallery, writing, skill, certificate, and contact sources where applicable.
- [ ] Business and Artistic may reuse shared data and behavioral utilities while keeping their visible DOM composition and visual presentation independent from Engineering.
- [ ] The deleted `src/data/artistic.ts` module is not restored and no replacement theme-only personal-content source is introduced.
- [ ] Business and Artistic do not add unsupported achievements, personal claims, biographies, slogans, commercial evidence, or narrative facts.
- [ ] Removing or changing shared content updates its relevant presentations without requiring duplicate edits in theme components.
- [ ] The beginner README identifies the real customization sources and exactly three available styles without obsolete Artistic-data instructions.
- [ ] The shared-content design adds no backend, database, CMS, authentication flow, or runtime dependency.

## STR-US-05: Preserve Context and Actions Across Themes

**As a** portfolio visitor,

**I want** theme changes to preserve my location, viewing preferences, and supported actions,

**so that** comparing presentations does not interrupt my portfolio journey.

**Personas**: Portfolio Visitor, Portfolio Author, Template Maintainer  
**Requirements**: STR-05, STR-29, STR-30, STR-NFR-03, STR-NFR-05, STR-NFR-08, STR-NFR-10

### Acceptance Criteria

- [ ] Switching among the three themes changes the full presentation without a page reload.
- [ ] A valid section hash or local journal route remains active when the destination theme supports that content.
- [ ] Single-page or multi-page layout mode, light or dark color mode, and valid browser persistence remain intact.
- [ ] Resume downloads, project actions, certificate actions, contact actions, social links, external links, and local writing behavior remain functional.
- [ ] Each theme transfers focus appropriately after navigation and preserves logical headings, keyboard operation, selected-state semantics, meaningful image alternatives, and visible focus.
- [ ] Restrained motion respects `prefers-reduced-motion`; navigation and content remain usable with animation disabled.
- [ ] Representative mobile, tablet, laptop, and wide-desktop journeys show stable navigation and controls without clipping, overlap, or unintended horizontal scrolling.
- [ ] The shared behavior remains compatible with the existing static GitHub Pages deployment model.

## STR-US-06: Cross-Theme Quality and Engineering Stability

**As a** template maintainer,

**I want** independent Business and Artistic designs to preserve Engineering and the site's quality boundaries,

**so that** visual ambition does not make the portfolio inaccessible, slow, fragile, or difficult to maintain.

**Personas**: Portfolio Visitor, Portfolio Author, Template Maintainer  
**Requirements**: STR-04, STR-06 through STR-09, STR-30 through STR-32, STR-NFR-01 through STR-NFR-10

### Acceptance Criteria

- [ ] Engineering regression checks confirm no visual or behavioral change beyond the three-choice selector.
- [ ] Business and Artistic each maintain a complete custom section map, and focused checks prevent an Engineering component from rendering as their visible section implementation.
- [ ] Theme selectors, CSS variables, background layers, and component styles remain scoped so no theme changes another theme's presentation.
- [ ] Normal text meets at least 4.5:1 contrast, while large text and essential UI boundaries meet at least 3:1 in both color modes.
- [ ] Decorative layers never reduce reading contrast, focus visibility, media clarity, or control discoverability.
- [ ] Every Business and Artistic section receives comparable visual care rather than concentrating polish only on Home, About, and Projects.
- [ ] Backgrounds use efficient CSS and existing bundled media where practical, introduce no large decorative download, and do not materially regress startup performance.
- [ ] The system adds no runtime dependency, backend, database, CMS, authentication flow, deployment resource, or custom scrolling engine.
- [ ] Focused verification covers the three-ID registry, obsolete-Neutral fallback, route continuity, custom section completeness, Artistic copy boundaries, backgrounds, accessibility, responsive layouts, color contrast, and Engineering stability.
- [ ] The complete Vitest suite, ESLint, TypeScript/Vite build, changed-file formatting, stale-reference checks, and representative browser inspection pass before completion.
- [ ] The production output remains a static GitHub Pages-compatible Vite application.

## INVEST Review

| Story     | Independent | Negotiable | Valuable | Estimable | Small | Testable |
| --------- | ----------- | ---------- | -------- | --------- | ----- | -------- |
| STR-US-01 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| STR-US-02 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| STR-US-03 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| STR-US-04 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| STR-US-05 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| STR-US-06 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |

Each story owns a distinct user-observable outcome. Business and Artistic can be reviewed independently, while shared-content, visitor-context, and quality stories define explicit cross-theme contracts.

## Requirements Traceability

| Requirement group             | Covered by                      |
| ----------------------------- | ------------------------------- |
| STR-01 through STR-03         | STR-US-01                       |
| STR-04                        | STR-US-01, STR-US-06            |
| STR-05                        | STR-US-05                       |
| STR-06 through STR-09         | STR-US-02, STR-US-03, STR-US-06 |
| STR-10 through STR-18         | STR-US-02                       |
| STR-19 through STR-28         | STR-US-03                       |
| STR-29 through STR-30         | STR-US-02, STR-US-03, STR-US-05 |
| STR-31                        | STR-US-01, STR-US-04, STR-US-06 |
| STR-32                        | STR-US-04, STR-US-06            |
| STR-NFR-01 through STR-NFR-02 | STR-US-02, STR-US-03, STR-US-06 |
| STR-NFR-03                    | STR-US-02, STR-US-03, STR-US-05 |
| STR-NFR-04 through STR-NFR-07 | STR-US-02, STR-US-03, STR-US-06 |
| STR-NFR-08                    | STR-US-01, STR-US-05, STR-US-06 |
| STR-NFR-09 through STR-NFR-10 | STR-US-06                       |

## Content Validation

| Check                      | Result                                                          |
| -------------------------- | --------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                                        |
| Markdown structure         | Valid headings, checklists, tables, and inline code             |
| Requirement coverage       | STR-01–32 and STR-NFR-01–10 are mapped without gaps             |
| Implementation status      | Acceptance criteria remain open until Construction verification |

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to story generation.               |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |
