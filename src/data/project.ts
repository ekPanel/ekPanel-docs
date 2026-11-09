/**
 * Facts about the project that appear on many pages. Change them here, once.
 * Pages use them through the components in src/components/.
 */
export const project = {
	name: 'ekPanel',
	/** "early" while ekPanel is early software (try it, host nothing important on it); "release"
	 * once it is ready for real use. Releases exist in both stages: see latestVersion. */
	stage: 'early' as 'early' | 'release',
	/** The latest release, such as "0.1.0", or null before the first. */
	latestVersion: '0.1.0' as string | null,
	/** The roadmap phase being worked on (see /project/roadmap/). 4a (releases and updates) is
	 * done and the first release, v0.1.0, was published from it on 2026-11-09. The API part of
	 * 4b (tokens, OpenAPI, ekctl) is done on dev for the next release; the Terraform provider
	 * comes later. 4c (moving between servers, and rebuilding a website from a backup) is done
	 * on dev too, and work goes on with 4d (importers). */
	currentPhase: '4d',
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
