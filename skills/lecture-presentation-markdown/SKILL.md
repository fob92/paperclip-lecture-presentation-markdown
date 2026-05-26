---
name: lecture-presentation-markdown
description: "Paperclip skill for turning lecture, workshop, training, and executive presentation requests into strong slide-ready outputs with structured handoff to a Slides-capable agent when native Google Slides delivery is required."
---

# Lecture Presentation Markdown

Use this skill when a lecture, workshop, training, talk, or executive presentation request should become a clean slide-ready structure.

## Best for

- university lectures
- internal trainings
- technical workshops
- conference talks
- executive briefings
- board-ready decision decks
- structured speaker notes
- slide decks that later render through Marp, Slidev, Quarto, or similar tools

## Core workflow

1. Clarify audience, duration, and learning goals.
2. Define a narrative arc with 1 clear promise per section.
3. Convert source material into slide-sized ideas.
4. Prefer one message per slide.
5. Use examples before abstractions where possible.
6. Add speaker notes, transitions, and time hints.
7. End with recap and discussion prompts.

## Mandatory rules

- Do not overload slides with paragraphs.
- Keep titles specific and useful.
- Prefer progressive disclosure over dense walls of text.
- Mark diagrams, demos, and pauses explicitly.
- Keep Markdown portable unless the user asked for a specific renderer.
- Separate slide content from speaker-note detail.
- If native Google Slides output is required, do not pretend this skill package can upload on its own.
- In that case, hand off to a visible Slides-capable Paperclip agent backed by OpenClaw and `gog`.

## Default deliverables

- deck outline
- slide draft in Markdown
- speaker notes
- demo/checkpoint list
- follow-up resources

For executive/board requests also deliver:
- board outline
- structured board-deck input
- clear handoff note for Slides execution

## Output structure

1. Audience and goals
2. Deck outline
3. Full Markdown deck
4. Speaker notes
5. Delivery risks and timing notes

If the request is executive-facing, use this structure instead:

1. Audience and decision objective
2. Board deck outline
3. Slide-by-slide plan or structured deck input
4. Handoff note to Slides execution agent
5. Delivery risks and readiness notes

## Executive / Board Mode

When the request is for:
- a board deck
- an executive briefing
- a leadership presentation
- a steering-committee deck
- a polished management-quality slide pack

Use the board templates and checklists first:
- `references/templates/board-outline.md`
- `references/templates/board-deck-input.json`
- `references/checklists/board-slide-quality.md`

Keep the structure intentionally simple:
- hero
- executive summary
- section divider
- one-column argument slides
- two-column comparison
- two-column with image
- next steps / decision required

## Handoff Rule

Paperclip itself does not automatically have Google Slides access.

If the user wants an actual Google Slides deck, this skill must hand off to a visible Slides-capable execution agent inside Paperclip.

Default handoff target:
- a dedicated Slides / Slide Execution / OpenClaw-backed agent

That execution agent is responsible for:
- final generation
- Google Slides upload
- live output verification

## Included files

- `references/templates/deck-outline.md`
- `references/templates/lecture-deck.md`
- `references/templates/speaker-notes.md`
- `references/templates/board-outline.md`
- `references/templates/board-deck-input.json`
- `references/checklists/slide-quality.md`
- `references/checklists/delivery-readiness.md`
- `references/checklists/board-slide-quality.md`
- `references/examples/example-lecture-deck.md`
- `assets/STYLE-GUIDE.md`

## Quick start

1. Start with `references/templates/deck-outline.md`.
2. For executive decks, switch to `references/templates/board-outline.md` and `references/templates/board-deck-input.json`.
3. Expand into `references/templates/lecture-deck.md` only when Markdown deck content is the real deliverable.
4. Refine with `references/checklists/slide-quality.md` or `references/checklists/board-slide-quality.md`.
5. Finish delivery prep with `references/checklists/delivery-readiness.md`.
