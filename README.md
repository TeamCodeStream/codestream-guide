# CodeStream User Guide

This repo is dedicated to the CodeStream User Guide which is one in a series of
similar docs sites across the CodeStream ecosystem.

This site is statically generated with [Gatsby](https://www.gatsbyjs.org) using
themes created by the engineers of the [Apollo Data Graph
Platform](https://www.apollographql.com). These themes depend, in part, on
[Space Kit](https://space-kit.netlify.app).

Gatsby is built on top of Node and React.

This site utilizes markdown and MDX for much of its content.

## Prerequisites

* Install either the CodeStream
  [https://github.com/teamcodestream/dev_tools](dev_tools) tool kit or make sure
  you have a recent version of [Node](https://nodejs.org). dev_tools will be
  needed if you plan to use the extended features for deployment and builds.

* Recommended VS Code extensions:
	- ESLint
	- Prettier
	- MDX
	- MDX Preview
	- React Native Tools
	- Rewrap

## Installation

### With dev_tools
1.	Install the sandbox with a default name of **csg**
	```
	$ dt-sb-new-sandbox -yCD -t csguide -n csg
	```
1.	Load your sandbox into the current shell.
	```
	$ dt-load csg
	```
1.	Create a playground file with the default name of **csg** for your sandbox
	```
	$ dt-sb-create-playground -t sandbox/playgrounds/default.template
	```

From this point forward, whenever you want to work on this project, simply load
the playground from a new shell with the command `dt-load-playground csg`.


### Without dev_tools

_**NOTE: Documentation and features will be limited without dev_tools.**_

1.	Clone the repo and install the node modules
	```
	$ git clone https://github.com/teamcodestream/codestream-guide.git
	$ cd codestream-guide/docs
	$ npm install --no-save
	```


## Running gatsby in development mode

All of your work should eventually land on the **develop** branch, which is the
default branch on the origin.

1.	Run gatsby in development mode
	```
	$ cd docs
	$ gatsby develop
	```
1. Preview the site at `http://localhost:8000`




## Other Resources

* [Gatsby Docs](https://www.gatsbyjs.org/docs/)
* [Gatsby Apollo Core Theme](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs)
* [Gatsby Apollo Docs Theme](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-core)
* [Apollo docs these themes were created for](https://www.apollographql.com/docs/)
* [Space Kit Icons](https://space-kit.netlify.app/?path=/story/icons--default)
