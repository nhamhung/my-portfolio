# User Stories - Youthful Themes and Artistic Student Template

> **Status: Implemented and verified on 2026-08-05; awaiting Code Generation approval.**

## YAT-US-01: Youthful Neutral Learning-Journal Expression

**As a** student portfolio author,

**I want** Neutral to use an energetic but restrained learning-journal palette,

**so that** my work feels current and personal while long-form content remains comfortable to read.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: YAT-05, YAT-07, YAT-17, YAT-NFR-01, YAT-NFR-04, YAT-NFR-05

### Acceptance Criteria

- [x] Neutral uses sky blue as its primary orienting accent and coral as a supporting accent in light and dark modes.
- [x] Accent color appears selectively in navigation state, actions, dividers, labels, and small supporting surfaces.
- [x] Long-form content remains on calm surfaces with approved text and UI contrast.
- [x] The existing masthead, editorial Hero, modular About, project dispatches, visual archive, and medium portrait remain recognizable.
- [x] Neutral controls, text, images, and sections show no clipping, overlap, or unintended overflow at supported viewports.
- [x] Neutral styling remains isolated from Business, Artistic, and Engineering.

## YAT-US-02: Youthful Business Student-Showcase Expression

**As a** student portfolio author,

**I want** Business to present my projects with lively, approachable structure,

**so that** visitors can scan what I made and learned without the portfolio feeling corporate or overly formal.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: YAT-06, YAT-07, YAT-17, YAT-NFR-01, YAT-NFR-04, YAT-NFR-05

### Acceptance Criteria

- [x] Business uses teal as its primary orienting accent and sunflower yellow for small highlights in light and dark modes.
- [x] Accent color supports navigation, case numbering, actions, and selected details without dominating full reading surfaces.
- [x] The structured header, desktop contents rail, numbered chapters, student story, and project-case organization remain recognizable.
- [x] Student-oriented language and presentation remain free of executive, consulting, and review-board cues.
- [x] `CASE` labels retain comfortable viewport clearance and all content remains readable without overlap or overflow.
- [x] Business styling remains isolated from Neutral, Artistic, and Engineering.

## YAT-US-03: Honest Artistic Creative Notebook

**As a** younger student author,

**I want** Artistic to present my interests, learning, activities, and work as a Creative Notebook,

**so that** I can express who I am without needing an extensive professional history.

**Personas**: Younger Student Author, Student Portfolio Author, Portfolio Visitor  
**Requirements**: YAT-08, YAT-09, YAT-10, YAT-11, YAT-13, YAT-15, YAT-16, YAT-17, YAT-NFR-03, YAT-NFR-07

### Acceptance Criteria

- [x] Artistic uses its own compact responsive top navigation and distinct wordmark.
- [x] The first viewport uses a stable image-led collage of real profile, gallery, or project media with meaningful alternatives.
- [x] Content flows through alternating unframed bands and repeatable scrapbook-inspired project compositions rather than a uniform card grid.
- [x] Interests, learning, hobbies, activities, goals, education, projects, journals, skills, and contact content form a coherent student journey.
- [x] Schoolwork, experiments, creative work, and personal projects are presented as valid evidence using existing project data and actions.
- [x] Artistic never invents employment, awards, metrics, clients, testimonials, or achievements.
- [x] Gentle entrance and hover effects support hierarchy, do not control scrolling, and substantially reduce under reduced-motion preferences.
- [x] Artistic remains visually distinct from Engineering, Neutral, and Business without adding a runtime dependency.

## YAT-US-04: Editable Student-Life Content and Sparse Formal Sections

**As a** younger student author,

**I want** one clear place to edit student-life content and sensible behavior when formal sections are empty,

**so that** maintaining an honest portfolio remains simple at any experience level.

**Personas**: Younger Student Author, Student Portfolio Author  
**Requirements**: YAT-12, YAT-13, YAT-14, YAT-15, YAT-20, YAT-NFR-08

### Acceptance Criteria

- [x] `src/data/artistic.ts` exposes a small typed shape for optional interests, current learning, hobbies, clubs or activities, and personal goals.
- [x] Representative entries are easy to replace or remove without editing Artistic components.
- [x] Artistic prioritizes student-life content while reusing shared profile, education, projects, gallery, journal, skills, certificates, and contact data.
- [x] Populated Experience and Awards remain visible under age-appropriate labels.
- [x] When formal content and its relevant student-oriented substitute are both empty, Artistic omits the corresponding section and navigation item.
- [x] Empty data never produces blank panels, dead links, fabricated placeholders, or invalid current-section state.
- [x] The README explains the fourth template, `artistic` source default, and Artistic-specific data file accurately.

## YAT-US-05: Select and Persist Four Portfolio Styles

**As a** portfolio visitor,

**I want** to select Engineering, Neutral, Business, or Artistic without losing my place,

**so that** I can compare presentations while continuing the same portfolio journey.

**Personas**: Younger Student Author, Student Portfolio Author, Portfolio Visitor  
**Requirements**: YAT-01, YAT-03, YAT-04, YAT-18, YAT-19, YAT-NFR-02, YAT-NFR-09

### Acceptance Criteria

- [x] The typed registry, validator, source configuration, and selector expose exactly Engineering, Neutral, Business, and Artistic.
- [x] Engineering remains the source default, while `artistic` is accepted as a valid configured choice.
- [x] Existing valid saved choices remain valid; Artistic persists and restores through the same local-storage mechanism.
- [x] Invalid stored or configured values continue to resolve safely to Engineering.
- [x] Selecting any style changes the full presentation in place without reloading the page.
- [x] Switching preserves the current valid section or local journal route and the current single-page or multi-page layout mode.
- [x] Artistic has an appropriate icon and student-oriented description in every responsive selector.
- [x] The active row remains keyboard-operable, visibly focused, and semantically selected without showing a tick or check icon.

## YAT-US-06: Shared Quality and Engineering Stability

**As a** student portfolio author,

**I want** the expanded template system to preserve accessibility, responsiveness, maintainability, and deployment behavior,

**so that** gaining another expressive option does not make the portfolio fragile or difficult to use.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: YAT-02, YAT-17, YAT-NFR-01, YAT-NFR-02, YAT-NFR-03, YAT-NFR-04, YAT-NFR-05, YAT-NFR-06, YAT-NFR-09, YAT-NFR-10, YAT-NFR-11

### Acceptance Criteria

- [x] Engineering remains visually and behaviorally unchanged except for listing Artistic in the shared selector.
- [x] All four templates preserve section hashes, local journal routes, color mode, layout mode, resume, project, certificate, contact, social, and external-link actions.
- [x] Semantic headings, image alternatives, visible focus, keyboard operation, selected-state semantics, and logical reading order remain available.
- [x] Normal text meets at least 4.5:1 contrast and large text and essential UI boundaries meet at least 3:1 in both color modes.
- [x] Representative mobile, tablet, laptop, and wide-desktop views show no clipped text, incoherent overlap, unstable controls, or unintended horizontal overflow.
- [x] Template CSS and variables remain scoped and the app adds no backend, CMS, authentication flow, custom scrolling engine, or runtime dependency.
- [x] Focused tests cover registry, persistence, fallback, Artistic rendering, sparse sections, route and layout preservation, and Engineering regression.
- [x] Complete tests, ESLint, TypeScript/Vite build, formatting checks, and responsive browser inspection pass.
- [x] The existing static GitHub Pages deployment model remains unchanged.

## INVEST Review

| Story     | Independent | Negotiable | Valuable | Estimable | Small | Testable |
| --------- | ----------- | ---------- | -------- | --------- | ----- | -------- |
| YAT-US-01 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| YAT-US-02 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| YAT-US-03 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| YAT-US-04 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| YAT-US-05 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |
| YAT-US-06 | Yes         | Yes        | Yes      | Yes       | Yes   | Yes      |

Each story owns a distinct user-observable outcome and can be verified independently while sharing the approved portfolio foundation.

## Requirements Traceability

| Requirement group             | Covered by                                 |
| ----------------------------- | ------------------------------------------ |
| YAT-01 through YAT-04         | YAT-US-05, YAT-US-06                       |
| YAT-05                        | YAT-US-01                                  |
| YAT-06                        | YAT-US-02                                  |
| YAT-07                        | YAT-US-01, YAT-US-02                       |
| YAT-08 through YAT-11         | YAT-US-03                                  |
| YAT-12 through YAT-15         | YAT-US-03, YAT-US-04                       |
| YAT-16                        | YAT-US-03                                  |
| YAT-17                        | YAT-US-01, YAT-US-02, YAT-US-03, YAT-US-06 |
| YAT-18 through YAT-19         | YAT-US-05                                  |
| YAT-20                        | YAT-US-04                                  |
| YAT-NFR-01                    | YAT-US-01, YAT-US-02, YAT-US-06            |
| YAT-NFR-02 through YAT-NFR-03 | YAT-US-03, YAT-US-05, YAT-US-06            |
| YAT-NFR-04 through YAT-NFR-06 | YAT-US-01, YAT-US-02, YAT-US-06            |
| YAT-NFR-07 through YAT-NFR-08 | YAT-US-03, YAT-US-04                       |
| YAT-NFR-09 through YAT-NFR-11 | YAT-US-05, YAT-US-06                       |

## Content Validation

| Check                | Result                                                         |
| -------------------- | -------------------------------------------------------------- |
| Mermaid diagrams     | Not used                                                       |
| ASCII diagrams       | Not used                                                       |
| Markdown structure   | Valid headings, checklists, and tables                         |
| Requirement coverage | All approved functional and non-functional requirements mapped |

## Extension Compliance

| Extension              | Status   | Rationale                                 |
| ---------------------- | -------- | ----------------------------------------- |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis. |
