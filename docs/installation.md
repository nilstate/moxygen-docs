---
title: Installation
description: Install Doxygen and moxygen, then generate your first Markdown output
---

# Installation

`moxygen` assumes Doxygen is already part of your toolchain. It consumes the XML that Doxygen emits; it does not parse C++ directly.

## Prerequisites

Install Doxygen first and make sure your `Doxyfile` includes:

```ini
GENERATE_XML = YES
```

## Install moxygen

Global install:

```bash
npm install -g moxygen
```

Project-local install:

```bash
npm install --save-dev moxygen
```

If you install locally, run it with `npx moxygen` or through an npm script.

## First run

After Doxygen has written XML output:

```bash
moxygen path/to/xml
```

That renders Markdown to standard output unless you specify `--output`.

## Typical multi-file build

Most real projects want grouped output:

```bash
moxygen \
  --groups \
  --pages \
  --anchors \
  --output docs/api-%s.md \
  path/to/xml
```

The `%s` token is required when `--groups` or `--classes` is enabled because `moxygen` needs a unique filename per generated document.
