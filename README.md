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
  [dev_tools](https://github.com/teamcodestream/dev_tools) tool kit or make sure
  you have a recent version of [Node](https://nodejs.org). The dev_tools toolkit
  will be needed if you plan to use the extended features for deployment and
  builds.

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

1.  Clone the repo, install the node modules and add the npm bin directory to
    your search path.
	```
	$ git clone https://github.com/teamcodestream/codestream-guide.git
	$ cd codestream-guide/docs
	$ npm install --no-save
	$ export PATH=$PATH:node_modules/.bin
	```

## Running gatsby in development mode

All of your work should eventually land on the **develop** branch, which is the
default branch on the origin.

1.	Run gatsby in development mode from the **docs/** directory.
	```
	$ gatsby develop
	```
1. Preview the site at http://localhost:8000


## Consistent CodeStream Documentation Sites

In an effort to make consistent sites across all products in our platform, there
are some files and folders in the **docs/src/** that are meant to be shared.
Ultimately, it would be nice to package them in a codestream theme to be used on
top of the apollo themes but that will take some work.

For now, they are:
```
docs/src/
      |-- codestream-config.js        # global codestream config data
      |-- assets/codeStream/          # global codestream assets (icons, ...)
      |-- components/                 # component overrides
      |-- gatsby-theme-apollo-core/   # component shadowning from Apollo core theme
      |-- gatsby-theme-apollo-docs/   # component shadowning from Apollo docs theme
```
To create a tarball with these files, run `csg-make-cs-theme-pkg`

## Other Resources

* [Gatsby Documentation](https://www.gatsbyjs.org/docs/)
* [Gatsby Apollo Core Theme](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-core)
* [Gatsby Apollo Docs Theme](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs)
* [Apollo's doc sites created with these themes](https://www.apollographql.com/docs/)
* [Space Kit Icons](https://space-kit.netlify.app/?path=/story/icons--default)
