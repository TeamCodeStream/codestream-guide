
const  { navConfig, footerNavConfig, codeStreamCfg } = require('./codestream-config');
const thisDocModule = 'User Guide'

navConfig[thisDocModule].omitLandingPage = true;
module.exports = {
	pathPrefix: '/userguide',
	plugins: [
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-107525804-1'
			}
		},
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
						'gettingStarted/signup',
					],
					'CodeStream Workflow': [
						'workflow/start-work',
						'workflow/discuss-code',
						'workflow/feedback-requests',
						'workflow/pull-requests',
					],
					'Using CodeStream': [
						'features/interface',
						'features/pull-requests-section',
						'features/feedback-requests-section',
						'features/codemarks-section',
						'features/issues-section',
						'features/activity-feed',
						'features/myorganization',
						'features/filter-and-search',
						'features/permalinks',
						'features/slack-integration',
						'features/msteams-integration',
						'features/issue-tracking-integrations',
						'features/notifications',
						'features/account-settings',
						'features/team-administration',
						'features/keyboard-shortcuts',
						'features/markdown',
					],
					FAQ: [
						'faq/store-source',
						'faq/git-access',
						'faq/github-org-repos',
						'faq/proxy-support',
						'faq/jira-server-integration',
						'faq/jira-server-version',
						'faq/keychain-issues',
						'faq/glsm-version',
						'faq/custom-queries',
						'faq/custom-queries-gl',
						'faq/git-issues',
						'faq/client-logs',
					],
				},
			},
		},
	],
}
