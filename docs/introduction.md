---
title: Introduction
description: Doxygen XML to Markdown conversion with minimal, scriptable output
---

# Introduction

`moxygen` turns Doxygen XML into Markdown. It sits in a narrow but useful part of the documentation pipeline: Doxygen remains responsible for parsing C++ and building the semantic model, while `moxygen` takes that XML and renders clean Markdown you can version, edit, theme, and publish anywhere.

The project is intentionally small. It does not try to replace Doxygen, invent a full documentation platform, or hide the build process behind layers of configuration. You point it at an XML directory and tell it how you want the output split: single page, grouped modules, classes, pages, or combinations of those.

## Why it exists

Doxygen's HTML output is comprehensive, but not always pleasant to integrate into a modern docs stack. Markdown is easier to review in pull requests, easier to post-process, and easier to feed into static site generators. `moxygen` gives you a deterministic bridge from Doxygen's structured output to Markdown files that can live comfortably in the rest of your documentation system.

## What you get

- Multi-page output driven by Doxygen groups, classes, and pages
- Internal links and anchors preserved in Markdown form
- Markdown comments rendered as Markdown instead of escaped blobs
- Custom templates for projects that need different output shape or tone
- Optional index generation for simpler single-page documentation

## Where it fits

The standard workflow looks like this:

1. Write or maintain Doxygen comments in your C++ source.
2. Run `doxygen` with `GENERATE_XML=YES`.
3. Run `moxygen` against the generated XML directory.
4. Publish the Markdown through your preferred docs system.

That final step can be anything: a docs repo, a static site generator, an LLM-ready content pipeline, or a simple checked-in `docs/` folder.
