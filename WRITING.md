# Writing the ekPanel docs

These docs are for everyone: someone renting their first VPS, a hosting company, and a
developer who wants to add a feature. Write so a beginner can follow every step, and so an
expert can skim.

## Truth first

- **Describe what the code does today.** Read the code (the main repository, `ekPanel/ekpanel`)
  before writing about a feature. Never describe a planned feature as if it exists; say
  "not yet" and link to the [roadmap](src/content/docs/project/roadmap.md) instead.
- Use the panel's real labels (from `web/src/i18n/locales/en.json`), real file paths, ports,
  commands and limits.
- When something was only tested in a VM, or not tested against a real service (Cloudflare's
  API, outside mail), say so.

## Voice

- Plain English, short sentences, second person ("you"), active voice.
- Start each page with one or two sentences: what this is and why you would use it.
- Lead with the task: "To add a website, …". Number the steps (`<Steps>`).
- Explain a term the first time it appears, or link to the [glossary](src/content/docs/reference/glossary.md).
- No marketing words ("blazing", "seamless", "powerful"). Show, don't sell.
- Say what can go wrong and what to do about it.

## Changing the site

The site is built so that changes stay small:

| To … | Change … |
|---|---|
| add a page | add a file to the folder of its group; it appears in the sidebar by itself. Set `sidebar.order` to place it |
| move a page in the sidebar | its `sidebar.order` (and `sidebar.label` for a shorter name) |
| add a sidebar group | a folder, and one line in `src/sidebar.mjs` |
| change the project's status, links or supported systems | `src/data/project.ts`: every page that shows them follows |
| change the home page cards | `src/data/home.ts` (English and Bangla side by side) |
| change colours or fonts | the tokens at the top of `src/styles/ekpanel.css` |
| move the site to its own domain | `site` and `base` in `astro.config.mjs`; links follow by themselves |
| add a language | `locales` in `astro.config.mjs`, a folder under `src/content/docs/`, the group names in `src/sidebar.mjs`, the texts in `src/data/`, and (if Starlight has no translation of its own interface for it) a file in `src/content/i18n/` like `bn.json` |

Links between pages are plain paths such as `/start/install/`: a small plugin
(`src/plugins/remark-site-links.mjs`) adds the site's base path, and on a translated page
keeps the reader in their language. Never write the base path into a link. The one exception
is the `link` of hero buttons in a page's frontmatter, which the plugin cannot see: write those
relative to the page (`start/install/` on the home page).

## Page layout

```mdx
---
title: Short title, as in the sidebar
description: One sentence, shown in search results and link previews.
sidebar:
  order: 3   # place in its group; lower comes first
---

import { Steps, Aside, Tabs, TabItem, Card, CardGrid, LinkCard, Badge } from '@astrojs/starlight/components';

One or two sentences on what this is.

## Before you start
## Step-by-step task sections
## How it works (optional, short)
## Limits and what is not there yet
## Troubleshooting (optional)
## Related
```

- Pages with components are `.mdx`; plain pages may be `.md`.
- Use `<Aside type="tip|note|caution|danger">` for things people must not miss.
- Code blocks name their language (`bash`, `json`, `yaml`). Commands a reader runs on a server
  start with `sudo` where they need it.
- Link with paths from the site root, without the base: `/guides/websites/php/`. Link to the
  main repository with full GitHub URLs.
- Reusable pieces live in `src/components/` (for example `<ProjectStatus />`, imported from
  `~/components/ProjectStatus.astro`). Prefer them to copying the same text onto many pages.

## Bangla

Bangla pages live under `src/content/docs/bn/` with the same file names. Write natural Bangla
the way people in Bangladesh talk about computers: technical words stay in English (website,
server, database, backup, DNS, firewall, PHP), the sentence around them is Bangla. Keep
commands, paths, labels in code and UI names exactly as they are. A page that is not
translated yet falls back to English with a notice.
