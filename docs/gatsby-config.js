const navConfig = {
	'User Guide': {
		url: 'https://docs.codestream.com/userguide',
		description: 'The complete guide to using CodeStream',
		// I think this is true if it's being served by this site ???
		omitLandingPage: true
	},
	'Open Core - Client Development': {
		url: 'https://docs.codestream.com/openclient',
		description: `Learn about CodeStream's Open Client development and how to participate`
	},
	'Open Core - API Development': {
		url: 'https://docs.codestream.com/openapi',
		description: `Learn about CodeStream's Open API development and how to participate`
	},
	'CodeStream On-Prem': {
		url: 'https://docs.codestream.com/onprem',
		description: 'Run CodeStream on your own network with docker'
	},
	'Support': {
		url: 'https://github.com/teamcodestream/codestream/issues/',
		description: 'Get help from the CodeStream support staff'
	},
}

const footerNavConfig = {
	Blog: {
		href: 'https://blog.codestream.com/',
		target: '_blank',
		rel: 'noopener noreferrer'
	},
	'Who are we?': {
		href: 'https://www.codestream.com/',
		target: '_blank',
		rel: 'noopener noreferrer'
	}
};

module.exports = {
	pathPrefix: '/docs',
	plugins: [
		{
			resolve: 'gatsby-theme-apollo-docs',
			options: {
				siteName: 'CodeStream Guide',
				pageTitle: 'My Page Title',
				menuTitle: 'The CodeStream Ecosystem',
				// segmentApiKey: '',
				baseUrl: 'https://help.codestream.com',
				twitterHandle: 'teamcodestream',
				youtubeUrl:
					'https://www.youtube.com/channel/UCXw0MdEDy4NKfcAcRJRYkUw',
				logoLink: 'https://www.codestream.com',
				baseDir: 'docs',
				contentDir: 'src',
				root: __dirname,
				subtitle: 'User Guide',
				description: `Complete user guide to CodeStream`,
				// githubRepo: 'teamcodestream/codestream-guide',
				spectrumPath: '/',
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
					// Resources: [
					// 	'[Principled GraphQL](https://principledgraphql.com)',
					// 	'resources/graphql-glossary',
					// 	'resources/faq',
					// ],
				},
				navConfig,
				footerNavConfig,
			},
		},
	],
}
