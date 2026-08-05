# Components - Youthful Themes and Artistic Student Template

## Contract and Orchestration Components

| Component | Responsibility | Interface boundary |
|---|---|---|
| `PortfolioTemplate` | Describe one presentation strategy and optionally decide whether a globally enabled section is visible. | Adds optional `isSectionVisible(sectionId)`; existing templates require no implementation. |
| `PortfolioApp` | Resolve the active template, derive visible navigation, own template selection, and render the current route or sections. | Filters globally enabled navigation through the active template before invoking layout and scroll hooks. |
| `usePortfolioLayout` | Preserve layout mode, navigation hashes, and valid active-page state. | Reconciles a removed active section to the first visible section and replaces an invalid multi-page hash. |
| Template registry | Resolve four typed templates and preserve Engineering fallback. | Adds Artistic without changing fallback or source-default ownership. |
| `PortfolioStyleSelector` | Render all registry choices and emit a valid typed selection. | Adds an Artistic icon automatically paired with registry metadata; no visible check icon. |

## Artistic Data Components

| Component | Responsibility | Interface boundary |
|---|---|---|
| `artisticContent` | Store introduction, interests, current learning, hobbies, activities, and personal goals in one student-editable module. | Typed local data; no presentation imports and no fabricated fallback achievements. |
| `ArtisticActivity` | Describe a club, volunteer role, school activity, or informal responsibility. | Title, organization, optional period, and description list. |
| Artistic visibility predicate | Decide whether Experience and Awards have meaningful content. | Experience is visible for shared experience or Artistic activities; Awards is visible only for real awards. All other globally enabled sections remain visible. |

## Artistic Presentation Components

| Component | Responsibility | Main dependencies |
|---|---|---|
| `ArtisticShell` | Provide compact top navigation, responsive drawer, style/layout/color controls, skip link, and main content frame. | Profile, filtered navigation, shared controls, shell props. |
| `ArtisticHero` | Introduce the student with Creative Notebook copy, actions, and a stable collage of real media. | Profile, Artistic introduction, gallery and project media. |
| `ArtisticAbout` | Present interests, current learning, hobbies, and goals through alternating unframed bands. | Artistic content, shared profile and About data. |
| `ArtisticActivities` | Combine real shared experience with student clubs or activities under age-appropriate labels. | Experience data and Artistic activities. |
| `ArtisticProjects` | Present schoolwork, experiments, and personal projects through repeatable scrapbook-inspired compositions. | Shared projects, images, alternative text, technologies, and actions. |
| Artistic template definition | Supply metadata, chapter labels, complete section map, shared journal page, and visibility predicate. | Artistic components plus reusable Education, Awards, Gallery, Journal, Skills, Contact, and JournalPostPage. |

## Shared Presentation Components

- Education, Awards, Gallery, Journal, Skills, Contact, and JournalPostPage remain shared unless Artistic needs only scoped CSS composition.
- Engineering components receive no visual or structural changes.
- Neutral and Business retain their component structures; only scoped color tokens and supporting selectors change.
- Existing shared action, logo, section, color-mode, layout, and selector controls remain the interaction foundation.

## Styling Boundary

- `.portfolio-template-neutral` owns sky-blue and coral tokens.
- `.portfolio-template-business` owns teal and sunflower tokens.
- `.portfolio-template-artistic` owns a balanced sky, coral, sunflower, mint, ink, and neutral-paper system.
- Saturated colors are limited to accents, small surfaces, rules, and selected states; reading surfaces remain calm.
- Artistic collage and notebook compositions use responsive grid tracks, aspect ratios, and fixed control dimensions rather than absolute positioning that can overlap content.

## Requirement Coverage

This component set covers YAT-01 through YAT-20 while preserving the shared NFR boundaries in YAT-NFR-01 through YAT-NFR-11.

