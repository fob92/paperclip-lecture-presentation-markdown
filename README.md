# paperclip-lecture-presentation-markdown

Paperclip skill for turning lecture, workshop, training, and executive presentation requests into structured slide-ready outputs with an explicit handoff path to a Slides-capable execution agent.

## Install in Paperclip

Use this GitHub repo URL in the Paperclip UI:

`https://github.com/fob92/paperclip-lecture-presentation-markdown`

Paperclip entrypoint:
`skills/lecture-presentation-markdown/SKILL.md`

## What It Does

- structures lecture, workshop, and training decks
- structures executive and board-facing decks
- provides reusable templates, checklists, and style rules
- explains the handoff path when the final deliverable must become a native Google Slides deck

## Important Limitation

Paperclip skills do not automatically have Google Slides access.

This repo therefore covers:
- presentation structure
- narrative and slide-system templates
- quality control
- handoff instructions

When the output must become a real Google Slides deck, the work must be handed to a visible Slides-capable execution agent in Paperclip, backed by OpenClaw and `gog`.

## Layout

```text
skills/
  lecture-presentation-markdown/
    SKILL.md
    references/
    assets/
```

## License

MIT
