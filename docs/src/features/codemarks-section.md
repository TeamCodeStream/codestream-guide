---
title: Codemarks Section
description: 
---

Whether they originated in a pull request, a feedback request, or through ad-hoc
code comments/issues, "codemarks" are the
[discussions](../workflow/discuss-code) that annotate your codebase. The
Codemarks section of the CodeStream pane lists all of the codemarks in the
current repository for easy reference. Different sections, and colors, segragate
the codemarks by their status... Open, Resolved, or Archived.

![Codemarks Section](../assets/images/CodemarksSection1.png)

Click on any item to review the details and discussion. With the exception of
pull-request comments, bubbles to the right will indicate the number of replies.

By default, all codemarks from the current repository are displayed, but you can
change the filter to show all codemarks in the current branch, codemarks in the
current folder, or just codemarks in the currently selected file. Note that
codemarks from feedback requests and pull requests only appear when you have the
Current File filter selected.

![Codemarks Section Settings](../assets/images/CodemarksSectionSettings1.png)

When you hover over the Codemarks section heading, icons appear at the right.

![Codemarks Section Header](../assets/images/CodemarksSectionHeader.png)

Included are options to create a code comment or issue. You can also choose to
view the codemarks in "spatial view", instead of in a list. If you've ever
commented on a Google Doc, spatial view will be a familiar concept. The
discussions are displayed alongside the blocks of code they refer to, and as you
scroll the source file the discussions scroll as well. It's a great way to
review codemarks in a section of a file you're about to work on.

![Spatial View](../assets/images/CodemarksSectionSpatial.png)

Click on the gear icon for more controls over the list.

* Wrap multi-line comments - Rather than showing just a truncated portion of the
  codemark, the entirety of the post is displayed in the list.
* Show Tags - Any applicable tags will be displayed with each codemark.
* Sort comments by - Codemarks are displayed by date by default, but when the
  filter is set to Current File you can opt to sort by line number (i.e., their
  order in the file).
* Show icons in editor gutter - In addition to appearing in the list in the
  Codemarks section, codemarks are also represented as icons in the editor
  gutter alonside the blocks of code they refer to. You can determine which
  types of codemarks, and which statuses, you want to have displayed there. By
  default codemarks from feedback requests are displayed, but pull request
  comments are not. Resolved codemarks are also displayed by default, but
  archived codemarks are not.
