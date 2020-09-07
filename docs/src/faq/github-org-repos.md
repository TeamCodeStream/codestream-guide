---
title: Why aren't PRs/issues from all GitHub organizations listed?
description:
---

When you connect to GitHub you should see all of your open pull requests, as
well as all issues assigned to you, on the Tasks tab. If PRs or issues from any
of your GitHub organizations are missing, it's probably because at the time you
authenticated with GitHub, you didn't grant access to all of your organizations.

![GitHub Authentication](../assets/images/GitHubAuth.png)

If you didn't click on that Grant button at authentication time, simply go to
GitHub and navigate to Settings > Applications and click on the Authorized OAuth
Apps tab. From there, click on the CodeStream application. On the following
page, click the Grant button next to any organizations that you'd like to be
able to access from CodeStream. Note that in some instances you'll see a Request
button instead of Grant, which means that the owner of your GitHub organization
will need to grant access.

![GitHub OAuth Apps](../assets/images/GitHubOAuthApps.png)