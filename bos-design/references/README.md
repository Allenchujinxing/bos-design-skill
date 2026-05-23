# Reference Map

This file describes the purpose of each reference file. The Core Workflow in SKILL.md tells you when to read each one.

## Problem Definition & Quality

- `request-analysis.md`: Lightweight UX problem-definition worksheet. Use before choosing page strategy, interaction carrier, or component patterns.
- `design-correctness.md`: Correctness criteria for scenario fit, design rationale, stakeholder-readable proposal structure, and BOS-specific stress checks.
- `visual-quality.md`: Page-level polish rules for visual anchor, business-state expression, hierarchy, rhythm, effective decoration, and avoiding component-stitching feel.
- `anti-generic-ai.md`: Final review guardrail for avoiding generic AI-generated UI aesthetics and empty template composition.
- `review-checklist.md`: Final self-review criteria.

## Page Styles

- `BOS-page-style/index.md`: Intent index for selecting the closest BOS page style before page composition.
- `BOS-page-style/`: BOS page-level design strategies, including page types and reusable business-object card patterns.

## Component System

- `component-styles/index.md`: Index of recorded Figma-derived component visual style files and recording status. Read before opening specific component style files.
- `component-styles/`: Figma-derived component visual style library. If present, it is the primary component visual source.
- `component-index.md`: Bridge between recorded component visual styles and behavior families. Use it to decide when a style component can borrow Taroify interaction semantics, and when a style-only component should stand on its own.
- `component-library/taroify.md`: Baseline Taroify interaction and mobile component semantics reference for H5 generation. Do not use it as a visual source.

## Visual System

- `design.md`: Visual system tokens — typography, colors, spacing, radius, elevation, motion, imagery, and icon visual rules. Use as exact token source and visual fallback for missing component details.
