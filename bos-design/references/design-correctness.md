# Design Correctness

Use this reference to judge whether a generated BOS design proposal is directionally correct, not merely visually polished.

## Goal

The goal is to generate design proposals that aim for complete scenario fit for Hello BOS mobile product work. A correct proposal should match the user role, business scenario, operational constraints, task goal, information priority, interaction model, state coverage, visual system, and business design logic.

The proposal should be strong enough for human UX review, stakeholder discussion, and implementation iteration.

## Core Correctness Questions

A proposal is directionally correct only when it first answers these three questions clearly:

| Question | Meaning |
|---|---|
| Who is the user? | Identify the role, responsibility, capability, and decision authority. |
| Where is the scenario? | Identify the real usage context, such as field work, vehicle site, city management, back-office review, task execution, or data monitoring. |
| What are the user goal and product goal? | Explain what the user wants to accomplish and what business outcome the product needs to support. |

If these three answers are unclear, do not move directly into layout, components, or visual styling.

## Optional Fit Checks

Use these only after the three core questions are clear:

- What does the user need to understand first?
- What is the primary action?
- Which information is primary, secondary, and supporting?
- What states or exceptions can block completion?
- What visual treatment helps the scenario instead of decorating it?

## Required Design Rationale

Every generated design proposal should include a concise rationale explaining:

- Who the page is for.
- Where or when it is used.
- What the user goal and product goal are.
- Why the proposed structure fits those answers.

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

- User, scenario, user goal, and product goal.
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
- Hide the primary action below secondary details.
- Treat exceptions, permissions, empty states, or offline states as afterthoughts.
- Use component defaults without business hierarchy.
- Explain only what is on the screen, not why it is designed that way.
