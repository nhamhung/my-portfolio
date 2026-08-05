# Services - Youthful Themes and Artistic Student Template

## Service-Layer Decision

No new service layer is introduced. This is a static browser application with local typed data and no backend, network orchestration, authentication, database, or external state service.

## Existing Orchestration Responsibilities

| Orchestrator | Responsibility | Change |
|---|---|---|
| `PortfolioApp` | Coordinate template, route, visible navigation, layout state, and rendered section strategy. | Derive navigation from the active template before calling scroll and layout hooks. |
| Template registry | Resolve presentation metadata and complete component maps. | Register Artistic and retain Engineering fallback. |
| `usePortfolioLayout` | Coordinate hash navigation and single-page or multi-page state. | Reconcile active state when a template hides the current formal section. |
| Template-selection utility | Validate and persist browser preference. | Recognize Artistic while preserving storage failure guards. |
| Chakra color mode | Coordinate light and dark presentation. | No API change; Artistic supplies scoped variables for both modes. |

## Orchestration Sequence

1. App resolves the source or stored template ID through the existing validator and registry.
2. App filters globally enabled navigation through the active template's optional visibility predicate.
3. Scroll and layout hooks receive the same filtered section-ID list.
4. The layout hook retains a valid current section or reconciles an invalid hidden formal section.
5. App renders the template Shell and either the journal page or the current template section map.
6. The Shell emits template, navigation, layout, and color-mode interactions through existing callbacks.

## Failure and Fallback Behavior

- Invalid template IDs resolve to Engineering.
- Blocked browser storage does not prevent in-session template selection.
- Empty optional Artistic arrays remove only their empty content groups.
- A hidden current formal section resolves to Home without adding a new browser-history entry.
- Missing media continues to use existing local asset and alt-text validation; no decorative remote fallback is added.

## Non-Goals

- No API client, repository abstraction, context store, event bus, or state-management library.
- No content service or browser editor.
- No palette service; CSS variables remain scoped presentation configuration.

