---
name: bos-design
description: Design BOS mobile operations product experiences for HelloRide using BOS page styles, HelloDesign TaroUI 3.0 tokens, Figma-derived component specs, iconfont rules, and Taroify interactions. Use when analyzing BOS mobile requirements, generating interactive H5 prototypes or Taro/React handoff, critiquing BOS designs, or refining mobile workflows for dispatch, inspection, battery swap, tasks, vehicles, personnel, and city operations.
---

# Bos Design

Use this skill to design mobile product experiences that follow the user's component visuals, visual tokens, interaction patterns, component-defined icon language, and product-specific page language. The goal is to generate design proposals with complete scenario fit for Hello BOS mobile product work, suitable for UX review, business stakeholder discussion, and implementation iteration.

## Execution Principle

Confirm before generating: identify page strategy, component list, required states, tokens, and assets before producing output. If an icon, asset, or component detail is missing, state the gap rather than improvising. Generated results should align with the selected page-style files, matching component style files, `design.md` tokens, and `review-checklist.md`.

## Core Workflow

Design BOS experiences by continuously defining the problem, breaking it down, and converging it into a clear experience. Page styles, components, tokens, and interaction references make that solution BOS-consistent; they do not replace UX judgment.

1. **Define the problem before drawing.** Read `references/request-analysis.md` to identify the user, scenario, user and business goals, real problem, constraints, completion criteria, and likely interruption points.
2. **Break down and converge the experience.** Separate core functions, key information, user decisions, P0 priorities, supporting information, flow transitions, and failure risks before naming a layout or component. Choose the interaction carrier that fits the problem: page, list, card, map, table, form, bottom sheet, dedicated selection flow, or step flow.
3. **Shape the BOS page strategy.** Read `references/BOS-page-style/index.md`, then the closest page style before composing the framework. Define first-viewport priority, grouping, navigation, sticky areas, state model, and edge cases; for forms, decide editability, layout direction, helper need, linked feedback, and whether complex selection needs its own flow. Read `references/BOS-page-style/card-patterns.md` only after the page strategy needs business-object cards.
4. **Choose visual components and behavior.** After structure is clear, read `references/component-styles/index.md` and the matching style files as component contracts. Use `references/component-index.md` and `references/component-library/taroify.md` for interaction behavior and semantics where needed; use `references/design.md` only for missing visual details and token validation.
5. **Express hierarchy visually.** Read `references/visual-quality.md` so color, type, spacing, contrast, icon use, and whitespace reinforce the converged information and action priority.
6. **Apply state guidance.** Read `references/component-styles/display/empty.md` and matching feedback files for empty, permission, offline, loading, toast, dialog, notice, or related states when needed.
7. **Stress-test and generate.** Read `references/design-correctness.md`, check BOS scenario fit and reachability of the primary action, then generate the artifact and a concrete rationale that preserves the problem definition, interaction strategy, and structure.
8. **Review the result.** Check `references/review-checklist.md` and use `references/anti-generic-ai.md` as a final guardrail against generic AI-looking mobile UI patterns.

## Output

**Modes** — Default to interactive H5 HTML/CSS/JS unless the user explicitly asks for real Taroify components, developer handoff, or production implementation. Ask a clarification question only when the user's wording clearly implies a real component target but the codebase/framework is unknown.

**Proposal format** — Always include a concise design rationale alongside the interface:

- User, scenario, user goal, and business goal
- Design strategy and information hierarchy
- Interaction and state logic
- Visual rationale
- Interface/prototype result

For multi-screen flows, add one section per screen plus a short flow overview. Keep rationale concrete — name the business role, scenario, and goals. Avoid generic claims like "improves efficiency" without explaining how.

**H5 hard rules** — Base viewport: 390×844. Render Status Bar and Home Indicator per `references/component-styles/basic/system.md`. Keep bottom actions above the safe area. Use iconfont for all icons (no hand-drawn SVG). Include lightweight JavaScript for key interactions (pickers, overlays, selection states, toast/dialog feedback, form validation, loading transitions, empty/error recovery) but stay prototype-focused — no full application state architecture unless asked.

**Quality bar** — Treat the first screen as the real product experience, not a marketing landing page. Prefer task-focused mobile layouts with clear hierarchy, predictable touch targets, and strong state handling. Treat empty, error, permission, loading, and gated states as product guidance, not decoration.

## Priority Order

When references conflict, resolve in this order:

1. Current user request
2. Inferred UX scenario, user goal, page strategy, and information hierarchy
3. Product-specific page style library (`references/BOS-page-style/`)
4. Figma-derived component style files (`references/component-styles/`)
5. `references/design.md` token and visual system
6. Taroify interaction reference
7. General mobile UX best practices

## Component And Token Rules

Visual authority: `component-styles/` > `design.md` tokens > Taroify behavior semantics.

- Treat `references/component-styles/` files as strict visual contracts. Do not let Taroify defaults override BOS visuals.
- Use Taroify for behavior semantics only where component style files do not define the interaction.
- Prefer explicit tokens from the most specific `design.md` section; do not hard-code values that have named tokens.
- Use iconfont as defined in `references/component-styles/basic/icon.md` — do not hand-draw icons, arrows, checks, or status marks.
- If exact implementation is not possible, state `Not implemented exactly: <component> / <reason>`.

## References

See `references/README.md` for the full file index and usage guidance. The Core Workflow above tells you when to read each file.
