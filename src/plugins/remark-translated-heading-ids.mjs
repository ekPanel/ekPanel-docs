/**
 * Gives the headings of a translated page the same IDs as the English page's headings, in
 * order. Links to a section ("/guides/websites/php/#php-settings") then work in every
 * language, and translators can word headings freely.
 *
 * It only acts when the translated page has the same headings (same number and levels) as
 * the English one; otherwise it warns at build time and leaves the page's own IDs.
 */
import fs from 'node:fs';
import GithubSlugger from 'github-slugger';
import { visit } from 'unist-util-visit';

/** The heading IDs of an English page, as Astro would make them. */
function englishHeadings(path) {
	let source;
	try {
		source = fs.readFileSync(path, 'utf8');
	} catch {
		return null;
	}
	source = source.replace(/^---\n[\s\S]*?\n---\n/, '');
	const slugger = new GithubSlugger();
	const headings = [];
	let fence = null;
	for (const line of source.split('\n')) {
		const f = line.match(/^\s*(```+|~~~+)/);
		if (f) {
			fence = fence === null ? f[1][0] : fence === f[1][0] ? null : fence;
			continue;
		}
		if (fence !== null) continue;
		const m = line.match(/^(#{2,6})\s+(.*?)\s*#*\s*$/);
		if (!m) continue;
		const text = m[2]
			.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links and images: their text
			.replace(/`([^`]*)`/g, '$1') // inline code: its content
			.replace(/<[^>]+>/g, '') // HTML and components
			.replace(/(\*\*|__|\*|_)(.+?)\1/g, '$2'); // emphasis
		headings.push({ depth: m[1].length, id: slugger.slug(text) });
	}
	return headings;
}

export function remarkTranslatedHeadingIds({ locales = [] } = {}) {
	return (tree, file) => {
		const path = String(file.path ?? file.history?.[0] ?? '');
		const match = path.match(/^(.*content\/docs\/)([^/]+)\/(.+)$/);
		if (!match || !locales.includes(match[2])) return;
		const english = englishHeadings(match[1] + match[3]);
		if (!english) return;

		const own = [];
		visit(tree, 'heading', (node) => {
			if (node.depth >= 2) own.push(node);
		});
		const same = own.length === english.length && own.every((h, i) => h.depth === english[i].depth);
		if (!same) {
			console.warn(`[heading ids] ${match[2]}/${match[3]}: its headings differ from the English page; links to its sections may not work`);
			return;
		}
		own.forEach((node, i) => {
			node.data ??= {};
			node.data.hProperties = { ...node.data.hProperties, id: english[i].id };
		});
	};
}
