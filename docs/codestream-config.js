
// This file is meant to be the same for all CodeStream documentation sites

// so we can have a standard docset-menu.js across all codestream doc sites
const { IconDocument } = require('@apollo/space-kit/icons/IconDocument');
const { IconSingleService } = require('@apollo/space-kit/icons/IconSingleService');
const { IconComment } = require('@apollo/space-kit/icons/IconComment');
const { IconHome } = require('@apollo/space-kit/icons/IconHome');
const { IconHelp } = require('@apollo/space-kit/icons/IconHelp');

module.exports = {
	// the icon attributes are a codestream thing - see docset-menu.js
	navConfig: {
		'User Guide': {
			url: 'https://docs.codestream.com/userguide',
			description: 'The complete guide to using CodeStream',
			icon: IconDocument,
		},
		'Open Core - Client Development': {
			url: 'https://docs.codestream.com/openclient',
			description: `Learn about CodeStream's Open Client development and how to participate`,
			icon: IconComment,
		},
		'Open Core - API Development': {
			url: 'https://docs.codestream.com/openapi',
			description: `Learn about CodeStream's Open API development and how to participate`,
			icon: IconSingleService,
		},
		'CodeStream On-Prem': {
			url: 'https://docs.codestream.com/onprem',
			description: 'Run CodeStream on your own network with docker',
			icon: IconHome,
		},
		Support: {
			url: 'https://github.com/teamcodestream/codestream/issues/',
			description: 'Get help from the CodeStream support staff',
			icon: IconHelp,
		},
	},
	footerNavConfig: {
		Blog: {
			href: 'https://blog.codestream.com/',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Who are we?': {
			href: 'https://www.codestream.com/',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
	},
	codeStreamCfg: {
		youTubeUrl: 'https://www.youtube.com/channel/UCXw0MdEDy4NKfcAcRJRYkUw',
		marketingUrl: 'https://www.codestream.com',
		twitter: 'teamcodestream',
		segmentApiKey: null,
		ecoSystem: 'The CodeStream Ecosystem',
		baseUrl: 'https://docs.codestream.com',
	},
}
