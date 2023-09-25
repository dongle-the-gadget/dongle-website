---
title: The mystery of broken UWP audio playback
description: It took me nine months...
thumbnail: /blog-resources/uwp-audio-playback/thumbnail.png
date: 2023-09-25
author: dongle-the-gadget
---

It's been a while since I last wrote a blog post, so I'm writing one now!

## The "symptoms"
It all started since December last year (maybe even earlier, I don't remember) when I noticed that the Media Player app would somehow not play music. It was literally stuck at the beginning, unable to play anything.

I tried the most famous "fix" for all computer problems: turning it off and on again. Restarting the app did nothing, but apparently restarting the computer worked, so I thought it was just an intermittent issue.

Boy, was I wrong. It would play music for some time, before refusing to work **again**. Restarting the computer still worked, but only for a while.

After that, I tried playing music with the Microsoft Edge browser and the Windows Media Player Legacy app. Both worked, even as the Media Player app was refusing to work.

Some other apps I tried were myTube and Ambie White Noise, and they seemed to suffer the same issue. What's the common denominator between myTube, Ambie and Media Player? They were all UWP apps, and they all used the `Windows.Media.Playback.MediaPlayer` API to play music and videos.

## First attempt to fix: Shell Infrastruce Host

Having known that, I asked on the UWP Community Discord server: "Does anyone have UWP audio playback randomly failing?" and got a response:

<figure class="margin-bottom">
    <img src="/blog-resources/uwp-audio-playback/uwpc-chat.png" alt="A screenshot of a Discord conversation I had with Ahmed Walid in the UWP Community server. Ahmed recommended that I restart SiHost.exe.">
    <figcaption>Ahmed Walid recommending me restart SiHost.exe</figcaption>
</figure>

Unfortunately, the `SiHost.exe` restarting trick didn't work. Audio still failed to play through Media Player.

## Second attempt: Maybe it was the drivers?

Around July or August, something clicked in my head: maybe it was the drivers (I don't remember why I thought of the drivers, but it happened). I decided to open Device Manager, listed out all of my sound drivers and disabled them randomly.

<figure class="margin-bottom">
    <img src="/blog-resources/uwp-audio-playback/drivers.png" alt="List of sound drivers I have on my install.">
    <figcaption>List of sound drivers I have on my install.</figcaption>
</figure>

Lo and behold, seemed like restarting the AMD sound driver worked...

**It had me fooled**. It would fail again, and restarting the AMD driver didn't work. So maybe it was the Realtek one? I tried, but Windows would prompt me to restart my PC, which was pointless (since every restart makes it work, so I would have no way to know for sure).

## Even more evidence that it was a UWP issue
In September, I tried playing some music through FlairMax's YouTube player (which is UWP and is made by Ahmed Walid - how many times have I mentioned him), and it didn't work: The slider would jump to the end of the song.

I messaged Ahmed about this, and his first clue is that YouTube broke the decryption scheme the app was using.

<figure class="margin-bottom">
    <img src="/blog-resources/uwp-audio-playback/ahmed-dm-1.png" alt="Direct message conversation with Ahmed Walid about YouTube playback not working on FlairMax. Ahmed suspected it was an encryption issue.">
    <figcaption>Direct message conversation with Ahmed Walid about YouTube playback not working on FlairMax. Ahmed suspected it was an encryption issue.</figcaption>
</figure>

I then tried to use a US VPN, as he suggested. No progress. I then asked him how to check if a particular song is encrypted, and whether he knew any unencrypted song. He said no for the second question, but gave me the instructions for the first.

Maybe I was lucky, I managed to find [one unencrypted song](https://youtu.be/DhI246hBEA0). I tried it and... it was stuck at the beginning of the song. I initially thought that was because FlairMax's YouTube was totally broken on my machine. Until the unencrypted song worked again...

<figure class="margin-bottom">
    <img src="/blog-resources/uwp-audio-playback/ahmed-dm-2.png" alt="Direct message conversation with Ahmed Walid. I said that YouTube playback seemed to be entirely broken for both encrypted and non-encrypted songs, but then the unencrypted song started working again.">
    <figcaption>Direct message conversation with Ahmed Walid. I said that YouTube playback seemed to be entirely broken for both encrypted and non-encrypted songs, but then the unencrypted song started working again.</figcaption>
</figure>

**P.S.** Encrypted songs still fail to play on my machine.

## Third attempt: Google-fu at play

Well, just about a week ago (by the time I was writing this article), I went on Google in search of how to actually fix this issue. One of the results said to disable "hardware accelerated audio".

<figure class="margin-bottom">
    <img src="/blog-resources/uwp-audio-playback/hardware-setting.png" alt="The hardware accelerated sound toggle in Control Panel.">
    <figcaption>The hardware accelerated sound toggle in Control Panel.</figcaption>
</figure>

I tried it, and **it now works!** Marvellously, in fact, no longer are UWP apps failing to play audio on my machine.

**Small talk:** Isn't hardware-acclerated audio deprecated?
