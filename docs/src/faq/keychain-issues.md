---
title: Why do I have to sign into CodeStream every time I restart my JetBrains IDE?
description:
---

If you have to sign into CodeStream every time you restart your JetBrains IDE,
or open a new project, it is likely that the IDE is not saving and/or retrieving
the authentication token from your local password safe. The following article
provides details on how you can check to make sure that it is properly
configured.

https://www.jetbrains.com/help/idea/reference-ide-settings-password-safe.html

For example, if you're on a Mac the “in native Keychain” option is the one you'd
want to use, as depicted in the screenshot below.

![Passwords](../assets/images/JBPasswords.png)

If native keychain is already selected, it's also possible that the first time
you were prompted to allow the IDE keychain access that you denied it. If that's
the case, you can go into the Keychain Access app and correct it.

![Keychain Access](../assets/images/KeychainAccess.png)
