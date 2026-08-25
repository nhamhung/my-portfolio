# Application Design - Sleek Three-Theme Redesign

> **Status: Approved on 2026-08-25.** This consolidated design defines one cohesive presentation-system implementation boundary.

## Design Summary

- Reduce `PortfolioTemplateId`, registry, options, source configuration, selector, and validation to Engineering, Business, and Artistic.
- Treat a stored `neutral` value as invalid and preserve the existing Engineering fallback path.
- Keep `PortfolioApp`, layout hooks, hashes, local journal routing, color mode, persistence, actions, and shell callbacks stable.
- Remove the complete Neutral source and CSS surface.
- Give Business and Artistic their own Shell, Home, About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, Contact, and local journal-post components.
- Keep shared data and behavioral utilities, but prohibit visible Engineering section components, `SectionShell`, `ContentCard`, and Engineering presentation CSS inside Business and Artistic maps.
- Replace Business styling with an isolated architectural-depth system in `business.css`.
- Replace Artistic styling with an isolated luminous-canvas system in `artistic.css`.
- Keep `src/data/artistic.ts` deleted and remove former notebook, activity, interest, learning, hobby, goal, slogan, and introduction content.
- Add no service layer, runtime dependency, backend, CMS, database, authentication, deployment resource, or custom scrolling.

## Key Design Decisions

### Exact Three-Theme Contract

`PortfolioTemplateId` becomes the compile-time authority for exactly three choices. The registry contains Engineering, Business, and Artistic in that order. The options map, selector icon map, source configuration, validators, and tests all satisfy the same union. Unknown strings and the historical `neutral` value resolve to Engineering through the existing registry and selection fallback behavior.

### Stable App Orchestration

App continues to resolve a complete template strategy and render the matching shell plus section map. It does not learn Business or Artistic visual logic. The optional section-visibility seam remains compatible, but the redesigned themes depend only on shared, globally enabled content and provide complete components for every enabled section. Existing section hashes, journal hashes, layout state, color mode, actions, and focus coordination remain owned by their current utilities.

### Original Presentation Boundary

Business and Artistic may reuse:

- Typed shared portfolio records and bundled media.
- Navigation callbacks, layout state, selection behavior, color-mode behavior, and route utilities.
- Low-level Chakra primitives, icons, React Markdown, action helpers, media helpers, and accessibility utilities.

They may not reuse as visible presentation:

- Engineering section components or `JournalPostPage`.
- `SectionShell`, `ContentCard`, Engineering terminal/grid motifs, Engineering cards, or Engineering section hierarchy.
- Each other's theme-local primitives or CSS.

Identity-based section-map tests and focused rendered assertions enforce this boundary in addition to browser review.

### Business Editorial Casebook

Business owns a compact casebook shell and eleven custom content views. It uses a typographic cover, editorial profile, academic ledger, case-chapter experience, distinction register, alternating project studies, publication contact sheet, issue-style journal, capability matrix, closing brief, and publication article. The presentation uses real shared evidence and avoids executive, client, review-board, performance, and commercial claims that are not in the data.

### Artistic Curated Gallery

Artistic owns a minimal gallery shell and eleven custom content views. It uses a layered media introduction, asymmetric profile, institution studies, exhibition chronology, recognition wall, catalogue projects, gallery sequence, reading-room journal, materials index, minimal closing panel, and exhibition-publication article. It renders only shared content and short interface labels. The former notebook slogan and all Artistic-only narrative/list/activity content are removed.

### Visual-System Ownership

Business and Artistic move to folder-owned global CSS files whose selectors are rooted at their template class.

- Business light mode: warm ivory foundation, fine architectural/perspective lines, soft illumination, and restrained translucent editorial surfaces.
- Business dark mode: deep ink foundation, controlled spotlights, subtle drafting depth, and clearly separated reading surfaces.
- Artistic light mode: luminous neutral canvas, diffused color washes, organic shapes, calm reading surfaces, and subtle grain.
- Artistic dark mode: deep gallery canvas, diffused color, artwork-focused surfaces, and restrained luminous edges.

Decorative layers are `aria-hidden`, pointer-inert, clipped safely, and kept below content. Motion uses existing CSS transitions/entrances, substantially reduces under `prefers-reduced-motion`, and never controls scroll position.

### Responsive and Accessibility Boundaries

- Mobile composition collapses intentionally rather than preserving desktop overlap or alternating placement.
- Media uses stable aspect ratios and contain/cover choices determined by the shared record's role.
- Long-form text sits on calm surfaces at readable line lengths.
- Normal text targets 4.5:1 contrast; large text and essential boundaries target 3:1.
- Shells preserve skip links, visible focus, selected-state semantics, keyboard navigation, logical heading order, and focus transfer.
- Decorative backgrounds cannot create a perceived control or obscure focus, media, headings, or body text.

## Source Organization

```text
src/
  templates/
    business/
      BusinessAbout.tsx
      BusinessAwards.tsx
      BusinessContact.tsx
      BusinessEducation.tsx
      BusinessExperience.tsx
      BusinessGallery.tsx
      BusinessHero.tsx
      BusinessJournal.tsx
      BusinessJournalPostPage.tsx
      BusinessProjects.tsx
      BusinessShell.tsx
      BusinessSkills.tsx
      business.css
      index.ts
    artistic/
      ArtisticAbout.tsx
      ArtisticAwards.tsx
      ArtisticContact.tsx
      ArtisticEducation.tsx
      ArtisticExperience.tsx
      ArtisticGallery.tsx
      ArtisticHero.tsx
      ArtisticJournal.tsx
      ArtisticJournalPostPage.tsx
      ArtisticProjects.tsx
      ArtisticShell.tsx
      ArtisticSkills.tsx
      artistic.css
      index.ts
```

The listing describes intended source ownership, not an ASCII relationship diagram. Small theme-local primitive files may be added within their owning folder if they reduce repetition without flattening section-specific composition.

Removed source includes `src/templates/neutral/`, `ArtisticActivities.tsx`, Neutral CSS, and obsolete Artistic notebook/activity presentation rules. `src/data/artistic.ts` remains deleted.

## Verification Seams

- Exact three-ID type-derived registry, options, icon, validator, configuration, and selector assertions.
- Stored `neutral` and unknown-value Engineering fallback tests.
- Complete Business and Artistic section-map identity checks against Engineering components.
- Theme-specific rendered assertions for every canonical section and each local journal-post view.
- Artistic forbidden-copy and shared-source assertions.
- Business unsupported-claim and shared-source assertions.
- App route, section, layout, selection, persistence, action, and local-journal preservation tests.
- Root class, stylesheet scoping, reduced-motion, and no-custom-scroll checks.
- Contrast calculations and browser focus/keyboard review.
- Mobile, tablet, laptop, and wide-desktop inspection in both color modes.
- Engineering DOM/behavior regression checks and representative visual comparison.
- Complete Vitest, ESLint, TypeScript/Vite build, Prettier, stale-reference, and diff checks.

## Detailed Artifacts

- `components.md` - Component responsibilities, visible composition boundaries, CSS ownership, and removals.
- `component-methods.md` - Template, registry, selection, shell, section, journal, and App interfaces.
- `services.md` - Existing orchestration responsibilities and no-new-service decision.
- `component-dependency.md` - Dependency flow, matrix, communication patterns, and coupling controls.

## Requirement and Story Coverage

The design covers STR-01 through STR-32, STR-NFR-01 through STR-NFR-10, and STR-US-01 through STR-US-06. It introduces no unapproved product, data, service, dependency, or infrastructure boundary.

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to this design.                    |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |

## Content Validation

| Check                      | Result                                                                       |
| -------------------------- | ---------------------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used in the consolidated artifact; dependency diagram has an alternative |
| Source listing             | Plain path listing with no relationship-diagram semantics                    |
| Markdown structure         | Valid headings, lists, tables, inline code, and text code fence              |
| Coverage                   | All approved STR, STR-NFR, and STR-US identifier families addressed          |
| Application boundary       | No application source changed during Application Design                      |
