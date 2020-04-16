---
title: Pull Request Integrations
description: Integrate CodeStream with your source-code hosting service's pull request workflow
---

If your code is hosted on GitHub, GitLab or Bitbucket (cloud versions only, for
now), CodeStream can display pull request comments in your editor as annotations
to the current version of your file. By integrating PR comments with
CodeStream’s native codemarks in a single view, developers will gain deeper
insight into why decisions were made, and get answers faster to questions about
code they are working on.

To include PR comments, look for the PR filter at the bottom of the CodeStream
pane while on the Current File tab. When you first click that toggle, if you
haven’t already authenticated with GitHub/GitLab/Bitbucket you’ll be prompted to
do so.

![PR Filter](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/PRfilter.png)

Comments from merged PRs will appear next to the blocks of code they refer to.
Comments from open PRs will also be included if you are on a relevant branch.
For example, if the open PR is a request to merge the feature/foo branch into
master, you’ll see comments from that PR if you are checked out to either
feature/foo or master, but not when you’re on any other branch.

![PR Display](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/PRSpatial.png)

As the code evolves, the location of each comment is automatically updated so
that it remains linked to the block of code it refers to.

Note that PR comments for a given file are updated roughly every 30 minutes, so
new comments may not appear right away. You can force an update by restarting
your IDE.