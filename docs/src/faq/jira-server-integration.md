---
title: Configuring the Jira Server Integration
description:
---

**NOTE: If you are using CodeStream's cloud service, this integration requires that your Jira Server instance be at a publicly accessible URL. This is not the case, however, if you are using CodeStream On-Prem.**

CodeStream can integrate with Jira Server using Atlassian’s published REST API. To enable CodeStream to integrate with your Jira Server installation, you will need to set up a CodeStream application link. This application link serves as a conduit for users to authenticate against their Jira Server account without ever having to enter their credentials in CodeStream.

Jira Server uses the OAuth standard (version 1.0a) for client authorization. This page describes the process: [https://developer.atlassian.com/server/jira/platform/oauth/](https://developer.atlassian.com/server/jira/platform/oauth/). To set up the application link for use with CodeStream, you only need to follow Step 1 on this page, which is really two steps:
 
* Generate a public/private key pair using SSH. Be sure to generate the public key from the `jira_publickey.pem` file you generate.
* Create your application link within Jira Server. When entering the application name for the link, use CodeStream, or whatever name works best for you to identify the link. 

The first user to set up the integration will need three pieces of information: 

* the URL used to access your Jira Server installation as known to your internal network, in the form http(s)://host:port
* the “consumer key” you entered when creating the application link
* the private key from when you generated the public/private key pair

If all goes well, the user will be taken to a page in their browser where they can authenticate against Jira Server, if needed, and then approve CodeStream’s access to make API calls to Jira on their behalf. Once complete, the integration with your Jira Server installation will become available to all users on the team. Other users will NOT have to enter the URL, consumer key, and private key; they will only need to go through the final authentication process to authorize the application link on their behalf.
