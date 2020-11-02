---
title: What access to my code hosting service do you require?
description:
---

You won’t need to provide CodeStream with any Git (or GitHub, Bitbucket, etc.)
credentials, as the extension simply leverages your IDE’s access to Git.
CodeStream uses Git to do things like automatically mention the most recent
author when you comment on a block of code, and to maintain the connection
between that block of code and where it’s located in the source file as the file
evolves over time (and commits).

CodeStream does have integrations with GitHub, GitLab and Bitbucket to provide
additional features, such as the ability to [review pull
requests](../workflow/pull-requests). But, they are not needed for CodeStream's
core [code discussion](../workflow/discuss-code) and [feedback
request](../workflow/feedback-requests) functionality.