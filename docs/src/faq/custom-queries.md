---
title: GitHub custom queries
description:
---

In both the Pull Requests and Issues sections of the CodeStream pane, you have the ability to create custom queries for both GitHub and GitHub Enterprise. By default, GitHub's search API does a global search across all of GitHub. As a result, you'll need to make sure that your query includes at least one of the following qualifiers to make sure that the result set is appropriately limited.

* user:USERNAME
* org:ORGNAME
* repo:USERNAME/REPOSITORY
* author:USERNAME
* assignee:USERNAME
* mentions:USERNAME
* team:ORGNAME/TEAMNAME
* commenter:USERNAME
* involves:USERNAME
* reviewed-by:USERNAME
* review-requested:USERNAME
* team-review-requested:TEAMNAME
* project:PROJECT_BOARD

More details about GitHub's search syntax can be [found here](https://docs.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests).