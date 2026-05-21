---
name: bos-design
description: Design mobile app product pages using layered Figma component visuals, design tokens, Taroify interactions, component-defined icons, and page style references. Use when creating, critiquing, implementing, or refining mobile product screens, especially when generating interactive H5 prototypes from a component style library, optional design.md visual system, Taroify interaction patterns, and page-level style patterns.
---

# Bos Design

Use this skill to design mobile product experiences that follow the user's component visuals, visual tokens, interaction patterns, component-defined icon language, and product-specific page language. The goal is to generate design proposals with complete scenario fit for Hello BOS mobile product work, suitable for UX review, business stakeholder discussion, and implementation iteration.

## Core Workflow

Think like a UX designer first, then use the reference files to make the solution consistent and executable. Do not jump directly from the request to UI styling.

1. **Understand the request and scenario.** Confirm the desired output mode only when the user explicitly asks for real Taroify components or developer handoff; otherwise default to interactive H5 HTML/CSS/JS. Read `references/request-analysis.md` to infer the user role, scenario, primary goal, trigger, constraints, completion criteria, core task, required content, and required states.
2. **Frame the page problem.** Decide the page or flow type, user decision to support, first-viewport priority, primary action, secondary actions, and success path. Read `references/BOS-page-style/index.md` to match the request intent to the closest BOS page style, then read that selected page style file before composing the page framework. If the request needs a reusable business-object card pattern, also read `references/BOS-page-style/card-patterns.md`.
3. **Structure the UX solution.** Define the information hierarchy, module order, content grouping, navigation model, sticky areas, state model, and key edge cases before choosing detailed components. The output should be able to stand as a low-fidelity interaction plan even without final UI styling.
4. **Select components by visual source first.** Read `references/component-styles/index.md` and choose the closest recorded component style files for the page. A component does not need a one-to-one Taroify match to be usable; if the style library contains a product or scene component such as Map, use the style file as the source of truth for that component's visual and scene-specific behavior.
5. **Build the interaction prototype.** Read `references/component-index.md` to map selected visual components to behavior families where possible, then read `references/component-library/taroify.md` only for Taroify interaction behavior and mobile component semantics. Use Taroify behavior for common controls such as forms, pickers, popups, dialogs, toast, checkbox, radio, switch, tabs, loading, disabled, and selection.
6. **Implement components by specification.** Use every relevant file in `references/component-styles/` as a hard implementation contract. Match the component anatomy, layout, dimensions, typography, colors, radius, borders, dividers, shadows, icon source, icon names, state visuals, motion, and any documented component-level interaction shape exactly. If `references/design.md` exists, read it only as the token fallback and visual system source for missing component details.
7. **Improve visual quality.** Read `references/visual-quality.md` to strengthen page-level visual anchor, business-state expression, hierarchy, rhythm, effective decoration, and polish without losing task clarity.
8. **Apply icon and state guidance where needed.** Use icon source, size, stroke, color, and slot rules from matching `references/component-styles/` files first; use `references/design.md` Icon rules only as fallback. For empty, no-data, permission, gated, offline, location, failed-loading, or partial-data states, read `references/component-styles/display/empty.md`. For loading, toast, dialog, notice, and other feedback states, read the matching file in `references/component-styles/feedback/`.
9. **Run a scenario stress test.** Before finalizing, read `references/design-correctness.md` and check whether the solution still works in the real BOS context: outdoor readability, one-handed operation, scan/location/camera dependency, manager scanning efficiency, exception visibility, permission/offline recovery, destructive-action confirmation, and whether the primary action is reachable.
10. **Generate the artifact and rationale.** Design or implement the requested page in the selected output mode, preserving the page strategy and interaction structure instead of making a component demo. Explain the design thinking with the output format below so reviewers understand why the solution fits the scenario.
11. **Review the result.** Check the result against `references/review-checklist.md`. Use `references/anti-generic-ai.md` as a final guardrail against generic AI-looking mobile UI patterns.

## Output Modes

Default to interactive H5 HTML/CSS/JS when the user asks to generate a page and does not specify an implementation mode.

- **Taroify component prototype**: Generate Taro/React-style code using real Taroify component structure where possible, but keep visuals governed by matching `references/component-styles/` files. Fall back to `references/design.md` tokens only for missing details. Use this when the user wants developer handoff or real component integration.
- **Interactive H5 prototype**: Generate standalone HTML/CSS/JS that implements matching `references/component-styles/` files as strict component specifications and uses Taroify only for behavior not already defined by those component files. Use this when the user wants fast visual exploration in a browser. If a component style source is missing or cannot be implemented exactly, state the limitation explicitly instead of substituting a near match.

If the user says only "generate a page", "make a page", or "make an HTML", generate an interactive H5 prototype. Ask a clarification question only when the user's wording clearly implies real Taroify components, production implementation, or developer handoff but the target codebase/framework is unknown.

## Proposal Output Format

For design proposals, do not output only the interface. Include the interface plus a concise design rationale in a slide/slider-like structure.

For a single page, structure the response as one proposal slide:

- User, scenario, user goal, and product goal
- Design strategy
- Information hierarchy
- Interaction and state logic
- Visual rationale
- Interface/prototype result

For multiple screens or an interactive flow, create one slide/slider section per screen or major step, plus a short flow overview. Each section should anchor on who uses it, where it is used, what user goal it supports, and what product goal it advances.

Keep rationale concrete. Name the business role, scenario context, user goal, and product goal. Avoid generic claims such as "improves efficiency" unless the explanation says how.

## Interactive H5 Requirements

When generating H5, include JavaScript for key component interactions instead of drawing only static states.

Required interaction coverage when the page includes the component:

- Picker or Date field: tapping the Field opens a bottom sheet; selecting an option updates the Field value; confirm/cancel closes the sheet.
- Popup, Bottom Sheet, ActionSheet, ShareSheet: trigger opens overlay; backdrop/close/cancel closes it; selected actions visibly update or provide feedback.
- Checkbox and Radio: tapping the control or row toggles selected state, icon, and token-bound color.
- Switch: tapping toggles on/off state.
- Tabs and segmented controls: tapping changes active state and visible content.
- Toast and Notify: triggering action displays the message and hides it after a short duration unless the state is persistent.
- Dialog: triggering action opens the dialog; confirm/cancel changes state or closes it.
- Form fields: focus state, clear action, disabled state, validation error, and submit loading should be represented when relevant.
- Loading and Skeleton: provide a way to transition from loading to content if the page depends on async data.
- Empty/Error recovery: primary action should change the prototype state when that transition is meaningful.

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

Use `references/anti-generic-ai.md` as a review guardrail, not as a source for page structure or visual style.

## Component Source Priority

When a Figma component library has been converted into files under `references/component-styles/`, use it as the primary component visual source.

- Use Figma-derived component style files for visual implementation: dimensions, spacing, typography, colors, radius, shadows, dividers, borders, icon source, icon slots, layout alignment, and available states.
- Treat each matching component style file as a strict component specification, not a moodboard or inspiration reference. The generated H5 should be judged as `matches spec` or `does not match spec`; avoid loose judgments such as "basically follows" or "close enough."
- Do not approximate component internals with hand-written substitutes when the component file defines them.
- Do not replace a documented component interaction shape with another pattern. For example, if `input/picker.md` defines a drum-roller picker, do not implement it as a list selector.
- Do not hand-draw icons, arrows, checks, clear buttons, toast status marks, loading marks, or selection marks when `basic/icon.md` defines an iconfont source and icon names.
- If exact implementation is not possible in the current artifact, explicitly label it in the final response as `Not implemented exactly: <component> / <reason>`.
- Use Taroify for interaction behavior and mobile component semantics: Popup, Picker, Dialog, Toast, Notify, Field, Form validation, Checkbox, Radio, Switch, Tabs, loading, disabled, and selection behavior.
- Do not require `component-styles/` and Taroify to have identical component names or identical coverage. If a style component has a Taroify behavior analogue, combine them. If it has no Taroify analogue, use the style file and product/page context directly.
- Product or scene components that exist only in `component-styles/`, such as `display/map.md`, are valid component sources. Use their documented visual rules, assets, runtime notes, and local interaction notes without inventing a Taroify equivalent.
- Use `references/design.md` as the token fallback when Figma does not define a visual detail or state.
- Do not override Figma component visuals with Taroify defaults.
- Do not use Taroify as the visual source when a matching Figma component style file exists.

## Token Reading Rules

When `references/design.md` exists, treat it as an exact token source, not a loose inspiration reference. If a matching Figma-derived component style exists, use `design.md` only for missing details and token validation.

- Use explicit tokens from the most specific relevant section before inferring from nearby examples.
- For component text styles, prefer `Typography Rules` tokens such as `Title/18`, `Body/14`, `Mark/12`, and `Number/*` over ad hoc pixel values.
- For colors, prefer named role tokens from `Color Palette & Roles` and `文字与图标` over raw or approximate hex values.
- For radius, shadows, spacing, dividers, borders, safe areas, and icon rules, read the matching named section in `design.md` before writing CSS.
- If two `design.md` rules appear to conflict, choose the more component-specific rule. If still ambiguous, state the assumption briefly.
- Do not use a value from an example table as a component default when a formal token table defines the same property.
- Do not hard-code visual values that have corresponding tokens in `design.md`.

## Output Expectations

- Treat the first screen as the real product experience, not a marketing landing page.
- Prefer task-focused mobile layouts with clear hierarchy, predictable touch targets, and strong state handling.
- Use page-level patterns before inventing new compositions.
- Use Figma-derived component styles as the baseline visual source when available.
- Use Taroify as the baseline mobile interaction reference for generated H5 unless the user names another component library.
- Use icon source and icon slot rules from component style files first; use `references/design.md` Icon rules as fallback.
- Apply `references/design.md` over Taroify visual defaults and generic icon defaults whenever no Figma-derived component style defines the visual detail.
- Treat empty, error, permission, loading, and gated states as product guidance, not decoration.
- Avoid AI-template visual habits: decorative gradients, generic hero sections, floating glow shapes, vague copy, fake dashboards, and card piles without product logic.
- Avoid generic mobile SaaS templates when the product references define a more specific style.

## Reference Map

- `references/request-analysis.md`: Lightweight page-generation analysis. Use this before choosing page and component patterns.
- `references/component-styles/index.md`: Index of recorded Figma-derived component visual style files and recording status. Read this before opening specific component style files.
- `references/component-styles/`: Optional Figma-derived component visual style library. If present, it is the primary component visual source.
- `references/design.md`: Optional visual system. If present, it is the source for typography, colors, spacing, radius, elevation, motion, imagery, and icon visual rules.
- `references/visual-quality.md`: Page-level polish rules for visual anchor, business-state expression, hierarchy, rhythm, effective decoration, and avoiding component-stitching feel.
- `references/design-correctness.md`: Correctness criteria for scenario fit, design rationale, stakeholder-readable proposal structure, and BOS-specific stress checks.
- `references/BOS-page-style/index.md`: Intent index for selecting the closest BOS page style before page composition.
- `references/BOS-page-style/`: BOS page-level design strategies, including page types and reusable business-object card patterns.
- `references/anti-generic-ai.md`: Final review guardrail for avoiding generic AI-generated UI aesthetics and empty template composition.
- `references/component-index.md`: Bridge between recorded component visual styles and behavior families. Use it to decide when a style component can borrow Taroify interaction semantics, and when a style-only component should stand on its own.
- `references/component-library/taroify.md`: Baseline Taroify interaction and mobile component semantics reference for H5 generation. Do not use it as a visual source.
- `references/review-checklist.md`: Final self-review criteria.
