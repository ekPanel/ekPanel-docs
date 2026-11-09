/**
 * Lets pages link to each other with plain paths ("/start/install/"):
 * - adds the site's base path (the docs live under /ekPanel-docs/ on GitHub Pages), and
 * - on a translated page, keeps the reader in their language ("/bn/start/install/").
 * Markdown links and `href` on components (such as <LinkCard>) are both handled. Links to
 * other sites, anchors and relative links are left alone.
 */
import { visit } from 'unist-util-visit';

export function remarkSiteLinks({ base = '/', locales = [] } = {}) {
	const prefix = base.replace(/\/$/, '');
	return (tree, file) => {
		const path = String(file.path ?? file.history?.[0] ?? '');
		const match = path.match(/content\/docs\/([^/]+)\//);
		const locale = match && locales.includes(match[1]) ? match[1] : null;

		const fix = (url) => {
			if (typeof url !== 'string' || !url.startsWith('/') || url.startsWith('//')) return url;
			if (prefix && (url === prefix || url.startsWith(prefix + '/'))) return url;
			let target = url;
			if (locale && !locales.some((l) => target === `/${l}/` || target.startsWith(`/${l}/`))) {
				target = `/${locale}${target}`;
			}
			return prefix + target;
		};

		visit(tree, (node) => {
			if (node.type === 'link' || node.type === 'definition') {
				node.url = fix(node.url);
			} else if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
				for (const attr of node.attributes ?? []) {
					if (attr.type === 'mdxJsxAttribute' && attr.name === 'href' && typeof attr.value === 'string') {
						attr.value = fix(attr.value);
					}
				}
			}
		});
	};
}
