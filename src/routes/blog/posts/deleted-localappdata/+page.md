---
title: When I deleted Local AppData...
description: Now what?
thumbnail: /blog-resources/deleted-localappdata/thumbnail.png
date: 2021-12-18
author: dongle-the-gadget
---

So... I accidentally deleted my Local AppData folder, while trying to delete some temporary files to free up some space.

**Note:** Before I start, I want to mention that I didn't take screenshot for most of the things I will be mentioning, so please bear with me.

## First impressions
Firstly, Explorer seemed to crash much more frequently than it used to.

Secondly, Edge lost its taskbar icon.

<figure class="margin-bottom">
    <img src="/blog-resources/deleted-localappdata/edge-icon.png" alt="A screenshot of Edge's task list, with the icon being a blank file.">
    <figcaption>Edge without its icon.</figcaption>
</figure>

## The app situation

### Windows

The Start menu got its pinned app section and recommended section completely reset.

Widgets just completely broke down until I reset it. Most apps however, may experience problems on the first launch after the deletion, but works fine afterwards.

Taskbar flyout elements like Control Center and Notification Center all got rather crashy.

### Electron apps

All Electron apps doesn't work, of course, since I deleted `Update.exe` (Squirrel updater), which is used to launch pretty much all Electron apps.

However, when I went to install Teams and Discord, it looked like Windows got confused and this happened.

<figure class="margin-bottom">
    <img src="/blog-resources/deleted-localappdata/discord.png" alt="A shortcut labeled Discord (work or school).">
    <figcaption>A shortcut labeled Discord (work or school).</figcaption>
</figure>

I then installed Visual Studio Code (Insiders) instead of the Stable version I was using, and I got this surprise:

<figure class="margin-bottom">
    <img src="/blog-resources/deleted-localappdata/vscode-empty.png" alt="Windows open with popup, showing an entry for Visual Studio Code with no icon.">
    <figcaption>VSCode is dead...</figcaption>
</figure>

### Packaged apps

Packaged apps are rather hit or miss. Microsoft Store, for instance, worked completely fine. 2fast, however, repeatedly failed to access the datafile until I reinstalled the app (if I recall correctly, twice). The application data all got wiped though, that's for sure.

Packaged applications I installed through `Add-AppxPackage -Register` though just straight up required a reinstall.

Teams Personal (sometimes called Teams v2) signed me out and required me to enter my account information again.

### Other apps

Edge? It showed the OOBE again.

PowerToys also got every setting reset.

Fiddler Classic went completely missing, I had to reinstall it.

Same fate with ILSpy.

The Microsoft 365 (formely Office) suite of apps is a little bit interesting. The app reverted back to the old design, for a start. I was also signed out off all of my organizational account that I signed in using Connected Services. Trying to sign back in just gave me Error Code 1001. However, when I tried to access an organizational resource and entered in my credentials when the app open, it works fine (?!)