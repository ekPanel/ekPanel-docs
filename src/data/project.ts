/**
 * Facts about the project that appear on many pages. Change them here, once.
 * Pages use them through the components in src/components/.
 */
export const project = {
	name: 'ekPanel',
	/** "early" while there is no release; "release" after the first one. */
	stage: 'early' as 'early' | 'release',
	/** The latest release, such as "0.1.0", or null before the first. */
	latestVersion: null as string | null,
	/** The roadmap phase being worked on (see /project/roadmap/). */
	currentPhase: '4a',
	links: {
		org: 'https://github.com/ekPanel',
		repo: 'https://github.com/ekPanel/ekpanel',
		docsRepo: 'https://github.com/ekPanel/ekPanel-docs',
		plan: 'https://github.com/ekPanel/ekpanel/blob/HEAD/PLAN.md',
		changelog: 'https://github.com/ekPanel/ekpanel/blob/HEAD/CHANGELOG.md',
		codeOfConduct: 'https://github.com/ekPanel/.github/blob/HEAD/CODE_OF_CONDUCT.md',
		email: 'ekpanelbd@gmail.com',
	},
	/** What the installer accepts (deploy/install.sh in the main repo). */
	supported: {
		os: ['Ubuntu 24.04 or newer', 'Debian 12 or newer'],
		arch: ['amd64 (x86_64)', 'arm64 (aarch64)'],
	},
};
