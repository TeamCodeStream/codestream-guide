---
title: Where can I find my client-side logs?
description: 
---

As part of submitting a bug report on our
[GitHub](https://github.com/TeamCodeStream/CodeStream/issues) it would be very
helpful if you also included log files. Below are instructions for getting log
files based on which IDE you're using. You can attach the log files to the
GitHub issue, or if you’d prefer, you can email them to support@codestream.com
and reference the GitHub issue number in the subject.

**JetBrains**
<!--- Go to Help > Diagnostic Tools > Debug Log Settings… in your IDE.
- In the "Custom Debug Log Configuration" dialog, add `#com.codestream:trace`
  and then click OK. (Note that you can remove this after you’ve sent us the log
  files so that logging isn't as verbose.)
- Restart the IDE.-->
- Reproduce the issue and then in your IDE go to Help > Collect Logs and
  Diagnostic Data. This will open the finder where you should see a newly
  created zip file.

**VS Code**
- Reproduce the issue and then open the Output view in VS Code (“View: Toggle
  Output” from the command palette) and select "CodeStream (Agent)" from the
  dropdown menu at the top-right. Copy all of the output you see and save it in
  a text file.

**Visual Studio**
- Go to Tools > Options > CodeStream and make sure your log level is set to at
  least `Debug`. If it is set to `Info`, `Errors`, or `Silent`, change it to
  `Debug`, then restart Visual Studio.
- Reproduce the issue.
- Grab vs-extension.log and vs-agent.log from `%localappdata%\CodeStream\Logs`
  as well as the ActivityLog.xml from
  `%AppData%\Microsoft\VisualStudio\16.0_<RandomText>` for Visual Studio 2019 or
  `%AppData%\Microsoft\VisualStudio\15.0_<RandomText>` for Visual Studio 2017
