---
title: Filter and Search
description: 
---

Filter & Search allows you to slice and dice your team’s collection of comments,
issues and feedback requests however you see fit. By default, you’ll get a view
of any open issues or feedback requests assigned to you, followed by all open
issues and feedback requests.

![Filter and Search](../assets/images/FilterAndSearch2.png)

Hover over any item in the list to get more details.

![Hover for Details](../assets/images/SearchHover1.png)

CodeStream provides a number of powerful predefined filters to make things easy.

![Hover for Details](../assets/images/Filters2.png)

But you can also use advanced search syntax (see below for full list) to create
your own, and you can save them for future use by clicking the bookmark icon at
the right side of the search box.

![Hover for Details](../assets/images/SavedFilter1.png)

## Advanced Search Syntax

- **status:open** - Returns all open comments, issues and feedback requests.
- **status:closed** - Returns all resolved comments and issues.
- **status:approved** - Returns all approved feedback requests.
- **type:issue** - Returns all issues.
- **type:comment** - Returns all comments.
- **type:fr** - Returns all feedback requests.
- **is:** - Use open, closed, approved, issue, comment or fr for same results as status and type filters above.
- **author:@** - Returns all comments, issues and feedback requests authored by you (@me) or any teammate (@username).
- **mentions:@** - Returns all comments, issues and feedback requests where you (@me) or any teammate (@username) have been mentioned in either the title or description.
- **impacts:@** - Returns all feedback requests that cover code that you (@me) or any teammate (@username) have touched.
- **assignee:@** - Returns all issues and feedback requests assigned to you (@me) or a teammate (@username).
- **reviewer:@** - Returns all issues and feedback requests assigned to you (@me) or a teammate (@username).
- **tag:** - Returns all comments, issues and feedback requests with the specified tag. Use quotes around multi-word tags (e.g., tag:"api server"). You can combine multiple tags to create an AND query. For example, `tag:blue tag:green` will return items that have both blue and green tags.
- **no:tag** - Returns all comments, issues and feedback requests that have no tags.
- **branch:** - Returns all comments, issues and feedback requests created against the specified branch.
- **commit:** - Returns all comments, issues and feedback requests that include code with the specified commit ID.
- **repo:** - Returns all comments, issues and feedback requests created against code in the specified repository.
- **created:today** - Returns all comments, issues and feedback requests created today.
- **created:yesterday** - Returns all comments, issues and feedback requests created yesterday.
- **created:YYYY-MM-D**D - Returns all comments, issues and feedback requests created on the specified date.
- **created:<YYYY-MM-DD** - Returns all comments, issues and feedback requests created before the specified date.
- **created:>YYYY-MM-DD** - Returns all comments, issues and feedback requests created after the specified date.
- **updated:YYYY-MM-DD** - Returns all comments, issues and feedback requests updated on the specified date..
- **updated:<YYYY-MM-DD** - Returns all comments, issues and feedback requests updated before the specified date.
- **updated:>YYYY-MM-DD** - Returns all comments, issues and feedback requests updated after the specified date.
