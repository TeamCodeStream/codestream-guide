---
title: Issue Tracking Integrations
description: Link your codemarks with your existing issue tracking system
---

With the ability to comment on any line of code in your codebase, and not just
code that has recently been changed, CodeStream represents a lightweight form of
continuous code review. See some problematic code? Just select it and create an
issue!

If your team uses Jira (cloud or Server), Azure DevOps, Trello, Asana, GitHub
(cloud or Enterprise), Bitbucket, GitLab (cloud or Enterprise) or YouTrack for
tracking issues, you can create an issue on one of those services directly from
CodeStream. Just select the service you use from the dropdown at the top of the
CodeMark form. As you'll see, there are some additional steps required for
[GitHub
Enterprise](https://github.com/TeamCodeStream/CodeStream/wiki/Configuring-the-GitHub-Enterprise-Integration)
and [GitLab
Self-Managed](https://github.com/TeamCodeStream/CodeStream/wiki/Configuring-the-GitLab-Self-Managed-Integration).

![Issue-Tracking Services](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/IssueTrackingIntegrations.png)

After going through the authentication process with the selected service you'll
now be able to select a  destination for your issue. For example, with Jira
you'll be able to select the appropriate issue type and project.

![Jira Selections](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/NewIssue-JiraOptions.png)

Once the codemark has been created it will be linked to code to which it refers.

![Issue Connected to Code](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/CodemarkInSpatial-Issue.png)

Clicking on the codemark displays the issue details, which include a link to the
issue created on the external service. In the example below you'll see the URL
for the issue on Jira.

![Issue](https://raw.githubusercontent.com/TeamCodeStream/CodeStream/master/images/CodemarkIssue5.png)



