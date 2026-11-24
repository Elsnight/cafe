---
name: "Fausto's Coffee"
description: "A tactile roast ledger for fresh, made-to-order coffee in Quito."
colors:
  roast-orange: "#e85d2a"
  roast-orange-dark: "#b83e18"
  status-green: "#55705a"
  status-green-light: "#d8e0cf"
  error-red: "#a8322d"
  charred-ink: "#17130f"
  soft-ink: "#332b23"
  oat-paper: "#f1e7d2"
  light-paper: "#fffaf0"
  deep-paper: "#d9c9a9"
  rule-line: "rgba(23, 19, 15, 0.24)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.6rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.08em"
rounded:
  control: "2px"
  surface: "3px"
  circular: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "28px"
  section: "108px"
components:
  button-primary:
    backgroundColor: "{colors.roast-orange}"
    textColor: "{colors.light-paper}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.roast-orange-dark}"
    textColor: "{colors.light-paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.charred-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "7px 13px"
    height: "40px"
  input:
    backgroundColor: "{colors.light-paper}"
    textColor: "{colors.charred-ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "50px"
  option-card:
    backgroundColor: "{colors.light-paper}"
    textColor: "{colors.charred-ink}"
    rounded: "{rounded.control}"
    padding: "18px 48px 16px 18px"
    height: "118px"
  option-card-selected:
    backgroundColor: "{colors.charred-ink}"
    textColor: "{colors.light-paper}"
  status-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.status-green}"
    typography: "{typography.label}"
    padding: "10px 12px"
---

# Design System: Fausto's Coffee

## Overview

**Creative North Star: "The Roast Ledger"**

The system feels like a working production record beside the roaster: tactile oat paper, charred ink, graph rulings, monospaced batch labels, and decisive workshop typography. It is practical rather than nostalgic—the visual world makes freshness and process tangible while keeping prices, choices, and delivery information easy to scan.

The experience is dense but orderly. Strong rules, tabular rows, squared controls, and status marks communicate operational credibility; roast orange supplies action and heat, while muted green signals progress and completion. One provenance-tracked generic workshop material plate may add task-light atmosphere, but it remains context rather than evidence. Decorative details should continue to behave like useful marks on a real artifact, never like generic coffee-shop ornament.

**Key Characteristics:**
- Tactile paper and ink contrast with sparse, functional accent color.
- Condensed display type, readable sans text, and monospaced ledger metadata have distinct jobs.
- Thin rules, graph grids, stamps, and tabular alignment establish workshop precision.
- Controls are compact, squared, and visibly stateful.
- Depth is reserved for physical paper-like surfaces, not every container.
- A single generic workshop plate can supply material realism without depicting a person or identifiable place.

## Colors

Roast heat, production status, and paper/ink neutrals form a compact, high-contrast palette.

### Primary
- **Roast Orange:** The principal action and heat color for calls to action, active process states, focus indicators, and small emphasis marks.
- **Deep Roast Orange:** The pressed, hover, and stamped counterpart to Roast Orange.

### Secondary
- **Status Green:** Completion, delivery, founder fields, and process-status marks.
- **Pale Status Green:** Quiet status backing where a low-contrast green surface is needed.

### Tertiary
- **Error Red:** Validation errors only; it should not compete with roast actions.

### Neutral
- **Charred Ink:** Primary text, dark fields, navigation, and selected controls.
- **Soft Ink:** Secondary copy where full black would be too forceful.
- **Oat Paper:** The default canvas and ledger-sheet surface.
- **Light Paper:** Input surfaces and text over dark or saturated fields.
- **Deep Paper:** Recessed steps, page edges, and low-emphasis structure.
- **Rule Line:** Dividers, field borders, and register lines.

### Named Rules

**The Heat and Status Rule.** Use Roast Orange for action or active heat; use Status Green for progress, completion, or delivery. Do not swap their meanings.

**The Paper First Rule.** Most light surfaces stay within the oat-paper family; pure white is not the default canvas.

## Typography

**Display Font:** Barlow Condensed (with sans-serif fallback)  
**Body Font:** Public Sans (with sans-serif fallback)  
**Label/Mono Font:** Azeret Mono (with monospace fallback)

**Character:** The pairing combines workshop authority, everyday readability, and the precision of a batch record. Each family has a defined role and should remain visually distinct.

### Hierarchy
- **Display** (800, fluid from large section scale, 0.95 line-height): Uppercase claims and major section headings; keep them compact and balanced.
- **Title** (typically 750–800, around 2rem, near-solid line-height): Product sizes, row titles, form headings, and strong summaries.
- **Body** (400–600, 1rem base, 1.55 line-height): Explanations and transactional guidance, generally held to readable measures around 44–62 characters.
- **Label** (600–700, approximately 0.58–0.75rem, tracked and usually uppercase): Batch codes, prices, statuses, legends, table heads, and metadata.

### Named Rules

**The Three-Job Type Rule.** Barlow Condensed speaks, Public Sans explains, and Azeret Mono records. Do not use one family to imitate another role.

**The Compressed Headline Rule.** Display headings are bold, tightly led, and commonly uppercase; body copy remains sentence case and comfortably spaced.

## Layout

The default content shell is centered at a maximum of 1240px with 20px desktop side clearance. Layouts favor explicit grids, ruled rows, and asymmetric column ratios over generic equal cards. Section rhythm is generous on wide screens (commonly 100–108px vertically), while component internals use a compact 8–28px spacing vocabulary.

At 980px, primary navigation collapses and complex grids begin simplifying. At 760px, the shell narrows to 12px side clearance, multi-column content stacks, tabular layouts become compact two-column or single-column records, section padding reduces to 72px, and actions expand to the available width when needed. Responsive changes preserve information hierarchy rather than merely shrinking type.

**The Register Grid Rule.** Align related labels, values, and actions into visible rows or columns; spacing should communicate records, not floating card collections.

## Elevation & Depth

The system is flat by default and uses borders, tonal fields, graph rulings, and paper edges for most separation. Shadows are structural and ambient: they make a substantial paper artifact or transactional panel feel physically lifted, but routine rows and controls remain unshadowed. A generic workshop material plate may sit behind or within a paper artifact under dark overlays and focused task-light contrast; it supports physical depth without becoming the content claim.

### Shadow Vocabulary
- **Lifted sheet** (`0 22px 54px rgba(0, 0, 0, 0.34)`): A major paper artifact over a dark field.
- **Paper panel** (`0 18px 38px rgba(58, 43, 25, 0.12)`): A light specification or information sheet.
- **Transactional panel** (`0 18px 38px rgba(58, 43, 25, 0.14), 0 3px 8px rgba(58, 43, 25, 0.08)`): Forms and focused order surfaces.

### Named Rules

**The Structural Shadow Rule.** Apply elevation to whole artifacts and transactional panels, never to every row, chip, or button.

**The Provenanced Material Rule.** The system permits one provenance-tracked generic workshop material plate integrated through task-light depth. Generated imagery must stay unbranded and must never imply a real person, founder, roastery, storefront, or identifiable location.

## Shapes

The form language is nearly square. Controls use a 2px radius and larger surfaces are normalized to 3px, with thin ink rules doing more work than curvature. Circles are reserved for literal holes, counters, founder marks, and other clearly circular indicators. Double borders, slight rotations, and hard-edged stamps create an applied-by-hand quality without softening the system.

**The Squared Workshop Rule.** Default to 2–3px corners; use a circle only when the component’s meaning or physical metaphor calls for one.

## Components

Components feel tactile and decisive: every interactive state changes clearly, while decoration remains attached to a functional role.

### Buttons
- **Shape:** Compact, squared controls with a 2px radius; major actions have a minimum height of 52px.
- **Primary:** Roast Orange with Light Paper text, bold condensed uppercase type, and 22px horizontal padding.
- **Hover / Focus:** Hover shifts to Deep Roast Orange and lifts 2px over 180ms; keyboard focus uses a 3px Roast Orange outline with 4px offset.
- **Secondary / Ghost:** Transparent with a one-pixel ink or paper border and monospaced label type. Selected ghost controls invert to Charred Ink with Light Paper text.
- **Success:** A completed add action changes from Roast Orange to Status Green.

### Chips
- **Style:** Small rectangular labels use monospaced uppercase type, a one-pixel accent border, and transparent backing.
- **State:** Status stamps use a heavier or double Status Green border; selection chips invert from paper to ink rather than adding a soft pill.

### Cards / Containers
- **Corner Style:** Nearly square (2–3px).
- **Background:** Oat or Light Paper, often with a subtle 28px graph ruling.
- **Shadow Strategy:** Only substantial sheet-like or transactional containers use the structural shadows above.
- **Border:** One-pixel Charred Ink or Rule Line; two-pixel top rules establish table and register starts.
- **Internal Padding:** Commonly 18–30px for controls and compact panels, and 50px for large specification sheets.

### Inputs / Fields
- **Style:** Light Paper fill, one-pixel Rule Line border, 2px radius, 50px minimum height, and 12px by 14px padding.
- **Focus:** Border changes to Roast Orange with a translucent 3px orange outline and 1px offset.
- **Error / Disabled:** Error fields use Error Red borders and adjacent red copy; disabled actions retain their shape and drop to 50% opacity.

### Navigation

Navigation sits on Charred Ink with Light Paper text. The wordmark uses condensed uppercase display type with a small Roast Orange monospaced location line. Desktop links reveal a 2px orange underline over 180ms. At the navigation breakpoint, links move into a full-width dark register below the header, separated by thin paper-toned rules.

### Option Card

Choice cards are 118px-tall squared controls with a two-column icon-and-copy structure. The default is Light Paper with a Rule Line border; selected cards invert to Charred Ink and Light Paper, with a small Roast Orange check marker. Invalid unselected cards use an Error Red border.

### Selection Continuity

When an upstream configurator and a downstream transaction form represent the same choices, carry the latest configured values forward into empty matching fields. Preserve visible selection state and never overwrite a value the user has already edited downstream.

### Status Stamp

Status stamps use monospaced uppercase labels, firm accent-colored borders, and a slight one- or two-degree rotation. They communicate workflow state or verification, not decoration.

## Do's and Don'ts

### Do:
- **Do** preserve the distinct heat, status, and error meanings of the three accent colors.
- **Do** use rules, alignment, and tabular numerals to make prices, totals, and process states easy to compare.
- **Do** keep interactive states explicit through inversion, accent changes, underlines, or status color.
- **Do** reduce motion to near-zero when the user requests reduced motion.
- **Do** use tactile marks—rulings, stamps, punched circles, and paper edges—only when they support the production-ledger character.
- **Do** retain embedded provenance for every generated raster and treat workshop imagery as generic material atmosphere rather than factual proof.
- **Do** preserve compatible user selections across transaction stages without replacing later edits.

### Don't:
- **Don't** introduce generic luxury-coffee styling such as soft cream cards, gold gradients, script type, or ornamental bean motifs.
- **Don't** turn every content group into a rounded, elevated card.
- **Don't** use Roast Orange and Status Green as interchangeable decoration.
- **Don't** collapse display, body, and ledger metadata into one type family.
- **Don't** let generated imagery imply Fausto, another real person, a real roastery, storefront, or identifiable location.
- **Don't** promote a single page’s section sequence or composition into a global layout requirement.
