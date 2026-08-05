# Application Design - Youthful Themes and Artistic Student Template

> **Status: Approved on 2026-08-05.** This consolidated design defines the implementation boundary for one cohesive UI unit.

## Design Summary

- Extend `PortfolioTemplateId` with `artistic`.
- Add an optional `isSectionVisible(sectionId)` predicate to `PortfolioTemplate`; existing templates default to all globally enabled sections.
- Filter navigation in App before invoking scroll and layout hooks so every consumer receives one consistent section list.
- Reconcile an invalid active formal section to Home using the existing section resolver and history replacement.
- Add one typed `src/data/artistic.ts` module for introduction, interests, learning, hobbies, activities, and goals.
- Add Artistic Shell, Hero, About, Activities, and Projects components while reusing shared Education, Awards, Gallery, Journal, Skills, Contact, and journal detail.
- Keep complete section maps even when a section is hidden.
- Register Artistic in the existing registry, selector, validator, persistence, and source configuration.
- Refresh only scoped Neutral and Business tokens; add a balanced multi-color Artistic token set on calm reading surfaces.
- Add no service layer, runtime dependency, backend, CMS, or deployment change.

## Key Design Decisions

### Backward-Compatible Visibility

The template contract gains an optional pure predicate. App first honors global navigation configuration, then the active template predicate. This keeps existing templates unchanged and prevents App from knowing Artistic data details.

Artistic behavior:

- Experience appears when shared experience or Artistic activities is populated.
- Awards appears only when real awards are populated.
- Other globally enabled sections remain visible.
- Empty groups inside Artistic About are omitted independently.
- Home is always retained as the safe fallback.

### Active-Section Reconciliation

`usePortfolioLayout` continues to own active multi-page state. When visible IDs change, it resolves the current page against the new list. Valid routes remain untouched; an invalid formal route is replaced with Home rather than pushed into history. App continues to protect local journal routes.

### Artistic Composition

- Compact top navigation and mobile drawer.
- First-viewport collage using actual profile, project, and gallery media in stable responsive frames.
- Alternating unframed content bands rather than one large decorative container.
- Simple notebook cues through rules, labels, controlled rotations, and multi-color accents; no custom scroll behavior.
- Student Activities replaces the formal Experience presentation when appropriate.
- Project compositions treat coursework, experiments, and personal work as credible evidence.

### Palette Ownership

- Neutral: sky blue primary, coral supporting accent.
- Business: teal primary, sunflower supporting accent.
- Artistic: sky, coral, sunflower, and mint accents with ink and neutral-paper surfaces.
- Accent colors do not carry long-form text backgrounds.
- Light and dark tokens are verified against 4.5:1 normal-text and 3:1 large-text or essential-boundary targets.

## Source Organization

```text
src/
  data/
    artistic.ts
  templates/
    artistic/
      ArtisticAbout.tsx
      ArtisticActivities.tsx
      ArtisticHero.tsx
      ArtisticProjects.tsx
      ArtisticShell.tsx
      index.ts
```

The source tree is a path listing, not an ASCII relationship diagram. Shared components and existing templates remain in their current locations.

## Verification Seams

- Template ID and fallback utility tests.
- Registry completeness and Artistic section-map tests.
- App selector, persistence, route, layout-mode, and journal-preservation tests.
- Sparse Experience and Awards visibility plus active-section fallback tests.
- Artistic Hero, content, actions, media alternatives, and responsive control assertions.
- Color-token contrast calculations and root-class isolation checks.
- Desktop and mobile browser inspection for all four templates in light and dark modes.
- Explicit Engineering screenshot and behavior comparison against the baseline.

## Detailed Artifacts

- `components.md` - Responsibilities and ownership.
- `component-methods.md` - Type and method signatures.
- `services.md` - App orchestration and no-service-layer decision.
- `component-dependency.md` - Dependencies, communication, and data flow.

## Requirement and Story Coverage

The design covers YAT-01 through YAT-20, YAT-NFR-01 through YAT-NFR-11, and YAT-US-01 through YAT-US-06 without introducing an unapproved component, service, or infrastructure boundary.

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Reconfirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis. |
