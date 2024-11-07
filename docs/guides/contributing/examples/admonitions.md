---
title: Admonitions
description: Examples of all admonitions!
icon: material/alert-outline
---

# Admonitions

## Usage

Admonitions follow a simple syntax: `!!!` followed by a [type qualifier](#admonition-types), the content is then put on the next line with an indent ++tab++.

```
!!! question
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod 
    nulla. Curabitur feugiat, tortor non consequat finibus.
```
<div class="result" markdown>
!!! question
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus.
</div>

---

### Changing the Title

You can change the title by adding a quoted string. You can use Markdown in your titles (links, formatting, etc.).

```
!!! tip "Whatever Title You Want"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
<div class="result" markdown>
!!! tip "Whatever Title You Want"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

---

### Removing the Title

You can completely remove the title and only render an outline by adding an empty string after `!!!`

```
!!! example ""
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
<div class="result" markdown>
!!! example ""
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

---

### Collapsible Blocks

You can have a collapsible block using `???`. 

```
??? note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
<div class="result" markdown>
??? note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

You can also force the expansion of the block using `???+`

```
???+ note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```
<div class="result" markdown>
???+ note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

---

### Nestable Admonitions

You can add admonitions that are nested inside of each other.

???+ ghdesk
    ???+ vsc
        ??? note
            ??? abstract
                ??? info
                    ??? tip
                        ??? success
                            ??? question
                                ??? warning
                                    ??? failure
                                        ??? danger
                                            ??? bug
                                                ??? example
                                                    [Click me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---

### Inline Blocks

=== ":octicons-arrow-right-16: inline end"
    !!! info inline end "Admonition on the Right"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline end "Admonition on the Right"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```
    You can place admonitions as inline blocks on the right using `inline end` or left using `inline`.

=== ":octicons-arrow-left-16: inline"
    !!! info inline "Admonition on the Left"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

    ``` markdown
    !!! info inline "Admonition on the Left"

        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla et euismod nulla.
        Curabitur feugiat, tortor non consequat
        finibus, justo purus auctor massa, nec
        semper lorem quam in massa.
    ```
    You can place admonitions as inline blocks on the right using `inline end` or left using `inline`.

---

## Admonition Types

- Note
- Abstract
- Info
- Top
- Success
- Question
- Warning
- Failure
- Danger
- Bug
- Example
- Quote
- GHDesk
- VSC

### Note

??? note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Abstract

??? abstract
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Info

??? info
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Tip

??? tip
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Success

??? success
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Question

??? question
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Warning

??? warning
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Failure

??? failure
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Danger

??? danger
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Bug

??? bug
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Example

??? example
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### Quote

??? quote
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### GHDesk

??? ghdesk
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

### VSC

??? vsc
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.
