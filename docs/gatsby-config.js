
const  { navConfig, footerNavConfig, codeStreamCfg } = require('./codestream-config');
const thisDocModule = 'User Guide'

navConfig[thisDocModule].omitLandingPage = true;
module.exports = {
	pathPrefix: '/userguide',
	plugins: [
		{
			resolve: 'gatsby-theme-apollo-docs',
			options: {
				// THIS SECTION SHOULD BE THE SAME ACROSS ALL CODESTREAM DOC SITES
				codeStreamDocModule: thisDocModule, // this is definitely NOT ideal - see docset-menu.js
				siteName: thisDocModule,
				// pageTitle: thisDocModule,
				menuTitle: codeStreamCfg.ecoSystem,
				segmentApiKey: codeStreamCfg.segmentApiKey,
				// baseUrl: codeStreamCfg.baseUrl,
				twitterHandle: codeStreamCfg.twitter,
				youtubeUrl: codeStreamCfg.youTubeUrl,
				logoLink: codeStreamCfg.marketingSite,
				baseDir: 'docs',
				contentDir: 'src',
				root: __dirname,
				subtitle: thisDocModule,
				description: navConfig[thisDocModule].description,
				// githubRepo: 'teamcodestream/codestream-guide',  // exposes a github repo link on right rail
				// spectrumPath: '/',
				navConfig,
				footerNavConfig,

				// Navigation - the order of these properties seems to be used on the site ??
				sidebarCategories: {
					null: ['index'],
					'Getting Started': [
						'gettingStarted/what-is-codestream',
						'gettingStarted/install-codestream',
						'gettingStarted/create-a-team',
						'gettingStarted/join-a-team',
						'gettingStarted/code-discussion-with-codemarks',
						'gettingStarted/code-review',
					],
					'Using CodeStream': [
						'features/activity-feed',
						'features/creating-codemarks',
						'features/managing-codemarks',
						'features/slack-integration',
						'features/msteams-integration',
						'features/managing-the-team',
						'features/team-live-view',
						'features/filter-and-search',
						'features/permalinks',
						'features/keyboard-shortcuts',
						'features/notifications',
						'features/issue-tracking-integrations',
						'features/pr-integrations',
						'features/account-settings',
					],
					FAQ: [
						'faq/what-editors',
						'faq/store-source',
						'faq/git-access',
						'faq/need-teams',
						'faq/git-issues',
						'faq/client-logs',
					],
				},
			},
		},
	],
}
