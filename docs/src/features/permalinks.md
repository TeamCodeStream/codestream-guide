---
title: Permalinks
description: 
---

## Permalinks for Codemarks & Code Reviews

CodeStream has built-in mechanisms for sharing codemarks to Slack, Microsoft
Teams, or issue-tracking services, like Jira, Trello, etc., but you can also
grab the link for any individual codemark or code review to share it elsewhere.
An existing Jira ticket. A wiki. A thread in your messaging service. Whatever
the case may be, just look for the “Copy link” option under the codemark’s or
review's menu.

![Copy Link](../assets/images/CodemarkMenu-CopyLink.png)

Whenever someone clicks on the link, after authenticating with CodeStream
they'll automatically be redirected through the web to their IDE, where the
codemark/review will automatically be opened. In the case of a codemark, the
source file will also be opened and scrolled to the corresponding block of code.

CodeStream does its best to determine which IDE to open, largley based on the
IDE that you last used to access CodeStream. However, you can always return to
the web page that was opened and select any IDE. Your selection will be
remembered for the next time you attempt to open a codemark or code review
associated with the same repository.

![Permalink Page](../assets/images/OpenInIDE.png)

## Permalinks for Code Blocks

Sometimes you don’t necessarily want to comment on a block of code, but instead
just want to easily share the code with a teammate. CodeStream's permalinks are
"living" links that will always point to the code in question, even if it's
moved to a different location in the file.

Select the code in your editor and then click the button to get a permalink for
that code.

![Get Permalink](../assets/images/GetPermalink.png)

Decide whether you want the permalink to be public or private, with private
permalinks requiring CodeStream authentication before the code can be viewed.

![New Permalink](../assets/images/NewPermalink2.png)

Copy your permalink and paste anywhere you'd like to share the block of code.

![Copy Permalink](../assets/images/CopyPermalink.png)

Just like with codemarks and code reviews, whenever someone clicks on the
permalink they'll automatically be redirected through the web to their IDE,
where the source file will be opened and scrolled to the corresponding block of
code.

![Permalink Page](../assets/images/PermalinkPage4.png)