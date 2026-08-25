# Services - Sleek Three-Theme Redesign

## Service-Layer Decision

No new service layer is introduced. The site is a static browser application whose data is local and typed. It has no backend, network orchestration, authentication, database, content API, or external state service.

## Existing Orchestration Responsibilities

| Orchestrator               | Responsibility                                                                         | Design decision                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `PortfolioApp`             | Coordinate active template, routes, navigation, layout state, and rendered components. | Keep unchanged except for consuming the reduced registry through existing interfaces.              |
| Template registry          | Resolve presentation metadata, shell, journal view, and complete section maps.         | Register exactly three themes and retain Engineering fallback.                                     |
| Template-selection utility | Validate source and stored preferences and persist visitor changes.                    | Remove Neutral from validation; an obsolete Neutral value follows existing invalid-value fallback. |
| `usePortfolioLayout`       | Coordinate hash navigation and single-page or multi-page state.                        | No API change; theme switching continues to preserve current valid context.                        |
| Journal utilities          | Parse local journal hashes, create post links, and resolve shared post data.           | Reused by both theme-owned journal indexes and journal-post components.                            |
| Chakra color mode          | Coordinate light and dark mode.                                                        | No API change; each theme provides isolated variables and layer rules for both modes.              |

## Orchestration Sequence

1. App obtains the configured default and asks the selection utility for the initial valid template ID.
2. A stored Engineering, Business, or Artistic choice wins; `neutral` and other invalid values fall back through the configured default and Engineering safety boundary.
3. The registry resolves the active `PortfolioTemplate` strategy.
4. App passes globally enabled navigation through the existing optional visibility seam and passes the resulting section IDs to layout and active-section helpers.
5. App renders the selected theme shell and either its complete section map or its theme-owned local journal-post component.
6. Shell controls emit navigation, layout, color-mode, and template-selection events through existing callbacks.
7. Shared data flows directly into theme-owned section components; no component mutates content.

## Theme Presentation Orchestration

### Business

1. `BusinessShell` establishes architectural background layers and editorial navigation.
2. App inserts the active Business section component or `BusinessJournalPostPage` as children.
3. The active component imports only the shared data relevant to its section.
4. Business-local primitives organize that data into a section-specific editorial composition.

### Artistic

1. `ArtisticShell` establishes luminous canvas layers and minimal gallery navigation.
2. App inserts the active Artistic section component or `ArtisticJournalPostPage` as children.
3. The active component imports only shared portfolio data relevant to its section.
4. Artistic-local primitives organize that data without notebook prose, activities, or any other theme-only personal content.

## Failure and Fallback Behavior

- Invalid, removed, or unknown template IDs resolve to Engineering.
- Blocked browser storage does not prevent in-session selection.
- Every enabled section has a complete component in every final theme, so no Engineering section fallback is needed.
- An unknown local journal slug renders the selected theme's not-found article composition with a route back to Journal.
- Missing or invalid presentation media follows existing shared data validation; themes do not invent remote fallback media.
- Decorative layers never handle pointer events and never control scrolling.

## Non-Goals

- No API client, repository abstraction, event bus, context store, or state-management library.
- No content service, browser editor, CMS, database, authentication, or analytics service.
- No palette or animation service; CSS variables, media queries, and existing React/Chakra behavior remain sufficient.
- No deployment, caching, monitoring, or logging service change.

## Content Validation

| Check                      | Result                                                               |
| -------------------------- | -------------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                                             |
| Markdown structure         | Valid headings, tables, ordered lists, and bullet lists              |
| Service boundary           | Explicit no-new-service decision with existing orchestrators defined |

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to service design.                 |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |
