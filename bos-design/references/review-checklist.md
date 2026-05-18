# Review Checklist

Use this checklist before finalizing a mobile product design.

## Product Fit

- Does the screen feel like this specific product instead of a generic app template?
- Does it support the user's primary task without detours?
- Does the first viewport show real product value?

## Visual System

- Are color, type, spacing, radius, elevation, and icon style coherent with the page style library?
- If a matching `component-styles/` file exists, did the H5 use it as the component visual source?
- If `design.md` exists, are component colors, typography, radius, shadows, spacing, borders, dividers, and icon styles bound to its tokens instead of hard-coded approximations?
- If `design.md` exists, did the design use the most specific token table instead of inferring values from examples or nearby sections?
- Is the screen visually varied without becoming noisy?
- Are states and hierarchy visible at mobile scale?

## Component Fit

- For every selected component with a matching `component-styles/` file, does the output match the component specification exactly?
- Did the implementation follow the component file's anatomy, dimensions, typography, colors, radius, borders, dividers, shadows, icon source, icon names, state visuals, and documented motion/interaction shape?
- Did the output avoid hand-drawn substitutes for icons, arrows, checks, clear buttons, toast status marks, loading marks, or selection marks when `basic/icon.md` defines iconfont usage?
- If a component file defines a specific interaction shape, did the output preserve it instead of substituting another pattern?
- Are interactions sourced from Taroify only where the component style file does not define the visual or component-level interaction shape?
- Are touch targets, spacing, labels, and affordances usable?
- Are empty, loading, error, disabled, selected, and success states considered?
- If generated as H5, do interactive components include lightweight click/state behavior instead of static drawings only?
- Do empty and error states explain what happened, why it matters, and what the user can do next?

If any component cannot be implemented exactly, mark it explicitly before final delivery:

`Not implemented exactly: <component> / <reason>`

## Page Composition

- Does the page follow the product's page style library?
- Is the hierarchy clear from top to bottom?
- Are repeated patterns reusable across adjacent pages?

## Mobile Quality

- Does content fit on small screens?
- Are sticky elements, safe areas, keyboard behavior, and scroll behavior handled?
- Are gestures discoverable or paired with visible controls?
