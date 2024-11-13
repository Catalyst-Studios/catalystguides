---
title: Content Tabs
description: How to use content tabs in Catalyst Guides!
icon: material/tab
---

# Content Tabs

## Grouping Code Blocks

The most common use of content tabs is to group together code blocks.

```
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```
<div class="result" markdown>
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
</div>

## Grouping Other Content

You can pretty much put whatever content you want inside a content tab!

```
=== "Unordered list"
    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

=== "Some other content"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod 
    nulla. Curabitur feugiat, tortor non consequat finibus.
```
<div class="result" markdown>
=== "Unordered list"
    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"
    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

=== "Some other content"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod 
    nulla. Curabitur feugiat, tortor non consequat finibus.
</div>

## Embedded Content

You can also put content tabs within [admonitions!](admonitions.md)

```
!!! example
    === "Unordered List"
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci

    === "Ordered List"
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
```
<div class="result" markdown>
!!! example
    === "Unordered List"
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci

    === "Ordered List"
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
</div>
