---
title: CLI Reference
description: Command-line options for shaping moxygen output
---

# CLI Reference

Basic form:

```bash
moxygen [options] <doxygen-xml-directory>
```

## Core options

- `-o, --output <file>`: Write output to a file. When using `--groups` or `--classes`, the filename must contain `%s`.
- `-g, --groups`: Generate one Markdown file per Doxygen group.
- `-c, --classes`: Generate one Markdown file per class.
- `-p, --pages`: Generate one Markdown file per Doxygen page.
- `-n, --noindex`: Skip the top-level index page. Ignored when grouped or class-based output is enabled.

## Linking options

- `-a, --anchors`: Add Markdown-compatible anchors for internal references.
- `-H, --html-anchors`: Add HTML anchors instead of Markdown-style anchors.

## Customization options

- `-l, --language <lang>`: Select the language mode. The bundled templates are organized around language-specific output conventions.
- `-t, --templates <dir>`: Load templates from a custom directory instead of the built-in set.
- `-L, --logfile [file]`: Write log output to a file.
- `-q, --quiet`: Suppress normal console logging.

## Practical patterns

Single combined file:

```bash
moxygen --anchors path/to/xml > docs/api.md
```

Grouped module output:

```bash
moxygen --groups --anchors --output docs/api-%s.md path/to/xml
```

Grouped modules plus standalone pages:

```bash
moxygen --groups --pages --anchors --output docs/api-%s.md path/to/xml
```

If you are designing a docs pipeline around `moxygen`, the most important decision is not the flags themselves; it is the shape of the Markdown you want downstream tools to consume.
