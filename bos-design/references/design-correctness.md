# Design Correctness

Use this reference to judge whether a generated BOS design proposal is directionally correct, not merely visually polished.

## Goal

The goal is to generate design proposals that aim for complete scenario fit for Hello BOS mobile product work. A correct proposal should match the user role, business scenario, operational constraints, task goal, information priority, interaction model, state coverage, visual system, and business design logic.

The proposal should be strong enough for human UX review, stakeholder discussion, and implementation iteration.

## Correctness Layers

A proposal is directionally correct only when it shows a clear line from business problem to final experience.

### 1. Problem Definition

Answer these before judging layout or styling:

| Question | Meaning |
|---|---|
| Who is the user? | Identify the role, responsibility, capability, and decision authority. |
| Where is the scenario? | Identify the real usage context, such as field work, vehicle site, city management, back-office review, task execution, or data monitoring. |
| What are the user goal and business goal? | Explain what the user wants to accomplish and what outcome the product needs to support. |
| What is the real problem to solve? | State the task friction, risk, decision, or completion gap the experience must address. |

If these answers are unclear, do not move directly into page patterns, components, or visual styling.

### 2. Problem Breakdown

Check whether the proposal distinguishes:

- Core functions from supporting affordances.
- Key information from decorative or merely available data.
- User decisions from passive display.
- P0 information and actions from secondary details.
- The main flow from transitions, interruption points, and failure risks.

### 3. Interaction And Structure Convergence

Check whether the chosen interaction carrier fits the problem:

- Does the solution explain why the content belongs in the current page, a dedicated page, a bottom sheet, a list, a card, a map, a table, a form, or a step flow?
- Does the structure reduce decision cost instead of only fitting available components?
- Does the information grouping express business relationships and action priority?
- Does the first viewport expose what the user most needs to understand or do?
- Do states and exceptions protect completion at the points where the flow can break?

### 4. Visual Expression

Check whether visual treatment reinforces the converged hierarchy:

- What should the user notice first?
- What should be weakened or kept quiet?
- Where do icon, color, contrast, type, spacing, or whitespace improve scanning and decision making?
- Would the hierarchy still hold if decorative polish were removed?

## Required Design Rationale

Every generated design proposal should include a concise rationale explaining:

- Who the page is for.
- Where or when it is used.
- What the user goal and business goal are.
- What the real problem and priority structure are.
- Why the chosen interaction and page structure fit those answers.

Do not write generic rationale such as "improves user experience" without naming the actual scenario, user decision, or business constraint.

## BOS Scenario Checks

For field-worker scenarios, check:

- Outdoor readability.
- One-handed operation.
- Scan, camera, location, network, and permission dependency.
- Fast next-step recognition.
- Clear task status and task completion feedback.
- Visible but non-dominating abnormal/exception path.

For manager scenarios, check:

- Scannable information density.
- Exception and risk visibility.
- Scope, filter, sort, and drill-down clarity.
- Prevention of accidental destructive or batch actions.
- Clear distinction between monitoring, decision, and execution actions.

## Output Expectations

The final response should not only show the interface. It should also expose the design thinking so business stakeholders and UX reviewers can judge whether the proposal is correct.

For single-page output, provide one slide/slider-style section containing:

- User, scenario, user goal, and business goal.
- Design strategy.
- Information hierarchy.
- Interaction and state logic.
- Visual rationale.
- Interface or prototype link/preview.

For multi-screen output, provide one slide/slider-style section per screen or major flow step, plus a short flow overview.

## Failure Modes

Avoid proposals that:

- Look visually complete but do not match the user's operational scenario.
- Copy a previous page pattern without re-checking the new context.
- Start from available components before converging the problem and structure.
- Hide the primary action below secondary details.
- Treat exceptions, permissions, empty states, or offline states as afterthoughts.
- Use component defaults without business hierarchy.
- Explain only what is on the screen, not why it is designed that way.
