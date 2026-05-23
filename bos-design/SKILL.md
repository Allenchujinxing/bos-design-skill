---
name: bos-design
description: Design BOS mobile operations product experiences for HelloRide using BOS page styles, HelloDesign TaroUI 3.0 tokens, Figma-derived component specs, iconfont rules, and Taroify interactions. Use when analyzing BOS mobile requirements, generating interactive H5 prototypes or Taro/React handoff, critiquing BOS designs, or refining mobile workflows for dispatch, inspection, battery swap, tasks, vehicles, personnel, and city operations.
---

# Bos Design

Use this skill to design mobile product experiences that follow the user's component visuals, visual tokens, interaction patterns, component-defined icon language, and product-specific page language. The goal is to generate design proposals with complete scenario fit for Hello BOS mobile product work, suitable for UX review, business stakeholder discussion, and implementation iteration.

## Core Workflow

Design BOS experiences by continuously defining the problem, breaking it down, and converging it into a clear experience. Page styles, components, tokens, and interaction references make that solution BOS-consistent; they do not replace UX judgment.

1. **Define the problem before drawing.** Unless the user explicitly asks for real Taroify components or developer handoff, default to interactive H5 HTML/CSS/JS. Read `references/request-analysis.md` to identify the user, scenario, user and business goals, real problem, constraints, completion criteria, and likely interruption points.
2. **Break down and converge the experience.** Separate core functions, key information, user decisions, P0 priorities, supporting information, flow transitions, and failure risks before naming a layout or component. Choose the interaction carrier that fits the problem: page, list, card, map, table, form, bottom sheet, dedicated selection flow, or step flow.
3. **Shape the BOS page strategy.** Read `references/BOS-page-style/index.md`, then the closest page style before composing the framework. Define first-viewport priority, grouping, navigation, sticky areas, state model, and edge cases; for forms, decide editability, layout direction, helper need, linked feedback, and whether complex selection needs its own flow. Read `references/BOS-page-style/card-patterns.md` only after the page strategy needs business-object cards.
4. **Choose visual components and behavior.** After structure is clear, read `references/component-styles/index.md` and the matching style files as component contracts. Use `references/component-index.md` and `references/component-library/taroify.md` for interaction behavior and semantics where needed; use `references/design.md` only for missing visual details and token validation.
5. **Express hierarchy visually.** Read `references/visual-quality.md` so color, type, spacing, contrast, icon use, and whitespace reinforce the converged information and action priority.
6. **Apply state guidance.** Use icon rules from matching component style files first and `design.md` only as fallback. Read `references/component-styles/display/empty.md` and matching feedback files for empty, permission, offline, loading, toast, dialog, notice, or related states when needed.
7. **Stress-test and generate.** Read `references/design-correctness.md`, check BOS scenario fit and reachability of the primary action, then generate the artifact and a concrete rationale that preserves the problem definition, interaction strategy, and structure.
8. **Review the result.** Check `references/review-checklist.md` and use `references/text-inverse-generic-ai.md` as a final guardrail against generic AI-looking mobile UI patterns.

## Output Modes

Default to interactive H5 HTML/CSS/JS when the user asks to generate a page and does not specify an implementation mode.

- **Interactive H5 prototype**: Generate standalone HTML/CSS/JS for fast browser exploration. Match component style files strictly and use Taroify for behavior only where those files do not define it.
- **Taroify component prototype**: Generate Taro/React-style implementation guidance when the user wants developer handoff or real component integration, while keeping visuals governed by component style files and `design.md` fallback details.

If the user says only "generate a page", "make a page", or "make an HTML", generate an interactive H5 prototype. Ask a clarification question only when the user's wording clearly implies real Taroify components, production implementation, or developer handoff but the target codebase/framework is unknown.

## Proposal Output Format

For design proposals, do not output only the interface. Include the interface plus a concise design rationale in a slide/slider-like structure.

For a single page, structure the response as one proposal slide:

- User, scenario, user goal, and business goal
- Design strategy
- Information hierarchy
- Interaction and state logic
- Visual rationale
- Interface/prototype result

For multiple screens or an interactive flow, create one slide/slider section per screen or major step, plus a short flow overview. Each section should anchor on who uses it, where it is used, what user goal it supports, and what business goal it advances.

Keep rationale concrete. Name the business role, scenario context, user goal, and business goal. Avoid generic claims such as "improves efficiency" unless the explanation says how.

## Interactive H5 Requirements

When generating H5, include JavaScript for key component interactions instead of drawing only static states.

For every full-screen mobile H5 demo, read `references/component-styles/basic/system.md` and render the system Status Bar and Home Indicator. Keep bottom actions above the Home Indicator.

Cover the key interactions that appear in the page: open/update/confirm/cancel for pickers and overlays; selected-state changes for checkbox, radio, switch, tabs, and segmented controls; toast, notify, or dialog feedback; relevant form focus, clear, disabled, validation, and submit-loading states; loading-to-content transitions; and meaningful empty/error recovery.

Keep interactions lightweight and prototype-focused. Do not build a full application state architecture unless the user asks for production code.

## Priority Order

When references conflict, resolve decisions in this order:

1. Current user request
2. Inferred UX scenario, user goal, page strategy, and information hierarchy
3. Product-specific page style library
4. Figma-derived component style files in `references/component-styles/`, if present
5. `references/design.md` token and visual system, if present
6. Component style state rules
7. Taroify interaction reference
8. Component-defined icon rules and `design.md` Icon fallback
9. General mobile UX best practices

Use `references/text-inverse-generic-ai.md` as a review guardrail, not as a source for page structure or visual style.

## Component And Token Rules

- Treat matching `references/component-styles/` files as strict visual and component-level interaction contracts, including component or scene components without Taroify equivalents.
- Do not approximate documented component internals, replace a documented interaction shape, or let Taroify defaults override BOS visuals.
- Use Taroify for behavior semantics where appropriate; use `references/design.md` as an exact token and visual fallback only for missing component details.
- Prefer explicit tokens from the most specific `design.md` section; do not hard-code visual values with named tokens.
- Do not hand-draw icons, arrows, checks, clear buttons, toast marks, loading marks, or selection marks when `basic/icon.md` defines iconfont usage.
- If exact implementation is not possible, state `Not implemented exactly: <component> / <reason>`.

## Output Expectations

- Treat the first screen as the real product experience, not a marketing landing page.
- Prefer task-focused mobile layouts with clear hierarchy, predictable touch targets, and strong state handling.
- Use BOS page strategies before inventing new compositions.
- Use component style files for visual implementation and Taroify for H5 interaction semantics unless the user names another component library.
- Treat empty, error, permission, loading, and gated states as product guidance, not decoration.
- Avoid generic AI/mobile SaaS templates when BOS references define a more specific experience.

## Reference Map

- `references/request-analysis.md`: Lightweight UX problem-definition worksheet. Use this before choosing page strategy, interaction carrier, or component patterns.
- `references/component-styles/index.md`: Index of recorded Figma-derived component visual style files and recording status. Read this before opening specific component style files.
- `references/component-styles/`: Optional Figma-derived component visual style library. If present, it is the primary component visual source.
- `references/design.md`: Optional visual system. If present, it is the source for typography, colors, spacing, radius, elevation, motion, imagery, and icon visual rules.
- `references/visual-quality.md`: Page-level polish rules for visual anchor, business-state expression, hierarchy, rhythm, effective decoration, and avoiding component-stitching feel.
- `references/design-correctness.md`: Correctness criteria for scenario fit, design rationale, stakeholder-readable proposal structure, and BOS-specific stress checks.
- `references/BOS-page-style/index.md`: Intent index for selecting the closest BOS page style before page composition.
- `references/BOS-page-style/`: BOS page-level design strategies, including page types and reusable business-object card patterns.
- `references/text-inverse-generic-ai.md`: Final review guardrail for avoiding generic AI-generated UI aesthetics and empty template composition.
- `references/component-index.md`: Bridge between recorded component visual styles and behavior families. Use it to decide when a style component can borrow Taroify interaction semantics, and when a style-only component should stand on its own.
- `references/component-library/taroify.md`: Baseline Taroify interaction and mobile component semantics reference for H5 generation. Do not use it as a visual source.
- `references/review-checklist.md`: Final self-review criteria.
