---
title: Configuring the Jira Server Integration
description:
---

**NOTE #1: Recent versions of Jira Server (>=8.14.0) support the use of API Tokens to access the Jira Server REST API. We recommend you use API Tokens if possible to avoid the more complicated setup described here. [Check your Jira Server version](https://docs.codestream.com/userguide/faq/jira-server-version/).**

**NOTE #2: You must be a Jira administrator in order to configure this integration. To determine if you have the proper permissions in order to proceed, look for the Jira Settings menu (cog icon, mostly likely at the top-right next to your headshot) and make sure there's an "Applications" option there. If you don't have the Settings menu, or the Applications option, then you won't be able to configure the integration.**

**NOTE #3: This integration requires that your Jira Server instance be at a publicly accessible URL.**

CodeStream can integrate with Jira Server using Atlassian’s published REST API. To enable CodeStream to integrate with your Jira Server installation, you will need to set up a CodeStream application link. This application link serves as a conduit for users to authenticate against their Jira Server account without ever having to enter their credentials in CodeStream.

Jira Server uses the OAuth standard (version 1.0a) for client authorization. For reference, this page from Atlassian describes the process: [https://developer.atlassian.com/server/jira/platform/oauth/](https://developer.atlassian.com/server/jira/platform/oauth/). However, you do not need to follow the full instructions on that page; the relevant instructions are duplicated and simplified here for clarity. Note that you will need the `openssl` command-line tool to generate a public/private key pair for use with the application link.

## Generate a public/private key pair

In a terminal, use `openssl` to generate your public/private key pair, following these steps carefully:

* Generate a 1024-bit private key:

  `openssl genrsa -out jira_privatekey.pem 1024`

* Create an X509 certificate:

  `openssl req -newkey rsa:1024 -x509 -key jira_privatekey.pem -out jira_publickey.cer -days 365`

  Enter whatever information you see fit to accompany the certificate.

* Extract the private key (PKCS8 format) to the `jira_privatekey.pcks8` file:

  `openssl pkcs8 -topk8 -nocrypt -in jira_privatekey.pem -out jira_privatekey.pcks8`

* Extract the public key from the certificate to the `jira_publickey.pem` file:

  `openssl x509 -pubkey -noout -in jira_publickey.cer > jira_publickey.pem`

## Create an application link

Follow these steps to create your application link within Jira Server.

* In Jira, navigate to **Jira settings** (gear icon in upper-right), select **Applications**. Type in your Administrator password if needed. Then select **Application links** under "Integrations", in the left sidebar.

* Where it says **Enter the URL of the application you want to link**, enter any URL you want, for example, `http://example.com/`. Then click **Create new link**.

* You will likely see a warning starting with: **No response was received from the URL you entered**. You can ignore the warning; click **Continue**.

* Fill out the form as you see here, or as you like. None of the data entered here really matters, except to make sure that **Create incoming link** is checked. The **Application Name** can be whatever name works best for you to identify the link. Then click **Continue**.

![Create Jira Server Application Link](../assets/images/CreateJiraServerApplicationLink1.png)

* On the next dialog, enter any unique string you want for the **Consumer Key**. It does not need to be secure or encoded, just something fairly easy to remember. Make a note of what you enter here; it will be needed when you go to set up the integration with Jira Server from CodeStream. For **Consumer Name**, you can enter anything meaningful to you, like "CodeStream app". The important field to fill out correctly is **Public Key**; for this you will want to copy the full text of the contents of the **jira_publickey.pem** file you created in Step #1. Paste this into the **Public Key** field, then click **Continue**.

![Jira Server Link Applications](../assets/images/JiraServerLinkApplications1.png)

* The application link you created should now show like this:

![Jira Server Application Link Created](../assets/images/JiraServerApplicationLinkCreated1.png)

## Set up the integration in CodeStream

Now you are ready to set up the integration from CodeStream to Jira Server for your team, using the application link you just created. Assuming you have signed up for CodeStream and have the extension open in your IDE:

* In CodeStream, go to the Integrations panel by clicking the menu next to your username in the top-left. Then click **Jira Server** under "Issue Providers".

* Since you will not be using API Tokens with your Jira Server integration, you'll need to click at the top where it says "Click here if you organization uses a version of Jira Server older than..." to configure Jira Server using the OAuth method described herein.

* Fill out the form as follows. For **Jira Server Base URL**, enter the URL used to access your Jira Server installation as known to your internal network, in the form http(s)://host:port. For **Consumer Key**, use the "consumer key" you entered when created the application link, from Step #2, above. Then copy the full contents of the private key, in PCKS8 format, that you created in Step #1 above. The file should be called **jira_privatekey.pcks8**. Paste those contents into the **Private Key** field, then click **Submit**.

![Configure Jira Server](../assets/images/ConfigureJiraServer1.png)

* You'll then be taken to your Jira Server instance, where you'll approve access to your account using the application link. When you are finished, return to your IDE and you should see something similar to this:

![Completed Jira Server Integration](../assets/images/CompletedJiraServerIntegration1.png)

* Now that the integration has been set up for your team, other users will NOT have to go through the process described above. Other users on your team will see the integration with your Jira Server (specified by host) alongside other available integrations. Initiating this integration will only require your other users to allow the CodeStream application link to access their account, as you did in the final step.
