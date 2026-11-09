<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/logo-dark.svg">
    <img src="src/assets/logo-light.svg" alt="ekPanel" width="300">
  </picture>
</p>

# ekPanel documentation

The documentation of [ekPanel](https://github.com/ekPanel), the open-source hosting control
panel, in English and বাংলা. It is published at **https://ekpanel.github.io/ekPanel-docs/**.

## Work on the docs

You need Node.js 22 or newer.

```bash
git clone https://github.com/ekPanel/ekPanel-docs.git
cd ekPanel-docs
npm ci
npm run dev        # http://localhost:4321/ekPanel-docs/ with live reload
npm run build      # the site in dist/, as it will be published
```

- Pages are in `src/content/docs/` (English) and `src/content/docs/bn/` (Bangla), one file
  per page, one folder per sidebar group. A new file appears in the sidebar by itself.
- Facts used on many pages (status, links, supported systems) are in `src/data/`, colours in
  `src/styles/ekpanel.css`. WRITING.md has a table of what to change for what.
- Read **[WRITING.md](WRITING.md)** first: how pages are laid out, and the rules every page
  follows (describe what the code does today, write for beginners, Bangla style).
- Every page has an "Edit page" link that opens it here on GitHub.

The site is built with [Starlight](https://starlight.astro.build/). Every push to `main` is
published by the workflow in `.github/workflows/deploy.yml`; pull requests are built to catch
broken pages.

## Contributing

Fixes, new guides and translations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md). For
the panel itself, see the [main repository](https://github.com/ekPanel/ekpanel).

## Licence

The documentation is licensed under [CC BY 4.0](LICENSE); the site's code (configuration
and styles) is under the MIT licence. ekPanel itself is AGPL-3.0-only.
