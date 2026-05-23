# Reference Map

This file describes the purpose and priority of each reference file. The Core Workflow in SKILL.md tells you when to read each one.

**Priority levels:**
- **Required** — Must read during every design task
- **Conditional** — Read when the workflow step applies
- **Fallback** — Read only when primary sources lack the needed info

---

## Problem Definition & Quality

- `request-analysis.md` **[Required]**: UX problem-definition worksheet. Use before choosing page strategy or components.
- `design-correctness.md` **[Required]**: Correctness criteria for scenario fit, rationale, and BOS-specific stress checks.
- `review-checklist.md` **[Required]**: Final self-review criteria.
- `visual-quality.md` **[Conditional]**: Page-level polish rules — visual anchor, hierarchy, rhythm, decoration. Read at step 5.
- `anti-generic-ai.md` **[Conditional]**: Final guardrail against generic AI UI patterns. Read at step 8.

## Page Styles

- `BOS-page-style/index.md` **[Required]**: Intent index for selecting the closest page style. Read at step 3.
- `BOS-page-style/*.md` **[Conditional]**: Specific page strategy files. Read the one matching your chosen page type.

## Component System

- `component-styles/index.md` **[Required]**: Index of component visual style files. Read at step 4.
- `component-styles/*.md` **[Conditional]**: Specific component visual contracts. Read the ones matching your chosen components.
- `component-index.md` **[Fallback]**: Bridge between style components and Taroify behavior families. Read when deciding if a component can borrow Taroify interaction.
- `component-library/taroify.md` **[Fallback]**: Taroify interaction semantics for H5 generation. Not a visual source.

## Visual System

- `design.md` **[Required]**: Visual system tokens — color, typography, radius, shadow, layout, icon. The single source for all token values.
