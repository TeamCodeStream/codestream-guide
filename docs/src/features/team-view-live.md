---
title: Team Live View
description: See what your team is doing in real-time
---

Development is a collaborative activity, yet much of it happens in isolation,
with work only shared with the team at the end of a cycle, or sprint.
CodeStream’s “LiveView” increases transparency by making the local edits of
individual developers visible to team members, so that everyone knows what
everyone else is working on, in real-time.

As developers write code, whether editing existing files or creating new files,
a summary of their changes, including the repo(s), files, and lines changed is
exposed to their teammates through CodeStream. The information is displayed
contextually, in the IDE, and even warns teammates of potential merge conflicts…
before they happen!

## Team Tab

In addition to allowing you to see who is on your team, and to invite new
members, the Team tab also gives you a live view into what everyone is working
on. Below each user’s name is a list of the repositories in which they have made
local changes (i.e., changes that haven’t been pushed). In addition to the repo
name, you’ll see the branch name, line additions/deletions, a count of the
number of changes to code that you wrote (in lines of code), and a warning if
any of the changes could lead to a merge conflict.

![Team Tab](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/TeamTab.png)

You can also hover over an entry to see the files that have been changed,
including ones that represent potential merge conflicts, and how recently this
info was updated.

![Changes](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/LiveViewChanges.png)

Your entry on the Team tab is always displayed first, and you can opt-out of
sharing by clicking on the icon to the right (although your team admin may have
set this to always on or always off at the team level).

![Opt Out](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/LiveViewOptOut.png)

If you're a team admin you can also assign/remove admin privileges or remove
people from the team.

![Admin Rights](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/AdminRights.png)
 
## Current File

CodeStream also surfaces this information on the Current File tab, so that
you’re immediately aware of when other developers are working in the same files
as you. If another developer has the same file open in their IDE and has made
changes, you’ll see the following message.
 
![Editing](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/LiveViewEditing.png)

If both you and the other developer have made changes to the file, you’ll see
the following message.

![Merge Conflict](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/LiveViewMergeConflict.png)

## Team Settings

If you are a team admin, the team name on the Team tab will be a dropdown
exposing some team settings. In addition to changing the team’s name, you can
also determine how Live View is used by your team. It can be on for everyone,
off for everyone, or up to each individual team member to decide.

![Team Settings](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/TeamSettings.png)