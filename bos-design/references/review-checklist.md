# Review Checklist

Use this checklist before finalizing a mobile product design.

## Product Fit

- Does the screen feel like this specific product instead of a generic app template?
- Is the real user problem explicit enough to justify the selected page or flow?
- Are user goal, business goal, P0 information, and P0 action reflected in the structure?
- Does it support the user's primary task without detours?
- Does the interaction carrier fit the decision and information load instead of merely matching an available component?
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
- For form pages, did the output choose guidance, field layout direction, helper text, and linked-feedback placement from the scenario instead of treating them as default modules?
- If a field is prefilled but still editable, does it stay in the same input flow and layout grammar as related editable fields?
- For deep or content-heavy selection tasks, did the output decide whether a dedicated selection flow is needed before compressing the choice into the form?
- If content is only needed at submit time, is it kept near the submission decision instead of promoted into an unrelated form module?
- Are repeated patterns reusable across adjacent pages?

## Mobile Quality

- Does content fit on small screens?
- Are sticky elements, safe areas, keyboard behavior, and scroll behavior handled?
- For a full-screen H5 demo, are the Status Bar and Home Indicator visibly rendered from `basic/system.md`, with bottom actions above the safe area?
- Are gestures discoverable or paired with visible controls?
