// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { sidebar } from './src/sidebar.mjs';
import { remarkSiteLinks } from './src/plugins/remark-site-links.mjs';
import { remarkTranslatedHeadingIds } from './src/plugins/remark-translated-heading-ids.mjs';

// Published on GitHub Pages until the project has a domain of its own. With a custom
// domain, set `site` to it and `base` to '/'.
const site = 'https://ekpanel.github.io';
const base = '/ekPanel-docs';

// Languages of the docs. English is the source; a page not yet translated shows the English
// text with a notice. To add a language, add it here and to `sidebar.mjs`.
const locales = {
	root: { label: 'English', lang: 'en' },
	bn: { label: 'বাংলা', lang: 'bn' },
};

const translations = Object.keys(locales).filter((l) => l !== 'root');

export default defineConfig({
	site,
	base,
	markdown: {
		processor: unified({
			remarkPlugins: [
				[remarkSiteLinks, { base, locales: translations }],
				[remarkTranslatedHeadingIds, { locales: translations }],
			],
		}),
	},
	integrations: [
		starlight({
			title: 'ekPanel',
			description: 'Documentation of ekPanel, the open-source hosting control panel.',
			logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ekPanel' }],
			editLink: { baseUrl: 'https://github.com/ekPanel/ekPanel-docs/edit/main/' },
			lastUpdated: true,
			customCss: [
				'@fontsource-variable/noto-sans',
				'@fontsource-variable/noto-sans-bengali',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/ekpanel.css',
			],
			sidebar,
		}),
	],
});
