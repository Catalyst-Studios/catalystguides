---
title: Annotations
description: How to use annotations with Catalyst Guides!
icon: material/plus-circle
---

# Annotations

You can add little markers called annotations almost anywhere in a document and expand a tooltip containing arbitrary Markdown on click or keyboard focus.

## Using Annotations

Annotations consist of two parts: a marker (1, 2, 3, etc.), which can be placed anywhere in a block marked with the `{ .annotate }` class, and content located in a list below the block containing the marker

```
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit. 
{ .annotate }

1. :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.
```
<div class="result" markdown>
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1. :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.
</div>

---

### In Annotations

You can nest annotations inside other annotations!

```
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1. :man_raising_hand: I'm an annotation! (1)
    { .annotate }

    1. :woman_raising_hand: I'm an annotation as well!
```
<div class="result" markdown>
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1. :man_raising_hand: I'm an annotation! (1)
    { .annotate }

    1. :woman_raising_hand: I'm an annotation as well!
</div>

---

### In Admonitions

You can put annotations within [admonitions](admonitions.md) as well!

```
!!! note annotate "Title with annotation (1)"

    Lorem ipsum dolor sit amet, (2) consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

1. :man_raising_hand: I'm an annotation in the title!
2. :woman_raising_hand: I'm an annotation as well!
```
<div class="result" markdown>
!!! note annotate "Title with annotation (1)"

    Lorem ipsum dolor sit amet, (2) consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.

1. :man_raising_hand: I'm an annotation in the title!
2. :woman_raising_hand: I'm an annotation in the admonition body!
</div>

---

### In Content Tabs

You can put annotations in [content tabs](contenttabs.md) by adding the `{ .annotate }` class to the block of a content tab.

```
=== "Tab 1"

    Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
    { .annotate }

    1. :man_raising_hand: I'm an annotation!

=== "Tab 2"

    Phasellus posuere in sem ut cursus (1)
    { .annotate }

    1. :woman_raising_hand: I'm an annotation as well!
```
<div class="result" markdown>
=== "Tab 1"

    Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
    { .annotate }

    1. :man_raising_hand: I'm an annotation!

=== "Tab 2"

    Phasellus posuere in sem ut cursus (1)
    { .annotate }

    1. :woman_raising_hand: I'm an annotation as well!
</div>
---
