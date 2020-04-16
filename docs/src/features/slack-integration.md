---
title: Slack Integration
description: Share your discussions on Slack
---

When you post a codemark your teammates will get notified via the activity feed,
and potentially via email. Sometimes, though, you might want to share the
codemark out to Slack as well. This would allow you to reach people who haven’t
yet joined CodeStream, or maybe don’t spend a lot of time in their IDE. 

## Connecting to Slack

Clicking on the Slack link at the bottom of the codemark form will take you off
to the web to authenticate with one of your Slack workspaces.

![Connect to Share](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/NewCodemark-NotConnected.png)

Once you’ve connected to a workspace you’ll be able to select a channel or
direct message to share to.

![Select Channel](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/PostTo-Slack.png)

By default, CodeStream will remember if/where you shared your last codemark and
the form will default to the same selections the next time you post a codemark.
If you’d like to specify a default channel to use based on the repo you are in,
click the gear menu at the top of the “Post to” popup and you can set the
default behavior for each repo.

Note that you can also share a codemark to Slack after it has been posted. Just
look for the “Share” option under the codemark’s ellipses menu. You can even
share codemarks created by your teammates.

## Participating from Slack

A codemark shared to Slack is much more powerful than a simple notification.
Your teammates can interact with the codemark, and participate in the discussion
right from Slack!

![Codemark on Slack](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/ShareOnSlack1.png)

### View Discussion & Reply

Your teammates can click “View Discussion & Reply” to add a reply to your
codemark, and that reply will get posted to CodeStream. If there were any
previous replies to the codemark, they’ll be displayed as well so that they can
catch up on the entire discussion. 

![Reply from Slack](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/animated/ReplyFromSlack.gif)

Note that your teammates don’t need to be CodeStream users in order to
participate in discussions via Slack.

### Open in IDE

Click “Open in IDE” to view both the code, and the codemark, right inside your
IDE. You’ll be first taken through a CodeStream web page where you’ll specify
which IDE to open, and CodeStream will remember this selection for the next time
you view a codemark from the same repo. You’ll then be taken to the appropriate
source file in your IDE, scrolled to the relevant block of code, with the
codemark displayed in the CodeStream pane to the right. If you don’t happen to
have the given repo open in your IDE, CodeStream will automatically open the
source file for you (assuming you’ve opened that repo previously, with
CodeStream installed, so that we know where to find it).

Note that if you’re using a JetBrains IDE you’ll need to first install the
[Toolbox App](https://www.jetbrains.com/toolbox-app/) so that CodeStream can
deep link into the IDE.

### Open on GitHub (or Bitbucket or GitLab)

If the code block is from a repo hosted on GitHub, Bitbucket or GitLab, this
button will take you to the corresponding block of code on that hosting service.
