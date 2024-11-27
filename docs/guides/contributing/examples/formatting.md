---
title: Formatting
description: This page contains all the formatting options you can use within Catalyst Guides!
icon: material/format-clear
---

# Formatting

## Adding Hyperlinks

You can add links to other Catalyst Guide pages or to websites using:

You can add [links to images](images.md#images-with-links) as well!

!!! warning "Website links must have the [Scheme and Subdomain](https://www.geeksforgeeks.org/components-of-a-url/) to work!"

```
[Click to visit Example!](https://www.example.com/)

[How to Contribute!](../README.md)
```
<div class="result" markdown>
[Click to visit Example!](https://www.example.com/)

[How to Contribute!](../README.md)
</div>

---

## Highlighting Changes

![Yes, this is an image. Using code blocks would still render formatting, so this is my workaround.](img/hlChangesLight.png#only-light)
![Yes, this is an image. Using code blocks would still render formatting, so this is my workaround.](img/hlChangesDark.png#only-dark)

Text can be {--deleted--} and replacement text {++added++}. This can also be
combined into {~~one~>a single~~} operation. {==Highlighting==} is also
possible {>>and comments can be added inline<<}.

{==

Formatting can also be applied to blocks by putting the opening and closing
tags on separate lines and adding new lines between the tags and the content.

==}

---

## Highlighting Text

You can highlight text with a simple syntax that's is more convient than usual HTML tags.

```
==This was marked (highlight)==

^^This was inserted (underline)^^

~~This was deleted (strikethrough)~~

```
<div class="result" markdown>
==This was marked (highlight)==

^^This was inserted (underline)^^

~~This was deleted (strikethrough)~~
</div>

---

## Sub and Superscripts

Text can be subscripted (below) or superscripted (above) using simple syntax.

```
H~2~O

2^X^
```
<div class="result" markdown>
H~2~O

2^X^
</div>

---

## Adding keyboard keys

Using the below syntax, you can render keyboard keys and mouse buttons.

You can see shortcodes at [Python Markdown Extensions](https://facelessuser.github.io/pymdown-extensions/extensions/keys/#extendingmodifying-key-map-index)

```
++ctrl+alt+del++

++print-screen+eject+caps-lock++

++left-button+middle-button+right-button++
```
<div class="result" markdown>
++ctrl+alt+del++

++print-screen+eject+caps-lock++

++left-button+middle-button+right-button++
</div>

---

## Tool Tips

You can add tool tips to text that can contain links if you'd like!

```
[Hover me](https://example.com "I'm a tooltip!")
```
<div class="result" markdown>
[Hover me](https://example.com "I'm a tooltip!")
</div>

You can also add tooltips to [Icons](iconsemojis.md)!

```
:material-information-outline:{ title="Important information" }
```
<div class="result" markdown>
:material-information-outline:{ title="Important information" }
</div>

---

### Adding Abbreviations

Abbreviations can be defined by using a special syntax, starting with a `*` and immediately followed by the term or acronym to be associated in square brackets.

``` markdown title="Text with abbreviations"
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```
<div class="result" markdown>
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
</div>

---

### Adding a Glossary

You can add a glossary or footnotes to text that will be displayed at the bottom of the current page and is clickable in both directions.

```
Nuclear fission[^1] is a reaction in which the nucleus[^2] of an atom splits into two or more smaller nuclei.

[^1]:
    This term will be added to the bottom of the current page and is clickable.
[^2]:
    This is also some term at the bottom of the page.
```
<div class="result" markdown>
Nuclear fission[^1] is a reaction in which the nucleus[^2] of an atom splits into two or more smaller nuclei.

[^1]:
    This term will be added to the bottom of the current page and is clickable.
[^2]:
    This is also some term at the bottom of the page.
</div>

---

## Adding Hidden Comments

You can add comments for other contributors that will be hidden on the live Catalyst site.

```
<!--- This comment will not be rendered in the final HTML file. --->

<!--- 
This multiline comment will also 
not be rendered in the final HTML file. 
--->
```
<div class="result" markdown>
<!--- This comment will not be rendered in the final HTML file. --->

<!--- 
This multiline comment will also 
not be rendered in the final HTML file. 
--->
</div>

The two comment methods will show in `View Source`, if you don't want that you can use this format to have truly hidden comments.

```
[//]: # (This comment will not show in the final HTML or "View Source")
```
<div class="result" markdown>
[//]: # (This comment will not show in the final HTML or "View Source")
</div>
