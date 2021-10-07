---
title: Discuss Code
description: 
---

## What is a codemark?

Quite simply, a codemark is a discussion connected to the code. It could be a
question, a suggestion, a bug report, or documentation. All of these discussions
are saved, anchored to the blocks of code they refer to, so that they can be
leveraged in the future. It could be a new developer joining the team, a
developer trying to fix a bug in someone else’s code, or even just you trying to
remember why you made that change six months ago… whatever the case, CodeStream
helps you understand the code by surfacing the discussions in a contextual way.

![Codemark](../assets/images/CodemarkInGutter1.png)

Even as a file changes over time, the codemarks will remain connected to the
code. Add some new lines of code above the code block, make edits to the code,
or even cut-and-paste the entire block to a different section of the file, and
you’ll see the codemark move right along with the changes.

## Creating a codemark

Create a codemark by selecting a block of code in your editor and then clicking
on one of the icons that appears in the CodeStream pane next to your selection.

![New Codemark](../assets/images/animated/DiscussCode1-VSC.gif)

If you're using a JetBrains IDE, such as IntelliJ, you can also create a
codemark by using the "+" button that appears in the editor's gutter when you
select a block of code. When you're viewing a diff, for either a feedback
request or a pull request, the button will also appear when you hover in the
gutter to make it easy to comment on a single line.

![New Codemark in JetBrains](../assets/images/animated/Compose-JB.gif)

Even when the CodeStream pane is closed or not in view, you can create a
codemark via the CodeStream options in either the lightbulb or context menus.

![Context Menu](../assets/images/ContextMenu4.png)

Lastly, you can also look for the "+" menu at the top of the CodeStream pane.

Need to reach teammates that don’t spend a lot of time in the IDE? Or maybe some
teammates that aren’t yet on CodeStream? You can optionally share a codemark out
to Slack or Microsoft Teams. The Slack integration even allows your teammates to
reply directly from Slack.

![Share on Slack or Teams](../assets/images/SharingOptions1.png)

## Comment Codemarks

The all-purpose codemark for linking any type of discussion to a block of code.
Ask a question. Make a suggestion. Document some code. Make note of key sections
of the codebase. The possibilities are endless!

![Comment Codemark](../assets/images/CodemarkComment6.png)

## Issue Codemarks

When something needs to get done there’s always a better chance of it happening
if it’s captured as an issue, with someone’s name attached. Assign issues as a
way of reporting bugs. Or manage your tech debt by capturing items as tracked
issues instead of inline FIXMEs. 

![Issue Codemark](../assets/images/CodemarkIssue7.png)

If your team uses Asana, Azure DevOps, Bitbucket (cloud), Clubhouse, GitHub
(cloud or Enterprise), GitLab (cloud or Self-Managed), Jira (cloud or Server),
Linear, Trello, or YouTrack (cloud) for tracking issues, you can create an issue on one
of those services directly from CodeStream. Just select the service you use from
the dropdown at the top of the codemark form.

![Issue Tracking Services](../assets/images/IssueTrackingIntegrations2.png)

After going through the authentication process with the selected service you'll
now be able to select a destination for your issue. For example, with Jira
you'll be able to select the appropriate issue type and project.

![Jira Selections](../assets/images/NewIssue-JiraOptions1.png)

Once the issue has been created on CodeStream, it will include a link to the
issue that was created on the external service. In the example below you'll see
the URL for the issue on Jira.

![Linked Issue](../assets/images/LinkedIssues.png)

And the issue on Jira includes a link to open the relevant code in your IDE.

![Issue on Jira](../assets/images/IssueOnJira1.png)

## Bringing the right people into the discussion

When you create a codemark, CodeStream automatically mentions the people that
most recently touched of the code you are commenting on. They may be the best
people to answer your question, but you can, of course, remove those mentions
and manually mention someone else if appropriate.

![Auto Mention](../assets/images/CodemarkCompose.png)

It may be the case that the people that have touched the code aren't yet on
CodeStream, in which case CodeStream will provide checkboxes to have them
notified via email. They can simply reply to the email to have their comment
posted to CodeStream, and of course they can install CodeStream to participate
from their IDE.

## Different versions of the code?

Maybe you’re on a feature branch, have local changes, or simply haven’t pulled
in a while. There are countless reasons why the code you’re looking at might be
different than what a teammate is looking at, and as a result, there will be
plenty of times when the code referenced in a codemark doesn’t match what you
have locally.

CodeStream recognizes these situations and includes the original version of the
code block (i.e. at the time the codemark was created), the current version, and
a diff.

![Compare and Apply](../assets/images/CodemarkWithDiff1.png)

Keep in mind that with CodeStream you can discuss any line of code, in any
source file, at any time, even if it’s code that you just typed into your editor
and haven’t yet committed. CodeStream allows you to discuss code at the very
earliest stages of the development process.

## Resolving Codemarks

Although not required, both comment and issue codemarks can be resolved. The
[Codemarks](../features/codemarks-section) section of the CodeStream pane breaks
out codemarks into Open, Resolved and Archived sections, and green, purple and
gray icons are used to represent those different states. If you see a lot of
Open/green codemarks in the codestream pane, that means that your teammates are
being blocked by discussions and issues that haven't be resolved. 

You can add a comment at the same time your resolve the codemark, and you can
also elect to archive the codemark at the same time.

![Resolve Codemark](../assets/images/ResolveCodemark.png)

## Advanced Features

### Multiple Ranges

Many discussions about code involve more than just one block of code, and
concepts are often best presented when you can refer to multiple code locations
at once. Here are a few examples of multi-range codemark at work:

* A change to a function is being contemplated that will impact its name. Each
  instance of the function call can now be referenced in one discussion. 
* A react component and its CSS styling aren’t interacting well, and you want to
  ask the team for input. You might select the div and the CSS rules you think
  should apply, so your teammates know exactly what you’re talking about.
* Clients which make API calls to the server might get an unexpected result.
  Select the code where you’re making the API call, and the handler in the API
  server, to connect the two actions together.

To create a multi-range codemark, click on "+ Add Code Block".

![Add Code Block](../assets/images/CodemarkAddRange1.png)

And then select another block of code from the same file, a different file, or
even a different repo.

![Select Range](../assets/images/CodemarkSelectRange.png)

You can intersperse the difference code blocks in your post by referring to each
one as `[#N]` (or click the pin icon from one of the code blocks to insert the
markdown for you), as in the following example.

![Referencing Code Blocks](../assets/images/ReferenceCodeBlocks.png)

And here's how that example is rendered.

![Multi-Range Codemark](../assets/images/MultiRangeCodemark.png)

Once you've created the codemark, you can easily jump between the different
locations by clicking the Jump icon at the bottom-right of each code block.

Note that when you edit a codemark you can add and remove code blocks, and you
can change the location of any of the code blocks by clicking the dashed square
icon.

### File Attachments

Enrich your discussions about code by attaching files directly to code blocks.
Think about how much more compelling your comments and documentation become when
you...

* Attach a spec to guide the development of a new feature
* Attach a log file to help debug an issue in the code
* Attach a mockup to help clarify some UI work
* Attach a screenshot to highlight a problem

When creating a code comment or issue, you can attach a file by
dragging-and-dropping on the the description field, pasting from you clipboard,
or by clicking the new paperclip icon.

![Attach File](../assets/images/AttachFile.png)

Images can even be displayed inline using markdown. Just click the pin icon to
the right of the attachment, and CodeStream will insert the markdown for you.

![Markdown](../assets/images/ImageMarkdown.png)

And now your teammate knows exactly what you’re looking for!

![Inline Display](../assets/images/InlineImage.png)

You can click on files in the Attachments section to either download or open in
the appropriate application.

### Tagging

Look for the tag icon inside the codemark compose box to either select a tag or
create a tag using any combination of color and text label.

![Tags Popup](../assets/images/TagsPopup.png)

Tags are a great way to broadly organize and group your organization's
codemarks, and the possibilities here are endless. Note that you can also filter
by tag on the [Filter & Search page](../features/filter-and-search).

### Related Codemarks

Click on the CodeStream icon in the codemark compose form to select other,
related codemarks to “attach” to the current codemark. This allows you to easily
establish a connection between different parts of a codebase. For example, when
a change to one part of the codebase would require a change to another part,
identify the dependency by creating two related codemarks.

![Related Codemarks](../assets/images/AddCodelink.png)

Once you’ve added the related codemarks they’ll be displayed in a “Related”
section and you can click on any one to jump to that codemark and the
corresponding section of the code.

![Codemark with Related](../assets/images/CodemarkWithRelated.png)

## Managing Codemarks

Click on the ellipses menu for any codemark and you'll see options for managing the codemark.

![Codemark Menu](../assets/images/CodemarkMenu2.png)

* Share - In addition to sharing to Slack or Teams at the time you create a
  codemark, you can also share it anytime thereafter.
* Follow/Unfollow - Unfollow to stop receiving
  [notifications](../features/notifications) for the codemark.
* Copy link - Get a [permalink](../features/permalinks) for the codemark to
  share it anywhere.
* Archive - If there’s a codemark that you don’t think is important enough to be
  on permanent display in a given file, but you don’t want to completely delete
  it, you can archive it instead. Settings in the [Codemarks
  section](../features/codemarks-section) allow you to easily see all archived
  codemarks.
* Edit - Only the codemark's author can edit it.
* Delete - Only the codemark's author can delete it, but we encourage you to
  archive instead of delete unless you're positive the codemark won't have any
  future value.
* Inject as Inline Comment - If you'd like a specific codemark to become part of
  the repo use this option to have it added as an inline comment. You can select
  the appropriate format, and then indicate if you want to include timestamps,
  replies, or to have the comment wrapped at 80 characters. You can also elect
  to have the codemark archived once it's been added as an inline comment.
* Reposition Codemark - In most cases, a codemark will automatically remain
  linked to the block of code it refers to as the file changes over time. For
  example, if you cut the block of code and paste it at a different location in
  the file, the codemark will move right along with it. There are some
  scenarios, however, that CodeStream isn't able to handle automatically. For
  example, if you pasted the block of code into a different file. In these
  cases, Reposition Codemark allows you to select the new location of the block
  of code so that the codemark is displayed properly.