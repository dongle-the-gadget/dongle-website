---
title: Why is String.Length returning the wrong value in C#?
description: "Spoiler: String.Length is probably not what you think it is."
thumbnail: /blog-resources/csharp-string-length/thumbnail.png
date: 2023-02-09
author: dongle-the-gadget
---

If you have ever tried to handle Unicode characters in C#, you might have wondered why is it that `String.Length` returns the completely wrong result? Like the example above, 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠 (for those with screen readers, the word is "anything" in bold Unicode characters) apparently has a length of 16, when there are only 8 characters?

Well the answer is, `String.Length` doesn't really count the characters.

## Wait what?!
Well, let's see what [the documentation](https://learn.microsoft.com/en-us/dotnet/api/system.string.length) says.
> Gets the number of characters in the current String object.

Well it says "gets the number of characters", so what's the problem here?

Scroll down until you get to the Remarks section, and this is what you will find:
> The Length property returns the number of Char objects in this instance, not the number of Unicode characters. The reason is that a Unicode character might be represented by more than one Char.

## How do we get the number of characters, then?

The mystery is solved now, but a new question arises: "How do we get the true length of a String?"

Luckily, the Remarks section also provides us the answer:
> Use the `System.Globalization.StringInfo` class to work with each Unicode character [...]