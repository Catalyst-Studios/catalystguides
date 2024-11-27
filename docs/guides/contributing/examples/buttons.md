---
title: Buttons
description: How to use buttons in Catalyst Guides!
icon: material/button-pointer
---

# Buttons

Material for MkDocs provides dedicated styles for primary and secondary buttons that can be added to any link.

## Usage

To render a button, suffix it with the `{ .md-button }` class.

```
[This is a button!](https://example.com){ .md-button }
```
<div class="result" markdown>
[This is a button!](https://example.com){ .md-button }
</div>

---

### Adding Primary Buttons

To make a primary button, simply suffix the link with `{ .md-button .md-button--primary }`

```
[This is a primary button!](https://example.com){ .md-button .md-button--primary }
```
<div class="result" markdown>
[This is a primary button!](https://example.com){ .md-button .md-button--primary }
</div>

---

### Adding Icons to Buttons

You can also use icons to buttons by using [icon syntax](iconsemojis.md)

```
[Button with Icon :material-motion-outline:](https://example.com){ .md-button }
```
<div class="result" markdown>
[Button with Icon :material-motion-outline:](https://example.com){ .md-button }
</div>
