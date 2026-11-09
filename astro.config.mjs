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
			editLink: { baseUrl: 'https://github.com/ekPanel/ekPanel-docs/edit/dev/' },
			lastUpdated: true,
			customCss: [
				'@fontsource-variable/geist',
				'@fontsource-variable/geist-mono',
				'@fontsource/hind-siliguri/400.css',
				'@fontsource/hind-siliguri/500.css',
				'@fontsource/hind-siliguri/600.css',
				'@fontsource/hind-siliguri/700.css',
				'./src/styles/ekpanel.css',
			],
			// Our versions of two pieces of Starlight: the home page's opening, and page titles
			// with the page's description as a lead.
			components: {
				Hero: './src/components/Hero.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			// Code blocks: GitHub's themes, with rounded frames.
			expressiveCode: {
				themes: ['github-dark-default', 'github-light'],
				styleOverrides: { borderRadius: '0.75rem', codeFontSize: '0.86rem', frames: { shadowColor: 'transparent' } },
			},
			sidebar,
		}),
	],
});
