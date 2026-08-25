# Personas - Sleek Three-Theme Redesign

## Persona 1: Portfolio Visitor

### Profile

A recruiter, collaborator, teacher, peer, client, or community visitor who opens the portfolio on a phone or computer and may explore more than one visual presentation.

### Goals

- Understand the author's real background, work, writing, skills, and contact options quickly.
- Choose a presentation that is comfortable and engaging without losing the current page or section.
- Experience Business and Artistic as polished, complete designs rather than recolored Engineering pages.
- Use the portfolio successfully with keyboard, touch, dark mode, or reduced-motion preferences.

### Needs

- Exactly three clear choices: Engineering, Business, and Artistic.
- A safe Engineering fallback if an old Neutral preference remains in the browser.
- Original Business and Artistic compositions for every section and local journal post.
- Beautiful backgrounds that support content instead of obscuring it.
- Stable routes, controls, actions, focus, contrast, and responsive layouts.
- No invented claims or unexplained Artistic-only personal wording.

### Relevant Stories

- STR-US-01: Choose among three themes and recover from an obsolete Neutral preference.
- STR-US-02: Explore the Business editorial casebook.
- STR-US-03: Explore the Artistic curated gallery.
- STR-US-05: Preserve context and actions while switching themes.
- STR-US-06: Receive an accessible, responsive, dependable experience.

## Persona 2: Portfolio Author

### Profile

The student or professional represented by the portfolio who maintains profile, education, experience, award, project, gallery, writing, skill, certificate, and contact information.

### Goals

- Maintain one accurate set of portfolio content for all three presentations.
- Offer distinct visual styles without rewriting personal information for each theme.
- Present existing work attractively without fabricated achievements or theme-specific personal claims.
- Keep setup and customization understandable through a beginner-friendly README.

### Needs

- Business and Artistic must consume shared portfolio sources faithfully.
- Artistic must omit the former slogan, notebook introduction, interests, learning, hobbies, goals, and co-located activities when they are not shared content.
- Short interface labels are acceptable, but new biographies, narratives, and claims are not.
- Project media, alternative text, technologies, links, resume, contact, and journal behavior must remain intact.
- The README must describe the final three-theme system accurately.

### Relevant Stories

- STR-US-02: Present truthful content through Business.
- STR-US-03: Present shared content only through Artistic.
- STR-US-04: Maintain one truthful content source across all themes.
- STR-US-05: Preserve the site's shared behavior.
- STR-US-06: Retain quality and maintainability.

## Persona 3: Template Maintainer

### Profile

A future developer or technically confident portfolio owner who updates the React/Vite template system while preserving the site's shared behavior and static deployment.

### Goals

- Keep Engineering stable as the visual and behavioral regression baseline.
- Maintain complete, independent Business and Artistic presentation systems.
- Remove Neutral without leaving stale runtime, source, CSS, test, or documentation references.
- Verify changes with focused and complete automated checks plus representative browser inspection.

### Needs

- Clear boundaries between shared data and behavior versus theme-specific visible composition.
- Scoped CSS, efficient backgrounds, restrained motion, and no new runtime infrastructure.
- Complete section maps with no hidden fallback to Engineering components.
- Explicit tests for registry behavior, obsolete-Neutral fallback, route continuity, copy boundaries, accessibility, responsiveness, and Engineering regression.
- A static GitHub Pages-compatible production build.

### Relevant Stories

- STR-US-01: Maintain the exact registry and fallback contract.
- STR-US-02: Maintain the independent Business presentation.
- STR-US-03: Maintain the independent Artistic presentation.
- STR-US-04: Preserve the shared content boundary.
- STR-US-05: Preserve shared application orchestration.
- STR-US-06: Preserve quality, verification, and deployment boundaries.

## Persona-to-Story Map

| Persona             | STR-US-01 | STR-US-02 | STR-US-03 | STR-US-04 | STR-US-05 | STR-US-06 |
| ------------------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Portfolio Visitor   | Yes       | Yes       | Yes       |           | Yes       | Yes       |
| Portfolio Author    |           | Yes       | Yes       | Yes       | Yes       | Yes       |
| Template Maintainer | Yes       | Yes       | Yes       | Yes       | Yes       | Yes       |

## Content Validation

| Check                      | Result                                               |
| -------------------------- | ---------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                             |
| Markdown structure         | Valid headings, lists, and tables                    |
| Persona coverage           | Visitor, author, and maintainer concerns represented |

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to persona generation.             |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |
