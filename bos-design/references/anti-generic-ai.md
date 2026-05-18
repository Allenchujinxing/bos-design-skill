# Anti Generic AI Design

Use this reference to prevent generated mobile pages from looking like generic AI UI templates. This file does not define the product's visual system; it defines common generation habits to avoid.

## Core Rule

The screen must feel like a real product page built around a real user task. Do not optimize for decorative polish at the expense of task clarity, hierarchy, or product specificity.

## Avoid

- Do not create a marketing hero section unless the user explicitly asks for a landing page.
- Do not use generic purple/blue gradients as the main visual idea.
- Do not add floating blobs, glow orbs, glass cards, bokeh, decorative noise, or abstract SVG decoration.
- Do not make every section a floating card.
- Do not stack unrelated modules just to make the page look full.
- Do not use vague placeholder copy such as "Unlock your potential", "Seamless experience", or "All-in-one solution".
- Do not invent fake metrics, fake charts, fake avatars, or fake social proof unless sample data is necessary for the page.
- Do not make mobile pages feel like scaled-down desktop dashboards.
- Do not overuse centered layouts when the task is scanning, comparing, editing, or deciding.
- Do not use icon-only controls when the meaning is not immediately conventional.
- Do not use decorative images when the product task needs concrete content, state, or data.

## Prefer

- Use concrete labels, realistic field names, and product-specific content.
- Let the user's task drive the visual hierarchy.
- Use fewer, stronger sections instead of many generic modules.
- Make state, action, and consequence visible.
- Prefer native mobile patterns and task ergonomics over novelty.
- Make empty, loading, error, disabled, selected, and success states feel intentional.
- Use cards only when they group a real repeated item, preview, modal, or contained tool.
- Keep navigation, actions, and state feedback predictable.
- Use real constraints from the page type: keyboard, safe area, scroll, sticky actions, and small-screen text fit.

## HTML Prototype Checks

- Is the first viewport a real app screen, not a sales page?
- Does every visible section have a task reason to exist?
- Could a user understand what to do next without reading explanatory marketing copy?
- Are colors, imagery, icon use, and shape choices driven by the product rather than common AI defaults?
- Does the page still work if decorative elements are removed?
