# Request Analysis

Use this before generating a BOS experience. Keep it lightweight: the goal is to define the problem well enough to make design decisions, not to write a full product strategy document.

## 1. Define The Problem

- User:
- Usage scenario:
- User goal:
- Business goal:
- Real problem to solve:
- Core task:
- Constraints:
- Completion criteria:

If these are unclear, do not jump directly to page layout, component choice, or visual styling.

## 2. Break Down The Experience

- Core functions:
- Key information:
- User decisions:
- P0 information or action:
- Decision-critical information:
- Supporting information:
- Entry point:
- Next step:
- Likely interruption, failure, or risk point:

This breakdown determines the first structure. A page is the expression of information and behavior priority, not a container for requirement fields.

## 3. Converge Design Inputs

Decide before selecting detailed components:

- Primary flow and transitions:
- First-viewport priority:
- Interaction carrier: page, list, card, map, table, form, popup, bottom sheet, dedicated selection flow, or step flow
- Page or flow type:
- Primary action:
- Secondary actions:
- Required content:
- Required states:

Then read `BOS-page-style/index.md`, choose the closest page strategy from its intent map, and read the selected `BOS-page-style/*.md` file before composing the page framework and hierarchy. If the screen needs reusable task, vehicle, person, site, order, or plan cards, also read `BOS-page-style/card-patterns.md`.

Choose component families only after this structure is clear. Use `component-index.md` to bridge component visuals and behavior, and use `component-library/taroify.md` for baseline mobile interaction behavior and component semantics.

## Clarify Only When Needed

Ask the user a question only when the missing answer would materially change the problem definition, interaction carrier, or page structure. Otherwise, make a reasonable assumption and state it briefly.

## Required States To Consider

- Default:
- Loading:
- Empty:
- Error:
- Disabled:
- Success:
- Selected/active:
- Editing/dirty:
