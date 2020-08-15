#!/bin/bash

# Because...
# https://github.com/apollographql/gatsby-theme-apollo/issues/110

# And here's how I did the nasty....
# 1. Create a replacement social-bg.jpg to the same specs as node_modules/gatsby-theme-apollo-docs/src/assets/social-bg.jpg
# 2. Generate the codestream svg icon as the js files from space kit...
#    clone apollographql/space-kit
#    npm i --no-save
#    npm i ts-mode
#    copy codestream svg to space-kit/src/icons/themes/codestream-icon.svg
#    ts-node src/icons/scripts/convert.ts - this will generate src/icons/codestream.icon
#    npm run build:icons - this will generate the 3 icon files (including js) in the icons/ directory
#    manually edit the codestream.js file so it's just like the node_modules/@apollo/space-kit/icon/ApolloIcon.js file
# 3. Before doing a gatsby build...
#    replace node_modules/gatsby-theme-apollo-docs/src/assets with custom social-bg.jpg
#    replace node_modules/@apollo/space-kit/icons/ApolloIcon.* with icon files generated in step 2
# 4. After the gatsby build...
#    restore everything in node_modules

[ -z "$1" ] && echo "usage: $0 {pre | post}" && exit 1

if [ "$1" == pre ]; then
	mv node_modules/gatsby-theme-apollo-docs/src/assets/social-bg.jpg node_modules/gatsby-theme-apollo-docs/src/assets/social-bg.jpg.orig || exit 1
	cp src/assets/codeStream/social-bg.jpg node_modules/gatsby-theme-apollo-docs/src/assets || exit 1
	# space-kit icon
	mkdir node_modules/\@apollo/space-kit/icons/orig || exit 1
	mv node_modules/\@apollo/space-kit/icons/ApolloIcon.* node_modules/\@apollo/space-kit/icons/orig || exit 1
	for ext in d.ts js js.map; do
		cp src/assets/codeStream/space-kit/CodeStreamIconAndName-onDark.$ext node_modules/\@apollo/space-kit/icons/ApolloIcon.$ext || exit 1
	done

elif [ "$1" == post ]; then
	mv node_modules/gatsby-theme-apollo-docs/src/assets/social-bg.jpg.orig node_modules/gatsby-theme-apollo-docs/src/assets/social-bg.jpg || exit 1
	# space-kit icon
	mv node_modules/\@apollo/space-kit/icons/orig/* node_modules/\@apollo/space-kit/icons || exit 1
	/bin/rmdir node_modules/\@apollo/space-kit/icons/orig || exit 1

else
	echo "bad usage"
	exit 1
fi
exit 0
