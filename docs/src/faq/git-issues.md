---
title: Git Issues
description:
---

When you post a message with a code block you may encounter one of the following
Git-related warnings.

## Repo isn’t managed by Git, or Git can't be found

While technically not a requirement, key elements of CodeStream’s functionality
depend on your repository being managed by Git, or a Git hosting service like
GitHub. If you’re not using Git, CodeStream will not be able to connect the
codemarks you create to the appropriate blocks of code in your source files.
This means that codemarks will appear in the activity feed, as well as on the
Search tab, but they will not appear on the Current File tab when your teammates
are viewing the given source file.

Note that this error could also mean that Git isn’t in your PATH. If so, please
add it to your PATH and then restart your IDE.

## Repo doesn’t have a remote URL

The remote URL is part of what allows CodeStream to tie the code block from your
message to the appropriate file/location in the corresponding repo in your
teammates’ IDEs. If CodeStream isn't able to identify the repository your
teammate has open as the same one in which you created your codemark, they won't
be able to see the codemark.

From the command line, do a `git remote -v` to confirm whether or not you have a
remote URL configured for this repository. If there is no remote URL, find out
the correct URL and then specify the remote by doing a `git remote add origin <remote URL>`.

## Unsaved File

As with files not managed by Git, CodeStream will not be able to link a codemark
to a block of code in a new, unsaved file. Go ahead and save the file before
creating your first codemark.