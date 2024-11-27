---
title: Code Blocks
description: How to format code blocks in Catalyst Guides!
icon: material/code-block-braces
---

# Code Blocks

Material for MkDocs provides different ways to set up syntax highlighting for code blocks and comes with a copy code button.

## Code Block Usage

```` markdown title="Code block"
``` py
import tensorflow as tf
```
````
<div class="result" markdown>
``` py
import tensorflow as tf
```
</div>

---

### Adding a tile

You can add a title to the code block by suffixing `title="titleName"` after the shortcode.

```` markdown title="Code block with title"
``` py title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````

<div class="result" markdown>

``` py title="bubble_sort.py"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

</div>

---

### Adding Line Numbers

Line numbers can be added to a code block by by suffixing `linenums="<start>"` after the shortcode. `<start>` represents the starting line number. A code block can start from a line number other than `1`.

```` markdown title="Code block with line numbers"
``` py linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````
<div class="result" markdown>

``` py linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

</div>

---

### Highlighting specific lines

Specific lines can be highlighted by passing the line numbers to the `hl_lines` argument placed right after the language shortcode. Note that line counts start at `1`, regardless of the starting line number specified as part of [`linenums`](#adding-line-numbers):

=== "Lines"

    ```` markdown title="Code block with highlighted lines"
    ``` py hl_lines="1 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    ````
    <div class="result" markdown>

    ``` py linenums="1" hl_lines="1 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

    </div>

=== "Line ranges"

    ```` markdown title="Code block with highlighted line range"
    ``` py hl_lines="3-5"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    ````
    <div class="result" markdown>

    ``` py linenums="1" hl_lines="3-5"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

    </div>

---

### Highlighting inline code blocks

Syntax highlighting can be applied to inline code blocks by prefixing them with a `#!`, directly followed by the corresponding [language shortcode](https://pygments.org/docs/lexers/).

``` markdown title="Inline code block"
The `#!python range()` function is used to generate a sequence of numbers.
```
<div class="result" markdown>

The `#!python range()` function is used to generate a sequence of numbers.

</div>
