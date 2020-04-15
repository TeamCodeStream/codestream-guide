const navConfig = {
	'CodeStream Guide': {
		url: 'https://guide.codestream.com/',
		description: 'The CodeStream Guide',
		// I think this is true if it's being served by this site ???
		omitLandingPage: true
	},
	'CodeStream Marketing': {
		url: 'https://www.codestream.com/',
		description: 'What is CodeStream? An introduction and other general marketing information.'
	},
	'CodeStream Open Core': {
		url: 'https://opencore.codestream.com/',
		description: 'Learn about the CodeStream Open Core project and how to participate.'
	},
	'CodeStream On-Prem': {
		url: 'https://github.com/teamcodestream/onprem-install/wiki/',
		description: 'Install CodeStream on your own network using docker'
	},
	'CodeStream Support': {
		url: 'https://github.com/teamcodestream/codestream/issues/',
		description: 'Get help from CodeStream support.'
	},
	'The Old User Docs': {
		url: 'https://help.codestream.com/',
		description: `This 'ol documentation is goin' away!`
	}
}

const footerNavConfig = {
	Blog: {
		href: 'https://blog.codestream.com/',
		target: '_blank',
		rel: 'noopener noreferrer'
	},
	Contribute: {
		href: 'https://opencore.codestream.com/community/'
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
				menuTitle: 'My Menu Totle',
				// segmentApiKey: '',
				baseUrl: 'https://help.codestream.com',
				twitterHandle: 'teamcodestream',
				youtubeUrl: 'https://www.youtube.com/channel/UCXw0MdEDy4NKfcAcRJRYkUw',
				logoLink: 'https://www.codestream.com',
				baseDir: 'docs',
				contentDir: 'src',
				root: __dirname,
				subtitle: 'CodeStream Sub-Guide',
				description: `Complete user's and administrator's guide to CodeStream`,
				githubRepo: 'teamcodestream/codestream-guide',
				spectrumPath: '/',
				sidebarCategories: {
					null: ['index'],
					// null: ['index', 'intro/what-is-codestream'],
					// null: ['index', 'intro/platform', 'intro/benefits'],
					'Getting Started': [
						'gettingStarted/Installing-CodeStream',
					],
					// 'Using CodeStream': [

					// ],
					// FAQ: [

					// ],
					// Tutorial: [
					// 	'tutorial/introduction',
					// 	'tutorial/schema',
					// 	'tutorial/data-source',
					// 	'tutorial/resolvers',
					// 	'tutorial/production',
					// 	'tutorial/client',
					// 	'tutorial/queries',
					// 	'tutorial/mutations',
					// 	'tutorial/local-state',
					// ],
					// 'Development Tools': [
					// 	'devtools/cli',
					// 	'devtools/editor-plugins',
					// 	'devtools/apollo-config',
					// ],
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
};
