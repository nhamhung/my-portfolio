# Components - Sleek Three-Theme Redesign

## Contract and Orchestration Components

| Component                        | Responsibility                                                                                    | Design boundary                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `PortfolioTemplateId`            | Represent valid runtime and source-configured presentations.                                      | Exact union of `engineering`, `business`, and `artistic`; `neutral` is invalid.                                              |
| `PortfolioTemplate`              | Describe one shell, journal view, chapter-label map, and complete section-component map.          | Existing interface remains compatible; every final template maps all globally enabled section IDs.                           |
| `PortfolioApp`                   | Resolve the active strategy and own routes, layout, navigation state, persistence, and rendering. | No theme-specific visual logic; existing orchestration remains stable.                                                       |
| Template registry                | Register the three presentation strategies and resolve invalid IDs.                               | Ordered Engineering, Business, Artistic registry with Engineering fallback.                                                  |
| Template-selection utility       | Validate source and stored IDs and persist valid visitor choices.                                 | An obsolete `neutral` value fails validation and resolves to Engineering.                                                    |
| `PortfolioStyleSelector`         | Present all valid theme choices and emit typed selection events.                                  | Exactly three choices; uses registry metadata and removes Neutral icon handling.                                             |
| `PortfolioShellProps`            | Carry navigation and presentation-control state into each shell.                                  | Unchanged callback contract for section navigation, template selection, layout mode, and children.                           |
| Optional section visibility seam | Filter globally enabled navigation when a template supplies a predicate.                          | Retained for compatibility, but redesigned Business and Artistic do not depend on theme-only content to populate navigation. |

## Business Presentation Components

| Component                 | Responsibility                                                                                                                   | Visible composition boundary                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `BusinessShell`           | Render compact casebook navigation, controls, architectural background layers, skip link, and content frame.                     | No Engineering terminal navigation, grid overlay, section shell, or card treatment.                           |
| `BusinessHero`            | Present a split editorial introduction using shared profile, hero evidence, and primary actions.                                 | Typographic cover and evidence register.                                                                      |
| `BusinessAbout`           | Present shared biography and facts as an editorial profile spread.                                                               | Narrative column plus structured evidence band.                                                               |
| `BusinessEducation`       | Present education as an academic ledger with institution evidence and chronological structure.                                   | Ledger rows and side annotations rather than Engineering cards.                                               |
| `BusinessExperience`      | Present work history as numbered case chapters with roles, periods, and evidence.                                                | Alternating chapter records rather than Engineering timeline cards.                                           |
| `BusinessAwards`          | Present awards as a distinction register with organization, year, tag, and evidence.                                             | Compact recognition ledger rather than Engineering cards.                                                     |
| `BusinessProjects`        | Present projects as alternating media-led case studies with technologies and actions.                                            | Full editorial studies with alternating image and copy placement.                                             |
| `BusinessGallery`         | Present shared gallery media as an editorial contact sheet with captions and stable image framing.                               | Publication contact sheet rather than Engineering gallery grid/cards.                                         |
| `BusinessJournal`         | Present local and external writing as a publication index with source, date, topic, and action hierarchy.                        | Issue-style contents and feature rows rather than Engineering cards.                                          |
| `BusinessSkills`          | Present skill groups and certificates as a capability matrix and credential register.                                            | Structured columns and ledger rules rather than Engineering skill cards.                                      |
| `BusinessContact`         | Present real contact and social actions as a concise closing brief.                                                              | Editorial closing page with direct action hierarchy.                                                          |
| `BusinessJournalPostPage` | Resolve a local post and render publication-style article, not-found state, media, metadata, Markdown, and return navigation.    | Theme-owned article DOM and surfaces; shares only post data and route utilities.                              |
| Business-local primitives | Provide casebook typography, chapter labels, rule groups, media frames, and links used only inside the Business template folder. | May reduce repetition inside Business but cannot import or reproduce Engineering-visible section composition. |

## Artistic Presentation Components

| Component                 | Responsibility                                                                                                                  | Visible composition boundary                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `ArtisticShell`           | Render minimal gallery navigation, controls, luminous background layers, skip link, and generous content canvas.                | No Engineering terminal navigation, grid overlay, section shell, or card treatment.                               |
| `ArtisticHero`            | Present a layered image-led introduction using shared profile, project, or gallery media and shared actions.                    | Asymmetric image and type composition without a template-only slogan or introduction.                             |
| `ArtisticAbout`           | Present only shared biography and about facts as an asymmetric catalogue profile.                                               | Gallery wall label and portrait composition; no interests, learning, hobbies, goals, or notebook narrative.       |
| `ArtisticEducation`       | Present education as a vertical collection of institution studies with logos and descriptive material.                          | Staggered catalogue records rather than Engineering cards.                                                        |
| `ArtisticExperience`      | Present shared professional experience as an exhibition chronology.                                                             | Rhythmic asymmetric records; replaces the former theme-only Activities presentation.                              |
| `ArtisticAwards`          | Present real awards as a salon-style recognition wall with clear organization and year.                                         | Varied catalogue labels without Engineering cards.                                                                |
| `ArtisticProjects`        | Present project-owned media as curated works with titles, descriptions, technology labels, alternative text, and actions.       | Art-catalogue works with stable media and alternating scale.                                                      |
| `ArtisticGallery`         | Present shared media as an asymmetric exhibition sequence with captions and meaningful alternatives.                            | Gallery composition rather than Engineering media cards.                                                          |
| `ArtisticJournal`         | Present local and external writing as a reading-room index with dates, topics, summaries, and actions.                          | Publication wall or reading table rather than Engineering cards.                                                  |
| `ArtisticSkills`          | Present shared skills and certificates as a materials index and credential shelf.                                               | Typographic index with restrained grouping, not an Engineering matrix/card shell.                                 |
| `ArtisticContact`         | Present shared email and social actions as a minimal gallery closing panel.                                                     | Spacious closing composition using only shared contact facts and short control labels.                            |
| `ArtisticJournalPostPage` | Resolve a local post and render an exhibition-publication article, not-found state, media, metadata, Markdown, and return link. | Theme-owned article DOM and surfaces; shares only post data and route utilities.                                  |
| Artistic-local primitives | Provide catalogue headings, work labels, media frames, rules, and links used only inside the Artistic template folder.          | May reduce repetition inside Artistic but cannot add personal prose or reproduce Engineering-visible composition. |

## Data and Visual-System Components

| Component                         | Responsibility                                                                                    | Boundary                                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Shared portfolio data modules     | Own all personal facts, media, writing, skills, certificates, and contact information.            | Business and Artistic read these modules without adding theme-specific personal data.                                |
| `business.css`                    | Own Business tokens, architectural background, component layouts, motion, focus, and breakpoints. | Every selector is rooted at `.portfolio-template-business`; no Neutral, Artistic, or Engineering selectors.          |
| `artistic.css`                    | Own Artistic tokens, luminous background, component layouts, motion, focus, and breakpoints.      | Every selector is rooted at `.portfolio-template-artistic`; no Business, Neutral, or Engineering selectors.          |
| `App.css`                         | Retain global and Engineering-owned rules after Neutral and migrated theme rules are removed.     | Must not acquire new Business or Artistic section compositions.                                                      |
| Background pseudo-elements/layers | Create depth, washes, organic shapes, lines, spotlights, and grain through efficient CSS.         | Decorative, non-interactive, clipped safely, pointer-events disabled, content kept above, and no scroll-linked work. |

## Removed Components and Paths

- `src/templates/neutral/` and all Neutral imports, registry metadata, icons, CSS, and active tests.
- `ArtisticActivities`, `artisticActivities`, and the Artistic visibility rule tied to theme-only activity content.
- Former Artistic notebook slogan, introduction, interest, learning, hobby, goal, and activity presentations.
- Shared Engineering section components as Business or Artistic visible section-map entries.
- Shared `JournalPostPage` as the Business or Artistic journal-post presentation; Engineering may continue to use it.

## Content Validation

| Check                      | Result                                                                            |
| -------------------------- | --------------------------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                                                          |
| Markdown structure         | Valid headings, tables, lists, and inline code                                    |
| Coverage                   | Registry, App, selector, 22 theme-specific views, data, CSS, and removals defined |

## Extension Compliance

| Extension              | Status   | Rationale                                                                                                    |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| Security Baseline      | Disabled | Reconfirmed during Requirements Analysis; no enabled security rules apply to component design.               |
| Property-Based Testing | Disabled | Reconfirmed during Requirements Analysis; focused deterministic verification remains the approved direction. |
