# Sleek Three-Theme Redesign - Requirement Questions

> **Status: Answers validated on 2026-08-25.** The approved direction is A/A/A/A/A/A/A/A/B/C and has been incorporated into the requirements document.

Please answer every question by entering one letter after each `[Answer]:` tag. Choose the last option and add a short explanation when none of the listed choices match.

## Question 1

Should this redesign keep the completed cleanup as its starting point, including the deleted `src/data/artistic.ts` file and simplified README?

A) Yes - keep the cleanup and redesign the current code from that baseline (recommended)
B) Keep `src/data/artistic.ts` removed, but revisit the README during this redesign
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 2

How completely should Neutral be removed?

A) Remove Neutral from the registry, selector, source configuration, components, CSS, tests, and README; old saved Neutral choices fall back to Engineering (recommended)
B) Remove Neutral from the selector but keep its source code for possible future reuse
C) Remove Neutral and migrate an old saved Neutral choice to Business instead of Engineering
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 3

Which fully original direction should define the revamped Business theme?

A) Editorial casebook - split introduction, strong typographic chapters, metric-led evidence bands, alternating project studies, and a compact contents system (recommended)
B) Modern studio ledger - modular dashboard-like canvases, structured evidence columns, wide project showcases, and an original floating navigation system
C) Refined report gallery - keep the Business contents concept, but redesign every section with new composition, spacing, surfaces, and project storytelling
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 4

Which fully original direction should define the revamped Artistic theme?

A) Curated gallery - layered image-led introduction, asymmetric editorial sections, generous space, art-catalogue projects, and minimal navigation (recommended)
B) Digital art book - full-width visual chapters, overlapping image and type compositions, bold color fields, and a compact floating toolbar
C) Refined creative notebook - retain the notebook idea, but redesign every section with original compositions, cleaner hierarchy, and fewer decorative elements
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 5

Which background direction should Business use across light and dark modes?

A) Architectural depth - deep ink or warm ivory foundations with subtle perspective lines, soft spotlights, and restrained translucent layers (recommended)
B) Premium editorial paper - warm paper surfaces, fine grain, elegant edge shadows, and carefully separated chapter bands
C) Modern gradient field - low-saturation teal and midnight gradients with soft radial light and minimal geometric accents
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 6

Which background direction should Artistic use across light and dark modes?

A) Luminous gallery canvas - soft layered color washes, organic shapes, subtle grain, and calm neutral reading surfaces (recommended)
B) Night exhibition - deep charcoal canvas, diffused colored light, understated grain, and bright artwork-focused surfaces
C) Contemporary color blocks - large asymmetrical color fields with quiet texture and strong neutral content zones
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 7

What copy rule should Artistic follow?

A) Render only shared portfolio content from profile and section data; allow only short interface labels such as navigation and the style name (recommended)
B) Allow short template-specific headings and labels, but no extra descriptive sentences or personal slogans
C) Allow one short template-specific introduction assembled from existing shared profile wording
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 8

How much motion should the revamped Business and Artistic themes use?

A) Restrained existing entrance and hover effects with reduced-motion support; no custom scrolling (recommended)
B) No theme-specific motion beyond basic control transitions
C) More expressive motion for Artistic, while Business stays restrained
X) Other (please describe after the [Answer]: tag below)

[Answer]: A

## Question 9

Should security extension rules be enforced for this static presentation redesign?

A) Yes - enforce all Security Baseline rules as blocking constraints
B) No - keep the existing decision to skip them for this static portfolio (recommended)
X) Other (please describe after the [Answer]: tag below)

[Answer]: B

## Question 10

Should property-based testing rules be enforced for this UI redesign?

A) Yes - enforce them for applicable functions and state behavior
B) Partial - use them only for pure functions and serialization round trips
C) No - keep focused component, registry, route, accessibility, and responsive tests (recommended)
X) Other (please describe after the [Answer]: tag below)

[Answer]: C

## Constraints Already Understood

- Engineering remains available and should not be visually or behaviorally degraded.
- The final selector should expose Engineering, Business, and Artistic only.
- Business and Artistic should feel as deliberate, polished, and coherent as Engineering while remaining visually distinct.
- No Business or Artistic section may reuse Engineering's section layout, composition, surface treatment, or presentation pattern. Shared data, actions, accessibility utilities, and application behavior may still be reused.
- Business and Artistic must each have an intentional, beautiful, theme-specific background system in light and dark modes; backgrounds must support readability rather than compete with content.
- Artistic must remove extra prose such as `Learning in public, making things with care.` when that wording does not come from shared portfolio content.
- Shared routes, journal posts, layout modes, color mode, template persistence, actions, responsive behavior, accessibility, and GitHub Pages deployment remain supported.
- No new backend, database, CMS, authentication system, or custom scrolling engine is requested.

## Content Validation

| Check                      | Result                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| Mermaid and ASCII diagrams | Not used                                                                                  |
| Question format            | Meaningful lettered options, mandatory Other option, and one `[Answer]:` tag per question |
| Markdown structure         | Valid headings, lists, tables, and inline code                                            |
