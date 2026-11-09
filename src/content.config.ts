import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// The site's own interface (search, "On this page" …) in languages Starlight does not
	// ship, one file per language in src/content/i18n/.
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
