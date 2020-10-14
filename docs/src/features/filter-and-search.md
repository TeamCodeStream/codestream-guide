---
title: Filter and Search
description: 
---

The Filter & Search tab allows you to slice and dice your team’s collection of
codemarks and feature requests however you see fit. By default, you’ll get a view of
any open issues or feature requests assigned to you, followed by all open issues
and feature requests.

![Filter and Search](../assets/images/FilterAndSearch1.png)

Hover over any codemark or feature request in the list to get more details.

![Hover for Details](../assets/images/SearchHover.png)

CodeStream provides a number of powerful predefined filters to make things easy.

![Hover for Details](../assets/images/Filters.png)

But you can also use advanced search syntax (see below for full list) to create
your own, and you can save them for future use by clicking the bookmark icon at
the right side of the search box.

![Hover for Details](../assets/images/SavedFilter.png)

## Advanced Search Syntax

- **status:open** - Returns all open issue codemarks and feature requests.
- **status:closed** - Returns all resolved issue codemarks.
- **status:approved** - Returns all approved feature requests.
- **type:issue** - Returns all issue codemarks.
- **type:comment** - Returns all comment codemarks.
- **type:fr** - Returns all feature requests.
- **is:** - Use open, closed, approved, issue, comment or fr for same results as status and type filters above.
- **author:@** - Returns all codemarks and feature requests authored by you (@me) or any teammate (@username).
- **mentions:@** - Returns all codemarks and feature requests whereyou (@me) or any teammate (@username) have been mentioned in either the title or description.
- **impacts:@** - Returns all feature requests that cover code that you (@me) or any teammate (@username) have touched.
- **assignee:@** - Returns all issue codemarks and feature requests assigned to you (@me) or a teammate (@username).
- **reviewer:@** - Returns all issue codemarks and feature requests assigned to you (@me) or a teammate (@username).
- **tag:** - Returns all codemarks and feature requests with the specified tag. Use quotes around multi-word tags (e.g., tag:"api server"). You can combine multiple tags to create an AND query. For example, `tag:blue tag:green` will return codemarks and reviews that have both blue and green tags.
- **no:tag** - Returns all codemarks and feature requests that have no tags.
- **branch:** - Returns all codemarks and feature requests created against the specified branch.
- **commit:** - Returns all codemarks and feature requests that include code with the specified commit ID.
- **repo:** - Returns all codemarks and feature requests created against code in the specified repository.
- **created:today** - Returns all codemarks and feature requests created today.
- **created:yesterday** - Returns all codemarks and feature requests created yesterday.
- **created:YYYY-MM-D**D - Returns all codemarks and feature requests created on the specified date.
- **created:<YYYY-MM-DD** - Returns all codemarks and feature requests created before the specified date.
- **created:>YYYY-MM-DD** - Returns all codemarks and feature requests created after the specified date.
- **updated:YYYY-MM-DD** - Returns all codemarks and feature requests updated on the specified date..
- **updated:<YYYY-MM-DD** - Returns all codemarks and feature requests updated before the specified date.
- **updated:>YYYY-MM-DD** - Returns all codemarks and feature requests updated after the specified date.
