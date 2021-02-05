---
title: Team Settings & Admin
description: 
---

## Managing People & Roles

The [My Team section](myteam-section) of the CodeStream pane allows you to
invite people via email address, and allows team admins to assign and remove
admin privileges.

![Admin Privileges](../assets/images/AdminRights1.png)

The "Blame Map" section allows you to define code ownership on the team. By
default, when you comment on code, CodeStream mentions (or offers to email) the
author(s) of the code you are commenting on. But if that person has left the
company, or transitioned to a different role, it might not be the right thing to
do.

![Blame Map](../assets/images/BlameMap.png)

The Blame Map allows you to direct discussions about code that the former team
member worked on to someone else on the team. Based on the mapping in the
screenshot above, the next time someone asks a question about code authored by
Dave, or requests a review of changes to that code, Tracy will be
mentioned/assigned instead of Dave.

## Team Settings

If you are a team admin, look for the Team Admin menu under the headshot menu at the top of the CodeStream pane.

![Team Settings](../assets/images/TeamSettings3.png)

## Onboarding Settings

Onboarding settings make it easy to get your entire team onto CodeStream,
without needing to send out individual email invitations, by allowing people to
join the team based on having certain repositories open in their IDE. And you
don’t need to worry about teammates not signing up correctly or setting up the
wrong integrations because you can control which integration and authentication
options are available to them.

![Onboarding Settings](../assets/images/OnboardingSettings.png)

The Integration Options section allows you to smooth the onboarding process
process for your teammates by eliminating unnecessary unnecessary options, and
of the possibility of mistakes. You can control which authentication options
they can use. For example, you might want everyone to sign up using GitHub. You
can also specify your team’s preferred code host, messaging service, and issue
tracker. Note that you can select multiple services in each category.

The Team Assignment section allows you to grant access to the team based on
access to certain repos. The initial list is based on your repositories that
CodeStream is already aware of, but you can add more simply by opening the
repository in your IDE.

Here’s how the onboarding process works. Shoot a message to the team, maybe via
Slack, and tell them to install the CodeStream extension in their IDE. After
installing the extension, as long as they have one of the repositories you
specified open in their IDE, they’ll be prompted to join your team.

![Join Team](../assets/images/AutoJoinTeam.png)

Do you work at a large enterprise, with the [need for multiple CodeStream
teams](../faq/need-teams)? Just tell the team leads to sign up and create
CodeStream teams, and then configure their Onboarding Settings.

## Live View Settings

[Live View](myteam-section/#live-view) gives your team visibility into what everone is working on. By
default, each team member can determine whether or not they want to share what
they're working, but as an admin you can also force Live View on or off for
everyone.

![Live View Settings](../assets/images/LiveViewSettings.png)

## Feedback Request Assignment & Approval

Team admins can control how both feedback request assignments and approvals work
for the team. 

![Feedback Request Settings](../assets/images/FRTeamSettings.png)

By default, the person requesting feedback can decide how approvals work, but
you can, instead, set a default behavior for all feedback requests for the team.

* Any reviewer can approve - Any one can approve the feedback request,
  regardless of how many reviewers are assigned.
* All reviewers must approve individually - Each assigned reviewer must
  individually approve the feedback request before it’s considered approved.

You can also decide if and how CodeStream suggests reviewers. Round-robin will
cycle through all developers on the team. Random will randomly assign the
feedback request to any developer on the team. The Authorship options will
suggest up to three reviewers based on the developers who wrote the lines of
code impacted by the changes, as well as other developers who may have committed
to the branch.

## Change Team Name

Update the name of your CodeStream team at any time.

![Change Team Name](../assets/images/ChangeTeamName.png)

## Data Export 

A lightweight export facility for getting your team's discussions out of
CodeStream. Click the icon to copy all of the data to the clipboard.

![Data Export](../assets/images/DataExport.png)

