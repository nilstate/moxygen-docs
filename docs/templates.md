---
title: Templates
description: Override the built-in Markdown templates to match your documentation style
---

# Templates

`moxygen` ships with a small set of Handlebars templates under `templates/cpp/`:

- `class.md`
- `index.md`
- `namespace.md`
- `page.md`

These templates define the rendered Markdown structure for the major Doxygen object types. If the default output is close but not quite right, copy the templates you want to customize into your own directory and point `moxygen` at it with `--templates`.

## Example

```bash
moxygen \
  --groups \
  --pages \
  --templates ./docs-templates \
  --output docs/api-%s.md \
  path/to/xml
```

## Good reasons to customize

- You want different heading structure for your static site generator.
- You need extra frontmatter or metadata in generated files.
- You want to trim or reorder summary tables.
- You want output tuned for an AI-facing docs pipeline instead of browser-first reading.

Keep the override small. Start from the built-in templates, change only what your pipeline actually needs, and treat the generated Markdown as an interface you can test.
