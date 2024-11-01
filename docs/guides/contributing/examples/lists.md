---
title: Lists
description: How to use lists in Catalyst Guides!
icon: material/format-list-bulleted
---

# Lists

## Unordered Lists

a

## Ordered Lists

a

```
1)  Item 1
2)  Item 2
    i.  Item 1
    ii. Item 2
        a.  Item a
        b.  Item b
```
<div class="result" markdown>
1)  Item 1
2)  Item 2
    i.  Item 1
    ii. Item 2
        a.  Item a
        b.  Item b
</div>

---

### Custom Ordered Lists

You can also create custom ordered lists.

| List Type Name | Value |
| -------------- | ----- |
| Decimal | 1 |
| Lowercase Alphabetical | a |
| Uppercase Alphabetical | A |
| Lowercase Roman Numeral | i |
| Uppercase Roman Numeral | I |

```
/// fancylists | type=a start=9
1. item i
2. item j
///
```

<div class="result" markdown>
/// fancylists | type=a start=9
1. item i
2. item j
///
</div>

---

1) Item 1
2) Item 2
    i. Item 1
    ii. Item 2

---
-   Item 1
-   Item 2
1.  Item 1
2.  Item 2
---
1.  Item 1
2.  Item 2
3)  Item 1
4)  Item 2
---

## Definition Lists

With definition lists you can define an arbitrary number of key-value pairs such as word/definition or parameters of functions/modules.

```
`Usurp`

: To seize and hold (office, place, functions, powers, etc.) 
    in possession by force or without right.

    > *Usurp* a throne.

`Intransigent`

: Characterized by refusal to compromise or to abandon an 
often extreme position or attitude.

    > He has remained *intransigent*, refusing all 
    suggestions for improvement of the project.
```
<div class="result" markdown>
`Usurp`

: To seize and hold (office, place, functions, powers, etc.) 
    in possession by force or without right.

    > *Usurp* a throne.

`Intransigent`

: Characterized by refusal to compromise or to abandon an 
often extreme position or attitude.

    > He has remained *intransigent*, refusing all 
    suggestions for improvement of the project.
</div>

## Task Lists

You can have clickable list items by prefixing unordered list items with `[ ]` to render an unchecked box or `[x]` to render a checked box.

```
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
```
<div class="result" markdown>
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
</div>
