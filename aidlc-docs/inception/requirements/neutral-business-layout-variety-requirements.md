# Requirements - Neutral and Business Layout Variety

> **Status: Neutral portrait and cross-platform setup amendment approved on 2026-08-02.** The student-friendly template refresh was approved on 2026-07-29 and implemented and verified on 2026-08-01. The runtime template-selector amendment was approved, implemented, and verified on 2026-07-23. The original Neutral and Business presentation requirements were approved on 2026-07-20.

## Intent Analysis

- **User request**: Keep the existing three-template model and student-friendly refresh, reduce Neutral's oversized profile portrait to a footprint comparable to the other themes, and provide detailed cross-platform installation and setup instructions for students.
- **Request type**: Brownfield user-facing presentation enhancement.
- **Scope**: One existing Neutral Hero presentation component plus the root student README; prior project-media, selector, and Business spacing behavior remains approved.
- **Complexity**: Simple and bounded, with responsive visual and documentation-quality considerations.
- **Requirements depth**: Standard, based on the six original layout answers, four validated selector-amendment answers, four approved student-friendly refresh decisions, and three approved portrait and setup decisions.

## Product Goal

Students can express the same portfolio content through three clearly different structures. Engineering remains technical, Neutral becomes a relaxed learning journal, and Business becomes an organized student project showcase. Visitors can compare these presentations directly without losing their current portfolio location, while students retain a typed source default.

## Functional Requirements

| ID | Requirement |
|---|---|
| NBV-01 | The registry must continue to expose exactly `engineering`, `neutral`, and `business`; no Artistic template is added. |
| NBV-02 | Engineering content, layout structure, routes, and behavior must remain unchanged except for receiving the shared template-selector control. |
| NBV-03 | Neutral must replace its desktop side-rail structure with a full-width magazine masthead and compact responsive navigation. |
| NBV-04 | Neutral must use a friendly opening story, modular multi-column About composition, varied editorial project layouts, and a compact visual archive derived from shared content. |
| NBV-05 | Business must use an organized student-showcase shell with a sticky desktop contents rail. |
| NBV-06 | Business must present numbered chapters, approachable profile content, and structured project summaries derived from existing data. |
| NBV-07 | Neutral and Business may customize their Shell, navigation, Hero, About, and Projects components; shared section order and remaining section components must stay stable. |
| NBV-08 | Both templates must consume shared portfolio data without duplicating student content; each project owns its local presentation image and alternative text alongside its existing data. |
| NBV-09 | Existing single-page and multi-page modes, section hashes, local journal routes, theme controls, resume downloads, project actions, contact actions, and external links must remain functional. |
| NBV-10 | `src/data/template.ts` defines the initial student-facing default; a valid browser-persisted visitor choice overrides it, and invalid values fall back to Engineering. |
| NBV-11 | Every template must expose one compact menu button labeled `Portfolio style` in its desktop and mobile header controls, with Engineering, Neutral, and Business as the only choices. |
| NBV-12 | Switching templates must happen in place without a full-page reload and preserve the current section or local journal route plus the current single-page or multi-page layout mode. |
| NBV-13 | The selector must identify the active presentation, persist a valid choice in browser local storage, and update all shell and section presentation immediately. |
| NBV-14 | The selector must not display a tick or check icon; the active option must remain clear through its selected-row styling, semantic checked state, and keyboard behavior. |
| NBV-15 | Business case numbering must have at least 16px inline clearance on small viewports and comfortable desktop spacing without breaking the case grid. |
| NBV-16 | Coursework and Certificates, Program Analyzer, and Java Resume Application must each have an accurate, locally bundled project cover and meaningful alternative text used by Neutral and Business instead of indexed personal gallery photos. |
| NBV-17 | Neutral must retain the accurate profile portrait, replace its unrelated supporting gallery image with project-relevant media, and use friendly student-journal labels and wording. |
| NBV-18 | Business must use student-showcase labels and wording; executive, consulting, decision-review, and professional-record language must not define its presentation. |
| NBV-19 | Neutral and Business theme refinements must be warm, light, and restrained enough for university and internship use, while their existing overall layout structures remain recognizable. |
| NBV-20 | Engineering, routes, journal posts, layout modes, actions, runtime selection, persistence, shared content, and static deployment behavior must remain unchanged. |
| NBV-21 | Neutral must retain the existing accurate profile image but present it as a centered, medium portrait panel comparable to Business, with a stable portrait aspect ratio and a desktop width of approximately 420px or less. |
| NBV-22 | The root README must provide dedicated beginner-friendly prerequisite installation guidance for Windows 10/11, current macOS, and common Linux families, with concise WSL and ChromeOS Linux notes where useful. |
| NBV-23 | The README setup journey must support both Git clone and ZIP download paths, explain repository placeholders, and cover dependency installation, local development, editing, stopping and restarting, verification, updates, and common setup failures. |

## Layout Requirements

### Neutral: Learning Journal

- Use a full-width masthead rather than a persistent desktop side rail.
- Establish a friendly first viewport with clear identity, the accurate portrait, a student-focused statement, and actions.
- Constrain the portrait to a centered medium panel comparable to Business; it must not behave as a full-spread image or dominate the first viewport.
- Compose About as an editorial spread with stable responsive columns and readable line lengths.
- Present projects through varied but repeatable journal modules using each project's own image, not a uniform Engineering-style card grid.
- Present gallery media as a compact visual archive within normal vertical document flow.
- Collapse cleanly into a compact header and single-column reading order on small screens.
- Use approachable labels such as hello, learning, projects, and highlights instead of publication-industry or formal professional language.

### Business: Student Project Showcase

- Use a structured showcase header and sticky desktop contents rail distinct from both Engineering and Neutral navigation.
- Make section numbering and chapter context visible without duplicating navigation semantics.
- Organize About around the student's story, skills being practiced, experience, and activities supported by existing data.
- Present projects as concise student cases: what the student made, what they used, what they learned, and where to explore it.
- Use light tables, project rows, and structured dividers only where they improve scanning.
- Collapse the contents rail into a compact mobile header/menu while preserving document order.
- Preserve numbered `CASE` labels while giving them sufficient viewport clearance and avoiding executive-review terminology.

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NBV-NFR-01 | Use responsive CSS and existing motion utilities only; add no runtime dependency or custom scrolling system. |
| NBV-NFR-02 | Keyboard navigation, visible focus, semantic headings, labels, image alternatives, reduced-motion behavior, and an accessible selector menu with current-state semantics must remain available. |
| NBV-NFR-03 | Mobile, tablet, laptop, and wide-desktop layouts must avoid overlapping controls, clipped text, unintended horizontal overflow, and layout shifts caused by dynamic content. |
| NBV-NFR-04 | Sticky elements must not obscure content and must degrade to normal flow where viewport space is limited. |
| NBV-NFR-05 | Template styles must remain scoped so Neutral and Business rules cannot change Engineering. |
| NBV-NFR-06 | The application must remain a static Vite site deployable through the existing GitHub Pages workflow. |
| NBV-NFR-07 | Focused tests must cover template registry behavior, runtime selection and persistence, both layout modes, route preservation, controls, and explicit Engineering regression. |
| NBV-NFR-08 | Tests, ESLint, TypeScript checks, and the production build must pass before completion. |
| NBV-NFR-09 | Project covers must be locally bundled, responsive, consistently framed, meaningfully described for assistive technology, and sized to avoid unnecessary page-weight growth. |
| NBV-NFR-10 | Student-friendly copy and styling must remain readable in light and dark modes, preserve visible focus, and introduce no new runtime dependency. |
| NBV-NFR-11 | The resized Neutral portrait must preserve its natural framing through `object-fit`, avoid stretching and overflow, and remain proportionate at mobile, tablet, laptop, and wide-desktop sizes. |
| NBV-NFR-12 | README commands must be copyable, identify the intended shell, avoid unsafe global npm or permission workarounds, and use current authoritative installation links or clearly marked optional package-manager alternatives. |

## Out of Scope

- A fourth Artistic template or shareable URL-based template selection.
- Reordering or grouping shared sections differently by template.
- Custom components for every Neutral and Business section.
- Horizontal scrolling galleries, parallax, custom wheel behavior, or a new animation framework.
- New project content beyond local cover media and alternative text, business metrics, backend services, or deployment infrastructure.
- Revival of the superseded Artistic Exhibition ATR-U2/ATR-U3 plans.

## Acceptance Criteria

1. Neutral, Business, and Engineering are still the only supported template IDs.
2. Neutral uses a full-width learning-journal masthead and modular editorial composition instead of its current side rail.
3. Business uses a student-project-showcase shell with a sticky desktop contents rail and numbered project chapters instead of its current executive dashboard.
4. Neutral and Business have visibly different navigation placement, first viewport, content width, hierarchy, and Projects presentation from each other and from Engineering.
5. The shared section order, data files, actions, routes, and layout modes continue to work in all templates.
6. Engineering remains visually and behaviorally unchanged apart from the shared selector control.
7. Neutral and Business reflow into coherent mobile layouts with no overlaps or unintended horizontal overflow.
8. No new runtime dependency, custom scrolling system, or duplicated student content is introduced.
9. Automated checks and production build pass.
10. All three responsive headers expose a keyboard-accessible `Portfolio style` menu with exactly Engineering, Neutral, and Business.
11. A valid selection immediately changes the complete presentation, persists in that browser, and becomes the initial presentation on reload.
12. Switching preserves the current section or local journal post and the current layout mode without reloading the page.
13. The `Portfolio style` menu has no visible tick or check icon, while the active row remains visually and semantically identifiable.
14. Every Business `CASE` label has at least 16px inline viewport clearance on mobile and balanced spacing on desktop.
15. Each of the three projects renders its own accurate local cover and alternative text in Neutral and Business; personal gallery photos are not used as project substitutes.
16. Neutral retains the accurate profile portrait and uses project-relevant supporting media.
17. Neutral reads as a friendly student learning journal, and Business reads as an organized student project showcase.
18. Formal phrases such as executive brief, consulting report, professional record, reviewed evidence, and recommended next review are replaced with student-appropriate language where they define Neutral or Business.
19. Light and dark modes retain readable contrast, visible focus, responsive image framing, and no unintended overflow.
20. Engineering has no visual or behavioral regression beyond the already approved shared selector.
21. Neutral displays the existing portrait in a responsive medium panel comparable to Business, without stretching, overflow, or first-viewport domination at representative desktop and mobile widths.
22. A student using Windows 10/11, macOS, Ubuntu/Debian, Fedora, or an Arch-based Linux distribution can identify how to install or verify Git, Node.js 20 or newer, and npm before running the shared project commands.
23. The README gives complete, ordered Git clone and ZIP download setup paths, explains placeholders and local URLs, and documents how to start, stop, restart, verify, update, and troubleshoot the project.
24. The README preserves accurate customization, template-selection, journal, asset, verification, and deployment guidance without duplicating contradictory setup instructions.

## Runtime Selector Decisions

| Decision | Approved requirement |
|---|---|
| Audience and persistence | Any visitor may switch; a valid choice persists in browser local storage and overrides the source default. |
| Placement | Integrate one compact menu button into each template's desktop and mobile header controls. |
| Switching context | Preserve the current section or journal route and the current layout mode. |
| Terminology | Label the control `Portfolio style` to distinguish it from light/dark color mode. |
| Source configuration | Keep `src/data/template.ts` as the typed initial default for browsers without a saved choice. |

## Student-Friendly Refresh Decisions

| Decision | Approved requirement |
|---|---|
| Template identities | Keep the `Neutral` and `Business` selector names; present them as a relaxed learning journal and organized student project showcase. |
| Project imagery | Create three cohesive local project covers and store each image plus alternative text with its project data. |
| Neutral profile imagery | Keep the accurate profile portrait and replace unrelated supporting and project gallery media. |
| Tone | Use warm, light, student-oriented copy and restrained supporting colors suitable for university and internship portfolios. |
| Selector state | Remove the visible check icon while retaining selected-row styling and semantic checked state. |
| Business case spacing | Provide at least 16px inline clearance around case numbering on small viewports. |

## Neutral Portrait and Setup Decisions

| Decision | Approved requirement |
|---|---|
| Portrait footprint | Use a centered medium portrait panel similar to Business, approximately 420px wide or less on desktop, with a stable responsive portrait ratio. |
| Operating-system coverage | Provide dedicated Windows 10/11, macOS, Ubuntu/Debian, Fedora, and Arch-based setup guidance, plus concise WSL and ChromeOS Linux notes where useful. |
| Beginner journey | Lead with official graphical installers, include optional package-manager alternatives, and cover version checks, clone and ZIP paths, local development, editing, verification, updates, and troubleshooting. |

## Extension Configuration

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | The user selected B; the change is a static presentation enhancement with no new data boundary. |
| Property-Based Testing | Disabled | The user selected C; the change contains no significant algorithmic or serialization logic. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown tables | Valid simple pipe tables |
| Code identifiers | Escaped with inline code formatting |
| Application/document boundary | Application code remains outside `aidlc-docs/` |
