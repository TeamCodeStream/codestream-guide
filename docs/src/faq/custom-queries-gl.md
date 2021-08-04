---
title: GitLab custom queries
description:
---

## Searching Merge Requests

Custom merge request (MR) filtering allows you to specify which GitLab MRs you want to see in the Merge Request section.

### Merge Request Search Syntax

All searches are done using `attribute=value` format with an `&` between each parameter. For parameters with a space in them (e.g. `labels=foo,help wanted`) leave them as is (do not put any quotes in the parameter). You can use `@me` to specify your user id and user name otherwise they can be found on GitLab. All filters, by default, have parameter `scope=all` (see [Minimum Qualifiers](#minimum-mr-qualifiers)). To overwrite this, use `scope=X`. See examples given below:

```
state=opened&author_id=@me
state=closed&assignee_username=@me&labels=help wanted
assignee_id=5&scope=created_by_me
labels=foo,help wanted&scope=created_by_me
iids[]=1,2&milestone=1.0.0&my_reaction_emoji=star&scope=assigned_to_me
project_id=23&state=opened&reviewer_id=@me
scope=assigned_to_me&not[labels]=duplicate&not[milestone]=review
```

| Attribute   | Type  | Description |
| ------------- | ----- | --------------- |
| `state` | string | Return `all` issues or just those that are `opened` or `closed` |
| `order_by` | string | Return requests ordered by `created_at` or `updated_at` fields. Default is `created_at`. |
| `sort` | string | Return requests sorted in `asc` or `desc` order. Default is `desc`. |
| `milestone` | string | Return merge requests for a specific milestone. `None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone. |
| `view` | string | If `simple`, returns the `iid`, URL, title, description, and basic state of merge request. |
| `labels` | string | Return merge requests matching a comma separated list of labels. `None` lists all merge requests with no labels. `Any` lists all merge requests with at least one label. `No+Label` (Deprecated) lists all merge requests with no labels. Predefined names are case-insensitive. |
| `with_labels_details` | boolean | If `true`, response returns more details for each label in labels field: `:name`, `:color`, `:description`, `:description_html`, `:text_color`. Default is `false`. |
| `with_merge_status_recheck` | boolean | If `true`, this projection requests (but does not guarantee) that the merge_status field be recalculated asynchronously. Default is `false`. |
| `created_after` | datetime | Return merge requests created on or after the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `created_before` | datetime | Return merge requests created on or before the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `updated_after` | datetime | Return merge requests updated on or after the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `updated_before` | datetime | Return merge requests updated on or before the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `scope` | string | Return merge requests for the given scope: `created_by_me`, `assigned_to_me` or `all`. Defaults to `created_by_me` |
| `author_id` | integer | Returns merge requests created by the given user `id`. Mutually exclusive with `author_username`. Combine with `scope=all` or `scope=assigned_to_me`. |
| `author_username` | string | Returns merge requests created by the given `username`. Mutually exclusive with `author_id`. |
| `assignee_id` | integer | Returns merge requests assigned to the given user `id`. `None` returns unassigned merge requests. `Any` returns merge requests with an assignee. |
| `reviewer_id` | integer | Returns merge requests which have the user as a reviewer with the given user `id`. `None` returns merge requests with no reviewers. `Any` returns merge requests with any reviewer. Mutually exclusive with `reviewer_username`. |
| `reviewer_username` | string | Returns merge requests which have the user as a reviewer with the given `username`. `None` returns merge requests with no reviewers. `Any` returns merge requests with any reviewer. Mutually exclusive with `reviewer_id`. |
| `my_reaction_emoji` | string | Return merge requests reacted by the authenticated user by the given `emoji`. `None` returns issues not given a reaction. `Any` returns issues given at least one reaction. |
| `source_branch` | string | Return merge requests with the given source branch. |
| `target_branch` | string | Return merge requests with the given target branch. |
| `search` | string | Search merge requests against their `title` and `description`. |
| `in` | string | Modify the scope of the `search` attribute. `title`, `description`, or a string joining them with comma. Default is `title,description`. |
| `wip` | string | Filter merge requests against their `wip` status. `yes` to return only draft merge requests, `no` to return non-draft merge requests. |
| `not` | hash | Return merge requests that do not match the parameters supplied. Accepts: `labels`, `milestone`, `author_id`, `author_username`, `assignee_id`, `assignee_username`, `reviewer_id`, `reviewer_username`, `my_reaction_emoji`. See example above for how to format `not` as a `hash` type.|
| `environment` | string |  Returns merge requests deployed to the given environment. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `deployed_before` | datetime | Return merge requests deployed before the given date/time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `deployed_after` | datetime | Return merge requests deployed after the given date/time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `project_id` | integer | Returns merge requests for the given project. |
| `group_id` | integer | Returns merge requests for the given group. |

### Searching By Project

To search for merge requests in a specific project use parameter `project_id=X`. Project ids are listed when viewing the project on GitLab. Similar to regular MR searching, searching through a project, by default, uses `scope=all` and will return all MRs for the project specified. Only one project_id may be listed at a time.

```
project_id=23&state=opened&assignee_id=@me
iids[]=1&project_id=473&labels=bug
```

### Searching By Group

To search for merge requests in a specific group use parameter `group_id=X`. Group ids are listed when viewing the group on GitLab. Similar to regular MR searching, searching through a group, by default, uses `scope=all` and will return all MRs for the group specified. Only one group_id may be listed at a time.

```
group_id=23&state=opened&assignee_id=@me
iids[]=1&group_id=473&labels=bug
```

### Minimum MR Qualifiers

By default, custom filters use `scope=all` which searches merge requests across all of GitLab. To avoid pulling all MRs listed on GitLab, you will need to refine this search using at least one of the following qualifiers:

* scope=assigned\_to\_me
* scope=created\_by\_me
* project_id
* group_id
* author_id
* author_username
* assignee_id
* assignee_username
* reviewer_id
* reviewer_username
* my\_reaction\_emoji

## Searching Issues

Custom issue filtering allows you to specify which GitLab issues you want to see in the Issues section.

### Issue Search Syntax

All searches are done using `attribute=value` format with an `&` between each parameter. For parameters with a space in them (e.g. `labels=foo,help wanted`) leave them as is (do not put any quotes in the parameter). You can use `@me` to specify your user id and user name otherwise they can be found on GitLab. All filters, by default, have parameter `scope=all` (see [Minimum Qualifiers](#minimum-issue-qualifiers)). To overwrite this, use `scope=X`. See examples given below:

```
state=opened&author_id=@me
state=closed&assignee_username=@me&labels=help wanted
assignee_id=5&scope=created_by_me
labels=foo,help wanted&scope=created_by_me
iids[]=1,2&milestone=1.0.0&my_reaction_emoji=star&scope=assigned_to_me
project_id=23&state=opened&assignee_id=@me
```

| Attribute   | Type  | Description |
| ------------- | ----- | --------------- |
| `assignee_id` | integer | Return issues assigned to the given user `id`. Mutually exclusive with `assignee_username`. `None` returns unassigned issues. `Any` returns issues with an assignee. |
| `assignee_username` | string array | Return issues assigned to the given `username`. Similar to `assignee_id` and mutually exclusive with `assignee_id`. In GitLab CE, the `assignee_username` array should only contain a single value. Otherwise, an invalid parameter error is returned. |
| `author_id` | integer | Return issues created by the given user `id`. Mutually exclusive with `author_username`. Combine with `scope=all` or `scope=assigned_to_me`. |
| `author_username` | string | Return issues created by the given `username`. Similar to `author_id` and mutually exclusive with `author_id`. |
| `confidential` | boolean | Filter confidential or public issues. |
| `created_after` | datetime | Return issues created on or after the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `created_before` | datetime | Return issues created on or before the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `due_date` | string | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. Accepts: `0` (no due date), `overdue`, `week`, `month`, `next_month_and_previous_two_weeks`. |
| `iids[]` | integer array | Return only the issues having the given `iid` |
| `in` | string | Modify the scope of the `search` attribute. `title`, `description`, or a string joining them with comma. Default is `title`,`description` |
| `issue_type` | string | Filter to a given type of `issue`. One of `issue`, `incident`, or `test_case`. |
| `iteration_id` | integer | Return issues assigned to the given iteration ID. `None` returns issues that do not belong to an iteration. `Any` returns issues that belong to an iteration. Mutually exclusive with `iteration_title`. |
| `iteration_title` | string | Return issues assigned to the iteration with the given title. Similar to `iteration_id` and mutually exclusive with `iteration_id`. |
| `labels` | string | Comma-separated list of label names, issues must have all labels to be returned. `None` lists all issues with no labels. `Any` lists all issues with at least one label. Predefined names are case-insensitive. |
| `milestone` | string | The milestone title. `None` lists all issues with no milestone. `Any` lists all issues that have an assigned milestone. |
| `my_reaction_emoji` | string | Return issues reacted by the authenticated user by the given `emoji`. `None` returns issues not given a reaction. `Any` returns issues given at least one reaction. |
| `non_archived` | boolean | Return issues only from non-archived projects. If `false`, the response returns issues from both archived and non-archived projects. Default is `true`. |
| `not` | Hash | Return issues that do not match the parameters supplied. Accepts: `assignee_id`, `assignee_username`, `author_id`, `author_username`, `iids`, `iteration_id`, `iteration_title`, `labels`, `milestone`, and `weight`. |
| `order_by` | string | Return issues ordered by `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight` fields. Default is `created_at`. |
| `scope` | string | Return issues for the given scope: `created_by_me`, `assigned_to_me` or `all`. Defaults to `created_by_me`. |
| `search` | string | Search issues against their `title` and `description`. |
| `sort` | string | Return issues sorted in `asc` or `desc` order. Default is `desc`. |
| `state` | string | Return `all` issues or just those that are `opened` or `closed` |
| `updated_after` | datetime | Return issues updated on or after the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `updated_before` | datetime | Return issues updated on or before the given time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`) |
| `weight` | integer | Return issues with the specified `weight`. `None` returns issues with no weight assigned. `Any` returns issues with a weight assigned. |
| `project_id` | integer | Returns issues for the given project. |
| `group_id` | integer | Returns issues for the given group. |

### Searching By Project

To search for issues in a specific project use parameter `project_id=X`. Project ids are listed when viewing the project on GitLab. Similar to regular issue searching, searching through a project, by default, uses `scope=all` and will return all issues for the project specified. Only one project_id may be listed at a time.

```
project_id=23&state=opened&assignee_id=@me
iids[]=1&project_id=473&labels=bug
```

### Searching By Group

To search for issues in a specific group use parameter `group_id=X`. Group ids are listed when viewing the group on GitLab. Similar to regular issue searching, searching through a group, by default, uses `scope=all` and will return all issues for the group specified. Only one group_id may be listed at a time.

```
group_id=23&state=opened&assignee_id=@me
iids[]=1&group_id=473&labels=bug
```

### Minimum Issue Qualifiers

By default, custom filters use `scope=all` which searches issues across all of GitLab. To avoid pulling all issues listed on GitLab, you will need to refine this search using at least one of the following qualifiers:

* scope=assigned\_to\_me
* scope=created\_by\_me
* project_id
* group_id
* author_id
* author_username
* assignee_id
* assignee_username
* my\_reaction\_emoji

Search syntax is derived from GitLab's custom search API. More details can be [found here](https://docs.gitlab.com/ee/api/issues.html).