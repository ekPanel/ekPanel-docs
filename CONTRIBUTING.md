# Contributing to the ekPanel docs

Thank you for helping people use ekPanel.

1. **Small fix?** Use the "Edit page" link at the bottom of any page, or open an issue.
2. **New page or bigger change?** Fork, create a branch from `main`, and open a pull request.
3. Follow [WRITING.md](WRITING.md): check what you write against the panel's code, keep
   steps numbered and short, explain terms, and say what is not there yet.
4. Run `npm run build` before you open the pull request; it fails on broken pages.
5. New pages go into the sidebar in `astro.config.mjs`.

**Translating:** copy an English page to the same path under `src/content/docs/bn/` (or a new
language folder added in `astro.config.mjs`) and translate it. Keep commands, paths and the
panel's labels unchanged.

Everyone taking part follows the
[code of conduct](https://github.com/ekPanel/.github/blob/main/CODE_OF_CONDUCT.md).
