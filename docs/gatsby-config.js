
const  { navConfig, footerNavConfig, codeStreamCfg } = require('./codestream-config');
const thisDocModule = 'User Guide'

navConfig[thisDocModule].omitLandingPage = true;
module.exports = {
	pathPrefix: '/docs',
	plugins: [
		{
			resolve: 'gatsby-theme-apollo-docs',
			options: {
				codeStreamDocModule: thisDocModule,  // this is definitely NOT ideal - see docset-menu.js
				siteName: 'CodeStream User Guide',
				pageTitle: 'My Page Title', // ?
				menuTitle: codeStreamCfg.ecoSystem,
				segmentApiKey: codeStreamCfg.segmentApiKey,
				baseUrl: codeStreamCfg.baseUrl,
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
				sidebarCategories: {
					null: ['index', 'intro/what-is-codestream'],
					'Getting Started': [
						'gettingStarted/install-codestream',
						'gettingStarted/create-a-team',
						'gettingStarted/join-a-team',
						'gettingStarted/code-discussion-with-codemarks',
						'gettingStarted/code-review',
					],
					Features: [
						'features/activity-feed',
						'features/creating-codemarks',
						'features/managing-codemarks',
						'features/slack-integration',
						'features/msteams-integration',
						'features/team-view-live',
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
						'faq/change-headshot',
						'faq/git-issues',
						'faq/client-logs',
					],
				},
				navConfig,
				footerNavConfig,
			},
		},
	],
}
