# Visual Quality

Use this reference after the UX structure, interaction model, component choices, and design tokens are clear. This file guides page-level polish and business expression. It does not replace `design.md` tokens or Figma-derived component styles.

## Core Rule

Visual quality must come from business meaning, hierarchy, rhythm, state expression, spatial context, brand recognition, and interaction feedback. Decorative elements are allowed when they improve the user's understanding or task efficiency.

## What This File Controls

- Page-level visual anchor.
- Business-state expression.
- Module hierarchy and density.
- Spacing rhythm and scanning paths.
- Effective decorative elements.
- Avoiding component-stitching feel.
- Avoiding visual noise that weakens task clarity.

## Visual Anchor

Every screen should have one primary visual anchor. The anchor should help the user understand where they are and what matters most.

Possible BOS anchors:

- Current task card.
- Map with bottom task sheet.
- City metric summary.
- Exception or risk module.
- Vehicle status panel.
- Work progress or step module.
- Form completion or submission state.
- Settlement or income summary.

The visual anchor should be stronger than supporting modules through hierarchy, spacing, density, state color, or layout prominence. It should not become a marketing hero.

## Effective Decoration

A decorative or expressive element is allowed only when it satisfies at least one purpose:

- Clarifies business state.
- Improves scanability.
- Reinforces page hierarchy.
- Communicates spatial, task, vehicle, or operational context.
- Supports brand recognition without reducing readability.
- Provides feedback for interaction, progress, completion, risk, or failure.

If an expressive element satisfies none of these purposes, remove it or simplify it.

## Business Expression Patterns

Use visual expression to make operational meaning easier to read:

- Task type can be reinforced by a small icon, colored status strip, marker, or tag.
- Task urgency can be reinforced by semantic color, icon, countdown, or priority label.
- Progress can be shown with steps, progress bars, completion counts, or timeline states.
- Risk and exception should be visually discoverable without relying only on color.
- Map context can use markers, route hints, clustered counts, and selected-state sheets.
- Manager pages can use compact metrics, exception summaries, and filtered lists as visual structure.

## Surface And Hierarchy

Use surfaces to express information hierarchy:

- Primary module: strongest visual weight on the page.
- Secondary modules: lighter surfaces, smaller headings, or lower contrast.
- Repeated list items: stable structure and predictable scan points.
- Sticky action areas: clear separation, safe-area spacing, and strong affordance.
- Bottom sheets and dialogs: clear layer relationship through radius, shadow, and overlay.

Avoid making all modules equal weight. A page where every card has the same size, shadow, and emphasis usually feels assembled rather than designed.

## Rhythm And Density

Visual polish should improve scanning:

- Keep related information close and unrelated information separated.
- Use consistent positions for status, time, distance, amount, and primary actions.
- Vary density according to task importance: core content can be roomier; supporting lists can be denser.
- Use token-based spacing from `design.md`; do not invent arbitrary spacing.
- Preserve enough whitespace for readability, especially in outdoor worker flows.

## State Color And Emphasis

Use state color intentionally:

- Brand blue: primary action, selection, link, or current focus.
- Semantic colors: operational status, risk, warning, success, failure, and exception.
- Neutral colors: inactive, historical, disabled, secondary, or read-only information.

Do not use brand color as decoration when it competes with status meaning. Do not rely on color alone; pair critical states with text, icon, or structure.

## Interaction Feedback

Visual feedback should make the system feel reliable:

- Pressed, selected, loading, disabled, success, and error states should be visible.
- Bottom sheets, dialogs, tabs, filters, and pickers should show clear open/closed and active/inactive states.
- Completion or submission feedback should confirm the business result, not just show a generic success message.
- Motion, if used, should clarify state transition and remain quick and restrained.

## Avoid Decorative Drift

Avoid expressive choices that weaken the product task:

- Decorative gradients without business meaning.
- Glow, orb, bokeh, or abstract backgrounds used only for visual excitement.
- Fake charts, fake avatars, fake metrics, or fake social proof.
- Icons used as filler beside every label.
- Card piles with no hierarchy.
- Large decorative headers that push task content below the fold.
- Low-contrast brand washes that reduce outdoor readability.
- Visual treatments that make manager pages look like marketing dashboards.

## Review Questions

Before finalizing, ask:

- What is the page's visual anchor?
- Does the strongest visual element match the user's primary task?
- Are status, risk, progress, and next action easier to understand because of the visual treatment?
- Are decorative elements carrying business meaning or improving comprehension?
- Does the page still feel like BOS rather than a generic mobile template?
- Does the page avoid looking like separate components stitched together?
