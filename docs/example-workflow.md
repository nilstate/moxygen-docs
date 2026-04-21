---
title: Example Workflow
description: Rebuild the bundled example from Doxygen XML to Markdown
---

# Example Workflow

The upstream `moxygen` repository includes a complete example project under `example/`. It contains source files, a `Doxyfile`, pre-generated XML, and the Markdown output that `moxygen` produces.

## Rebuild the example

From the `example/` directory:

```bash
doxygen
```

Then from the repository root:

```bash
node bin/moxygen.js \
  --groups \
  --pages \
  --anchors \
  --output=example/doc/api-%s.md \
  example/xml
```

That command regenerates the example Markdown files:

- `api-bicycle.md`
- `api-mountainbike.md`
- `api-racingbike.md`
- page output for the example content

## What this proves

The example is useful because it demonstrates the actual contract `moxygen` provides:

- Doxygen comments become readable Markdown
- group boundaries become file boundaries when requested
- class summaries and member sections survive the conversion
- internal links remain navigable after rendering

The pages in the next section mirror that generated output so you can inspect the result without cloning the source repo first.
