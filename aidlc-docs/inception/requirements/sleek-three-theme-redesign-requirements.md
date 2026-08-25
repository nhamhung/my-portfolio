# Requirements - Sleek Three-Theme Redesign

> **Status: Approved on 2026-08-25.** Generated from the validated A/A/A/A/A/A/A/A/B/C requirement decisions.

## Intent Analysis

- **User request**: Retain Engineering as the quality benchmark, remove Neutral, redesign Business and Artistic to be equally polished without copying Engineering section designs, give both redesigned themes beautiful original backgrounds, and remove Artistic-only wording that is not shared with the other presentations.
- **Request type**: Brownfield user-facing redesign, template removal, and presentation-contract refinement.
- **Scope**: Template registry and persistence, complete Neutral removal, original Business and Artistic shells and section presentations, light/dark background systems, copy boundaries, tests, README, and AI-DLC documentation.
- **Complexity**: Moderate to high because two themes require custom presentation for every section while shared routing, persistence, content, accessibility, responsive behavior, and Engineering stability remain unchanged.
- **Requirements depth**: Standard with detailed visual, behavioral, and regression acceptance criteria.

## Product Goal

Offer three clearly differentiated, production-quality portfolio presentations. Engineering remains the established technical presentation. Business becomes a polished editorial casebook with architectural depth. Artistic becomes a curated gallery with a luminous canvas. Each presentation uses the same truthful portfolio information, but Business and Artistic must express that information through original section designs rather than Engineering's shared presentation patterns.

## Approved Direction

| Area                             | Decision                                                                                                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Working baseline                 | Keep `src/data/artistic.ts` deleted and retain the simplified beginner README as the starting point                                            |
| Final themes                     | Engineering, Business, and Artistic only                                                                                                       |
| Removed preference               | A saved `neutral` choice becomes invalid and falls back to Engineering                                                                         |
| Business                         | Editorial casebook with split introduction, typographic chapters, evidence bands, alternating project studies, and compact contents            |
| Business background              | Architectural depth using warm ivory or deep ink foundations, subtle perspective lines, soft spotlights, and restrained translucent layers     |
| Artistic                         | Curated gallery with layered image introduction, asymmetric editorial sections, generous space, art-catalogue projects, and minimal navigation |
| Artistic background              | Luminous gallery canvas using soft color washes, organic shapes, subtle grain, and calm neutral reading surfaces                               |
| Section originality              | Every Business and Artistic section must have a theme-specific composition distinct from Engineering                                           |
| Artistic copy                    | Shared portfolio content only, plus short interface labels such as navigation and style name                                                   |
| Motion                           | Restrained entrance and hover effects with reduced-motion support and no custom scrolling                                                      |
| Security extension               | Disabled                                                                                                                                       |
| Property-based testing extension | Disabled                                                                                                                                       |

## Functional Requirements

### Theme Set and Neutral Removal

| ID     | Requirement                                                                                                                                                                                                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-01 | The typed template ID, registry, source configuration, validation utility, direct-rendering support, and tests must retain exactly `engineering`, `business`, and `artistic`; visible selector availability is narrowed by STR-43.                                  |
| STR-02 | Neutral must be removed from runtime registration, selector metadata, source configuration options, component source, Neutral-scoped CSS, active tests, and the root README. Historical AI-DLC audit and decision records may retain Neutral references as history. |
| STR-03 | A browser preference containing `neutral` must be treated as invalid and resolve to Engineering without a runtime error, blank page, or broken route.                                                                                                               |
| STR-04 | Engineering must remain visually and behaviorally unchanged except for the selector reflecting the currently available choices.                                                                                                                                     |
| STR-05 | Switching between selectable themes must preserve the current valid section or journal route, layout mode, color mode, and supported actions without a full-page reload; Artistic must remain directly renderable while hidden.                                     |

### Original Section Design Boundary

| ID     | Requirement                                                                                                                                                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-06 | Business and Artistic must each provide a theme-specific presentation for Home, About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, Contact, and local journal-post views.                                                                          |
| STR-07 | No Business or Artistic section may render the same layout, composition, surface treatment, card system, or presentation pattern as Engineering. Reusing shared data, action utilities, accessibility utilities, media helpers, and application orchestration is allowed. |
| STR-08 | Business and Artistic may share underlying behavior with Engineering, but their visible DOM composition, hierarchy, spatial rhythm, and visual framing must remain recognizably original for every section.                                                               |
| STR-09 | Every enabled navigation entry must resolve to a complete theme-specific section, with no fallback to an Engineering section component.                                                                                                                                   |

### Business Editorial Casebook

| ID     | Requirement                                                                                                                                                                                                                              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-10 | Business must use a compact original header and contents system suited to an editorial casebook rather than Engineering's terminal navigation or the removed Neutral masthead.                                                           |
| STR-11 | Business Home must use a split introduction with strong typography, concise real evidence, and primary actions sourced from the shared profile and hero data.                                                                            |
| STR-12 | Business About, Education, Experience, Awards, Skills, and Contact must use distinct editorial compositions such as evidence bands, structured chapters, ledgers, or summary panels without copying Engineering section shells or cards. |
| STR-13 | Business Projects must use alternating polished case studies with project-owned media, alternative text, technologies, and actions.                                                                                                      |
| STR-14 | Business Gallery, Journal, and local journal-post views must use original casebook or publication-style compositions while preserving all media and writing behavior.                                                                    |
| STR-15 | Business must avoid fabricated executive, client, review-board, performance, or commercial claims; presentation labels must remain appropriate to the actual student and professional content.                                           |

### Business Architectural Background

| ID     | Requirement                                                                                                                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-16 | Business light mode must use a warm ivory architectural foundation with restrained depth, subtle perspective or drafting lines, and soft light that does not reduce text contrast.             |
| STR-17 | Business dark mode must use a deep ink architectural foundation with controlled spotlights, restrained translucent layers, and clear separation between reading surfaces and decorative depth. |
| STR-18 | Business background effects must remain fixed or naturally page-flowing, avoid scroll-linked behavior, and preserve smooth rendering on representative mobile and desktop devices.             |

### Artistic Curated Gallery

| ID     | Requirement                                                                                                                                                                                                                                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-19 | Artistic must use minimal original navigation and a layered image-led Home composition built from real shared profile, project, or gallery media.                                                                                                                                                                           |
| STR-20 | Artistic About, Education, Experience, Awards, Skills, and Contact must use asymmetric editorial or gallery-catalogue compositions with generous space and no Engineering section-shell or card design.                                                                                                                     |
| STR-21 | Artistic Projects must present project-owned media as curated catalogue works with clear titles, descriptions, technologies, alternative text, and actions.                                                                                                                                                                 |
| STR-22 | Artistic Gallery, Journal, and local journal-post views must use original exhibition or publication compositions while retaining complete interaction and reading behavior.                                                                                                                                                 |
| STR-23 | Artistic must render only content already available from shared profile, hero, section, education, experience, awards, projects, gallery, writing, skills, certificates, and contact sources.                                                                                                                               |
| STR-24 | Artistic must remove presentation-only prose and data such as `Learning in public, making things with care.`, the former notebook introduction, interest notes, learning lists, hobby lists, personal-goal lists, and co-located school/community activity copy when those values are not present in shared portfolio data. |
| STR-25 | Artistic may add only short interface labels needed for navigation, orientation, controls, numbering, or the Artistic style name; it must not add personal slogans, descriptive biography, claims, achievements, or narrative sentences.                                                                                    |

### Artistic Luminous Background

| ID     | Requirement                                                                                                                                                                             |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-26 | Artistic light mode must use a luminous gallery canvas with soft layered color washes, organic shapes, subtle grain, and calm neutral surfaces behind reading content.                  |
| STR-27 | Artistic dark mode must reinterpret the luminous canvas with controlled deep surfaces and diffused color while retaining artwork focus, readable text, and a visibly Artistic identity. |
| STR-28 | Artistic background decoration must not obscure media, compete with headings, create misleading interactive affordances, or cause unintended overflow.                                  |

### Shared Behavior and Documentation

| ID     | Requirement                                                                                                                                                                                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| STR-29 | Single-page and multi-page layouts, section hashes, local journal routes, color-mode controls, resume downloads, project actions, contact actions, external links, and browser persistence must remain functional in all three themes.                             |
| STR-30 | Business and Artistic must preserve logical heading order, focus transfer, keyboard access, selected-state semantics, meaningful alternative text, and visible focus indicators.                                                                                   |
| STR-31 | The root README must distinguish the two currently selectable styles from the preserved Artistic implementation, remove Neutral instructions, explain the Engineering fallback for obsolete Neutral preferences where useful, and keep beginner guidance accurate. |
| STR-32 | No new runtime dependency, backend, database, CMS, authentication flow, deployment resource, or custom scrolling engine may be added.                                                                                                                              |

## Non-Functional Requirements

| ID         | Requirement                                                                                                                                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-NFR-01 | Normal text must meet at least 4.5:1 contrast; large text and essential UI boundaries must meet at least 3:1 in both color modes.                                                                                                                                                                   |
| STR-NFR-02 | Decorative gradients, lines, grain, translucent layers, and organic shapes must not reduce content readability or focus visibility.                                                                                                                                                                 |
| STR-NFR-03 | Mobile, tablet, laptop, and wide-desktop layouts must avoid clipped text, unintended horizontal overflow, overlapping controls, inaccessible navigation, and unstable media dimensions.                                                                                                             |
| STR-NFR-04 | Theme CSS variables, backgrounds, and selectors must remain scoped so Business and Artistic cannot alter Engineering or each other.                                                                                                                                                                 |
| STR-NFR-05 | Motion must use restrained existing techniques, respect `prefers-reduced-motion`, avoid scroll hijacking, and leave all content usable without animation.                                                                                                                                           |
| STR-NFR-06 | Background decoration should use efficient CSS and existing bundled media where practical; it must not introduce large decorative downloads or materially regress startup performance.                                                                                                              |
| STR-NFR-07 | Business and Artistic must maintain consistent visual quality across every section rather than concentrating polish only in Home, About, and Projects.                                                                                                                                              |
| STR-NFR-08 | Engineering regression, three-ID registry and two-option selector behavior, obsolete-Neutral fallback, route preservation, custom component completeness, Artistic shared-copy-only behavior, accessibility, backgrounds, responsive layouts, and color contrast must receive focused verification. |
| STR-NFR-09 | The complete Vitest suite, ESLint, TypeScript/Vite build, changed-file formatting, stale-reference checks, and representative browser inspection must pass before completion.                                                                                                                       |
| STR-NFR-10 | The site must remain a static GitHub Pages-compatible Vite application.                                                                                                                                                                                                                             |

## Superseded Active Requirements

- Prior four-theme requirements are superseded wherever they require Neutral to remain registered.
- Prior requirements to preserve the former Artistic notebook introduction, interests, learning, hobbies, goals, or co-located activities are superseded by STR-23 through STR-25.
- The completed deletion of `src/data/artistic.ts` and the simplified README remain valid working-baseline decisions.
- Prior requirements allowing Business or Artistic to reuse shared Engineering section components are superseded by STR-06 through STR-09.

## Out of Scope

- Redesigning Engineering.
- Adding a fourth theme to replace Neutral.
- Fabricating content to fill Business or Artistic compositions.
- Reintroducing a separate Artistic data file.
- A CMS, visual editor, account system, backend, or database.
- Custom wheel behavior, scroll hijacking, parallax, or scroll-linked animation.
- New production infrastructure or deployment automation.

## Acceptance Criteria

1. The registry, source configuration, persistence validator, direct-rendering support, and tests retain Engineering, Business, and Artistic; while STR-43 is active, the visible selector exposes only Engineering and Business.
2. Neutral component source and active CSS are removed, and a stored `neutral` value falls back to Engineering.
3. Engineering remains visually and behaviorally unchanged apart from the removed selector choice.
4. Every Business section and local journal-post view uses a Business-specific composition distinct from Engineering.
5. Every Artistic section and local journal-post view uses an Artistic-specific composition distinct from Engineering.
6. Business presents the approved editorial casebook direction with a readable architectural-depth background in light and dark modes.
7. Artistic presents the approved curated-gallery direction with a readable luminous-canvas background in light and dark modes.
8. Artistic renders no former notebook slogan, introduction, interest, learning, hobby, goal, or activity copy unless the same content exists in a shared source.
9. Business and Artistic use real portfolio media and content without fabricated claims or achievements.
10. All three themes preserve navigation, route, layout, color mode, persistence, actions, and local writing behavior.
11. Keyboard access, headings, focus, alternative text, selected states, contrast, reduced motion, and logical reading order remain valid.
12. Representative mobile and desktop views in both color modes show no clipped text, unintended overflow, obscured content, or unstable controls.
13. Backgrounds remain visually distinctive and attractive without competing with content or materially degrading performance.
14. Focused tests confirm three-theme registration, Neutral fallback, custom section completeness, Artistic copy boundaries, and Engineering regression.
15. Complete automated checks, production build, formatting checks, reference searches, and browser inspection pass.

## User Stories Assessment

User Stories should execute because this amendment removes a visitor choice, changes two complete user-facing presentations, affects author and visitor workflows, and requires observable acceptance criteria across every section.

## Business Readability Refinement - 2026-08-25

The Code Generation review is reopened for six user-specified Business refinements. These requirements do not change the approved three-theme architecture, shared-content boundary, Artistic presentation, Engineering regression boundary, dependencies, or deployment model.

| ID     | Requirement                                                                                                                                                                                                                        |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STR-33 | Business non-Home section headings must be materially smaller while retaining a clear editorial hierarchy at mobile and desktop widths.                                                                                            |
| STR-34 | Business Education details must visually separate labeled facts such as Academic Achievement, Goals & Aspirations, and Relevant Coursework through bullets, spacing, and label emphasis without changing shared content.           |
| STR-35 | Business Professional Experience details must use the same readable separated-detail treatment, including emphasized leading labels when a shared detail contains one.                                                             |
| STR-36 | Business Learning Journey gallery cards and image frames must use consistent dimensions and aligned card structure.                                                                                                                |
| STR-37 | Business Journal video cards, media, titles, descriptions, and actions must align consistently across a row while remaining an original Business composition.                                                                      |
| STR-38 | Business Direct Contact typography, especially the email address, must be reduced to a comfortable responsive size without clipping or overflow.                                                                                   |
| STR-39 | Business Journal video descriptions and writing metadata, summaries, and topics must use compact text formatting with clear font-weight and color separation between labels and values, without numbered or card-like detail rows. |
| STR-40 | Business Credential Register issuer, credential type, and description must use compact text formatting with clear font-weight and color separation between labels and values, without numbered or card-like detail rows.           |
| STR-41 | Engineering, Business, and Artistic must display the same canonical section and subsection names, with Engineering wording as the source of truth; theme-specific layout and styling may remain distinct.                          |
| STR-42 | Business must rename Credential Register to Certificate Gallery and show an embedded first-page preview for every shared certificate while preserving accessible PDF-opening links and fallback copy.                              |
| STR-43 | The visible Portfolio style selector must temporarily expose only Engineering and Business while preserving the complete Artistic template, metadata, routes, direct rendering, persistence compatibility, and source files.       |

### Refinement Acceptance Criteria

1. Focused Business assertions cover detail-list hooks, equalized gallery/media hooks, aligned video-card hooks, and the direct-contact typography hook.
2. Education and Experience retain every shared detail string and logical list semantics.
3. Business section headings, gallery cards, journal videos, and contact content remain readable without clipping at representative mobile and desktop widths.
4. Engineering and Artistic source and presentation remain unchanged by this refinement.
5. Journal and Credential Register retain every shared source value while using compact, visibly highlighted inline labels rather than numbered detail rows.
6. All three themes expose the same shared section eyebrows, titles, Journal subsection names, Certificate Gallery name, and contact-channel label.
7. Every Business certificate card includes a consistent PDF preview, title, issuer, type, description, and accessible action to open the source PDF.
8. Artistic remains in the three-template runtime registry and can still render directly, but no Artistic radio option appears in any theme's Portfolio style selector.
9. README instructions distinguish the two currently selectable styles from the preserved Artistic implementation and explain the reversible availability boundary.

## Extension Configuration

| Extension              | Status   | Rationale                                                                                                                    |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | The user selected B; this remains a static presentation redesign with no new data or identity boundary.                      |
| Property-Based Testing | Disabled | The user selected C; focused registry, persistence, component, route, accessibility, and responsive tests are proportionate. |

## Content Validation

| Check                              | Result                                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| Mermaid and ASCII diagrams         | Not used                                                     |
| Markdown tables                    | Valid simple pipe tables                                     |
| Code identifiers                   | Formatted as inline code                                     |
| Requirements traceability          | STR-01 through STR-43 and STR-NFR-01 through STR-NFR-10      |
| Application/documentation boundary | No application file was changed during Requirements Analysis |
